/* Le vote du public par téléphone, pour le Fake-mètre (24 octobre).

   Antonin : « tu mets à l'entrée [l']option voter par téléphone pour l'affirmation. Et
   quand une partie commence, tu as un QR code qui apparaît, tu peux appuyer dessus pour le
   grandir. Les gens vont scanner et ensuite les affirmations qui défilent sur le
   navigateur correspondent aux questions posées sur le téléphone. »

   Même relais que les diapos des cours (Cours/_vote) : une salle par séance, un code de
   quatre lettres, un seul scan.

   Puis : « je veux aussi que les gens puissent évaluer les sources avec le QR code. Donc
   l'affirmation, mais aussi chacune des sources et le vote final. » Les téléphones suivent
   donc l'enquête pas à pas, comme le jeu à l'écran :
     · l'affirmation : un curseur de 0 (faux) à 10 (vrai) ;
     · une source ouverte : sa note de fiabilité, de 1 à 7, comme dans le jeu ;
     · après la note : le curseur de nouveau (« ton avis après cette source ») ;
     · le vote final : C'est faux / Pas de consensus (niveau Pro) / C'est vrai.
   Chaque fois, l'écran montre à côté du geste du jeu combien ont voté, la moyenne et la
   répartition.

   Rien n'est modifié dans le jeu lui-même : ce fichier ajoute la case à l'écran du choix
   du mode, et lit l'état du jeu (quelle fenêtre est ouverte) pour savoir quelle question
   poser. */
(function () {
  'use strict';
  const RELAIS = 'https://vote.amanalat.workers.dev';
  const CLE_ACTIF = 'fakemetre-vote-telephone';
  const CLE_SALLE = 'fakemetre-vote-salle';
  const GARDE = 45 * 60 * 1000;
  const LETTRES = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  const $ = id => document.getElementById(id);
  const en = () => typeof lang !== 'undefined' && lang === 'en';
  const dit = (fr, ang) => (en() ? ang : fr);

  let actif = false;
  try { actif = localStorage.getItem(CLE_ACTIF) === '1'; } catch (e) {}

  // ── La case, à l'écran du choix du mode ────────────────────────────────────
  function poserCase() {
    const ecran = $('modescreen');
    if (!ecran || $('vt-case')) return;
    const l = document.createElement('label');
    l.id = 'vt-case';
    l.innerHTML = '<input type="checkbox"><span></span>';
    const c = l.querySelector('input');
    c.checked = actif;
    const maj = () => { l.querySelector('span').textContent = dit('📱 Le public vote par téléphone', '📱 The audience votes by phone'); };
    maj();
    c.addEventListener('change', () => {
      actif = c.checked;
      try { localStorage.setItem(CLE_ACTIF, actif ? '1' : '0'); } catch (e) {}
    });
    l.addEventListener('mouseenter', maj);
    ecran.appendChild(l);
  }

  // ── La salle et la liaison ─────────────────────────────────────────────────
  function hasard(n, alphabet) {
    const a = new Uint8Array(n);
    crypto.getRandomValues(a);
    return Array.from(a, b => alphabet[b % alphabet.length]).join('');
  }
  let salle = null;
  try {
    const s = JSON.parse(localStorage.getItem(CLE_SALLE) || 'null');
    if (s && /^[A-Z]{4}$/.test(s.code) && s.cle && Date.now() - (s.t || 0) < GARDE) salle = s;
  } catch (e) {}
  function ecrireSalle() {
    salle.t = Date.now();
    try { localStorage.setItem(CLE_SALLE, JSON.stringify(salle)); } catch (e) {}
  }
  function nouvelleSalle() {
    salle = { code: hasard(4, LETTRES), cle: hasard(24, 'abcdefghijklmnopqrstuvwxyz0123456789'), t: 0 };
    ecrireSalle();
  }

  let ws = null, delai = 1000, minuterie = null, enLigne = false, nbPublic = 0;
  let question = null;            // ce que les téléphones affichent (null : en attente)
  let enJeu = false;

  function brancher() {
    if (ws && (ws.readyState === 0 || ws.readyState === 1)) return;
    if (!salle) nouvelleSalle();
    clearTimeout(minuterie);
    let w;
    try { w = new WebSocket(RELAIS.replace(/^http/, 'ws') + '/ws/' + salle.code + '?role=anim&cle=' + salle.cle); }
    catch (e) { reessayer(); return; }
    ws = w;
    w.onopen = () => { enLigne = true; delai = 1000; ecrireSalle(); envoyer({ t: 'question', q: pourLeRelais(question) }); maj(); };
    w.onmessage = e => {
      let m;
      try { m = JSON.parse(e.data); } catch (x) { return; }
      if (m.t === 'prise') { nouvelleSalle(); return; }
      if (m.t === 'public') nbPublic = m.n;
      else if (m.t === 'resultats') resultats.set(m.qid, m);
      maj();
    };
    w.onclose = () => { if (ws === w) ws = null; enLigne = false; maj(); if (enJeu) reessayer(); };
    w.onerror = () => { try { w.close(); } catch (x) {} };
  }
  function reessayer() {
    clearTimeout(minuterie);
    minuterie = setTimeout(brancher, delai);
    delai = Math.min(delai * 2, 15000);
  }
  function envoyer(o) {
    if (ws && ws.readyState === 1) { ws.send(JSON.stringify(o)); return true; }
    return false;
  }
  setInterval(() => envoyer({ t: 'ping' }), 25000);

  // ── L'affichage ────────────────────────────────────────────────────────────
  function styles() {
    const st = document.createElement('style');
    st.textContent = `
#vt-case{display:flex;align-items:center;justify-content:center;gap:10px;margin:22px auto 0;cursor:pointer;
  font-weight:800;font-size:1rem;color:var(--tx,#eef2fb);user-select:none;}
#vt-case input{width:20px;height:20px;accent-color:var(--acc,#4fa3f7);cursor:pointer;}
.vt-qr-coin{position:fixed;right:16px;bottom:16px;z-index:900;display:flex;align-items:center;gap:10px;background:#fff;color:#111;
  border-radius:14px;padding:8px 12px 8px 8px;box-shadow:0 8px 28px rgba(0,0,0,.35);cursor:pointer;
  font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;}
.vt-qr-coin .vt-qr{width:84px;height:84px;}
.vt-qr svg{width:100%;height:100%;display:block;}
.vt-qr-coin .vt-code{font-size:1.35rem;font-weight:800;letter-spacing:.12em;line-height:1;}
.vt-qr-coin .vt-n{font-size:.8rem;color:#555;margin-top:5px;}
.vt-grand{position:fixed;inset:0;z-index:2147483000;background:rgba(8,12,22,.92);display:flex;align-items:center;
  justify-content:center;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;cursor:pointer;}
.vt-grand .vt-carte{background:#fff;color:#111;border-radius:24px;padding:26px 32px;text-align:center;
  display:flex;flex-direction:column;align-items:center;}
.vt-grand .vt-qr{width:min(62vh,72vw);height:min(62vh,72vw);}
.vt-grand .vt-adresse{font-size:clamp(1rem,2.4vw,1.5rem);margin-top:12px;color:#333;}
.vt-grand .vt-code{font-size:clamp(1.6rem,4vw,2.6rem);font-weight:800;letter-spacing:.14em;}
.vt-grand .vt-n{font-size:.9rem;color:#555;margin-top:4px;}
.vt-hors{color:#b3261e !important;}
.vt-qr-coin[hidden],.vt-grand[hidden],.vt-classe[hidden]{display:none !important;}
.vt-classe{margin:14px auto 0;max-width:640px;background:rgba(79,163,247,.08);border:1px solid rgba(79,163,247,.3);
  border-radius:14px;padding:12px 16px 10px;}
.vt-entete{display:flex;justify-content:space-between;align-items:baseline;gap:12px;font-weight:800;font-size:.95rem;}
.vt-moy{color:var(--acc,#4fa3f7);font-size:1.15rem;}
.vt-histo{display:grid;grid-template-columns:repeat(11,1fr);gap:5px;align-items:end;height:110px;margin-top:10px;}
#msrc .vt-classe,#mfb .vt-classe{margin:4px 0 14px;}
#msrc .vt-histo,#mfb .vt-histo{height:70px;}
#vzone .vt-classe{margin-top:14px;}
.vt-col{display:flex;flex-direction:column;justify-content:flex-end;align-items:center;height:100%;}
.vt-col b{font-size:.75rem;font-weight:800;min-height:1em;}
.vt-col i{display:block;width:100%;border-radius:5px 5px 0 0;min-height:2px;transition:height .4s ease;}
.vt-axe{display:grid;grid-template-columns:repeat(11,1fr);gap:5px;font-size:.72rem;font-weight:700;opacity:.7;text-align:center;margin-top:3px;}
.vt-bornes{display:flex;justify-content:space-between;font-size:.75rem;font-weight:800;opacity:.75;margin-top:2px;}
`;
    document.head.appendChild(st);
  }

  let coin = null, grand = null, qrFait = '';
  function construire() {
    styles();
    coin = document.createElement('div');
    coin.className = 'vt-qr-coin';
    coin.hidden = true;
    coin.innerHTML = '<div class="vt-qr"></div><div><div class="vt-code"></div><div class="vt-n"></div></div>';
    coin.addEventListener('click', () => { grand.hidden = false; maj(); });
    document.body.appendChild(coin);
    grand = document.createElement('div');
    grand.className = 'vt-grand';
    grand.hidden = true;
    grand.innerHTML = '<div class="vt-carte"><div class="vt-qr"></div><div class="vt-adresse"></div><div class="vt-code"></div><div class="vt-n"></div></div>';
    grand.addEventListener('click', () => { grand.hidden = true; });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !grand.hidden) { grand.hidden = true; e.stopPropagation(); } }, true);
    document.body.appendChild(grand);
  }

  function couleurEchelle(i) {
    // Du rouge (faux) au vert (vrai), comme le curseur du jeu.
    return ['#f75f5f', '#f7714f', '#f78a4b', '#f7a548', '#f7b847', '#f7c948', '#c9cd57', '#9bd166', '#6dd276', '#4fcf85', '#3ecf8e'][i];
  }
  function couleurLikert(i) {
    return ['#f75f5f', '#f78a4b', '#f7b847', '#f7c948', '#9bd166', '#4fcf85', '#3ecf8e'][i];
  }

  // Un panneau de résultats par endroit du jeu : sous le grand curseur, dans la fenêtre
  // d'une source, dans la fenêtre « ajuste ton curseur », sous les boutons du vote final.
  const panneaux = {};
  function panneau(lieu) {
    const ancres = {
      jeu: () => document.querySelector('#game .mwrap'),
      source: () => $('likert-wrap'),
      ajuster: () => document.querySelector('#mfb .mwrap'),
      verdict: () => document.querySelector('#vzone .vbtns')
    };
    let p = panneaux[lieu];
    if (p && document.body.contains(p)) return p;
    const a = ancres[lieu] && ancres[lieu]();
    if (!a) return null;
    p = document.createElement('div');
    p.className = 'vt-classe';
    p.innerHTML = '<div class="vt-entete"><span class="vt-titre"></span><span class="vt-moy"></span></div>'
      + '<div class="vt-histo"></div><div class="vt-axe"></div><div class="vt-bornes"><span></span><span></span></div>';
    a.insertAdjacentElement('afterend', p);
    panneaux[lieu] = p;
    return p;
  }

  function dessinerPanneau(p, q, r, entete) {
    const nb = q.type === 'echelle' ? 11 : q.options.length;
    const comptes = r ? r.comptes : new Array(nb).fill(0);
    const n = comptes.reduce((a, b) => a + b, 0);
    const max = Math.max(1, ...comptes);
    const histo = p.querySelector('.vt-histo'), axe = p.querySelector('.vt-axe');
    if (histo.children.length !== nb || p.dataset.type !== q.type + q.genre) {
      p.dataset.type = q.type + q.genre;
      const cols = 'repeat(' + nb + ',1fr)';
      histo.style.gridTemplateColumns = cols;
      axe.style.gridTemplateColumns = cols;
      histo.innerHTML = comptes.map(() => '<div class="vt-col"><b></b><i></i></div>').join('');
      axe.innerHTML = q.etiquettes.map(e => '<span>' + e + '</span>').join('');
      histo.querySelectorAll('i').forEach((e, i) => { e.style.background = q.couleurs[i]; });
      histo.style.height = q.genre === 'verdict' ? '80px' : '';
    }
    p.querySelector('.vt-titre').textContent = '📱 ' + entete + ' : ' + n + ' vote' + (n > 1 ? 's' : '');
    let moy = '';
    if (n && q.genre !== 'verdict') {
      const base = q.type === 'echelle' ? 0 : 1;
      const m = comptes.reduce((a, c, i) => a + c * (i + base), 0) / n;
      moy = dit('moyenne ', 'average ') + m.toLocaleString(en() ? 'en' : 'fr-FR', { maximumFractionDigits: 1 })
        + (q.type === 'echelle' ? ' / 10' : ' / 7');
    }
    p.querySelector('.vt-moy').textContent = moy;
    histo.querySelectorAll('.vt-col').forEach((col, i) => {
      col.querySelector('b').textContent = comptes[i] || '';
      col.querySelector('i').style.height = (comptes[i] / max * 100) + '%';
    });
    const b = p.querySelectorAll('.vt-bornes span');
    b[0].textContent = q.genre === 'echelle' ? dit('❌ Faux', '❌ False') : q.genre === 'source' ? dit('Pas fiable', 'Unreliable') : '';
    b[1].textContent = q.genre === 'echelle' ? dit('Vrai ✅', 'True ✅') : q.genre === 'source' ? dit('Fiable', 'Reliable') : '';
  }

  function maj() {
    if (!coin) return;
    const visible = enJeu && actif;
    coin.hidden = !visible;
    if (!visible) grand.hidden = true;
    Object.values(panneaux).forEach(p => { p.hidden = true; });
    if (!visible) return;
    const etat = !enLigne ? dit('Connexion au relais…', 'Connecting…') : '📱 ' + nbPublic;
    [coin, grand].forEach(b => {
      b.querySelector('.vt-code').textContent = salle ? salle.code : '····';
      const n = b.querySelector('.vt-n');
      n.textContent = etat;
      n.classList.toggle('vt-hors', !enLigne);
    });
    grand.querySelector('.vt-adresse').textContent = salle ? RELAIS.replace(/^https?:\/\//, '') + '/' + salle.code : '';
    const adresse = salle ? RELAIS + '/' + salle.code : '';
    if (adresse && adresse !== qrFait && window.qrcode) {
      const qr = window.qrcode(0, 'M');
      qr.addData(adresse);
      qr.make();
      const svg = qr.createSvgTag({ cellSize: 4, margin: 2, scalable: true });
      coin.querySelector('.vt-qr').innerHTML = svg;
      grand.querySelector('.vt-qr').innerHTML = svg;
      qrFait = adresse;
    }
    if (!question) return;
    // Le grand curseur montre toujours l'avis de la classe sur l'affirmation : le dernier
    // demandé (avant les sources, ou après la dernière source notée).
    const avis = derniereEchelle;
    if (avis) {
      const pj = panneau('jeu');
      if (pj) {
        pj.hidden = false;
        dessinerPanneau(pj, avis, resultats.get(avis.id), avis.entete);
      }
    }
    if (question.genre === 'source' || question.genre === 'verdict' || question.lieu === 'ajuster') {
      const p = panneau(question.lieu);
      if (p) {
        p.hidden = false;
        dessinerPanneau(p, question, resultats.get(question.id), question.entete);
      }
    }
  }

  // ── Quelle question poser : on lit l'état du jeu ───────────────────────────
  let base = null;                 // préfixe des questions de l'affirmation en cours
  let derniereEchelle = null;      // la dernière question « curseur » posée
  const resultats = new Map();
  function ouverte(id) { const m = $(id); return !!(m && m.classList.contains('show')); }
  function nomSource(src) {
    try { return typeof expertDisplayName === 'function' ? expertDisplayName(src) : (src.n || ''); } catch (e) { return ''; }
  }

  function questionDuJeu() {
    if (!actif || !$('game') || $('game').style.display === 'none' || typeof QS === 'undefined' || !QS[qi]) return null;
    const q = QS[qi];
    const echelle = (suffixe, entete, lieu) => ({
      id: base + suffixe, type: 'echelle', genre: 'echelle', lieu, entete,
      titre: q.s, options: [],
      etiquettes: Array.from({ length: 11 }, (_, i) => String(i)),
      couleurs: Array.from({ length: 11 }, (_, i) => couleurEchelle(i))
    });
    if (ouverte('msrc') && typeof pend !== 'undefined' && pend && pend.src) {
      const lab = (typeof t === 'function' && t('likertLabels')) || [];
      return {
        id: base + '~source' + pend.idx, type: 'choix', genre: 'source', lieu: 'source',
        entete: dit('Fiabilité selon la classe', 'Reliability, the class'),
        titre: dit('Quelle confiance accordes-tu à cette source ? ', 'How much do you trust this source? ') + nomSource(pend.src),
        options: [1, 2, 3, 4, 5, 6, 7].map(v => v + (lab[v] ? ' · ' + lab[v] : '')),
        etiquettes: ['1', '2', '3', '4', '5', '6', '7'],
        couleurs: [0, 1, 2, 3, 4, 5, 6].map(couleurLikert)
      };
    }
    if (ouverte('mfb')) {
      return echelle('~apres' + uc, dit('Après cette source', 'After this source'), 'ajuster');
    }
    if ($('vzone') && $('vzone').style.display === 'block') {
      const pro = typeof currentLevel !== 'undefined' && currentLevel === 'pro';
      const opts = [dit('❌ C’est FAUX', '❌ It’s FALSE')]
        .concat(pro ? [dit('⚖️ Pas de consensus clair', '⚖️ No clear consensus')] : [])
        .concat([dit('✅ C’est VRAI', '✅ It’s TRUE')]);
      return {
        id: base + '~verdict', type: 'choix', genre: 'verdict', lieu: 'verdict',
        entete: dit('Le verdict de la classe', 'The class verdict'),
        titre: dit('Après ton enquête, qu’en penses-tu ? ', 'After your investigation, what do you think? ') + q.s,
        options: opts,
        etiquettes: opts.map(o => o.replace(/^\S+\s/, '')),
        couleurs: pro ? ['#f75f5f', '#f7c948', '#3ecf8e'] : ['#f75f5f', '#3ecf8e']
      };
    }
    // Rien d'ouvert : le curseur de l'affirmation. Avant toute source, c'est l'avis de
    // départ ; ensuite, le dernier avis demandé, que chacun peut encore bouger.
    return uc > 0
      ? echelle('~apres' + uc, dit('Après ' + uc + ' source' + (uc > 1 ? 's' : ''), 'After ' + uc + ' source' + (uc > 1 ? 's' : '')), 'jeu')
      : echelle('~avant', dit('La classe, avant les sources', 'The class, before the sources'), 'jeu');
  }

  // Ce qui part au relais : la question telle que le téléphone l'affiche, sans ce qui ne
  // sert qu'à l'écran.
  function pourLeRelais(q) {
    return q ? { id: q.id, type: q.type, titre: q.titre, options: q.options } : null;
  }

  function verifier() {
    const q = questionDuJeu();
    const avant = JSON.stringify(pourLeRelais(question));
    const apres = JSON.stringify(pourLeRelais(q));
    question = q;
    if (q && q.type === 'echelle') derniereEchelle = q;
    if (avant !== apres) {
      enJeu = !!q || (enJeu && !!$('game') && $('game').style.display !== 'none');
      if (q) { enJeu = true; brancher(); }
      envoyer({ t: 'question', q: pourLeRelais(q) });
    }
    if (!q && (!$('game') || $('game').style.display === 'none')) enJeu = false;
    maj();
  }
  setInterval(verifier, 300);

  // Un préfixe neuf à chaque nouvelle affirmation : la même affirmation rejouée dans une
  // autre partie repart de zéro. renderQ est une déclaration globale : la remplacer ici
  // change aussi les appels que le jeu se fait à lui-même.
  function idDe(texte) {
    let h = 0;
    for (let i = 0; i < texte.length; i++) h = (h * 31 + texte.charCodeAt(i)) | 0;
    return 'fakemetre~' + (h >>> 0).toString(36) + '~' + Date.now().toString(36);
  }
  const renderQAvant = window.renderQ;
  if (typeof renderQAvant === 'function') {
    window.renderQ = function () {
      const r = renderQAvant.apply(this, arguments);
      try {
        base = typeof QS !== 'undefined' && QS[qi] ? idDe(QS[qi].s) : null;
        derniereEchelle = null;
        verifier();
      } catch (e) { console.error(e); }
      return r;
    };
  }

  function pret(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }
  pret(() => { construire(); poserCase(); });
})();
