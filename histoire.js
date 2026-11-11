/* ═══════════════════════════════════════════════════════════════════
   FakeMètre · Mode histoire
   Une semaine, 5 jours, 5 affirmations tirées au sort dans le niveau.
   Avant chaque question, une scène amène l'affirmation ; après le verdict,
   une conséquence. Une jauge décide de la fin (3 fins).

   Deux récits, chacun en français et en anglais (11 novembre 2026) :
   - « La Gazette du préau » (Apprenti Détective) : le club journal du collège ;
   - « La Cellule Vérif » (Enquêteur Junior) : un stage dans la rubrique de
     vérification d'un quotidien régional.
   Le niveau Fact-Checker n'a pas de récit : la carte n'y apparaît pas.

   Ce fichier se branche sur index.html sans le modifier en profondeur :
   il ajoute sa carte à l'écran des modes, ses écrans, et enveloppe
   chooseLevel, startGame, renderQ, submitV, showFinal, restart et
   backToMenu. S'il manque, le jeu fonctionne comme avant.
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


// ── Les récits ─────────────────────────────────────────────────────
// Un récit par niveau et par langue. Les textes sont des fonctions quand ils
// citent le prénom (P) ou s'accordent en genre (g). Trois clés reviennent
// partout : pubVrai (on a validé une info vraie), refusFaux (écarté une fausse),
// pubFaux (validé une fausse) et refusVrai (écarté une vraie).

// La Gazette du préau · Apprenti Détective · français
const GAZETTE_FR = {
  carte: {titre:'Mode histoire', sous:'La Gazette du préau', desc:'Deviens reporter du journal du collège.<br>5 jours, 5 rumeurs : à toi de dire si on publie !'},
  titre: '📖 La Gazette du préau',
  lead: `Tu viens d'entrer au club journal du collège. Cette semaine, chaque jour, une rumeur arrive à la rédaction. Ton travail : enquêter, puis dire si on la publie.`,
  lblPrenom: 'Ton prénom de reporter', errPrenom: 'Écris ton prénom (ou un surnom) pour signer tes articles !',
  chipF: '« elle », une reporter', chipM: '« il », un reporter',
  btnStart: '📰 Commencer la semaine', btnIntro: `C'est parti !`, btnEnquete: `🔎 J'enquête`,
  jours: [{j:'Lundi',h:'8 h 10'},{j:'Mardi',h:'10 h 05'},{j:'Mercredi',h:'11 h 50'},{j:'Jeudi',h:'13 h 20'},{j:'Vendredi',h:'15 h 30'}],
  arrivees: [
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
  ],
  demandes: [
    {w:'Maëlle', a:`croise les bras.`, d:() => `« Alors, ${P()}, on publie ou pas ? »`},
    {w:'Maëlle', a:`recopie la phrase dans son carnet.`, d:() => `« Enquête, et reviens avec des sources. Ensuite, tu me dis si on publie. »`},
    {w:'Maëlle', a:`tapote sa montre.`, d:() => `« Tu as jusqu'au bouclage pour vérifier. On publie ou pas ? »`},
    {w:'Maëlle', a:`lève un sourcil.`, d:() => `« Ça sent le scoop… ou le piège. À toi de voir. »`},
    {w:'M. Ferrand', a:`le documentaliste, lève le nez de son écran.`, d:() => `« Une info qui fait “waouh” mérite deux fois plus de vérifications. »`},
  ],
  echos: {
    pubVrai:   [`Ton article d'hier a fait le tour de la cour. Des 5e l'ont même recopié dans leur cahier.`, `Hier, la Gazette a publié une info vraie et bien vérifiée. Les lecteurs en redemandent.`],
    refusFaux: [`Hier, la rumeur a enflammé le groupe de la classe. La Gazette, elle, n'est pas tombée dans le piège.`, `Le journal du collège voisin a publié hier la fausse info que tu avais écartée. Ils ont dû s'excuser.`],
    pubFaux:   [`Depuis le rectificatif d'hier, certains élèves ricanent en passant devant le panneau de la Gazette. Il faut remonter la pente.`, `Hier, il a fallu corriger une erreur. Maëlle a punaisé le rectificatif elle-même, sans un mot.`],
    refusVrai: [`Le club sciences a affiché hier l'info que tu avais écartée, sources à l'appui. Maëlle a soupiré.`, `L'info d'hier était vraie, et c'est un autre journal qui l'a publiée. Scoop raté, mais la semaine continue.`],
  },
  suites: {
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
  },
  intro: () => `
    <div class="st-day">Lundi · 8 h 02 · CDI du collège</div>
    <div class="st-row">${avatarSVG(perso, 64)}<p>Premier jour au club journal. Des piles de vieux numéros, une imprimante qui ronronne, et une grande affiche : <b>« On ne publie rien qu'on n'a pas vérifié. »</b></p></div>
    <p>Maëlle, la rédactrice en chef (3e B), te tend un carnet tout neuf :</p>
    <div class="st-speech"><span class="st-who">Maëlle</span>« Bienvenue à la Gazette du préau, ${P()} ! Chaque jour, une info va débarquer. Tu enquêtes, tu consultes les sources, et tu me dis : on publie ou pas ? Si on publie des bêtises, plus personne ne nous croira. »</div>
    <p>La jauge au-dessus de ta table indique la <b>confiance des lecteurs</b>. Elle est à 50 %. À toi de la faire monter.</p>
    <p class="st-goal">🏆 Objectif de la semaine : décrocher ta <b>carte de presse officielle</b>.</p>`,
  dernierJour: `<b>Dernier jour avant le bouclage.</b> Encore une info, et la Gazette part à l'impression.`,
  banniere: 'La Gazette du préau', jauge: 'Confiance des lecteurs',
  vote: {non:`🗑️ On ne publie pas<small>c'est faux</small>`, oui:`📰 On publie !<small>c'est vrai</small>`, question:'🗞️ Maëlle attend ta réponse : on publie ou pas ?', tag:'La rumeur du jour'},
  fins: {
    or: {titre:'🏆 Carte de presse officielle !', txt:() => `
      <p>Vendredi, 16 h 30. La Gazette du préau est affichée dans le hall et une file se forme devant. Même le principal s'arrête pour la lire.</p>
      <p>Maëlle monte sur une chaise : « Je vous présente ${g('notre nouveau reporter officiel','notre nouvelle reporter officielle')} : <b>${P()}</b> ! » M. Ferrand te tend une carte plastifiée, encore tiède de la plastifieuse.</p>`,
      carte:() => `Reporter ${g('officiel','officielle')}`},
    argent: {titre:'📰 La Gazette est sortie !', txt:() => `
      <p>Vendredi, 16 h 30. La Gazette est affichée dans le hall, avec un petit encadré « Rectificatif » en bas de page.</p>
      <p>Maëlle te tape sur l'épaule : « Pas mal pour une première semaine, ${P()}. Tu restes à l'essai : la semaine prochaine, on vise zéro erreur, et la carte officielle est pour toi. »</p>`,
      carte:() => `Reporter stagiaire`},
    bronze: {titre:'📚 Édition reportée…', txt:() => `
      <p>Vendredi, M. Ferrand réunit la rédaction : trop d'erreurs cette semaine, la Gazette ne sera pas affichée. Les lecteurs doivent pouvoir nous croire.</p>
      <p>Maëlle ne t'en veut pas : « Tout le monde se fait avoir au début, ${P()}. Lundi, on recommence, et cette fois on vérifie tout. »</p>`,
      carte:null},
  },
  carteHaut: 'CARTE DE PRESSE', carteOrg: 'La Gazette du préau · Semaine n° 1',
  bilan: (bons, n, conf) => `${bons} info${bons>1?'s':''} sur ${n} bien jugée${bons>1?'s':''} · confiance des lecteurs : <b>${conf} %</b>`,
  delta: (d, conf) => `Confiance des lecteurs : <b>${d>0?'+':''}${d}</b> → ${conf} %`,
  rejouer: '🔁 Une nouvelle semaine',
};

// The Schoolyard Gazette · Apprentice Detective · English
const GAZETTE_EN = {
  carte: {titre:'Story mode', sous:'The Schoolyard Gazette', desc:'Become a reporter for the school paper.<br>5 days, 5 rumours: you decide whether we publish!'},
  titre: '📖 The Schoolyard Gazette',
  lead: `You have just joined the school newspaper club. Every day this week, a rumour reaches the newsroom. Your job: investigate, then say whether we publish it.`,
  lblPrenom: 'Your reporter name', errPrenom: 'Type your first name (or a nickname) to sign your articles!',
  btnStart: '📰 Start the week', btnIntro: `Let's go!`, btnEnquete: `🔎 I'll investigate`,
  jours: [{j:'Monday',h:'8:10 am'},{j:'Tuesday',h:'10:05 am'},{j:'Wednesday',h:'11:50 am'},{j:'Thursday',h:'1:20 pm'},{j:'Friday',h:'3:30 pm'}],
  arrivees: [
    {s:'tel',      t:() => `In the playground, Ines runs up to you waving her phone: "${P()}! Everyone is sharing this in the class group chat!"`},
    {s:'oral',     t:() => `In the canteen, between the mash and the yoghurt, Tom leans over your table: "My big brother told me something crazy. Listen to this."`},
    {s:'papier',   t:() => `On the notice board in the hall, someone has taped up a sheet written in felt-tip pen. A bunch of Year 7s are jostling in front of it.`},
    {s:'tel',      t:() => `In the library, Yann, the Gazette's photographer, slides his phone over to you: "Look what I found online. That would make a great front page, wouldn't it?"`},
    {s:'papier',   t:() => `In science class, a small folded note is passed from hand to hand until it reaches you. On it, a single sentence, underlined twice.`},
    {s:'video',    t:() => `On the bus, a video is playing on every screen. Dramatic music, a flashing title. Everyone looks convinced.`},
    {s:'magazine', t:() => `By the lockers, Lila holds out an open magazine: "It's printed in here, so it must be true, right?"`},
    {s:'oral',     t:() => `At break, a crowd has gathered under the shelter. In the middle, Noah is holding forth, very sure of himself:`},
    {s:'papier',   t:() => `In the Gazette's suggestion box, an anonymous slip of paper. The handwriting is hurried, with three exclamation marks.`},
    {s:'oral',     t:() => `Ms Garner, the PE teacher, calls out as she walks past, whistle round her neck: "Hey, you should write an article about that!"`},
    {s:'tel',      t:() => `Your phone buzzes: a message from an unknown number, "forwarded many times". It starts with "URGENT".`},
    {s:'oral',     t:() => `At the club, Samir, in Year 9, drops his bag and announces: "I've got an exclusive for the Gazette. I promise, it's big."`},
  ],
  demandes: [
    {w:'Maya', a:`folds her arms.`, d:() => `"So, ${P()}, do we publish or not?"`},
    {w:'Maya', a:`copies the sentence into her notebook.`, d:() => `"Investigate, and come back with sources. Then tell me whether we publish."`},
    {w:'Maya', a:`taps her watch.`, d:() => `"You have until the deadline to check. Do we publish or not?"`},
    {w:'Maya', a:`raises an eyebrow.`, d:() => `"It smells like a scoop… or a trap. Your call."`},
    {w:'Mr Farrow', a:`the librarian, looks up from his screen.`, d:() => `"News that makes you go 'wow' deserves twice as much checking."`},
  ],
  echos: {
    pubVrai:   [`Yesterday's article went all round the playground. Some Year 8s even copied it into their notebooks.`, `Yesterday the Gazette published a true, well-checked story. Readers want more.`],
    refusFaux: [`Yesterday the rumour set the class group chat on fire. The Gazette did not fall for it.`, `The paper from the school next door published the fake story you had turned down. They had to apologise.`],
    pubFaux:   [`Since yesterday's correction, some pupils snigger as they pass the Gazette's board. Time to win them back.`, `Yesterday a mistake had to be corrected. Maya pinned up the correction herself, without a word.`],
    refusVrai: [`Yesterday the science club posted the story you had turned down, with sources. Maya sighed.`, `Yesterday's story was true, and another paper published it. A missed scoop, but the week goes on.`],
  },
  suites: {
    pubVrai: [
      t => `You say "we publish". The headline "${t}" makes the front page. Mr Farrow nods: "Checked, and true. That is journalism."`,
      t => `You say "we publish". At lunchtime, your article "${t}" is read aloud at the Year 9 table. And this time, it is a true story.`,
    ],
    refusFaux: [
      t => `You say "we don't publish". Good call: the rumour goes all round the school… and the Gazette is the only paper that did not get it wrong.`,
      t => `You say "we don't publish", and you even suggest a "True or false?" box to take the rumour apart. Maya loves the idea.`,
      t => `You say "we don't publish". Maya crosses the sentence out of her notebook: "One less fake story in our pages. Thanks, ${P()}."`,
    ],
    pubFaux: [
      t => `You say "we publish". The next morning, a Year 10 pupil turns up at the newsroom with proof that it is false. A correction has to be printed.`,
      t => `You say "we publish". The headline "${t}" spreads… until the science teacher pins it up in her classroom, with a big FALSE across it in red marker.`,
    ],
    refusVrai: [
      t => `You say "we don't publish". The next day, the science club posts the same story, with sources. It was true: a missed scoop!`,
      t => `You say "we don't publish". Maya sighs: "Being careful is good. But if we don't publish a true story, our readers will never know it."`,
    ],
  },
  intro: () => `
    <div class="st-day">Monday · 8:02 am · School library</div>
    <div class="st-row">${avatarSVG(perso, 64)}<p>First day at the newspaper club. Piles of back issues, a humming printer, and a big poster: <b>"We publish nothing we haven't checked."</b></p></div>
    <p>Maya, the editor-in-chief (Year 10), hands you a brand-new notebook:</p>
    <div class="st-speech"><span class="st-who">Maya</span>"Welcome to the Schoolyard Gazette, ${P()}! Every day, a story is going to land here. You investigate, you check the sources, and you tell me: do we publish or not? If we publish nonsense, nobody will believe us any more."</div>
    <p>The gauge above your desk shows the <b>readers' trust</b>. It stands at 50%. It is up to you to raise it.</p>
    <p class="st-goal">🏆 This week's goal: earn your <b>official press card</b>.</p>`,
  dernierJour: `<b>Last day before the deadline.</b> One more story, and the Gazette goes to print.`,
  banniere: 'The Schoolyard Gazette', jauge: `Readers' trust`,
  vote: {non:`🗑️ We don't publish<small>it's false</small>`, oui:`📰 We publish!<small>it's true</small>`, question:'🗞️ Maya is waiting for your answer: do we publish or not?', tag:'Rumour of the day'},
  fins: {
    or: {titre:'🏆 Official press card!', txt:() => `
      <p>Friday, 4:30 pm. The Schoolyard Gazette is up in the hall and a queue is forming in front of it. Even the head teacher stops to read it.</p>
      <p>Maya climbs onto a chair: "Let me introduce our new official reporter: <b>${P()}</b>!" Mr Farrow hands you a laminated card, still warm from the laminator.</p>`,
      carte:() => `Official reporter`},
    argent: {titre:'📰 The Gazette is out!', txt:() => `
      <p>Friday, 4:30 pm. The Gazette is up in the hall, with a small "Correction" box at the bottom of the page.</p>
      <p>Maya pats you on the shoulder: "Not bad for a first week, ${P()}. You stay on trial: next week we aim for zero mistakes, and the official card is yours."</p>`,
      carte:() => `Trainee reporter`},
    bronze: {titre:'📚 Issue postponed…', txt:() => `
      <p>On Friday, Mr Farrow gathers the newsroom: too many mistakes this week, the Gazette will not go up. Readers must be able to believe us.</p>
      <p>Maya does not hold it against you: "Everyone gets caught at first, ${P()}. On Monday we start again, and this time we check everything."</p>`,
      carte:null},
  },
  carteHaut: 'PRESS CARD', carteOrg: 'The Schoolyard Gazette · Week 1',
  bilan: (bons, n, conf) => `${bons} out of ${n} stories judged correctly · readers' trust: <b>${conf}%</b>`,
  delta: (d, conf) => `Readers' trust: <b>${d>0?'+':''}${d}</b> → ${conf}%`,
  rejouer: '🔁 A new week',
};

// La Cellule Vérif · Enquêteur Junior · français
const VERIF_FR = {
  carte: {titre:'Mode histoire', sous:'La Cellule Vérif', desc:'Une semaine de stage dans un vrai journal.<br>5 jours, 5 affirmations : tu tamponnes VRAI ou FAUX !'},
  titre: '📖 La Cellule Vérif',
  lead: `Tu fais ton stage d'observation au Courrier du Fleuve, le quotidien de la région. On t'a confié un bureau à la Cellule Vérif, la rubrique qui contrôle ce que les lecteurs entendent partout. Chaque jour, une affirmation arrive. Tu enquêtes, puis tu la tamponnes : VRAI ou FAUX.`,
  lblPrenom: 'Ton prénom, pour le badge', errPrenom: 'Écris ton prénom (ou un surnom) pour ton badge de stagiaire !',
  chipF: '« elle », une stagiaire', chipM: '« il », un stagiaire',
  btnStart: '🗞️ Commencer le stage', btnIntro: `Au travail !`, btnEnquete: `🔎 Je vérifie`,
  jours: [{j:'Lundi',h:'9 h 15'},{j:'Mardi',h:'10 h 40'},{j:'Mercredi',h:'14 h 05'},{j:'Jeudi',h:'11 h 20'},{j:'Vendredi',h:'16 h 10'}],
  arrivees: [
    {s:'tel',      t:() => `La boîte « Vous nous avez demandé » sonne. Une lectrice écrit : « J'ai lu ça sur trois comptes différents. Vous pouvez me dire si c'est vrai ? »`},
    {s:'oral',     t:() => `À la machine à café, Hugo, le journaliste web, souffle sur son gobelet : « Mon beau-frère m'a soutenu ça dimanche, devant toute la table. J'ai pas su quoi répondre. »`},
    {s:'papier',   t:() => `Dans le courrier du matin, une lettre écrite à la main, timbre de travers. Un lecteur de 81 ans demande à la rubrique de trancher.`},
    {s:'video',    t:() => `Sur l'écran du service web, une vidéo grimpe dans les tendances depuis hier soir. Deux millions de vues, et un titre tout en majuscules.`},
    {s:'tel',      t:() => `Le standard te passe un appel. Une voix pressée : « Mon fils me répète ça depuis une semaine. Dites-moi que vous allez vérifier. »`},
    {s:'magazine', t:() => `Hugo pose sur ton bureau un magazine corné, trouvé dans la salle d'attente du dentiste : « Page 12. Si c'est imprimé, des gens vont le croire. »`},
    {s:'oral',     t:() => `En conférence de rédaction, le chef des sports lâche, entre deux sujets : « Tout le monde sait bien que… » Nadia te regarde et lève un doigt.`},
    {s:'tel',      t:() => `Sous l'article le plus lu du jour, un commentaire a récolté quatre cents réponses. Les lecteurs se disputent, et personne ne cite de source.`},
    {s:'papier',   t:() => `Un prospectus glissé dans les boîtes aux lettres du quartier arrive à la rédaction. Une phrase est entourée au stylo rouge par un lecteur.`},
    {s:'video',    t:() => `Une capture d'écran tourne dans le groupe de la rédaction. Elle vient d'une émission de la veille, et elle fait déjà le tour des réseaux.`},
    {s:'oral',     t:() => `Dans l'ascenseur, la correctrice te glisse : « On me l'a apprise à l'école, celle-là. Ça m'étonnerait qu'on me l'ait apprise pour rien. »`},
    {s:'tel',      t:() => `Un message transféré « de nombreuses fois » atterrit sur le téléphone de la rédaction. Il se termine par : « Faites tourner ! »`},
  ],
  demandes: [
    {w:'Nadia', a:`fait pivoter son fauteuil vers toi.`, d:() => `« Elle est pour toi, ${P()}. Tu cherches qui parle, d'où ça vient, et tu tamponnes. »`},
    {w:'Nadia', a:`pose les deux tampons sur ton bureau.`, d:() => `« VRAI ou FAUX. Pas d'à-peu-près : on signe de notre nom. »`},
    {w:'Nadia', a:`regarde l'horloge du plateau.`, d:() => `« La page part à 17 heures. Tu as le temps de bien faire, pas celui de traîner. »`},
    {w:'Nadia', a:`relève ses lunettes.`, d:() => `« Méfie-toi de ce qui t'arrange, ${P()}. Les affirmations qu'on a envie de croire sont les plus dangereuses. »`},
    {w:'Hugo', a:`passe la tête par-dessus la cloison.`, d:() => `« Un conseil de vieux stagiaire : une source qui a l'air sérieuse et une source sérieuse, ce n'est pas pareil. »`},
  ],
  echos: {
    pubVrai:   [`Ta vérification d'hier a été reprise par la radio locale, en citant la Cellule Vérif.`, `Hier, tu as confirmé une info vraie, sources à l'appui. Trois lecteurs ont écrit pour dire merci.`],
    refusFaux: [`L'intox que tu as épinglée hier continue de tourner, mais le lien vers ton article la suit partout dans les commentaires.`, `Hier, un site concurrent a relayé l'intox sans vérifier. La Cellule Vérif, elle, avait déjà tamponné FAUX.`],
    pubFaux:   [`Hier, il a fallu publier un rectificatif en haut de la rubrique. Nadia n'a rien dit, et c'était pire.`, `Depuis l'erreur d'hier, un lecteur poste « Et ça, vous l'avez vérifié ? » sous chaque article.`],
    refusVrai: [`L'info que tu as tamponnée FAUX hier était vraie. Une chercheuse a écrit à la rédaction, très poliment, avec ses références.`, `Hier, la rubrique a démenti une info exacte. Il a fallu corriger, et s'excuser auprès de la lectrice.`],
  },
  suites: {
    pubVrai: [
      t => `Tu tamponnes VRAI. L'article « ${t} » part en ligne avec tes sources en lien. Nadia relit, puis signe à côté de ton nom.`,
      t => `Tu tamponnes VRAI. Hugo siffle : « J'aurais juré que c'était une intox. Heureusement que tu es ${g('allé','allée')} voir les sources. »`,
    ],
    refusFaux: [
      t => `Tu tamponnes FAUX. La rubrique publie « ${t} : on a vérifié, c'est faux », avec l'explication. En une heure, c'est l'article le plus partagé du site.`,
      t => `Tu tamponnes FAUX, et tu ajoutes un paragraphe sur l'origine de cette idée reçue. Nadia : « Dire que c'est faux, c'est bien. Expliquer pourquoi on y croit, c'est mieux. »`,
      t => `Tu tamponnes FAUX. Nadia hoche la tête : « Celle-là traînait depuis des années. Merci, ${P()}. »`,
    ],
    pubFaux: [
      t => `Tu tamponnes VRAI. Le soir même, un spécialiste appelle la rédaction : c'est faux, et il a les études sous les yeux. Rectificatif en haut de page.`,
      t => `Tu tamponnes VRAI. « ${t} » part en ligne avec le logo de la Cellule Vérif… et les captures d'écran de l'erreur circulent encore le lendemain.`,
    ],
    refusVrai: [
      t => `Tu tamponnes FAUX. Le lendemain, l'auteure de l'étude écrit à la rédaction : c'était vrai, et la rubrique vient de démentir un fait établi.`,
      t => `Tu tamponnes FAUX. Nadia soupire : « Douter de tout, ce n'est pas vérifier. Une info surprenante peut être vraie : c'est aux sources de le dire. »`,
    ],
  },
  intro: () => `
    <div class="st-day">Lundi · 9 h 02 · Rédaction du Courrier du Fleuve</div>
    <div class="st-row">${avatarSVG(perso, 64)}<p>Premier jour de stage. Un grand plateau, des écrans partout, et au fond, trois bureaux sous une pancarte : <b>« Cellule Vérif. On ne croit personne sur parole. »</b></p></div>
    <p>Nadia, la cheffe de la rubrique, te tend un badge et deux tampons encreurs :</p>
    <div class="st-speech"><span class="st-who">Nadia</span>« Bienvenue, ${P()}. Ici, les lecteurs nous envoient ce qu'ils entendent partout. On remonte aux sources, on regarde qui parle et de quoi il est spécialiste, puis on tamponne : VRAI ou FAUX. Chaque erreur se paie cher. »</div>
    <p>L'écran au-dessus de ton bureau affiche la <b>crédibilité de la rubrique</b>. Elle est à 50 %. À toi de la faire monter.</p>
    <p class="st-goal">🏆 Objectif du stage : voir <b>ta signature dans le journal</b> de samedi.</p>`,
  dernierJour: `<b>Dernier jour de stage.</b> La page du week-end boucle ce soir : encore une vérification.`,
  banniere: 'La Cellule Vérif', jauge: 'Crédibilité de la rubrique',
  vote: {non:`❌ Je tamponne FAUX`, oui:`✅ Je tamponne VRAI`, question:'🗞️ Nadia attend ton verdict : quel tampon ?', tag:'À vérifier'},
  fins: {
    or: {titre:'🏆 Ta signature dans le journal !', txt:() => `
      <p>Vendredi, 18 heures. La page du week-end est bouclée, et sous le dernier article il y a deux noms : celui de Nadia, et le tien.</p>
      <p>La rédactrice en chef passe devant ton bureau : « ${P()}, c'est ça ? Nadia me dit que tu ne laisses rien passer. Reviens cet été, on aura besoin de toi. » Hugo te lance ton badge : il a barré « stagiaire » au marqueur.</p>`,
      carte:() => `${g('Vérificateur associé','Vérificatrice associée')}`},
    argent: {titre:'📰 Stage validé', txt:() => `
      <p>Vendredi, 18 heures. La page est partie, avec un rectificatif dans la semaine. Ça arrive aux meilleurs, mais ça se voit.</p>
      <p>Nadia signe ta convention : « Tu as le réflexe, ${P()}. Il te manque la patience d'aller jusqu'à la dernière source. Reviens quand tu veux, on recommence une semaine. »</p>`,
      carte:() => `Stagiaire`},
    bronze: {titre:'📚 Rubrique suspendue', txt:() => `
      <p>Vendredi, la rédactrice en chef réunit la Cellule Vérif : trop d'erreurs cette semaine, la rubrique ne paraîtra pas samedi. Une rubrique de vérification qui se trompe, plus personne ne la lit.</p>
      <p>Nadia ne t'accable pas : « J'ai fait pire à mes débuts, ${P()}. Regarde qui parle, et de quoi il est vraiment spécialiste. Lundi, on reprend tout. »</p>`,
      carte:null},
  },
  carteHaut: 'BADGE RÉDACTION', carteOrg: 'Le Courrier du Fleuve · Cellule Vérif',
  bilan: (bons, n, conf) => `${bons} affirmation${bons>1?'s':''} sur ${n} bien tamponnée${bons>1?'s':''} · crédibilité de la rubrique : <b>${conf} %</b>`,
  delta: (d, conf) => `Crédibilité de la rubrique : <b>${d>0?'+':''}${d}</b> → ${conf} %`,
  rejouer: '🔁 Une nouvelle semaine de stage',
};

// The Fact-Check Desk · Junior Investigator · English
const VERIF_EN = {
  carte: {titre:'Story mode', sous:'The Fact-Check Desk', desc:'A week of work experience at a real newspaper.<br>5 days, 5 claims: you stamp them TRUE or FALSE!'},
  titre: '📖 The Fact-Check Desk',
  lead: `You are doing your work experience at the River Courier, the regional daily. You have been assigned to the Fact-Check Desk, the section that checks what readers hear everywhere. Every day, a claim comes in. You investigate, then you stamp it: TRUE or FALSE.`,
  lblPrenom: 'Your first name, for the badge', errPrenom: 'Type your first name (or a nickname) for your trainee badge!',
  btnStart: '🗞️ Start the week', btnIntro: `Let's get to work!`, btnEnquete: `🔎 I'll check it`,
  jours: [{j:'Monday',h:'9:15 am'},{j:'Tuesday',h:'10:40 am'},{j:'Wednesday',h:'2:05 pm'},{j:'Thursday',h:'11:20 am'},{j:'Friday',h:'4:10 pm'}],
  arrivees: [
    {s:'tel',      t:() => `The "You asked us" inbox pings. A reader writes: "I have seen this on three different accounts. Can you tell me whether it is true?"`},
    {s:'oral',     t:() => `At the coffee machine, Hugo, the web reporter, blows on his cup: "My brother-in-law insisted on this on Sunday, in front of the whole table. I didn't know what to say."`},
    {s:'papier',   t:() => `In the morning post, a handwritten letter with a crooked stamp. An 81-year-old reader asks the desk to settle the matter.`},
    {s:'video',    t:() => `On the web team's screen, a video has been climbing the trends since last night. Two million views, and a title all in capitals.`},
    {s:'tel',      t:() => `The switchboard puts a call through to you. A hurried voice: "My son has been telling me this for a week. Tell me you are going to check."`},
    {s:'magazine', t:() => `Hugo drops a dog-eared magazine on your desk, found in the dentist's waiting room: "Page 12. If it is in print, people will believe it."`},
    {s:'oral',     t:() => `In the editorial meeting, the sports editor says, between two topics: "Everyone knows that…" Nadia looks at you and raises a finger.`},
    {s:'tel',      t:() => `Under today's most-read article, one comment has drawn four hundred replies. Readers are arguing, and nobody cites a source.`},
    {s:'papier',   t:() => `A leaflet pushed through letterboxes in the neighbourhood reaches the newsroom. A reader has circled one sentence in red pen.`},
    {s:'video',    t:() => `A screenshot is going round the newsroom group chat. It comes from last night's TV show, and it is already all over social media.`},
    {s:'oral',     t:() => `In the lift, the proofreader tells you: "I was taught that one at school. I doubt they taught it to me for nothing."`},
    {s:'tel',      t:() => `A message "forwarded many times" lands on the newsroom phone. It ends with: "Pass it on!"`},
  ],
  demandes: [
    {w:'Nadia', a:`swivels her chair towards you.`, d:() => `"This one is yours, ${P()}. Find out who is speaking, where it comes from, and stamp it."`},
    {w:'Nadia', a:`puts the two stamps on your desk.`, d:() => `"TRUE or FALSE. No more-or-less: we put our name to it."`},
    {w:'Nadia', a:`glances at the newsroom clock.`, d:() => `"The page goes at 5 pm. You have time to do it properly, not time to dawdle."`},
    {w:'Nadia', a:`pushes her glasses up.`, d:() => `"Beware of what suits you, ${P()}. The claims we want to believe are the most dangerous."`},
    {w:'Hugo', a:`pops his head over the partition.`, d:() => `"A tip from an old trainee: a source that looks serious and a serious source are not the same thing."`},
  ],
  echos: {
    pubVrai:   [`Yesterday's check was picked up by local radio, quoting the Fact-Check Desk.`, `Yesterday you confirmed a true story, with sources. Three readers wrote in to say thank you.`],
    refusFaux: [`The hoax you flagged yesterday is still going round, but the link to your article follows it everywhere in the comments.`, `Yesterday a rival site passed on the hoax without checking. The Fact-Check Desk had already stamped it FALSE.`],
    pubFaux:   [`Yesterday a correction had to go at the top of the section. Nadia said nothing, which was worse.`, `Since yesterday's mistake, one reader posts "And did you check this one?" under every article.`],
    refusVrai: [`The claim you stamped FALSE yesterday was true. A researcher wrote to the newsroom, very politely, with her references.`, `Yesterday the desk denied an accurate fact. It had to be corrected, with an apology to the reader.`],
  },
  suites: {
    pubVrai: [
      t => `You stamp it TRUE. The article "${t}" goes online with links to your sources. Nadia reads it through, then signs next to your name.`,
      t => `You stamp it TRUE. Hugo whistles: "I would have sworn it was a hoax. Good thing you went and looked at the sources."`,
    ],
    refusFaux: [
      t => `You stamp it FALSE. The desk publishes "${t}: we checked, it is false", with the explanation. Within an hour it is the most shared article on the site.`,
      t => `You stamp it FALSE, and you add a paragraph on where this misconception comes from. Nadia: "Saying it is false is good. Explaining why people believe it is better."`,
      t => `You stamp it FALSE. Nadia nods: "That one had been hanging around for years. Thanks, ${P()}."`,
    ],
    pubFaux: [
      t => `You stamp it TRUE. That same evening, a specialist calls the newsroom: it is false, and he has the studies in front of him. Correction at the top of the page.`,
      t => `You stamp it TRUE. "${t}" goes online with the Fact-Check Desk logo… and screenshots of the mistake are still going round the next day.`,
    ],
    refusVrai: [
      t => `You stamp it FALSE. The next day, the author of the study writes to the newsroom: it was true, and the desk has just denied an established fact.`,
      t => `You stamp it FALSE. Nadia sighs: "Doubting everything is not checking. A surprising claim can be true: it is for the sources to say."`,
    ],
  },
  intro: () => `
    <div class="st-day">Monday · 9:02 am · River Courier newsroom</div>
    <div class="st-row">${avatarSVG(perso, 64)}<p>First day of work experience. A big open-plan office, screens everywhere, and at the back, three desks under a sign: <b>"Fact-Check Desk. We take nobody's word for it."</b></p></div>
    <p>Nadia, the head of the desk, hands you a badge and two ink stamps:</p>
    <div class="st-speech"><span class="st-who">Nadia</span>"Welcome, ${P()}. Readers send us what they hear everywhere. We trace it back to the sources, we look at who is speaking and what they are a specialist in, then we stamp it: TRUE or FALSE. Every mistake costs us dearly."</div>
    <p>The screen above your desk shows the <b>desk's credibility</b>. It stands at 50%. It is up to you to raise it.</p>
    <p class="st-goal">🏆 Goal of the week: see <b>your name in Saturday's paper</b>.</p>`,
  dernierJour: `<b>Last day of work experience.</b> The weekend page closes tonight: one more check.`,
  banniere: 'The Fact-Check Desk', jauge: `Desk's credibility`,
  vote: {non:`❌ I stamp it FALSE`, oui:`✅ I stamp it TRUE`, question:'🗞️ Nadia is waiting for your verdict: which stamp?', tag:'To be checked'},
  fins: {
    or: {titre:'🏆 Your name in the paper!', txt:() => `
      <p>Friday, 6 pm. The weekend page is done, and under the last article there are two names: Nadia's, and yours.</p>
      <p>The editor-in-chief walks past your desk: "${P()}, is it? Nadia tells me nothing gets past you. Come back this summer, we will need you." Hugo tosses you your badge: he has crossed out "trainee" in marker pen.</p>`,
      carte:() => `Associate fact-checker`},
    argent: {titre:'📰 Work experience passed', txt:() => `
      <p>Friday, 6 pm. The page has gone, with one correction during the week. It happens to the best, but it shows.</p>
      <p>Nadia signs your placement form: "You have the reflex, ${P()}. What you lack is the patience to go right to the last source. Come back whenever you like, we will do another week."</p>`,
      carte:() => `Trainee`},
    bronze: {titre:'📚 Section suspended', txt:() => `
      <p>On Friday, the editor-in-chief gathers the Fact-Check Desk: too many mistakes this week, the section will not run on Saturday. Nobody reads a fact-checking section that gets things wrong.</p>
      <p>Nadia does not rub it in: "I did worse when I started, ${P()}. Look at who is speaking, and what they are really a specialist in. On Monday, we start over."</p>`,
      carte:null},
  },
  carteHaut: 'NEWSROOM BADGE', carteOrg: 'The River Courier · Fact-Check Desk',
  bilan: (bons, n, conf) => `${bons} out of ${n} claims stamped correctly · desk's credibility: <b>${conf}%</b>`,
  delta: (d, conf) => `Desk's credibility: <b>${d>0?'+':''}${d}</b> → ${conf}%`,
  rejouer: '🔁 Another week at the desk',
};

const RECITS = {junior:{fr:GAZETTE_FR, en:GAZETTE_EN}, inter:{fr:VERIF_FR, en:VERIF_EN}};
const DELTA = {pubVrai:+10, refusFaux:+10, pubFaux:-15, refusVrai:-10};
const EN = () => lang==='en';
function recitDispo(){ return (RECITS[currentLevel]||{})[EN()?'en':'fr'] || null; }

// Les libellés de l'écran de création, communs aux récits d'une même langue
const UI = {
  fr: {nouveau:'Nouveau', retour:'← Retour', phPrenom:'Ton prénom', genre:`Dans l'histoire, on dit de toi…`,
       avatar:'🎨 Personnaliser mon avatar', facultatif:'(facultatif)', coiffure:'Coiffure', cheveux:'Couleur des cheveux', peau:'Couleur de peau', haut:'Couleur du tee-shirt',
       lunettes:'Lunettes', sans:'Sans', avec:'Avec', coupes:{courts:'Courts', longs:'Longs', boucles:'Bouclés', couette:'Queue-de-cheval'}, changer:'🎨 Changer de personnage'},
  en: {nouveau:'New', retour:'← Back', phPrenom:'Your first name', genre:'',
       avatar:'🎨 Customise my avatar', facultatif:'(optional)', coiffure:'Hairstyle', cheveux:'Hair colour', peau:'Skin colour', haut:'T-shirt colour',
       lunettes:'Glasses', sans:'Without', avec:'With', coupes:{courts:'Short', longs:'Long', boucles:'Curly', couette:'Ponytail'}, changer:'🎨 Change character'},
};
const U = () => UI[EN()?'en':'fr'];

// ── État du mode histoire ─────────────────────────────────────────
const H = {on:false, recit:null, confiance:50, dernier:null, arrivees:[], demandes:[], sceneFaite:-1};
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

// La carte du mode histoire n'apparaît que si le niveau choisi a un récit dans la langue du jeu.
function majCarteMode(){
  const c = $('st-card-mode'); if(!c) return;
  const r = recitDispo();
  if(!r){ c.style.display = 'none'; return; }
  c.innerHTML = `<span class="st-new">${U().nouveau}</span><span class="mc-icon">📖</span>
    <div><div class="mc-title">${r.carte.titre}</div>
    <div class="st-mode-sub">${r.carte.sous}</div>
    <div class="mc-desc">${r.carte.desc}</div></div>`;
  c.style.display = '';
}

// ── Création du personnage ────────────────────────────────────────
function nuancier(nom, libelle, couleurs, actuelle){
  return `<div class="st-swatches" role="radiogroup">${couleurs.map((c,i) =>
    `<button type="button" class="st-sw${c===actuelle?' on':''}" style="background:${c}" data-k="${nom}" data-v="${c}" aria-label="${libelle} ${i+1}" aria-pressed="${c===actuelle}"></button>`).join('')}</div>`;
}

function ouvrirCreation(){
  const r = recitDispo(); if(!r) return;
  H.recit = r;
  const u = U();
  $('modescreen').style.display = 'none';
  $('final').style.display = 'none';
  const s = $('st-setup');
  // En anglais, le récit s'adresse au joueur à la deuxième personne : aucun accord, donc pas de choix « elle / il ».
  const genre = r.chipF ? `
        <div class="st-label">${u.genre}</div>
        <div class="st-chips" role="radiogroup">
          <button type="button" class="st-chip${perso.genre==='f'?' on':''}" data-genre="f" aria-pressed="${perso.genre==='f'}">${r.chipF}</button>
          <button type="button" class="st-chip${perso.genre==='m'?' on':''}" data-genre="m" aria-pressed="${perso.genre==='m'}">${r.chipM}</button>
        </div>` : '';
  s.innerHTML = `
    <button class="back-btn" type="button" id="st-back">${u.retour}</button>
    <h2 class="st-h2">${r.titre}</h2>
    <p class="st-lead">${r.lead}</p>
    <div class="st-setup-grid">
      <div class="st-preview" id="st-preview">${avatarSVG(perso, 120)}</div>
      <div class="st-fields">
        <label class="st-label" for="st-prenom">${r.lblPrenom}</label>
        <input id="st-prenom" class="form-input" maxlength="18" autocomplete="off" placeholder="${u.phPrenom}" value="${esc(perso.prenom)}">${genre}
      </div>
    </div>
    <details class="st-details">
      <summary>${u.avatar} <span>${u.facultatif}</span></summary>
      <div class="st-label">${u.coiffure}</div>
      <div class="st-chips">${COUPES.map(([v]) => `<button type="button" class="st-chip${perso.coupe===v?' on':''}" data-k="coupe" data-v="${v}" aria-pressed="${perso.coupe===v}">${u.coupes[v]}</button>`).join('')}</div>
      <div class="st-label">${u.cheveux}</div>${nuancier('cheveux', u.cheveux, CHEVEUX, perso.cheveux)}
      <div class="st-label">${u.peau}</div>${nuancier('peau', u.peau, PEAUX, perso.peau)}
      <div class="st-label">${u.haut}</div>${nuancier('haut', u.haut, HAUTS, perso.haut)}
      <div class="st-label">${u.lunettes}</div>
      <div class="st-chips">
        <button type="button" class="st-chip${!perso.lunettes?' on':''}" data-k="lunettes" data-v="0" aria-pressed="${!perso.lunettes}">${u.sans}</button>
        <button type="button" class="st-chip${perso.lunettes?' on':''}" data-k="lunettes" data-v="1" aria-pressed="${!!perso.lunettes}">${u.avec}</button>
      </div>
    </details>
    <p class="st-err" id="st-err" role="alert"></p>
    <button class="mclose st-go" type="button" id="st-start">${r.btnStart}</button>`;
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
    if(!p){ $('st-err').textContent = r.errPrenom; $('st-prenom').focus(); return; }
    perso.prenom = p; sauverPerso();
    lancerSemaine(true);
  };
  $('st-prenom').onkeydown = e => { if(e.key==='Enter') $('st-start').click(); };
  setTimeout(() => $('st-prenom').focus(), 60);
}

// ── Déroulé ───────────────────────────────────────────────────────
let _intro = false;
function lancerSemaine(avecIntro){
  if(!H.recit) H.recit = recitDispo();
  if(!H.recit) return;
  H.on = true; H.confiance = 50; H.dernier = null; H.sceneFaite = -1;
  H.arrivees = shuf(H.recit.arrivees); H.demandes = shuf(H.recit.demandes);
  _intro = !!avecIntro;
  $('st-setup').style.display = 'none';
  $('final').style.display = 'none';
  _startGame(5, true);   // tire 5 affirmations du niveau et appelle renderQ (enveloppé ci-dessous)
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
  afficherScene(H.recit.intro(), H.recit.btnIntro, () => { _intro = false; sceneJour(); });
}

function sceneJour(){
  const r = H.recit;
  const j = r.jours[qi] || r.jours[r.jours.length-1];
  const a = H.arrivees[qi % H.arrivees.length];
  const q = QS[qi];
  const dm = H.demandes[qi % H.demandes.length];
  const echo = H.dernier ? `<p class="st-echo">${pickNR(r.echos[H.dernier])}</p>` : '';
  const vendredi = qi===QS.length-1 ? `<p>${r.dernierJour}</p>` : '';
  const support = {tel:'📱', papier:'📝', oral:'💬', video:'▶️', magazine:'📰'}[a.s];
  afficherScene(`
    <div class="st-day">${j.j} · ${j.h}</div>
    ${echo}${vendredi}
    <p>${a.t()}</p>
    <div class="st-support st-${a.s}"><span class="st-sup-ico">${support}</span><span>${esc(q.s)}</span></div>
    <div class="st-speech"><span class="st-who">${dm.w}</span><i>${dm.a}</i> ${dm.d()}</div>`,
    r.btnEnquete, montrerQuestion);
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
  const r = H.recit;
  const j = r.jours[qi] || r.jours[r.jours.length-1];
  const niv = H.confiance>=80 ? 'haut' : H.confiance>=45 ? 'moyen' : 'bas';
  b.innerHTML = `${avatarSVG(perso, 44)}
    <div class="st-ban-txt"><b>${P()}</b> · ${j.j}<br><span>${r.banniere}</span></div>
    <div class="st-gauge" title="${r.jauge}"><div class="st-gauge-lbl">${r.jauge} <b>${H.confiance}${EN()?'':' '}%</b></div>
      <div class="st-gauge-bg"><div class="st-gauge-fill ${niv}" style="width:${H.confiance}%"></div></div></div>`;
  b.style.display = 'flex';
}

// Libellés du jeu, version récit ou version normale
function libelles(){
  const vf = document.querySelector('#vzone .vbtn.faux'), vv = document.querySelector('#vzone .vbtn.vrai');
  const qz = document.querySelector('#vzone p'), tag = document.querySelector('#game .stag');
  if(H.on){
    const v = H.recit.vote;
    vf.innerHTML = v.non; vv.innerHTML = v.oui;
    qz.textContent = v.question; tag.textContent = v.tag;
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
  box.innerHTML = `<p>${pickNR(H.recit.suites[cas])(titreCourt(q.s))}</p>
    <div class="st-delta">${H.recit.delta(d, H.confiance)}</div>`;
  box.style.display = 'block';
  majBanniere();
};

const _showFinal = showFinal;
showFinal = function(){
  _showFinal();
  $('st-banner').style.display = 'none';
  if(!H.on) return;
  const r = H.recit;
  const f = $('final');
  const bons = gameHistory.filter(h => h.wasCorrect).length;
  // L'écran final normal garde le score, le bilan et les conseils ; sa médaille ferait doublon avec la fin du récit
  f.querySelectorAll('.fmedal, .fh2').forEach(e => e.style.display = 'none');
  const fh = f.querySelector('.fh2'); if(fh && fh.nextElementSibling && fh.nextElementSibling.tagName==='P') fh.nextElementSibling.style.display = 'none';
  // Meilleure fin : 80 % au moins. Valider une fausse info coûte plus cher qu'en écarter une vraie :
  // avec une seule erreur, on l'obtient si l'on a écarté une info vraie (80 %), pas si l'on a validé une fausse (75 %).
  const cls = H.confiance >= 80 ? 'or' : H.confiance >= 45 ? 'argent' : 'bronze';
  const fin = r.fins[cls];
  const carte = fin.carte ? `
    <div class="st-press ${cls}">
      <div class="st-press-top">${r.carteHaut}</div>
      <div class="st-press-body">${avatarSVG(perso, 78)}
        <div><div class="st-press-name">${P()}</div><div class="st-press-role">${fin.carte()}</div>
        <div class="st-press-org">${r.carteOrg}</div></div></div>
    </div>` : '';
  const bloc = document.createElement('div');
  bloc.className = 'st-fin';
  bloc.innerHTML = `<h2 class="st-h2">${fin.titre}</h2>${fin.txt()}${carte}
    <div class="st-bilan">${r.bilan(bons, QS.length, H.confiance)}</div>`;
  f.insertBefore(bloc, f.firstChild);
  const rb = $('rbtn'); if(rb) rb.textContent = r.rejouer;
  const mb = $('mbtn');
  if(mb && !$('st-perso-btn')){
    const pb = document.createElement('button');
    pb.id = 'st-perso-btn'; pb.type = 'button'; pb.textContent = U().changer;
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
