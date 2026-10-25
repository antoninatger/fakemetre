// ═══════════════════════════════════════════════════════════════════════
// FakeMètre · enquête sur une personne (niveau Fact-Checker Confirmé)
// 1er octobre 2026
//
// Au niveau Fact-Checker, une source qui est une PERSONNE ne montre plus que son nom
// (« Claire Vasseur », pas « Historienne spécialiste de l'Allemagne nazie »). La loupe
// ouvre un faux moteur de recherche, « Fouineur » : 2 ou 3 résultats, chacun ouvre une
// fausse page web (université, profil professionnel, article, chaîne vidéo, page de
// vente…). C'est en les lisant que l'élève découvre si la personne est compétente dans
// le domaine dont elle parle. Données : personnes_pro.js. Tout y est fictif.
//
// Les vraies personnes publiques (Wakefield, Happer, Avena) gardent leur vrai nom : la
// loupe ouvre une vraie recherche web, on n'invente rien sur elles.
// ═══════════════════════════════════════════════════════════════════════

// ── Relier chaque source à sa personne ──
// D'abord par la position (question i, source j), vérifiée par le champ « n » ; sinon
// par « n » seul quand il est unique. Ainsi une question ajoutée au milieu du tableau
// ne décale pas tout.
(function lierPersonnes(){
  if(typeof PERSONNES_PRO==='undefined') return;
  const parCle={fr:{},en:{}};
  Object.keys(PERSONNES_PRO).forEach(pid=>{
    const p=PERSONNES_PRO[pid];
    ['fr','en'].forEach(l=>{const c=p.cle&&p.cle[l];if(c){(parCle[l][c]=parCle[l][c]||[]).push(pid);}});
  });
  function lier(qs,l){
    if(!Array.isArray(qs)) return;
    qs.forEach((q,i)=>(q.src||[]).forEach((s,j)=>{
      const pid='p'+i+'-'+j, p=PERSONNES_PRO[pid];
      if(p&&p.cle&&p.cle[l]===s.n){s._pid=pid;return;}
      const c=parCle[l][s.n];
      if(c&&c.length===1) s._pid=c[0];
    }));
  }
  if(typeof QUESTIONS_PRO!=='undefined') lier(QUESTIONS_PRO,'fr');
  if(typeof QUESTIONS_PRO_EN!=='undefined') lier(QUESTIONS_PRO_EN,'en');
})();

function personneDe(src){
  if(!src||!src._pid||typeof PERSONNES_PRO==='undefined') return null;
  return PERSONNES_PRO[src._pid]||null;
}
function _enqLang(){return (typeof lang!=='undefined'&&lang==='en')?'en':'fr';}
function _enqEsc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}

// Ce que la personne dit : la citation d'origine, sauf quand elle trahissait le métier.
function personneSay(src){
  const p=personneDe(src), l=_enqLang();
  return (p&&p.say&&p.say[l])||src.say;
}
// Le support (« Vidéo en ligne », « Plateau télé »…) remplace la profession.
function personneSupport(src){
  const p=personneDe(src), l=_enqLang();
  if(p&&p.support&&p.support[l]) return p.support[l];
  return l==='en'?'Statement':'Prise de parole';
}

// La carte de la source, dans la fenêtre de lecture.
function buildPersonneMasquee(src){
  const p=personneDe(src), en=_enqLang()==='en';
  const nom=_enqEsc(p.nom);
  const loupe=p.reel
    ? `🔍 ${en?'Search the web for this person':'Chercher cette personne sur Internet'} ↗`
    : `🔍 ${en?'Look into this person':'Enquêter sur cette personne'}`;
  return `<div class="fake-expert hidden-expert"><div class="fake-expert-hd"><div class="fake-expert-av">👤</div><div class="fake-expert-info"><div class="fake-expert-name">${nom}</div><div class="fake-expert-cred">🗣️ ${_enqEsc(personneSupport(src))}</div><button type="button" class="expert-loupe" onclick="ouvrirRecherche()">${loupe}</button></div></div><div class="fake-expert-body">${_enqEsc(personneSay(src))}</div>${src.img?`<img class="fake-expert-img" src="${_enqEsc(src.img)}" alt="">`:''}</div>`;
}

// ── Le faux moteur de recherche ──
let _enqPersonne=null;

function ouvrirRecherche(srcArg){
  const src=srcArg||(typeof pend!=='undefined'&&pend&&pend.src);
  const p=personneDe(src);
  if(!p) return;
  if(p.reel){
    window.open('https://www.google.com/search?q='+encodeURIComponent('"'+p.nom+'"'),'_blank','noopener');
    return;
  }
  _enqPersonne=p;
  afficherResultats();
  show('mrech');
}

function fermerRecherche(){
  hide('mrech');
  _enqPersonne=null;
}

function _enqBarre(adresse,retour){
  const en=_enqLang()==='en';
  return `<div class="rech-barre">
    ${retour?`<button type="button" class="rech-btn" onclick="afficherResultats()" aria-label="${en?'Back to results':'Retour aux résultats'}">←</button>`:`<span class="rech-btn rech-btn-off">←</span>`}
    <div class="rech-adresse">🔒 <span>${_enqEsc(adresse)}</span></div>
    <button type="button" class="rech-btn" onclick="fermerRecherche()" aria-label="${en?'Close':'Fermer'}">✕</button>
  </div>`;
}

function afficherResultats(){
  const p=_enqPersonne; if(!p) return;
  const l=_enqLang(), en=l==='en';
  const q=p.nom;
  const res=(p.resultats||[]).map((r,i)=>{
    const x=r[l]||r.fr;
    return `<button type="button" class="rech-res" onclick="afficherPage(${i})">
      <div class="rech-res-url">${_enqEsc(x.url)}</div>
      <div class="rech-res-titre">${_enqEsc(x.titre)}</div>
      <div class="rech-res-extrait">${_enqEsc(x.extrait)}</div>
    </button>`;
  }).join('');
  const nb=(p.resultats||[]).length;
  $('rech-corps').innerHTML=_enqBarre('fouineur.fr/'+(en?'search':'recherche')+'?q='+q.replace(/ /g,'+'),false)+
    `<div class="rech-moteur">
      <div class="rech-logo">Fou<span>i</span>neur</div>
      <div class="rech-champ">🔍 ${_enqEsc(q)}</div>
      <div class="rech-compte">${en?`About ${nb} relevant results`:`Environ ${nb} résultats pertinents`}</div>
      ${res}
      <div class="rech-astuce">💡 ${en?'Is it really the same person? What is their actual field? Do they have something to sell?':'Est-ce bien la même personne ? Quel est vraiment son domaine ? A-t-elle quelque chose à vendre ?'}</div>
    </div>`;
  $('mrech').scrollTop=0;
}

const _ENQ_STYLES={
  institution:{ic:'🏛️'}, reseau:{ic:'💼'}, presse:{ic:'📰'}, encyclo:{ic:'📚'},
  video:{ic:'▶️'}, social:{ic:'💬'}, commerce:{ic:'🛒'}, biblio:{ic:'🔬'}, blog:{ic:'✏️'}
};

function afficherPage(i){
  const p=_enqPersonne; if(!p) return;
  const l=_enqLang();
  const r=p.resultats[i]; if(!r) return;
  const x=r[l]||r.fr, pg=x.page||{};
  const type=_ENQ_STYLES[pg.type]?pg.type:'blog';
  const encart=(pg.encart||[]).filter(kv=>kv&&kv.length>=2).map(kv=>
    `<div class="rp-kv"><span class="rp-k">${_enqEsc(kv[0])}</span><span class="rp-v">${_enqEsc(kv[1])}</span></div>`).join('');
  const sections=(pg.sections||[]).map(s=>
    `<section class="rp-sec">${s.titre?`<h4>${_enqEsc(s.titre)}</h4>`:''}${s.texte?`<p>${_enqEsc(s.texte)}</p>`:''}${Array.isArray(s.liste)&&s.liste.length?`<ul>${s.liste.map(li=>`<li>${_enqEsc(li)}</li>`).join('')}</ul>`:''}</section>`).join('');
  const chemin=String(x.url||pg.domaine||'').replace(/\s*›\s*/g,'/');
  $('rech-corps').innerHTML=_enqBarre(chemin,true)+
    `<article class="rp rp-${type}">
      <header class="rp-site"><span class="rp-site-ic">${_ENQ_STYLES[type].ic}</span><span class="rp-site-nom">${_enqEsc(pg.site||'')}</span><span class="rp-site-dom">${_enqEsc(pg.domaine||'')}</span></header>
      <div class="rp-tete">
        ${type==='presse'||type==='blog'||type==='encyclo'?'':`<div class="rp-avatar">${_enqEsc(_enqInitiales(pg.titre||p.nom))}</div>`}
        <div>
          <h3 class="rp-titre">${_enqEsc(pg.titre||'')}</h3>
          ${pg.sousTitre?`<div class="rp-sous">${_enqEsc(pg.sousTitre)}</div>`:''}
          ${pg.date?`<div class="rp-date">${_enqEsc(pg.date)}</div>`:''}
        </div>
      </div>
      ${encart?`<div class="rp-encart">${encart}</div>`:''}
      ${sections}
    </article>`;
  $('mrech').scrollTop=0;
}

function _enqInitiales(s){
  const mots=String(s||'').replace(/^(Dr|Pr|Prof\.?)\s+/i,'').split(/[\s,]+/).filter(Boolean);
  return ((mots[0]||'')[0]||'').toUpperCase()+((mots[1]||'')[0]||'').toUpperCase();
}
