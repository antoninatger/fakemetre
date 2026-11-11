/* ═══════════════════════════════════════════════════════════════════
   FakeMètre · Ambiance (11 novembre 2026) : sons et lecture à voix haute

   - Des sons brefs, synthétisés (aucun fichier audio) : une source qu'on
     ouvre, un jugement juste ou faux, le verdict, la fin de partie. Le
     bouton 🔊 de la barre de score les coupe ; le choix est retenu.
   - Un bouton « Écouter » sous l'affirmation et dans chaque source, qui
     lit le texte avec la voix du navigateur. Utile aux plus jeunes et aux
     élèves qui lisent difficilement. Rien n'est lu sans qu'on le demande.

   Le fichier se branche sur index.html en enveloppant quelques fonctions.
   S'il manque, le jeu fonctionne comme avant.
   ═══════════════════════════════════════════════════════════════════ */
(function(){
'use strict';
if(typeof submitV!=='function' || typeof $!=='function') return;
const EN = () => (typeof lang!=='undefined' && lang==='en');
const L = (fr,en) => EN() ? en : fr;

// ── Sons ───────────────────────────────────────────────────────────
const CLE_SON = 'fakemetre_son';
let sonActif = true;
try{ sonActif = localStorage.getItem(CLE_SON) !== 'non'; }catch(e){}
let ctx = null;
function audio(){
  if(!sonActif) return null;
  const AC = window.AudioContext || window.webkitAudioContext;
  if(!AC) return null;
  try{ if(!ctx) ctx = new AC(); if(ctx.state==='suspended') ctx.resume(); }catch(e){ return null; }
  return ctx;
}
// Une note : fréquence (Hz), départ (s), durée (s), forme d'onde, volume.
function note(f, quand, duree, forme, vol){
  const c = audio(); if(!c) return;
  try{
    const o = c.createOscillator(), g = c.createGain(), t0 = c.currentTime + quand;
    o.type = forme || 'sine'; o.frequency.setValueAtTime(f, t0);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol || 0.12, t0 + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + duree);
    o.connect(g); g.connect(c.destination);
    o.start(t0); o.stop(t0 + duree + 0.02);
  }catch(e){}
}
const SONS = {
  ouvrir:  () => note(520, 0, .07, 'triangle', .06),
  juste:   () => { note(660, 0, .1, 'triangle'); note(880, .09, .16, 'triangle'); },
  rate:    () => { note(220, 0, .16, 'sawtooth', .05); note(175, .12, .22, 'sawtooth', .05); },
  bravo:   n => { [523,659,784].forEach((f,i) => note(f, i*.09, .16, 'triangle'));
                  if(n>=3) note(1047, .27, .28, 'triangle'); },
  dommage: () => { note(330, 0, .16, 'sine', .1); note(262, .14, .3, 'sine', .1); },
  fin:     () => [523,659,784,1047,784,1047].forEach((f,i) => note(f, i*.11, .2, 'triangle'))
};
function son(nom, arg){ try{ SONS[nom](arg); }catch(e){} }

// ── Voix ───────────────────────────────────────────────────────────
const synth = ('speechSynthesis' in window && 'SpeechSynthesisUtterance' in window) ? window.speechSynthesis : null;
let boutonQuiParle = null;
function taire(){
  if(synth){ try{ synth.cancel(); }catch(e){} }
  if(boutonQuiParle){ boutonQuiParle.classList.remove('parle'); boutonQuiParle.textContent = boutonQuiParle.dataset.repos; boutonQuiParle = null; }
}
function nettoyer(txt){
  // On retire les émojis et les guillemets, que certaines voix épellent.
  return String(txt||'').replace(/<[^>]+>/g,' ').replace(/[«»"“”]/g,' ')
    .replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}]/gu,' ').replace(/\s+/g,' ').trim();
}
function lire(txt, bouton){
  if(!synth) return;
  const dejaLui = boutonQuiParle === bouton;
  taire();
  if(dejaLui) return;               // un second appui arrête la lecture
  const u = new SpeechSynthesisUtterance(nettoyer(txt));
  u.lang = EN() ? 'en-GB' : 'fr-FR'; u.rate = .95;
  try{
    const v = synth.getVoices().find(v => v.lang && v.lang.toLowerCase().startsWith(EN()?'en':'fr'));
    if(v) u.voice = v;
  }catch(e){}
  boutonQuiParle = bouton; bouton.classList.add('parle'); bouton.textContent = L('⏹ Arrêter','⏹ Stop');
  u.onend = u.onerror = () => { if(boutonQuiParle === bouton) taire(); };
  try{ synth.speak(u); }catch(e){ taire(); }
}
function boutonEcouter(id, texte){
  const b = document.createElement('button');
  b.type = 'button'; b.id = id; b.className = 'ecouter-btn';
  b.dataset.repos = L('🔈 Écouter','🔈 Listen'); b.textContent = b.dataset.repos;
  b.onclick = () => lire(texte(), b);
  return b;
}

// ── Mise en place ──────────────────────────────────────────────────
function installer(){
  // Le bouton du son, au bout de la barre de score
  const sb = $('scorebar');
  if(sb && !$('son-btn')){
    const b = document.createElement('button');
    b.type = 'button'; b.id = 'son-btn'; b.className = 'son-btn';
    const maj = () => { b.textContent = sonActif ? '🔊' : '🔇';
      b.setAttribute('aria-label', sonActif ? L('Couper le son','Mute sounds') : L('Remettre le son','Unmute sounds'));
      b.title = b.getAttribute('aria-label'); b.setAttribute('aria-pressed', String(!sonActif)); };
    b.onclick = () => { sonActif = !sonActif; try{ localStorage.setItem(CLE_SON, sonActif?'oui':'non'); }catch(e){} maj(); if(sonActif) son('juste'); };
    maj(); sb.appendChild(b);
  }
  if(!synth) return;
  // « Écouter » sous l'affirmation
  const carte = document.querySelector('#game .scard');
  if(carte && !$('ecouter-aff')) carte.appendChild(boutonEcouter('ecouter-aff', () => $('stxt').textContent));
  // « Écouter » dans la fenêtre d'une source : son nom, ce qu'elle est, ce qu'elle dit
  const desc = $('msdesc');
  if(desc && !$('ecouter-src')){
    desc.insertAdjacentElement('afterend', boutonEcouter('ecouter-src', () => {
      const s = (typeof pend!=='undefined' && pend && pend.src) || {};
      const visible = el => el && el.offsetParent !== null;
      const dit = $('mssays');
      // Quand la source est une image dont le texte n'est pas encore révélé, on ne lit que ce qui est affiché.
      // La pastille (« Expert », « Forum »…) et la description sont collées dans le même bloc : on les lit séparément.
      const morceaux = [...$('msdesc').childNodes].map(n => n.textContent.trim()).filter(Boolean);
      return [$('msname').textContent, ...morceaux, (visible(dit) && s.say) ? s.say : ''].join('. ');
    }));
  }
}

// ── Enveloppes ─────────────────────────────────────────────────────
const _openSrc = openSrc;
openSrc = function(){ taire(); const r = _openSrc.apply(this, arguments); son('ouvrir'); return r; };

if(typeof trust==='function'){
  const _trust = trust;
  trust = function(){
    taire();
    const idx = (typeof pend!=='undefined' && pend) ? pend.idx : null;
    const r = _trust.apply(this, arguments);
    if(idx!==null) son(um[idx]==='ug' ? 'juste' : 'rate');   // en Apprenti, on sait tout de suite
    return r;
  };
}
if(typeof confirmLikert==='function'){
  const _confirmLikert = confirmLikert;
  confirmLikert = function(){ taire(); return _confirmLikert.apply(this, arguments); };
}
const _submitV = submitV;
submitV = function(){
  taire();
  const r = _submitV.apply(this, arguments);
  const h = gameHistory[gameHistory.length-1];
  if(h) h.wasCorrect ? son('bravo', typeof serie==='number' ? serie : 0) : son('dommage');
  return r;
};
const _renderQ = renderQ;
renderQ = function(){ taire(); return _renderQ.apply(this, arguments); };
const _showFinal = showFinal;
showFinal = function(){ taire(); const r = _showFinal.apply(this, arguments); son('fin'); return r; };
if(typeof hide==='function'){
  const _hide = hide;
  hide = function(id){ if(id==='msrc') taire(); return _hide.apply(this, arguments); };
}

installer();
})();
