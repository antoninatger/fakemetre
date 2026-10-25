/* ═══════════════════════════════════════════════════════════════════
   FakeMètre · Mode histoire « La Gazette du préau » (Apprenti Détective)
   Une semaine au club journal du collège : 5 jours, 5 rumeurs tirées au
   sort dans QUESTIONS_JUNIOR. Avant chaque question, une scène amène la
   rumeur ; après le verdict, une conséquence dans la Gazette. La jauge
   « confiance des lecteurs » décide de la fin (3 fins).

   Ce fichier se branche sur index.html sans le modifier en profondeur :
   il ajoute sa carte à l'écran des modes, ses écrans, et enveloppe
   chooseLevel, startGame, renderQ, submitV, showFinal, restart et
   backToMenu. S'il manque, le jeu fonctionne comme avant.
   Français seulement pour l'instant (la carte n'apparaît pas en anglais).
   ═══════════════════════════════════════════════════════════════════ */
(function(){
'use strict';
if(typeof startGame!=='function' || typeof QUESTIONS_JUNIOR==='undefined') return;

// ── Personnage ─────────────────────────────────────────────────────
const PEAUX   = ['#f9dcc4','#eec39a','#d19a6a','#a86b43','#6e4327'];
const CHEVEUX = ['#2b1b12','#6b3e1f','#b5651d','#e8c170','#c0392b','#8e5bd6'];
const COUPES  = [['courts','Courts'],['longs','Longs'],['boucles','Bouclés'],['couette','Queue-de-cheval']];
const HAUTS   = ['#4fa3f7','#3ecf8e','#f7c948','#f75f5f','#a855f7'];
const CLE = 'fakemetre_histoire_perso';

let perso = {prenom:'', genre:'f', peau:PEAUX[1], cheveux:CHEVEUX[1], coupe:'longs', lunettes:false, haut:HAUTS[0]};
try{ const s = JSON.parse(localStorage.getItem(CLE)||'null'); if(s && typeof s==='object') perso = Object.assign(perso, s); }catch(e){}
function sauverPerso(){ try{ localStorage.setItem(CLE, JSON.stringify(perso)); }catch(e){} }

const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const P  = () => esc(perso.prenom || 'Alex');       // prénom, échappé
const g  = (m, f) => perso.genre==='m' ? m : f;      // accord : g('prêt','prête')
const pick = a => a[Math.floor(Math.random()*a.length)];
// Tirage sans répétition : on épuise les variantes d'une liste avant d'en reprendre une
const _files = new Map();
function pickNR(a){ let f = _files.get(a); if(!f || !f.length){ f = shuf(a); _files.set(a, f); } return f.pop(); }

function avatarSVG(p, taille){
  p = p || perso; taille = taille || 96;
  const c = p.cheveux, peau = p.peau;
  let arriere = '', devant = '';
  if(p.coupe==='longs'){
    arriere = `<path d="M26 46 Q24 20 50 18 Q76 20 74 46 L76 78 Q64 84 50 84 Q36 84 24 78 Z" fill="${c}"/>`;
    devant  = `<path d="M28 44 Q30 22 50 22 Q70 22 72 44 Q62 34 48 32 Q38 36 28 44 Z" fill="${c}"/>`;
  } else if(p.coupe==='boucles'){
    const b = [[30,34],[38,24],[50,20],[62,24],[70,34],[26,46],[74,46]];
    devant = b.map(([x,y]) => `<circle cx="${x}" cy="${y}" r="9" fill="${c}"/>`).join('');
  } else if(p.coupe==='couette'){
    arriere = `<circle cx="76" cy="40" r="9" fill="${c}"/><path d="M74 36 Q86 44 80 62 Q76 54 72 46 Z" fill="${c}"/>`;
    devant  = `<path d="M28 44 Q30 20 50 20 Q72 20 72 42 Q60 32 44 32 Q34 36 28 44 Z" fill="${c}"/>`;
  } else {
    devant  = `<path d="M28 42 Q28 20 50 19 Q72 20 72 42 Q66 30 50 29 Q36 30 28 42 Z" fill="${c}"/>`;
  }
  const lunettes = p.lunettes ? `<g fill="none" stroke="#1b2433" stroke-width="2"><circle cx="41" cy="47" r="6.5"/><circle cx="59" cy="47" r="6.5"/><line x1="47.5" y1="47" x2="52.5" y2="47"/></g>` : '';
  return `<svg class="st-avatar" width="${taille}" height="${taille}" viewBox="0 0 100 100" aria-hidden="true">
    <circle cx="50" cy="50" r="49" fill="#1e3050"/>
    ${arriere}
    <path d="M18 100 Q20 76 50 74 Q80 76 82 100 Z" fill="${p.haut}"/>
    <rect x="44" y="62" width="12" height="14" rx="5" fill="${peau}"/>
    <circle cx="50" cy="46" r="22" fill="${peau}"/>
    ${devant}
    <circle cx="41" cy="47" r="2.6" fill="#1b2433"/><circle cx="59" cy="47" r="2.6" fill="#1b2433"/>
    <path d="M42 56 Q50 62 58 56" fill="none" stroke="#1b2433" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="35" cy="54" r="3.5" fill="#f28b82" opacity=".35"/><circle cx="65" cy="54" r="3.5" fill="#f28b82" opacity=".35"/>
    ${lunettes}
    <path d="M38 76 L50 90 L62 76" fill="none" stroke="#f7c948" stroke-width="2.4"/>
    <rect x="45" y="88" width="10" height="8" rx="1.5" fill="#fff"/>
  </svg>`;
}

// ── Récit ─────────────────────────────────────────────────────────
const JOURS = [
  {j:'Lundi',    h:'8 h 10'},
  {j:'Mardi',    h:'10 h 05'},
  {j:'Mercredi', h:'11 h 50'},
  {j:'Jeudi',    h:'13 h 20'},
  {j:'Vendredi', h:'15 h 30'},
];

// Comment la rumeur arrive. support : tel, papier, oral, video, magazine
const ARRIVEES = [
  {s:'tel',      t:() => `Dans la cour, Inès court vers toi, téléphone brandi : « ${P()} ! Tout le monde partage ça sur le groupe de la classe ! »`},
  {s:'oral',     t:() => `Au self, entre la purée et le yaourt, Tom se penche vers ta table : « Mon grand frère m'a dit un truc de fou. Écoute ça. »`},
  {s:'papier',   t:() => `Sur le panneau d'affichage du hall, quelqu'un a scotché une feuille écrite au feutre. Une grappe de 6e se bouscule devant.`},
  {s:'tel',      t:() => `Au CDI, Yanis, le photographe de la Gazette, glisse son téléphone vers toi : « Regarde ce que j'ai trouvé en ligne. Ça ferait une super une, non ? »`},
  {s:'papier',   t:() => `En cours de SVT, un petit mot plié passe de main en main jusqu'à toi. Dessus, une seule phrase, soulignée deux fois.`},
  {s:'video',    t:() => `Dans le bus, une vidéo tourne sur tous les écrans. Musique dramatique, titre qui clignote. Tout le monde a l'air convaincu.`},
  {s:'magazine', t:() => `Devant les casiers, Lila te tend un magazine ouvert : « C'est écrit dedans, donc c'est forcément vrai, non ? »`},
  {s:'oral',     t:() => `À la récré, un attroupement s'est formé sous le préau. Au milieu, Noé raconte, très sûr de lui :`},
  {s:'papier',   t:() => `Dans la boîte à idées de la Gazette, un papier anonyme. L'écriture est pressée, avec trois points d'exclamation.`},
  {s:'oral',     t:() => `Mme Garnier, la prof d'EPS, lance en passant, sifflet autour du cou : « Tiens, vous devriez faire un article là-dessus ! »`},
  {s:'tel',      t:() => `Ton téléphone vibre : un message d'un numéro inconnu, transféré « plusieurs fois ». Il commence par « URGENT ».`},
  {s:'oral',     t:() => `Au club, Samir, en 4e, pose son sac et annonce : « J'ai une info exclusive pour la Gazette. Promis, c'est du lourd. »`},
];

// Qui te demande de trancher : w (qui), a (geste), d (réplique)
const DEMANDES = [
  {w:'Maëlle', a:'croise les bras.', d:() => `« Alors, ${P()}, on publie ou pas ? »`},
  {w:'Maëlle', a:'recopie la phrase dans son carnet.', d:() => `« Enquête, et reviens avec des sources. Ensuite, tu me dis si on publie. »`},
  {w:'Maëlle', a:'tapote sa montre.', d:() => `« Tu as jusqu'au bouclage pour vérifier. On publie ou pas ? »`},
  {w:'Maëlle', a:'lève un sourcil.', d:() => `« Ça sent le scoop… ou le piège. À toi de voir. »`},
  {w:'M. Ferrand', a:'le documentaliste, lève le nez de son écran.', d:() => `« Une info qui fait “waouh” mérite deux fois plus de vérifications. »`},
];

// Écho de la veille, selon ce qui s'est passé
const ECHOS = {
  pubVrai:   [`Ton article d'hier a fait le tour de la cour. Des 5e l'ont même recopié dans leur cahier.`, `Hier, la Gazette a publié une info vraie et bien vérifiée. Les lecteurs en redemandent.`],
  refusFaux: [`Hier, la rumeur a enflammé le groupe de la classe. La Gazette, elle, n'est pas tombée dans le piège.`, `Le journal du collège voisin a publié hier la fausse info que tu avais écartée. Ils ont dû s'excuser.`],
  pubFaux:   [`Depuis le rectificatif d'hier, certains élèves ricanent en passant devant le panneau de la Gazette. Il faut remonter la pente.`, `Hier, il a fallu corriger une erreur. Maëlle a punaisé le rectificatif elle-même, sans un mot.`],
  refusVrai: [`Le club sciences a affiché hier l'info que tu avais écartée, sources à l'appui. Maëlle a soupiré.`, `L'info d'hier était vraie, et c'est un autre journal qui l'a publiée. Scoop raté, mais la semaine continue.`],
};

// Conséquence du verdict, dans la modale du résultat
const SUITES = {
  pubVrai: [
    t => `Tu dis « on publie ». Le titre « ${t} » fait la une. M. Ferrand hoche la tête : « Vérifié, et vrai. C'est ça, le journalisme. »`,
    t => `Tu dis « on publie ». À midi, ton article « ${t} » est lu à voix haute à la table des 4e. Et cette fois, c'est une info vraie.`,
  ],
  refusFaux: [
    t => `Tu dis « on ne publie pas ». Bien vu : la rumeur fait le tour du collège… et la Gazette est le seul journal qui ne s'est pas trompé.`,
    t => `Tu dis « on ne publie pas », et tu proposes même un encadré « Vrai ou faux ? » pour démonter la rumeur. Maëlle adore l'idée.`,
    t => `Tu dis « on ne publie pas ». Maëlle raye la phrase de son carnet : « Une fake news de moins dans nos pages. Merci, ${P()}. »`,
  ],
  pubFaux: [
    t => `Tu dis « on publie ». Le lendemain matin, une élève de 3e débarque à la rédaction avec la preuve que c'est faux. Il faut imprimer un rectificatif.`,
    t => `Tu dis « on publie ». Le titre « ${t} » circule… jusqu'à ce que la prof de SVT l'affiche dans sa classe, barré d'un gros FAUX au feutre rouge.`,
  ],
  refusVrai: [
    t => `Tu dis « on ne publie pas ». Le lendemain, le club sciences affiche la même info, sources à l'appui. C'était vrai : scoop raté !`,
    t => `Tu dis « on ne publie pas ». Maëlle soupire : « Se méfier, c'est bien. Mais une info vraie qu'on ne publie pas, nos lecteurs ne la sauront jamais. »`,
  ],
};
const DELTA = {pubVrai:+10, refusFaux:+10, pubFaux:-15, refusVrai:-10};

// ── État du mode histoire ─────────────────────────────────────────
const H = {on:false, confiance:50, dernier:null, arrivees:[], demandes:[], sceneFaite:-1};
window.FM_HISTOIRE = H;

function titreCourt(s){
  const m = String(s).match(/^.*?[.!?](?=\s|$)/);   // première phrase (sans « lookbehind », pour les vieux Safari)
  let t = (m ? m[0] : String(s)).replace(/[\s!.]+$/, '');
  if(t.length > 80) t = t.slice(0, 77).replace(/\s+\S*$/, '') + '…';
  return esc(t);
}

// ── Écrans ajoutés ────────────────────────────────────────────────
function injecter(){
  const cartes = document.querySelector('#modescreen .modecards');
  if(cartes && !$('st-card-mode')){
    const d = document.createElement('div');
    d.className = 'modecard st-mode'; d.id = 'st-card-mode';
    d.tabIndex = 0; d.setAttribute('role','button');
    d.innerHTML = `<span class="st-new">Nouveau</span><span class="mc-icon">📖</span>
      <div><div class="mc-title">Mode histoire</div>
      <div class="st-mode-sub">La Gazette du préau</div>
      <div class="mc-desc">Deviens reporter du journal du collège.<br>5 jours, 5 rumeurs : à toi de dire si on publie !</div></div>`;
    d.onclick = ouvrirCreation;
    d.onkeydown = e => { if(e.key==='Enter'||e.key===' '){ e.preventDefault(); ouvrirCreation(); } };
    cartes.appendChild(d);
  }
  const ms = $('modescreen');
  if(!$('st-setup')){
    const s = document.createElement('div');
    s.id = 'st-setup'; s.style.display = 'none';
    ms.insertAdjacentElement('afterend', s);
  }
  if(!$('st-scene')){
    const s = document.createElement('div');
    s.id = 'st-scene'; s.style.display = 'none';
    s.setAttribute('aria-live','polite');
    $('game').insertAdjacentElement('beforebegin', s);
  }
  if(!$('st-banner')){
    const b = document.createElement('div');
    b.id = 'st-banner'; b.style.display = 'none';
    $('game').insertAdjacentElement('afterbegin', b);
  }
  if(!$('vrstory')){
    const v = document.createElement('div');
    v.id = 'vrstory'; v.style.display = 'none';
    $('vrtitle').insertAdjacentElement('afterend', v);
  }
}

function majCarteMode(){
  const c = $('st-card-mode');
  if(c) c.style.display = (currentLevel==='junior' && lang!=='en') ? '' : 'none';
}

// ── Création du personnage ────────────────────────────────────────
function nuancier(nom, couleurs, actuelle){
  return `<div class="st-swatches" role="radiogroup">${couleurs.map(c =>
    `<button type="button" class="st-sw${c===actuelle?' on':''}" style="background:${c}" data-k="${nom}" data-v="${c}" aria-label="${nom} ${c}" aria-pressed="${c===actuelle}"></button>`).join('')}</div>`;
}

function ouvrirCreation(){
  $('modescreen').style.display = 'none';
  $('final').style.display = 'none';
  const s = $('st-setup');
  s.innerHTML = `
    <button class="back-btn" type="button" id="st-back">← Retour</button>
    <h2 class="st-h2">📖 La Gazette du préau</h2>
    <p class="st-lead">Tu viens d'entrer au club journal du collège. Cette semaine, chaque jour, une rumeur arrive à la rédaction. Ton travail : enquêter, puis dire si on la publie.</p>
    <div class="st-setup-grid">
      <div class="st-preview" id="st-preview">${avatarSVG(perso, 120)}</div>
      <div class="st-fields">
        <label class="st-label" for="st-prenom">Ton prénom de reporter</label>
        <input id="st-prenom" class="form-input" maxlength="18" autocomplete="off" placeholder="Ton prénom" value="${esc(perso.prenom)}">
        <div class="st-label">Dans l'histoire, on dit de toi…</div>
        <div class="st-chips" role="radiogroup">
          <button type="button" class="st-chip${perso.genre==='f'?' on':''}" data-genre="f" aria-pressed="${perso.genre==='f'}">« elle », une reporter</button>
          <button type="button" class="st-chip${perso.genre==='m'?' on':''}" data-genre="m" aria-pressed="${perso.genre==='m'}">« il », un reporter</button>
        </div>
      </div>
    </div>
    <details class="st-details">
      <summary>🎨 Personnaliser mon avatar <span>(facultatif)</span></summary>
      <div class="st-label">Coiffure</div>
      <div class="st-chips">${COUPES.map(([v,l]) => `<button type="button" class="st-chip${perso.coupe===v?' on':''}" data-k="coupe" data-v="${v}" aria-pressed="${perso.coupe===v}">${l}</button>`).join('')}</div>
      <div class="st-label">Couleur des cheveux</div>${nuancier('cheveux', CHEVEUX, perso.cheveux)}
      <div class="st-label">Couleur de peau</div>${nuancier('peau', PEAUX, perso.peau)}
      <div class="st-label">Couleur du tee-shirt</div>${nuancier('haut', HAUTS, perso.haut)}
      <div class="st-label">Lunettes</div>
      <div class="st-chips">
        <button type="button" class="st-chip${!perso.lunettes?' on':''}" data-k="lunettes" data-v="0" aria-pressed="${!perso.lunettes}">Sans</button>
        <button type="button" class="st-chip${perso.lunettes?' on':''}" data-k="lunettes" data-v="1" aria-pressed="${!!perso.lunettes}">Avec</button>
      </div>
    </details>
    <p class="st-err" id="st-err" role="alert"></p>
    <button class="mclose st-go" type="button" id="st-start">📰 Commencer la semaine</button>`;
  s.style.display = 'block';
  $('st-back').onclick = () => { s.style.display='none'; $('modescreen').style.display='block'; };
  s.querySelectorAll('[data-genre]').forEach(b => b.onclick = () => {
    perso.genre = b.dataset.genre;
    s.querySelectorAll('[data-genre]').forEach(x => { x.classList.toggle('on', x===b); x.setAttribute('aria-pressed', x===b); });
  });
  s.querySelectorAll('[data-k]').forEach(b => b.onclick = () => {
    const k = b.dataset.k;
    perso[k] = k==='lunettes' ? b.dataset.v==='1' : b.dataset.v;
    s.querySelectorAll(`[data-k="${k}"]`).forEach(x => { x.classList.toggle('on', x===b); x.setAttribute('aria-pressed', x===b); });
    $('st-preview').innerHTML = avatarSVG(perso, 120);
  });
  $('st-start').onclick = () => {
    const p = $('st-prenom').value.trim().replace(/\s+/g,' ');
    if(!p){ $('st-err').textContent = 'Écris ton prénom (ou un surnom) pour signer tes articles !'; $('st-prenom').focus(); return; }
    perso.prenom = p; sauverPerso();
    lancerSemaine(true);
  };
  $('st-prenom').onkeydown = e => { if(e.key==='Enter') $('st-start').click(); };
  setTimeout(() => $('st-prenom').focus(), 60);
}

// ── Déroulé ───────────────────────────────────────────────────────
let _intro = false;
function lancerSemaine(avecIntro){
  H.on = true; H.confiance = 50; H.dernier = null; H.sceneFaite = -1;
  H.arrivees = shuf(ARRIVEES); H.demandes = shuf(DEMANDES);
  _intro = !!avecIntro;
  $('st-setup').style.display = 'none';
  $('final').style.display = 'none';
  _startGame(5, true);   // tire 5 affirmations Apprenti et appelle renderQ (enveloppé ci-dessous)
}

function afficherScene(html, bouton, suite){
  $('game').style.display = 'none';
  const sc = $('st-scene');
  sc.innerHTML = `<div class="st-card">${html}<button class="mclose st-go" type="button" id="st-next">${bouton}</button></div>`;
  sc.style.display = 'block';
  $('st-next').onclick = suite;
  setTimeout(() => { try{ $('st-next').focus({preventScroll:true}); }catch(e){} }, 60);
  window.scrollTo({top: Math.max(0, sc.offsetTop - 12), behavior: 'smooth'});
}

function sceneIntro(){
  afficherScene(`
    <div class="st-day">Lundi · 8 h 02 · CDI du collège</div>
    <div class="st-row">${avatarSVG(perso, 64)}<p>Premier jour au club journal. Des piles de vieux numéros, une imprimante qui ronronne, et une grande affiche : <b>« On ne publie rien qu'on n'a pas vérifié. »</b></p></div>
    <p>Maëlle, la rédactrice en chef (3e B), te tend un carnet tout neuf :</p>
    <div class="st-speech"><span class="st-who">Maëlle</span>« Bienvenue à la Gazette du préau, ${P()} ! Chaque jour, une info va débarquer. Tu enquêtes, tu consultes les sources, et tu me dis : on publie ou pas ? Si on publie des bêtises, plus personne ne nous croira. »</div>
    <p>La jauge au-dessus de ta table indique la <b>confiance des lecteurs</b>. Elle est à 50 %. À toi de la faire monter.</p>
    <p class="st-goal">🏆 Objectif de la semaine : décrocher ta <b>carte de presse officielle</b>.</p>`,
    `C'est parti !`, () => { _intro = false; sceneJour(); });
}

function sceneJour(){
  const j = JOURS[qi] || JOURS[JOURS.length-1];
  const a = H.arrivees[qi % H.arrivees.length];
  const q = QS[qi];
  const dm = H.demandes[qi % H.demandes.length];
  const echo = H.dernier ? `<p class="st-echo">${pickNR(ECHOS[H.dernier])}</p>` : '';
  const vendredi = qi===QS.length-1 ? `<p><b>Dernier jour avant le bouclage.</b> Encore une info, et la Gazette part à l'impression.</p>` : '';
  const support = {tel:'📱', papier:'📝', oral:'💬', video:'▶️', magazine:'📰'}[a.s];
  afficherScene(`
    <div class="st-day">${j.j} · ${j.h}</div>
    ${echo}${vendredi}
    <p>${a.t()}</p>
    <div class="st-support st-${a.s}"><span class="st-sup-ico">${support}</span><span>${esc(q.s)}</span></div>
    <div class="st-speech"><span class="st-who">${dm.w}</span><i>${dm.a}</i> ${dm.d()}</div>`,
    '🔎 J\'enquête', montrerQuestion);
}

function montrerQuestion(){
  $('st-scene').style.display = 'none';
  $('game').style.display = 'block';
  // La scène vient de faire lire l'affirmation : on passe directement au curseur
  // (déroulé par étapes du 1er octobre 2026).
  if(typeof etapeCurseur === 'function') etapeCurseur();
  window.scrollTo({top: Math.max(0, $('scorebar').offsetTop - 12), behavior: 'smooth'});
}

function majBanniere(){
  const b = $('st-banner');
  if(!H.on){ b.style.display = 'none'; return; }
  const j = JOURS[qi] || JOURS[JOURS.length-1];
  const niv = H.confiance>=80 ? 'haut' : H.confiance>=45 ? 'moyen' : 'bas';
  b.innerHTML = `${avatarSVG(perso, 44)}
    <div class="st-ban-txt"><b>${P()}</b> · ${j.j}<br><span>La Gazette du préau</span></div>
    <div class="st-gauge" title="Confiance des lecteurs"><div class="st-gauge-lbl">Confiance des lecteurs <b>${H.confiance} %</b></div>
      <div class="st-gauge-bg"><div class="st-gauge-fill ${niv}" style="width:${H.confiance}%"></div></div></div>`;
  b.style.display = 'flex';
}

// Libellés du jeu, version récit ou version normale
function libelles(){
  const vf = document.querySelector('#vzone .vbtn.faux'), vv = document.querySelector('#vzone .vbtn.vrai');
  const qz = document.querySelector('#vzone p'), tag = document.querySelector('#game .stag');
  if(H.on){
    vf.innerHTML = '🗑️ On ne publie pas<small>c\'est faux</small>';
    vv.innerHTML = '📰 On publie !<small>c\'est vrai</small>';
    qz.textContent = '🗞️ Maëlle attend ta réponse : on publie ou pas ?';
    tag.textContent = 'La rumeur du jour';
  } else {
    vf.textContent = t('btnVoteFalse'); vv.textContent = t('btnVoteTrue');
    qz.textContent = t('vzoneQuestion'); tag.textContent = t('stag');
  }
}

// ── Enveloppes des fonctions du jeu ───────────────────────────────
const _startGame = startGame;
startGame = function(mode, depuisHistoire){
  if(!depuisHistoire) H.on = false;
  $('st-scene').style.display = 'none';
  $('st-setup').style.display = 'none';
  return _startGame(mode);
};

const _renderQ = renderQ;
renderQ = function(){
  _renderQ();
  libelles(); majBanniere();
  if(!H.on) return;
  if(_intro && qi===0) sceneIntro(); else sceneJour();
};

const _submitV = submitV;
submitV = function(v){
  _submitV(v);
  const box = $('vrstory');
  if(!H.on){ box.style.display = 'none'; return; }
  const q = QS[qi];
  const cas = v===true ? (q.t ? 'pubVrai' : 'pubFaux') : (q.t ? 'refusVrai' : 'refusFaux');
  const d = DELTA[cas];
  H.confiance = Math.max(0, Math.min(100, H.confiance + d));
  H.dernier = cas;
  box.className = 'st-suite ' + (d>0 ? 'pos' : 'neg');
  box.innerHTML = `<p>${pickNR(SUITES[cas])(titreCourt(q.s))}</p>
    <div class="st-delta">Confiance des lecteurs : <b>${d>0?'+':''}${d}</b> → ${H.confiance} %</div>`;
  box.style.display = 'block';
  majBanniere();
};

const _showFinal = showFinal;
showFinal = function(){
  _showFinal();
  $('st-banner').style.display = 'none';
  if(!H.on) return;
  const f = $('final');
  const bons = gameHistory.filter(h => h.wasCorrect).length;
  let fin;
  // L'écran final normal garde le score, le bilan et les conseils ; sa médaille ferait doublon avec la fin du récit
  f.querySelectorAll('.fmedal, .fh2').forEach(e => e.style.display = 'none');
  const fh = f.querySelector('.fh2'); if(fh && fh.nextElementSibling && fh.nextElementSibling.tagName==='P') fh.nextElementSibling.style.display = 'none';
  // Carte officielle : 80 % au moins. Une fake news publiée coûte plus cher qu'un scoop raté :
  // avec une seule erreur, on l'obtient si l'on a écarté une info vraie (80 %), pas si l'on a publié une fausse (75 %).
  if(H.confiance >= 80){
    fin = {cls:'or', titre:'🏆 Carte de presse officielle !', txt:`
      <p>Vendredi, 16 h 30. La Gazette du préau est affichée dans le hall et une file se forme devant. Même le principal s'arrête pour la lire.</p>
      <p>Maëlle monte sur une chaise : « Je vous présente ${g('notre nouveau reporter officiel','notre nouvelle reporter officielle')} : <b>${P()}</b> ! » M. Ferrand te tend une carte plastifiée, encore tiède de la plastifieuse.</p>`,
      carte:`Reporter ${g('officiel','officielle')}`};
  } else if(H.confiance >= 45){
    fin = {cls:'argent', titre:'📰 La Gazette est sortie !', txt:`
      <p>Vendredi, 16 h 30. La Gazette est affichée dans le hall, avec un petit encadré « Rectificatif » en bas de page.</p>
      <p>Maëlle te tape sur l'épaule : « Pas mal pour une première semaine, ${P()}. Tu restes à l'essai : la semaine prochaine, on vise zéro erreur, et la carte officielle est pour toi. »</p>`,
      carte:`Reporter ${g('stagiaire','stagiaire')}`};
  } else {
    fin = {cls:'bronze', titre:'📚 Édition reportée…', txt:`
      <p>Vendredi, M. Ferrand réunit la rédaction : trop d'erreurs cette semaine, la Gazette ne sera pas affichée. Les lecteurs doivent pouvoir nous croire.</p>
      <p>Maëlle ne t'en veut pas : « Tout le monde se fait avoir au début, ${P()}. Lundi, on recommence, et cette fois on vérifie tout. »</p>`,
      carte:null};
  }
  const carte = fin.carte ? `
    <div class="st-press ${fin.cls}">
      <div class="st-press-top">CARTE DE PRESSE</div>
      <div class="st-press-body">${avatarSVG(perso, 78)}
        <div><div class="st-press-name">${P()}</div><div class="st-press-role">${fin.carte}</div>
        <div class="st-press-org">La Gazette du préau · Semaine n° 1</div></div></div>
    </div>` : '';
  const bloc = document.createElement('div');
  bloc.className = 'st-fin';
  bloc.innerHTML = `<h2 class="st-h2">${fin.titre}</h2>${fin.txt}${carte}
    <div class="st-bilan">${bons} info${bons>1?'s':''} sur ${QS.length} bien jugée${bons>1?'s':''} · confiance des lecteurs : <b>${H.confiance} %</b></div>`;
  f.insertBefore(bloc, f.firstChild);
  const rb = $('rbtn'); if(rb) rb.textContent = '🔁 Une nouvelle semaine';
  const mb = $('mbtn');
  if(mb && !$('st-perso-btn')){
    const pb = document.createElement('button');
    pb.id = 'st-perso-btn'; pb.type = 'button'; pb.textContent = '🎨 Changer de personnage';
    pb.onclick = () => { f.style.display = 'none'; H.on = false; ouvrirCreation(); };
    mb.insertAdjacentElement('beforebegin', pb);
  }
};

const _restart = restart;
restart = function(){
  if(H.on && !playingCustom){ $('final').style.display = 'none'; gameHistory = []; lancerSemaine(false); return; }
  return _restart();
};

const _backToMenu = backToMenu;
backToMenu = function(){
  _backToMenu();
  if($('game').style.display === 'none' && $('scorebar').style.display === 'none'){
    $('st-scene').style.display = 'none';
    $('st-banner').style.display = 'none';
    H.on = false;
  }
};

const _chooseLevel = chooseLevel;
chooseLevel = function(level){ _chooseLevel(level); majCarteMode(); };

const _backToLevel = typeof backToLevel==='function' ? backToLevel : null;
if(_backToLevel) backToLevel = function(){ $('st-setup').style.display = 'none'; _backToLevel(); };

injecter(); majCarteMode();
})();
