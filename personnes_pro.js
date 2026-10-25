// ═══════════════════════════════════════════════════════════════════════
// FakeMètre · niveau Fact-Checker Confirmé : les PERSONNES des sources
// (1er octobre 2026)
//
// Antonin : « dans le mode expert, ne pas mettre par exemple astronaute, mettre juste
// un nom et un prénom ; c'est à la personne de cliquer sur une petite loupe pour
// arriver sur une fausse page de recherche et voir si cette personne est compétente
// dans son domaine. »
//
// Une entrée par source-personne de QUESTIONS_PRO (clé : p<question>-<source>).
// - nom      : le seul nom affiché pendant l'enquête (fictif).
// - cle      : le champ « n » de la source, en FR et en EN. C'est lui qui relie l'entrée
//              à la source, même si l'ordre des questions change un jour.
// - support  : ce qui remplace la profession sur la carte (« Vidéo en ligne »…).
// - say      : (rare) citation réécrite parce que l'originale dévoilait le métier.
// - resultats: les 2-3 résultats du faux moteur « Fouineur », chacun avec sa page.
// - reel     : vraie personne publique : la loupe ouvre une vraie recherche web,
//              on n'invente rien sur elle.
// Personnes, institutions, médias et sites sont FICTIFS.
// ═══════════════════════════════════════════════════════════════════════
const PERSONNES_PRO={
 "p0-0": {
  "nom": "Irène Garnier",
  "genre": "f",
  "cle": {
   "fr": "Historienne spécialiste de l'Allemagne nazie",
   "en": "Historian specialising in Nazi Germany"
  },
  "support": {
   "fr": "Interview dans un magazine",
   "en": "Magazine interview"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Irène Garnier – Professeure d'histoire contemporaine – Université de Rochebrune",
     "url": "univ-rochebrune.fr › histoire › equipe › irene-garnier",
     "extrait": "Professeure d'histoire contemporaine, spécialiste de l'Allemagne de l'entre-deux-guerres et du régime nazi. Responsable du master Histoire de l'Europe…",
     "page": {
      "type": "institution",
      "site": "Université de Rochebrune – Département d'histoire",
      "domaine": "univ-rochebrune.fr",
      "titre": "Irène Garnier",
      "sousTitre": "Professeure d'histoire contemporaine",
      "date": null,
      "encart": [
       [
        "Laboratoire",
        "Centre de recherches sur l'Europe au XXe siècle"
       ],
       [
        "Thèse",
        "2003, « Voter sous Weimar : partis et électeurs allemands, 1919-1933 »"
       ],
       [
        "Enseignement",
        "Master Histoire de l'Europe contemporaine"
       ]
      ],
      "sections": [
       {
        "titre": "Recherches",
        "texte": "Irène Garnier travaille sur la vie politique allemande entre 1918 et 1945 : élections, partis, fonctionnement des institutions de la République de Weimar et mise en place de la dictature nazie. Elle a dépouillé de nombreuses archives régionales allemandes et dirige actuellement un programme sur la presse locale de 1930 à 1934."
       },
       {
        "titre": "Publications récentes",
        "liste": [
         "La République fragile. Institutions et crises de Weimar (2019)",
         "Comprendre le nazisme, manuel pour les étudiants (2021)",
         "Avec F. Lindner, Les campagnes électorales allemandes, 1930-1933 (2016)"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Irène Garnier – Professor of Modern History – University of Rochebrune",
     "url": "univ-rochebrune.fr › history › staff › irene-garnier",
     "extrait": "Professor of modern history, specialist in interwar Germany and the Nazi regime. Head of the master's programme in European History…",
     "page": {
      "type": "institution",
      "site": "University of Rochebrune – Department of History",
      "domaine": "univ-rochebrune.fr",
      "titre": "Irène Garnier",
      "sousTitre": "Professor of Modern History",
      "date": null,
      "encart": [
       [
        "Research centre",
        "Centre for Research on 20th-Century Europe"
       ],
       [
        "PhD",
        "2003, “Voting under Weimar: German parties and voters, 1919-1933”"
       ],
       [
        "Teaching",
        "Master's in Modern European History"
       ]
      ],
      "sections": [
       {
        "titre": "Research",
        "texte": "Irène Garnier works on German political life between 1918 and 1945: elections, parties, how the institutions of the Weimar Republic worked and how the Nazi dictatorship was set up. She has studied many regional German archives and currently leads a project on the local press from 1930 to 1934."
       },
       {
        "titre": "Recent publications",
        "liste": [
         "The Fragile Republic: Weimar's Institutions and Crises (2019)",
         "Understanding Nazism, a handbook for students (2021)",
         "With F. Lindner, German Election Campaigns, 1930-1933 (2016)"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Garnier, Irène – Profil auteur – SciIndex",
     "url": "sciindex.org › auteurs › garnier-irene",
     "extrait": "34 publications · 612 citations · Domaines : histoire contemporaine, histoire politique de l'Allemagne, République de Weimar…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Irène Garnier",
      "sousTitre": "Université de Rochebrune, département d'histoire",
      "date": null,
      "encart": [
       [
        "Publications",
        "34"
       ],
       [
        "Citations",
        "612"
       ],
       [
        "Domaines",
        "Histoire de l'Allemagne, 1918-1945"
       ]
      ],
      "sections": [
       {
        "titre": "Articles les plus cités",
        "liste": [
         "« Les électeurs du parti nazi en Hesse, 1930-1932 », Revue d'histoire européenne, 2008",
         "« Le président et le chancelier : les pouvoirs sous Weimar », Cahiers d'histoire politique, 2012",
         "« La presse régionale face à la dictature, 1933 », Histoire & Sociétés, 2018"
        ]
       },
       {
        "titre": "À propos de ce profil",
        "texte": "Profil vérifié par l'établissement. Les articles indexés sont parus dans des revues d'histoire à comité de lecture, c'est-à-dire relus par d'autres spécialistes avant publication."
       }
      ]
     }
    },
    "en": {
     "titre": "Garnier, Irène – Author profile – SciIndex",
     "url": "sciindex.org › authors › garnier-irene",
     "extrait": "34 publications · 612 citations · Fields: modern history, political history of Germany, Weimar Republic…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Irène Garnier",
      "sousTitre": "University of Rochebrune, Department of History",
      "date": null,
      "encart": [
       [
        "Publications",
        "34"
       ],
       [
        "Citations",
        "612"
       ],
       [
        "Fields",
        "History of Germany, 1918-1945"
       ]
      ],
      "sections": [
       {
        "titre": "Most cited articles",
        "liste": [
         "“Nazi party voters in Hesse, 1930-1932”, European History Review, 2008",
         "“The president and the chancellor: powers under Weimar”, Political History Papers, 2012",
         "“The regional press facing dictatorship, 1933”, History & Societies, 2018"
        ]
       },
       {
        "titre": "About this profile",
        "texte": "Profile verified by the institution. The indexed articles appeared in peer-reviewed history journals, which means they were checked by other specialists before publication."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "« Revenir aux sources pour comprendre Weimar » – entretien avec Irène Garnier",
     "url": "magazine-des-savoirs.fr › histoire › entretien-irene-garnier",
     "extrait": "Professeure à l'université de Rochebrune, Irène Garnier consacre depuis vingt ans ses recherches à l'Allemagne de l'entre-deux-guerres. Elle publie un livre…",
     "page": {
      "type": "presse",
      "site": "Le Magazine des Savoirs",
      "domaine": "magazine-des-savoirs.fr",
      "titre": "« Revenir aux sources pour comprendre Weimar »",
      "sousTitre": "Entretien avec l'historienne Irène Garnier",
      "date": "8 février 2025",
      "encart": [
       [
        "Livre",
        "Weimar, idées reçues (Éditions du Marronnier, 2025)"
       ]
      ],
      "sections": [
       {
        "texte": "Professeure à l'université de Rochebrune, Irène Garnier consacre depuis vingt ans ses recherches à l'Allemagne de l'entre-deux-guerres. Elle publie un ouvrage destiné au grand public, où elle revient sur les idées reçues les plus répandues sur cette période."
       },
       {
        "titre": "Pourquoi ce livre ?",
        "texte": "« Mes étudiants arrivent souvent avec des souvenirs de films ou de vidéos. Mon travail, c'est de les ramener aux sources : les textes de loi, les résultats des scrutins, les journaux de l'époque. » Elle insiste sur la méthode : vérifier chaque chiffre dans les archives avant de l'utiliser."
       }
      ]
     }
    },
    "en": {
     "titre": "“Going back to the sources to understand Weimar” – an interview with Irène Garnier",
     "url": "magazine-des-savoirs.fr › history › interview-irene-garnier",
     "extrait": "A professor at the University of Rochebrune, Irène Garnier has spent twenty years researching interwar Germany. She is publishing a book…",
     "page": {
      "type": "presse",
      "site": "Le Magazine des Savoirs",
      "domaine": "magazine-des-savoirs.fr",
      "titre": "“Going back to the sources to understand Weimar”",
      "sousTitre": "An interview with historian Irène Garnier",
      "date": "8 February 2025",
      "encart": [
       [
        "Book",
        "Weimar: Common Misconceptions (Éditions du Marronnier, 2025)"
       ]
      ],
      "sections": [
       {
        "texte": "A professor at the University of Rochebrune, Irène Garnier has spent twenty years researching interwar Germany. She is publishing a book for the general public in which she looks at the most widespread misconceptions about this period."
       },
       {
        "titre": "Why this book?",
        "texte": "“My students often arrive with memories of films or videos. My job is to bring them back to the sources: the texts of the laws, the election results, the newspapers of the time.” She stresses the method: check every figure in the archives before using it."
       }
      ]
     }
    }
   }
  ]
 },
 "p0-2": {
  "nom": "Léonie Brunel",
  "genre": "f",
  "cle": {
   "fr": "Chaîne d'histoire tenue par une historienne (740 k abonnés)",
   "en": "History channel run by a historian (740k subscribers)"
  },
  "support": {
   "fr": "Vidéo en ligne",
   "en": "Online video"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Histoire en clair – Léonie Brunel – Vidéoflux",
     "url": "videoflux.com › @histoireenclair",
     "extrait": "740 k abonnés · Chaîne de vulgarisation historique tenue par Léonie Brunel, maîtresse de conférences en histoire contemporaine. Sources en description…",
     "page": {
      "type": "video",
      "site": "Vidéoflux",
      "domaine": "videoflux.com",
      "titre": "Histoire en clair",
      "sousTitre": "Chaîne de Léonie Brunel",
      "date": null,
      "encart": [
       [
        "Abonnés",
        "740 k"
       ],
       [
        "Vidéos",
        "186"
       ],
       [
        "Créée en",
        "2017"
       ]
      ],
      "sections": [
       {
        "titre": "À propos",
        "texte": "Je suis maîtresse de conférences en histoire contemporaine à l'Université de Saint-Aurèle. Sur cette chaîne, je raconte l'histoire du XXe siècle à partir des documents d'époque. Chaque vidéo est relue par un ou une collègue spécialiste, et toutes les sources (archives, livres, chiffres) sont listées en description."
       },
       {
        "titre": "Vidéos populaires",
        "liste": [
         "La crise de 1929 en 15 minutes",
         "Weimar : une république sous tension",
         "Que disent les archives de la Nuit des longs couteaux ?",
         "Comment travaille un historien ?"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Histoire en clair – Léonie Brunel – Vidéoflux",
     "url": "videoflux.com › @histoireenclair",
     "extrait": "740k subscribers · History channel run by Léonie Brunel, lecturer in modern history. Sources in the description…",
     "page": {
      "type": "video",
      "site": "Vidéoflux",
      "domaine": "videoflux.com",
      "titre": "Histoire en clair (History Made Clear)",
      "sousTitre": "Channel by Léonie Brunel",
      "date": null,
      "encart": [
       [
        "Subscribers",
        "740k"
       ],
       [
        "Videos",
        "186"
       ],
       [
        "Created",
        "2017"
       ]
      ],
      "sections": [
       {
        "titre": "About",
        "texte": "I am a lecturer in modern history at the University of Saint-Aurèle. On this channel, I tell the story of the 20th century using documents from the time. Every video is reviewed by a specialist colleague, and all sources (archives, books, figures) are listed in the description."
       },
       {
        "titre": "Popular videos",
        "liste": [
         "The 1929 crash in 15 minutes",
         "Weimar: a republic under strain",
         "What do the archives say about the Night of the Long Knives?",
         "How does a historian work?"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Léonie Brunel – Maîtresse de conférences – Université de Saint-Aurèle",
     "url": "univ-saint-aurele.fr › ufr-histoire › leonie-brunel",
     "extrait": "Maîtresse de conférences en histoire contemporaine. Thèmes : histoire politique de l'Allemagne au XXe siècle, partis et Parlement sous Weimar…",
     "page": {
      "type": "institution",
      "site": "Université de Saint-Aurèle – UFR Histoire",
      "domaine": "univ-saint-aurele.fr",
      "titre": "Léonie Brunel",
      "sousTitre": "Maîtresse de conférences en histoire contemporaine",
      "date": null,
      "encart": [
       [
        "Équipe",
        "Laboratoire Sociétés et pouvoirs en Europe"
       ],
       [
        "Thèse",
        "2014, « Partis et Parlement en Allemagne, 1924-1934 »"
       ]
      ],
      "sections": [
       {
        "titre": "Thèmes de recherche",
        "texte": "Histoire politique de l'Allemagne au XXe siècle, en particulier le fonctionnement du Parlement et des partis sous la République de Weimar. Léonie Brunel s'intéresse aussi à la transmission de l'histoire auprès du grand public et à l'usage des archives dans les médias numériques."
       },
       {
        "titre": "Enseignements",
        "liste": [
         "Licence 2 : L'Europe des années 1930",
         "Master : Méthodes de l'histoire politique",
         "Atelier : histoire et médias numériques"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Léonie Brunel – Lecturer – University of Saint-Aurèle",
     "url": "univ-saint-aurele.fr › history › leonie-brunel",
     "extrait": "Lecturer in modern history. Research topics: political history of 20th-century Germany, parties and Parliament under Weimar…",
     "page": {
      "type": "institution",
      "site": "University of Saint-Aurèle – Faculty of History",
      "domaine": "univ-saint-aurele.fr",
      "titre": "Léonie Brunel",
      "sousTitre": "Lecturer in Modern History",
      "date": null,
      "encart": [
       [
        "Research group",
        "Societies and Power in Europe Laboratory"
       ],
       [
        "PhD",
        "2014, “Parties and Parliament in Germany, 1924-1934”"
       ]
      ],
      "sections": [
       {
        "titre": "Research topics",
        "texte": "The political history of 20th-century Germany, especially how Parliament and the parties worked under the Weimar Republic. Léonie Brunel is also interested in sharing history with the general public and in the use of archives in digital media."
       },
       {
        "titre": "Teaching",
        "liste": [
         "Second year: Europe in the 1930s",
         "Master's: Methods in political history",
         "Workshop: history and digital media"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Une enseignante-chercheuse fait aimer l'histoire à 740 000 abonnés",
     "url": "echo-saint-aurele.fr › culture › leonie-brunel-videoflux",
     "extrait": "Chaque mardi soir, Léonie Brunel publie une vidéo d'histoire suivie par des centaines de milliers de personnes. Rencontre avec une universitaire…",
     "page": {
      "type": "presse",
      "site": "L'Écho de Saint-Aurèle",
      "domaine": "echo-saint-aurele.fr",
      "titre": "Une enseignante-chercheuse fait aimer l'histoire à 740 000 abonnés",
      "sousTitre": "Culture",
      "date": "3 octobre 2024",
      "encart": [],
      "sections": [
       {
        "texte": "Chaque mardi soir, Léonie Brunel, maîtresse de conférences à l'université de Saint-Aurèle, publie une vidéo d'histoire sur sa chaîne Histoire en clair. Elle consacre deux à trois semaines à préparer chaque épisode, entre ses cours et ses recherches."
       },
       {
        "titre": "« Je montre toujours les documents »",
        "texte": "« Un tableau de résultats électoraux, une page de journal, un texte de loi : je veux que le public voie d'où viennent les informations », explique-t-elle. Sa chaîne a reçu en 2023 le prix régional de la médiation scientifique."
       }
      ]
     }
    },
    "en": {
     "titre": "A university historian gets 740,000 subscribers hooked on history",
     "url": "echo-saint-aurele.fr › culture › leonie-brunel-videoflux",
     "extrait": "Every Tuesday evening, Léonie Brunel posts a history video watched by hundreds of thousands of people. We meet an academic…",
     "page": {
      "type": "presse",
      "site": "L'Écho de Saint-Aurèle",
      "domaine": "echo-saint-aurele.fr",
      "titre": "A university historian gets 740,000 subscribers hooked on history",
      "sousTitre": "Culture",
      "date": "3 October 2024",
      "encart": [],
      "sections": [
       {
        "texte": "Every Tuesday evening, Léonie Brunel, a lecturer at the University of Saint-Aurèle, posts a history video on her channel Histoire en clair. She spends two to three weeks preparing each episode, alongside her teaching and research."
       },
       {
        "titre": "“I always show the documents”",
        "texte": "“A table of election results, a newspaper page, the text of a law: I want viewers to see where the information comes from,” she explains. In 2023 her channel won the regional award for science communication."
       }
      ]
     }
    }
   }
  ]
 },
 "p8-1": {
  "nom": "Antoine Aubry",
  "genre": "m",
  "cle": {
   "fr": "Blog amateur sur l'histoire de Napoléon",
   "en": "Amateur blog about Napoleon’s history"
  },
  "support": {
   "fr": "Article de blog",
   "en": "Blog post"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Qui suis-je ? – Histoire Napoléon, le blog de NapoFan77",
     "url": "histoire-napoleon.fr › a-propos",
     "extrait": "Je m'appelle Antoine Aubry, alias NapoFan77. Passionné par l'Empire depuis l'enfance, je partage ici mes lectures et mes coups de cœur…",
     "page": {
      "type": "blog",
      "site": "Histoire Napoléon – le blog de NapoFan77",
      "domaine": "histoire-napoleon.fr",
      "titre": "Qui suis-je ?",
      "sousTitre": "Antoine Aubry, alias NapoFan77",
      "date": null,
      "encart": [
       [
        "Blog créé en",
        "2016"
       ],
       [
        "Articles publiés",
        "312"
       ],
       [
        "Rubriques",
        "Batailles, Anecdotes, Psychologie des grands hommes"
       ]
      ],
      "sections": [
       {
        "titre": "Mon parcours",
        "texte": "Je m'appelle Antoine Aubry, j'ai 46 ans et je vis en Seine-et-Marne. Dans la vie, je suis responsable des ventes dans une concession automobile. Napoléon me passionne depuis qu'on m'a offert une figurine de grognard à 8 ans ! Je n'ai pas fait d'études d'histoire, mais j'ai lu des dizaines de biographies."
       },
       {
        "titre": "Ma méthode",
        "texte": "J'écris surtout à partir de mes lectures, de documentaires et des discussions sur les forums de passionnés. Mon but : rendre l'histoire vivante et donner mon avis sur les grands personnages."
       }
      ]
     }
    },
    "en": {
     "titre": "Who am I? – Histoire Napoléon, NapoFan77's blog",
     "url": "histoire-napoleon.fr › about",
     "extrait": "My name is Antoine Aubry, aka NapoFan77. I have loved the Empire since I was a child, and here I share my reading and my favourite finds…",
     "page": {
      "type": "blog",
      "site": "Histoire Napoléon – NapoFan77's blog",
      "domaine": "histoire-napoleon.fr",
      "titre": "Who am I?",
      "sousTitre": "Antoine Aubry, aka NapoFan77",
      "date": null,
      "encart": [
       [
        "Blog started",
        "2016"
       ],
       [
        "Posts published",
        "312"
       ],
       [
        "Sections",
        "Battles, Anecdotes, Psychology of great men"
       ]
      ],
      "sections": [
       {
        "titre": "About me",
        "texte": "My name is Antoine Aubry, I am 46 and I live near Paris, in Seine-et-Marne. In everyday life, I am sales manager at a car dealership. I have been fascinated by Napoleon since I was given a toy grenadier at the age of 8! I never studied history, but I have read dozens of biographies."
       },
       {
        "titre": "How I work",
        "texte": "I mostly write from my reading, from documentaries and from discussions on enthusiasts' forums. My goal: bring history to life and give my opinion on the great figures of the past."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Antoine Aubry – Responsable des ventes – Central Auto 77 | ProLink",
     "url": "prolink.com › in › antoine-aubry-77",
     "extrait": "Responsable des ventes chez Central Auto 77. BTS Négociation et relation client. Centres d'intérêt : histoire napoléonienne, reconstitutions…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Antoine Aubry",
      "sousTitre": "Responsable des ventes chez Central Auto 77",
      "date": null,
      "encart": [
       [
        "Poste actuel",
        "Responsable des ventes, Central Auto 77"
       ],
       [
        "Formation",
        "BTS Négociation et relation client"
       ],
       [
        "Relations",
        "480"
       ]
      ],
      "sections": [
       {
        "titre": "Expérience",
        "liste": [
         "Responsable des ventes, Central Auto 77 (depuis 2015)",
         "Conseiller commercial, Autodistrib Melun (2006-2015)",
         "Vendeur, magasin d'électroménager (2001-2006)"
        ]
       },
       {
        "titre": "Centres d'intérêt",
        "texte": "Histoire napoléonienne (auteur du blog histoire-napoleon.fr), reconstitutions de batailles avec une association de passionnés, randonnée en forêt de Fontainebleau."
       }
      ]
     }
    },
    "en": {
     "titre": "Antoine Aubry – Sales Manager – Central Auto 77 | ProLink",
     "url": "prolink.com › in › antoine-aubry-77",
     "extrait": "Sales manager at Central Auto 77. Two-year vocational diploma in sales and customer relations. Interests: Napoleonic history, re-enactments…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Antoine Aubry",
      "sousTitre": "Sales Manager at Central Auto 77",
      "date": null,
      "encart": [
       [
        "Current position",
        "Sales manager, Central Auto 77"
       ],
       [
        "Education",
        "Two-year vocational diploma in sales and customer relations"
       ],
       [
        "Connections",
        "480"
       ]
      ],
      "sections": [
       {
        "titre": "Experience",
        "liste": [
         "Sales manager, Central Auto 77 (since 2015)",
         "Sales adviser, Autodistrib Melun (2006-2015)",
         "Salesperson, home appliance store (2001-2006)"
        ]
       },
       {
        "titre": "Interests",
        "texte": "Napoleonic history (author of the blog histoire-napoleon.fr), battle re-enactments with a group of enthusiasts, hiking in the Fontainebleau forest."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Cyclisme : Antoine Aubry, 24 ans, remporte le Grand Prix de Vitré",
     "url": "courrier-ille-et-vilaine.fr › sports › cyclisme › grand-prix-vitre",
     "extrait": "Le jeune coureur rennais Antoine Aubry, étudiant en STAPS, s'est imposé au sprint dimanche après 160 km de course…",
     "page": {
      "type": "presse",
      "site": "Le Courrier d'Ille-et-Vilaine",
      "domaine": "courrier-ille-et-vilaine.fr",
      "titre": "Antoine Aubry, 24 ans, remporte le Grand Prix de Vitré",
      "sousTitre": "Sports · Cyclisme",
      "date": "17 mai 2023",
      "encart": [],
      "sections": [
       {
        "texte": "Le jeune coureur rennais Antoine Aubry s'est imposé au sprint dimanche, au terme des 160 kilomètres du Grand Prix de Vitré. Étudiant en STAPS à Rennes, il s'entraîne chaque matin avant ses cours et court pour le Vélo Club du Pays de Rennes depuis l'âge de 12 ans."
       },
       {
        "titre": "Objectif : passer professionnel",
        "texte": "« C'est la plus belle victoire de ma carrière, j'ai pensé à mes parents dans la dernière ligne droite », a confié le vainqueur. Son entraîneur espère le voir rejoindre une équipe professionnelle d'ici deux ans."
       }
      ]
     }
    },
    "en": {
     "titre": "Cycling: Antoine Aubry, 24, wins the Vitré Grand Prix",
     "url": "courrier-ille-et-vilaine.fr › sport › cycling › vitre-grand-prix",
     "extrait": "Young Rennes rider Antoine Aubry, a sports science student, won the sprint on Sunday after a 160 km race…",
     "page": {
      "type": "presse",
      "site": "Le Courrier d'Ille-et-Vilaine",
      "domaine": "courrier-ille-et-vilaine.fr",
      "titre": "Antoine Aubry, 24, wins the Vitré Grand Prix",
      "sousTitre": "Sport · Cycling",
      "date": "17 May 2023",
      "encart": [],
      "sections": [
       {
        "texte": "Young Rennes rider Antoine Aubry won the sprint on Sunday at the end of the 160-kilometre Vitré Grand Prix. A sports science student in Rennes, he trains every morning before his classes and has raced for the Pays de Rennes Cycling Club since the age of 12."
       },
       {
        "titre": "Goal: turning professional",
        "texte": "“It's the best win of my career, I was thinking of my parents on the final straight,” the winner said. His coach hopes to see him join a professional team within two years."
       }
      ]
     }
    }
   }
  ]
 },
 "p10-2": {
  "nom": "Maxime Valette",
  "genre": "m",
  "cle": {
   "fr": "Chaîne YouTube d'un influenceur gaming",
   "en": "YouTube channel of a gaming influencer"
  },
  "support": {
   "fr": "Vidéo en ligne",
   "en": "Online video"
  },
  "resultats": [
   {
    "fr": {
     "titre": "GamingAvecMax – Maxime Valette – Vidéoflux",
     "url": "videoflux.com › @gamingavecmax",
     "extrait": "1,3 M d'abonnés · Tests de jeux, let's play et défis tous les jours à 18 h. Contact pro pour les partenariats en description…",
     "page": {
      "type": "video",
      "site": "Vidéoflux",
      "domaine": "videoflux.com",
      "titre": "GamingAvecMax",
      "sousTitre": "Chaîne de Maxime Valette",
      "date": null,
      "encart": [
       [
        "Abonnés",
        "1,3 M"
       ],
       [
        "Vidéos",
        "1 042"
       ],
       [
        "Contact pro",
        "partenariats@gamingavecmax.fr"
       ]
      ],
      "sections": [
       {
        "titre": "À propos",
        "texte": "Salut, c'est Max ! Ici, tests de jeux, let's play et gros délires tous les jours à 18 h. Les vidéos sponsorisées sont signalées en description. Marques et éditeurs : la chaîne propose des placements de produits et des opérations de lancement de jeux."
       },
       {
        "titre": "Dernières vidéos",
        "liste": [
         "TEST : Kraken Legends, mon jeu de l'année ? (vidéo sponsorisée)",
         "Ma nouvelle chaise gamer Titan Pro + code promo MAX15",
         "Les jeux vidéo c'est que du bon !",
         "24 h de jeu non-stop, défi relevé"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "GamingAvecMax – Maxime Valette – Vidéoflux",
     "url": "videoflux.com › @gamingavecmax",
     "extrait": "1.3M subscribers · Game reviews, let's plays and challenges every day at 6 pm. Business contact for partnerships in the description…",
     "page": {
      "type": "video",
      "site": "Vidéoflux",
      "domaine": "videoflux.com",
      "titre": "GamingAvecMax",
      "sousTitre": "Channel by Maxime Valette",
      "date": null,
      "encart": [
       [
        "Subscribers",
        "1.3M"
       ],
       [
        "Videos",
        "1,042"
       ],
       [
        "Business contact",
        "partenariats@gamingavecmax.fr"
       ]
      ],
      "sections": [
       {
        "titre": "About",
        "texte": "Hi, it's Max! Here you get game reviews, let's plays and crazy fun every day at 6 pm. Sponsored videos are flagged in the description. Brands and publishers: the channel offers product placements and game launch campaigns."
       },
       {
        "titre": "Latest videos",
        "liste": [
         "REVIEW: Kraken Legends, my game of the year? (sponsored video)",
         "My new Titan Pro gaming chair + promo code MAX15",
         "Video games are all good!",
         "24 hours of non-stop gaming, challenge accepted"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "La Boutique de Max – Produits officiels GamingAvecMax",
     "url": "gamingavecmax-shop.fr › boutique",
     "extrait": "Manettes, casques, sweats et abonnement au club privé. Code partenaire MAX15 : -15 % sur les produits partenaires…",
     "page": {
      "type": "commerce",
      "site": "La Boutique de Max",
      "domaine": "gamingavecmax-shop.fr",
      "titre": "La Boutique de Max",
      "sousTitre": "Les produits officiels de la chaîne GamingAvecMax",
      "date": null,
      "encart": [
       [
        "Code partenaire",
        "MAX15 (-15 %)"
       ],
       [
        "Livraison",
        "offerte dès 49 €"
       ]
      ],
      "sections": [
       {
        "titre": "Les produits de Max",
        "liste": [
         "Manette personnalisée GamingAvecMax – 69,90 €",
         "Casque Titan Sound X, partenaire officiel – 129 €",
         "Sweat « Encore une partie » – 44,90 €",
         "Abonnement au club privé de la chaîne – 4,99 €/mois"
        ]
       },
       {
        "titre": "Soutenir la chaîne",
        "texte": "Chaque achat soutient la chaîne ! Max touche une commission sur les produits partenaires achetés avec son code et sur les jeux précommandés via ses liens."
       }
      ]
     }
    },
    "en": {
     "titre": "Max's Shop – Official GamingAvecMax products",
     "url": "gamingavecmax-shop.fr › shop",
     "extrait": "Controllers, headsets, hoodies and private club membership. Partner code MAX15: 15% off partner products…",
     "page": {
      "type": "commerce",
      "site": "Max's Shop",
      "domaine": "gamingavecmax-shop.fr",
      "titre": "Max's Shop",
      "sousTitre": "Official products from the GamingAvecMax channel",
      "date": null,
      "encart": [
       [
        "Partner code",
        "MAX15 (15% off)"
       ],
       [
        "Delivery",
        "free from €49"
       ]
      ],
      "sections": [
       {
        "titre": "Max's products",
        "liste": [
         "Custom GamingAvecMax controller – €69.90",
         "Titan Sound X headset, official partner – €129",
         "“Just one more game” hoodie – €44.90",
         "Membership of the channel's private club – €4.99/month"
        ]
       },
       {
        "titre": "Support the channel",
        "texte": "Every purchase supports the channel! Max earns a commission on partner products bought with his code and on games pre-ordered through his links."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Influence gaming : les éditeurs misent sur les créateurs de contenu",
     "url": "ecrans-et-marques.fr › influence › gaming-createurs-contenu",
     "extrait": "Maxime Valette, alias GamingAvecMax, a signé cette année un contrat d'ambassadeur avec l'éditeur Kraken Studio…",
     "page": {
      "type": "presse",
      "site": "Écrans & Marques",
      "domaine": "ecrans-et-marques.fr",
      "titre": "Influence gaming : les éditeurs misent sur les créateurs de contenu",
      "sousTitre": "Marketing · Influence",
      "date": "21 novembre 2024",
      "encart": [],
      "sections": [
       {
        "texte": "Maxime Valette, alias GamingAvecMax, 1,3 million d'abonnés, a signé cette année un contrat d'ambassadeur avec l'éditeur Kraken Studio. Ancien vendeur dans un magasin de jeux vidéo, il vit de sa chaîne depuis 2019. « Mon métier, c'est de donner envie de jouer », résume-t-il."
       },
       {
        "titre": "Un marché en plein essor",
        "texte": "Placements de produits, codes promo, vidéos de lancement : les éditeurs consacrent une part croissante de leur budget publicitaire aux créateurs de contenu. Pour les plus suivis, un contrat d'un an peut dépasser 100 000 euros."
       }
      ]
     }
    },
    "en": {
     "titre": "Gaming influence: publishers bet on content creators",
     "url": "ecrans-et-marques.fr › influence › gaming-content-creators",
     "extrait": "Maxime Valette, aka GamingAvecMax, signed an ambassador contract with publisher Kraken Studio this year…",
     "page": {
      "type": "presse",
      "site": "Écrans & Marques",
      "domaine": "ecrans-et-marques.fr",
      "titre": "Gaming influence: publishers bet on content creators",
      "sousTitre": "Marketing · Influence",
      "date": "21 November 2024",
      "encart": [],
      "sections": [
       {
        "texte": "Maxime Valette, aka GamingAvecMax, who has 1.3 million subscribers, signed an ambassador contract with publisher Kraken Studio this year. A former salesperson in a video game store, he has made a living from his channel since 2019. “My job is to make people want to play,” he sums up."
       },
       {
        "titre": "A booming market",
        "texte": "Product placements, promo codes, launch videos: publishers are spending a growing share of their advertising budget on content creators. For the most popular ones, a one-year contract can exceed 100,000 euros."
       }
      ]
     }
    }
   }
  ]
 },
 "p11-1": {
  "nom": "Henri Giraud",
  "genre": "m",
  "cle": {
   "fr": "Médecin urgentiste publiant dans un journal local",
   "en": "Emergency physician publiant dans un journal local"
  },
  "support": {
   "fr": "Article dans un journal local",
   "en": "Local newspaper article"
  },
  "say": {
   "fr": "« En 30 ans de carrière, j'ai TOUJOURS observé plus d'agitation les nuits de pleine lune. Mes collègues confirment. L'expérience ne ment pas. »",
   "en": "\"In a 30-year career, I have ALWAYS observed more agitation on full-moon nights. My colleagues confirm it. Experience does not lie.\""
  },
  "resultats": [
   {
    "fr": {
     "titre": "« Mes nuits de garde » : le docteur Henri Giraud raconte 30 ans d'urgences",
     "url": "voix-du-val-de-sorre.fr › chroniques › mes-nuits-de-garde",
     "extrait": "Jeune retraité, Henri Giraud a passé trente ans au service des urgences de Sorre-les-Bains. Dans sa chronique mensuelle, il partage ses souvenirs…",
     "page": {
      "type": "presse",
      "site": "La Voix du Val-de-Sorre",
      "domaine": "voix-du-val-de-sorre.fr",
      "titre": "« Mes nuits de garde » : le docteur Henri Giraud raconte 30 ans d'urgences",
      "sousTitre": "Chronique",
      "date": "28 septembre 2025",
      "encart": [],
      "sections": [
       {
        "texte": "Jeune retraité, Henri Giraud a passé trente ans au service des urgences du centre hospitalier de Sorre-les-Bains. Dans sa chronique mensuelle pour notre journal, il partage ses souvenirs : les soirs de réveillon, les accidents de la route, les patients inoubliables."
       },
       {
        "titre": "Un regard de terrain",
        "texte": "« Je ne suis pas un statisticien, je raconte ce que j'ai vu », prévient-il. Ses chroniques, très lues, mêlent humour et émotion. Il prépare un recueil de ces souvenirs, qui paraîtra au printemps aux éditions du Val."
       }
      ]
     }
    },
    "en": {
     "titre": "“My nights on call”: Dr Henri Giraud recalls 30 years in emergency medicine",
     "url": "voix-du-val-de-sorre.fr › columns › my-nights-on-call",
     "extrait": "Recently retired, Henri Giraud spent thirty years in the emergency department at Sorre-les-Bains. In his monthly column, he shares his memories…",
     "page": {
      "type": "presse",
      "site": "La Voix du Val-de-Sorre",
      "domaine": "voix-du-val-de-sorre.fr",
      "titre": "“My nights on call”: Dr Henri Giraud recalls 30 years in emergency medicine",
      "sousTitre": "Column",
      "date": "28 September 2025",
      "encart": [],
      "sections": [
       {
        "texte": "Recently retired, Henri Giraud spent thirty years in the emergency department of Sorre-les-Bains hospital. In his monthly column for our paper, he shares his memories: New Year's Eve shifts, road accidents, unforgettable patients."
       },
       {
        "titre": "A view from the ground",
        "texte": "“I am not a statistician, I tell what I saw,” he warns. His columns, which are widely read, mix humour and emotion. He is preparing a collection of these memories, to be published in the spring by Éditions du Val."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Départ en retraite du Dr Henri Giraud – Centre hospitalier de Sorre-les-Bains",
     "url": "ch-sorre-les-bains.fr › actualites › depart-dr-giraud",
     "extrait": "Le centre hospitalier salue le départ du Dr Henri Giraud, médecin urgentiste et figure du service des urgences pendant trente ans…",
     "page": {
      "type": "institution",
      "site": "Centre hospitalier de Sorre-les-Bains",
      "domaine": "ch-sorre-les-bains.fr",
      "titre": "Départ en retraite du Dr Henri Giraud",
      "sousTitre": "Actualités de l'hôpital",
      "date": null,
      "encart": [
       [
        "Service",
        "Urgences"
       ],
       [
        "Fonction",
        "Médecin urgentiste, chef de service adjoint (2010-2024)"
       ],
       [
        "Arrivée",
        "1994"
       ]
      ],
      "sections": [
       {
        "texte": "Le centre hospitalier a salué le départ en retraite du Dr Henri Giraud, figure du service des urgences pendant trente ans. Très apprécié des équipes, il a formé des générations d'internes à la prise en charge des urgences vitales et a participé à la création du SMUR de nuit en 2005."
       },
       {
        "titre": "Un pot de départ chaleureux",
        "texte": "Plus de cent collègues étaient réunis le 14 juin pour le remercier. Le Dr Giraud reste bénévole auprès de l'association des secouristes du Val-de-Sorre."
       }
      ]
     }
    },
    "en": {
     "titre": "Dr Henri Giraud retires – Sorre-les-Bains Hospital",
     "url": "ch-sorre-les-bains.fr › news › dr-giraud-retires",
     "extrait": "The hospital pays tribute to Dr Henri Giraud, emergency physician and a key figure in the emergency department for thirty years…",
     "page": {
      "type": "institution",
      "site": "Sorre-les-Bains Hospital",
      "domaine": "ch-sorre-les-bains.fr",
      "titre": "Dr Henri Giraud retires",
      "sousTitre": "Hospital news",
      "date": null,
      "encart": [
       [
        "Department",
        "Emergency"
       ],
       [
        "Position",
        "Emergency physician, deputy head of department (2010-2024)"
       ],
       [
        "Joined",
        "1994"
       ]
      ],
      "sections": [
       {
        "texte": "The hospital paid tribute to Dr Henri Giraud on his retirement, a key figure in the emergency department for thirty years. Much appreciated by the staff, he trained generations of junior doctors in handling life-threatening emergencies and helped set up the night-time mobile emergency unit in 2005."
       },
       {
        "titre": "A warm farewell",
        "texte": "More than a hundred colleagues gathered on 14 June to thank him. Dr Giraud remains a volunteer with the Val-de-Sorre first-aid association."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Giraud, Henri – Profil auteur – SciIndex",
     "url": "sciindex.org › auteurs › giraud-henri",
     "extrait": "3 publications · 21 citations · Domaines : médecine d'urgence, traumatologie. Dernière publication : 2012…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Henri Giraud",
      "sousTitre": "Centre hospitalier de Sorre-les-Bains, service des urgences",
      "date": null,
      "encart": [
       [
        "Publications",
        "3"
       ],
       [
        "Citations",
        "21"
       ],
       [
        "Domaines",
        "Médecine d'urgence, traumatologie"
       ],
       [
        "Dernière publication",
        "2012"
       ]
      ],
      "sections": [
       {
        "titre": "Publications",
        "liste": [
         "« Prise en charge des fractures du bassin aux urgences : série de 40 cas », Revue francophone d'urgence, 1999",
         "« Organisation d'un SMUR de nuit en zone rurale », Urgences pratiques, 2006",
         "« Délais d'attente aux urgences : retour d'expérience d'un hôpital moyen », Urgences pratiques, 2012"
        ]
       },
       {
        "titre": "À propos de ce profil",
        "texte": "Profil généré automatiquement à partir des articles indexés dans les revues médicales."
       }
      ]
     }
    },
    "en": {
     "titre": "Giraud, Henri – Author profile – SciIndex",
     "url": "sciindex.org › authors › giraud-henri",
     "extrait": "3 publications · 21 citations · Fields: emergency medicine, trauma care. Latest publication: 2012…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Henri Giraud",
      "sousTitre": "Sorre-les-Bains Hospital, emergency department",
      "date": null,
      "encart": [
       [
        "Publications",
        "3"
       ],
       [
        "Citations",
        "21"
       ],
       [
        "Fields",
        "Emergency medicine, trauma care"
       ],
       [
        "Latest publication",
        "2012"
       ]
      ],
      "sections": [
       {
        "titre": "Publications",
        "liste": [
         "“Managing pelvic fractures in the emergency department: a series of 40 cases”, French-Language Emergency Review, 1999",
         "“Organising a night-time mobile emergency unit in a rural area”, Practical Emergency Care, 2006",
         "“Waiting times in the emergency department: lessons from a mid-sized hospital”, Practical Emergency Care, 2012"
        ]
       },
       {
        "titre": "About this profile",
        "texte": "Profile generated automatically from articles indexed in medical journals."
       }
      ]
     }
    }
   }
  ]
 },
 "p11-3": {
  "nom": "Jacques Keller",
  "genre": "m",
  "cle": {
   "fr": "Policier retraité interviewé dans un documentaire",
   "en": "Retired police officer interviewed in a documentary"
  },
  "support": {
   "fr": "Interview dans un documentaire",
   "en": "Documentary interview"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Pleine lune : les nuits de tous les dangers ? | Docs du Soir – Vidéoflux",
     "url": "videoflux.com › @docsdusoir › pleine-lune-nuits-dangers",
     "extrait": "Infirmières, chauffeurs de taxi, policiers : ils travaillent la nuit et ont tous une histoire de pleine lune à raconter. Avec Jacques Keller…",
     "page": {
      "type": "video",
      "site": "Vidéoflux",
      "domaine": "videoflux.com",
      "titre": "Pleine lune : les nuits de tous les dangers ?",
      "sousTitre": "Chaîne Docs du Soir · 52 min",
      "date": null,
      "encart": [
       [
        "Vues",
        "2,1 M"
       ],
       [
        "Publié",
        "il y a 2 ans"
       ],
       [
        "Chaîne",
        "Docs du Soir, 480 k abonnés"
       ]
      ],
      "sections": [
       {
        "titre": "Description",
        "texte": "Infirmières, chauffeurs de taxi, policiers : ils travaillent la nuit et ont tous une histoire de pleine lune à raconter. Pendant un an, notre équipe a recueilli leurs témoignages, de la Moselle à la Côte d'Azur."
       },
       {
        "titre": "Intervenants",
        "liste": [
         "Jacques Keller, policier retraité, 30 ans de patrouilles de nuit",
         "Martine L., infirmière de nuit",
         "Saïd B., chauffeur de taxi",
         "Paul R., ancien gardien de phare"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Full moon: the most dangerous nights? | Docs du Soir – Vidéoflux",
     "url": "videoflux.com › @docsdusoir › full-moon-dangerous-nights",
     "extrait": "Nurses, taxi drivers, police officers: they work at night and they all have a full-moon story to tell. Featuring Jacques Keller…",
     "page": {
      "type": "video",
      "site": "Vidéoflux",
      "domaine": "videoflux.com",
      "titre": "Full moon: the most dangerous nights?",
      "sousTitre": "Docs du Soir channel · 52 min",
      "date": null,
      "encart": [
       [
        "Views",
        "2.1M"
       ],
       [
        "Published",
        "2 years ago"
       ],
       [
        "Channel",
        "Docs du Soir, 480k subscribers"
       ]
      ],
      "sections": [
       {
        "titre": "Description",
        "texte": "Nurses, taxi drivers, police officers: they work at night and they all have a full-moon story to tell. For a year, our team collected their accounts, from Moselle in the north-east to the Riviera in the south."
       },
       {
        "titre": "Featuring",
        "liste": [
         "Jacques Keller, retired police officer, 30 years of night patrols",
         "Martine L., night nurse",
         "Saïd B., taxi driver",
         "Paul R., former lighthouse keeper"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Après 30 ans de nuits, le brigadier-chef Jacques Keller range l'uniforme",
     "url": "echo-moselle-nord.fr › varennes-sur-orne › depart-jacques-keller",
     "extrait": "Entré dans la police à 21 ans, Jacques Keller a passé l'essentiel de sa carrière dans les patrouilles de nuit du commissariat de Varennes-sur-Orne…",
     "page": {
      "type": "presse",
      "site": "L'Écho de la Moselle-Nord",
      "domaine": "echo-moselle-nord.fr",
      "titre": "Après 30 ans de nuits, le brigadier-chef Jacques Keller range l'uniforme",
      "sousTitre": "Varennes-sur-Orne",
      "date": "2 juin 2021",
      "encart": [],
      "sections": [
       {
        "texte": "Entré dans la police à 21 ans, après son service militaire, Jacques Keller a passé l'essentiel de sa carrière dans les patrouilles de nuit du commissariat de Varennes-sur-Orne. Vendredi, ses collègues lui ont remis la médaille d'honneur de la police nationale."
       },
       {
        "titre": "Une nouvelle vie",
        "texte": "« Des nuits, j'en ai vu de toutes les couleurs, j'aurais de quoi écrire un livre », sourit le jeune retraité. En attendant, il compte se consacrer à son potager, à ses petits-enfants et au club de pétanque du quartier."
       }
      ]
     }
    },
    "en": {
     "titre": "After 30 years of nights, Sergeant Jacques Keller hangs up his uniform",
     "url": "echo-moselle-nord.fr › varennes-sur-orne › jacques-keller-retires",
     "extrait": "Having joined the police at 21, Jacques Keller spent most of his career on night patrols at the Varennes-sur-Orne police station…",
     "page": {
      "type": "presse",
      "site": "L'Écho de la Moselle-Nord",
      "domaine": "echo-moselle-nord.fr",
      "titre": "After 30 years of nights, Sergeant Jacques Keller hangs up his uniform",
      "sousTitre": "Varennes-sur-Orne",
      "date": "2 June 2021",
      "encart": [],
      "sections": [
       {
        "texte": "Having joined the police at 21, after his military service, Jacques Keller spent most of his career on night patrols at the Varennes-sur-Orne police station. On Friday, his colleagues presented him with the national police medal of honour."
       },
       {
        "titre": "A new life",
        "texte": "“I've seen all sorts of nights, I could write a book about them,” the new retiree says with a smile. In the meantime, he plans to devote himself to his vegetable garden, his grandchildren and the local pétanque club."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Pâtisserie Keller – Jacques Keller, maître pâtissier à Colmar",
     "url": "patisserie-keller-colmar.fr › la-maison",
     "extrait": "Depuis 1998, Jacques Keller prépare kougelhopfs, bredeles et forêts-noires dans sa boutique de la rue des Marchands. Commande en ligne…",
     "page": {
      "type": "commerce",
      "site": "Pâtisserie Keller",
      "domaine": "patisserie-keller-colmar.fr",
      "titre": "Pâtisserie Keller",
      "sousTitre": "Jacques Keller, maître pâtissier à Colmar",
      "date": null,
      "encart": [
       [
        "Adresse",
        "12 rue des Marchands, Colmar"
       ],
       [
        "Horaires",
        "mar-dim, 7 h-19 h"
       ],
       [
        "Retrait",
        "commande en ligne, retrait en boutique"
       ]
      ],
      "sections": [
       {
        "titre": "La maison",
        "texte": "Depuis 1998, Jacques Keller prépare chaque matin kougelhopfs, bredeles et forêts-noires dans sa boutique du centre de Colmar. Formé chez de grands pâtissiers alsaciens, il a été élu meilleur kougelhopf du Haut-Rhin en 2019."
       },
       {
        "titre": "Nos incontournables",
        "liste": [
         "Kougelhopf traditionnel – 12 €",
         "Forêt-noire (6 parts) – 24 €",
         "Boîte de bredeles de Noël – 15 €"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Pâtisserie Keller – Jacques Keller, master pastry chef in Colmar",
     "url": "patisserie-keller-colmar.fr › about-us",
     "extrait": "Since 1998, Jacques Keller has been making kougelhopfs, bredeles and Black Forest cakes in his shop on rue des Marchands. Order online…",
     "page": {
      "type": "commerce",
      "site": "Pâtisserie Keller",
      "domaine": "patisserie-keller-colmar.fr",
      "titre": "Pâtisserie Keller",
      "sousTitre": "Jacques Keller, master pastry chef in Colmar",
      "date": null,
      "encart": [
       [
        "Address",
        "12 rue des Marchands, Colmar"
       ],
       [
        "Opening hours",
        "Tue-Sun, 7 am-7 pm"
       ],
       [
        "Collection",
        "order online, collect in store"
       ]
      ],
      "sections": [
       {
        "titre": "Our shop",
        "texte": "Since 1998, Jacques Keller has been making kougelhopfs, bredeles and Black Forest cakes every morning in his shop in the centre of Colmar. Trained by great Alsatian pastry chefs, he won the award for best kougelhopf in the Haut-Rhin in 2019."
       },
       {
        "titre": "Our must-haves",
        "liste": [
         "Traditional kougelhopf – €12",
         "Black Forest cake (6 slices) – €24",
         "Box of Christmas bredele biscuits – €15"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p17-2": {
  "nom": "Oriane Lebrun",
  "genre": "f",
  "cle": {
   "fr": "Coach nutrition, chaîne YouTube 800k abonnés",
   "en": "Nutrition coach, YouTube channel with 800k subscribers"
  },
  "support": {
   "fr": "Publication sur un réseau social",
   "en": "Social media post"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Programme Jeûne Express 21 jours – NutriCoach Pro par Oriane Lebrun",
     "url": "nutricoach-pro.fr › programme-jeune-express",
     "extrait": "Le programme vidéo créé par Oriane Lebrun pour perdre du poids grâce au jeûne. Plus de 12 000 clients accompagnés ! Offre spéciale 197 €…",
     "page": {
      "type": "commerce",
      "site": "NutriCoach Pro",
      "domaine": "nutricoach-pro.fr",
      "titre": "Programme Jeûne Express 21 jours",
      "sousTitre": "Par Oriane Lebrun, fondatrice de NutriCoach Pro",
      "date": null,
      "encart": [
       [
        "Prix",
        "197 € au lieu de 297 €"
       ],
       [
        "Accès",
        "à vie"
       ],
       [
        "Bonus",
        "groupe privé + 30 recettes"
       ]
      ],
      "sections": [
       {
        "titre": "Le programme",
        "texte": "Créé par Oriane Lebrun, ce programme vidéo vous guide pas à pas pendant 21 jours pour adopter le jeûne et retrouver la ligne. Plus de 12 000 clients accompagnés ! Offre valable jusqu'à minuit."
       },
       {
        "titre": "Ils ont testé",
        "liste": [
         "« -9 kg en 3 semaines, merci Oriane ! » – Laura",
         "« Enfin une méthode qui marche » – Kévin",
         "« Je recommande à 100 % » – Nadia"
        ]
       },
       {
        "titre": "Mentions",
        "texte": "Résultats non garantis, variables selon les personnes."
       }
      ]
     }
    },
    "en": {
     "titre": "21-Day Express Fasting Programme – NutriCoach Pro by Oriane Lebrun",
     "url": "nutricoach-pro.fr › express-fasting-programme",
     "extrait": "The video programme created by Oriane Lebrun to lose weight through fasting. Over 12,000 clients coached! Special offer €197…",
     "page": {
      "type": "commerce",
      "site": "NutriCoach Pro",
      "domaine": "nutricoach-pro.fr",
      "titre": "21-Day Express Fasting Programme",
      "sousTitre": "By Oriane Lebrun, founder of NutriCoach Pro",
      "date": null,
      "encart": [
       [
        "Price",
        "€197 instead of €297"
       ],
       [
        "Access",
        "lifetime"
       ],
       [
        "Bonus",
        "private group + 30 recipes"
       ]
      ],
      "sections": [
       {
        "titre": "The programme",
        "texte": "Created by Oriane Lebrun, this video programme guides you step by step for 21 days to take up fasting and get back in shape. Over 12,000 clients coached! Offer valid until midnight."
       },
       {
        "titre": "They tried it",
        "liste": [
         "“Lost 9 kg in 3 weeks, thank you Oriane!” – Laura",
         "“Finally a method that works” – Kévin",
         "“I recommend it 100%” – Nadia"
        ]
       },
       {
        "titre": "Small print",
        "texte": "Results not guaranteed, they vary from person to person."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Oriane Lebrun – Fondatrice – NutriCoach Pro | ProLink",
     "url": "prolink.com › in › oriane-lebrun",
     "extrait": "Fondatrice de NutriCoach Pro. Certificat en ligne de coach nutrition et bien-être. Auparavant conseillère de vente en cosmétiques…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Oriane Lebrun",
      "sousTitre": "Fondatrice de NutriCoach Pro · Coach minceur",
      "date": null,
      "encart": [
       [
        "Poste actuel",
        "Fondatrice, NutriCoach Pro"
       ],
       [
        "Formation",
        "Certificat en ligne « Coach nutrition et bien-être » (3 mois)"
       ],
       [
        "Formation initiale",
        "BTS Commerce international"
       ]
      ],
      "sections": [
       {
        "titre": "Expérience",
        "liste": [
         "Fondatrice, NutriCoach Pro (depuis 2019)",
         "Conseillère de vente, enseigne de cosmétiques (2013-2019)"
        ]
       },
       {
        "titre": "À propos",
        "texte": "Passionnée de bien-être, j'ai perdu 15 kg grâce au jeûne et j'ai décidé d'en faire mon métier. Aujourd'hui, j'aide des milliers de personnes à retrouver la forme grâce à mes programmes en ligne."
       }
      ]
     }
    },
    "en": {
     "titre": "Oriane Lebrun – Founder – NutriCoach Pro | ProLink",
     "url": "prolink.com › in › oriane-lebrun",
     "extrait": "Founder of NutriCoach Pro. Online certificate in nutrition and wellness coaching. Previously a sales adviser in cosmetics…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Oriane Lebrun",
      "sousTitre": "Founder of NutriCoach Pro · Weight-loss coach",
      "date": null,
      "encart": [
       [
        "Current position",
        "Founder, NutriCoach Pro"
       ],
       [
        "Training",
        "Online certificate “Nutrition and wellness coach” (3 months)"
       ],
       [
        "Education",
        "Two-year vocational diploma in international trade"
       ]
      ],
      "sections": [
       {
        "titre": "Experience",
        "liste": [
         "Founder, NutriCoach Pro (since 2019)",
         "Sales adviser, cosmetics chain (2013-2019)"
        ]
       },
       {
        "titre": "About",
        "texte": "Passionate about well-being, I lost 15 kg through fasting and decided to make it my job. Today, I help thousands of people get back in shape with my online programmes."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "NutriCoach Pro – Oriane Lebrun – Vidéoflux",
     "url": "videoflux.com › @nutricoachpro",
     "extrait": "800 k abonnés · Recettes, conseils minceur et motivation par Oriane ! Mon programme Jeûne Express est en lien dans chaque description…",
     "page": {
      "type": "video",
      "site": "Vidéoflux",
      "domaine": "videoflux.com",
      "titre": "NutriCoach Pro",
      "sousTitre": "Chaîne d'Oriane Lebrun",
      "date": null,
      "encart": [
       [
        "Abonnés",
        "800 k"
       ],
       [
        "Vidéos",
        "410"
       ],
       [
        "Créée en",
        "2019"
       ]
      ],
      "sections": [
       {
        "titre": "À propos",
        "texte": "Recettes, conseils minceur et motivation par Oriane ! Nouvelle vidéo tous les lundis et jeudis. Mon programme Jeûne Express 21 jours est en lien dans chaque description, avec un code de réduction pour mes abonnés."
       },
       {
        "titre": "Vidéos populaires",
        "liste": [
         "J'ai jeûné 16 h par jour pendant un mois : mes résultats",
         "Les 5 aliments qui bloquent ta perte de poids",
         "Pourquoi les régimes ne marchent JAMAIS",
         "Ma routine du matin à jeun"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "NutriCoach Pro – Oriane Lebrun – Vidéoflux",
     "url": "videoflux.com › @nutricoachpro",
     "extrait": "800k subscribers · Recipes, weight-loss tips and motivation from Oriane! My Express Fasting programme is linked in every description…",
     "page": {
      "type": "video",
      "site": "Vidéoflux",
      "domaine": "videoflux.com",
      "titre": "NutriCoach Pro",
      "sousTitre": "Channel by Oriane Lebrun",
      "date": null,
      "encart": [
       [
        "Subscribers",
        "800k"
       ],
       [
        "Videos",
        "410"
       ],
       [
        "Created",
        "2019"
       ]
      ],
      "sections": [
       {
        "titre": "About",
        "texte": "Recipes, weight-loss tips and motivation from Oriane! New videos every Monday and Thursday. My 21-Day Express Fasting programme is linked in every description, with a discount code for my subscribers."
       },
       {
        "titre": "Popular videos",
        "liste": [
         "I fasted 16 hours a day for a month: my results",
         "The 5 foods blocking your weight loss",
         "Why diets NEVER work",
         "My fasting morning routine"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p18-2": {
  "nom": "Denis Rolland",
  "genre": "m",
  "cle": {
   "fr": "Médecin homéopathe, Faculté de médecine de Paris",
   "en": "Homeopathic doctor, Paris Faculty of Medicine"
  },
  "support": {
   "fr": "Interview à la radio",
   "en": "Radio interview"
  },
  "say": {
   "fr": "« Depuis 25 ans, je vois des gens guérir. Prétendre que c'est uniquement du placebo, c'est nier des décennies d'observations cliniques et les spécificités de la médecine individualisée. »",
   "en": "\"For 25 years I have seen people recover. Claiming it is only placebo means denying decades of clinical observations and the specific nature of individualized medicine.\""
  },
  "resultats": [
   {
    "fr": {
     "titre": "Dr Denis Rolland – Médecin homéopathe à Lyon",
     "url": "dr-rolland-homeopathie.fr › mon-approche",
     "extrait": "Médecin généraliste de formation, je me consacre depuis 2001 à l'homéopathie. Consultations d'une heure, sur rendez-vous…",
     "page": {
      "type": "blog",
      "site": "Cabinet du Dr Denis Rolland",
      "domaine": "dr-rolland-homeopathie.fr",
      "titre": "Mon approche",
      "sousTitre": "Dr Denis Rolland, médecin homéopathe",
      "date": null,
      "encart": [
       [
        "Formation",
        "Doctorat en médecine (1999), diplôme d'homéopathie (2001)"
       ],
       [
        "Consultation",
        "60 €, non remboursée"
       ],
       [
        "Adresse",
        "Lyon 6e"
       ]
      ],
      "sections": [
       {
        "titre": "Mon approche",
        "texte": "Médecin généraliste de formation, je me consacre depuis 2001 à l'homéopathie. Chaque consultation dure une heure : je prends le temps d'écouter le patient dans sa globalité avant de choisir son remède. Depuis 25 ans, j'accompagne des familles entières."
       },
       {
        "titre": "Ce que je soigne",
        "liste": [
         "Troubles du sommeil",
         "Stress et anxiété",
         "Allergies saisonnières",
         "Petits maux de l'enfant"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Dr Denis Rolland – Homeopathic doctor in Lyon",
     "url": "dr-rolland-homeopathie.fr › my-approach",
     "extrait": "Trained as a general practitioner, I have devoted myself to homeopathy since 2001. One-hour consultations, by appointment…",
     "page": {
      "type": "blog",
      "site": "Dr Denis Rolland's practice",
      "domaine": "dr-rolland-homeopathie.fr",
      "titre": "My approach",
      "sousTitre": "Dr Denis Rolland, homeopathic doctor",
      "date": null,
      "encart": [
       [
        "Training",
        "Medical degree (1999), diploma in homeopathy (2001)"
       ],
       [
        "Consultation",
        "€60, not reimbursed"
       ],
       [
        "Address",
        "Lyon, 6th district"
       ]
      ],
      "sections": [
       {
        "titre": "My approach",
        "texte": "Trained as a general practitioner, I have devoted myself to homeopathy since 2001. Each consultation lasts an hour: I take the time to listen to the patient as a whole person before choosing their remedy. For 25 years, I have looked after entire families."
       },
       {
        "titre": "What I treat",
        "liste": [
         "Sleep problems",
         "Stress and anxiety",
         "Seasonal allergies",
         "Common childhood ailments"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Rolland, Denis – Profil auteur – SciIndex",
     "url": "sciindex.org › auteurs › rolland-denis",
     "extrait": "4 publications · 7 citations · Type : récits de cas cliniques · Revue : Cahiers d'homéopathie pratique…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Denis Rolland",
      "sousTitre": "Médecin libéral, Lyon",
      "date": null,
      "encart": [
       [
        "Publications",
        "4"
       ],
       [
        "Citations",
        "7"
       ],
       [
        "Type d'articles",
        "Récits de cas cliniques"
       ],
       [
        "Essais contrôlés",
        "0"
       ]
      ],
      "sections": [
       {
        "titre": "Publications",
        "liste": [
         "« Un cas d'eczéma chronique amélioré », Cahiers d'homéopathie pratique, 2008",
         "« Insomnie de l'enfant : trois observations », Cahiers d'homéopathie pratique, 2011",
         "« Rhinite allergique : suivi d'une patiente sur deux ans », Cahiers d'homéopathie pratique, 2015",
         "« Le remède du terrain anxieux », Cahiers d'homéopathie pratique, 2019"
        ]
       },
       {
        "titre": "Note",
        "texte": "Un récit de cas décrit l'évolution d'un ou de quelques patients, sans comparaison avec un groupe témoin."
       }
      ]
     }
    },
    "en": {
     "titre": "Rolland, Denis – Author profile – SciIndex",
     "url": "sciindex.org › authors › rolland-denis",
     "extrait": "4 publications · 7 citations · Type: clinical case reports · Journal: Practical Homeopathy Papers…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Denis Rolland",
      "sousTitre": "Private practitioner, Lyon",
      "date": null,
      "encart": [
       [
        "Publications",
        "4"
       ],
       [
        "Citations",
        "7"
       ],
       [
        "Article type",
        "Clinical case reports"
       ],
       [
        "Controlled trials",
        "0"
       ]
      ],
      "sections": [
       {
        "titre": "Publications",
        "liste": [
         "“A case of chronic eczema that improved”, Practical Homeopathy Papers, 2008",
         "“Childhood insomnia: three observations”, Practical Homeopathy Papers, 2011",
         "“Allergic rhinitis: following one patient over two years”, Practical Homeopathy Papers, 2015",
         "“The remedy for the anxious constitution”, Practical Homeopathy Papers, 2019"
        ]
       },
       {
        "titre": "Note",
        "texte": "A case report describes how one or a few patients progressed, without comparing them with a control group."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Soigner autrement – Denis Rolland – Librairie Plume & Page",
     "url": "plume-et-page.fr › livres › soigner-autrement-rolland",
     "extrait": "Le Dr Denis Rolland partage 25 ans de consultations et de guérisons. Un livre pour toute la famille. 19,90 €…",
     "page": {
      "type": "commerce",
      "site": "Librairie Plume & Page",
      "domaine": "plume-et-page.fr",
      "titre": "Soigner autrement. 25 ans d'homéopathie au quotidien",
      "sousTitre": "Denis Rolland",
      "date": null,
      "encart": [
       [
        "Prix",
        "19,90 €"
       ],
       [
        "Éditeur",
        "Éditions Bien-Vivre"
       ],
       [
        "Pages",
        "224"
       ],
       [
        "Parution",
        "2022"
       ]
      ],
      "sections": [
       {
        "titre": "Résumé",
        "texte": "Le Dr Denis Rolland partage 25 ans de consultations et de guérisons racontées à travers des histoires de patients. Un guide pratique pour choisir les bons remèdes pour toute la famille."
       },
       {
        "titre": "L'auteur",
        "texte": "Médecin homéopathe à Lyon, Denis Rolland anime aussi des stages d'homéopathie familiale (week-end de formation à 290 €) et conseille un laboratoire de remèdes naturels."
       }
      ]
     }
    },
    "en": {
     "titre": "Healing Differently – Denis Rolland – Plume & Page Bookshop",
     "url": "plume-et-page.fr › books › healing-differently-rolland",
     "extrait": "Dr Denis Rolland shares 25 years of consultations and recoveries. A book for the whole family. €19.90…",
     "page": {
      "type": "commerce",
      "site": "Plume & Page Bookshop",
      "domaine": "plume-et-page.fr",
      "titre": "Healing Differently: 25 Years of Everyday Homeopathy",
      "sousTitre": "Denis Rolland",
      "date": null,
      "encart": [
       [
        "Price",
        "€19.90"
       ],
       [
        "Publisher",
        "Éditions Bien-Vivre"
       ],
       [
        "Pages",
        "224"
       ],
       [
        "Published",
        "2022"
       ]
      ],
      "sections": [
       {
        "titre": "Summary",
        "texte": "Dr Denis Rolland shares 25 years of consultations and recoveries, told through his patients' stories. A practical guide to choosing the right remedies for the whole family."
       },
       {
        "titre": "About the author",
        "texte": "A homeopathic doctor in Lyon, Denis Rolland also runs family homeopathy courses (training weekend at €290) and advises a natural remedies laboratory."
       }
      ]
     }
    }
   }
  ]
 },
 "p20-3": {
  "nom": "Mathieu Olivier",
  "genre": "m",
  "cle": {
   "fr": "Post LinkedIn viral d'un coach en développement personnel",
   "en": "Viral LinkedIn post from a personal development coach"
  },
  "support": {
   "fr": "Publication sur un réseau professionnel",
   "en": "Post on a professional network"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Mathieu Olivier | Coach Leadership – Fondateur de Révèle-Toi Coaching | ProLink",
     "url": "prolink.com › in › mathieu-olivier-coach",
     "extrait": "J'aide les managers à révéler leur potentiel grâce aux outils de personnalité. 50 k abonnés. Conférences, ateliers, coaching individuel…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Mathieu Olivier",
      "sousTitre": "Coach Leadership | Fondateur de Révèle-Toi Coaching",
      "date": null,
      "encart": [
       [
        "Abonnés",
        "50 k"
       ],
       [
        "Poste actuel",
        "Fondateur, Révèle-Toi Coaching"
       ],
       [
        "Formation",
        "Master marketing en école de commerce"
       ],
       [
        "Certification",
        "Praticien en test de personnalité (formation de 4 jours)"
       ]
      ],
      "sections": [
       {
        "titre": "Expérience",
        "liste": [
         "Fondateur, Révèle-Toi Coaching (depuis 2018)",
         "Chef de produit, groupe agroalimentaire (2009-2017)"
        ]
       },
       {
        "titre": "Infos",
        "texte": "J'aide les managers à révéler leur potentiel grâce aux outils de personnalité. Conférences, ateliers d'équipe, coaching individuel. Mes posts sur la connaissance de soi touchent chaque semaine des centaines de milliers de personnes."
       }
      ]
     }
    },
    "en": {
     "titre": "Mathieu Olivier | Leadership Coach – Founder of Révèle-Toi Coaching | ProLink",
     "url": "prolink.com › in › mathieu-olivier-coach",
     "extrait": "I help managers unlock their potential with personality tools. 50k followers. Talks, workshops, one-to-one coaching…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Mathieu Olivier",
      "sousTitre": "Leadership Coach | Founder of Révèle-Toi Coaching",
      "date": null,
      "encart": [
       [
        "Followers",
        "50k"
       ],
       [
        "Current position",
        "Founder, Révèle-Toi Coaching"
       ],
       [
        "Education",
        "Master's in marketing, business school"
       ],
       [
        "Certification",
        "Personality test practitioner (4-day course)"
       ]
      ],
      "sections": [
       {
        "titre": "Experience",
        "liste": [
         "Founder, Révèle-Toi Coaching (since 2018)",
         "Product manager, food industry group (2009-2017)"
        ]
       },
       {
        "titre": "About",
        "texte": "I help managers unlock their potential with personality tools. Talks, team workshops, one-to-one coaching. Every week my posts on self-knowledge reach hundreds of thousands of people."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Atelier « Découvre ton type » – Révèle-Toi Coaching",
     "url": "revele-toi-coaching.fr › ateliers › decouvre-ton-type",
     "extrait": "En une journée, découvrez votre type de personnalité parmi 16 et apprenez à mieux travailler en équipe. Animé par Mathieu Olivier. 390 €…",
     "page": {
      "type": "commerce",
      "site": "Révèle-Toi Coaching",
      "domaine": "revele-toi-coaching.fr",
      "titre": "Atelier « Découvre ton type »",
      "sousTitre": "Animé par Mathieu Olivier",
      "date": null,
      "encart": [
       [
        "Tarif",
        "390 € par personne"
       ],
       [
        "Durée",
        "1 journée"
       ],
       [
        "Format",
        "en présentiel ou en visio"
       ]
      ],
      "sections": [
       {
        "texte": "En une journée, découvrez votre type de personnalité parmi 16 profils et apprenez enfin à comprendre vos collègues, votre manager et vous-même. Places limitées, inscrivez-vous vite !"
       },
       {
        "titre": "Inclus",
        "liste": [
         "Passation du questionnaire de personnalité",
         "Rapport personnalisé de 20 pages",
         "Séance de débriefing individuelle de 30 min",
         "Accès au groupe privé des anciens participants"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "“Discover your type” workshop – Révèle-Toi Coaching",
     "url": "revele-toi-coaching.fr › workshops › discover-your-type",
     "extrait": "In one day, discover your personality type among 16 and learn to work better as a team. Led by Mathieu Olivier. €390…",
     "page": {
      "type": "commerce",
      "site": "Révèle-Toi Coaching",
      "domaine": "revele-toi-coaching.fr",
      "titre": "“Discover your type” workshop",
      "sousTitre": "Led by Mathieu Olivier",
      "date": null,
      "encart": [
       [
        "Price",
        "€390 per person"
       ],
       [
        "Length",
        "1 day"
       ],
       [
        "Format",
        "in person or online"
       ]
      ],
      "sections": [
       {
        "texte": "In one day, discover your personality type among 16 profiles and finally learn to understand your colleagues, your manager and yourself. Places are limited, sign up now!"
       },
       {
        "titre": "Included",
        "liste": [
         "Taking the personality questionnaire",
         "20-page personalised report",
         "30-minute one-to-one debrief",
         "Access to the private group of former participants"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Mon histoire – Mathieu Olivier, coach",
     "url": "mathieu-olivier-coach.fr › mon-histoire",
     "extrait": "En 2017, après huit ans dans le marketing, j'ai fait un burn-out. Un ami m'a fait passer un test de personnalité : ça a été une révélation…",
     "page": {
      "type": "blog",
      "site": "Mathieu Olivier – le blog",
      "domaine": "mathieu-olivier-coach.fr",
      "titre": "Mon histoire",
      "sousTitre": "Comment je suis devenu coach",
      "date": null,
      "encart": [],
      "sections": [
       {
        "texte": "En 2017, après huit ans dans le marketing, j'ai fait un burn-out. Un ami m'a fait passer un test de personnalité : ça a été une révélation, j'ai enfin compris qui j'étais vraiment. J'ai quitté mon poste et je me suis formé pour transmettre cet outil au plus grand nombre."
       },
       {
        "titre": "Mes convictions",
        "liste": [
         "Chacun a un type, il suffit de le découvrir",
         "La connaissance de soi est la clé du leadership",
         "Ce qui a marché pour moi peut marcher pour vous"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "My story – Mathieu Olivier, coach",
     "url": "mathieu-olivier-coach.fr › my-story",
     "extrait": "In 2017, after eight years in marketing, I burned out. A friend had me take a personality test: it was a revelation…",
     "page": {
      "type": "blog",
      "site": "Mathieu Olivier – the blog",
      "domaine": "mathieu-olivier-coach.fr",
      "titre": "My story",
      "sousTitre": "How I became a coach",
      "date": null,
      "encart": [],
      "sections": [
       {
        "texte": "In 2017, after eight years in marketing, I burned out. A friend had me take a personality test: it was a revelation, I finally understood who I really was. I left my job and trained so I could pass this tool on to as many people as possible."
       },
       {
        "titre": "What I believe",
        "liste": [
         "Everyone has a type, you just have to discover it",
         "Self-knowledge is the key to leadership",
         "What worked for me can work for you"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p21-2": {
  "nom": "Karim Bauer",
  "genre": "m",
  "cle": {
   "fr": "Futurologue indépendant, conférence TED",
   "en": "Independent futurist, TED talk"
  },
  "support": {
   "fr": "Conférence filmée",
   "en": "Filmed talk"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Karim Bauer – Conférences et livres – FuturWork Institute",
     "url": "futurwork-institute.fr › karim-bauer",
     "extrait": "Fondateur du FuturWork Institute, Karim Bauer est conférencier et auteur de « Survivre à la vague ». Réservez une conférence…",
     "page": {
      "type": "commerce",
      "site": "FuturWork Institute",
      "domaine": "futurwork-institute.fr",
      "titre": "Karim Bauer",
      "sousTitre": "Conférencier, fondateur du FuturWork Institute",
      "date": null,
      "encart": [
       [
        "Conférence (1 h)",
        "à partir de 8 500 € HT"
       ],
       [
        "Livre",
        "Survivre à la vague (2022)"
       ],
       [
        "Programme en ligne",
        "« Reconversion express », 490 €"
       ]
      ],
      "sections": [
       {
        "titre": "Qui est Karim Bauer ?",
        "texte": "Fondateur du FuturWork Institute, Karim Bauer est conférencier et auteur. Ancien consultant en communication, il parcourt le monde pour annoncer les bouleversements de demain. Ses conférences filmées ont été vues plus de 3 millions de fois."
       },
       {
        "titre": "Thèmes d'intervention",
        "liste": [
         "La fin du travail tel que nous le connaissons",
         "Se réinventer avant qu'il ne soit trop tard",
         "Le monde en 2035"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Karim Bauer – Talks and books – FuturWork Institute",
     "url": "futurwork-institute.fr › karim-bauer",
     "extrait": "Founder of the FuturWork Institute, Karim Bauer is a speaker and the author of “Surviving the Wave”. Book a talk…",
     "page": {
      "type": "commerce",
      "site": "FuturWork Institute",
      "domaine": "futurwork-institute.fr",
      "titre": "Karim Bauer",
      "sousTitre": "Speaker, founder of the FuturWork Institute",
      "date": null,
      "encart": [
       [
        "Talk (1 hour)",
        "from €8,500 excl. VAT"
       ],
       [
        "Book",
        "Surviving the Wave (2022)"
       ],
       [
        "Online programme",
        "“Express Career Change”, €490"
       ]
      ],
      "sections": [
       {
        "titre": "Who is Karim Bauer?",
        "texte": "Founder of the FuturWork Institute, Karim Bauer is a speaker and author. A former communications consultant, he travels the world announcing the upheavals of tomorrow. His filmed talks have been viewed more than 3 million times."
       },
       {
        "titre": "Talk topics",
        "liste": [
         "The end of work as we know it",
         "Reinvent yourself before it's too late",
         "The world in 2035"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Futurologues : que sont devenues leurs prédictions ?",
     "url": "revue-des-tendances.fr › enquete › futurologues-predictions",
     "extrait": "En 2015, Karim Bauer annonçait sur scène la disparition des caissiers et caissières pour 2020. Nous avons comparé ses annonces à la réalité…",
     "page": {
      "type": "presse",
      "site": "La Revue des Tendances",
      "domaine": "revue-des-tendances.fr",
      "titre": "Futurologues : que sont devenues leurs prédictions ?",
      "sousTitre": "Enquête",
      "date": "10 janvier 2025",
      "encart": [],
      "sections": [
       {
        "texte": "En 2015, Karim Bauer annonçait sur scène que les caissiers et caissières de supermarché auraient disparu en 2020. Dix ans plus tard, ils sont toujours là. Interrogé, le conférencier répond : « Une prédiction sert à faire réagir, pas à être exacte au jour près. »"
       },
       {
        "titre": "Un éclaireur plutôt qu'un statisticien",
        "texte": "Diplômé d'une école de communication, Karim Bauer se décrit lui-même comme « un éclaireur plutôt qu'un statisticien ». Son institut, qu'il a fondé seul en 2016, vend des conférences, des livres et des programmes de reconversion en ligne."
       }
      ]
     }
    },
    "en": {
     "titre": "Futurists: what became of their predictions?",
     "url": "revue-des-tendances.fr › investigation › futurists-predictions",
     "extrait": "In 2015, Karim Bauer announced on stage that supermarket cashiers would be gone by 2020. We compared his claims with reality…",
     "page": {
      "type": "presse",
      "site": "La Revue des Tendances",
      "domaine": "revue-des-tendances.fr",
      "titre": "Futurists: what became of their predictions?",
      "sousTitre": "Investigation",
      "date": "10 January 2025",
      "encart": [],
      "sections": [
       {
        "texte": "In 2015, Karim Bauer announced on stage that supermarket cashiers would have disappeared by 2020. Ten years later, they are still there. When asked, the speaker replies: “A prediction is meant to get people to react, not to be accurate to the day.”"
       },
       {
        "titre": "A scout rather than a statistician",
        "texte": "A graduate of a communications school, Karim Bauer describes himself as “a scout rather than a statistician”. His institute, which he founded on his own in 2016, sells talks, books and online career-change programmes."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Karim Bauer (@coachkarimhand) – Chirp",
     "url": "chirp.com › coachkarimhand",
     "extrait": "Entraîneur des U18 du HBC Mulhouse-Sud 🤾 Prof d'EPS. Fier de mes joueurs…",
     "page": {
      "type": "social",
      "site": "Chirp",
      "domaine": "chirp.com",
      "titre": "Karim Bauer",
      "sousTitre": "@coachkarimhand",
      "date": null,
      "encart": [
       [
        "Abonnés",
        "1 240"
       ],
       [
        "Localisation",
        "Mulhouse"
       ],
       [
        "Inscrit",
        "2014"
       ]
      ],
      "sections": [
       {
        "titre": "Bio",
        "texte": "Entraîneur des U18 du HBC Mulhouse-Sud 🤾 Professeur d'EPS au collège Jean-Rostand. Fier de mes joueurs, sur le terrain comme en dehors."
       },
       {
        "titre": "Derniers posts",
        "liste": [
         "Victoire 31-27 contre Colmar ce week-end, bravo les gars !",
         "Stage d'été complet, merci à tous les parents",
         "Rappel : entraînement décalé à 19 h jeudi",
         "Trois de nos joueurs sélectionnés en équipe régionale 💪"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Karim Bauer (@coachkarimhand) – Chirp",
     "url": "chirp.com › coachkarimhand",
     "extrait": "Coach of the HBC Mulhouse-Sud under-18s 🤾 PE teacher. Proud of my players…",
     "page": {
      "type": "social",
      "site": "Chirp",
      "domaine": "chirp.com",
      "titre": "Karim Bauer",
      "sousTitre": "@coachkarimhand",
      "date": null,
      "encart": [
       [
        "Followers",
        "1,240"
       ],
       [
        "Location",
        "Mulhouse"
       ],
       [
        "Joined",
        "2014"
       ]
      ],
      "sections": [
       {
        "titre": "Bio",
        "texte": "Coach of the HBC Mulhouse-Sud under-18 handball team 🤾 PE teacher at Jean-Rostand secondary school. Proud of my players, on and off the court."
       },
       {
        "titre": "Latest posts",
        "liste": [
         "31-27 win against Colmar this weekend, well done lads!",
         "Summer camp fully booked, thanks to all the parents",
         "Reminder: Thursday training moved to 7 pm",
         "Three of our players picked for the regional team 💪"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p21-3": {
  "nom": "Rafael Lemaire",
  "genre": "m",
  "cle": {
   "fr": "Directeur IA d'une grande entreprise tech, interview Forbes",
   "en": "AI director at a major tech company, Forbes interview"
  },
  "support": {
   "fr": "Interview dans un magazine économique",
   "en": "Business magazine interview"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Rafael Lemaire – Directeur de l'intelligence artificielle – Nexalys | ProLink",
     "url": "prolink.com › in › rafael-lemaire",
     "extrait": "Je dirige les équipes IA de Nexalys, qui conçoit des assistants automatiques pour les services clients, la comptabilité et les ressources humaines…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Rafael Lemaire",
      "sousTitre": "Directeur de l'intelligence artificielle chez Nexalys",
      "date": null,
      "encart": [
       [
        "Poste actuel",
        "Directeur IA, Nexalys"
       ],
       [
        "Formation",
        "Diplôme d'ingénieur en informatique, École supérieure d'informatique de Lorvanne"
       ],
       [
        "Abonnés",
        "41 k"
       ]
      ],
      "sections": [
       {
        "titre": "À propos",
        "texte": "Je dirige les équipes IA de Nexalys, qui conçoit des assistants automatiques pour les services clients, la comptabilité et les ressources humaines des entreprises. Notre mission : rendre l'IA accessible à toutes les entreprises, petites ou grandes."
       },
       {
        "titre": "Expérience",
        "liste": [
         "Directeur IA, Nexalys (depuis 2020)",
         "Responsable data science, banque en ligne (2014-2020)",
         "Ingénieur logiciel (2010-2014)"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Rafael Lemaire – Director of Artificial Intelligence – Nexalys | ProLink",
     "url": "prolink.com › in › rafael-lemaire",
     "extrait": "I lead the AI teams at Nexalys, which designs automated assistants for companies' customer service, accounting and human resources…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Rafael Lemaire",
      "sousTitre": "Director of Artificial Intelligence at Nexalys",
      "date": null,
      "encart": [
       [
        "Current position",
        "AI Director, Nexalys"
       ],
       [
        "Education",
        "Engineering degree in computer science, Lorvanne School of Computing"
       ],
       [
        "Followers",
        "41k"
       ]
      ],
      "sections": [
       {
        "titre": "About",
        "texte": "I lead the AI teams at Nexalys, which designs automated assistants for companies' customer service, accounting and human resources. Our mission: make AI accessible to every business, large or small."
       },
       {
        "titre": "Experience",
        "liste": [
         "AI Director, Nexalys (since 2020)",
         "Head of data science, online bank (2014-2020)",
         "Software engineer (2010-2014)"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Nexalys lève 300 millions d'euros pour accélérer l'automatisation",
     "url": "hebdo-des-affaires.fr › tech › nexalys-levee-300-millions",
     "extrait": "La société, dont les logiciels prennent en charge des tâches répétitives dans les entreprises, veut tripler son chiffre d'affaires. Son directeur IA, Rafael Lemaire…",
     "page": {
      "type": "presse",
      "site": "L'Hebdo des Affaires",
      "domaine": "hebdo-des-affaires.fr",
      "titre": "Nexalys lève 300 millions d'euros pour accélérer l'automatisation",
      "sousTitre": "Tech · Financement",
      "date": "5 mars 2025",
      "encart": [],
      "sections": [
       {
        "texte": "Nexalys, dont les logiciels prennent en charge des tâches répétitives dans les entreprises, vient de lever 300 millions d'euros auprès d'investisseurs. Objectif : tripler son chiffre d'affaires d'ici 2027. « Nos clients veulent faire plus avec les mêmes équipes », explique Rafael Lemaire, directeur IA et actionnaire de la société."
       },
       {
        "titre": "Une entrée en Bourse envisagée",
        "texte": "La direction n'exclut pas une introduction en Bourse dès l'an prochain. Ses dirigeants multiplient les interviews et les conférences pour convaincre de nouveaux clients et rassurer les investisseurs."
       }
      ]
     }
    },
    "en": {
     "titre": "Nexalys raises 300 million euros to speed up automation",
     "url": "hebdo-des-affaires.fr › tech › nexalys-raises-300-million",
     "extrait": "The company, whose software takes over repetitive tasks in businesses, wants to triple its revenue. Its AI director, Rafael Lemaire…",
     "page": {
      "type": "presse",
      "site": "L'Hebdo des Affaires",
      "domaine": "hebdo-des-affaires.fr",
      "titre": "Nexalys raises 300 million euros to speed up automation",
      "sousTitre": "Tech · Funding",
      "date": "5 March 2025",
      "encart": [],
      "sections": [
       {
        "texte": "Nexalys, whose software takes over repetitive tasks in businesses, has just raised 300 million euros from investors. The goal: triple its revenue by 2027. “Our clients want to do more with the same teams,” explains Rafael Lemaire, AI director and shareholder in the company."
       },
       {
        "titre": "A stock market listing on the cards",
        "texte": "Management does not rule out going public as early as next year. Its executives are giving more and more interviews and talks to win new clients and reassure investors."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Nexalys Assist – Automatisez votre service client",
     "url": "nexalys.io › produits › nexalys-assist",
     "extrait": "Réduisez vos coûts : Nexalys Assist répond automatiquement à vos clients, jour et nuit. Plus de 1 200 entreprises nous font confiance…",
     "page": {
      "type": "commerce",
      "site": "Nexalys",
      "domaine": "nexalys.io",
      "titre": "Nexalys Assist",
      "sousTitre": "Automatisez votre service client",
      "date": null,
      "encart": [
       [
        "Offre",
        "Nexalys Assist"
       ],
       [
        "Tarif",
        "sur devis"
       ],
       [
        "Clients",
        "plus de 1 200 entreprises"
       ]
      ],
      "sections": [
       {
        "texte": "Réduisez vos coûts : Nexalys Assist répond automatiquement aux questions de vos clients, jour et nuit, par écrit ou par téléphone. Jusqu'à 70 % des demandes traitées sans intervention humaine."
       },
       {
        "titre": "Le mot de notre directeur IA",
        "texte": "« L'IA ne remplace pas vos équipes, elle les libère des tâches ennuyeuses. Nos clients gagnent en efficacité dès le premier mois. » Rafael Lemaire, directeur IA de Nexalys."
       }
      ]
     }
    },
    "en": {
     "titre": "Nexalys Assist – Automate your customer service",
     "url": "nexalys.io › products › nexalys-assist",
     "extrait": "Cut your costs: Nexalys Assist answers your customers automatically, day and night. Over 1,200 companies trust us…",
     "page": {
      "type": "commerce",
      "site": "Nexalys",
      "domaine": "nexalys.io",
      "titre": "Nexalys Assist",
      "sousTitre": "Automate your customer service",
      "date": null,
      "encart": [
       [
        "Product",
        "Nexalys Assist"
       ],
       [
        "Price",
        "on quotation"
       ],
       [
        "Clients",
        "over 1,200 companies"
       ]
      ],
      "sections": [
       {
        "texte": "Cut your costs: Nexalys Assist automatically answers your customers' questions, day and night, in writing or by phone. Up to 70% of requests handled without any human involvement."
       },
       {
        "titre": "A word from our AI director",
        "texte": "“AI doesn't replace your teams, it frees them from boring tasks. Our clients become more efficient from the very first month.” Rafael Lemaire, AI director at Nexalys."
       }
      ]
     }
    }
   }
  ]
 },
 "p22-3": {
  "nom": "Solène Lambert",
  "genre": "f",
  "cle": {
   "fr": "Blog militant 'Vivons sans clim', tribune citoyenne",
   "en": "Activist blog 'Live Without AC', citizen platform"
  },
  "support": {
   "fr": "Tribune sur un blog",
   "en": "Opinion piece on a blog"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Qui suis-je ? – Vivons sans clim",
     "url": "vivons-sans-clim.fr › qui-suis-je",
     "extrait": "Moi c'est Solène, alias ÉcoloSansCom. J'ai créé ce blog en 2021 après un été caniculaire passé à entendre les climatiseurs de mes voisins…",
     "page": {
      "type": "blog",
      "site": "Vivons sans clim – tribune citoyenne",
      "domaine": "vivons-sans-clim.fr",
      "titre": "Qui suis-je ?",
      "sousTitre": "Solène Lambert, alias ÉcoloSansCom",
      "date": null,
      "encart": [
       [
        "Blog créé en",
        "2021"
       ],
       [
        "Articles",
        "86"
       ]
      ],
      "sections": [
       {
        "texte": "Moi c'est Solène, alias ÉcoloSansCom. Graphiste à Montpellier, j'ai créé ce blog en 2021 après un été caniculaire passé à entendre les climatiseurs de mes voisins tourner jour et nuit. Je me documente sur Internet et dans les livres, et je partage ici mes convictions : on peut vivre mieux en consommant moins."
       },
       {
        "titre": "Mes combats",
        "liste": [
         "Moins de clim dans nos villes",
         "Plus d'arbres dans les cours d'école",
         "Consommer local et de saison"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Who am I? – Live Without AC",
     "url": "vivons-sans-clim.fr › who-am-i",
     "extrait": "I'm Solène, aka ÉcoloSansCom. I started this blog in 2021 after a heatwave summer spent listening to my neighbours' air conditioners…",
     "page": {
      "type": "blog",
      "site": "Live Without AC – a citizen platform",
      "domaine": "vivons-sans-clim.fr",
      "titre": "Who am I?",
      "sousTitre": "Solène Lambert, aka ÉcoloSansCom",
      "date": null,
      "encart": [
       [
        "Blog started",
        "2021"
       ],
       [
        "Posts",
        "86"
       ]
      ],
      "sections": [
       {
        "texte": "I'm Solène, aka ÉcoloSansCom. A graphic designer in Montpellier, I started this blog in 2021 after a heatwave summer spent listening to my neighbours' air conditioners running day and night. I read up online and in books, and here I share my beliefs: we can live better by consuming less."
       },
       {
        "titre": "My causes",
        "liste": [
         "Less AC in our cities",
         "More trees in school playgrounds",
         "Buying local and seasonal"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "ÉcoloSansCom (@ecolosanscom) – Chirp",
     "url": "chirp.com › ecolosanscom",
     "extrait": "Graphiste le jour, militante écolo le soir 🌿 Blog : vivons-sans-clim.fr…",
     "page": {
      "type": "social",
      "site": "Chirp",
      "domaine": "chirp.com",
      "titre": "ÉcoloSansCom",
      "sousTitre": "@ecolosanscom",
      "date": null,
      "encart": [
       [
        "Abonnés",
        "3 870"
       ],
       [
        "Localisation",
        "Montpellier"
       ],
       [
        "Inscrite",
        "2021"
       ]
      ],
      "sections": [
       {
        "titre": "Bio",
        "texte": "Graphiste le jour, militante écolo le soir 🌿 Solène L. Blog : vivons-sans-clim.fr"
       },
       {
        "titre": "Derniers posts",
        "liste": [
         "Pétition contre la clim dans les bureaux de la mairie : 1 200 signatures, merci !",
         "Ventilateur + volets fermés = la meilleure clim du monde",
         "Rassemblement samedi devant la mairie, venez nombreux 🌳",
         "Nouveau logo pour le collectif Ville fraîche, fait maison 🎨"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "ÉcoloSansCom (@ecolosanscom) – Chirp",
     "url": "chirp.com › ecolosanscom",
     "extrait": "Graphic designer by day, green activist by night 🌿 Blog: vivons-sans-clim.fr…",
     "page": {
      "type": "social",
      "site": "Chirp",
      "domaine": "chirp.com",
      "titre": "ÉcoloSansCom",
      "sousTitre": "@ecolosanscom",
      "date": null,
      "encart": [
       [
        "Followers",
        "3,870"
       ],
       [
        "Location",
        "Montpellier"
       ],
       [
        "Joined",
        "2021"
       ]
      ],
      "sections": [
       {
        "titre": "Bio",
        "texte": "Graphic designer by day, green activist by night 🌿 Solène L. Blog: vivons-sans-clim.fr"
       },
       {
        "titre": "Latest posts",
        "liste": [
         "Petition against AC in the town hall offices: 1,200 signatures, thank you!",
         "Fan + closed shutters = the best AC in the world",
         "Rally on Saturday outside the town hall, come along 🌳",
         "New logo for the Cool City collective, homemade 🎨"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Solène Lambert – Graphiste indépendante | ProLink",
     "url": "prolink.com › in › solene-lambert-graphiste",
     "extrait": "Graphiste indépendante à Montpellier : identités visuelles, affiches, sites web. Fondatrice du blog Vivons sans clim…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Solène Lambert",
      "sousTitre": "Graphiste indépendante · Montpellier",
      "date": null,
      "encart": [
       [
        "Poste actuel",
        "Graphiste indépendante"
       ],
       [
        "Formation",
        "Diplôme national des métiers d'art et du design, mention graphisme"
       ],
       [
        "Relations",
        "350"
       ]
      ],
      "sections": [
       {
        "titre": "Expérience",
        "liste": [
         "Graphiste indépendante : logos, affiches, sites web (depuis 2018)",
         "Graphiste, agence de communication Pixel Sud (2014-2018)"
        ]
       },
       {
        "titre": "Bénévolat",
        "texte": "Fondatrice du blog Vivons sans clim et membre du collectif citoyen Ville fraîche, qui milite pour la végétalisation des rues et des cours d'école à Montpellier."
       }
      ]
     }
    },
    "en": {
     "titre": "Solène Lambert – Freelance Graphic Designer | ProLink",
     "url": "prolink.com › in › solene-lambert-graphiste",
     "extrait": "Freelance graphic designer in Montpellier: branding, posters, websites. Founder of the Live Without AC blog…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Solène Lambert",
      "sousTitre": "Freelance Graphic Designer · Montpellier",
      "date": null,
      "encart": [
       [
        "Current position",
        "Freelance graphic designer"
       ],
       [
        "Education",
        "National diploma in applied arts and design, graphic design"
       ],
       [
        "Connections",
        "350"
       ]
      ],
      "sections": [
       {
        "titre": "Experience",
        "liste": [
         "Freelance graphic designer: logos, posters, websites (since 2018)",
         "Graphic designer, Pixel Sud communications agency (2014-2018)"
        ]
       },
       {
        "titre": "Volunteering",
        "texte": "Founder of the Live Without AC blog and member of the Cool City citizens' collective, which campaigns for more greenery in Montpellier's streets and school playgrounds."
       }
      ]
     }
    }
   }
  ]
 },
 "p23-1": {
  "nom": "Vincent Regnier",
  "genre": "m",
  "cle": {
   "fr": "Chercheur en psychologie du développement",
   "en": "Developmental psychology researcher"
  },
  "support": {
   "fr": "Interview dans un magazine pour parents",
   "en": "Parenting magazine interview"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Vincent Regnier – Directeur de recherche – Laboratoire de psychologie du développement – Université de Lorvanne",
     "url": "univ-lorvanne.fr › lpde › membres › vincent-regnier",
     "extrait": "Directeur de recherche en psychologie du développement. Coordonne la cohorte Grandir, qui suit 4 000 enfants depuis 2012…",
     "page": {
      "type": "institution",
      "site": "Université de Lorvanne – Laboratoire de psychologie du développement et de l'éducation",
      "domaine": "univ-lorvanne.fr",
      "titre": "Vincent Regnier",
      "sousTitre": "Directeur de recherche en psychologie du développement",
      "date": null,
      "encart": [
       [
        "Thèse",
        "2006, « Intelligence et réussite scolaire de 6 à 15 ans »"
       ],
       [
        "Projet en cours",
        "Cohorte Grandir (4 000 enfants suivis depuis 2012)"
       ],
       [
        "Enseignement",
        "Master Psychologie de l'enfant et de l'adolescent"
       ]
      ],
      "sections": [
       {
        "titre": "Recherches",
        "texte": "Vincent Regnier étudie le développement intellectuel et la scolarité des enfants et des adolescents. Il coordonne la cohorte Grandir, qui suit chaque année plusieurs milliers d'élèves tirés au sort dans les écoles de la région, quels que soient leur profil et leurs résultats, y compris les enfants au QI très élevé."
       },
       {
        "titre": "Responsabilités",
        "liste": [
         "Directeur adjoint du laboratoire",
         "Membre du comité de rédaction de la Revue de psychologie de l'enfant"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Vincent Regnier – Research Director – Developmental Psychology Laboratory – University of Lorvanne",
     "url": "univ-lorvanne.fr › lpde › members › vincent-regnier",
     "extrait": "Research director in developmental psychology. Coordinates the Grandir cohort, which has followed 4,000 children since 2012…",
     "page": {
      "type": "institution",
      "site": "University of Lorvanne – Laboratory of Developmental and Educational Psychology",
      "domaine": "univ-lorvanne.fr",
      "titre": "Vincent Regnier",
      "sousTitre": "Research Director in Developmental Psychology",
      "date": null,
      "encart": [
       [
        "PhD",
        "2006, “Intelligence and school achievement from age 6 to 15”"
       ],
       [
        "Current project",
        "Grandir cohort (4,000 children followed since 2012)"
       ],
       [
        "Teaching",
        "Master's in Child and Adolescent Psychology"
       ]
      ],
      "sections": [
       {
        "titre": "Research",
        "texte": "Vincent Regnier studies the intellectual development and schooling of children and teenagers. He coordinates the Grandir cohort, which every year follows several thousand pupils drawn at random from schools in the region, whatever their profile and results, including children with a very high IQ."
       },
       {
        "titre": "Responsibilities",
        "liste": [
         "Deputy director of the laboratory",
         "Member of the editorial board of the Child Psychology Review"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Regnier, Vincent – Profil auteur – SciIndex",
     "url": "sciindex.org › auteurs › regnier-vincent",
     "extrait": "57 publications · 2 340 citations · Domaines : psychologie du développement, intelligence, réussite scolaire…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Vincent Regnier",
      "sousTitre": "Université de Lorvanne, Laboratoire de psychologie du développement",
      "date": null,
      "encart": [
       [
        "Publications",
        "57"
       ],
       [
        "Citations",
        "2 340"
       ],
       [
        "Domaines",
        "Psychologie du développement, intelligence, réussite scolaire"
       ]
      ],
      "sections": [
       {
        "titre": "Articles les plus cités",
        "liste": [
         "« Les élèves à haut potentiel dans une cohorte de 4 000 enfants », Revue de psychologie de l'enfant, 2019",
         "« Mesurer l'intelligence à l'école : limites et bons usages », Psychologie & Éducation, 2015",
         "« Anxiété et performances scolaires à l'adolescence », Journal européen du développement, 2021"
        ]
       },
       {
        "titre": "À propos de ce profil",
        "texte": "Profil vérifié par l'établissement. Articles publiés dans des revues à comité de lecture."
       }
      ]
     }
    },
    "en": {
     "titre": "Regnier, Vincent – Author profile – SciIndex",
     "url": "sciindex.org › authors › regnier-vincent",
     "extrait": "57 publications · 2,340 citations · Fields: developmental psychology, intelligence, school achievement…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Vincent Regnier",
      "sousTitre": "University of Lorvanne, Developmental Psychology Laboratory",
      "date": null,
      "encart": [
       [
        "Publications",
        "57"
       ],
       [
        "Citations",
        "2,340"
       ],
       [
        "Fields",
        "Developmental psychology, intelligence, school achievement"
       ]
      ],
      "sections": [
       {
        "titre": "Most cited articles",
        "liste": [
         "“Gifted pupils in a cohort of 4,000 children”, Child Psychology Review, 2019",
         "“Measuring intelligence at school: limits and good practice”, Psychology & Education, 2015",
         "“Anxiety and school performance in adolescence”, European Journal of Development, 2021"
        ]
       },
       {
        "titre": "About this profile",
        "texte": "Profile verified by the institution. Articles published in peer-reviewed journals."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Regnier Immobilier – Vincent Regnier, votre agent immobilier à Toulon",
     "url": "regnier-immobilier-toulon.fr › agence",
     "extrait": "Vincent Regnier vous accueille dans son agence du Mourillon depuis 2009. Achat, vente, location, estimation gratuite…",
     "page": {
      "type": "commerce",
      "site": "Regnier Immobilier",
      "domaine": "regnier-immobilier-toulon.fr",
      "titre": "Regnier Immobilier",
      "sousTitre": "Vincent Regnier, agent immobilier à Toulon",
      "date": null,
      "encart": [
       [
        "Agence",
        "Le Mourillon, Toulon"
       ],
       [
        "Horaires",
        "lun-sam, 9 h-19 h"
       ],
       [
        "Estimation",
        "gratuite sous 48 h"
       ]
      ],
      "sections": [
       {
        "titre": "Notre agence",
        "texte": "Vincent Regnier vous accueille dans son agence du Mourillon depuis 2009. Achat, vente, location : il vous accompagne à chaque étape de votre projet, avec une parfaite connaissance du marché toulonnais."
       },
       {
        "titre": "Nos biens du moment",
        "liste": [
         "T3 vue mer, 68 m², Le Mourillon – 329 000 €",
         "Maison avec jardin, 110 m², La Garde – 465 000 €",
         "Studio meublé à louer, centre-ville – 590 €/mois"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Regnier Immobilier – Vincent Regnier, your estate agent in Toulon",
     "url": "regnier-immobilier-toulon.fr › agency",
     "extrait": "Vincent Regnier has welcomed clients to his agency in Le Mourillon since 2009. Buying, selling, renting, free valuation…",
     "page": {
      "type": "commerce",
      "site": "Regnier Immobilier",
      "domaine": "regnier-immobilier-toulon.fr",
      "titre": "Regnier Immobilier",
      "sousTitre": "Vincent Regnier, estate agent in Toulon",
      "date": null,
      "encart": [
       [
        "Agency",
        "Le Mourillon, Toulon"
       ],
       [
        "Opening hours",
        "Mon-Sat, 9 am-7 pm"
       ],
       [
        "Valuation",
        "free within 48 hours"
       ]
      ],
      "sections": [
       {
        "titre": "Our agency",
        "texte": "Vincent Regnier has welcomed clients to his agency in Le Mourillon since 2009. Buying, selling, renting: he supports you at every stage of your project, with in-depth knowledge of the Toulon property market."
       },
       {
        "titre": "Current properties",
        "liste": [
         "Two-bedroom flat with sea view, 68 m², Le Mourillon – €329,000",
         "House with garden, 110 m², La Garde – €465,000",
         "Furnished studio to rent, town centre – €590/month"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p24-1": {
  "nom": "Lucien Lefort",
  "genre": "m",
  "cle": {
   "fr": "Historien de la psychologie",
   "en": "Historian of psychology"
  },
  "support": {
   "fr": "Émission de radio",
   "en": "Radio programme"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Lucien Lefort (historien) – Encyclopédia Libre",
     "url": "encyclopedia-libre.org › wiki › Lucien_Lefort_(historien)",
     "extrait": "Lucien Lefort, né en 1968, est un historien des sciences français, spécialiste de l'histoire de la psychologie au XXe siècle…",
     "page": {
      "type": "encyclo",
      "site": "Encyclopédia Libre",
      "domaine": "encyclopedia-libre.org",
      "titre": "Lucien Lefort (historien)",
      "sousTitre": "Historien des sciences français",
      "date": null,
      "encart": [
       [
        "Naissance",
        "1968"
       ],
       [
        "Nationalité",
        "française"
       ],
       [
        "Domaine",
        "Histoire des sciences humaines"
       ],
       [
        "Poste",
        "Professeur à l'Université de Castelroc"
       ]
      ],
      "sections": [
       {
        "titre": "Biographie",
        "texte": "Lucien Lefort est un historien des sciences, professeur à l'Université de Castelroc. Après une thèse sur la naissance de la psychologie expérimentale, il s'est spécialisé dans l'histoire de la psychologie au XXe siècle, en particulier aux États-Unis. Il a travaillé dans plusieurs fonds d'archives de psychologues américains."
       },
       {
        "titre": "Ouvrages",
        "liste": [
         "Une histoire de la psychologie américaine (2011)",
         "Les théories de la motivation, de 1930 à nos jours (2017)",
         "Mythes et légendes de la psychologie (2023)"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Lucien Lefort (historian) – Encyclopédia Libre",
     "url": "encyclopedia-libre.org › wiki › Lucien_Lefort_(historian)",
     "extrait": "Lucien Lefort, born in 1968, is a French historian of science, specialising in the history of 20th-century psychology…",
     "page": {
      "type": "encyclo",
      "site": "Encyclopédia Libre",
      "domaine": "encyclopedia-libre.org",
      "titre": "Lucien Lefort (historian)",
      "sousTitre": "French historian of science",
      "date": null,
      "encart": [
       [
        "Born",
        "1968"
       ],
       [
        "Nationality",
        "French"
       ],
       [
        "Field",
        "History of the human sciences"
       ],
       [
        "Position",
        "Professor at the University of Castelroc"
       ]
      ],
      "sections": [
       {
        "titre": "Biography",
        "texte": "Lucien Lefort is a historian of science and a professor at the University of Castelroc. After a PhD on the birth of experimental psychology, he specialised in the history of 20th-century psychology, especially in the United States. He has worked in the archives of several American psychologists."
       },
       {
        "titre": "Books",
        "liste": [
         "A History of American Psychology (2011)",
         "Theories of Motivation, from 1930 to the Present (2017)",
         "Myths and Legends of Psychology (2023)"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Lucien Lefort – Professeur d'histoire des sciences – Université de Castelroc",
     "url": "univ-castelroc.fr › chst › equipe › lucien-lefort",
     "extrait": "Professeur des universités. Spécialité : histoire de la psychologie (XIXe-XXe siècles). Centre d'histoire des sciences et des techniques…",
     "page": {
      "type": "institution",
      "site": "Université de Castelroc – Centre d'histoire des sciences et des techniques",
      "domaine": "univ-castelroc.fr",
      "titre": "Lucien Lefort",
      "sousTitre": "Professeur d'histoire des sciences",
      "date": null,
      "encart": [
       [
        "Fonction",
        "Professeur des universités"
       ],
       [
        "Spécialité",
        "Histoire de la psychologie (XIXe-XXe siècles)"
       ],
       [
        "Séminaire",
        "Lire les textes fondateurs de la psychologie"
       ]
      ],
      "sections": [
       {
        "titre": "Présentation",
        "texte": "Ses travaux portent sur la manière dont les théories psychologiques ont été élaborées, puis diffusées et parfois transformées dans les manuels, la presse et le monde de l'entreprise. Il étudie les textes originaux des psychologues, leurs correspondances et les éditions successives de leurs ouvrages."
       },
       {
        "titre": "Encadrement",
        "texte": "Il dirige actuellement six doctorants et coordonne un programme de numérisation d'archives de psychologues du XXe siècle."
       }
      ]
     }
    },
    "en": {
     "titre": "Lucien Lefort – Professor of History of Science – University of Castelroc",
     "url": "univ-castelroc.fr › chst › staff › lucien-lefort",
     "extrait": "Full professor. Speciality: history of psychology (19th-20th centuries). Centre for the History of Science and Technology…",
     "page": {
      "type": "institution",
      "site": "University of Castelroc – Centre for the History of Science and Technology",
      "domaine": "univ-castelroc.fr",
      "titre": "Lucien Lefort",
      "sousTitre": "Professor of History of Science",
      "date": null,
      "encart": [
       [
        "Position",
        "Full professor"
       ],
       [
        "Speciality",
        "History of psychology (19th-20th centuries)"
       ],
       [
        "Seminar",
        "Reading the founding texts of psychology"
       ]
      ],
      "sections": [
       {
        "titre": "Overview",
        "texte": "His work looks at how psychological theories were developed, then spread and sometimes transformed in textbooks, the press and the business world. He studies psychologists' original texts, their letters and the successive editions of their books."
       },
       {
        "titre": "Supervision",
        "texte": "He currently supervises six PhD students and coordinates a programme to digitise the archives of 20th-century psychologists."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "« Mythes et légendes de la psychologie » : l'historien Lucien Lefort remonte aux sources",
     "url": "sciences-et-esprit.fr › livres › mythes-legendes-psychologie-lefort",
     "extrait": "Dans son nouvel essai, l'historien Lucien Lefort confronte une quinzaine d'idées célèbres en psychologie aux textes de leurs auteurs…",
     "page": {
      "type": "presse",
      "site": "Sciences & Esprit",
      "domaine": "sciences-et-esprit.fr",
      "titre": "« Mythes et légendes de la psychologie » : l'historien remonte aux sources",
      "sousTitre": "Livres",
      "date": "14 novembre 2023",
      "encart": [
       [
        "Livre",
        "Mythes et légendes de la psychologie (Éditions Arcadie, 2023)"
       ]
      ],
      "sections": [
       {
        "texte": "Dans ce nouvel essai, Lucien Lefort, professeur d'histoire des sciences à l'Université de Castelroc, examine une quinzaine d'idées célèbres en psychologie en les comparant à ce que leurs auteurs ont réellement écrit. Un travail minutieux, fondé sur vingt ans de recherches en archives."
       },
       {
        "titre": "Notre avis",
        "texte": "Clair et rigoureux, l'ouvrage se lit facilement. Chaque chapitre renvoie précisément aux textes originaux, ce qui permet au lecteur de vérifier par lui-même."
       }
      ]
     }
    },
    "en": {
     "titre": "“Myths and Legends of Psychology”: historian Lucien Lefort goes back to the sources",
     "url": "sciences-et-esprit.fr › books › myths-legends-psychology-lefort",
     "extrait": "In his new essay, historian Lucien Lefort compares some fifteen famous ideas in psychology with what their authors actually wrote…",
     "page": {
      "type": "presse",
      "site": "Sciences & Esprit",
      "domaine": "sciences-et-esprit.fr",
      "titre": "“Myths and Legends of Psychology”: the historian goes back to the sources",
      "sousTitre": "Books",
      "date": "14 November 2023",
      "encart": [
       [
        "Book",
        "Myths and Legends of Psychology (Éditions Arcadie, 2023)"
       ]
      ],
      "sections": [
       {
        "texte": "In this new essay, Lucien Lefort, professor of history of science at the University of Castelroc, examines some fifteen famous ideas in psychology by comparing them with what their authors actually wrote. A meticulous piece of work, based on twenty years of archival research."
       },
       {
        "titre": "Our verdict",
        "texte": "Clear and rigorous, the book is an easy read. Each chapter refers precisely to the original texts, so readers can check for themselves."
       }
      ]
     }
    }
   }
  ]
 },
 "p24-3": {
  "nom": "Florence Monnier",
  "genre": "f",
  "cle": {
   "fr": "Post LinkedIn d'un coach en management",
   "en": "LinkedIn post from a management coach"
  },
  "support": {
   "fr": "Message sur un réseau professionnel",
   "en": "Professional network post"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Florence Monnier – Coach en leadership & motivation – Cap Motivation | ProLink",
     "url": "prolink.com › in › florence-monnier",
     "extrait": "J'accompagne les managers qui veulent booster l'engagement de leurs équipes. Conférencière, formatrice, autrice du guide « Managez heureux »…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Florence Monnier",
      "sousTitre": "Coach en leadership & motivation · Fondatrice de Cap Motivation",
      "date": null,
      "encart": [
       [
        "Abonnés",
        "38 k"
       ],
       [
        "Poste actuel",
        "Fondatrice, Cap Motivation"
       ],
       [
        "Formation",
        "Licence de commerce, certificat de coaching (6 mois, organisme privé)"
       ]
      ],
      "sections": [
       {
        "titre": "Expérience",
        "liste": [
         "Fondatrice, Cap Motivation (depuis 2019)",
         "Responsable commerciale, entreprise de fournitures de bureau (2008-2019)"
        ]
       },
       {
        "titre": "Infos",
        "texte": "J'accompagne les managers qui veulent booster l'engagement de leurs équipes. Conférencière, formatrice, autrice du guide « Managez heureux » (autoédition, 2021). Prochain séminaire en novembre, lien en commentaire !"
       }
      ]
     }
    },
    "en": {
     "titre": "Florence Monnier – Leadership & Motivation Coach – Cap Motivation | ProLink",
     "url": "prolink.com › in › florence-monnier",
     "extrait": "I support managers who want to boost their teams' engagement. Speaker, trainer, author of the guide “Manage Happy”…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Florence Monnier",
      "sousTitre": "Leadership & Motivation Coach · Founder of Cap Motivation",
      "date": null,
      "encart": [
       [
        "Followers",
        "38k"
       ],
       [
        "Current position",
        "Founder, Cap Motivation"
       ],
       [
        "Education",
        "Bachelor's in business, coaching certificate (6 months, private provider)"
       ]
      ],
      "sections": [
       {
        "titre": "Experience",
        "liste": [
         "Founder, Cap Motivation (since 2019)",
         "Sales manager, office supplies company (2008-2019)"
        ]
       },
       {
        "titre": "About",
        "texte": "I support managers who want to boost their teams' engagement. Speaker, trainer, author of the guide “Manage Happy” (self-published, 2021). Next seminar in November, link in the comments!"
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Séminaire « Motiver ses équipes en 3 jours » – Cap Motivation",
     "url": "capmotivation.fr › seminaires › motiver-ses-equipes",
     "extrait": "Un séminaire intensif animé par Florence Monnier pour comprendre enfin ce qui motive vos collaborateurs. 1 450 € HT…",
     "page": {
      "type": "commerce",
      "site": "Cap Motivation",
      "domaine": "capmotivation.fr",
      "titre": "Motiver ses équipes en 3 jours",
      "sousTitre": "Séminaire animé par Florence Monnier",
      "date": null,
      "encart": [
       [
        "Tarif",
        "1 450 € HT"
       ],
       [
        "Durée",
        "3 jours"
       ],
       [
        "Prochaine session",
        "du 12 au 14 novembre"
       ]
      ],
      "sections": [
       {
        "texte": "Un séminaire intensif pour comprendre enfin ce qui motive vos collaborateurs. Des méthodes simples, applicables dès le lundi suivant ! Plus de 600 managers formés depuis 2019."
       },
       {
        "titre": "Au programme",
        "liste": [
         "Les grandes théories de la motivation en une matinée",
         "Ateliers pratiques et jeux de rôle",
         "Votre plan d'action personnalisé",
         "Un exemplaire dédicacé du guide « Managez heureux »"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "“Motivate Your Team in 3 Days” seminar – Cap Motivation",
     "url": "capmotivation.fr › seminars › motivate-your-team",
     "extrait": "An intensive seminar led by Florence Monnier to finally understand what motivates your staff. €1,450 excl. VAT…",
     "page": {
      "type": "commerce",
      "site": "Cap Motivation",
      "domaine": "capmotivation.fr",
      "titre": "Motivate Your Team in 3 Days",
      "sousTitre": "Seminar led by Florence Monnier",
      "date": null,
      "encart": [
       [
        "Price",
        "€1,450 excl. VAT"
       ],
       [
        "Length",
        "3 days"
       ],
       [
        "Next session",
        "12 to 14 November"
       ]
      ],
      "sections": [
       {
        "texte": "An intensive seminar to finally understand what motivates your staff. Simple methods you can apply the very next Monday! More than 600 managers trained since 2019."
       },
       {
        "titre": "Programme",
        "liste": [
         "The great theories of motivation in one morning",
         "Hands-on workshops and role plays",
         "Your personalised action plan",
         "A signed copy of the guide “Manage Happy”"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Cap Motivation – Florence Monnier – Vidéoflux",
     "url": "videoflux.com › @capmotivation",
     "extrait": "12 k abonnés · Une minute par jour pour devenir un meilleur manager ! Retrouvez mes formations sur capmotivation.fr…",
     "page": {
      "type": "video",
      "site": "Vidéoflux",
      "domaine": "videoflux.com",
      "titre": "Cap Motivation",
      "sousTitre": "Chaîne de Florence Monnier",
      "date": null,
      "encart": [
       [
        "Abonnés",
        "12 k"
       ],
       [
        "Vidéos",
        "230"
       ],
       [
        "Format",
        "vidéos d'une minute"
       ]
      ],
      "sections": [
       {
        "titre": "À propos",
        "texte": "Une minute par jour pour devenir un meilleur manager ! Des conseils concrets, sans blabla. Retrouvez mes séminaires et mon guide sur capmotivation.fr."
       },
       {
        "titre": "Vidéos populaires",
        "liste": [
         "Le secret des équipes heureuses en 60 secondes",
         "3 phrases à ne jamais dire à un collaborateur",
         "Pourquoi vos équipes ne sont pas créatives",
         "La seule théorie de management à connaître"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Cap Motivation – Florence Monnier – Vidéoflux",
     "url": "videoflux.com › @capmotivation",
     "extrait": "12k subscribers · One minute a day to become a better manager! Find my training courses at capmotivation.fr…",
     "page": {
      "type": "video",
      "site": "Vidéoflux",
      "domaine": "videoflux.com",
      "titre": "Cap Motivation",
      "sousTitre": "Channel by Florence Monnier",
      "date": null,
      "encart": [
       [
        "Subscribers",
        "12k"
       ],
       [
        "Videos",
        "230"
       ],
       [
        "Format",
        "one-minute videos"
       ]
      ],
      "sections": [
       {
        "titre": "About",
        "texte": "One minute a day to become a better manager! Practical tips, no waffle. Find my seminars and my guide at capmotivation.fr."
       },
       {
        "titre": "Popular videos",
        "liste": [
         "The secret of happy teams in 60 seconds",
         "3 things never to say to a team member",
         "Why your teams aren't creative",
         "The only management theory you need to know"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p25-1": {
  "nom": "Hélène Delmas",
  "genre": "f",
  "cle": {
   "fr": "Neuroscientifique de l'éducation",
   "en": "Educational neuroscientist"
  },
  "support": {
   "fr": "Podcast d'actualité",
   "en": "News podcast"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Hélène Delmas – Chargée de recherche – Institut des sciences cognitives de Brévannes",
     "url": "iscb-brevannes.fr › equipes › memoire-apprentissages › helene-delmas",
     "extrait": "Chargée de recherche en neurosciences cognitives. Étudie comment le cerveau apprend et retient de nouvelles connaissances chez les élèves…",
     "page": {
      "type": "institution",
      "site": "Institut des sciences cognitives de Brévannes",
      "domaine": "iscb-brevannes.fr",
      "titre": "Hélène Delmas",
      "sousTitre": "Chargée de recherche en neurosciences cognitives",
      "date": null,
      "encart": [
       [
        "Équipe",
        "Mémoire et apprentissages"
       ],
       [
        "Thèse",
        "2012, « Mémoire et compréhension de la lecture chez l'enfant »"
       ],
       [
        "Spécialité",
        "Neurosciences de l'éducation"
       ]
      ],
      "sections": [
       {
        "titre": "Recherches",
        "texte": "Hélène Delmas étudie comment le cerveau apprend et retient de nouvelles connaissances, en particulier chez les élèves de 8 à 15 ans. Ses expériences, menées en laboratoire et dans des classes partenaires, comparent l'efficacité de différentes façons d'enseigner et de réviser."
       },
       {
        "titre": "Projets en cours",
        "liste": [
         "Programme « Apprendre en classe » avec 40 collèges",
         "Mémoriser grâce aux tests réguliers",
         "Formation des enseignants aux sciences cognitives"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Hélène Delmas – Research Scientist – Brévannes Institute of Cognitive Science",
     "url": "iscb-brevannes.fr › teams › memory-learning › helene-delmas",
     "extrait": "Research scientist in cognitive neuroscience. Studies how the brain learns and retains new knowledge in school pupils…",
     "page": {
      "type": "institution",
      "site": "Brévannes Institute of Cognitive Science",
      "domaine": "iscb-brevannes.fr",
      "titre": "Hélène Delmas",
      "sousTitre": "Research Scientist in Cognitive Neuroscience",
      "date": null,
      "encart": [
       [
        "Team",
        "Memory and Learning"
       ],
       [
        "PhD",
        "2012, “Memory and reading comprehension in children”"
       ],
       [
        "Speciality",
        "Educational neuroscience"
       ]
      ],
      "sections": [
       {
        "titre": "Research",
        "texte": "Hélène Delmas studies how the brain learns and retains new knowledge, especially in pupils aged 8 to 15. Her experiments, carried out in the lab and in partner classrooms, compare how effective different ways of teaching and revising are."
       },
       {
        "titre": "Current projects",
        "liste": [
         "“Learning in class” programme with 40 secondary schools",
         "Memorising through regular testing",
         "Training teachers in cognitive science"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Delmas, Hélène – Profil auteur – SciIndex",
     "url": "sciindex.org › auteurs › delmas-helene",
     "extrait": "38 publications · 1 420 citations · Domaines : neurosciences cognitives, éducation, mémoire…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Hélène Delmas",
      "sousTitre": "Institut des sciences cognitives de Brévannes",
      "date": null,
      "encart": [
       [
        "Publications",
        "38"
       ],
       [
        "Citations",
        "1 420"
       ],
       [
        "Domaines",
        "Neurosciences cognitives, éducation, mémoire"
       ]
      ],
      "sections": [
       {
        "titre": "Articles les plus cités",
        "liste": [
         "« Images, mots et mémoire : une étude chez 600 collégiens », Cognition & Apprentissage, 2018",
         "« Les idées reçues sur le cerveau chez les enseignants : une enquête nationale », Revue des sciences de l'éducation, 2020",
         "« L'effet des tests sur l'apprentissage à long terme », Journal européen de psychologie cognitive, 2022"
        ]
       },
       {
        "titre": "À propos de ce profil",
        "texte": "Profil vérifié par l'établissement. Articles publiés dans des revues à comité de lecture."
       }
      ]
     }
    },
    "en": {
     "titre": "Delmas, Hélène – Author profile – SciIndex",
     "url": "sciindex.org › authors › delmas-helene",
     "extrait": "38 publications · 1,420 citations · Fields: cognitive neuroscience, education, memory…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Hélène Delmas",
      "sousTitre": "Brévannes Institute of Cognitive Science",
      "date": null,
      "encart": [
       [
        "Publications",
        "38"
       ],
       [
        "Citations",
        "1,420"
       ],
       [
        "Fields",
        "Cognitive neuroscience, education, memory"
       ]
      ],
      "sections": [
       {
        "titre": "Most cited articles",
        "liste": [
         "“Pictures, words and memory: a study of 600 secondary school pupils”, Cognition & Learning, 2018",
         "“Teachers' misconceptions about the brain: a national survey”, Review of Educational Sciences, 2020",
         "“The effect of testing on long-term learning”, European Journal of Cognitive Psychology, 2022"
        ]
       },
       {
        "titre": "About this profile",
        "texte": "Profile verified by the institution. Articles published in peer-reviewed journals."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Les Fleurs d'Hélène – le blog d'une fleuriste nantaise",
     "url": "lesfleursdhelene.fr › a-propos",
     "extrait": "Bienvenue ! Je suis Hélène Delmas, fleuriste à Nantes depuis 15 ans. Ici, je partage mes compositions, mes conseils et mes coups de cœur…",
     "page": {
      "type": "blog",
      "site": "Les Fleurs d'Hélène",
      "domaine": "lesfleursdhelene.fr",
      "titre": "À propos",
      "sousTitre": "Hélène Delmas, fleuriste à Nantes",
      "date": null,
      "encart": [
       [
        "Boutique",
        "Quartier Graslin, Nantes"
       ],
       [
        "Ateliers",
        "le samedi matin, 35 €"
       ]
      ],
      "sections": [
       {
        "texte": "Bienvenue ! Je suis Hélène Delmas, fleuriste à Nantes depuis 15 ans. Après un CAP fleuriste, j'ai ouvert ma petite boutique dans le quartier Graslin. Ici, je partage mes compositions de saison, mes conseils d'entretien et mes coups de cœur."
       },
       {
        "titre": "Derniers articles",
        "liste": [
         "Comment faire durer un bouquet de pivoines",
         "Mes fleurs préférées pour un mariage d'automne",
         "Atelier couronnes de Noël : inscriptions ouvertes"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Les Fleurs d'Hélène – a Nantes florist's blog",
     "url": "lesfleursdhelene.fr › about",
     "extrait": "Welcome! I'm Hélène Delmas, a florist in Nantes for 15 years. Here I share my arrangements, my tips and my favourite finds…",
     "page": {
      "type": "blog",
      "site": "Les Fleurs d'Hélène",
      "domaine": "lesfleursdhelene.fr",
      "titre": "About",
      "sousTitre": "Hélène Delmas, florist in Nantes",
      "date": null,
      "encart": [
       [
        "Shop",
        "Graslin district, Nantes"
       ],
       [
        "Workshops",
        "Saturday mornings, €35"
       ]
      ],
      "sections": [
       {
        "texte": "Welcome! I'm Hélène Delmas, a florist in Nantes for 15 years. After a vocational diploma in floristry, I opened my little shop in the Graslin district. Here I share my seasonal arrangements, care tips and favourite finds."
       },
       {
        "titre": "Latest posts",
        "liste": [
         "How to make a bouquet of peonies last",
         "My favourite flowers for an autumn wedding",
         "Christmas wreath workshop: bookings open"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p26-3": {
  "nom": "Xavier Joubert",
  "genre": "m",
  "cle": {
   "fr": "Post viral d'un hypnothérapeute",
   "en": "Viral post from a hypnotherapist"
  },
  "support": {
   "fr": "Publication sur un réseau professionnel",
   "en": "Post on a professional network"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Xavier Joubert – Cabinet Renaissance Intérieure – Séances et tarifs",
     "url": "renaissance-interieure.fr › seances › tarifs",
     "extrait": "Libérez-vous de vos blocages en 3 séances. Bilan offert de 20 minutes. Pack Libération : 240 € au lieu de 270 €…",
     "page": {
      "type": "commerce",
      "site": "Renaissance Intérieure",
      "domaine": "renaissance-interieure.fr",
      "titre": "Retrouvez la source de vos blocages",
      "sousTitre": "Xavier Joubert, praticien en régression et hypnose",
      "date": null,
      "encart": [
       [
        "Bilan découverte",
        "Offert (20 min, en visio)"
       ],
       [
        "Séance individuelle",
        "90 €"
       ],
       [
        "Pack Libération (3 séances)",
        "240 €"
       ],
       [
        "Certification",
        "Praticien en hypnose régressive, Institut Horizon Hypnose"
       ]
      ],
      "sections": [
       {
        "titre": "Ma méthode",
        "texte": "Grâce à la régression guidée, je vous accompagne pour faire remonter les souvenirs enfouis qui sabotent votre vie : peurs, échecs amoureux, manque de confiance. La plupart de mes clients ressentent un vrai soulagement dès la deuxième séance."
       },
       {
        "titre": "Ils m'ont fait confiance",
        "liste": [
         "« J'ai enfin compris d'où venait ma peur de l'eau. » Sabrina, 38 ans",
         "« Trois séances ont changé ma vie. » Karim, 45 ans",
         "« Je recommande à 1000 %. » Lucie, 29 ans"
        ]
       },
       {
        "titre": "Offre du mois",
        "texte": "Code JOUBERT10 : 10 % de réduction sur le Pack Libération pour toute réservation avant la fin du mois."
       }
      ]
     }
    },
    "en": {
     "titre": "Xavier Joubert – Renaissance Intérieure practice – Sessions and prices",
     "url": "renaissance-interieure.fr › sessions › prices",
     "extrait": "Free yourself from your blocks in 3 sessions. Free 20-minute assessment. Liberation Pack: €240 instead of €270…",
     "page": {
      "type": "commerce",
      "site": "Renaissance Intérieure",
      "domaine": "renaissance-interieure.fr",
      "titre": "Find the source of your blocks",
      "sousTitre": "Xavier Joubert, regression and hypnosis practitioner",
      "date": null,
      "encart": [
       [
        "Discovery assessment",
        "Free (20 min, video call)"
       ],
       [
        "Single session",
        "€90"
       ],
       [
        "Liberation Pack (3 sessions)",
        "€240"
       ],
       [
        "Certification",
        "Regression hypnosis practitioner, Institut Horizon Hypnose"
       ]
      ],
      "sections": [
       {
        "titre": "My method",
        "texte": "Through guided regression, I help you bring back the buried memories that sabotage your life: fears, failed relationships, lack of confidence. Most of my clients feel real relief from the second session onwards."
       },
       {
        "titre": "They trusted me",
        "liste": [
         "“I finally understood where my fear of water came from.” Sabrina, 38",
         "“Three sessions changed my life.” Karim, 45",
         "“I recommend it 1000%.” Lucie, 29"
        ]
       },
       {
        "titre": "Offer of the month",
        "texte": "Code JOUBERT10: 10% off the Liberation Pack for any booking before the end of the month."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Xavier Joubert – Hypnothérapeute & Praticien en thérapie de régression | ProLink",
     "url": "prolink.com › in › xavier-joubert",
     "extrait": "Hypnothérapeute indépendant depuis 2020. Auparavant 14 ans de négociation immobilière. Certifications : hypnose régressive (12 jours)…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Xavier Joubert",
      "sousTitre": "Hypnothérapeute & Praticien en thérapie de régression · Nantes",
      "date": null,
      "encart": [
       [
        "Abonnés",
        "27 400"
       ],
       [
        "Poste actuel",
        "Fondateur, Renaissance Intérieure"
       ],
       [
        "Formation",
        "BTS Professions immobilières"
       ]
      ],
      "sections": [
       {
        "titre": "Expérience",
        "liste": [
         "Fondateur, Renaissance Intérieure (2020 – aujourd'hui)",
         "Négociateur puis directeur d'agence, Immo Atlantique Conseil (2006 – 2020)"
        ]
       },
       {
        "titre": "Certifications",
        "liste": [
         "Praticien en hypnose régressive, Institut Horizon Hypnose (12 jours, 2019)",
         "Coach en libération émotionnelle, formation en ligne (2021)"
        ]
       },
       {
        "titre": "Infos",
        "texte": "Après une reconversion personnelle, j'aide chaque jour des centaines de personnes à se libérer de leur passé. Formateur : je transmets aussi ma méthode à de futurs praticiens. Contactez-moi pour un bilan offert."
       }
      ]
     }
    },
    "en": {
     "titre": "Xavier Joubert – Hypnotherapist & Regression Therapy Practitioner | ProLink",
     "url": "prolink.com › in › xavier-joubert",
     "extrait": "Independent hypnotherapist since 2020. Previously 14 years in real-estate sales. Certifications: regression hypnosis (12 days)…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Xavier Joubert",
      "sousTitre": "Hypnotherapist & Regression Therapy Practitioner · Nantes",
      "date": null,
      "encart": [
       [
        "Followers",
        "27,400"
       ],
       [
        "Current position",
        "Founder, Renaissance Intérieure"
       ],
       [
        "Education",
        "Vocational diploma in real estate"
       ]
      ],
      "sections": [
       {
        "titre": "Experience",
        "liste": [
         "Founder, Renaissance Intérieure (2020 – present)",
         "Sales agent then branch manager, Immo Atlantique Conseil (2006 – 2020)"
        ]
       },
       {
        "titre": "Certifications",
        "liste": [
         "Regression hypnosis practitioner, Institut Horizon Hypnose (12 days, 2019)",
         "Emotional release coach, online course (2021)"
        ]
       },
       {
        "titre": "About",
        "texte": "After a personal career change, I help hundreds of people every day free themselves from their past. Also a trainer: I teach my method to future practitioners. Contact me for a free assessment."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Xavier Joubert (@xavier_libere) sur Chirp",
     "url": "chirp.com › xavier_libere",
     "extrait": "Votre passé vous retient ? Je vous aide à le libérer. Bilan offert, lien ci-dessous. Auteur de « Débloque ton passé »…",
     "page": {
      "type": "social",
      "site": "Chirp",
      "domaine": "chirp.com",
      "titre": "Xavier Joubert",
      "sousTitre": "@xavier_libere",
      "date": null,
      "encart": [
       [
        "Abonnés",
        "31 200"
       ],
       [
        "Abonnements",
        "412"
       ],
       [
        "Lien",
        "renaissance-interieure.fr/bilan"
       ]
      ],
      "sections": [
       {
        "titre": "Bio",
        "texte": "Votre passé vous retient ? Je vous aide à le libérer. Auteur de « Débloque ton passé » (autoédité). Bilan offert, lien ci-dessous."
       },
       {
        "titre": "Publications récentes",
        "liste": [
         "Encore une cliente libérée hier soir. Les résultats parlent d'eux-mêmes 🙏",
         "Les médecins ne vous le diront pas : vos blocages ont une origine précise.",
         "Plus que 4 places pour le Pack Libération de mars !",
         "Mon livre est à -30 % ce week-end, ne ratez pas ça."
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Xavier Joubert (@xavier_libere) on Chirp",
     "url": "chirp.com › xavier_libere",
     "extrait": "Is your past holding you back? I help you release it. Free assessment, link below. Author of 'Unlock Your Past'…",
     "page": {
      "type": "social",
      "site": "Chirp",
      "domaine": "chirp.com",
      "titre": "Xavier Joubert",
      "sousTitre": "@xavier_libere",
      "date": null,
      "encart": [
       [
        "Followers",
        "31,200"
       ],
       [
        "Following",
        "412"
       ],
       [
        "Link",
        "renaissance-interieure.fr/bilan"
       ]
      ],
      "sections": [
       {
        "titre": "Bio",
        "texte": "Is your past holding you back? I help you release it. Author of 'Unlock Your Past' (self-published). Free assessment, link below."
       },
       {
        "titre": "Recent posts",
        "liste": [
         "Another client set free last night. The results speak for themselves 🙏",
         "Doctors won't tell you this: your blocks have a precise origin.",
         "Only 4 spots left for the March Liberation Pack!",
         "My book is 30% off this weekend, don't miss it."
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p27-1": {
  "nom": "Estelle Maillard",
  "genre": "f",
  "cle": {
   "fr": "Généticienne du comportement",
   "en": "Behavioral geneticist"
  },
  "support": {
   "fr": "Interview dans un magazine",
   "en": "Magazine interview"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Estelle Maillard – Directrice de recherche – Laboratoire de génétique du comportement",
     "url": "univ-lorvane.fr › genetique-comportement › equipe › estelle-maillard",
     "extrait": "Directrice de recherche en génétique du comportement. Responsable de la cohorte de jumeaux de l'Ouest, qui suit 6 000 paires de jumeaux depuis 2008…",
     "page": {
      "type": "institution",
      "site": "Université de Lorvane",
      "domaine": "univ-lorvane.fr",
      "titre": "Estelle Maillard",
      "sousTitre": "Directrice de recherche en génétique du comportement",
      "date": null,
      "encart": [
       [
        "Laboratoire",
        "Génétique du comportement et développement"
       ],
       [
        "Thèse",
        "2007, Gènes, milieu familial et apprentissage de la lecture : une étude de jumeaux"
       ],
       [
        "Enseignement",
        "Master Génétique humaine, cours de génétique quantitative"
       ]
      ],
      "sections": [
       {
        "titre": "Recherches",
        "texte": "Estelle Maillard étudie comment les gènes et l'environnement contribuent ensemble aux différences entre individus, pour des traits comme la taille, la lecture ou le sommeil. Elle dirige la cohorte de jumeaux de l'Ouest, qui suit 6 000 paires de jumeaux vrais et faux depuis leur naissance."
       },
       {
        "titre": "Projets en cours",
        "liste": [
         "Influence du milieu scolaire sur les écarts de lecture",
         "Comparaison de jumeaux élevés dans des régions différentes",
         "Méthodes statistiques en génétique quantitative"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Estelle Maillard – Research Director – Behavioural Genetics Laboratory",
     "url": "univ-lorvane.fr › behavioural-genetics › team › estelle-maillard",
     "extrait": "Research director in behavioural genetics. Head of the Western Twin Cohort, which has followed 6,000 pairs of twins since 2008…",
     "page": {
      "type": "institution",
      "site": "University of Lorvane",
      "domaine": "univ-lorvane.fr",
      "titre": "Estelle Maillard",
      "sousTitre": "Research director in behavioural genetics",
      "date": null,
      "encart": [
       [
        "Laboratory",
        "Behavioural Genetics and Development"
       ],
       [
        "PhD",
        "2007, Genes, family environment and learning to read: a twin study"
       ],
       [
        "Teaching",
        "Master's in Human Genetics, quantitative genetics course"
       ]
      ],
      "sections": [
       {
        "titre": "Research",
        "texte": "Estelle Maillard studies how genes and the environment together contribute to differences between individuals, for traits such as height, reading or sleep. She leads the Western Twin Cohort, which has followed 6,000 pairs of identical and fraternal twins since birth."
       },
       {
        "titre": "Current projects",
        "liste": [
         "Influence of the school environment on reading gaps",
         "Comparing twins raised in different regions",
         "Statistical methods in quantitative genetics"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Estelle Maillard – Profil auteur | SciIndex",
     "url": "sciindex.org › auteurs › maillard-estelle",
     "extrait": "92 publications, 4 870 citations. Domaines : génétique du comportement, héritabilité, études de jumeaux…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Maillard, Estelle",
      "sousTitre": "Université de Lorvane, Laboratoire de génétique du comportement et développement",
      "date": null,
      "encart": [
       [
        "Publications",
        "92"
       ],
       [
        "Citations",
        "4 870"
       ],
       [
        "Indice h",
        "34"
       ],
       [
        "Domaines",
        "Génétique du comportement, génétique quantitative"
       ]
      ],
      "sections": [
       {
        "titre": "Publications les plus citées",
        "liste": [
         "Heritability of reading skills across school systems: a twin study (2014)",
         "Gene-environment interplay in childhood sleep duration (2017)",
         "Why heritability estimates differ between countries (2019)",
         "Twin cohorts: methods and limits (2021)"
        ]
       },
       {
        "titre": "Revues principales",
        "texte": "Ses articles paraissent surtout dans des revues de génétique humaine et de psychologie du développement, toutes à comité de lecture."
       }
      ]
     }
    },
    "en": {
     "titre": "Estelle Maillard – Author profile | SciIndex",
     "url": "sciindex.org › authors › maillard-estelle",
     "extrait": "92 publications, 4,870 citations. Fields: behavioural genetics, heritability, twin studies…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Maillard, Estelle",
      "sousTitre": "University of Lorvane, Behavioural Genetics and Development Laboratory",
      "date": null,
      "encart": [
       [
        "Publications",
        "92"
       ],
       [
        "Citations",
        "4,870"
       ],
       [
        "h-index",
        "34"
       ],
       [
        "Fields",
        "Behavioural genetics, quantitative genetics"
       ]
      ],
      "sections": [
       {
        "titre": "Most cited publications",
        "liste": [
         "Heritability of reading skills across school systems: a twin study (2014)",
         "Gene-environment interplay in childhood sleep duration (2017)",
         "Why heritability estimates differ between countries (2019)",
         "Twin cohorts: methods and limits (2021)"
        ]
       },
       {
        "titre": "Main journals",
        "texte": "Her articles appear mostly in peer-reviewed journals of human genetics and developmental psychology."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "« Les jumeaux sont un formidable laboratoire naturel » – Entretien avec Estelle Maillard",
     "url": "hebdo-decouvertes.fr › sciences › entretien-estelle-maillard",
     "extrait": "Depuis quinze ans, la généticienne suit des milliers de jumeaux. Elle raconte comment on mène une telle étude, et pourquoi elle a écrit un livre pour le grand public…",
     "page": {
      "type": "presse",
      "site": "Hebdo Découvertes",
      "domaine": "hebdo-decouvertes.fr",
      "titre": "« Les jumeaux sont un formidable laboratoire naturel »",
      "sousTitre": "Entretien avec Estelle Maillard, généticienne du comportement",
      "date": "4 février 2025",
      "encart": [],
      "sections": [
       {
        "texte": "Chaque année, des questionnaires partent vers 12 000 jumeaux. Dans son bureau de l'Université de Lorvane, Estelle Maillard nous montre les classeurs de la cohorte qu'elle a lancée en 2008."
       },
       {
        "titre": "Comment devient-on généticienne du comportement ?",
        "texte": "« Par hasard ! J'ai d'abord fait de la biologie, puis une thèse sur la lecture chez les jumeaux. Je n'en suis jamais vraiment sortie. » Elle publie cette année « Gènes et milieu, mode d'emploi », un livre destiné aux lycéens et aux enseignants."
       }
      ]
     }
    },
    "en": {
     "titre": "'Twins are a wonderful natural laboratory' – Interview with Estelle Maillard",
     "url": "hebdo-decouvertes.fr › science › interview-estelle-maillard",
     "extrait": "For fifteen years, the geneticist has been following thousands of twins. She explains how such a study is run, and why she wrote a book for the general public…",
     "page": {
      "type": "presse",
      "site": "Hebdo Découvertes",
      "domaine": "hebdo-decouvertes.fr",
      "titre": "'Twins are a wonderful natural laboratory'",
      "sousTitre": "Interview with Estelle Maillard, behavioural geneticist",
      "date": "4 February 2025",
      "encart": [],
      "sections": [
       {
        "texte": "Every year, questionnaires are sent to 12,000 twins. In her office at the University of Lorvane, Estelle Maillard shows us the binders of the cohort she launched in 2008."
       },
       {
        "titre": "How do you become a behavioural geneticist?",
        "texte": "'By chance! I studied biology first, then did a PhD on reading in twins. I never really left the subject.' This year she is publishing 'Genes and Environment: A User's Guide', a book for secondary-school students and teachers."
       }
      ]
     }
    }
   }
  ]
 },
 "p28-1": {
  "nom": "Pierre Charrier",
  "genre": "m",
  "cle": {
   "fr": "Historien de la démographie",
   "en": "Historian of demography"
  },
  "support": {
   "fr": "Conférence filmée",
   "en": "Filmed lecture"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Pierre Charrier – Professeur d'histoire moderne – Université de Valcourt",
     "url": "univ-valcourt.fr › histoire › enseignants › pierre-charrier",
     "extrait": "Professeur d'histoire moderne, spécialiste de démographie historique. Dirige le programme « Registres paroissiaux de l'Ouest, 1550-1790 »…",
     "page": {
      "type": "institution",
      "site": "Université de Valcourt",
      "domaine": "univ-valcourt.fr",
      "titre": "Pierre Charrier",
      "sousTitre": "Professeur d'histoire moderne, démographie historique",
      "date": null,
      "encart": [
       [
        "Département",
        "Histoire moderne et contemporaine"
       ],
       [
        "Thèse",
        "1998, Naître, vivre et mourir dans le Bocage, 1600-1750"
       ],
       [
        "Programme dirigé",
        "Registres paroissiaux de l'Ouest, 1550-1790"
       ]
      ],
      "sections": [
       {
        "titre": "Recherches",
        "texte": "Pierre Charrier étudie la population des campagnes françaises du XVIe au XVIIIe siècle : naissances, mariages, décès, âges au décès, épidémies et famines. Avec son équipe, il dépouille les registres tenus par les curés pour reconstituer l'histoire de milliers de familles, génération après génération."
       },
       {
        "titre": "Enseignements",
        "liste": [
         "Licence : introduction à la démographie historique",
         "Master : lire et exploiter les archives paroissiales",
         "Séminaire doctoral : méthodes de reconstitution des familles"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Pierre Charrier – Professor of Early Modern History – University of Valcourt",
     "url": "univ-valcourt.fr › history › faculty › pierre-charrier",
     "extrait": "Professor of early modern history, specialist in historical demography. Leads the 'Parish Registers of Western France, 1550-1790' programme…",
     "page": {
      "type": "institution",
      "site": "University of Valcourt",
      "domaine": "univ-valcourt.fr",
      "titre": "Pierre Charrier",
      "sousTitre": "Professor of early modern history, historical demography",
      "date": null,
      "encart": [
       [
        "Department",
        "Early Modern and Contemporary History"
       ],
       [
        "PhD",
        "1998, Being born, living and dying in the Bocage, 1600-1750"
       ],
       [
        "Programme led",
        "Parish Registers of Western France, 1550-1790"
       ]
      ],
      "sections": [
       {
        "titre": "Research",
        "texte": "Pierre Charrier studies the population of the French countryside from the 16th to the 18th century: births, marriages, deaths, age at death, epidemics and famines. With his team, he goes through the registers kept by parish priests to reconstruct the history of thousands of families, generation after generation."
       },
       {
        "titre": "Teaching",
        "liste": [
         "Bachelor's: introduction to historical demography",
         "Master's: reading and using parish archives",
         "Doctoral seminar: family reconstitution methods"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Pierre Charrier (historien) – Encyclopédia Libre",
     "url": "encyclopedia-libre.org › wiki › Pierre_Charrier_(historien)",
     "extrait": "Pierre Charrier, né en 1966 à Cholet, est un historien français, spécialiste de démographie historique de l'époque moderne…",
     "page": {
      "type": "encyclo",
      "site": "Encyclopédia Libre",
      "domaine": "encyclopedia-libre.org",
      "titre": "Pierre Charrier (historien)",
      "sousTitre": "Historien français",
      "date": null,
      "encart": [
       [
        "Naissance",
        "1966, Cholet"
       ],
       [
        "Domaine",
        "Démographie historique, époque moderne"
       ],
       [
        "Distinction",
        "Prix de l'Association d'histoire rurale (2011)"
       ]
      ],
      "sections": [
       {
        "titre": "Biographie",
        "texte": "Agrégé d'histoire, Pierre Charrier soutient en 1998 une thèse sur la population du Bocage. Il est professeur à l'Université de Valcourt depuis 2006. Ses travaux reposent sur l'étude de plus de 200 000 actes de baptême, de mariage et de sépulture."
       },
       {
        "titre": "Principaux ouvrages",
        "liste": [
         "Le Village et la mort, Éditions du Lierre, 2005",
         "Compter les vivants et les morts, Presses de Valcourt, 2013",
         "Les Familles du Bocage, Presses de Valcourt, 2020"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Pierre Charrier (historian) – Encyclopédia Libre",
     "url": "encyclopedia-libre.org › wiki › Pierre_Charrier_(historian)",
     "extrait": "Pierre Charrier, born in 1966 in Cholet, is a French historian specialising in the historical demography of the early modern period…",
     "page": {
      "type": "encyclo",
      "site": "Encyclopédia Libre",
      "domaine": "encyclopedia-libre.org",
      "titre": "Pierre Charrier (historian)",
      "sousTitre": "French historian",
      "date": null,
      "encart": [
       [
        "Born",
        "1966, Cholet"
       ],
       [
        "Field",
        "Historical demography, early modern period"
       ],
       [
        "Award",
        "Rural History Association Prize (2011)"
       ]
      ],
      "sections": [
       {
        "titre": "Biography",
        "texte": "A qualified history teacher, Pierre Charrier defended a PhD on the population of the Bocage in 1998. He has been a professor at the University of Valcourt since 2006. His work is based on the study of more than 200,000 baptism, marriage and burial records."
       },
       {
        "titre": "Main works",
        "liste": [
         "Le Village et la mort, Éditions du Lierre, 2005",
         "Compter les vivants et les morts, Presses de Valcourt, 2013",
         "Les Familles du Bocage, Presses de Valcourt, 2020"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Charrier Plomberie Chauffage – Pierre Charrier, artisan à Angers",
     "url": "charrier-plomberie.fr › accueil",
     "extrait": "Pierre Charrier, plombier-chauffagiste à Angers depuis 2002. Dépannage, installation de chaudières, salles de bains. Devis gratuit…",
     "page": {
      "type": "commerce",
      "site": "Charrier Plomberie Chauffage",
      "domaine": "charrier-plomberie.fr",
      "titre": "Charrier Plomberie Chauffage",
      "sousTitre": "Pierre Charrier, artisan plombier-chauffagiste à Angers",
      "date": null,
      "encart": [
       [
        "Zone d'intervention",
        "Angers et 30 km alentour"
       ],
       [
        "Horaires",
        "Lundi-samedi, 7 h 30 – 19 h"
       ],
       [
        "Devis",
        "Gratuit"
       ]
      ],
      "sections": [
       {
        "titre": "Qui suis-je ?",
        "texte": "Artisan depuis plus de vingt ans, je m'occupe personnellement de chaque chantier, du simple robinet qui fuit à la rénovation complète de votre salle de bains."
       },
       {
        "titre": "Nos services",
        "liste": [
         "Dépannage de fuites en urgence",
         "Installation et entretien de chaudières",
         "Pompes à chaleur",
         "Rénovation de salles de bains"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Charrier Plumbing & Heating – Pierre Charrier, tradesman in Angers",
     "url": "charrier-plomberie.fr › home",
     "extrait": "Pierre Charrier, plumber and heating engineer in Angers since 2002. Emergency repairs, boiler installation, bathrooms. Free quote…",
     "page": {
      "type": "commerce",
      "site": "Charrier Plumbing & Heating",
      "domaine": "charrier-plomberie.fr",
      "titre": "Charrier Plumbing & Heating",
      "sousTitre": "Pierre Charrier, plumber and heating engineer in Angers",
      "date": null,
      "encart": [
       [
        "Service area",
        "Angers and 30 km around"
       ],
       [
        "Opening hours",
        "Monday-Saturday, 7:30 am – 7 pm"
       ],
       [
        "Quote",
        "Free"
       ]
      ],
      "sections": [
       {
        "titre": "Who am I?",
        "texte": "A tradesman for more than twenty years, I personally handle every job, from a simple dripping tap to a complete renovation of your bathroom."
       },
       {
        "titre": "Our services",
        "liste": [
         "Emergency leak repairs",
         "Boiler installation and servicing",
         "Heat pumps",
         "Bathroom renovation"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p29-1": {
  "nom": "Coralie Marchetti",
  "genre": "f",
  "cle": {
   "fr": "Microbiologiste qui vulgarise sur X (210 k abonnés)",
   "en": "Microbiologist who explains science on X (210k followers)"
  },
  "support": {
   "fr": "Publication sur un réseau social",
   "en": "Social media post"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Coralie Marchetti (@coralie_microbe) sur Chirp",
     "url": "chirp.com › coralie_microbe",
     "extrait": "Microbiologiste, maîtresse de conférences. Je parle bactéries, virus et antibiotiques. Toujours avec les sources en fin de fil…",
     "page": {
      "type": "social",
      "site": "Chirp",
      "domaine": "chirp.com",
      "titre": "Dr Coralie Marchetti",
      "sousTitre": "@coralie_microbe",
      "date": null,
      "encart": [
       [
        "Abonnés",
        "210 000"
       ],
       [
        "Abonnements",
        "830"
       ],
       [
        "Lien",
        "imp-portaven.fr/equipe-marchetti"
       ]
      ],
      "sections": [
       {
        "titre": "Bio",
        "texte": "Microbiologiste, maîtresse de conférences à l'Institut de microbiologie de Port-Aven. Je parle bactéries, virus et antibiotiques. Toujours avec les sources en fin de fil. Les avis exprimés ici sont personnels."
       },
       {
        "titre": "Publications récentes",
        "liste": [
         "Fil : comment on mesure en labo l'efficacité d'un antibiotique (sources ⬇️)",
         "Notre nouvel article est sorti ! Résumé simple dans ce fil.",
         "Non, je ne réponds pas aux questions médicales personnelles : voyez votre médecin.",
         "Petite visite de notre salle de culture en vidéo 🧫"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Coralie Marchetti (@coralie_microbe) on Chirp",
     "url": "chirp.com › coralie_microbe",
     "extrait": "Microbiologist, associate professor. I talk about bacteria, viruses and antibiotics. Always with sources at the end of the thread…",
     "page": {
      "type": "social",
      "site": "Chirp",
      "domaine": "chirp.com",
      "titre": "Dr Coralie Marchetti",
      "sousTitre": "@coralie_microbe",
      "date": null,
      "encart": [
       [
        "Followers",
        "210,000"
       ],
       [
        "Following",
        "830"
       ],
       [
        "Link",
        "imp-portaven.fr/equipe-marchetti"
       ]
      ],
      "sections": [
       {
        "titre": "Bio",
        "texte": "Microbiologist, associate professor at the Port-Aven Institute of Microbiology. I talk about bacteria, viruses and antibiotics. Always with sources at the end of the thread. Views expressed here are my own."
       },
       {
        "titre": "Recent posts",
        "liste": [
         "Thread: how we measure an antibiotic's effectiveness in the lab (sources ⬇️)",
         "Our new paper is out! Simple summary in this thread.",
         "No, I don't answer personal medical questions: see your doctor.",
         "A quick video tour of our culture room 🧫"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Équipe Marchetti – Résistance bactérienne – Institut de microbiologie de Port-Aven",
     "url": "imp-portaven.fr › recherche › equipe-marchetti",
     "extrait": "L'équipe de Coralie Marchetti étudie comment les bactéries deviennent résistantes aux antibiotiques et comment ces résistances se transmettent…",
     "page": {
      "type": "institution",
      "site": "Institut de microbiologie de Port-Aven",
      "domaine": "imp-portaven.fr",
      "titre": "Équipe « Résistance bactérienne »",
      "sousTitre": "Responsable : Dr Coralie Marchetti, maîtresse de conférences",
      "date": null,
      "encart": [
       [
        "Thèse",
        "2012, Transfert de gènes de résistance entre souches d'Escherichia coli"
       ],
       [
        "Membres",
        "9 (chercheurs, doctorants, techniciens)"
       ],
       [
        "Partenaire",
        "Centre hospitalier de Port-Aven"
       ]
      ],
      "sections": [
       {
        "titre": "Thématique",
        "texte": "L'équipe étudie comment les bactéries acquièrent des résistances aux antibiotiques et comment ces résistances se transmettent d'une bactérie à l'autre. Elle analyse des souches prélevées à l'hôpital et dans les eaux usées."
       },
       {
        "titre": "Diffusion des savoirs",
        "texte": "Coralie Marchetti anime un atelier « Bactéries et antibiotiques » pour les collégiens lors de la Fête de la science et vulgarise ses travaux sur les réseaux sociaux."
       }
      ]
     }
    },
    "en": {
     "titre": "Marchetti team – Bacterial resistance – Port-Aven Institute of Microbiology",
     "url": "imp-portaven.fr › research › marchetti-team",
     "extrait": "Coralie Marchetti's team studies how bacteria become resistant to antibiotics and how this resistance is passed on…",
     "page": {
      "type": "institution",
      "site": "Port-Aven Institute of Microbiology",
      "domaine": "imp-portaven.fr",
      "titre": "'Bacterial Resistance' team",
      "sousTitre": "Head: Dr Coralie Marchetti, associate professor",
      "date": null,
      "encart": [
       [
        "PhD",
        "2012, Transfer of resistance genes between Escherichia coli strains"
       ],
       [
        "Members",
        "9 (researchers, PhD students, technicians)"
       ],
       [
        "Partner",
        "Port-Aven Hospital"
       ]
      ],
      "sections": [
       {
        "titre": "Research focus",
        "texte": "The team studies how bacteria acquire resistance to antibiotics and how this resistance is passed from one bacterium to another. It analyses strains collected in hospitals and in wastewater."
       },
       {
        "titre": "Outreach",
        "texte": "Coralie Marchetti runs a 'Bacteria and Antibiotics' workshop for lower-secondary students during the Science Festival and explains her work on social media."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Coralie Marchetti – Profil auteur | SciIndex",
     "url": "sciindex.org › auteurs › marchetti-coralie",
     "extrait": "38 publications, 1 640 citations. Domaines : microbiologie, résistance aux antibiotiques, transfert de gènes…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Marchetti, Coralie",
      "sousTitre": "Institut de microbiologie de Port-Aven",
      "date": null,
      "encart": [
       [
        "Publications",
        "38"
       ],
       [
        "Citations",
        "1 640"
       ],
       [
        "Indice h",
        "21"
       ],
       [
        "Domaines",
        "Microbiologie, antibiorésistance"
       ]
      ],
      "sections": [
       {
        "titre": "Publications récentes",
        "liste": [
         "Resistance genes in hospital wastewater: a two-year survey (2024)",
         "Plasmid transfer between E. coli strains under antibiotic exposure (2022)",
         "Tracking resistant bacteria in a regional hospital network (2020)"
        ]
       },
       {
        "titre": "Coauteurs fréquents",
        "texte": "Chercheurs en microbiologie et médecins infectiologues de plusieurs hôpitaux européens. La plupart de ses articles paraissent dans des revues de microbiologie à comité de lecture."
       }
      ]
     }
    },
    "en": {
     "titre": "Coralie Marchetti – Author profile | SciIndex",
     "url": "sciindex.org › authors › marchetti-coralie",
     "extrait": "38 publications, 1,640 citations. Fields: microbiology, antibiotic resistance, gene transfer…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Marchetti, Coralie",
      "sousTitre": "Port-Aven Institute of Microbiology",
      "date": null,
      "encart": [
       [
        "Publications",
        "38"
       ],
       [
        "Citations",
        "1,640"
       ],
       [
        "h-index",
        "21"
       ],
       [
        "Fields",
        "Microbiology, antibiotic resistance"
       ]
      ],
      "sections": [
       {
        "titre": "Recent publications",
        "liste": [
         "Resistance genes in hospital wastewater: a two-year survey (2024)",
         "Plasmid transfer between E. coli strains under antibiotic exposure (2022)",
         "Tracking resistant bacteria in a regional hospital network (2020)"
        ]
       },
       {
        "titre": "Frequent co-authors",
        "texte": "Microbiology researchers and infectious disease doctors from several European hospitals. Most of her articles are published in peer-reviewed microbiology journals."
       }
      ]
     }
    }
   }
  ]
 },
 "p30-1": {
  "nom": "Thibault Nguyen",
  "genre": "m",
  "cle": {
   "fr": "Méthodologiste des essais cliniques",
   "en": "Clinical-trials methodologist"
  },
  "support": {
   "fr": "Interview à la radio",
   "en": "Radio interview"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Unité de méthodologie et biostatistique – CHU de Kervalan",
     "url": "chu-kervalan.fr › recherche › methodologie-biostatistique",
     "extrait": "Dirigée par le Dr Thibault Nguyen, l'unité accompagne la conception et l'analyse des essais cliniques menés au CHU : tirage au sort, groupes témoins, calcul du nombre de patients…",
     "page": {
      "type": "institution",
      "site": "CHU de Kervalan",
      "domaine": "chu-kervalan.fr",
      "titre": "Unité de méthodologie et biostatistique",
      "sousTitre": "Responsable : Dr Thibault Nguyen, médecin épidémiologiste",
      "date": null,
      "encart": [
       [
        "Rattachement",
        "Centre de recherche clinique du CHU de Kervalan"
       ],
       [
        "Équipe",
        "4 méthodologistes, 6 statisticiens"
       ],
       [
        "Essais accompagnés",
        "Environ 60 par an"
       ]
      ],
      "sections": [
       {
        "titre": "Missions",
        "texte": "L'unité aide les médecins du CHU à concevoir des essais cliniques solides : choix du groupe de comparaison, tirage au sort des patients, essais en double aveugle, nombre de participants nécessaire, puis analyse statistique des résultats."
       },
       {
        "titre": "Le responsable",
        "texte": "Médecin de santé publique et docteur en épidémiologie, Thibault Nguyen enseigne la méthodologie des essais aux internes et siège au comité scientifique du centre de recherche clinique."
       }
      ]
     }
    },
    "en": {
     "titre": "Methodology and Biostatistics Unit – Kervalan University Hospital",
     "url": "chu-kervalan.fr › research › methodology-biostatistics",
     "extrait": "Led by Dr Thibault Nguyen, the unit supports the design and analysis of clinical trials run at the hospital: randomisation, control groups, sample size…",
     "page": {
      "type": "institution",
      "site": "Kervalan University Hospital",
      "domaine": "chu-kervalan.fr",
      "titre": "Methodology and Biostatistics Unit",
      "sousTitre": "Head: Dr Thibault Nguyen, physician and epidemiologist",
      "date": null,
      "encart": [
       [
        "Part of",
        "Clinical Research Centre, Kervalan University Hospital"
       ],
       [
        "Team",
        "4 methodologists, 6 statisticians"
       ],
       [
        "Trials supported",
        "About 60 per year"
       ]
      ],
      "sections": [
       {
        "titre": "Missions",
        "texte": "The unit helps the hospital's doctors design robust clinical trials: choice of comparison group, random allocation of patients, double-blind trials, number of participants needed, then statistical analysis of the results."
       },
       {
        "titre": "The head of unit",
        "texte": "A public health physician with a PhD in epidemiology, Thibault Nguyen teaches trial methodology to junior doctors and sits on the scientific committee of the clinical research centre."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Thibault Nguyen – Épidémiologiste, méthodologiste des essais cliniques | ProLink",
     "url": "prolink.com › in › thibault-nguyen",
     "extrait": "Responsable de l'unité de méthodologie du CHU de Kervalan. Doctorat en épidémiologie. Plus de 15 ans d'expérience dans les essais cliniques…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Thibault Nguyen",
      "sousTitre": "Épidémiologiste · Méthodologie des essais cliniques · Kervalan",
      "date": null,
      "encart": [
       [
        "Poste actuel",
        "Responsable, unité de méthodologie et biostatistique, CHU de Kervalan"
       ],
       [
        "Formation",
        "Doctorat en médecine ; doctorat en épidémiologie"
       ],
       [
        "Relations",
        "1 200"
       ]
      ],
      "sections": [
       {
        "titre": "Expérience",
        "liste": [
         "Responsable de l'unité de méthodologie, CHU de Kervalan (2016 – aujourd'hui)",
         "Méthodologiste, Centre de recherche clinique de Kervalan (2009 – 2016)",
         "Interne en santé publique (2005 – 2009)"
        ]
       },
       {
        "titre": "Formation",
        "liste": [
         "Doctorat en épidémiologie, Université de Kervalan (2012), thèse sur les biais dans les essais sans groupe témoin",
         "Master de biostatistique (2008)"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Thibault Nguyen – Epidemiologist, clinical trials methodologist | ProLink",
     "url": "prolink.com › in › thibault-nguyen",
     "extrait": "Head of the methodology unit at Kervalan University Hospital. PhD in epidemiology. Over 15 years of experience in clinical trials…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Thibault Nguyen",
      "sousTitre": "Epidemiologist · Clinical trials methodology · Kervalan",
      "date": null,
      "encart": [
       [
        "Current position",
        "Head, Methodology and Biostatistics Unit, Kervalan University Hospital"
       ],
       [
        "Education",
        "Medical degree; PhD in epidemiology"
       ],
       [
        "Connections",
        "1,200"
       ]
      ],
      "sections": [
       {
        "titre": "Experience",
        "liste": [
         "Head of the methodology unit, Kervalan University Hospital (2016 – present)",
         "Methodologist, Kervalan Clinical Research Centre (2009 – 2016)",
         "Public health resident (2005 – 2009)"
        ]
       },
       {
        "titre": "Education",
        "liste": [
         "PhD in epidemiology, University of Kervalan (2012), thesis on bias in trials without a control group",
         "Master's in biostatistics (2008)"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Dans les coulisses d'un essai clinique, avec Thibault Nguyen",
     "url": "lefil-sante.fr › reportages › coulisses-essai-clinique",
     "extrait": "Avant qu'un traitement soit autorisé, des équipes comme celle de Thibault Nguyen vérifient que les essais sont bien construits. Reportage à Kervalan…",
     "page": {
      "type": "presse",
      "site": "Le Fil Santé",
      "domaine": "lefil-sante.fr",
      "titre": "Dans les coulisses d'un essai clinique",
      "sousTitre": "Reportage au CHU de Kervalan, avec l'épidémiologiste Thibault Nguyen",
      "date": "18 septembre 2024",
      "encart": [],
      "sections": [
       {
        "texte": "Dans son bureau couvert de tableaux, Thibault Nguyen relit le protocole d'un essai sur un traitement contre la migraine. Son travail : vérifier, avant même le premier patient, que l'étude permettra de conclure honnêtement."
       },
       {
        "titre": "Un métier de l'ombre",
        "texte": "« On ne voit jamais les méthodologistes à la télé, sourit-il. Pourtant, un essai mal conçu peut faire croire qu'un traitement marche alors qu'il ne fait rien. » Il forme chaque année une quarantaine de jeunes médecins à repérer ces pièges."
       }
      ]
     }
    },
    "en": {
     "titre": "Behind the scenes of a clinical trial, with Thibault Nguyen",
     "url": "lefil-sante.fr › reports › behind-clinical-trial",
     "extrait": "Before a treatment is approved, teams like Thibault Nguyen's check that trials are properly designed. A report from Kervalan…",
     "page": {
      "type": "presse",
      "site": "Le Fil Santé",
      "domaine": "lefil-sante.fr",
      "titre": "Behind the scenes of a clinical trial",
      "sousTitre": "A report from Kervalan University Hospital, with epidemiologist Thibault Nguyen",
      "date": "18 September 2024",
      "encart": [],
      "sections": [
       {
        "texte": "In his office covered with charts, Thibault Nguyen is reviewing the protocol of a trial on a migraine treatment. His job: to check, before the first patient is even enrolled, that the study will allow an honest conclusion."
       },
       {
        "titre": "A behind-the-scenes job",
        "texte": "'You never see methodologists on TV,' he smiles. 'Yet a badly designed trial can make people believe a treatment works when it does nothing.' Every year he trains about forty young doctors to spot these pitfalls."
       }
      ]
     }
    }
   }
  ]
 },
 "p30-2": {
  "nom": "Valentin Prevost",
  "genre": "m",
  "cle": {
   "fr": "Coach bien-être très suivi",
   "en": "Widely followed wellness coach"
  },
  "support": {
   "fr": "Publication sur un réseau professionnel",
   "en": "Post on a professional network"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Valentin Prevost – Coach en guérison par la pensée | ProLink",
     "url": "prolink.com › in › valentin-prevost-coach",
     "extrait": "J'aide les personnes à activer le pouvoir de guérison de leur esprit. Ancien responsable commercial, certifié en PNL et en coaching…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Valentin Prevost",
      "sousTitre": "Coach en guérison par la pensée · Conférencier · Lyon",
      "date": null,
      "encart": [
       [
        "Abonnés",
        "54 000"
       ],
       [
        "Poste actuel",
        "Fondateur, Esprit Guérisseur"
       ],
       [
        "Formation",
        "École de commerce, Grenoble"
       ]
      ],
      "sections": [
       {
        "titre": "Infos",
        "texte": "Après dix ans dans la vente, un burn-out m'a fait découvrir la force de l'esprit. Depuis, j'aide des milliers de personnes à reprendre le contrôle de leur santé grâce à mes ateliers et à mon programme en ligne."
       },
       {
        "titre": "Expérience",
        "liste": [
         "Fondateur, Esprit Guérisseur (2018 – aujourd'hui)",
         "Responsable commercial, TéléVox Entreprises (2008 – 2018)"
        ]
       },
       {
        "titre": "Certifications",
        "liste": [
         "Praticien en PNL, organisme privé (2017)",
         "Coach certifié, formation de 10 jours (2018)"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Valentin Prevost – Mind Healing Coach | ProLink",
     "url": "prolink.com › in › valentin-prevost-coach",
     "extrait": "I help people activate the healing power of their mind. Former sales manager, certified in NLP and coaching…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Valentin Prevost",
      "sousTitre": "Mind Healing Coach · Speaker · Lyon",
      "date": null,
      "encart": [
       [
        "Followers",
        "54,000"
       ],
       [
        "Current position",
        "Founder, Esprit Guérisseur"
       ],
       [
        "Education",
        "Business school, Grenoble"
       ]
      ],
      "sections": [
       {
        "titre": "About",
        "texte": "After ten years in sales, a burnout made me discover the power of the mind. Since then, I have helped thousands of people take back control of their health through my workshops and online programme."
       },
       {
        "titre": "Experience",
        "liste": [
         "Founder, Esprit Guérisseur (2018 – present)",
         "Sales manager, TéléVox Entreprises (2008 – 2018)"
        ]
       },
       {
        "titre": "Certifications",
        "liste": [
         "NLP practitioner, private training body (2017)",
         "Certified coach, 10-day course (2018)"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Ateliers Esprit Guérisseur – Valentin Prevost – Réservez votre place",
     "url": "esprit-guerisseur.com › ateliers",
     "extrait": "Atelier de 2 jours « Activez votre pouvoir de guérison » : 390 €. Programme en ligne en 8 semaines : 197 €. Places limitées…",
     "page": {
      "type": "commerce",
      "site": "Esprit Guérisseur",
      "domaine": "esprit-guerisseur.com",
      "titre": "Activez votre pouvoir de guérison",
      "sousTitre": "Les ateliers de Valentin Prevost",
      "date": null,
      "encart": [
       [
        "Atelier 2 jours (Lyon, Paris)",
        "390 €"
       ],
       [
        "Programme en ligne, 8 semaines",
        "197 €"
       ],
       [
        "Accompagnement individuel",
        "150 € la séance"
       ],
       [
        "Prochain atelier",
        "Plus que 6 places"
       ]
      ],
      "sections": [
       {
        "titre": "Ce que vous allez apprendre",
        "liste": [
         "Programmer votre esprit pour soutenir votre corps",
         "Les 5 étapes de la visualisation guérisseuse",
         "Vous libérer des pensées qui vous rendent malade"
        ]
       },
       {
        "titre": "Témoignages",
        "texte": "« Après l'atelier, je me suis sentie transformée. » Martine, 52 ans. « Valentin m'a redonné espoir. » Julien, 41 ans."
       }
      ]
     }
    },
    "en": {
     "titre": "Esprit Guérisseur workshops – Valentin Prevost – Book your place",
     "url": "esprit-guerisseur.com › workshops",
     "extrait": "2-day workshop 'Activate your healing power': €390. 8-week online programme: €197. Limited places…",
     "page": {
      "type": "commerce",
      "site": "Esprit Guérisseur",
      "domaine": "esprit-guerisseur.com",
      "titre": "Activate your healing power",
      "sousTitre": "Valentin Prevost's workshops",
      "date": null,
      "encart": [
       [
        "2-day workshop (Lyon, Paris)",
        "€390"
       ],
       [
        "8-week online programme",
        "€197"
       ],
       [
        "One-to-one coaching",
        "€150 per session"
       ],
       [
        "Next workshop",
        "Only 6 places left"
       ]
      ],
      "sections": [
       {
        "titre": "What you will learn",
        "liste": [
         "Program your mind to support your body",
         "The 5 steps of healing visualisation",
         "Free yourself from the thoughts that make you ill"
        ]
       },
       {
        "titre": "Testimonials",
        "texte": "'After the workshop, I felt transformed.' Martine, 52. 'Valentin gave me hope again.' Julien, 41."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Annecy : le pâtissier Valentin Prevost remporte le concours régional de la tarte aux myrtilles",
     "url": "lechodulac.fr › annecy › gastronomie › valentin-prevost-concours",
     "extrait": "À 26 ans, le jeune chef pâtissier de la Maison Prevost, rue Royale, a séduit le jury avec une tarte revisitée aux myrtilles sauvages…",
     "page": {
      "type": "presse",
      "site": "L'Écho du Lac",
      "domaine": "lechodulac.fr",
      "titre": "Le pâtissier Valentin Prevost remporte le concours régional de la tarte aux myrtilles",
      "sousTitre": "Gastronomie · Annecy",
      "date": "9 juin 2024",
      "encart": [],
      "sections": [
       {
        "texte": "À 26 ans, Valentin Prevost, chef pâtissier de la Maison Prevost, la boutique familiale ouverte par ses grands-parents en 1971, a remporté dimanche le concours régional de la tarte aux myrtilles. Sa recette, avec une pâte sablée aux noisettes et des myrtilles sauvages cueillies au-dessus du lac, a convaincu les douze membres du jury."
       },
       {
        "texte": "« Je me lève à 4 heures depuis mes 16 ans, ce prix récompense toute l'équipe », a-t-il confié. La tarte sera en vente dès cette semaine en boutique."
       }
      ]
     }
    },
    "en": {
     "titre": "Annecy: pastry chef Valentin Prevost wins the regional blueberry tart competition",
     "url": "lechodulac.fr › annecy › food › valentin-prevost-competition",
     "extrait": "At 26, the young pastry chef of Maison Prevost, rue Royale, won over the jury with a reinvented wild blueberry tart…",
     "page": {
      "type": "presse",
      "site": "L'Écho du Lac",
      "domaine": "lechodulac.fr",
      "titre": "Pastry chef Valentin Prevost wins the regional blueberry tart competition",
      "sousTitre": "Food · Annecy",
      "date": "9 June 2024",
      "encart": [],
      "sections": [
       {
        "texte": "At 26, Valentin Prevost, pastry chef at Maison Prevost, the family shop opened by his grandparents in 1971, won the regional blueberry tart competition on Sunday. His recipe, with a hazelnut shortcrust and wild blueberries picked above the lake, convinced all twelve members of the jury."
       },
       {
        "texte": "'I've been getting up at 4 am since I was 16, this prize rewards the whole team,' he said. The tart will be on sale in the shop from this week."
       }
      ]
     }
    }
   }
  ]
 },
 "p31-0": {
  "nom": "Gilles Traoré",
  "genre": "m",
  "cle": {
   "fr": "Biologiste de l'évolution",
   "en": "Evolutionary biologist"
  },
  "support": {
   "fr": "Tribune dans un journal",
   "en": "Newspaper opinion piece"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Gilles Traoré – Directeur de recherche – Laboratoire Évolution et Diversité",
     "url": "univ-lanvaux.fr › led › membres › gilles-traore",
     "extrait": "Biologiste de l'évolution. Étudie comment les espèces se transforment au fil des générations, notamment les poissons des grottes qui ont perdu leurs yeux…",
     "page": {
      "type": "institution",
      "site": "Université de Lanvaux",
      "domaine": "univ-lanvaux.fr",
      "titre": "Gilles Traoré",
      "sousTitre": "Directeur de recherche, biologie de l'évolution",
      "date": null,
      "encart": [
       [
        "Laboratoire",
        "Évolution et Diversité (LED)"
       ],
       [
        "Thèse",
        "2001, Évolution de l'œil chez les poissons cavernicoles"
       ],
       [
        "Équipe",
        "Évolution du développement"
       ]
      ],
      "sections": [
       {
        "titre": "Recherches",
        "texte": "Gilles Traoré étudie comment les organes se transforment au cours de l'évolution. Son modèle favori : des poissons vivant dans des grottes obscures, dont certaines populations ont perdu leurs yeux en quelques milliers de générations. Il compare leurs gènes à ceux des poissons de rivière de la même espèce."
       },
       {
        "titre": "Publications récentes",
        "liste": [
         "Eye loss in cave fish: a developmental view (2023)",
         "Skull shape diversity in vertebrates (2020)",
         "Comparing cave and river populations of Astyanax (2018)"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Gilles Traoré – Research Director – Evolution and Diversity Laboratory",
     "url": "univ-lanvaux.fr › led › members › gilles-traore",
     "extrait": "Evolutionary biologist. Studies how species change over generations, especially cave fish that have lost their eyes…",
     "page": {
      "type": "institution",
      "site": "University of Lanvaux",
      "domaine": "univ-lanvaux.fr",
      "titre": "Gilles Traoré",
      "sousTitre": "Research director, evolutionary biology",
      "date": null,
      "encart": [
       [
        "Laboratory",
        "Evolution and Diversity (LED)"
       ],
       [
        "PhD",
        "2001, Evolution of the eye in cave fish"
       ],
       [
        "Team",
        "Evolution of development"
       ]
      ],
      "sections": [
       {
        "titre": "Research",
        "texte": "Gilles Traoré studies how organs change over the course of evolution. His favourite model: fish living in dark caves, some populations of which have lost their eyes in a few thousand generations. He compares their genes with those of river fish of the same species."
       },
       {
        "titre": "Recent publications",
        "liste": [
         "Eye loss in cave fish: a developmental view (2023)",
         "Skull shape diversity in vertebrates (2020)",
         "Comparing cave and river populations of Astyanax (2018)"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Gilles Traoré – Encyclopédia Libre",
     "url": "encyclopedia-libre.org › wiki › Gilles_Traoré",
     "extrait": "Gilles Traoré, né en 1972 à Bordeaux, est un biologiste français spécialiste de l'évolution des vertébrés et auteur d'ouvrages de vulgarisation…",
     "page": {
      "type": "encyclo",
      "site": "Encyclopédia Libre",
      "domaine": "encyclopedia-libre.org",
      "titre": "Gilles Traoré",
      "sousTitre": "Biologiste français",
      "date": null,
      "encart": [
       [
        "Naissance",
        "1972, Bordeaux"
       ],
       [
        "Domaine",
        "Biologie de l'évolution"
       ],
       [
        "Institution",
        "Université de Lanvaux"
       ],
       [
        "Distinction",
        "Médaille de la Société de zoologie de l'Ouest (2016)"
       ]
      ],
      "sections": [
       {
        "titre": "Carrière",
        "texte": "Après une thèse sur les poissons cavernicoles, Gilles Traoré effectue un séjour de recherche au Mexique, où il étudie ces poissons dans leur milieu naturel. Il rejoint l'Université de Lanvaux en 2006 et y dirige l'équipe Évolution du développement."
       },
       {
        "titre": "Vulgarisation",
        "liste": [
         "Histoires de poissons aveugles, Éditions Ombelle, 2014",
         "Le Grand Album des vertébrés, Éditions Ombelle, 2021",
         "Chroniqueur scientifique pour la revue Nature & Savoirs"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Gilles Traoré – Encyclopédia Libre",
     "url": "encyclopedia-libre.org › wiki › Gilles_Traoré",
     "extrait": "Gilles Traoré, born in 1972 in Bordeaux, is a French biologist specialising in vertebrate evolution and the author of popular science books…",
     "page": {
      "type": "encyclo",
      "site": "Encyclopédia Libre",
      "domaine": "encyclopedia-libre.org",
      "titre": "Gilles Traoré",
      "sousTitre": "French biologist",
      "date": null,
      "encart": [
       [
        "Born",
        "1972, Bordeaux"
       ],
       [
        "Field",
        "Evolutionary biology"
       ],
       [
        "Institution",
        "University of Lanvaux"
       ],
       [
        "Award",
        "Western Zoological Society Medal (2016)"
       ]
      ],
      "sections": [
       {
        "titre": "Career",
        "texte": "After a PhD on cave fish, Gilles Traoré spent a research period in Mexico, studying these fish in their natural habitat. He joined the University of Lanvaux in 2006, where he leads the Evolution of Development team."
       },
       {
        "titre": "Popular science",
        "liste": [
         "Histoires de poissons aveugles, Éditions Ombelle, 2014",
         "Le Grand Album des vertébrés, Éditions Ombelle, 2021",
         "Science columnist for the magazine Nature & Savoirs"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Les Jeudis du Muséum – « Les poissons qui ont perdu leurs yeux » | Vidéoflux",
     "url": "videoflux.com › museum-lanvaux › jeudis-du-museum",
     "extrait": "Conférence de Gilles Traoré, biologiste de l'évolution à l'Université de Lanvaux, enregistrée au Muséum de Lanvaux. 48 min…",
     "page": {
      "type": "video",
      "site": "Vidéoflux",
      "domaine": "videoflux.com",
      "titre": "Les poissons qui ont perdu leurs yeux",
      "sousTitre": "Chaîne Muséum de Lanvaux · 18 400 abonnés",
      "date": "14 novembre 2024",
      "encart": [
       [
        "Durée",
        "48 min"
       ],
       [
        "Vues",
        "62 000"
       ],
       [
        "Série",
        "Les Jeudis du Muséum"
       ]
      ],
      "sections": [
       {
        "titre": "Description",
        "texte": "Pour ce Jeudi du Muséum, Gilles Traoré, directeur de recherche au Laboratoire Évolution et Diversité, raconte vingt ans de recherche sur les poissons des grottes. Suivie d'une séance de questions avec le public. Références des études citées en commentaire épinglé."
       },
       {
        "titre": "Autres vidéos de la série",
        "liste": [
         "Le cœur des dinosaures (48 min)",
         "Pourquoi les girafes ont un long cou ? (52 min)"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Museum Thursdays – 'The fish that lost their eyes' | Vidéoflux",
     "url": "videoflux.com › museum-lanvaux › museum-thursdays",
     "extrait": "Lecture by Gilles Traoré, evolutionary biologist at the University of Lanvaux, recorded at the Lanvaux Museum. 48 min…",
     "page": {
      "type": "video",
      "site": "Vidéoflux",
      "domaine": "videoflux.com",
      "titre": "The fish that lost their eyes",
      "sousTitre": "Lanvaux Museum channel · 18,400 subscribers",
      "date": "14 November 2024",
      "encart": [
       [
        "Length",
        "48 min"
       ],
       [
        "Views",
        "62,000"
       ],
       [
        "Series",
        "Museum Thursdays"
       ]
      ],
      "sections": [
       {
        "titre": "Description",
        "texte": "For this Museum Thursday, Gilles Traoré, research director at the Evolution and Diversity Laboratory, tells the story of twenty years of research on cave fish. Followed by a Q&A session with the audience. References for the studies mentioned in the pinned comment."
       },
       {
        "titre": "Other videos in the series",
        "liste": [
         "The heart of the dinosaurs (48 min)",
         "Why do giraffes have long necks? (52 min)"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p31-1": {
  "nom": "Hugo Langlois",
  "genre": "m",
  "cle": {
   "fr": "Chaîne « Darwin Express » (1,1 M abonnés)",
   "en": "'Darwin Express' channel (1.1M subscribers)"
  },
  "support": {
   "fr": "Vidéo en ligne",
   "en": "Online video"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Darwin Express – Hugo Langlois | Vidéoflux",
     "url": "videoflux.com › darwinexpress",
     "extrait": "Des vidéos sur l'évolution et la biodiversité, sources dans chaque description. 1,1 M d'abonnés. Par Hugo Langlois, diplômé en écologie et évolution…",
     "page": {
      "type": "video",
      "site": "Vidéoflux",
      "domaine": "videoflux.com",
      "titre": "Darwin Express",
      "sousTitre": "Chaîne de Hugo Langlois · 1,1 M d'abonnés",
      "date": null,
      "encart": [
       [
        "Abonnés",
        "1,1 M"
       ],
       [
        "Vidéos",
        "142"
       ],
       [
        "Création",
        "2017"
       ]
      ],
      "sections": [
       {
        "titre": "À propos",
        "texte": "Des vidéos sur l'évolution, les fossiles et la biodiversité. Je suis titulaire d'un master en écologie et évolution et j'ai été médiateur scientifique au Muséum de Lanvaux. Chaque vidéo s'appuie sur des articles scientifiques listés en description, et les plus pointues sont relues par des chercheurs."
       },
       {
        "titre": "Vidéos populaires",
        "liste": [
         "Pourquoi les baleines ont des os de pattes (2,4 M de vues)",
         "Le plus vieil animal du monde (1,8 M de vues)",
         "J'ai passé une semaine avec des paléontologues (1,3 M de vues)"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Darwin Express – Hugo Langlois | Vidéoflux",
     "url": "videoflux.com › darwinexpress",
     "extrait": "Videos about evolution and biodiversity, sources in every description. 1.1M subscribers. By Hugo Langlois, graduate in ecology and evolution…",
     "page": {
      "type": "video",
      "site": "Vidéoflux",
      "domaine": "videoflux.com",
      "titre": "Darwin Express",
      "sousTitre": "Hugo Langlois's channel · 1.1M subscribers",
      "date": null,
      "encart": [
       [
        "Subscribers",
        "1.1M"
       ],
       [
        "Videos",
        "142"
       ],
       [
        "Created",
        "2017"
       ]
      ],
      "sections": [
       {
        "titre": "About",
        "texte": "Videos about evolution, fossils and biodiversity. I hold a master's degree in ecology and evolution and worked as a science educator at the Lanvaux Museum. Every video is based on scientific articles listed in the description, and the most technical ones are reviewed by researchers."
       },
       {
        "titre": "Popular videos",
        "liste": [
         "Why whales have leg bones (2.4M views)",
         "The oldest animal in the world (1.8M views)",
         "I spent a week with palaeontologists (1.3M views)"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Hugo Langlois – Vidéaste scientifique, Darwin Express | ProLink",
     "url": "prolink.com › in › hugo-langlois",
     "extrait": "Créateur de la chaîne Darwin Express. Master Écologie et évolution, Université de Lanvaux. Ancien médiateur scientifique au Muséum…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Hugo Langlois",
      "sousTitre": "Vidéaste scientifique · Darwin Express",
      "date": null,
      "encart": [
       [
        "Formation",
        "Master Écologie et évolution, Université de Lanvaux (2015)"
       ],
       [
        "Distinction",
        "Prix de la vulgarisation scientifique de l'Ouest (2022)"
       ],
       [
        "Relations",
        "3 100"
       ]
      ],
      "sections": [
       {
        "titre": "Expérience",
        "liste": [
         "Créateur et auteur, Darwin Express (2017 – aujourd'hui)",
         "Médiateur scientifique, Muséum de Lanvaux (2015 – 2019)",
         "Stage de recherche, Laboratoire Évolution et Diversité (2015)"
        ]
       },
       {
        "titre": "Infos",
        "texte": "Je raconte l'évolution en vidéo en partant toujours des études publiées. J'interviens aussi dans les collèges et lycées pour parler de vulgarisation et de vérification des sources."
       }
      ]
     }
    },
    "en": {
     "titre": "Hugo Langlois – Science video creator, Darwin Express | ProLink",
     "url": "prolink.com › in › hugo-langlois",
     "extrait": "Creator of the Darwin Express channel. Master's in Ecology and Evolution, University of Lanvaux. Former science educator at the Museum…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Hugo Langlois",
      "sousTitre": "Science video creator · Darwin Express",
      "date": null,
      "encart": [
       [
        "Education",
        "Master's in Ecology and Evolution, University of Lanvaux (2015)"
       ],
       [
        "Award",
        "Western Science Communication Prize (2022)"
       ],
       [
        "Connections",
        "3,100"
       ]
      ],
      "sections": [
       {
        "titre": "Experience",
        "liste": [
         "Creator and writer, Darwin Express (2017 – present)",
         "Science educator, Lanvaux Museum (2015 – 2019)",
         "Research internship, Evolution and Diversity Laboratory (2015)"
        ]
       },
       {
        "titre": "About",
        "texte": "I tell the story of evolution on video, always starting from published studies. I also visit schools to talk about science communication and checking sources."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Hugo Langlois, le vidéaste qui fait aimer l'évolution",
     "url": "cahiers-numerique.fr › portraits › hugo-langlois-darwin-express",
     "extrait": "Trois semaines de lecture d'articles, une relecture par un chercheur, puis le tournage : rencontre avec le créateur de Darwin Express…",
     "page": {
      "type": "presse",
      "site": "Les Cahiers du numérique",
      "domaine": "cahiers-numerique.fr",
      "titre": "Hugo Langlois, le vidéaste qui fait aimer l'évolution",
      "sousTitre": "Portrait · Créateurs de contenu",
      "date": "22 mai 2023",
      "encart": [],
      "sections": [
       {
        "texte": "Dans son petit studio, Hugo Langlois empile les articles scientifiques surlignés. « Pour une vidéo de quinze minutes, je lis pendant trois semaines », explique ce diplômé en biologie de l'évolution, passé par le Muséum de Lanvaux."
       },
       {
        "titre": "Une relecture avant chaque vidéo",
        "texte": "Avant publication, ses scripts sont relus par un chercheur du domaine. « Quand je me trompe, je publie une correction épinglée. C'est arrivé trois fois, et je l'assume. » Sa chaîne a dépassé le million d'abonnés l'an dernier."
       }
      ]
     }
    },
    "en": {
     "titre": "Hugo Langlois, the video creator who makes people love evolution",
     "url": "cahiers-numerique.fr › profiles › hugo-langlois-darwin-express",
     "extrait": "Three weeks reading articles, a review by a researcher, then filming: meet the creator of Darwin Express…",
     "page": {
      "type": "presse",
      "site": "Les Cahiers du numérique",
      "domaine": "cahiers-numerique.fr",
      "titre": "Hugo Langlois, the video creator who makes people love evolution",
      "sousTitre": "Profile · Content creators",
      "date": "22 May 2023",
      "encart": [],
      "sections": [
       {
        "texte": "In his small studio, Hugo Langlois stacks highlighted scientific articles. 'For a fifteen-minute video, I read for three weeks,' explains this graduate in evolutionary biology, who used to work at the Lanvaux Museum."
       },
       {
        "titre": "A review before every video",
        "texte": "Before publication, his scripts are reviewed by a researcher in the field. 'When I get something wrong, I post a pinned correction. It has happened three times, and I own it.' His channel passed one million subscribers last year."
       }
      ]
     }
    }
   }
  ]
 },
 "p32-1": {
  "nom": "Delphine Hébert",
  "genre": "f",
  "cle": {
   "fr": "Généticienne des populations",
   "en": "Population geneticist"
  },
  "support": {
   "fr": "Entretien dans un podcast",
   "en": "Podcast interview"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Delphine Hébert – Chercheuse en génétique des populations – Institut de génétique de Haute-Arve",
     "url": "igha.fr › equipes › genetique-des-populations › delphine-hebert",
     "extrait": "Directrice de recherche, responsable de l'équipe Génétique des populations. Étudie l'apparition et la diffusion des mutations dans les populations sauvages…",
     "page": {
      "type": "institution",
      "site": "Institut de génétique de Haute-Arve",
      "domaine": "igha.fr",
      "titre": "Delphine Hébert",
      "sousTitre": "Directrice de recherche, responsable de l'équipe Génétique des populations",
      "date": null,
      "encart": [
       [
        "Équipe",
        "Génétique des populations"
       ],
       [
        "Thèse",
        "2006, Taux de mutation et diversité génétique chez la drosophile"
       ],
       [
        "Modèles étudiés",
        "Drosophiles, souris sauvages"
       ]
      ],
      "sections": [
       {
        "titre": "Recherches",
        "texte": "Delphine Hébert étudie comment les mutations apparaissent dans l'ADN et comment leur fréquence évolue d'une génération à l'autre dans les populations. Son équipe séquence le génome de milliers de drosophiles élevées au laboratoire et de souris sauvages capturées dans les Alpes."
       },
       {
        "titre": "Publications récentes",
        "liste": [
         "Measuring mutation rates in wild mice (2024)",
         "Allele frequency changes in experimental fly populations (2021)",
         "Genetic diversity along an altitude gradient (2019)"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Delphine Hébert – Population genetics researcher – Haute-Arve Institute of Genetics",
     "url": "igha.fr › teams › population-genetics › delphine-hebert",
     "extrait": "Research director, head of the Population Genetics team. Studies how mutations appear and spread in wild populations…",
     "page": {
      "type": "institution",
      "site": "Haute-Arve Institute of Genetics",
      "domaine": "igha.fr",
      "titre": "Delphine Hébert",
      "sousTitre": "Research director, head of the Population Genetics team",
      "date": null,
      "encart": [
       [
        "Team",
        "Population Genetics"
       ],
       [
        "PhD",
        "2006, Mutation rates and genetic diversity in Drosophila"
       ],
       [
        "Study organisms",
        "Fruit flies, wild mice"
       ]
      ],
      "sections": [
       {
        "titre": "Research",
        "texte": "Delphine Hébert studies how mutations appear in DNA and how their frequency changes from one generation to the next within populations. Her team sequences the genomes of thousands of laboratory-bred fruit flies and wild mice caught in the Alps."
       },
       {
        "titre": "Recent publications",
        "liste": [
         "Measuring mutation rates in wild mice (2024)",
         "Allele frequency changes in experimental fly populations (2021)",
         "Genetic diversity along an altitude gradient (2019)"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "« Sous la loupe » – Épisode 87 : Delphine Hébert, une vie avec les mouches",
     "url": "radio-savoirs.fr › podcasts › sous-la-loupe › episode-87",
     "extrait": "Notre invitée dirige l'équipe de génétique des populations de l'Institut de Haute-Arve. Elle raconte son parcours et la vie de son laboratoire…",
     "page": {
      "type": "presse",
      "site": "Radio Savoirs",
      "domaine": "radio-savoirs.fr",
      "titre": "Épisode 87 : Delphine Hébert, une vie avec les mouches",
      "sousTitre": "Podcast « Sous la loupe » · 42 min",
      "date": "3 octobre 2024",
      "encart": [
       [
        "Invitée",
        "Delphine Hébert, généticienne des populations"
       ],
       [
        "Durée",
        "42 min"
       ]
      ],
      "sections": [
       {
        "texte": "Delphine Hébert dirige l'équipe Génétique des populations de l'Institut de génétique de Haute-Arve. Dans cet épisode, elle raconte comment une passion d'enfance pour les insectes l'a menée à une thèse sur la drosophile, puis à vingt ans de recherche sur la diversité génétique."
       },
       {
        "titre": "Au sommaire",
        "liste": [
         "Pourquoi la drosophile est la star des laboratoires",
         "Une journée type dans l'équipe",
         "Comment on piège des souris à 2 000 mètres d'altitude",
         "Conseils aux élèves qui veulent devenir chercheurs"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "'Under the Magnifying Glass' – Episode 87: Delphine Hébert, a life with flies",
     "url": "radio-savoirs.fr › podcasts › under-the-magnifying-glass › episode-87",
     "extrait": "Our guest leads the population genetics team at the Haute-Arve Institute. She talks about her career and life in her lab…",
     "page": {
      "type": "presse",
      "site": "Radio Savoirs",
      "domaine": "radio-savoirs.fr",
      "titre": "Episode 87: Delphine Hébert, a life with flies",
      "sousTitre": "Podcast 'Under the Magnifying Glass' · 42 min",
      "date": "3 October 2024",
      "encart": [
       [
        "Guest",
        "Delphine Hébert, population geneticist"
       ],
       [
        "Length",
        "42 min"
       ]
      ],
      "sections": [
       {
        "texte": "Delphine Hébert leads the Population Genetics team at the Haute-Arve Institute of Genetics. In this episode, she explains how a childhood passion for insects led her to a PhD on fruit flies, then to twenty years of research on genetic diversity."
       },
       {
        "titre": "In this episode",
        "liste": [
         "Why the fruit fly is the star of laboratories",
         "A typical day in the team",
         "How to trap mice at 2,000 metres altitude",
         "Advice for students who want to become researchers"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Les Fleurs de Delphine – Delphine Hébert, fleuriste à Lille",
     "url": "lesfleursdedelphine.fr › la-boutique",
     "extrait": "Bouquets de saison, compositions pour mariages et deuils, livraison dans toute la métropole lilloise. Delphine Hébert vous accueille rue de Gand…",
     "page": {
      "type": "commerce",
      "site": "Les Fleurs de Delphine",
      "domaine": "lesfleursdedelphine.fr",
      "titre": "Les Fleurs de Delphine",
      "sousTitre": "Delphine Hébert, artisane fleuriste à Lille",
      "date": null,
      "encart": [
       [
        "Adresse",
        "Rue de Gand, Lille"
       ],
       [
        "Horaires",
        "Mardi-samedi, 9 h – 19 h"
       ],
       [
        "Livraison",
        "Métropole lilloise, dès 35 €"
       ]
      ],
      "sections": [
       {
        "titre": "La boutique",
        "texte": "Fleuriste depuis 2010, Delphine Hébert compose des bouquets de saison avec des fleurs cultivées le plus possible dans la région. Elle réalise aussi les décorations de mariages et de cérémonies."
       },
       {
        "titre": "Nos créations",
        "liste": [
         "Bouquet du marché, à partir de 25 €",
         "Composition de mariage sur devis",
         "Atelier couronne de Noël, 45 €"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Les Fleurs de Delphine – Delphine Hébert, florist in Lille",
     "url": "lesfleursdedelphine.fr › the-shop",
     "extrait": "Seasonal bouquets, arrangements for weddings and funerals, delivery across the Lille area. Delphine Hébert welcomes you on rue de Gand…",
     "page": {
      "type": "commerce",
      "site": "Les Fleurs de Delphine",
      "domaine": "lesfleursdedelphine.fr",
      "titre": "Les Fleurs de Delphine",
      "sousTitre": "Delphine Hébert, florist in Lille",
      "date": null,
      "encart": [
       [
        "Address",
        "Rue de Gand, Lille"
       ],
       [
        "Opening hours",
        "Tuesday-Saturday, 9 am – 7 pm"
       ],
       [
        "Delivery",
        "Lille area, from €35"
       ]
      ],
      "sections": [
       {
        "titre": "The shop",
        "texte": "A florist since 2010, Delphine Hébert creates seasonal bouquets using flowers grown locally whenever possible. She also designs decorations for weddings and ceremonies."
       },
       {
        "titre": "Our creations",
        "liste": [
         "Market bouquet, from €25",
         "Wedding arrangements, quote on request",
         "Christmas wreath workshop, €45"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p32-3": {
  "nom": "Maud Sauvage",
  "genre": "f",
  "cle": {
   "fr": "Blog « Bien-être & nature »",
   "en": "Blog 'Wellness & Nature'"
  },
  "support": {
   "fr": "Article de blog",
   "en": "Blog post"
  },
  "resultats": [
   {
    "fr": {
     "titre": "À propos – Naturositude, le blog de Maud Sauvage",
     "url": "naturositude.fr › a-propos",
     "extrait": "Passionnée de nature et de bien-être, je partage depuis 2016 mes expériences : bains froids, jeûne, alimentation vivante. Formée en naturopathie…",
     "page": {
      "type": "blog",
      "site": "Naturositude",
      "domaine": "naturositude.fr",
      "titre": "Qui suis-je ?",
      "sousTitre": "Maud Sauvage, fondatrice de Naturositude",
      "date": null,
      "encart": [
       [
        "Formation",
        "Certificat de naturopathie, école privée à distance (6 mois)"
       ],
       [
        "Avant",
        "Assistante de direction pendant 12 ans"
       ],
       [
        "Blog créé en",
        "2016"
       ]
      ],
      "sections": [
       {
        "texte": "Bonjour, moi c'est Maud ! Après des années de fatigue, j'ai tout changé : bains d'eau glacée, randonnées pieds nus, alimentation crue. Mon corps s'est transformé, et j'ai eu envie de partager ce que j'ai découvert. Ici, je parle avec mon cœur et mon expérience, pas avec des études compliquées."
       },
       {
        "titre": "Articles les plus lus",
        "liste": [
         "Le corps sait s'adapter à tout",
         "Mon défi froid de 30 jours",
         "Pourquoi j'ai arrêté le pain",
         "5 plantes pour booster l'immunité"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "About – Naturositude, Maud Sauvage's blog",
     "url": "naturositude.fr › about",
     "extrait": "Passionate about nature and wellness, I've been sharing my experiences since 2016: cold baths, fasting, raw food. Trained in naturopathy…",
     "page": {
      "type": "blog",
      "site": "Naturositude",
      "domaine": "naturositude.fr",
      "titre": "Who am I?",
      "sousTitre": "Maud Sauvage, founder of Naturositude",
      "date": null,
      "encart": [
       [
        "Training",
        "Naturopathy certificate, private distance-learning school (6 months)"
       ],
       [
        "Before",
        "Executive assistant for 12 years"
       ],
       [
        "Blog created",
        "2016"
       ]
      ],
      "sections": [
       {
        "texte": "Hi, I'm Maud! After years of tiredness, I changed everything: ice-water baths, barefoot hikes, raw food. My body was transformed, and I wanted to share what I discovered. Here I speak from my heart and my experience, not from complicated studies."
       },
       {
        "titre": "Most-read articles",
        "liste": [
         "The body can adapt to anything",
         "My 30-day cold challenge",
         "Why I gave up bread",
         "5 plants to boost your immunity"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "E-book « Défi froid 30 jours » – Boutique Naturositude",
     "url": "naturositude.fr › boutique › ebook-defi-froid",
     "extrait": "Le programme de Maud Sauvage pour apprivoiser le froid en 30 jours. E-book de 64 pages : 19 €. Pack avec gant de crin et tisane : 39 €…",
     "page": {
      "type": "commerce",
      "site": "Boutique Naturositude",
      "domaine": "naturositude.fr",
      "titre": "Défi froid 30 jours",
      "sousTitre": "Le programme de Maud Sauvage",
      "date": null,
      "encart": [
       [
        "E-book (64 pages)",
        "19 €"
       ],
       [
        "Pack Défi + gant de crin + tisane",
        "39 €"
       ],
       [
        "Note des lectrices",
        "4,8/5 (212 avis)"
       ]
      ],
      "sections": [
       {
        "titre": "Ce que contient le programme",
        "liste": [
         "Un calendrier jour par jour",
         "Mes routines de douches froides",
         "Des recettes réchauffantes",
         "Ma sélection de compléments (liens partenaires)"
        ]
       },
       {
        "titre": "Le mot de Maud",
        "texte": "J'ai écrit ce guide à partir de mon propre défi. Il ne remplace pas un avis médical, mais il a déjà aidé des centaines de lectrices à se sentir plus fortes."
       }
      ]
     }
    },
    "en": {
     "titre": "E-book '30-Day Cold Challenge' – Naturositude Shop",
     "url": "naturositude.fr › shop › ebook-cold-challenge",
     "extrait": "Maud Sauvage's programme to tame the cold in 30 days. 64-page e-book: €19. Pack with horsehair glove and herbal tea: €39…",
     "page": {
      "type": "commerce",
      "site": "Naturositude Shop",
      "domaine": "naturositude.fr",
      "titre": "30-Day Cold Challenge",
      "sousTitre": "Maud Sauvage's programme",
      "date": null,
      "encart": [
       [
        "E-book (64 pages)",
        "€19"
       ],
       [
        "Challenge pack + horsehair glove + herbal tea",
        "€39"
       ],
       [
        "Readers' rating",
        "4.8/5 (212 reviews)"
       ]
      ],
      "sections": [
       {
        "titre": "What the programme includes",
        "liste": [
         "A day-by-day calendar",
         "My cold shower routines",
         "Warming recipes",
         "My selection of supplements (partner links)"
        ]
       },
       {
        "titre": "A word from Maud",
        "texte": "I wrote this guide based on my own challenge. It does not replace medical advice, but it has already helped hundreds of readers feel stronger."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Maud Sauvage (@maud_naturositude) sur Chirp",
     "url": "chirp.com › maud_naturositude",
     "extrait": "Bien-être au naturel 🌿 Froid, plantes, énergie. Code MAUD15 sur mes partenaires. Nouvel article sur le blog…",
     "page": {
      "type": "social",
      "site": "Chirp",
      "domaine": "chirp.com",
      "titre": "Maud Sauvage",
      "sousTitre": "@maud_naturositude",
      "date": null,
      "encart": [
       [
        "Abonnés",
        "18 600"
       ],
       [
        "Abonnements",
        "1 240"
       ],
       [
        "Lien",
        "naturositude.fr"
       ]
      ],
      "sections": [
       {
        "titre": "Bio",
        "texte": "Bien-être au naturel 🌿 Froid, plantes, énergie. Code MAUD15 sur mes partenaires. Fondatrice de naturositude.fr."
       },
       {
        "titre": "Publications récentes",
        "liste": [
         "Jour 12 du défi froid : je ne sens presque plus rien, le corps est incroyable ❄️",
         "Partenariat : -15 % sur les gélules au magnésium avec mon code",
         "Les labos ne veulent pas qu'on sache ça…",
         "Nouvel article : le corps sait s'adapter à tout"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Maud Sauvage (@maud_naturositude) on Chirp",
     "url": "chirp.com › maud_naturositude",
     "extrait": "Natural wellness 🌿 Cold, plants, energy. Code MAUD15 with my partners. New article on the blog…",
     "page": {
      "type": "social",
      "site": "Chirp",
      "domaine": "chirp.com",
      "titre": "Maud Sauvage",
      "sousTitre": "@maud_naturositude",
      "date": null,
      "encart": [
       [
        "Followers",
        "18,600"
       ],
       [
        "Following",
        "1,240"
       ],
       [
        "Link",
        "naturositude.fr"
       ]
      ],
      "sections": [
       {
        "titre": "Bio",
        "texte": "Natural wellness 🌿 Cold, plants, energy. Code MAUD15 with my partners. Founder of naturositude.fr."
       },
       {
        "titre": "Recent posts",
        "liste": [
         "Day 12 of the cold challenge: I barely feel anything now, the body is amazing ❄️",
         "Partnership: 15% off magnesium capsules with my code",
         "The labs don't want you to know this…",
         "New article: the body can adapt to anything"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p33-0": {
  "nom": "Bertrand Millet",
  "genre": "m",
  "cle": {
   "fr": "Physicien quantique",
   "en": "Quantum physicist"
  },
  "support": {
   "fr": "Débat sur un plateau télé",
   "en": "TV studio debate"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Bertrand Millet – Professeur – Laboratoire de physique quantique et optique, Université de Pontmarais",
     "url": "univ-pontmarais.fr › lpqo › personnel › bertrand-millet",
     "extrait": "Professeur de physique. Dirige l'équipe Photons et mesure quantique : expériences sur des photons uniques, intrication et décohérence…",
     "page": {
      "type": "institution",
      "site": "Université de Pontmarais",
      "domaine": "univ-pontmarais.fr",
      "titre": "Bertrand Millet",
      "sousTitre": "Professeur de physique, responsable de l'équipe Photons et mesure quantique",
      "date": null,
      "encart": [
       [
        "Laboratoire",
        "Physique quantique et optique (LPQO)"
       ],
       [
        "Thèse",
        "2005, Décohérence de photons piégés dans une cavité"
       ],
       [
        "Enseignement",
        "Mécanique quantique, licence et master"
       ]
      ],
      "sections": [
       {
        "titre": "Recherches",
        "texte": "Bertrand Millet mène des expériences avec des grains de lumière isolés, les photons. Son équipe étudie comment un système quantique perd ses propriétés étranges quand il interagit avec son environnement ou avec un appareil de mesure, un phénomène appelé décohérence."
       },
       {
        "titre": "Équipements",
        "liste": [
         "Sources de photons uniques",
         "Cavités optiques refroidies",
         "Détecteurs à très haute sensibilité"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Bertrand Millet – Professor – Quantum Physics and Optics Laboratory, University of Pontmarais",
     "url": "univ-pontmarais.fr › lpqo › staff › bertrand-millet",
     "extrait": "Professor of physics. Leads the Photons and Quantum Measurement team: experiments on single photons, entanglement and decoherence…",
     "page": {
      "type": "institution",
      "site": "University of Pontmarais",
      "domaine": "univ-pontmarais.fr",
      "titre": "Bertrand Millet",
      "sousTitre": "Professor of physics, head of the Photons and Quantum Measurement team",
      "date": null,
      "encart": [
       [
        "Laboratory",
        "Quantum Physics and Optics (LPQO)"
       ],
       [
        "PhD",
        "2005, Decoherence of photons trapped in a cavity"
       ],
       [
        "Teaching",
        "Quantum mechanics, bachelor's and master's"
       ]
      ],
      "sections": [
       {
        "titre": "Research",
        "texte": "Bertrand Millet carries out experiments with isolated particles of light, photons. His team studies how a quantum system loses its strange properties when it interacts with its environment or with a measuring device, a phenomenon called decoherence."
       },
       {
        "titre": "Equipment",
        "liste": [
         "Single-photon sources",
         "Cooled optical cavities",
         "Ultra-high-sensitivity detectors"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Bertrand Millet – Profil auteur | SciIndex",
     "url": "sciindex.org › auteurs › millet-bertrand",
     "extrait": "86 publications, 5 120 citations. Domaines : optique quantique, décohérence, mesure quantique…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Millet, Bertrand",
      "sousTitre": "Université de Pontmarais, Laboratoire de physique quantique et optique",
      "date": null,
      "encart": [
       [
        "Publications",
        "86"
       ],
       [
        "Citations",
        "5 120"
       ],
       [
        "Indice h",
        "36"
       ],
       [
        "Domaines",
        "Optique quantique, fondements de la mécanique quantique"
       ]
      ],
      "sections": [
       {
        "titre": "Publications les plus citées",
        "liste": [
         "Observing decoherence step by step in a photon cavity (2010)",
         "Entangled photon pairs over 20 km of optical fibre (2015)",
         "Weak measurements on single photons (2019)",
         "Which-path detectors and interference loss (2023)"
        ]
       },
       {
        "titre": "Activité",
        "texte": "Relecteur pour plusieurs revues de physique à comité de lecture. Membre du comité d'organisation du colloque européen d'optique quantique 2025."
       }
      ]
     }
    },
    "en": {
     "titre": "Bertrand Millet – Author profile | SciIndex",
     "url": "sciindex.org › authors › millet-bertrand",
     "extrait": "86 publications, 5,120 citations. Fields: quantum optics, decoherence, quantum measurement…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Millet, Bertrand",
      "sousTitre": "University of Pontmarais, Quantum Physics and Optics Laboratory",
      "date": null,
      "encart": [
       [
        "Publications",
        "86"
       ],
       [
        "Citations",
        "5,120"
       ],
       [
        "h-index",
        "36"
       ],
       [
        "Fields",
        "Quantum optics, foundations of quantum mechanics"
       ]
      ],
      "sections": [
       {
        "titre": "Most cited publications",
        "liste": [
         "Observing decoherence step by step in a photon cavity (2010)",
         "Entangled photon pairs over 20 km of optical fibre (2015)",
         "Weak measurements on single photons (2019)",
         "Which-path detectors and interference loss (2023)"
        ]
       },
       {
        "titre": "Activity",
        "texte": "Reviewer for several peer-reviewed physics journals. Member of the organising committee of the 2025 European quantum optics conference."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Bertrand Millet : « Dans mon labo, on joue avec la lumière un photon à la fois »",
     "url": "sciences-horizons.fr › physique › entretien-bertrand-millet",
     "extrait": "Le physicien de l'Université de Pontmarais nous ouvre les portes de sa salle d'expérience, où des lasers tournent jour et nuit…",
     "page": {
      "type": "presse",
      "site": "Sciences & Horizons",
      "domaine": "sciences-horizons.fr",
      "titre": "« Dans mon labo, on joue avec la lumière un photon à la fois »",
      "sousTitre": "Entretien avec Bertrand Millet, physicien spécialiste de mécanique quantique",
      "date": "27 janvier 2025",
      "encart": [],
      "sections": [
       {
        "texte": "Dans la salle d'expérience plongée dans le noir, des dizaines de miroirs guident des faisceaux laser. « Ici, on fabrique et on mesure des photons un par un. Une seule expérience peut demander deux ans de réglages », explique Bertrand Millet, professeur à l'Université de Pontmarais."
       },
       {
        "titre": "Un passeur de science",
        "texte": "Lauréat d'un prix d'enseignement en 2021, il donne chaque année des conférences dans les lycées. « Les élèves posent les questions les plus difficiles. Je réponds souvent : on ne sait pas encore, et c'est ce qui rend la recherche passionnante. »"
       }
      ]
     }
    },
    "en": {
     "titre": "Bertrand Millet: 'In my lab, we play with light one photon at a time'",
     "url": "sciences-horizons.fr › physics › interview-bertrand-millet",
     "extrait": "The University of Pontmarais physicist opens the doors of his experiment room, where lasers run day and night…",
     "page": {
      "type": "presse",
      "site": "Sciences & Horizons",
      "domaine": "sciences-horizons.fr",
      "titre": "'In my lab, we play with light one photon at a time'",
      "sousTitre": "Interview with Bertrand Millet, physicist specialising in quantum mechanics",
      "date": "27 January 2025",
      "encart": [],
      "sections": [
       {
        "texte": "In the darkened experiment room, dozens of mirrors guide laser beams. 'Here, we produce and measure photons one by one. A single experiment can take two years of adjustments,' explains Bertrand Millet, professor at the University of Pontmarais."
       },
       {
        "titre": "A science communicator",
        "texte": "Winner of a teaching prize in 2021, he gives talks in secondary schools every year. 'Students ask the hardest questions. I often answer: we don't know yet, and that's what makes research exciting.'"
       }
      ]
     }
    }
   }
  ]
 },
 "p34-0": {
  "nom": "Tarek Perrin",
  "genre": "m",
  "cle": {
   "fr": "Physicien (thermodynamique)",
   "en": "Physicist (thermodynamics)"
  },
  "support": {
   "fr": "Cours en ligne filmé",
   "en": "Filmed online lecture"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Tarek Perrin – Département de physique – Université de Hautvallon",
     "url": "univ-hautvallon.fr › physique › annuaire › tarek-perrin",
     "extrait": "Professeur de physique, spécialiste de thermodynamique et de physique statistique. Responsable du cours de thermodynamique de deuxième année…",
     "page": {
      "type": "institution",
      "site": "Université de Hautvallon",
      "domaine": "univ-hautvallon.fr",
      "titre": "Tarek Perrin",
      "sousTitre": "Professeur, thermodynamique et physique statistique",
      "date": null,
      "encart": [
       [
        "Département",
        "Physique"
       ],
       [
        "Équipe",
        "Systèmes hors d'équilibre"
       ],
       [
        "Thèse",
        "2006, Fluctuations et production d'entropie dans les petits systèmes"
       ]
      ],
      "sections": [
       {
        "titre": "Recherches",
        "texte": "Tarek Perrin étudie la thermodynamique des systèmes qui échangent de l'énergie et de la matière avec leur environnement : réactions chimiques entretenues, petits moteurs moléculaires, écoulements chauffés. Il s'intéresse à la façon dont l'énergie se transforme et se dissipe dans ces systèmes."
       },
       {
        "titre": "Enseignements",
        "liste": [
         "Thermodynamique, licence 2",
         "Physique statistique, master 1",
         "Responsable du parcours Physique fondamentale"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Tarek Perrin – Department of Physics – University of Hautvallon",
     "url": "univ-hautvallon.fr › physics › directory › tarek-perrin",
     "extrait": "Professor of physics, specialist in thermodynamics and statistical physics. In charge of the second-year thermodynamics course…",
     "page": {
      "type": "institution",
      "site": "University of Hautvallon",
      "domaine": "univ-hautvallon.fr",
      "titre": "Tarek Perrin",
      "sousTitre": "Professor, thermodynamics and statistical physics",
      "date": null,
      "encart": [
       [
        "Department",
        "Physics"
       ],
       [
        "Team",
        "Non-equilibrium Systems"
       ],
       [
        "PhD",
        "2006, Fluctuations and entropy production in small systems"
       ]
      ],
      "sections": [
       {
        "titre": "Research",
        "texte": "Tarek Perrin studies the thermodynamics of systems that exchange energy and matter with their environment: sustained chemical reactions, small molecular motors, heated flows. He is interested in how energy is transformed and dissipated in these systems."
       },
       {
        "titre": "Teaching",
        "liste": [
         "Thermodynamics, second-year bachelor's",
         "Statistical physics, first-year master's",
         "Head of the Fundamental Physics track"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Tarek Perrin – Professeur de physique, Université de Hautvallon | ProLink",
     "url": "prolink.com › in › tarek-perrin",
     "extrait": "Professeur de physique (thermodynamique hors équilibre). Doctorat en physique statistique. Auteur d'un manuel de thermodynamique pour la licence…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Tarek Perrin",
      "sousTitre": "Professeur de physique · Thermodynamique hors équilibre · Hautvallon",
      "date": null,
      "encart": [
       [
        "Poste actuel",
        "Professeur, Université de Hautvallon"
       ],
       [
        "Formation",
        "Doctorat en physique statistique (2006)"
       ],
       [
        "Relations",
        "640"
       ]
      ],
      "sections": [
       {
        "titre": "Expérience",
        "liste": [
         "Professeur, Université de Hautvallon (2017 – aujourd'hui)",
         "Maître de conférences, Université de Hautvallon (2009 – 2017)",
         "Chercheur postdoctoral, Institut de physique de Genève-Est (2006 – 2009)"
        ]
       },
       {
        "titre": "Publications",
        "liste": [
         "Thermodynamique : du moteur à vapeur au vivant, manuel de licence (2020)",
         "Une soixantaine d'articles dans des revues de physique à comité de lecture"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Tarek Perrin – Professor of Physics, University of Hautvallon | ProLink",
     "url": "prolink.com › in › tarek-perrin",
     "extrait": "Professor of physics (non-equilibrium thermodynamics). PhD in statistical physics. Author of an undergraduate thermodynamics textbook…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Tarek Perrin",
      "sousTitre": "Professor of Physics · Non-equilibrium thermodynamics · Hautvallon",
      "date": null,
      "encart": [
       [
        "Current position",
        "Professor, University of Hautvallon"
       ],
       [
        "Education",
        "PhD in statistical physics (2006)"
       ],
       [
        "Connections",
        "640"
       ]
      ],
      "sections": [
       {
        "titre": "Experience",
        "liste": [
         "Professor, University of Hautvallon (2017 – present)",
         "Lecturer, University of Hautvallon (2009 – 2017)",
         "Postdoctoral researcher, East Geneva Institute of Physics (2006 – 2009)"
        ]
       },
       {
        "titre": "Publications",
        "liste": [
         "Thermodynamique : du moteur à vapeur au vivant, undergraduate textbook (2020)",
         "About sixty articles in peer-reviewed physics journals"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Thermodynamique pour tous – Cours de Tarek Perrin | Vidéoflux",
     "url": "videoflux.com › hautvallon-sciences › thermodynamique-pour-tous",
     "extrait": "Série de 12 cours filmés par le professeur Tarek Perrin, de l'Université de Hautvallon. Énergie, chaleur, entropie, moteurs…",
     "page": {
      "type": "video",
      "site": "Vidéoflux",
      "domaine": "videoflux.com",
      "titre": "Thermodynamique pour tous",
      "sousTitre": "Chaîne Hautvallon Sciences · 96 000 abonnés",
      "date": "Mise en ligne en 2023",
      "encart": [
       [
        "Épisodes",
        "12"
       ],
       [
        "Vues totales",
        "1,4 M"
       ],
       [
        "Niveau",
        "Lycée et début d'université"
       ]
      ],
      "sections": [
       {
        "titre": "Description",
        "texte": "Une série de cours filmés par Tarek Perrin, professeur de physique à l'Université de Hautvallon. Pas besoin d'être un pro des maths : chaque épisode part d'une expérience simple réalisée en direct. Les diapositives et des exercices corrigés sont téléchargeables."
       },
       {
        "titre": "Épisodes",
        "liste": [
         "1. Qu'est-ce que la chaleur ?",
         "4. Comment fonctionne un frigo",
         "7. L'entropie, enfin expliquée",
         "11. Le Soleil, la Terre et l'énergie"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Thermodynamics for Everyone – Lectures by Tarek Perrin | Vidéoflux",
     "url": "videoflux.com › hautvallon-sciences › thermodynamics-for-everyone",
     "extrait": "A series of 12 filmed lectures by Professor Tarek Perrin of the University of Hautvallon. Energy, heat, entropy, engines…",
     "page": {
      "type": "video",
      "site": "Vidéoflux",
      "domaine": "videoflux.com",
      "titre": "Thermodynamics for Everyone",
      "sousTitre": "Hautvallon Sciences channel · 96,000 subscribers",
      "date": "Posted in 2023",
      "encart": [
       [
        "Episodes",
        "12"
       ],
       [
        "Total views",
        "1.4M"
       ],
       [
        "Level",
        "Secondary school and early university"
       ]
      ],
      "sections": [
       {
        "titre": "Description",
        "texte": "A series of filmed lectures by Tarek Perrin, professor of physics at the University of Hautvallon. No need to be a maths expert: each episode starts from a simple experiment performed live. Slides and worked exercises can be downloaded."
       },
       {
        "titre": "Episodes",
        "liste": [
         "1. What is heat?",
         "4. How a fridge works",
         "7. Entropy, finally explained",
         "11. The Sun, the Earth and energy"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p34-2": {
  "nom": "Myriam Lemaire",
  "genre": "f",
  "cle": {
   "fr": "Site militant « La science prouve le dessein »",
   "en": "Activist site 'Science proves design'"
  },
  "support": {
   "fr": "Article sur un site internet",
   "en": "Article on a website"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Qui sommes-nous ? – Collectif Origines | verite-creation.org",
     "url": "verite-creation.org › qui-sommes-nous",
     "extrait": "Fondé en 2011 par Myriam Lemaire, le Collectif Origines montre que les découvertes scientifiques confirment l'existence d'un dessein dans la nature…",
     "page": {
      "type": "blog",
      "site": "Collectif Origines",
      "domaine": "verite-creation.org",
      "titre": "Qui sommes-nous ?",
      "sousTitre": "Collectif Origines, association loi 1901",
      "date": null,
      "encart": [
       [
        "Fondation",
        "2011"
       ],
       [
        "Présidente",
        "Myriam Lemaire"
       ],
       [
        "Financement",
        "Dons des membres et ventes de la boutique"
       ]
      ],
      "sections": [
       {
        "titre": "Notre mission",
        "texte": "Le Collectif Origines a pour but de montrer au grand public que la science, bien comprise, confirme l'existence d'un dessein intelligent dans la nature. Nous publions des articles, organisons des conférences et intervenons auprès des familles et des écoles."
       },
       {
        "titre": "Notre présidente",
        "texte": "Pharmacienne de formation, aujourd'hui retraitée, Myriam Lemaire s'intéresse depuis vingt ans aux questions d'origine de la vie. Elle a rédigé la plupart des articles du site."
       },
       {
        "titre": "Nous soutenir",
        "liste": [
         "Faire un don (déductible des impôts)",
         "Devenir membre : 30 € par an",
         "Partager nos articles"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Who are we? – Collectif Origines | verite-creation.org",
     "url": "verite-creation.org › who-we-are",
     "extrait": "Founded in 2011 by Myriam Lemaire, Collectif Origines shows that scientific discoveries confirm the existence of design in nature…",
     "page": {
      "type": "blog",
      "site": "Collectif Origines",
      "domaine": "verite-creation.org",
      "titre": "Who are we?",
      "sousTitre": "Collectif Origines, non-profit association",
      "date": null,
      "encart": [
       [
        "Founded",
        "2011"
       ],
       [
        "President",
        "Myriam Lemaire"
       ],
       [
        "Funding",
        "Members' donations and shop sales"
       ]
      ],
      "sections": [
       {
        "titre": "Our mission",
        "texte": "Collectif Origines aims to show the general public that science, properly understood, confirms the existence of intelligent design in nature. We publish articles, organise talks and reach out to families and schools."
       },
       {
        "titre": "Our president",
        "texte": "A pharmacist by training, now retired, Myriam Lemaire has been interested in questions about the origin of life for twenty years. She wrote most of the articles on the site."
       },
       {
        "titre": "Support us",
        "liste": [
         "Make a donation (tax-deductible)",
         "Become a member: €30 per year",
         "Share our articles"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Boutique Origines – Livres et DVD de Myriam Lemaire",
     "url": "verite-creation.org › boutique",
     "extrait": "« Le hasard n'a rien créé », de Myriam Lemaire, Éditions Origines : 22 €. DVD de conférences : 15 €. Pack découverte pour les familles…",
     "page": {
      "type": "commerce",
      "site": "Boutique Origines",
      "domaine": "verite-creation.org",
      "titre": "Boutique Origines",
      "sousTitre": "Livres, DVD et conférences de Myriam Lemaire",
      "date": null,
      "encart": [
       [
        "Livre « Le hasard n'a rien créé »",
        "22 €"
       ],
       [
        "DVD « La science face au dessein »",
        "15 €"
       ],
       [
        "Pack famille (livre + DVD + livret enfant)",
        "39 €"
       ],
       [
        "Éditeur",
        "Éditions Origines (maison d'édition de l'association)"
       ]
      ],
      "sections": [
       {
        "titre": "Le livre phare",
        "texte": "Dans « Le hasard n'a rien créé », Myriam Lemaire passe en revue les lois de la physique et de la chimie pour défendre l'idée que la vie a été organisée. Préface de membres du collectif."
       },
       {
        "titre": "Faites venir Myriam Lemaire",
        "texte": "Conférence de 1 h 30 dans votre commune, association ou paroisse, sur demande. Défraiement de 200 € et vente de livres sur place."
       }
      ]
     }
    },
    "en": {
     "titre": "Origines Shop – Books and DVDs by Myriam Lemaire",
     "url": "verite-creation.org › shop",
     "extrait": "'Le hasard n'a rien créé' (Chance Created Nothing) by Myriam Lemaire, Éditions Origines: €22. Lecture DVD: €15. Family discovery pack…",
     "page": {
      "type": "commerce",
      "site": "Origines Shop",
      "domaine": "verite-creation.org",
      "titre": "Origines Shop",
      "sousTitre": "Books, DVDs and talks by Myriam Lemaire",
      "date": null,
      "encart": [
       [
        "Book 'Chance Created Nothing'",
        "€22"
       ],
       [
        "DVD 'Science Faces Design'",
        "€15"
       ],
       [
        "Family pack (book + DVD + children's booklet)",
        "€39"
       ],
       [
        "Publisher",
        "Éditions Origines (the association's own publishing house)"
       ]
      ],
      "sections": [
       {
        "titre": "The flagship book",
        "texte": "In 'Chance Created Nothing', Myriam Lemaire reviews the laws of physics and chemistry to defend the idea that life was organised. Foreword by members of the collective."
       },
       {
        "titre": "Invite Myriam Lemaire",
        "texte": "A 90-minute talk in your town, association or parish, on request. €200 expenses fee and book sales on site."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Collectif Origines – Encyclopédia Libre",
     "url": "encyclopedia-libre.org › wiki › Collectif_Origines",
     "extrait": "Le Collectif Origines est une association française fondée en 2011 par Myriam Lemaire, ancienne pharmacienne. Elle promeut la thèse du « dessein intelligent »…",
     "page": {
      "type": "encyclo",
      "site": "Encyclopédia Libre",
      "domaine": "encyclopedia-libre.org",
      "titre": "Collectif Origines",
      "sousTitre": "Association française",
      "date": null,
      "encart": [
       [
        "Fondation",
        "2011"
       ],
       [
        "Fondatrice",
        "Myriam Lemaire"
       ],
       [
        "Siège",
        "Poitiers"
       ],
       [
        "Site",
        "verite-creation.org"
       ]
      ],
      "sections": [
       {
        "titre": "Présentation",
        "texte": "Le Collectif Origines est une association qui promeut la thèse du « dessein intelligent ». Sa fondatrice, Myriam Lemaire, a exercé comme pharmacienne d'officine à Poitiers jusqu'en 2015. Ni elle ni les autres auteurs du site n'ont publié d'article dans une revue scientifique de physique ou de biologie."
       },
       {
        "titre": "Activités",
        "liste": [
         "Site internet et lettre d'information",
         "Conférences dans des salles municipales",
         "Édition de livres via sa propre maison d'édition"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Collectif Origines – Encyclopédia Libre",
     "url": "encyclopedia-libre.org › wiki › Collectif_Origines",
     "extrait": "Collectif Origines is a French association founded in 2011 by Myriam Lemaire, a former pharmacist. It promotes the 'intelligent design' thesis…",
     "page": {
      "type": "encyclo",
      "site": "Encyclopédia Libre",
      "domaine": "encyclopedia-libre.org",
      "titre": "Collectif Origines",
      "sousTitre": "French association",
      "date": null,
      "encart": [
       [
        "Founded",
        "2011"
       ],
       [
        "Founder",
        "Myriam Lemaire"
       ],
       [
        "Headquarters",
        "Poitiers"
       ],
       [
        "Website",
        "verite-creation.org"
       ]
      ],
      "sections": [
       {
        "titre": "Overview",
        "texte": "Collectif Origines is an association that promotes the 'intelligent design' thesis. Its founder, Myriam Lemaire, worked as a community pharmacist in Poitiers until 2015. Neither she nor the site's other authors have published an article in a scientific journal of physics or biology."
       },
       {
        "titre": "Activities",
        "liste": [
         "Website and newsletter",
         "Talks in municipal halls",
         "Book publishing through its own publishing house"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p35-0": {
  "nom": "Philippe Royer",
  "genre": "m",
  "cle": {
   "fr": "Astrophysicien",
   "en": "Astrophysicist"
  },
  "support": {
   "fr": "Interview dans un journal",
   "en": "Newspaper interview"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Philippe Royer – Astronome – Observatoire de Haute-Corbière",
     "url": "obs-hautecorbiere.fr › chercheurs › philippe-royer",
     "extrait": "Astronome, spécialiste des trous noirs supermassifs. Mesure depuis quinze ans les orbites des étoiles qui tournent autour du centre de notre galaxie…",
     "page": {
      "type": "institution",
      "site": "Observatoire de Haute-Corbière",
      "domaine": "obs-hautecorbiere.fr",
      "titre": "Philippe Royer",
      "sousTitre": "Astronome, responsable du groupe Trous noirs et dynamique galactique",
      "date": null,
      "encart": [
       [
        "Groupe",
        "Trous noirs et dynamique galactique"
       ],
       [
        "Thèse",
        "2003, Dynamique des étoiles au voisinage du centre galactique"
       ],
       [
        "Instruments",
        "Télescope de 3,6 m de l'observatoire"
       ]
      ],
      "sections": [
       {
        "titre": "Recherches",
        "texte": "Philippe Royer étudie les trous noirs géants situés au cœur des galaxies. En suivant pendant des années le mouvement des étoiles proches du centre de la Voie lactée, son groupe calcule la masse de l'objet invisible autour duquel elles tournent. Il travaille aussi sur la matière qui chauffe en tombant vers les trous noirs."
       },
       {
        "titre": "Publications récentes",
        "liste": [
         "Fifteen years of stellar orbits around the galactic centre (2024)",
         "Mass estimates of supermassive black holes in nearby galaxies (2021)",
         "X-ray flares from accreting gas (2018)"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Philippe Royer – Astronomer – Haute-Corbière Observatory",
     "url": "obs-hautecorbiere.fr › researchers › philippe-royer",
     "extrait": "Astronomer, specialist in supermassive black holes. For fifteen years he has measured the orbits of stars circling the centre of our galaxy…",
     "page": {
      "type": "institution",
      "site": "Haute-Corbière Observatory",
      "domaine": "obs-hautecorbiere.fr",
      "titre": "Philippe Royer",
      "sousTitre": "Astronomer, head of the Black Holes and Galactic Dynamics group",
      "date": null,
      "encart": [
       [
        "Group",
        "Black Holes and Galactic Dynamics"
       ],
       [
        "PhD",
        "2003, Dynamics of stars near the galactic centre"
       ],
       [
        "Instruments",
        "The observatory's 3.6 m telescope"
       ]
      ],
      "sections": [
       {
        "titre": "Research",
        "texte": "Philippe Royer studies the giant black holes at the heart of galaxies. By following for years the movement of stars close to the centre of the Milky Way, his group calculates the mass of the invisible object they orbit. He also works on matter that heats up as it falls towards black holes."
       },
       {
        "titre": "Recent publications",
        "liste": [
         "Fifteen years of stellar orbits around the galactic centre (2024)",
         "Mass estimates of supermassive black holes in nearby galaxies (2021)",
         "X-ray flares from accreting gas (2018)"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Une nuit à l'observatoire avec l'astrophysicien Philippe Royer",
     "url": "gazette-pyrenees-sud.fr › sciences › nuit-observatoire-philippe-royer",
     "extrait": "Chaque printemps, l'astrophysicien passe ses nuits à pointer le télescope vers le centre de la Voie lactée. Nous l'avons suivi jusqu'à l'aube…",
     "page": {
      "type": "presse",
      "site": "La Gazette des Pyrénées-Sud",
      "domaine": "gazette-pyrenees-sud.fr",
      "titre": "Une nuit à l'observatoire avec l'astrophysicien Philippe Royer",
      "sousTitre": "Sciences · Reportage",
      "date": "15 avril 2025",
      "encart": [],
      "sections": [
       {
        "texte": "Il est 23 heures, la coupole s'ouvre sur un ciel étoilé. Philippe Royer, astronome à l'Observatoire de Haute-Corbière, vérifie une dernière fois ses réglages. « On observe les mêmes étoiles depuis 2009. Chaque nuit ajoute un petit morceau de leur trajectoire. »"
       },
       {
        "titre": "Un passionné depuis l'enfance",
        "texte": "Fils d'agriculteurs, il raconte avoir découvert les étoiles avec une paire de jumelles. Aujourd'hui, il partage son temps entre l'observation, l'analyse des données et des visites guidées pour les scolaires, dont il ne se lasse pas."
       }
      ]
     }
    },
    "en": {
     "titre": "A night at the observatory with astrophysicist Philippe Royer",
     "url": "gazette-pyrenees-sud.fr › science › night-observatory-philippe-royer",
     "extrait": "Every spring, the astrophysicist spends his nights pointing the telescope at the centre of the Milky Way. We followed him until dawn…",
     "page": {
      "type": "presse",
      "site": "La Gazette des Pyrénées-Sud",
      "domaine": "gazette-pyrenees-sud.fr",
      "titre": "A night at the observatory with astrophysicist Philippe Royer",
      "sousTitre": "Science · Report",
      "date": "15 April 2025",
      "encart": [],
      "sections": [
       {
        "texte": "It is 11 pm, and the dome opens onto a starry sky. Philippe Royer, astronomer at the Haute-Corbière Observatory, checks his settings one last time. 'We've been observing the same stars since 2009. Each night adds a small piece of their path.'"
       },
       {
        "titre": "A passion since childhood",
        "texte": "The son of farmers, he says he discovered the stars with a pair of binoculars. Today he divides his time between observing, analysing data and guided tours for school groups, which he never tires of."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Maître Philippe Royer – Office notarial Royer & Associés – Dijon",
     "url": "royer-notaires-dijon.fr › equipe › philippe-royer",
     "extrait": "Notaire à Dijon depuis 1998. Ventes immobilières, successions, contrats de mariage. Prise de rendez-vous en ligne…",
     "page": {
      "type": "commerce",
      "site": "Office notarial Royer & Associés",
      "domaine": "royer-notaires-dijon.fr",
      "titre": "Maître Philippe Royer",
      "sousTitre": "Notaire associé à Dijon",
      "date": null,
      "encart": [
       [
        "Installé depuis",
        "1998"
       ],
       [
        "Adresse",
        "Place Darcy, Dijon"
       ],
       [
        "Rendez-vous",
        "En ligne ou par téléphone"
       ]
      ],
      "sections": [
       {
        "titre": "Domaines d'intervention",
        "liste": [
         "Achat et vente de biens immobiliers",
         "Successions et donations",
         "Contrats de mariage et PACS",
         "Création de sociétés"
        ]
       },
       {
        "titre": "Présentation",
        "texte": "Maître Philippe Royer et ses deux associés accompagnent les particuliers et les entreprises de Côte-d'Or dans les grandes étapes de leur vie. Premier rendez-vous de conseil offert."
       }
      ]
     }
    },
    "en": {
     "titre": "Philippe Royer – Notary – Royer & Associés notary office – Dijon",
     "url": "royer-notaires-dijon.fr › team › philippe-royer",
     "extrait": "Notary in Dijon since 1998. Property sales, inheritance, marriage contracts. Book an appointment online…",
     "page": {
      "type": "commerce",
      "site": "Royer & Associés notary office",
      "domaine": "royer-notaires-dijon.fr",
      "titre": "Philippe Royer",
      "sousTitre": "Partner notary in Dijon",
      "date": null,
      "encart": [
       [
        "Established",
        "1998"
       ],
       [
        "Address",
        "Place Darcy, Dijon"
       ],
       [
        "Appointments",
        "Online or by phone"
       ]
      ],
      "sections": [
       {
        "titre": "Areas of practice",
        "liste": [
         "Buying and selling property",
         "Inheritance and gifts",
         "Marriage contracts and civil partnerships",
         "Setting up companies"
        ]
       },
       {
        "titre": "About",
        "texte": "Philippe Royer and his two partners assist individuals and businesses in the Côte-d'Or area through the major stages of their lives. First advice meeting free of charge."
       }
      ]
     }
    }
   }
  ]
 },
 "p36-1": {
  "nom": "Amine Cohen",
  "genre": "m",
  "cle": {
   "fr": "Neuroscientifique de la conscience",
   "en": "Consciousness neuroscientist"
  },
  "support": {
   "fr": "Table ronde dans un festival",
   "en": "Festival panel discussion"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Équipe Conscience et perception – Institut des neurosciences cognitives de Lestrade",
     "url": "incl-lestrade.fr › equipes › conscience-perception",
     "extrait": "Dirigée par Amine Cohen, l'équipe étudie ce qui change dans le cerveau quand une image est perçue consciemment ou non, et pendant l'anesthésie…",
     "page": {
      "type": "institution",
      "site": "Institut des neurosciences cognitives de Lestrade",
      "domaine": "incl-lestrade.fr",
      "titre": "Équipe « Conscience et perception »",
      "sousTitre": "Responsable : Amine Cohen, directeur de recherche",
      "date": null,
      "encart": [
       [
        "Thèse d'Amine Cohen",
        "2008, Signatures cérébrales de la perception consciente"
       ],
       [
        "Méthodes",
        "IRM fonctionnelle, électroencéphalographie"
       ],
       [
        "Partenaire",
        "Service d'anesthésie du CHU de Lestrade"
       ]
      ],
      "sections": [
       {
        "titre": "Thématique",
        "texte": "L'équipe compare l'activité du cerveau quand une personne voit consciemment une image et quand la même image passe inaperçue. Elle suit aussi des patients pendant l'anesthésie générale et au réveil, pour repérer les changements d'activité qui accompagnent la perte et le retour de la conscience."
       },
       {
        "titre": "Projets",
        "liste": [
         "Perception consciente et inconsciente des visages",
         "Réveil après anesthésie",
         "Comparaison des grandes théories de la conscience"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Consciousness and Perception team – Lestrade Institute of Cognitive Neuroscience",
     "url": "incl-lestrade.fr › teams › consciousness-perception",
     "extrait": "Led by Amine Cohen, the team studies what changes in the brain when an image is perceived consciously or not, and during anaesthesia…",
     "page": {
      "type": "institution",
      "site": "Lestrade Institute of Cognitive Neuroscience",
      "domaine": "incl-lestrade.fr",
      "titre": "'Consciousness and Perception' team",
      "sousTitre": "Head: Amine Cohen, research director",
      "date": null,
      "encart": [
       [
        "Amine Cohen's PhD",
        "2008, Brain signatures of conscious perception"
       ],
       [
        "Methods",
        "Functional MRI, electroencephalography"
       ],
       [
        "Partner",
        "Anaesthesia department, Lestrade University Hospital"
       ]
      ],
      "sections": [
       {
        "titre": "Research focus",
        "texte": "The team compares brain activity when a person consciously sees an image and when the same image goes unnoticed. It also follows patients during general anaesthesia and as they wake up, to identify the changes in activity that accompany the loss and return of consciousness."
       },
       {
        "titre": "Projects",
        "liste": [
         "Conscious and unconscious perception of faces",
         "Waking up after anaesthesia",
         "Comparing the major theories of consciousness"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Amine Cohen – Profil auteur | SciIndex",
     "url": "sciindex.org › auteurs › cohen-amine",
     "extrait": "67 publications, 3 950 citations. Domaines : neurosciences cognitives, conscience, perception visuelle…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Cohen, Amine",
      "sousTitre": "Institut des neurosciences cognitives de Lestrade",
      "date": null,
      "encart": [
       [
        "Publications",
        "67"
       ],
       [
        "Citations",
        "3 950"
       ],
       [
        "Indice h",
        "29"
       ],
       [
        "Domaines",
        "Neurosciences cognitives, conscience"
       ]
      ],
      "sections": [
       {
        "titre": "Publications les plus citées",
        "liste": [
         "Neural correlates of seeing and not seeing a face (2012)",
         "Brain activity during loss and recovery of consciousness under anaesthesia (2017)",
         "Testing rival theories of consciousness: a collaborative study (2022)"
        ]
       },
       {
        "titre": "Collaborations",
        "texte": "Membre d'un consortium international de quinze laboratoires qui confrontent les théories de la conscience à des expériences communes."
       }
      ]
     }
    },
    "en": {
     "titre": "Amine Cohen – Author profile | SciIndex",
     "url": "sciindex.org › authors › cohen-amine",
     "extrait": "67 publications, 3,950 citations. Fields: cognitive neuroscience, consciousness, visual perception…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Cohen, Amine",
      "sousTitre": "Lestrade Institute of Cognitive Neuroscience",
      "date": null,
      "encart": [
       [
        "Publications",
        "67"
       ],
       [
        "Citations",
        "3,950"
       ],
       [
        "h-index",
        "29"
       ],
       [
        "Fields",
        "Cognitive neuroscience, consciousness"
       ]
      ],
      "sections": [
       {
        "titre": "Most cited publications",
        "liste": [
         "Neural correlates of seeing and not seeing a face (2012)",
         "Brain activity during loss and recovery of consciousness under anaesthesia (2017)",
         "Testing rival theories of consciousness: a collaborative study (2022)"
        ]
       },
       {
        "titre": "Collaborations",
        "texte": "Member of an international consortium of fifteen laboratories that test theories of consciousness against shared experiments."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Festival Cerveaux en fête 2024 – Table ronde « Qu'est-ce qu'être conscient ? » | Vidéoflux",
     "url": "videoflux.com › cerveaux-en-fete › table-ronde-conscience",
     "extrait": "Avec Amine Cohen, neuroscientifique à l'Institut de Lestrade, une philosophe et une médecin anesthésiste. 1 h 12…",
     "page": {
      "type": "video",
      "site": "Vidéoflux",
      "domaine": "videoflux.com",
      "titre": "Qu'est-ce qu'être conscient ?",
      "sousTitre": "Chaîne Cerveaux en fête · 41 000 abonnés",
      "date": "2 décembre 2024",
      "encart": [
       [
        "Durée",
        "1 h 12"
       ],
       [
        "Vues",
        "88 000"
       ],
       [
        "Lieu",
        "Festival Cerveaux en fête, Lestrade"
       ]
      ],
      "sections": [
       {
        "titre": "Description",
        "texte": "Table ronde enregistrée lors du festival Cerveaux en fête. Intervenants : Amine Cohen, directeur de recherche en neurosciences cognitives, une philosophe de l'esprit et une médecin anesthésiste. Questions du public à partir de 52 min."
       },
       {
        "titre": "Chapitres",
        "liste": [
         "00:00 Présentation des invités",
         "08:30 Comment étudie-t-on la conscience en laboratoire ?",
         "31:00 Ce que nous apprend l'anesthésie",
         "52:00 Questions du public"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Brains in Celebration Festival 2024 – Panel 'What does it mean to be conscious?' | Vidéoflux",
     "url": "videoflux.com › cerveaux-en-fete › consciousness-panel",
     "extrait": "With Amine Cohen, neuroscientist at the Lestrade Institute, a philosopher and an anaesthetist. 1 h 12…",
     "page": {
      "type": "video",
      "site": "Vidéoflux",
      "domaine": "videoflux.com",
      "titre": "What does it mean to be conscious?",
      "sousTitre": "Cerveaux en fête channel · 41,000 subscribers",
      "date": "2 December 2024",
      "encart": [
       [
        "Length",
        "1 h 12"
       ],
       [
        "Views",
        "88,000"
       ],
       [
        "Venue",
        "Brains in Celebration Festival, Lestrade"
       ]
      ],
      "sections": [
       {
        "titre": "Description",
        "texte": "Panel recorded at the Brains in Celebration festival. Speakers: Amine Cohen, research director in cognitive neuroscience, a philosopher of mind and an anaesthetist. Audience questions from 52 min."
       },
       {
        "titre": "Chapters",
        "liste": [
         "00:00 Introducing the guests",
         "08:30 How do we study consciousness in the lab?",
         "31:00 What anaesthesia teaches us",
         "52:00 Audience questions"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p37-1": {
  "nom": "Nora Gauthier",
  "genre": "f",
  "cle": {
   "fr": "Cosmologiste",
   "en": "Cosmologist"
  },
  "support": {
   "fr": "Reportage télévisé",
   "en": "TV news report"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Nora Gauthier – Chercheuse en cosmologie – Laboratoire d'astrophysique de Kerlouan",
     "url": "lak-astro.fr › personnel › nora-gauthier",
     "extrait": "Cosmologiste. Mesure la vitesse d'expansion de l'Univers à l'aide des supernovas lointaines. Membre du relevé international ARGOS…",
     "page": {
      "type": "institution",
      "site": "Laboratoire d'astrophysique de Kerlouan",
      "domaine": "lak-astro.fr",
      "titre": "Nora Gauthier",
      "sousTitre": "Chargée de recherche, groupe Cosmologie observationnelle",
      "date": null,
      "encart": [
       [
        "Groupe",
        "Cosmologie observationnelle"
       ],
       [
        "Thèse",
        "2013, Les supernovas comme étalons de distance cosmologiques"
       ],
       [
        "Collaboration",
        "Relevé international ARGOS"
       ]
      ],
      "sections": [
       {
        "titre": "Recherches",
        "texte": "Nora Gauthier mesure les distances des galaxies lointaines à partir de l'éclat d'étoiles qui explosent, les supernovas. Ces mesures servent à calculer la vitesse d'expansion de l'Univers et à étudier l'énergie noire. Elle coordonne l'analyse des erreurs de mesure au sein du relevé ARGOS."
       },
       {
        "titre": "Publications récentes",
        "liste": [
         "Calibrating type Ia supernovae with the ARGOS survey (2024)",
         "Systematic uncertainties in distance measurements (2022)",
         "Dark energy constraints from 1,500 supernovae (2020)"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Nora Gauthier – Cosmology researcher – Kerlouan Astrophysics Laboratory",
     "url": "lak-astro.fr › staff › nora-gauthier",
     "extrait": "Cosmologist. Measures the expansion rate of the Universe using distant supernovae. Member of the international ARGOS survey…",
     "page": {
      "type": "institution",
      "site": "Kerlouan Astrophysics Laboratory",
      "domaine": "lak-astro.fr",
      "titre": "Nora Gauthier",
      "sousTitre": "Research scientist, Observational Cosmology group",
      "date": null,
      "encart": [
       [
        "Group",
        "Observational Cosmology"
       ],
       [
        "PhD",
        "2013, Supernovae as cosmological distance standards"
       ],
       [
        "Collaboration",
        "International ARGOS survey"
       ]
      ],
      "sections": [
       {
        "titre": "Research",
        "texte": "Nora Gauthier measures the distances of faraway galaxies using the brightness of exploding stars, supernovae. These measurements are used to calculate the expansion rate of the Universe and to study dark energy. She coordinates the analysis of measurement errors within the ARGOS survey."
       },
       {
        "titre": "Recent publications",
        "liste": [
         "Calibrating type Ia supernovae with the ARGOS survey (2024)",
         "Systematic uncertainties in distance measurements (2022)",
         "Dark energy constraints from 1,500 supernovae (2020)"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Nora Gauthier – Cosmologiste, Laboratoire d'astrophysique de Kerlouan | ProLink",
     "url": "prolink.com › in › nora-gauthier-cosmo",
     "extrait": "Chargée de recherche en cosmologie. Doctorat en astrophysique. Postdoctorat de trois ans au Chili, sur un grand télescope…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Nora Gauthier",
      "sousTitre": "Cosmologiste · Chargée de recherche · Kerlouan",
      "date": null,
      "encart": [
       [
        "Poste actuel",
        "Chargée de recherche, Laboratoire d'astrophysique de Kerlouan"
       ],
       [
        "Formation",
        "Doctorat en astrophysique (2013)"
       ],
       [
        "Langues",
        "Français, anglais, espagnol"
       ]
      ],
      "sections": [
       {
        "titre": "Expérience",
        "liste": [
         "Chargée de recherche, Laboratoire d'astrophysique de Kerlouan (2018 – aujourd'hui)",
         "Chercheuse postdoctorale, observatoire austral du relevé ARGOS, Chili (2014 – 2017)",
         "Doctorante, Laboratoire d'astrophysique de Kerlouan (2010 – 2013)"
        ]
       },
       {
        "titre": "Infos",
        "texte": "Je cherche à mesurer le plus précisément possible les distances dans l'Univers. J'interviens aussi régulièrement dans les planétariums et les médias pour expliquer les questions ouvertes de la cosmologie."
       }
      ]
     }
    },
    "en": {
     "titre": "Nora Gauthier – Cosmologist, Kerlouan Astrophysics Laboratory | ProLink",
     "url": "prolink.com › in › nora-gauthier-cosmo",
     "extrait": "Research scientist in cosmology. PhD in astrophysics. Three-year postdoc in Chile, working on a large telescope…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Nora Gauthier",
      "sousTitre": "Cosmologist · Research scientist · Kerlouan",
      "date": null,
      "encart": [
       [
        "Current position",
        "Research scientist, Kerlouan Astrophysics Laboratory"
       ],
       [
        "Education",
        "PhD in astrophysics (2013)"
       ],
       [
        "Languages",
        "French, English, Spanish"
       ]
      ],
      "sections": [
       {
        "titre": "Experience",
        "liste": [
         "Research scientist, Kerlouan Astrophysics Laboratory (2018 – present)",
         "Postdoctoral researcher, ARGOS survey southern observatory, Chile (2014 – 2017)",
         "PhD student, Kerlouan Astrophysics Laboratory (2010 – 2013)"
        ]
       },
       {
        "titre": "About",
        "texte": "I try to measure distances in the Universe as precisely as possible. I also regularly speak in planetariums and in the media to explain the open questions of cosmology."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Triathlon de la Côte de Granit : Nora Gauthier s'impose chez les moins de 20 ans",
     "url": "ouest-sport-hebdo.fr › triathlon › cote-de-granit-resultats",
     "extrait": "La jeune Lannionnaise de 18 ans a dominé la course dès la natation et termine avec plus de deux minutes d'avance…",
     "page": {
      "type": "presse",
      "site": "Ouest Sport Hebdo",
      "domaine": "ouest-sport-hebdo.fr",
      "titre": "Nora Gauthier s'impose chez les moins de 20 ans",
      "sousTitre": "Triathlon de la Côte de Granit · Résultats",
      "date": "7 juillet 2025",
      "encart": [
       [
        "Catégorie",
        "Moins de 20 ans, femmes"
       ],
       [
        "Temps",
        "1 h 08 min 42 s"
       ],
       [
        "Club",
        "Triathlon Club du Trégor"
       ]
      ],
      "sections": [
       {
        "texte": "À 18 ans, Nora Gauthier, licenciée au Triathlon Club du Trégor, a remporté dimanche la course des moins de 20 ans du triathlon de la Côte de Granit. Sortie de l'eau en tête, elle a creusé l'écart à vélo avant de gérer son avance en course à pied."
       },
       {
        "texte": "« Je m'entraîne deux fois par jour depuis l'hiver, ça paie enfin ! », a réagi la lycéenne, qui vise désormais les championnats de France."
       }
      ]
     }
    },
    "en": {
     "titre": "Côte de Granit Triathlon: Nora Gauthier wins the under-20 race",
     "url": "ouest-sport-hebdo.fr › triathlon › cote-de-granit-results",
     "extrait": "The 18-year-old from Lannion led the race from the swim and finished more than two minutes ahead…",
     "page": {
      "type": "presse",
      "site": "Ouest Sport Hebdo",
      "domaine": "ouest-sport-hebdo.fr",
      "titre": "Nora Gauthier wins the under-20 race",
      "sousTitre": "Côte de Granit Triathlon · Results",
      "date": "7 July 2025",
      "encart": [
       [
        "Category",
        "Women, under 20"
       ],
       [
        "Time",
        "1 h 08 min 42 s"
       ],
       [
        "Club",
        "Trégor Triathlon Club"
       ]
      ],
      "sections": [
       {
        "texte": "At 18, Nora Gauthier, a member of the Trégor Triathlon Club, won the under-20 race at the Côte de Granit triathlon on Sunday. First out of the water, she pulled away on the bike before managing her lead on the run."
       },
       {
        "texte": "'I've been training twice a day since the winter, and it's finally paying off!' said the secondary-school student, who is now aiming for the national championships."
       }
      ]
     }
    }
   }
  ]
 },
 "p38-0": {
  "nom": "Baptiste Lindqvist",
  "genre": "m",
  "cle": {
   "fr": "Chercheur en origines de la vie (chimie prébiotique)",
   "en": "Origin-of-life researcher (prebiotic chemistry)"
  },
  "support": {
   "fr": "Interview dans un magazine",
   "en": "Magazine interview"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Baptiste Lindqvist – Équipe Chimie prébiotique – LCOV, Université Rhône-Garance",
     "url": "lcov.univ-rhonegarance.fr › equipes › chimie-prebiotique › lindqvist",
     "extrait": "Chargé de recherche, Baptiste Lindqvist étudie comment des molécules simples ont pu s'assembler en briques du vivant (nucléotides, acides aminés) sur la Terre primitive…",
     "page": {
      "type": "institution",
      "site": "Laboratoire Chimie et Origines du vivant (LCOV) – Université Rhône-Garance",
      "domaine": "lcov.univ-rhonegarance.fr",
      "titre": "Baptiste Lindqvist",
      "sousTitre": "Chargé de recherche, équipe Chimie prébiotique",
      "date": null,
      "encart": [
       [
        "Poste",
        "Chargé de recherche depuis 2015"
       ],
       [
        "Équipe",
        "Chimie prébiotique"
       ],
       [
        "Thèse",
        "2011, Synthèse de nucléotides dans des conditions de la Terre primitive"
       ],
       [
        "Enseignement",
        "Master Chimie du vivant"
       ]
      ],
      "sections": [
       {
        "titre": "Recherches",
        "texte": "Baptiste Lindqvist reproduit en laboratoire des environnements de la Terre primitive (mares, argiles, eaux chaudes) pour comprendre comment des molécules simples peuvent former des briques plus complexes, puis des systèmes capables de se copier. Il coordonne un projet régional consacré aux premières molécules autoréplicatives."
       },
       {
        "titre": "Publications récentes",
        "liste": [
         "Formation de nucléotides sur surfaces minérales (2023)",
         "Cycles de séchage et réhydratation en chimie prébiotique (2022)",
         "Vers des réseaux chimiques qui se copient : bilan critique (2021)"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Baptiste Lindqvist – Prebiotic Chemistry Team – LCOV, Rhône-Garance University",
     "url": "lcov.univ-rhonegarance.fr › teams › prebiotic-chemistry › lindqvist",
     "extrait": "Research scientist Baptiste Lindqvist studies how simple molecules could have assembled into life's building blocks (nucleotides, amino acids) on the early Earth…",
     "page": {
      "type": "institution",
      "site": "Chemistry and Origins of Life Laboratory (LCOV) – Rhône-Garance University",
      "domaine": "lcov.univ-rhonegarance.fr",
      "titre": "Baptiste Lindqvist",
      "sousTitre": "Research scientist, Prebiotic Chemistry team",
      "date": null,
      "encart": [
       [
        "Position",
        "Research scientist since 2015"
       ],
       [
        "Team",
        "Prebiotic chemistry"
       ],
       [
        "PhD",
        "2011, Synthesis of nucleotides under early-Earth conditions"
       ],
       [
        "Teaching",
        "Master's in Chemistry of Life"
       ]
      ],
      "sections": [
       {
        "titre": "Research",
        "texte": "Baptiste Lindqvist recreates early-Earth environments in the lab (ponds, clays, hot water) to understand how simple molecules can form more complex building blocks, and then systems able to copy themselves. He coordinates a regional project on the first self-replicating molecules."
       },
       {
        "titre": "Recent publications",
        "liste": [
         "Nucleotide formation on mineral surfaces (2023)",
         "Drying and rehydration cycles in prebiotic chemistry (2022)",
         "Towards chemical networks that copy themselves: a critical review (2021)"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Baptiste Lindqvist – Profil auteur – SciIndex",
     "url": "sciindex.org › auteurs › lindqvist-baptiste",
     "extrait": "41 publications · 2 380 citations · Thèmes : chimie prébiotique, origine de l'ARN, autoréplication…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Baptiste Lindqvist",
      "sousTitre": "Chimie prébiotique · LCOV, Université Rhône-Garance",
      "date": null,
      "encart": [
       [
        "Publications",
        "41"
       ],
       [
        "Citations",
        "2 380"
       ],
       [
        "Indice h",
        "24"
       ],
       [
        "Première publication",
        "2009"
       ]
      ],
      "sections": [
       {
        "titre": "Thèmes principaux",
        "liste": [
         "Chimie prébiotique",
         "Origine de l'ARN",
         "Molécules autoréplicatives",
         "Géochimie de la Terre primitive"
        ]
       },
       {
        "titre": "Articles les plus cités",
        "liste": [
         "Des argiles qui favorisent l'assemblage de nucléotides (2016, 412 citations)",
         "Chimie des mares chaudes de la Terre primitive (2019, 298 citations)",
         "Limites des scénarios « un seul milieu » pour l'origine de la vie (2021, 187 citations)"
        ]
       },
       {
        "titre": "Revues",
        "liste": [
         "Journal of Prebiotic Chemistry",
         "Archives of Early-Earth Chemistry"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Baptiste Lindqvist – Author profile – SciIndex",
     "url": "sciindex.org › authors › lindqvist-baptiste",
     "extrait": "41 publications · 2,380 citations · Topics: prebiotic chemistry, origin of RNA, self-replication…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Baptiste Lindqvist",
      "sousTitre": "Prebiotic chemistry · LCOV, Rhône-Garance University",
      "date": null,
      "encart": [
       [
        "Publications",
        "41"
       ],
       [
        "Citations",
        "2,380"
       ],
       [
        "h-index",
        "24"
       ],
       [
        "First publication",
        "2009"
       ]
      ],
      "sections": [
       {
        "titre": "Main topics",
        "liste": [
         "Prebiotic chemistry",
         "Origin of RNA",
         "Self-replicating molecules",
         "Geochemistry of the early Earth"
        ]
       },
       {
        "titre": "Most cited papers",
        "liste": [
         "Clays that favour nucleotide assembly (2016, 412 citations)",
         "Chemistry of warm ponds on the early Earth (2019, 298 citations)",
         "Limits of 'single-setting' scenarios for the origin of life (2021, 187 citations)"
        ]
       },
       {
        "titre": "Journals",
        "liste": [
         "Journal of Prebiotic Chemistry",
         "Archives of Early-Earth Chemistry"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Handball : Baptiste Lindqvist prolonge deux saisons à Chambéry-Lac – L'Écho des Savoies",
     "url": "echodessavoies.fr › sports › handball › baptiste-lindqvist-prolonge",
     "extrait": "Le gardien de but de 27 ans, formé au club, a signé jusqu'en 2027. « Je me sens chez moi ici », confie Baptiste Lindqvist…",
     "page": {
      "type": "presse",
      "site": "L'Écho des Savoies",
      "domaine": "echodessavoies.fr",
      "titre": "Baptiste Lindqvist prolonge deux saisons à Chambéry-Lac",
      "sousTitre": "Handball – Championnat de France",
      "date": "14 juin 2025",
      "encart": [
       [
        "Poste",
        "Gardien de but"
       ],
       [
        "Âge",
        "27 ans"
       ],
       [
        "Club",
        "HBC Chambéry-Lac"
       ]
      ],
      "sections": [
       {
        "titre": "Sport",
        "texte": "Le gardien de but Baptiste Lindqvist a prolongé son contrat avec le HBC Chambéry-Lac jusqu'en 2027. Formé au club depuis ses 14 ans, il s'est imposé cette saison comme titulaire, avec un taux d'arrêts parmi les meilleurs du championnat. « Je me sens chez moi ici, et le projet du club me plaît », explique-t-il. Les dirigeants saluent un joueur « régulier et exemplaire à l'entraînement ». Il retrouvera la Coupe d'Europe dès septembre."
       }
      ]
     }
    },
    "en": {
     "titre": "Handball: Baptiste Lindqvist extends for two seasons at Chambéry-Lac – L'Écho des Savoies",
     "url": "echodessavoies.fr › sports › handball › baptiste-lindqvist-prolonge",
     "extrait": "The 27-year-old goalkeeper, a product of the club's academy, has signed until 2027. 'I feel at home here,' says Baptiste Lindqvist…",
     "page": {
      "type": "presse",
      "site": "L'Écho des Savoies",
      "domaine": "echodessavoies.fr",
      "titre": "Baptiste Lindqvist extends for two seasons at Chambéry-Lac",
      "sousTitre": "Handball – French league",
      "date": "14 June 2025",
      "encart": [
       [
        "Position",
        "Goalkeeper"
       ],
       [
        "Age",
        "27"
       ],
       [
        "Club",
        "HBC Chambéry-Lac"
       ]
      ],
      "sections": [
       {
        "titre": "Sport",
        "texte": "Goalkeeper Baptiste Lindqvist has extended his contract with HBC Chambéry-Lac until 2027. At the club since he was 14, he became the first-choice keeper this season, with one of the best save rates in the league. 'I feel at home here, and I like the club's project,' he explains. The management praises a player who is 'consistent and exemplary in training'. He will be back in European competition from September."
       }
      ]
     }
    }
   }
  ]
 },
 "p39-1": {
  "nom": "Marion Fournier",
  "genre": "f",
  "cle": {
   "fr": "Climatologue spécialiste des points de bascule",
   "en": "Climatologist specializing in tipping points"
  },
  "support": {
   "fr": "Entretien à la radio",
   "en": "Radio interview"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Marion Fournier – Directrice de recherche – Institut des sciences du climat de Mont-Aigoual",
     "url": "iscma.fr › equipes › dynamique-systeme-terre › marion-fournier",
     "extrait": "Directrice de recherche, responsable de l'équipe « Dynamique du système Terre et points de bascule ». Spécialiste des calottes glaciaires et de la forêt amazonienne…",
     "page": {
      "type": "institution",
      "site": "Institut des sciences du climat de Mont-Aigoual (ISCMA)",
      "domaine": "iscma.fr",
      "titre": "Marion Fournier",
      "sousTitre": "Directrice de recherche, climatologue",
      "date": null,
      "encart": [
       [
        "Équipe",
        "Dynamique du système Terre et points de bascule"
       ],
       [
        "Thèse",
        "2008, Stabilité de la calotte du Groenland face au réchauffement"
       ],
       [
        "Responsabilités",
        "Coordinatrice du programme européen TIPPEX"
       ]
      ],
      "sections": [
       {
        "titre": "Recherches",
        "texte": "Marion Fournier étudie les « points de bascule » du climat : des éléments comme la calotte du Groenland, la forêt amazonienne ou certains courants océaniques, qui pourraient changer d'état de façon brutale. Son équipe combine modèles numériques, observations satellites et données du passé pour estimer à partir de quel réchauffement ces changements deviennent probables, et avec quelle marge d'incertitude."
       },
       {
        "titre": "Publications récentes",
        "liste": [
         "Seuils de stabilité de la calotte groenlandaise : comparaison de 12 modèles (2024)",
         "Interactions entre points de bascule du climat (2023)",
         "Amazonie : sécheresse, incendies et résilience de la forêt (2022)"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Marion Fournier – Research director – Mont-Aigoual Institute of Climate Sciences",
     "url": "iscma.fr › teams › earth-system-dynamics › marion-fournier",
     "extrait": "Research director, head of the 'Earth System Dynamics and Tipping Points' team. Specialist in ice sheets and the Amazon rainforest…",
     "page": {
      "type": "institution",
      "site": "Mont-Aigoual Institute of Climate Sciences (ISCMA)",
      "domaine": "iscma.fr",
      "titre": "Marion Fournier",
      "sousTitre": "Research director, climatologist",
      "date": null,
      "encart": [
       [
        "Team",
        "Earth System Dynamics and Tipping Points"
       ],
       [
        "PhD",
        "2008, Stability of the Greenland ice sheet under warming"
       ],
       [
        "Roles",
        "Coordinator of the European TIPPEX programme"
       ]
      ],
      "sections": [
       {
        "titre": "Research",
        "texte": "Marion Fournier studies the climate's 'tipping points': elements such as the Greenland ice sheet, the Amazon rainforest or certain ocean currents, which could switch state abruptly. Her team combines computer models, satellite observations and data from the past to estimate at what level of warming these changes become likely, and with what margin of uncertainty."
       },
       {
        "titre": "Recent publications",
        "liste": [
         "Stability thresholds of the Greenland ice sheet: a comparison of 12 models (2024)",
         "Interactions between climate tipping points (2023)",
         "Amazon: drought, fires and forest resilience (2022)"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Marion Fournier – Profil auteur – SciIndex",
     "url": "sciindex.org › auteurs › fournier-marion",
     "extrait": "87 publications · 6 940 citations · Thèmes : calottes glaciaires, points de bascule, modélisation du climat…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Marion Fournier",
      "sousTitre": "Climatologie · ISCMA, Mont-Aigoual",
      "date": null,
      "encart": [
       [
        "Publications",
        "87"
       ],
       [
        "Citations",
        "6 940"
       ],
       [
        "Indice h",
        "39"
       ],
       [
        "Première publication",
        "2005"
       ]
      ],
      "sections": [
       {
        "titre": "Thèmes principaux",
        "liste": [
         "Calottes glaciaires (Groenland, Antarctique de l'Ouest)",
         "Points de bascule du climat",
         "Modélisation du système Terre",
         "Forêt amazonienne et sécheresses"
        ]
       },
       {
        "titre": "Articles les plus cités",
        "liste": [
         "Réponse de la calotte groenlandaise au réchauffement : un ensemble de modèles (2015, 820 citations)",
         "Cartographie des éléments de bascule du système climatique (2019, 640 citations)",
         "Quantifier l'incertitude sur les seuils critiques (2021, 410 citations)"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Marion Fournier – Author profile – SciIndex",
     "url": "sciindex.org › authors › fournier-marion",
     "extrait": "87 publications · 6,940 citations · Topics: ice sheets, tipping points, climate modelling…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Marion Fournier",
      "sousTitre": "Climatology · ISCMA, Mont-Aigoual",
      "date": null,
      "encart": [
       [
        "Publications",
        "87"
       ],
       [
        "Citations",
        "6,940"
       ],
       [
        "h-index",
        "39"
       ],
       [
        "First publication",
        "2005"
       ]
      ],
      "sections": [
       {
        "titre": "Main topics",
        "liste": [
         "Ice sheets (Greenland, West Antarctica)",
         "Climate tipping points",
         "Earth system modelling",
         "Amazon rainforest and droughts"
        ]
       },
       {
        "titre": "Most cited papers",
        "liste": [
         "Response of the Greenland ice sheet to warming: a model ensemble (2015, 820 citations)",
         "Mapping the tipping elements of the climate system (2019, 640 citations)",
         "Quantifying uncertainty on critical thresholds (2021, 410 citations)"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "« Mon métier, c'est aussi de mesurer ce qu'on ne sait pas » – Le Courrier de l'Ouest-Express",
     "url": "courrier-ouest-express.fr › sciences › portrait-marion-fournier",
     "extrait": "Rencontre avec Marion Fournier, climatologue, qui a passé trois étés sur la calotte du Groenland avant de diriger une équipe de modélisation…",
     "page": {
      "type": "presse",
      "site": "Le Courrier de l'Ouest-Express",
      "domaine": "courrier-ouest-express.fr",
      "titre": "Marion Fournier, une climatologue entre glace et ordinateurs",
      "sousTitre": "Portrait – Sciences",
      "date": "8 février 2025",
      "encart": [
       [
        "Âge",
        "46 ans"
       ],
       [
        "Formation",
        "Doctorat en sciences du climat"
       ],
       [
        "Terrain",
        "3 campagnes au Groenland"
       ]
      ],
      "sections": [
       {
        "titre": "Du terrain aux modèles",
        "texte": "Marion Fournier a découvert la glace à 24 ans, lors d'une campagne de forage au Groenland. Aujourd'hui, elle dirige à l'ISCMA une équipe d'une quinzaine de chercheurs qui simulent l'avenir des grandes calottes et de la forêt amazonienne. Elle coordonne aussi un programme européen réunissant neuf pays."
       },
       {
        "titre": "Sa règle d'or",
        "texte": "« Dans un article, je dois toujours dire ce que je sais, et avec quelle précision. Donner une fourchette, ce n'est pas hésiter, c'est être honnête », explique-t-elle. Elle intervient régulièrement dans les lycées de la région."
       }
      ]
     }
    },
    "en": {
     "titre": "'My job is also to measure what we don't know' – Le Courrier de l'Ouest-Express",
     "url": "courrier-ouest-express.fr › sciences › portrait-marion-fournier",
     "extrait": "Meet Marion Fournier, a climatologist who spent three summers on the Greenland ice sheet before leading a modelling team…",
     "page": {
      "type": "presse",
      "site": "Le Courrier de l'Ouest-Express",
      "domaine": "courrier-ouest-express.fr",
      "titre": "Marion Fournier, a climatologist between ice and computers",
      "sousTitre": "Profile – Science",
      "date": "8 February 2025",
      "encart": [
       [
        "Age",
        "46"
       ],
       [
        "Education",
        "PhD in climate science"
       ],
       [
        "Fieldwork",
        "3 expeditions to Greenland"
       ]
      ],
      "sections": [
       {
        "titre": "From the field to models",
        "texte": "Marion Fournier first encountered the ice at 24, during a drilling expedition in Greenland. Today she leads a team of about fifteen researchers at ISCMA who simulate the future of the great ice sheets and the Amazon rainforest. She also coordinates a European programme bringing together nine countries."
       },
       {
        "titre": "Her golden rule",
        "texte": "'In a paper, I must always say what I know, and how precisely. Giving a range isn't hesitating, it's being honest,' she explains. She regularly visits secondary schools in the region."
       }
      ]
     }
    }
   }
  ]
 },
 "p39-2": {
  "nom": "Sabine Carpentier",
  "genre": "f",
  "cle": {
   "fr": "Tribune climatosceptique",
   "en": "Climate-denial op-ed"
  },
  "support": {
   "fr": "Tribune sur un site d'opinion",
   "en": "Op-ed on an opinion site"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Notre équipe – Énergie Libre, le think tank de la liberté énergétique",
     "url": "energie-libre-info.com › qui-sommes-nous › equipe",
     "extrait": "Sabine Carpentier, déléguée générale. Après douze ans à la direction des affaires publiques d'un grand groupe gazier et pétrolier, elle a rejoint Énergie Libre en 2021…",
     "page": {
      "type": "institution",
      "site": "Énergie Libre",
      "domaine": "energie-libre-info.com",
      "titre": "Sabine Carpentier",
      "sousTitre": "Déléguée générale",
      "date": null,
      "encart": [
       [
        "Fonction",
        "Déléguée générale depuis 2021"
       ],
       [
        "Parcours",
        "Directrice des affaires publiques, groupe Norgaz (2009-2021)"
       ],
       [
        "Formation",
        "École supérieure de commerce de Lyrac, master communication"
       ]
      ],
      "sections": [
       {
        "titre": "Biographie",
        "texte": "Après douze ans à la tête des affaires publiques du groupe Norgaz, Sabine Carpentier a rejoint Énergie Libre pour « porter un regard libre et sans tabou sur les politiques climatiques ». Elle signe chaque semaine une tribune et intervient dans les médias sur le prix de l'énergie et la fiscalité carbone."
       },
       {
        "titre": "Nos membres fondateurs",
        "liste": [
         "Groupe Norgaz",
         "Fédération des distributeurs de carburants",
         "Union des industries du raffinage",
         "Cercle des automobilistes libres"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Our team – Free Energy, the think tank for energy freedom",
     "url": "free-energy-info.com › about-us › team",
     "extrait": "Sabine Carpentier, executive director. After twelve years running public affairs at a major oil and gas group, she joined Free Energy in 2021…",
     "page": {
      "type": "institution",
      "site": "Free Energy",
      "domaine": "free-energy-info.com",
      "titre": "Sabine Carpentier",
      "sousTitre": "Executive director",
      "date": null,
      "encart": [
       [
        "Role",
        "Executive director since 2021"
       ],
       [
        "Background",
        "Head of public affairs, Norgaz group (2009-2021)"
       ],
       [
        "Education",
        "Lyrac Business School, master's in communication"
       ]
      ],
      "sections": [
       {
        "titre": "Biography",
        "texte": "After twelve years heading public affairs at the Norgaz group, Sabine Carpentier joined Free Energy to 'take a free and unflinching look at climate policies'. She writes a weekly op-ed and appears in the media on energy prices and carbon taxation."
       },
       {
        "titre": "Our founding members",
        "liste": [
         "Norgaz group",
         "Federation of fuel distributors",
         "Union of refining industries",
         "Free Motorists' Circle"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Sabine Carpentier – Déléguée générale – Énergie Libre | ProLink",
     "url": "prolink.com › in › sabine-carpentier",
     "extrait": "Affaires publiques · Lobbying · Communication de crise · 15 ans d'expérience dans le secteur de l'énergie…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Sabine Carpentier",
      "sousTitre": "Déléguée générale chez Énergie Libre · Affaires publiques et influence",
      "date": null,
      "encart": [
       [
        "Relations",
        "2 300+"
       ],
       [
        "Secteur",
        "Énergie, pétrole et gaz"
       ]
      ],
      "sections": [
       {
        "titre": "Expérience",
        "liste": [
         "Déléguée générale, Énergie Libre (depuis 2021)",
         "Directrice des affaires publiques, groupe Norgaz (2009-2021)",
         "Chargée de relations presse, agence Opinion & Stratégie (2005-2009)"
        ]
       },
       {
        "titre": "Formation",
        "liste": [
         "Master communication et affaires publiques, École supérieure de commerce de Lyrac (2005)",
         "Licence d'économie, Université de Bréval (2003)"
        ]
       },
       {
        "titre": "Compétences",
        "liste": [
         "Lobbying",
         "Communication de crise",
         "Relations presse",
         "Prise de parole en public"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Sabine Carpentier – Executive director – Free Energy | ProLink",
     "url": "prolink.com › in › sabine-carpentier",
     "extrait": "Public affairs · Lobbying · Crisis communication · 15 years of experience in the energy sector…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Sabine Carpentier",
      "sousTitre": "Executive director at Free Energy · Public affairs and influence",
      "date": null,
      "encart": [
       [
        "Connections",
        "2,300+"
       ],
       [
        "Industry",
        "Energy, oil and gas"
       ]
      ],
      "sections": [
       {
        "titre": "Experience",
        "liste": [
         "Executive director, Free Energy (since 2021)",
         "Head of public affairs, Norgaz group (2009-2021)",
         "Press relations officer, Opinion & Stratégie agency (2005-2009)"
        ]
       },
       {
        "titre": "Education",
        "liste": [
         "Master's in communication and public affairs, Lyrac Business School (2005)",
         "Bachelor's in economics, University of Bréval (2003)"
        ]
       },
       {
        "titre": "Skills",
        "liste": [
         "Lobbying",
         "Crisis communication",
         "Press relations",
         "Public speaking"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Think tanks : qui finance les voix qui doutent du climat ? – Le Quotidien des Territoires",
     "url": "quotidien-territoires.fr › enquetes › think-tanks-energie-financement",
     "extrait": "Notre enquête sur Énergie Libre, dont la déléguée générale Sabine Carpentier multiplie les tribunes. Ses comptes révèlent des financements venus surtout du secteur des carburants…",
     "page": {
      "type": "presse",
      "site": "Le Quotidien des Territoires",
      "domaine": "quotidien-territoires.fr",
      "titre": "Think tanks : qui finance les voix qui doutent du climat ?",
      "sousTitre": "Enquête",
      "date": "17 avril 2025",
      "encart": [
       [
        "Budget d'Énergie Libre",
        "1,8 million d'euros (2024)"
       ],
       [
        "Part venant d'entreprises de l'énergie",
        "Environ 85 %"
       ]
      ],
      "sections": [
       {
        "titre": "Une présence médiatique forte",
        "texte": "Depuis 2021, Sabine Carpentier, déléguée générale d'Énergie Libre, a signé plus de 120 tribunes. Ancienne responsable du lobbying d'un groupe pétrolier et gazier, elle n'a pas de formation scientifique, mais se présente comme « une citoyenne qui pose les questions qui dérangent »."
       },
       {
        "titre": "Des financeurs intéressés",
        "texte": "Les comptes de l'association montrent que l'essentiel de son budget provient d'entreprises du pétrole, du gaz et des carburants. Interrogée, Sabine Carpentier assure que « nos membres n'interviennent jamais dans nos prises de position ». Aucune des tribunes publiées n'a été relue par des climatologues."
       }
      ]
     }
    },
    "en": {
     "titre": "Think tanks: who funds the voices that doubt the climate? – Le Quotidien des Territoires",
     "url": "quotidien-territoires.fr › enquetes › think-tanks-energie-financement",
     "extrait": "Our investigation into Free Energy, whose executive director Sabine Carpentier publishes op-ed after op-ed. Its accounts show funding coming mostly from the fuel industry…",
     "page": {
      "type": "presse",
      "site": "Le Quotidien des Territoires",
      "domaine": "quotidien-territoires.fr",
      "titre": "Think tanks: who funds the voices that doubt the climate?",
      "sousTitre": "Investigation",
      "date": "17 April 2025",
      "encart": [
       [
        "Free Energy's budget",
        "€1.8 million (2024)"
       ],
       [
        "Share from energy companies",
        "About 85%"
       ]
      ],
      "sections": [
       {
        "titre": "A strong media presence",
        "texte": "Since 2021, Sabine Carpentier, executive director of Free Energy, has signed more than 120 op-eds. A former head of lobbying for an oil and gas group, she has no scientific training, but presents herself as 'a citizen who asks the awkward questions'."
       },
       {
        "titre": "Funders with a stake",
        "texte": "The association's accounts show that most of its budget comes from oil, gas and fuel companies. Asked about this, Sabine Carpentier insists that 'our members never interfere in our positions'. None of the published op-eds was reviewed by climatologists."
       }
      ]
     }
    }
   }
  ]
 },
 "p40-0": {
  "nom": "Hamid Haddad",
  "genre": "m",
  "cle": {
   "fr": "Chercheur en IA / sciences cognitives",
   "en": "AI / cognitive-science researcher"
  },
  "support": {
   "fr": "Débat sur un plateau télé",
   "en": "TV panel debate"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Hamid Haddad – Laboratoire Cognition et Machines – Université de Pontvallée",
     "url": "lcm.univ-pontvallee.fr › membres › hamid-haddad",
     "extrait": "Maître de conférences en informatique et sciences cognitives. Ses travaux portent sur ce que les grands modèles de langage représentent réellement à l'intérieur de leurs calculs…",
     "page": {
      "type": "institution",
      "site": "Laboratoire Cognition et Machines (LCM) – Université de Pontvallée",
      "domaine": "lcm.univ-pontvallee.fr",
      "titre": "Hamid Haddad",
      "sousTitre": "Maître de conférences, intelligence artificielle et sciences cognitives",
      "date": null,
      "encart": [
       [
        "Équipe",
        "Représentations et raisonnement"
       ],
       [
        "Thèse",
        "2014, Catégorisation chez l'enfant et dans les réseaux de neurones artificiels"
       ],
       [
        "Enseignement",
        "Apprentissage automatique, philosophie de l'esprit"
       ]
      ],
      "sections": [
       {
        "titre": "Recherches",
        "texte": "Hamid Haddad compare le fonctionnement des réseaux de neurones artificiels à celui de la cognition humaine. Il développe des méthodes pour « ouvrir la boîte noire » des grands modèles de langage et tester ce qu'ils représentent vraiment. Il s'intéresse aussi à la manière dont on mesure la compréhension et la conscience chez l'humain et l'animal."
       },
       {
        "titre": "Projets en cours",
        "liste": [
         "Sonder les représentations internes des modèles de langage",
         "Tests de compréhension : comparer enfants, adultes et machines",
         "Atelier interdisciplinaire IA et philosophie de l'esprit"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Hamid Haddad – Cognition and Machines Laboratory – University of Pontvallée",
     "url": "lcm.univ-pontvallee.fr › members › hamid-haddad",
     "extrait": "Associate professor in computer science and cognitive science. His work looks at what large language models actually represent inside their computations…",
     "page": {
      "type": "institution",
      "site": "Cognition and Machines Laboratory (LCM) – University of Pontvallée",
      "domaine": "lcm.univ-pontvallee.fr",
      "titre": "Hamid Haddad",
      "sousTitre": "Associate professor, artificial intelligence and cognitive science",
      "date": null,
      "encart": [
       [
        "Team",
        "Representations and reasoning"
       ],
       [
        "PhD",
        "2014, Categorisation in children and in artificial neural networks"
       ],
       [
        "Teaching",
        "Machine learning, philosophy of mind"
       ]
      ],
      "sections": [
       {
        "titre": "Research",
        "texte": "Hamid Haddad compares how artificial neural networks work with how human cognition works. He develops methods to 'open the black box' of large language models and test what they really represent. He is also interested in how understanding and consciousness are measured in humans and animals."
       },
       {
        "titre": "Current projects",
        "liste": [
         "Probing the internal representations of language models",
         "Comprehension tests: comparing children, adults and machines",
         "Interdisciplinary workshop on AI and philosophy of mind"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Conférence : « Que se passe-t-il dans la tête d'une IA ? » – Cité des savoirs – Vidéoflux",
     "url": "videoflux.com › @citedessavoirs › conference-ia-haddad",
     "extrait": "Conférence filmée de Hamid Haddad, chercheur en IA et cognition, enregistrée à la Cité des savoirs de Pontvallée. 214 000 vues…",
     "page": {
      "type": "video",
      "site": "Vidéoflux",
      "domaine": "videoflux.com",
      "titre": "Cité des savoirs de Pontvallée",
      "sousTitre": "Chaîne officielle · 96 k abonnés",
      "date": null,
      "encart": [
       [
        "Vidéo à la une",
        "Que se passe-t-il dans la tête d'une IA ?"
       ],
       [
        "Intervenant",
        "Hamid Haddad, LCM, Université de Pontvallée"
       ],
       [
        "Durée",
        "1 h 12"
       ],
       [
        "Vues",
        "214 000"
       ]
      ],
      "sections": [
       {
        "titre": "Description",
        "texte": "Les assistants conversationnels écrivent, traduisent, résument. Mais comment fonctionnent-ils ? Hamid Haddad, maître de conférences en intelligence artificielle et sciences cognitives, présente les méthodes qu'utilisent les chercheurs pour étudier l'intérieur de ces modèles, et les questions qui restent difficiles à trancher. Les références des études citées sont en description."
       },
       {
        "titre": "Autres vidéos de la chaîne",
        "liste": [
         "Le cerveau des pieuvres",
         "Comment naît une étoile ?",
         "Les maths du hasard"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Talk: 'What goes on inside an AI's head?' – Cité des savoirs – Vidéoflux",
     "url": "videoflux.com › @citedessavoirs › conference-ia-haddad",
     "extrait": "Filmed talk by Hamid Haddad, AI and cognition researcher, recorded at the Cité des savoirs in Pontvallée. 214,000 views…",
     "page": {
      "type": "video",
      "site": "Vidéoflux",
      "domaine": "videoflux.com",
      "titre": "Cité des savoirs de Pontvallée",
      "sousTitre": "Official channel · 96k subscribers",
      "date": null,
      "encart": [
       [
        "Featured video",
        "What goes on inside an AI's head?"
       ],
       [
        "Speaker",
        "Hamid Haddad, LCM, University of Pontvallée"
       ],
       [
        "Length",
        "1 h 12"
       ],
       [
        "Views",
        "214,000"
       ]
      ],
      "sections": [
       {
        "titre": "Description",
        "texte": "Chat assistants write, translate and summarise. But how do they work? Hamid Haddad, associate professor in artificial intelligence and cognitive science, presents the methods researchers use to study the inside of these models, and the questions that remain hard to settle. References for the studies cited are in the description."
       },
       {
        "titre": "More videos from this channel",
        "liste": [
         "The octopus brain",
         "How is a star born?",
         "The maths of chance"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Hamid Haddad – Maître de conférences en IA et sciences cognitives | ProLink",
     "url": "prolink.com › in › hamid-haddad",
     "extrait": "Université de Pontvallée · Apprentissage automatique · Sciences cognitives · Interprétabilité des modèles de langage…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Hamid Haddad",
      "sousTitre": "Maître de conférences en IA et sciences cognitives, Université de Pontvallée",
      "date": null,
      "encart": [
       [
        "Relations",
        "1 100+"
       ],
       [
        "Langues",
        "Français, anglais, arabe"
       ]
      ],
      "sections": [
       {
        "titre": "Expérience",
        "liste": [
         "Maître de conférences, LCM, Université de Pontvallée (depuis 2018)",
         "Chercheur postdoctoral, Institut de neurosciences computationnelles d'Alvéra (2015-2018)",
         "Ingénieur en apprentissage automatique, start-up Lexinova (2009-2010)"
        ]
       },
       {
        "titre": "Formation",
        "liste": [
         "Doctorat en sciences cognitives, Université de Pontvallée (2014)",
         "Diplôme d'ingénieur en informatique (2009)"
        ]
       },
       {
        "titre": "Activités",
        "liste": [
         "Membre du comité d'éthique numérique de la région",
         "Relecteur pour des revues d'IA et de psychologie"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Hamid Haddad – Associate professor in AI and cognitive science | ProLink",
     "url": "prolink.com › in › hamid-haddad",
     "extrait": "University of Pontvallée · Machine learning · Cognitive science · Interpretability of language models…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Hamid Haddad",
      "sousTitre": "Associate professor in AI and cognitive science, University of Pontvallée",
      "date": null,
      "encart": [
       [
        "Connections",
        "1,100+"
       ],
       [
        "Languages",
        "French, English, Arabic"
       ]
      ],
      "sections": [
       {
        "titre": "Experience",
        "liste": [
         "Associate professor, LCM, University of Pontvallée (since 2018)",
         "Postdoctoral researcher, Alvéra Institute of Computational Neuroscience (2015-2018)",
         "Machine learning engineer, Lexinova start-up (2009-2010)"
        ]
       },
       {
        "titre": "Education",
        "liste": [
         "PhD in cognitive science, University of Pontvallée (2014)",
         "Engineering degree in computer science (2009)"
        ]
       },
       {
        "titre": "Activities",
        "liste": [
         "Member of the regional digital ethics committee",
         "Reviewer for AI and psychology journals"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p41-1": {
  "nom": "Loïc Kowalski",
  "genre": "m",
  "cle": {
   "fr": "Ingénieur des systèmes GPS",
   "en": "GPS systems engineer"
  },
  "support": {
   "fr": "Conférence filmée",
   "en": "Filmed talk"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Loïc Kowalski – Ingénieur navigation par satellite | ProLink",
     "url": "prolink.com › in › loic-kowalski",
     "extrait": "Ingénieur systèmes à l'Agence spatiale de navigation et d'observation (ASNO). 16 ans d'expérience sur les horloges atomiques embarquées et la précision du positionnement…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Loïc Kowalski",
      "sousTitre": "Ingénieur systèmes, navigation par satellite · ASNO",
      "date": null,
      "encart": [
       [
        "Relations",
        "800+"
       ],
       [
        "Spécialité",
        "Synchronisation temps-fréquence"
       ]
      ],
      "sections": [
       {
        "titre": "À propos",
        "texte": "Je m'assure que les horloges des satellites de navigation restent à l'heure exacte."
       },
       {
        "titre": "Expérience",
        "liste": [
         "Ingénieur systèmes, segment sol de navigation, ASNO (depuis 2014)",
         "Ingénieur horloges atomiques embarquées, Astréa Systèmes (2009-2014)",
         "Stage de fin d'études, laboratoire de métrologie du temps (2008)"
        ]
       },
       {
        "titre": "Formation",
        "liste": [
         "Diplôme d'ingénieur, École nationale d'ingénierie spatiale de Toulouse-Garonne (2009)",
         "Classes préparatoires, physique-chimie"
        ]
       },
       {
        "titre": "Compétences",
        "liste": [
         "Navigation par satellite",
         "Horloges atomiques",
         "Traitement du signal",
         "Calcul d'orbites"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Loïc Kowalski – Satellite navigation engineer | ProLink",
     "url": "prolink.com › in › loic-kowalski",
     "extrait": "Systems engineer at the Agency for Space Navigation and Observation (ASNO). 16 years of experience with on-board atomic clocks and positioning accuracy…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Loïc Kowalski",
      "sousTitre": "Systems engineer, satellite navigation · ASNO",
      "date": null,
      "encart": [
       [
        "Connections",
        "800+"
       ],
       [
        "Specialty",
        "Time-frequency synchronisation"
       ]
      ],
      "sections": [
       {
        "titre": "About",
        "texte": "I make sure the clocks on navigation satellites keep exactly the right time."
       },
       {
        "titre": "Experience",
        "liste": [
         "Systems engineer, navigation ground segment, ASNO (since 2014)",
         "On-board atomic clock engineer, Astréa Systèmes (2009-2014)",
         "Final-year internship, time metrology laboratory (2008)"
        ]
       },
       {
        "titre": "Education",
        "liste": [
         "Engineering degree, Toulouse-Garonne National School of Space Engineering (2009)",
         "Preparatory classes, physics and chemistry"
        ]
       },
       {
        "titre": "Skills",
        "liste": [
         "Satellite navigation",
         "Atomic clocks",
         "Signal processing",
         "Orbit computation"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Nos experts : Loïc Kowalski, synchronisation des horloges – ASNO",
     "url": "asno-espace.eu › nos-metiers › portraits › loic-kowalski",
     "extrait": "Au centre de contrôle de l'ASNO, Loïc Kowalski veille à ce que les horloges des satellites de navigation restent synchronisées au milliardième de seconde près…",
     "page": {
      "type": "institution",
      "site": "Agence spatiale de navigation et d'observation (ASNO)",
      "domaine": "asno-espace.eu",
      "titre": "Loïc Kowalski",
      "sousTitre": "Ingénieur systèmes, centre de contrôle de la constellation de navigation",
      "date": null,
      "encart": [
       [
        "Service",
        "Temps et orbites"
       ],
       [
        "Site",
        "Centre de contrôle de Saint-Aubrac"
       ],
       [
        "À l'ASNO depuis",
        "2014"
       ]
      ],
      "sections": [
       {
        "titre": "Son métier",
        "texte": "Chaque satellite de navigation emporte des horloges atomiques. Pour que votre téléphone calcule sa position, ces horloges doivent rester parfaitement d'accord entre elles et avec le sol. Loïc Kowalski et son équipe calculent chaque jour les écarts, préparent les messages de correction envoyés aux satellites et vérifient la précision obtenue par les utilisateurs."
       },
       {
        "titre": "En chiffres",
        "liste": [
         "28 satellites suivis en continu",
         "Précision visée : quelques nanosecondes",
         "Mises à jour envoyées plusieurs fois par jour"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Our experts: Loïc Kowalski, clock synchronisation – ASNO",
     "url": "asno-espace.eu › our-jobs › profiles › loic-kowalski",
     "extrait": "At ASNO's control centre, Loïc Kowalski makes sure the navigation satellites' clocks stay synchronised to within a billionth of a second…",
     "page": {
      "type": "institution",
      "site": "Agency for Space Navigation and Observation (ASNO)",
      "domaine": "asno-espace.eu",
      "titre": "Loïc Kowalski",
      "sousTitre": "Systems engineer, navigation constellation control centre",
      "date": null,
      "encart": [
       [
        "Department",
        "Time and orbits"
       ],
       [
        "Site",
        "Saint-Aubrac control centre"
       ],
       [
        "At ASNO since",
        "2014"
       ]
      ],
      "sections": [
       {
        "titre": "His job",
        "texte": "Every navigation satellite carries atomic clocks. For your phone to work out its position, those clocks must stay in perfect agreement with each other and with the ground. Every day, Loïc Kowalski and his team compute the offsets, prepare the correction messages sent to the satellites and check the accuracy users actually get."
       },
       {
        "titre": "In figures",
        "liste": [
         "28 satellites tracked continuously",
         "Target accuracy: a few nanoseconds",
         "Updates sent several times a day"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Kowalski Plomberie – Plombier chauffagiste à Lens – Devis gratuit",
     "url": "kowalski-plomberie-lens.fr › accueil",
     "extrait": "Loïc Kowalski, artisan plombier chauffagiste depuis 2006. Dépannage rapide, installation de chaudières, salles de bains clés en main…",
     "page": {
      "type": "commerce",
      "site": "Kowalski Plomberie",
      "domaine": "kowalski-plomberie-lens.fr",
      "titre": "Kowalski Plomberie",
      "sousTitre": "Loïc Kowalski, artisan plombier chauffagiste à Lens",
      "date": null,
      "encart": [
       [
        "Zone",
        "Lens et 30 km alentour"
       ],
       [
        "Dépannage",
        "7 j/7, 8 h-20 h"
       ],
       [
        "Déplacement",
        "Offert pour tout devis"
       ]
      ],
      "sections": [
       {
        "titre": "Qui suis-je ?",
        "texte": "Artisan installé depuis 2006, je m'occupe de vos fuites, de vos chaudières et de la rénovation de vos salles de bains. Travail soigné, devis clair et sans surprise, intervention rapide en cas d'urgence."
       },
       {
        "titre": "Nos services",
        "liste": [
         "Dépannage de fuites et débouchage",
         "Installation et entretien de chaudières gaz",
         "Pompes à chaleur",
         "Rénovation de salles de bains clés en main"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Kowalski Plomberie – Plumber and heating engineer in Lens – Free quote",
     "url": "kowalski-plomberie-lens.fr › home",
     "extrait": "Loïc Kowalski, self-employed plumber and heating engineer since 2006. Fast call-outs, boiler installation, turnkey bathrooms…",
     "page": {
      "type": "commerce",
      "site": "Kowalski Plomberie",
      "domaine": "kowalski-plomberie-lens.fr",
      "titre": "Kowalski Plomberie",
      "sousTitre": "Loïc Kowalski, plumber and heating engineer in Lens",
      "date": null,
      "encart": [
       [
        "Area",
        "Lens and 30 km around"
       ],
       [
        "Call-outs",
        "7 days a week, 8 am-8 pm"
       ],
       [
        "Travel",
        "Free for any quote"
       ]
      ],
      "sections": [
       {
        "titre": "Who am I?",
        "texte": "A tradesman in business since 2006, I take care of your leaks, your boilers and your bathroom renovations. Careful work, clear quotes with no surprises, fast response in emergencies."
       },
       {
        "titre": "Our services",
        "liste": [
         "Leak repairs and unblocking",
         "Gas boiler installation and servicing",
         "Heat pumps",
         "Turnkey bathroom renovations"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p42-1": {
  "nom": "Étienne Garnier",
  "genre": "m",
  "cle": {
   "fr": "Physicien nucléaire",
   "en": "Nuclear physicist"
  },
  "support": {
   "fr": "Interview dans un quotidien",
   "en": "Daily newspaper interview"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Étienne Garnier (physicien) – Encyclopédia Libre",
     "url": "encyclopedia-libre.org › wiki › Étienne_Garnier_(physicien)",
     "extrait": "Étienne Garnier, né en 1968 à Besançon, est un physicien nucléaire français, spécialiste de la fission et des neutrons, directeur de recherche au Centre de recherche nucléaire du Val-de-Brenne…",
     "page": {
      "type": "encyclo",
      "site": "Encyclopédia Libre",
      "domaine": "encyclopedia-libre.org",
      "titre": "Étienne Garnier (physicien)",
      "sousTitre": "Physicien nucléaire français",
      "date": null,
      "encart": [
       [
        "Naissance",
        "1968, Besançon"
       ],
       [
        "Domaine",
        "Physique nucléaire (fission, neutrons)"
       ],
       [
        "Institution",
        "Centre de recherche nucléaire du Val-de-Brenne"
       ],
       [
        "Distinction",
        "Prix Lavoisier-Duclos de physique (2016)"
       ]
      ],
      "sections": [
       {
        "titre": "Biographie",
        "texte": "Après une thèse sur les réactions de fission soutenue en 1995, Étienne Garnier entre au Centre de recherche nucléaire du Val-de-Brenne, où il dirige depuis 2010 le service de physique des réacteurs. Ses travaux portent sur la façon dont les neutrons provoquent et entretiennent la fission de l'uranium, et sur la mesure précise des isotopes."
       },
       {
        "titre": "Ouvrages",
        "liste": [
         "Le Neutron, une histoire de la physique nucléaire (2012)",
         "Physique des réacteurs, manuel universitaire (2018)"
        ]
       },
       {
        "titre": "Homonymie",
        "texte": "Ne pas confondre avec Étienne Garnier, éducateur de rugby à Pontarlier."
       }
      ]
     }
    },
    "en": {
     "titre": "Étienne Garnier (physicist) – Encyclopédia Libre",
     "url": "encyclopedia-libre.org › wiki › Étienne_Garnier_(physicist)",
     "extrait": "Étienne Garnier, born in 1968 in Besançon, is a French nuclear physicist specialising in fission and neutrons, research director at the Val-de-Brenne Nuclear Research Centre…",
     "page": {
      "type": "encyclo",
      "site": "Encyclopédia Libre",
      "domaine": "encyclopedia-libre.org",
      "titre": "Étienne Garnier (physicist)",
      "sousTitre": "French nuclear physicist",
      "date": null,
      "encart": [
       [
        "Born",
        "1968, Besançon"
       ],
       [
        "Field",
        "Nuclear physics (fission, neutrons)"
       ],
       [
        "Institution",
        "Val-de-Brenne Nuclear Research Centre"
       ],
       [
        "Award",
        "Lavoisier-Duclos Prize in Physics (2016)"
       ]
      ],
      "sections": [
       {
        "titre": "Biography",
        "texte": "After a PhD on fission reactions defended in 1995, Étienne Garnier joined the Val-de-Brenne Nuclear Research Centre, where he has headed the reactor physics department since 2010. His work deals with how neutrons trigger and sustain the fission of uranium, and with the precise measurement of isotopes."
       },
       {
        "titre": "Books",
        "liste": [
         "The Neutron: a history of nuclear physics (2012)",
         "Reactor Physics, university textbook (2018)"
        ]
       },
       {
        "titre": "Disambiguation",
        "texte": "Not to be confused with Étienne Garnier, rugby coach in Pontarlier."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Service de physique des réacteurs – Équipe – CRN Val-de-Brenne",
     "url": "crn-valdebrenne.fr › recherche › physique-reacteurs › equipe",
     "extrait": "Chef de service : Étienne Garnier, directeur de recherche. Physique des neutrons, données nucléaires, géochimie isotopique de l'uranium…",
     "page": {
      "type": "institution",
      "site": "Centre de recherche nucléaire du Val-de-Brenne (CRNVB)",
      "domaine": "crn-valdebrenne.fr",
      "titre": "Étienne Garnier",
      "sousTitre": "Directeur de recherche, chef du service de physique des réacteurs",
      "date": null,
      "encart": [
       [
        "Service",
        "Physique des réacteurs"
       ],
       [
        "Effectif",
        "34 chercheurs et ingénieurs"
       ],
       [
        "Thèse",
        "1995, Rendement des réactions de fission de l'uranium"
       ]
      ],
      "sections": [
       {
        "titre": "Thèmes du service",
        "texte": "L'équipe dirigée par Étienne Garnier mesure la façon dont les noyaux d'uranium et de plutonium réagissent aux neutrons. Ces données servent à concevoir et à contrôler les réacteurs, mais aussi à dater des roches et à étudier l'histoire des isotopes de l'uranium sur Terre."
       },
       {
        "titre": "Publications récentes du chef de service",
        "liste": [
         "Rôle de l'eau comme modérateur : nouvelles mesures (2023)",
         "Évolution de la composition isotopique de l'uranium au cours des temps géologiques (2021)",
         "Données de fission de l'uranium 235 : une révision (2019)"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Reactor Physics Department – Team – Val-de-Brenne NRC",
     "url": "crn-valdebrenne.fr › research › reactor-physics › team",
     "extrait": "Head of department: Étienne Garnier, research director. Neutron physics, nuclear data, isotope geochemistry of uranium…",
     "page": {
      "type": "institution",
      "site": "Val-de-Brenne Nuclear Research Centre (CRNVB)",
      "domaine": "crn-valdebrenne.fr",
      "titre": "Étienne Garnier",
      "sousTitre": "Research director, head of the Reactor Physics Department",
      "date": null,
      "encart": [
       [
        "Department",
        "Reactor physics"
       ],
       [
        "Staff",
        "34 researchers and engineers"
       ],
       [
        "PhD",
        "1995, Yields of uranium fission reactions"
       ]
      ],
      "sections": [
       {
        "titre": "Department topics",
        "texte": "The team led by Étienne Garnier measures how uranium and plutonium nuclei react to neutrons. These data are used to design and control reactors, but also to date rocks and study the history of uranium isotopes on Earth."
       },
       {
        "titre": "Recent publications by the head of department",
        "liste": [
         "The role of water as a moderator: new measurements (2023)",
         "How the isotopic composition of uranium changed over geological time (2021)",
         "Uranium-235 fission data: a revision (2019)"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Rugby : Étienne Garnier, 40 ans de bénévolat au club de Pontarlier – L'Est Comtois",
     "url": "lestcomtois.fr › sport › rugby › etienne-garnier-benevole",
     "extrait": "Ancien demi de mêlée, Étienne Garnier entraîne aujourd'hui les moins de 12 ans du RC Pontarlier. Portrait d'un passionné…",
     "page": {
      "type": "presse",
      "site": "L'Est Comtois",
      "domaine": "lestcomtois.fr",
      "titre": "Étienne Garnier, 40 ans de bénévolat au RC Pontarlier",
      "sousTitre": "Sport local – Rugby",
      "date": "3 mars 2024",
      "encart": [
       [
        "Âge",
        "58 ans"
       ],
       [
        "Club",
        "RC Pontarlier"
       ],
       [
        "Rôle",
        "Éducateur des moins de 12 ans"
       ]
      ],
      "sections": [
       {
        "titre": "Une vie de club",
        "texte": "Ancien demi de mêlée du RC Pontarlier, Étienne Garnier a raccroché les crampons en 1999 mais n'a jamais quitté le bord du terrain. Chauffeur-livreur la semaine, il entraîne chaque mercredi et samedi une trentaine d'enfants. « Le rugby m'a tout appris, je rends ce qu'on m'a donné », sourit-il. Le club lui a remis la médaille du bénévolat lors de son tournoi annuel."
       }
      ]
     }
    },
    "en": {
     "titre": "Rugby: Étienne Garnier, 40 years of volunteering at the Pontarlier club – L'Est Comtois",
     "url": "lestcomtois.fr › sport › rugby › etienne-garnier-benevole",
     "extrait": "A former scrum-half, Étienne Garnier now coaches the under-12s at RC Pontarlier. Profile of an enthusiast…",
     "page": {
      "type": "presse",
      "site": "L'Est Comtois",
      "domaine": "lestcomtois.fr",
      "titre": "Étienne Garnier, 40 years of volunteering at RC Pontarlier",
      "sousTitre": "Local sport – Rugby",
      "date": "3 March 2024",
      "encart": [
       [
        "Age",
        "58"
       ],
       [
        "Club",
        "RC Pontarlier"
       ],
       [
        "Role",
        "Under-12s coach"
       ]
      ],
      "sections": [
       {
        "titre": "A life at the club",
        "texte": "A former scrum-half for RC Pontarlier, Étienne Garnier hung up his boots in 1999 but never left the touchline. A delivery driver during the week, he coaches around thirty children every Wednesday and Saturday. 'Rugby taught me everything, I'm giving back what I was given,' he smiles. The club presented him with its volunteering medal at its annual tournament."
       }
      ]
     }
    }
   }
  ]
 },
 "p43-1": {
  "nom": "Samuel Delattre",
  "genre": "m",
  "cle": {
   "fr": "Chaîne « Physique pour tous » (880 k abonnés)",
   "en": "'Physics for Everyone' channel (880k subscribers)"
  },
  "support": {
   "fr": "Vidéo en ligne",
   "en": "Online video"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Physique pour tous – Samuel Delattre – Vidéoflux",
     "url": "videoflux.com › @physiquepourtous",
     "extrait": "Chaîne de vulgarisation tenue par Samuel Delattre, docteur en physique de l'atmosphère. 880 k abonnés. Toutes les sources sont en description…",
     "page": {
      "type": "video",
      "site": "Vidéoflux",
      "domaine": "videoflux.com",
      "titre": "Physique pour tous",
      "sousTitre": "Chaîne de Samuel Delattre · 880 k abonnés · 214 vidéos",
      "date": null,
      "encart": [
       [
        "Créée en",
        "2017"
       ],
       [
        "Abonnés",
        "880 000"
       ],
       [
        "Rythme",
        "Une vidéo toutes les deux semaines"
       ]
      ],
      "sections": [
       {
        "titre": "À propos",
        "texte": "Je m'appelle Samuel Delattre, j'ai un doctorat en physique de l'atmosphère et j'ai travaillé six ans en laboratoire sur les rayonnements produits par les orages. Ici, j'explique la physique sans formules compliquées, mais sans raccourcis faux. Chaque vidéo est relue par un ou une collègue chercheur, et les articles scientifiques utilisés sont listés en description."
       },
       {
        "titre": "Vidéos populaires",
        "liste": [
         "Pourquoi le ciel est-il bleu ?",
         "Les rayons cosmiques nous traversent en ce moment",
         "Comment fonctionne un éclair ?",
         "Ce que les satellites voient au-dessus des orages"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Physics for Everyone – Samuel Delattre – Vidéoflux",
     "url": "videoflux.com › @physiquepourtous",
     "extrait": "Science-communication channel run by Samuel Delattre, PhD in atmospheric physics. 880k subscribers. All sources are in the description…",
     "page": {
      "type": "video",
      "site": "Vidéoflux",
      "domaine": "videoflux.com",
      "titre": "Physics for Everyone",
      "sousTitre": "Samuel Delattre's channel · 880k subscribers · 214 videos",
      "date": null,
      "encart": [
       [
        "Created",
        "2017"
       ],
       [
        "Subscribers",
        "880,000"
       ],
       [
        "Schedule",
        "One video every two weeks"
       ]
      ],
      "sections": [
       {
        "titre": "About",
        "texte": "My name is Samuel Delattre, I have a PhD in atmospheric physics and I spent six years in a lab working on the radiation produced by thunderstorms. Here I explain physics without complicated formulas, but without misleading shortcuts. Every video is checked by a fellow researcher, and the scientific papers used are listed in the description."
       },
       {
        "titre": "Popular videos",
        "liste": [
         "Why is the sky blue?",
         "Cosmic rays are passing through you right now",
         "How does lightning work?",
         "What satellites see above thunderstorms"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Samuel Delattre – Profil auteur – SciIndex",
     "url": "sciindex.org › auteurs › delattre-samuel",
     "extrait": "12 publications · 540 citations · Thèmes : électricité atmosphérique, rayonnements de haute énergie des orages…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Samuel Delattre",
      "sousTitre": "Physique de l'atmosphère · ancien chercheur, Laboratoire de physique de l'atmosphère de Clairval",
      "date": null,
      "encart": [
       [
        "Publications",
        "12"
       ],
       [
        "Citations",
        "540"
       ],
       [
        "Indice h",
        "9"
       ],
       [
        "Période",
        "2012-2019"
       ]
      ],
      "sections": [
       {
        "titre": "Thèse",
        "texte": "2015, Rayonnements de haute énergie émis par les nuages d'orage : mesures en avion et par satellite (Université de Clairval)."
       },
       {
        "titre": "Articles les plus cités",
        "liste": [
         "Flashs gamma terrestres observés depuis l'orbite (2016, 188 citations)",
         "Accélération d'électrons dans les champs électriques des orages (2017, 121 citations)",
         "Campagne de mesures aéroportées au-dessus des orages méditerranéens (2018, 77 citations)"
        ]
       },
       {
        "titre": "Remarque",
        "texte": "Profil sans nouvelle publication depuis 2019. L'auteur indique se consacrer à la diffusion des sciences."
       }
      ]
     }
    },
    "en": {
     "titre": "Samuel Delattre – Author profile – SciIndex",
     "url": "sciindex.org › authors › delattre-samuel",
     "extrait": "12 publications · 540 citations · Topics: atmospheric electricity, high-energy radiation from thunderstorms…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Samuel Delattre",
      "sousTitre": "Atmospheric physics · former researcher, Clairval Atmospheric Physics Laboratory",
      "date": null,
      "encart": [
       [
        "Publications",
        "12"
       ],
       [
        "Citations",
        "540"
       ],
       [
        "h-index",
        "9"
       ],
       [
        "Period",
        "2012-2019"
       ]
      ],
      "sections": [
       {
        "titre": "PhD",
        "texte": "2015, High-energy radiation emitted by thunderclouds: aircraft and satellite measurements (University of Clairval)."
       },
       {
        "titre": "Most cited papers",
        "liste": [
         "Terrestrial gamma-ray flashes observed from orbit (2016, 188 citations)",
         "Electron acceleration in thunderstorm electric fields (2017, 121 citations)",
         "Airborne measurement campaign above Mediterranean thunderstorms (2018, 77 citations)"
        ]
       },
       {
        "titre": "Note",
        "texte": "No new publication since 2019. The author states he now focuses on science communication."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Du labo à Vidéoflux : ces docteurs qui vulgarisent – Le Courrier de l'Ouest-Express",
     "url": "courrier-ouest-express.fr › culture › numerique › docteurs-vulgarisateurs",
     "extrait": "Samuel Delattre a quitté son poste de chercheur en 2019 pour se consacrer à sa chaîne « Physique pour tous ». Il vient de recevoir le prix Jeunes Esprits de la vulgarisation…",
     "page": {
      "type": "presse",
      "site": "Le Courrier de l'Ouest-Express",
      "domaine": "courrier-ouest-express.fr",
      "titre": "Du labo à Vidéoflux : ces docteurs qui vulgarisent",
      "sousTitre": "Numérique – Sciences",
      "date": "22 novembre 2024",
      "encart": [
       [
        "Chaîne",
        "Physique pour tous"
       ],
       [
        "Prix",
        "Jeunes Esprits de la vulgarisation 2024"
       ]
      ],
      "sections": [
       {
        "titre": "Le pari de Samuel Delattre",
        "texte": "Après une thèse et un contrat de chercheur sur l'électricité des orages, Samuel Delattre a choisi en 2019 de vivre de ses vidéos. « Je voulais toucher plus que les vingt lecteurs d'un article spécialisé », explique-t-il. Sa méthode : partir des publications scientifiques, les faire relire par d'anciens collègues et toujours citer ses sources."
       },
       {
        "titre": "Un modèle suivi",
        "texte": "Le jury du prix Jeunes Esprits salue « une rigueur rare et des explications accessibles dès le collège ». Plusieurs enseignants de physique utilisent ses vidéos en classe."
       }
      ]
     }
    },
    "en": {
     "titre": "From the lab to Vidéoflux: the PhDs who explain science – Le Courrier de l'Ouest-Express",
     "url": "courrier-ouest-express.fr › culture › numerique › docteurs-vulgarisateurs",
     "extrait": "Samuel Delattre left his research job in 2019 to focus on his channel 'Physics for Everyone'. He has just received the Young Minds science-communication prize…",
     "page": {
      "type": "presse",
      "site": "Le Courrier de l'Ouest-Express",
      "domaine": "courrier-ouest-express.fr",
      "titre": "From the lab to Vidéoflux: the PhDs who explain science",
      "sousTitre": "Digital – Science",
      "date": "22 November 2024",
      "encart": [
       [
        "Channel",
        "Physics for Everyone"
       ],
       [
        "Prize",
        "Young Minds science-communication prize 2024"
       ]
      ],
      "sections": [
       {
        "titre": "Samuel Delattre's gamble",
        "texte": "After a PhD and a research contract on thunderstorm electricity, Samuel Delattre chose in 2019 to make a living from his videos. 'I wanted to reach more than the twenty readers of a specialist paper,' he explains. His method: start from scientific publications, have former colleagues check his scripts and always cite his sources."
       },
       {
        "titre": "A model others follow",
        "texte": "The Young Minds jury praises 'rare rigour and explanations accessible from middle school'. Several physics teachers use his videos in class."
       }
      ]
     }
    }
   }
  ]
 },
 "p45-1": {
  "nom": "Sarah Chauvin",
  "genre": "f",
  "cle": {
   "fr": "Astronome (mécanique céleste)",
   "en": "Astronomer (celestial mechanics)"
  },
  "support": {
   "fr": "Article dans un magazine",
   "en": "Magazine article"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Sarah Chauvin – Astronome – Observatoire du Pic-Sauvage",
     "url": "obs-picsauvage.fr › equipes › dynamique-systeme-solaire › chauvin",
     "extrait": "Astronome, équipe Dynamique du système solaire. Spécialiste des mouvements des planètes et de leur rotation, en particulier celle de Mercure…",
     "page": {
      "type": "institution",
      "site": "Observatoire du Pic-Sauvage",
      "domaine": "obs-picsauvage.fr",
      "titre": "Sarah Chauvin",
      "sousTitre": "Astronome titulaire, mécanique céleste",
      "date": null,
      "encart": [
       [
        "Équipe",
        "Dynamique du système solaire"
       ],
       [
        "Thèse",
        "2006, Rotation et orbite de Mercure : une résonance 3:2"
       ],
       [
        "Mission",
        "Membre de l'équipe scientifique d'une sonde vers Mercure"
       ]
      ],
      "sections": [
       {
        "titre": "Recherches",
        "texte": "Sarah Chauvin calcule les mouvements des planètes, de leurs satellites et de leur rotation, à partir des lois de la gravitation. Elle compare ces calculs aux observations des sondes spatiales pour mesurer finement la rotation de Mercure et en déduire des informations sur son intérieur."
       },
       {
        "titre": "Publications récentes",
        "liste": [
         "Libration de Mercure mesurée par radar (2024)",
         "Éphémérides des planètes intérieures, nouvelle version (2022)",
         "Marées et rotation des planètes proches de leur étoile (2020)"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Sarah Chauvin – Astronomer – Pic-Sauvage Observatory",
     "url": "obs-picsauvage.fr › teams › solar-system-dynamics › chauvin",
     "extrait": "Astronomer, Solar System Dynamics team. Specialist in planetary motion and rotation, especially Mercury's…",
     "page": {
      "type": "institution",
      "site": "Pic-Sauvage Observatory",
      "domaine": "obs-picsauvage.fr",
      "titre": "Sarah Chauvin",
      "sousTitre": "Tenured astronomer, celestial mechanics",
      "date": null,
      "encart": [
       [
        "Team",
        "Solar System Dynamics"
       ],
       [
        "PhD",
        "2006, Mercury's rotation and orbit: a 3:2 resonance"
       ],
       [
        "Mission",
        "Member of the science team of a probe to Mercury"
       ]
      ],
      "sections": [
       {
        "titre": "Research",
        "texte": "Sarah Chauvin computes the motions of planets, their moons and their rotation, based on the laws of gravitation. She compares these calculations with observations from space probes to measure Mercury's rotation precisely and learn about its interior."
       },
       {
        "titre": "Recent publications",
        "liste": [
         "Mercury's libration measured by radar (2024)",
         "Ephemerides of the inner planets, new version (2022)",
         "Tides and rotation of planets close to their star (2020)"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Sarah Chauvin – Profil auteur – SciIndex",
     "url": "sciindex.org › auteurs › chauvin-sarah",
     "extrait": "63 publications · 2 910 citations · Thèmes : mécanique céleste, rotation de Mercure, éphémérides planétaires…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Sarah Chauvin",
      "sousTitre": "Mécanique céleste · Observatoire du Pic-Sauvage",
      "date": null,
      "encart": [
       [
        "Publications",
        "63"
       ],
       [
        "Citations",
        "2 910"
       ],
       [
        "Indice h",
        "28"
       ],
       [
        "Première publication",
        "2004"
       ]
      ],
      "sections": [
       {
        "titre": "Thèmes principaux",
        "liste": [
         "Mécanique céleste",
         "Rotation des planètes",
         "Mercure",
         "Éphémérides planétaires"
        ]
       },
       {
        "titre": "Articles les plus cités",
        "liste": [
         "La résonance spin-orbite de Mercure revisitée (2009, 356 citations)",
         "Un modèle précis de l'orbite des planètes intérieures (2014, 290 citations)",
         "Rotation de Mercure et taille de son noyau (2017, 245 citations)"
        ]
       },
       {
        "titre": "Revues",
        "liste": [
         "Celestial Dynamics Letters",
         "Revue de planétologie"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Sarah Chauvin – Author profile – SciIndex",
     "url": "sciindex.org › authors › chauvin-sarah",
     "extrait": "63 publications · 2,910 citations · Topics: celestial mechanics, Mercury's rotation, planetary ephemerides…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Sarah Chauvin",
      "sousTitre": "Celestial mechanics · Pic-Sauvage Observatory",
      "date": null,
      "encart": [
       [
        "Publications",
        "63"
       ],
       [
        "Citations",
        "2,910"
       ],
       [
        "h-index",
        "28"
       ],
       [
        "First publication",
        "2004"
       ]
      ],
      "sections": [
       {
        "titre": "Main topics",
        "liste": [
         "Celestial mechanics",
         "Planetary rotation",
         "Mercury",
         "Planetary ephemerides"
        ]
       },
       {
        "titre": "Most cited papers",
        "liste": [
         "Mercury's spin-orbit resonance revisited (2009, 356 citations)",
         "An accurate model of the inner planets' orbits (2014, 290 citations)",
         "Mercury's rotation and the size of its core (2017, 245 citations)"
        ]
       },
       {
        "titre": "Journals",
        "liste": [
         "Celestial Dynamics Letters",
         "Revue de planétologie"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "L'atelier de Sarah Chauvin – Illustratrice jeunesse",
     "url": "sarahchauvin-illustration.fr › a-propos",
     "extrait": "Illustratrice d'albums pour enfants installée à Nantes. Aquarelles, animaux et contes revisités. Prochaines dédicaces…",
     "page": {
      "type": "blog",
      "site": "L'atelier de Sarah Chauvin",
      "domaine": "sarahchauvin-illustration.fr",
      "titre": "Sarah Chauvin",
      "sousTitre": "Illustratrice jeunesse",
      "date": null,
      "encart": [
       [
        "Ville",
        "Nantes"
       ],
       [
        "Albums publiés",
        "14"
       ],
       [
        "Technique",
        "Aquarelle et crayons de couleur"
       ]
      ],
      "sections": [
       {
        "titre": "Bonjour !",
        "texte": "Je dessine depuis toute petite et j'illustre des albums pour enfants depuis 2012. J'aime les animaux, les forêts et les contes que l'on raconte le soir. Sur ce blog, je partage mes carnets de croquis, les coulisses de mes livres et les dates de mes rencontres en librairie."
       },
       {
        "titre": "Derniers albums",
        "liste": [
         "Le Hérisson qui voulait voir la mer (2024)",
         "Nuit blanche au jardin (2023)",
         "Trois souris et un chapeau (2021)"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Sarah Chauvin's studio – Children's illustrator",
     "url": "sarahchauvin-illustration.fr › about",
     "extrait": "Children's picture-book illustrator based in Nantes. Watercolours, animals and retold fairy tales. Upcoming signings…",
     "page": {
      "type": "blog",
      "site": "L'atelier de Sarah Chauvin",
      "domaine": "sarahchauvin-illustration.fr",
      "titre": "Sarah Chauvin",
      "sousTitre": "Children's illustrator",
      "date": null,
      "encart": [
       [
        "City",
        "Nantes"
       ],
       [
        "Books published",
        "14"
       ],
       [
        "Technique",
        "Watercolour and coloured pencils"
       ]
      ],
      "sections": [
       {
        "titre": "Hello!",
        "texte": "I've been drawing since I was very small and have illustrated children's picture books since 2012. I love animals, forests and bedtime stories. On this blog I share my sketchbooks, the behind-the-scenes of my books and the dates of my bookshop events."
       },
       {
        "titre": "Latest books",
        "liste": [
         "The Hedgehog Who Wanted to See the Sea (2024)",
         "A Sleepless Night in the Garden (2023)",
         "Three Mice and a Hat (2021)"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p46-1": {
  "nom": "Jeanne Vial",
  "genre": "f",
  "cle": {
   "fr": "Microbiologiste marine",
   "en": "Marine microbiologist"
  },
  "support": {
   "fr": "Reportage télévisé",
   "en": "TV news report"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Jeanne Vial – Microbiologie des sédiments marins – ISMPE",
     "url": "ismpe.fr › recherche › biosphere-profonde › jeanne-vial",
     "extrait": "Chercheuse en microbiologie marine. Elle étudie les micro-organismes qui vivent enfouis dans les sédiments du fond des océans, parfois depuis des millions d'années…",
     "page": {
      "type": "institution",
      "site": "Institut des sciences de la mer de Port-Envor (ISMPE)",
      "domaine": "ismpe.fr",
      "titre": "Jeanne Vial",
      "sousTitre": "Chercheuse, microbiologie des sédiments marins",
      "date": null,
      "encart": [
       [
        "Équipe",
        "Biosphère profonde"
       ],
       [
        "Thèse",
        "2010, Activité microbienne dans les sédiments pauvres en nutriments"
       ],
       [
        "Campagnes",
        "6 campagnes de forage océanique"
       ]
      ],
      "sections": [
       {
        "titre": "Recherches",
        "texte": "Jeanne Vial étudie la vie microbienne enfouie sous le plancher océanique. Elle prélève des carottes de sédiments lors de campagnes en mer, puis mesure en laboratoire si les cellules qu'elles contiennent sont encore actives, à quelle vitesse elles consomment de l'énergie et comment elles réagissent lorsqu'on leur apporte des nutriments."
       },
       {
        "titre": "Publications récentes",
        "liste": [
         "Métabolisme extrêmement lent des microbes des sédiments profonds (2023)",
         "Mesurer l'activité de cellules isolées par marquage isotopique (2021)",
         "Microbes des grands gyres océaniques pauvres en nutriments (2019)"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Jeanne Vial – Marine sediment microbiology – ISMPE",
     "url": "ismpe.fr › research › deep-biosphere › jeanne-vial",
     "extrait": "Marine microbiology researcher. She studies micro-organisms buried in ocean-floor sediments, sometimes for millions of years…",
     "page": {
      "type": "institution",
      "site": "Port-Envor Institute of Marine Sciences (ISMPE)",
      "domaine": "ismpe.fr",
      "titre": "Jeanne Vial",
      "sousTitre": "Researcher, marine sediment microbiology",
      "date": null,
      "encart": [
       [
        "Team",
        "Deep biosphere"
       ],
       [
        "PhD",
        "2010, Microbial activity in nutrient-poor sediments"
       ],
       [
        "Expeditions",
        "6 ocean drilling expeditions"
       ]
      ],
      "sections": [
       {
        "titre": "Research",
        "texte": "Jeanne Vial studies microbial life buried beneath the ocean floor. She collects sediment cores during expeditions at sea, then measures in the lab whether the cells they contain are still active, how fast they use energy and how they respond when given nutrients."
       },
       {
        "titre": "Recent publications",
        "liste": [
         "Extremely slow metabolism of deep-sediment microbes (2023)",
         "Measuring the activity of single cells with isotope labelling (2021)",
         "Microbes of nutrient-poor ocean gyres (2019)"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "À bord de l'Albatros II, la chasse à la vie sous le fond des océans – Océans Mag",
     "url": "oceans-mag.fr › exploration › albatros-ii-biosphere-profonde",
     "extrait": "Reportage : pendant six semaines dans le Pacifique Sud, la microbiologiste Jeanne Vial et son équipe ont foré les sédiments à plus de 5 000 mètres de profondeur…",
     "page": {
      "type": "presse",
      "site": "Océans Mag",
      "domaine": "oceans-mag.fr",
      "titre": "À bord de l'Albatros II, la chasse à la vie sous le fond des océans",
      "sousTitre": "Reportage – Exploration",
      "date": "5 septembre 2024",
      "encart": [
       [
        "Navire",
        "Albatros II"
       ],
       [
        "Durée",
        "6 semaines"
       ],
       [
        "Profondeur d'eau",
        "Plus de 5 000 m"
       ]
      ],
      "sections": [
       {
        "titre": "Une scientifique en chef",
        "texte": "Casque vissé sur la tête, Jeanne Vial surveille l'arrivée d'une carotte de sédiment de dix mètres. Microbiologiste à l'Institut des sciences de la mer de Port-Envor, elle est la scientifique en chef de la campagne. Chaque échantillon est découpé en salle stérile pour éviter toute contamination."
       },
       {
        "titre": "Une patience de géologue",
        "texte": "« Les cellules que nous cherchons vivent au ralenti, il faut des mois d'expériences pour mesurer quelque chose », explique-t-elle. Les échantillons partiront ensuite vers trois laboratoires européens."
       }
      ]
     }
    },
    "en": {
     "titre": "Aboard the Albatros II, hunting for life beneath the ocean floor – Océans Mag",
     "url": "oceans-mag.fr › exploration › albatros-ii-biosphere-profonde",
     "extrait": "Report: for six weeks in the South Pacific, microbiologist Jeanne Vial and her team drilled sediments more than 5,000 metres down…",
     "page": {
      "type": "presse",
      "site": "Océans Mag",
      "domaine": "oceans-mag.fr",
      "titre": "Aboard the Albatros II, hunting for life beneath the ocean floor",
      "sousTitre": "Report – Exploration",
      "date": "5 September 2024",
      "encart": [
       [
        "Ship",
        "Albatros II"
       ],
       [
        "Duration",
        "6 weeks"
       ],
       [
        "Water depth",
        "Over 5,000 m"
       ]
      ],
      "sections": [
       {
        "titre": "A chief scientist",
        "texte": "Hard hat firmly on, Jeanne Vial watches a ten-metre sediment core come up. A microbiologist at the Port-Envor Institute of Marine Sciences, she is the expedition's chief scientist. Each sample is cut up in a sterile room to avoid any contamination."
       },
       {
        "titre": "A geologist's patience",
        "texte": "'The cells we're looking for live in slow motion, it takes months of experiments to measure anything,' she explains. The samples will then go to three European laboratories."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Jeanne Vial – Chercheuse en microbiologie marine | ProLink",
     "url": "prolink.com › in › jeanne-vial",
     "extrait": "ISMPE · Biosphère profonde · Forage océanique · Microbiologie environnementale…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Jeanne Vial",
      "sousTitre": "Chercheuse en microbiologie marine à l'ISMPE",
      "date": null,
      "encart": [
       [
        "Relations",
        "640+"
       ],
       [
        "Langues",
        "Français, anglais, norvégien"
       ]
      ],
      "sections": [
       {
        "titre": "Expérience",
        "liste": [
         "Chercheuse, équipe Biosphère profonde, ISMPE (depuis 2014)",
         "Chercheuse postdoctorale, Institut de géomicrobiologie de Halvik, Norvège (2011-2014)",
         "Doctorante, Université de Port-Envor (2007-2010)"
        ]
       },
       {
        "titre": "Formation",
        "liste": [
         "Doctorat en microbiologie, Université de Port-Envor (2010)",
         "Master Biologie marine (2007)"
        ]
       },
       {
        "titre": "Activités",
        "liste": [
         "Scientifique en chef, campagne Albatros II (2024)",
         "Relectrice pour des revues de microbiologie environnementale",
         "Interventions dans les collèges avec l'association Mer et Sciences"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Jeanne Vial – Marine microbiology researcher | ProLink",
     "url": "prolink.com › in › jeanne-vial",
     "extrait": "ISMPE · Deep biosphere · Ocean drilling · Environmental microbiology…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Jeanne Vial",
      "sousTitre": "Marine microbiology researcher at ISMPE",
      "date": null,
      "encart": [
       [
        "Connections",
        "640+"
       ],
       [
        "Languages",
        "French, English, Norwegian"
       ]
      ],
      "sections": [
       {
        "titre": "Experience",
        "liste": [
         "Researcher, Deep Biosphere team, ISMPE (since 2014)",
         "Postdoctoral researcher, Halvik Institute of Geomicrobiology, Norway (2011-2014)",
         "PhD student, University of Port-Envor (2007-2010)"
        ]
       },
       {
        "titre": "Education",
        "liste": [
         "PhD in microbiology, University of Port-Envor (2010)",
         "Master's in marine biology (2007)"
        ]
       },
       {
        "titre": "Activities",
        "liste": [
         "Chief scientist, Albatros II expedition (2024)",
         "Reviewer for environmental microbiology journals",
         "School talks with the Sea and Science association"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p47-1": {
  "nom": "Victor Schmitt",
  "genre": "m",
  "cle": {
   "fr": "Astrophysicien",
   "en": "Astrophysicist"
  },
  "support": {
   "fr": "Vidéo d'un festival de sciences",
   "en": "Science festival video"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Victor Schmitt – Profil auteur – SciIndex",
     "url": "sciindex.org › auteurs › schmitt-victor",
     "extrait": "74 publications · 4 120 citations · Thèmes : étoiles à neutrons, pulsars, matière ultra-dense…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Victor Schmitt",
      "sousTitre": "Astrophysique · Institut d'astrophysique de Clairmont",
      "date": null,
      "encart": [
       [
        "Publications",
        "74"
       ],
       [
        "Citations",
        "4 120"
       ],
       [
        "Indice h",
        "33"
       ],
       [
        "Première publication",
        "2003"
       ]
      ],
      "sections": [
       {
        "titre": "Thèmes principaux",
        "liste": [
         "Étoiles à neutrons",
         "Pulsars",
         "Physique de la matière ultra-dense",
         "Ondes gravitationnelles"
        ]
       },
       {
        "titre": "Articles les plus cités",
        "liste": [
         "Mesurer le rayon des étoiles à neutrons avec les rayons X (2012, 610 citations)",
         "Ce que la fusion de deux étoiles à neutrons nous apprend sur leur intérieur (2018, 540 citations)",
         "Masse maximale des étoiles à neutrons : état des lieux (2020, 330 citations)"
        ]
       },
       {
        "titre": "Revues",
        "liste": [
         "Compact Objects Letters",
         "Cahiers d'astrophysique de Clairmont"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Victor Schmitt – Author profile – SciIndex",
     "url": "sciindex.org › authors › schmitt-victor",
     "extrait": "74 publications · 4,120 citations · Topics: neutron stars, pulsars, ultra-dense matter…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Victor Schmitt",
      "sousTitre": "Astrophysics · Clairmont Institute of Astrophysics",
      "date": null,
      "encart": [
       [
        "Publications",
        "74"
       ],
       [
        "Citations",
        "4,120"
       ],
       [
        "h-index",
        "33"
       ],
       [
        "First publication",
        "2003"
       ]
      ],
      "sections": [
       {
        "titre": "Main topics",
        "liste": [
         "Neutron stars",
         "Pulsars",
         "Physics of ultra-dense matter",
         "Gravitational waves"
        ]
       },
       {
        "titre": "Most cited papers",
        "liste": [
         "Measuring neutron star radii with X-rays (2012, 610 citations)",
         "What the merger of two neutron stars tells us about their interior (2018, 540 citations)",
         "Maximum mass of neutron stars: a review (2020, 330 citations)"
        ]
       },
       {
        "titre": "Journals",
        "liste": [
         "Compact Objects Letters",
         "Cahiers d'astrophysique de Clairmont"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Victor Schmitt – Directeur de recherche – Institut d'astrophysique de Clairmont",
     "url": "iac-clairmont.fr › equipes › objets-compacts › victor-schmitt",
     "extrait": "Directeur de recherche, responsable de l'équipe Objets compacts. Il étudie les étoiles à neutrons à partir des observations en rayons X et radio…",
     "page": {
      "type": "institution",
      "site": "Institut d'astrophysique de Clairmont",
      "domaine": "iac-clairmont.fr",
      "titre": "Victor Schmitt",
      "sousTitre": "Directeur de recherche, astrophysicien",
      "date": null,
      "encart": [
       [
        "Équipe",
        "Objets compacts (étoiles à neutrons, trous noirs)"
       ],
       [
        "Thèse",
        "2005, Structure interne des étoiles à neutrons"
       ],
       [
        "Enseignement",
        "Master Astrophysique, cours « Astres morts »"
       ]
      ],
      "sections": [
       {
        "titre": "Recherches",
        "texte": "Victor Schmitt cherche à comprendre de quoi sont faites les étoiles à neutrons, ces restes d'étoiles massives qui ont explosé. Avec son équipe, il combine les observations des télescopes à rayons X, des radiotélescopes et des détecteurs d'ondes gravitationnelles pour mesurer leur masse et leur taille."
       },
       {
        "titre": "Médiation",
        "liste": [
         "Conférences grand public au Festival des étoiles de Clairmont",
         "Parrain du club d'astronomie du lycée Jean-Moulinet"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Victor Schmitt – Research director – Clairmont Institute of Astrophysics",
     "url": "iac-clairmont.fr › teams › compact-objects › victor-schmitt",
     "extrait": "Research director, head of the Compact Objects team. He studies neutron stars using X-ray and radio observations…",
     "page": {
      "type": "institution",
      "site": "Clairmont Institute of Astrophysics",
      "domaine": "iac-clairmont.fr",
      "titre": "Victor Schmitt",
      "sousTitre": "Research director, astrophysicist",
      "date": null,
      "encart": [
       [
        "Team",
        "Compact objects (neutron stars, black holes)"
       ],
       [
        "PhD",
        "2005, Internal structure of neutron stars"
       ],
       [
        "Teaching",
        "Master's in Astrophysics, 'Dead stars' course"
       ]
      ],
      "sections": [
       {
        "titre": "Research",
        "texte": "Victor Schmitt tries to understand what neutron stars are made of: the remains of massive stars that exploded. With his team, he combines observations from X-ray telescopes, radio telescopes and gravitational-wave detectors to measure their mass and size."
       },
       {
        "titre": "Outreach",
        "liste": [
         "Public talks at the Clairmont Star Festival",
         "Sponsor of the astronomy club at Jean-Moulinet secondary school"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Festival des étoiles de Clairmont – Vidéoflux",
     "url": "videoflux.com › @festivaldesetoiles › victor-schmitt-astres-morts",
     "extrait": "Conférence de Victor Schmitt, astrophysicien à l'Institut d'astrophysique de Clairmont : « Les cadavres d'étoiles, des objets extrêmes ». 87 000 vues…",
     "page": {
      "type": "video",
      "site": "Vidéoflux",
      "domaine": "videoflux.com",
      "titre": "Festival des étoiles de Clairmont",
      "sousTitre": "Chaîne officielle du festival · 41 k abonnés",
      "date": null,
      "encart": [
       [
        "Vidéo",
        "Les cadavres d'étoiles, des objets extrêmes"
       ],
       [
        "Intervenant",
        "Victor Schmitt, astrophysicien"
       ],
       [
        "Durée",
        "58 min"
       ],
       [
        "Vues",
        "87 000"
       ]
      ],
      "sections": [
       {
        "titre": "Description",
        "texte": "Que reste-t-il quand une étoile géante explose ? Victor Schmitt, directeur de recherche à l'Institut d'astrophysique de Clairmont et spécialiste des étoiles à neutrons, raconte comment on observe ces objets minuscules à des milliers d'années-lumière, et ce qu'ils nous apprennent sur la matière. Questions du public à partir de 45 min."
       },
       {
        "titre": "Commentaires",
        "liste": [
         "« Clair et passionnant, mon fils de 13 ans a tout suivi. »",
         "« Merci pour les références en description ! »"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Clairmont Star Festival – Vidéoflux",
     "url": "videoflux.com › @festivaldesetoiles › victor-schmitt-astres-morts",
     "extrait": "Talk by Victor Schmitt, astrophysicist at the Clairmont Institute of Astrophysics: 'Dead stars, extreme objects'. 87,000 views…",
     "page": {
      "type": "video",
      "site": "Vidéoflux",
      "domaine": "videoflux.com",
      "titre": "Clairmont Star Festival",
      "sousTitre": "Official festival channel · 41k subscribers",
      "date": null,
      "encart": [
       [
        "Video",
        "Dead stars, extreme objects"
       ],
       [
        "Speaker",
        "Victor Schmitt, astrophysicist"
       ],
       [
        "Length",
        "58 min"
       ],
       [
        "Views",
        "87,000"
       ]
      ],
      "sections": [
       {
        "titre": "Description",
        "texte": "What is left when a giant star explodes? Victor Schmitt, research director at the Clairmont Institute of Astrophysics and a neutron-star specialist, explains how we observe these tiny objects thousands of light-years away, and what they teach us about matter. Audience questions from 45 min."
       },
       {
        "titre": "Comments",
        "liste": [
         "'Clear and fascinating, my 13-year-old followed everything.'",
         "'Thanks for the references in the description!'"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p48-1": {
  "nom": "Laure Rivière",
  "genre": "f",
  "cle": {
   "fr": "Épidémiologiste de la nutrition",
   "en": "Nutrition epidemiologist"
  },
  "support": {
   "fr": "Audition publique filmée",
   "en": "Filmed public hearing"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Laure Rivière – Unité Alimentation, Santé et Populations – Université de Lisière-Nord",
     "url": "uasp.univ-lisiere-nord.fr › equipe › laure-riviere",
     "extrait": "Épidémiologiste, directrice de recherche. Elle coordonne la cohorte Assiette & Santé, qui suit plus de 110 000 volontaires depuis 2010…",
     "page": {
      "type": "institution",
      "site": "Unité Alimentation, Santé et Populations (UASP) – Université de Lisière-Nord",
      "domaine": "uasp.univ-lisiere-nord.fr",
      "titre": "Laure Rivière",
      "sousTitre": "Directrice de recherche, épidémiologie de la nutrition",
      "date": null,
      "encart": [
       [
        "Poste",
        "Directrice de recherche"
       ],
       [
        "Responsabilité",
        "Coordinatrice de la cohorte Assiette & Santé"
       ],
       [
        "Thèse",
        "2005, Habitudes alimentaires et santé cardiovasculaire chez l'adulte"
       ],
       [
        "Formation initiale",
        "Médecin, spécialité santé publique"
       ]
      ],
      "sections": [
       {
        "titre": "Recherches",
        "texte": "Laure Rivière étudie les liens entre l'alimentation et la santé à l'échelle de grandes populations. Sa cohorte, Assiette & Santé, recueille chaque année ce que mangent plus de 110 000 volontaires et suit leur santé sur le long terme. Son équipe s'intéresse notamment au degré de transformation des aliments et aux additifs."
       },
       {
        "titre": "Méthodes",
        "liste": [
         "Grandes cohortes suivies sur 10 à 15 ans",
         "Questionnaires alimentaires détaillés en ligne",
         "Collaboration avec des essais contrôlés en nutrition"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Laure Rivière – Food, Health and Populations Unit – University of Lisière-Nord",
     "url": "uasp.univ-lisiere-nord.fr › team › laure-riviere",
     "extrait": "Epidemiologist and research director. She coordinates the Plate & Health cohort, which has followed more than 110,000 volunteers since 2010…",
     "page": {
      "type": "institution",
      "site": "Food, Health and Populations Unit (UASP) – University of Lisière-Nord",
      "domaine": "uasp.univ-lisiere-nord.fr",
      "titre": "Laure Rivière",
      "sousTitre": "Research director, nutritional epidemiology",
      "date": null,
      "encart": [
       [
        "Position",
        "Research director"
       ],
       [
        "Role",
        "Coordinator of the Plate & Health cohort"
       ],
       [
        "PhD",
        "2005, Eating habits and cardiovascular health in adults"
       ],
       [
        "Initial training",
        "Medical doctor, public health specialty"
       ]
      ],
      "sections": [
       {
        "titre": "Research",
        "texte": "Laure Rivière studies the links between diet and health across large populations. Her cohort, Plate & Health, records each year what more than 110,000 volunteers eat and follows their health over the long term. Her team focuses in particular on how processed foods are and on additives."
       },
       {
        "titre": "Methods",
        "liste": [
         "Large cohorts followed over 10 to 15 years",
         "Detailed online food questionnaires",
         "Collaboration with controlled nutrition trials"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Laure Rivière – Profil auteur – SciIndex",
     "url": "sciindex.org › auteurs › riviere-laure",
     "extrait": "154 publications · 11 260 citations · Thèmes : épidémiologie nutritionnelle, cohortes, transformation des aliments…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Laure Rivière",
      "sousTitre": "Épidémiologie nutritionnelle · UASP, Université de Lisière-Nord",
      "date": null,
      "encart": [
       [
        "Publications",
        "154"
       ],
       [
        "Citations",
        "11 260"
       ],
       [
        "Indice h",
        "52"
       ],
       [
        "Première publication",
        "2002"
       ]
      ],
      "sections": [
       {
        "titre": "Thèmes principaux",
        "liste": [
         "Épidémiologie nutritionnelle",
         "Grandes cohortes",
         "Transformation des aliments et additifs",
         "Maladies cardiovasculaires"
        ]
       },
       {
        "titre": "Articles les plus cités",
        "liste": [
         "Présentation de la cohorte Assiette & Santé : méthodes et premiers résultats (2012, 1 140 citations)",
         "Degré de transformation des aliments et santé cardiovasculaire (2019, 980 citations)",
         "Additifs alimentaires et marqueurs de santé (2022, 610 citations)"
        ]
       },
       {
        "titre": "Revues",
        "liste": [
         "Revue européenne de nutrition et santé publique",
         "Cahiers d'épidémiologie"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Laure Rivière – Author profile – SciIndex",
     "url": "sciindex.org › authors › riviere-laure",
     "extrait": "154 publications · 11,260 citations · Topics: nutritional epidemiology, cohorts, food processing…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Laure Rivière",
      "sousTitre": "Nutritional epidemiology · UASP, University of Lisière-Nord",
      "date": null,
      "encart": [
       [
        "Publications",
        "154"
       ],
       [
        "Citations",
        "11,260"
       ],
       [
        "h-index",
        "52"
       ],
       [
        "First publication",
        "2002"
       ]
      ],
      "sections": [
       {
        "titre": "Main topics",
        "liste": [
         "Nutritional epidemiology",
         "Large cohorts",
         "Food processing and additives",
         "Cardiovascular disease"
        ]
       },
       {
        "titre": "Most cited papers",
        "liste": [
         "The Plate & Health cohort: methods and first results (2012, 1,140 citations)",
         "Degree of food processing and cardiovascular health (2019, 980 citations)",
         "Food additives and health markers (2022, 610 citations)"
        ]
       },
       {
        "titre": "Journals",
        "liste": [
         "Revue européenne de nutrition et santé publique",
         "Cahiers d'épidémiologie"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Alimentation : les scientifiques entendus par la commission santé – Le Courrier de l'Ouest-Express",
     "url": "courrier-ouest-express.fr › societe › sante › audition-commission-alimentation",
     "extrait": "Parmi les experts auditionnés, l'épidémiologiste Laure Rivière a expliqué aux élus comment fonctionne une grande cohorte et ce qu'elle permet, ou non, de conclure…",
     "page": {
      "type": "presse",
      "site": "Le Courrier de l'Ouest-Express",
      "domaine": "courrier-ouest-express.fr",
      "titre": "Alimentation : les scientifiques entendus par la commission santé",
      "sousTitre": "Société – Santé",
      "date": "19 mars 2025",
      "encart": [
       [
        "Audition",
        "Commission des affaires sociales et de la santé"
       ],
       [
        "Durée",
        "2 h 30"
       ],
       [
        "Experts entendus",
        "5"
       ]
      ],
      "sections": [
       {
        "titre": "Une épidémiologiste face aux élus",
        "texte": "Coordinatrice depuis quinze ans de la cohorte Assiette & Santé, Laure Rivière a présenté aux députés la méthode de son équipe : suivre des dizaines de milliers de personnes pendant des années pour repérer des liens entre ce qu'elles mangent et leur santé."
       },
       {
        "titre": "Prudence et transparence",
        "texte": "Interrogée sur les financements, elle a précisé que la cohorte est financée uniquement par des fonds publics et que son équipe ne reçoit aucun argent de l'industrie agroalimentaire. Elle a aussi rappelé les limites des études d'observation."
       }
      ]
     }
    },
    "en": {
     "titre": "Food: scientists heard by the health committee – Le Courrier de l'Ouest-Express",
     "url": "courrier-ouest-express.fr › societe › sante › audition-commission-alimentation",
     "extrait": "Among the experts heard, epidemiologist Laure Rivière explained to lawmakers how a large cohort works and what it can, or cannot, conclude…",
     "page": {
      "type": "presse",
      "site": "Le Courrier de l'Ouest-Express",
      "domaine": "courrier-ouest-express.fr",
      "titre": "Food: scientists heard by the health committee",
      "sousTitre": "Society – Health",
      "date": "19 March 2025",
      "encart": [
       [
        "Hearing",
        "Social affairs and health committee"
       ],
       [
        "Length",
        "2 h 30"
       ],
       [
        "Experts heard",
        "5"
       ]
      ],
      "sections": [
       {
        "titre": "An epidemiologist before lawmakers",
        "texte": "Coordinator of the Plate & Health cohort for fifteen years, Laure Rivière presented her team's method to MPs: following tens of thousands of people for years to spot links between what they eat and their health."
       },
       {
        "titre": "Caution and transparency",
        "texte": "Asked about funding, she stated that the cohort is funded solely by public money and that her team receives no money from the food industry. She also pointed out the limits of observational studies."
       }
      ]
     }
    }
   }
  ]
 },
 "p48-3": {
  "nom": "Pascal Morin",
  "genre": "m",
  "cle": {
   "fr": "Nutritionniste médiatique",
   "en": "Celebrity nutritionist"
  },
  "support": {
   "fr": "Chronique à la télévision",
   "en": "TV segment"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Pascal Morin, le nutritionniste qui dédramatise nos assiettes – Télé Semaine Plus",
     "url": "telesemaineplus.fr › emissions › bien-dans-mon-assiette › pascal-morin",
     "extrait": "Chaque samedi dans « Bien dans mon assiette » sur Canal Sirius, Pascal Morin démonte les « peurs alimentaires ». Rencontre avec le chroniqueur préféré des téléspectateurs…",
     "page": {
      "type": "presse",
      "site": "Télé Semaine Plus",
      "domaine": "telesemaineplus.fr",
      "titre": "Pascal Morin, le nutritionniste qui dédramatise nos assiettes",
      "sousTitre": "Portrait – Télévision",
      "date": "11 janvier 2025",
      "encart": [
       [
        "Émission",
        "Bien dans mon assiette, Canal Sirius"
       ],
       [
        "Audience",
        "1,4 million de téléspectateurs"
       ],
       [
        "Livres",
        "3 best-sellers"
       ]
      ],
      "sections": [
       {
        "titre": "Le bon sens à l'antenne",
        "texte": "Souriant, direct, Pascal Morin s'est imposé en cinq ans comme le visage de la nutrition à la télévision. Diététicien de formation, il reçoit aussi des patients dans son cabinet privé de Lyon. Son credo : « Il n'y a pas d'aliment interdit, il n'y a que des excès. »"
       },
       {
        "titre": "Un homme très demandé",
        "texte": "Entre ses chroniques, ses livres et ses conférences en entreprise, il reconnaît avoir « moins de temps pour les patients ». Il est aussi, depuis 2021, ambassadeur d'une marque de plats cuisinés, « parce qu'elle propose des portions équilibrées »."
       }
      ]
     }
    },
    "en": {
     "titre": "Pascal Morin, the nutritionist who takes the drama out of our plates – Télé Semaine Plus",
     "url": "telesemaineplus.fr › emissions › bien-dans-mon-assiette › pascal-morin",
     "extrait": "Every Saturday on 'Bien dans mon assiette' on Canal Sirius, Pascal Morin debunks 'food scares'. Meet viewers' favourite columnist…",
     "page": {
      "type": "presse",
      "site": "Télé Semaine Plus",
      "domaine": "telesemaineplus.fr",
      "titre": "Pascal Morin, the nutritionist who takes the drama out of our plates",
      "sousTitre": "Profile – Television",
      "date": "11 January 2025",
      "encart": [
       [
        "Show",
        "Bien dans mon assiette, Canal Sirius"
       ],
       [
        "Audience",
        "1.4 million viewers"
       ],
       [
        "Books",
        "3 bestsellers"
       ]
      ],
      "sections": [
       {
        "titre": "Common sense on air",
        "texte": "Smiling and direct, Pascal Morin has become the face of nutrition on television in five years. A dietitian by training, he also sees patients in his private practice in Lyon. His motto: 'There are no forbidden foods, only excess.'"
       },
       {
        "titre": "A man in demand",
        "texte": "Between his TV segments, his books and his corporate talks, he admits having 'less time for patients'. Since 2021 he has also been the ambassador for a ready-meal brand, 'because it offers balanced portions'."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Pascal Morin – Livres, programme en ligne et consultations",
     "url": "pascalmorin-nutrition.fr › boutique",
     "extrait": "Découvrez « Mangez de tout, sans culpabilité », le programme Équilibre 30 jours et les consultations en visio avec Pascal Morin, vu sur Canal Sirius…",
     "page": {
      "type": "commerce",
      "site": "Pascal Morin Nutrition",
      "domaine": "pascalmorin-nutrition.fr",
      "titre": "Pascal Morin Nutrition",
      "sousTitre": "Vu dans « Bien dans mon assiette » sur Canal Sirius",
      "date": null,
      "encart": [
       [
        "Livre",
        "Mangez de tout, sans culpabilité – 19,90 €"
       ],
       [
        "Programme",
        "Équilibre 30 jours – 79 €"
       ],
       [
        "Consultation en visio",
        "65 € les 30 min"
       ],
       [
        "Partenaire",
        "Délices Express, plats cuisinés"
       ]
      ],
      "sections": [
       {
        "titre": "Ma philosophie",
        "texte": "Fini les régimes et les listes noires ! Avec mon programme Équilibre 30 jours, vous apprenez à tout manger, en quantité raisonnable, sans vous priver. Des vidéos, des menus et un suivi par messagerie."
       },
       {
        "titre": "Avis clients",
        "liste": [
         "« Enfin quelqu'un qui ne culpabilise pas ! » – Nadia",
         "« Clair et facile à suivre. » – Thierry"
        ]
       },
       {
        "titre": "Offre partenaire",
        "texte": "-15 % sur les plats Délices Express avec le code MORIN15."
       }
      ]
     }
    },
    "en": {
     "titre": "Pascal Morin – Books, online programme and consultations",
     "url": "pascalmorin-nutrition.fr › shop",
     "extrait": "Discover 'Eat Everything, Guilt-Free', the 30-Day Balance programme and video consultations with Pascal Morin, as seen on Canal Sirius…",
     "page": {
      "type": "commerce",
      "site": "Pascal Morin Nutrition",
      "domaine": "pascalmorin-nutrition.fr",
      "titre": "Pascal Morin Nutrition",
      "sousTitre": "As seen on 'Bien dans mon assiette' on Canal Sirius",
      "date": null,
      "encart": [
       [
        "Book",
        "Eat Everything, Guilt-Free – €19.90"
       ],
       [
        "Programme",
        "30-Day Balance – €79"
       ],
       [
        "Video consultation",
        "€65 per 30 min"
       ],
       [
        "Partner",
        "Délices Express ready meals"
       ]
      ],
      "sections": [
       {
        "titre": "My philosophy",
        "texte": "No more diets and blacklists! With my 30-Day Balance programme, you learn to eat everything, in reasonable amounts, without depriving yourself. Videos, menus and follow-up by message."
       },
       {
        "titre": "Customer reviews",
        "liste": [
         "'Finally someone who doesn't make you feel guilty!' – Nadia",
         "'Clear and easy to follow.' – Thierry"
        ]
       },
       {
        "titre": "Partner offer",
        "texte": "15% off Délices Express meals with the code MORIN15."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Pascal Morin – Chroniqueur TV, auteur, diététicien | ProLink",
     "url": "prolink.com › in › pascal-morin-nutrition",
     "extrait": "Chroniqueur nutrition chez Canal Sirius · Ambassadeur Délices Express · Auteur · Cabinet de diététique à Lyon…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Pascal Morin",
      "sousTitre": "Chroniqueur TV, auteur, diététicien",
      "date": null,
      "encart": [
       [
        "Relations",
        "4 800+"
       ],
       [
        "Secteur",
        "Médias et bien-être"
       ]
      ],
      "sections": [
       {
        "titre": "Expérience",
        "liste": [
         "Ambassadeur nutrition, Délices Express, plats cuisinés (depuis 2021)",
         "Chroniqueur, « Bien dans mon assiette », Canal Sirius (depuis 2020)",
         "Diététicien, cabinet privé, Lyon (depuis 2006)",
         "Coach sportif en salle (2001-2004)"
        ]
       },
       {
        "titre": "Formation",
        "liste": [
         "Diplôme de diététicien, lycée technique de Villeroy (2005)",
         "Formation de coach sportif (2001)"
        ]
       },
       {
        "titre": "Publications",
        "liste": [
         "Mangez de tout, sans culpabilité (Éditions Plein Sourire, 2022)",
         "Mes 100 recettes anti-régime (2023)"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Pascal Morin – TV columnist, author, dietitian | ProLink",
     "url": "prolink.com › in › pascal-morin-nutrition",
     "extrait": "Nutrition columnist at Canal Sirius · Délices Express ambassador · Author · Dietetics practice in Lyon…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Pascal Morin",
      "sousTitre": "TV columnist, author, dietitian",
      "date": null,
      "encart": [
       [
        "Connections",
        "4,800+"
       ],
       [
        "Industry",
        "Media and wellness"
       ]
      ],
      "sections": [
       {
        "titre": "Experience",
        "liste": [
         "Nutrition ambassador, Délices Express ready meals (since 2021)",
         "Columnist, 'Bien dans mon assiette', Canal Sirius (since 2020)",
         "Dietitian, private practice, Lyon (since 2006)",
         "Gym fitness coach (2001-2004)"
        ]
       },
       {
        "titre": "Education",
        "liste": [
         "Dietitian diploma, Villeroy technical college (2005)",
         "Fitness coach training (2001)"
        ]
       },
       {
        "titre": "Publications",
        "liste": [
         "Eat Everything, Guilt-Free (Éditions Plein Sourire, 2022)",
         "My 100 Anti-Diet Recipes (2023)"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p50-1": {
  "nom": "Anne Pelletier",
  "genre": "f",
  "cle": {
   "fr": "Chercheuse en psychologie du mensonge",
   "en": "Researcher in the psychology of deception"
  },
  "support": {
   "fr": "Podcast de vulgarisation",
   "en": "Popular-science podcast"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Anne Pelletier – Laboratoire de psychologie sociale et cognitive – Université de Sainte-Albe",
     "url": "lpsc.univ-saintealbe.fr › membres › anne-pelletier",
     "extrait": "Professeure de psychologie. Ses recherches portent sur la détection du mensonge, les expressions du visage et les erreurs que nous faisons en jugeant les autres…",
     "page": {
      "type": "institution",
      "site": "Laboratoire de psychologie sociale et cognitive (LPSC) – Université de Sainte-Albe",
      "domaine": "lpsc.univ-saintealbe.fr",
      "titre": "Anne Pelletier",
      "sousTitre": "Professeure de psychologie sociale et cognitive",
      "date": null,
      "encart": [
       [
        "Équipe",
        "Jugement social et communication non verbale"
       ],
       [
        "Thèse",
        "2007, Indices du visage et jugement de sincérité"
       ],
       [
        "Enseignement",
        "Licence et master de psychologie"
       ]
      ],
      "sections": [
       {
        "titre": "Recherches",
        "texte": "Anne Pelletier étudie comment nous jugeons la sincérité des autres. Dans son laboratoire, des volontaires regardent des vidéos de personnes qui disent la vérité ou mentent, et l'on mesure leurs réponses. Elle analyse aussi les expressions faciales brèves et les méthodes d'entretien utilisées par la police et les recruteurs."
       },
       {
        "titre": "Publications récentes",
        "liste": [
         "Expressions faciales brèves : ce qu'elles révèlent et ce qu'elles ne révèlent pas (2024)",
         "Policiers, étudiants, juges : qui repère le mieux les menteurs ? (2022)",
         "Entretiens d'enquête : comparer plusieurs méthodes (2020)"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Anne Pelletier – Social and Cognitive Psychology Laboratory – University of Sainte-Albe",
     "url": "lpsc.univ-saintealbe.fr › members › anne-pelletier",
     "extrait": "Professor of psychology. Her research deals with lie detection, facial expressions and the mistakes we make when judging others…",
     "page": {
      "type": "institution",
      "site": "Social and Cognitive Psychology Laboratory (LPSC) – University of Sainte-Albe",
      "domaine": "lpsc.univ-saintealbe.fr",
      "titre": "Anne Pelletier",
      "sousTitre": "Professor of social and cognitive psychology",
      "date": null,
      "encart": [
       [
        "Team",
        "Social judgement and non-verbal communication"
       ],
       [
        "PhD",
        "2007, Facial cues and judgements of sincerity"
       ],
       [
        "Teaching",
        "Undergraduate and master's psychology"
       ]
      ],
      "sections": [
       {
        "titre": "Research",
        "texte": "Anne Pelletier studies how we judge other people's sincerity. In her lab, volunteers watch videos of people telling the truth or lying, and their answers are measured. She also analyses brief facial expressions and the interview methods used by police and recruiters."
       },
       {
        "titre": "Recent publications",
        "liste": [
         "Brief facial expressions: what they reveal and what they don't (2024)",
         "Police officers, students, judges: who spots liars best? (2022)",
         "Investigative interviews: comparing several methods (2020)"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Anne Pelletier – Profil auteur – SciIndex",
     "url": "sciindex.org › auteurs › pelletier-anne",
     "extrait": "68 publications · 3 450 citations · Thèmes : détection du mensonge, communication non verbale, jugement social…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Anne Pelletier",
      "sousTitre": "Psychologie sociale et cognitive · LPSC, Université de Sainte-Albe",
      "date": null,
      "encart": [
       [
        "Publications",
        "68"
       ],
       [
        "Citations",
        "3 450"
       ],
       [
        "Indice h",
        "30"
       ],
       [
        "Première publication",
        "2005"
       ]
      ],
      "sections": [
       {
        "titre": "Thèmes principaux",
        "liste": [
         "Détection du mensonge",
         "Expressions faciales",
         "Communication non verbale",
         "Biais de jugement"
        ]
       },
       {
        "titre": "Articles les plus cités",
        "liste": [
         "Synthèse de 200 études sur le jugement de sincérité (2015, 720 citations)",
         "Les formations à la lecture du visage améliorent-elles les jugements ? (2018, 415 citations)",
         "Confiance et exactitude : des juges trop sûrs d'eux (2019, 288 citations)"
        ]
       },
       {
        "titre": "Revues",
        "liste": [
         "Cahiers du jugement social",
         "Nonverbal Communication Review"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Anne Pelletier – Author profile – SciIndex",
     "url": "sciindex.org › authors › pelletier-anne",
     "extrait": "68 publications · 3,450 citations · Topics: lie detection, non-verbal communication, social judgement…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Anne Pelletier",
      "sousTitre": "Social and cognitive psychology · LPSC, University of Sainte-Albe",
      "date": null,
      "encart": [
       [
        "Publications",
        "68"
       ],
       [
        "Citations",
        "3,450"
       ],
       [
        "h-index",
        "30"
       ],
       [
        "First publication",
        "2005"
       ]
      ],
      "sections": [
       {
        "titre": "Main topics",
        "liste": [
         "Lie detection",
         "Facial expressions",
         "Non-verbal communication",
         "Judgement biases"
        ]
       },
       {
        "titre": "Most cited papers",
        "liste": [
         "A synthesis of 200 studies on judging sincerity (2015, 720 citations)",
         "Does face-reading training improve judgements? (2018, 415 citations)",
         "Confidence and accuracy: overconfident judges (2019, 288 citations)"
        ]
       },
       {
        "titre": "Journals",
        "liste": [
         "Cahiers du jugement social",
         "Nonverbal Communication Review"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Anne Pelletier : « Mon labo, c'est un plateau de jeu télévisé sans les candidats » – Le Mag des Curieux",
     "url": "magdescurieux.fr › rencontres › anne-pelletier-psychologue",
     "extrait": "Entretien avec Anne Pelletier, professeure de psychologie à Sainte-Albe, qui consacre ses recherches à la façon dont nous jugeons la sincérité des autres…",
     "page": {
      "type": "presse",
      "site": "Le Mag des Curieux",
      "domaine": "magdescurieux.fr",
      "titre": "Anne Pelletier : « Mon labo, c'est un plateau de jeu télévisé sans les candidats »",
      "sousTitre": "Rencontre – Sciences humaines",
      "date": "2 octobre 2024",
      "encart": [
       [
        "Métier",
        "Professeure de psychologie"
       ],
       [
        "Université",
        "Sainte-Albe"
       ],
       [
        "Âge",
        "45 ans"
       ]
      ],
      "sections": [
       {
        "titre": "Une vocation",
        "texte": "Anne Pelletier a commencé ses études de psychologie après avoir travaillé deux étés comme surveillante de colonie. « Je voyais les enfants inventer des histoires et je me demandais comment les adultes décidaient qui croire. » Vingt ans plus tard, elle dirige une équipe de huit chercheurs."
       },
       {
        "titre": "Expériences en série",
        "texte": "Dans son laboratoire, des centaines de volontaires regardent des vidéos et doivent dire qui ment. « Nous publions tous nos résultats, même ceux qui ne vont pas dans le sens attendu », insiste-t-elle."
       }
      ]
     }
    },
    "en": {
     "titre": "Anne Pelletier: 'My lab is a TV game show without the contestants' – Le Mag des Curieux",
     "url": "magdescurieux.fr › rencontres › anne-pelletier-psychologue",
     "extrait": "Interview with Anne Pelletier, professor of psychology at Sainte-Albe, whose research focuses on how we judge other people's sincerity…",
     "page": {
      "type": "presse",
      "site": "Le Mag des Curieux",
      "domaine": "magdescurieux.fr",
      "titre": "Anne Pelletier: 'My lab is a TV game show without the contestants'",
      "sousTitre": "Interview – Human sciences",
      "date": "2 October 2024",
      "encart": [
       [
        "Job",
        "Professor of psychology"
       ],
       [
        "University",
        "Sainte-Albe"
       ],
       [
        "Age",
        "45"
       ]
      ],
      "sections": [
       {
        "titre": "A calling",
        "texte": "Anne Pelletier began studying psychology after two summers working as a holiday-camp supervisor. 'I watched children make up stories and wondered how adults decided whom to believe.' Twenty years later, she leads a team of eight researchers."
       },
       {
        "titre": "Experiment after experiment",
        "texte": "In her lab, hundreds of volunteers watch videos and must say who is lying. 'We publish all our results, even the ones that don't go the way we expected,' she insists."
       }
      ]
     }
    }
   }
  ]
 },
 "p50-2": {
  "nom": "Alexis Valette",
  "genre": "m",
  "cle": {
   "fr": "Expert en langage corporel",
   "en": "Body-language expert"
  },
  "support": {
   "fr": "Vidéo sur un réseau social",
   "en": "Social media video"
  },
  "say": {
   "fr": "« En vingt ans, j'ai appris à repérer les menteurs. Un regard qui fuit, une lèvre qui se pince un dixième de seconde, et je sais : cette personne cache quelque chose. Mon taux de réussite dépasse 90 %. Ces compétences s'apprennent : en trois jours, on peut devenir un détecteur humain de mensonges. »",
   "en": "\"In twenty years I've learned to spot liars. An evasive glance, a lip that tightens for a tenth of a second, and I know: this person is hiding something. My success rate is over 90%. These skills can be learned: in three days, you can become a human lie detector.\""
  },
  "resultats": [
   {
    "fr": {
     "titre": "Stage « Détecteur humain » – 3 jours pour lire les visages – Valette Académie",
     "url": "valette-academie.fr › formations › detecteur-humain",
     "extrait": "Apprenez à repérer le mensonge en 3 jours avec Alexis Valette, « profileur comportemental ». Plus de 90 % de réussite. Certificat remis en fin de stage…",
     "page": {
      "type": "commerce",
      "site": "Valette Académie",
      "domaine": "valette-academie.fr",
      "titre": "Stage « Détecteur humain »",
      "sousTitre": "Avec Alexis Valette, fondateur de la Valette Académie",
      "date": null,
      "encart": [
       [
        "Durée",
        "3 jours (21 h)"
       ],
       [
        "Tarif",
        "1 290 € HT"
       ],
       [
        "Certificat",
        "Praticien en lecture comportementale (délivré par la Valette Académie)"
       ],
       [
        "Prochaine session",
        "Paris, 14-16 mai"
       ]
      ],
      "sections": [
       {
        "titre": "Le programme",
        "texte": "Regards, micro-expressions, gestes parasites : Alexis Valette vous transmet la méthode qu'il a mise au point en vingt ans. À la fin du stage, vous saurez repérer en quelques secondes si votre interlocuteur ment, en entretien d'embauche comme en négociation."
       },
       {
        "titre": "Ils nous ont fait confiance",
        "liste": [
         "« J'ai démasqué un candidat dès le premier entretien ! » – Julie, recruteuse",
         "« Bluffant. » – Marc, commercial"
        ]
       },
       {
        "titre": "Pour aller plus loin",
        "liste": [
         "Niveau 2 « Profileur expert » : 2 490 €",
         "Livre : Je sais que vous mentez (24 €)"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "'Human Lie Detector' course – 3 days to read faces – Valette Académie",
     "url": "valette-academie.fr › courses › human-lie-detector",
     "extrait": "Learn to spot lies in 3 days with Alexis Valette, 'behavioural profiler'. Over 90% success. Certificate awarded at the end of the course…",
     "page": {
      "type": "commerce",
      "site": "Valette Académie",
      "domaine": "valette-academie.fr",
      "titre": "'Human Lie Detector' course",
      "sousTitre": "With Alexis Valette, founder of the Valette Académie",
      "date": null,
      "encart": [
       [
        "Length",
        "3 days (21 h)"
       ],
       [
        "Price",
        "€1,290 excl. VAT"
       ],
       [
        "Certificate",
        "Behavioural Reading Practitioner (issued by the Valette Académie)"
       ],
       [
        "Next session",
        "Paris, 14-16 May"
       ]
      ],
      "sections": [
       {
        "titre": "The programme",
        "texte": "Glances, micro-expressions, nervous gestures: Alexis Valette passes on the method he developed over twenty years. By the end of the course, you'll be able to tell within seconds whether the person in front of you is lying, in a job interview or a negotiation."
       },
       {
        "titre": "They trusted us",
        "liste": [
         "'I unmasked a candidate in the very first interview!' – Julie, recruiter",
         "'Mind-blowing.' – Marc, salesman"
        ]
       },
       {
        "titre": "Going further",
        "liste": [
         "Level 2 'Expert Profiler': €2,490",
         "Book: I Know You're Lying (€24)"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Alexis Valette – Fondateur de la Valette Académie | ProLink",
     "url": "prolink.com › in › alexis-valette",
     "extrait": "Profileur comportemental · Formateur · Conférencier · Fondateur de la Valette Académie depuis 2011…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Alexis Valette",
      "sousTitre": "Profileur comportemental · Formateur · Conférencier",
      "date": null,
      "encart": [
       [
        "Relations",
        "9 500+"
       ],
       [
        "Abonnés",
        "22 000"
       ]
      ],
      "sections": [
       {
        "titre": "À propos",
        "texte": "J'aide managers et recruteurs à décoder ce que les autres ne disent pas. Méthode exclusive, résultats prouvés en stage."
       },
       {
        "titre": "Expérience",
        "liste": [
         "Fondateur et formateur, Valette Académie (depuis 2011)",
         "Interventions ponctuelles auprès d'équipes de sécurité privée",
         "Commercial grands comptes, Bureautique Services (2001-2010)"
        ]
       },
       {
        "titre": "Formation",
        "liste": [
         "BTS Négociation et relation client (2000)",
         "Certificat « Profileur comportemental », Institut européen du non-verbal, organisme privé (6 jours, 2010)"
        ]
       },
       {
        "titre": "Compétences",
        "liste": [
         "Lecture du non-verbal",
         "Prise de parole",
         "Vente",
         "Coaching"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Alexis Valette – Founder of the Valette Académie | ProLink",
     "url": "prolink.com › in › alexis-valette",
     "extrait": "Behavioural profiler · Trainer · Speaker · Founder of the Valette Académie since 2011…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Alexis Valette",
      "sousTitre": "Behavioural profiler · Trainer · Speaker",
      "date": null,
      "encart": [
       [
        "Connections",
        "9,500+"
       ],
       [
        "Followers",
        "22,000"
       ]
      ],
      "sections": [
       {
        "titre": "About",
        "texte": "I help managers and recruiters decode what others leave unsaid. An exclusive method, with results proven in my courses."
       },
       {
        "titre": "Experience",
        "liste": [
         "Founder and trainer, Valette Académie (since 2011)",
         "Occasional sessions for private security teams",
         "Key account salesman, Bureautique Services (2001-2010)"
        ]
       },
       {
        "titre": "Education",
        "liste": [
         "Two-year vocational diploma in sales and customer relations (2000)",
         "'Behavioural Profiler' certificate, European Institute of Non-Verbal Communication, private provider (6 days, 2010)"
        ]
       },
       {
        "titre": "Skills",
        "liste": [
         "Reading body language",
         "Public speaking",
         "Sales",
         "Coaching"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Alexis Valette, l'homme qui lit les visages – Le Miroir du Dimanche",
     "url": "miroirdudimanche.fr › societe › alexis-valette-lit-les-visages",
     "extrait": "Ses vidéos sur Chirp cumulent des millions de vues. Alexis Valette affirme démasquer 9 menteurs sur 10. Nous avons passé une journée à ses côtés…",
     "page": {
      "type": "presse",
      "site": "Le Miroir du Dimanche",
      "domaine": "miroirdudimanche.fr",
      "titre": "Alexis Valette, l'homme qui lit les visages",
      "sousTitre": "Société – Portrait",
      "date": "26 janvier 2025",
      "encart": [
       [
        "Abonnés sur Chirp",
        "610 000"
       ],
       [
        "Stagiaires formés",
        "« Plus de 4 000 » selon lui"
       ]
      ],
      "sections": [
       {
        "titre": "Un showman",
        "texte": "Sur Chirp, Alexis Valette décortique les visages de politiques et de célébrités. Ancien commercial, il a fondé sa propre école en 2011 et vend des stages de trois jours à plus de 1 000 euros. Recruteurs et managers s'y pressent."
       },
       {
        "titre": "Un chiffre difficile à vérifier",
        "texte": "Quand on lui demande d'où vient son taux de réussite de 90 %, il évoque « ses propres statistiques de stage ». Aucune étude publiée ne l'a mesuré. Les chercheuses en psychologie que nous avons contactées n'ont jamais entendu parler de sa méthode."
       }
      ]
     }
    },
    "en": {
     "titre": "Alexis Valette, the man who reads faces – Le Miroir du Dimanche",
     "url": "miroirdudimanche.fr › societe › alexis-valette-lit-les-visages",
     "extrait": "His Chirp videos rack up millions of views. Alexis Valette claims to unmask 9 liars out of 10. We spent a day with him…",
     "page": {
      "type": "presse",
      "site": "Le Miroir du Dimanche",
      "domaine": "miroirdudimanche.fr",
      "titre": "Alexis Valette, the man who reads faces",
      "sousTitre": "Society – Profile",
      "date": "26 January 2025",
      "encart": [
       [
        "Chirp followers",
        "610,000"
       ],
       [
        "Trainees",
        "'Over 4,000' according to him"
       ]
      ],
      "sections": [
       {
        "titre": "A showman",
        "texte": "On Chirp, Alexis Valette dissects the faces of politicians and celebrities. A former salesman, he founded his own school in 2011 and sells three-day courses for over 1,000 euros. Recruiters and managers flock to them."
       },
       {
        "titre": "A figure that's hard to check",
        "texte": "When asked where his 90% success rate comes from, he mentions 'his own course statistics'. No published study has measured it. The psychology researchers we contacted had never heard of his method."
       }
      ]
     }
    }
   }
  ]
 },
 "p51-0": {
  "nom": "François Courtois",
  "genre": "m",
  "cle": {
   "fr": "Historien médiéviste",
   "en": "Medieval historian"
  },
  "support": {
   "fr": "Émission de radio",
   "en": "Radio programme"
  },
  "resultats": [
   {
    "fr": {
     "titre": "François Courtois (historien) – Encyclopédia Libre",
     "url": "encyclopedia-libre.org › wiki › François_Courtois_(historien)",
     "extrait": "François Courtois, né en 1964, est un historien français spécialiste du haut Moyen Âge, de la Bretagne insulaire et des sources écrites des Ve-VIIIe siècles…",
     "page": {
      "type": "encyclo",
      "site": "Encyclopédia Libre",
      "domaine": "encyclopedia-libre.org",
      "titre": "François Courtois (historien)",
      "sousTitre": "Historien médiéviste français",
      "date": null,
      "encart": [
       [
        "Naissance",
        "1964, Quimperlé"
       ],
       [
        "Domaine",
        "Histoire du haut Moyen Âge"
       ],
       [
        "Poste",
        "Professeur à l'Université de Kerlann"
       ],
       [
        "Thèse",
        "1993, Chroniques et généalogies de la Bretagne insulaire, Ve-VIIIe siècles"
       ]
      ],
      "sections": [
       {
        "titre": "Carrière",
        "texte": "Spécialiste de la Grande-Bretagne et de la Bretagne après la fin de l'Empire romain, François Courtois enseigne l'histoire médiévale à l'Université de Kerlann depuis 1998. Il lit le latin, le vieil anglais et le gallois ancien, et a consacré une grande partie de ses travaux à la critique des sources : dater un texte, repérer les ajouts tardifs, distinguer l'histoire de la légende."
       },
       {
        "titre": "Ouvrages",
        "liste": [
         "Les Bretons de l'ombre, Ve-VIe siècles (2005)",
         "Lire une chronique médiévale (2011)",
         "Héros réels, héros inventés au Moyen Âge (2019)"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "François Courtois (historian) – Encyclopédia Libre",
     "url": "encyclopedia-libre.org › wiki › François_Courtois_(historian)",
     "extrait": "François Courtois, born in 1964, is a French historian specialising in the early Middle Ages, post-Roman Britain and written sources from the 5th to 8th centuries…",
     "page": {
      "type": "encyclo",
      "site": "Encyclopédia Libre",
      "domaine": "encyclopedia-libre.org",
      "titre": "François Courtois (historian)",
      "sousTitre": "French medieval historian",
      "date": null,
      "encart": [
       [
        "Born",
        "1964, Quimperlé"
       ],
       [
        "Field",
        "Early medieval history"
       ],
       [
        "Position",
        "Professor at the University of Kerlann"
       ],
       [
        "PhD",
        "1993, Chronicles and genealogies of post-Roman Britain, 5th-8th centuries"
       ]
      ],
      "sections": [
       {
        "titre": "Career",
        "texte": "A specialist of Britain and Brittany after the end of the Roman Empire, François Courtois has taught medieval history at the University of Kerlann since 1998. He reads Latin, Old English and Old Welsh, and has devoted much of his work to source criticism: dating a text, spotting later additions, telling history from legend."
       },
       {
        "titre": "Books",
        "liste": [
         "The Shadowy Britons, 5th-6th centuries (2005)",
         "How to Read a Medieval Chronicle (2011)",
         "Real Heroes, Invented Heroes in the Middle Ages (2019)"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "François Courtois – Professeur d'histoire médiévale – Université de Kerlann",
     "url": "univ-kerlann.fr › histoire › enseignants › francois-courtois",
     "extrait": "Professeur d'histoire du haut Moyen Âge, responsable du master Mondes médiévaux. Séminaire : « Sources et légendes de la Bretagne insulaire »…",
     "page": {
      "type": "institution",
      "site": "Université de Kerlann – Département d'histoire",
      "domaine": "univ-kerlann.fr",
      "titre": "François Courtois",
      "sousTitre": "Professeur d'histoire du haut Moyen Âge",
      "date": null,
      "encart": [
       [
        "Laboratoire",
        "Centre de recherches sur les mondes celtiques et médiévaux"
       ],
       [
        "Responsabilité",
        "Directeur du master Mondes médiévaux"
       ],
       [
        "Langues anciennes",
        "Latin, vieil anglais, gallois ancien"
       ]
      ],
      "sections": [
       {
        "titre": "Enseignement",
        "texte": "Il assure les cours d'histoire du haut Moyen Âge en licence et dirige le séminaire de master « Sources et légendes de la Bretagne insulaire », où les étudiants apprennent à comparer les manuscrits et à dater les textes."
       },
       {
        "titre": "Recherches en cours",
        "liste": [
         "Édition critique de chroniques galloises du IXe siècle",
         "Les rois bretons dans les généalogies médiévales",
         "La fabrique des héros dans la littérature du XIIe siècle"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "François Courtois – Professor of medieval history – University of Kerlann",
     "url": "univ-kerlann.fr › histoire › staff › francois-courtois",
     "extrait": "Professor of early medieval history, director of the Medieval Worlds master's programme. Seminar: 'Sources and legends of post-Roman Britain'…",
     "page": {
      "type": "institution",
      "site": "University of Kerlann – History Department",
      "domaine": "univ-kerlann.fr",
      "titre": "François Courtois",
      "sousTitre": "Professor of early medieval history",
      "date": null,
      "encart": [
       [
        "Laboratory",
        "Research Centre for Celtic and Medieval Worlds"
       ],
       [
        "Role",
        "Director of the Medieval Worlds master's programme"
       ],
       [
        "Ancient languages",
        "Latin, Old English, Old Welsh"
       ]
      ],
      "sections": [
       {
        "titre": "Teaching",
        "texte": "He teaches early medieval history at undergraduate level and runs the master's seminar 'Sources and legends of post-Roman Britain', where students learn to compare manuscripts and date texts."
       },
       {
        "titre": "Current research",
        "liste": [
         "Critical edition of 9th-century Welsh chronicles",
         "British kings in medieval genealogies",
         "How heroes were made in 12th-century literature"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Pétanque : François Courtois réélu à la tête de La Boule d'Aubagne – La Gazette de Provence-Littoral",
     "url": "gazette-provence-littoral.fr › aubagne › petanque-francois-courtois-reelu",
     "extrait": "Lors de l'assemblée générale, François Courtois, boulanger à la retraite, a été réélu président du club pour la cinquième fois…",
     "page": {
      "type": "presse",
      "site": "La Gazette de Provence-Littoral",
      "domaine": "gazette-provence-littoral.fr",
      "titre": "François Courtois réélu à la tête de La Boule d'Aubagne",
      "sousTitre": "Vie locale – Sports",
      "date": "9 février 2025",
      "encart": [
       [
        "Club",
        "La Boule d'Aubagne"
       ],
       [
        "Licenciés",
        "212"
       ],
       [
        "Mandat",
        "5e réélection"
       ]
      ],
      "sections": [
       {
        "titre": "Assemblée générale",
        "texte": "Réuni samedi au boulodrome municipal, le club La Boule d'Aubagne a reconduit son président, François Courtois, boulanger à la retraite, élu à l'unanimité. Il a présenté un bilan sportif « très encourageant », avec deux titres départementaux, et annoncé la création d'une école de pétanque pour les 8-14 ans. « Les jeunes, c'est l'avenir du club », a-t-il rappelé avant le traditionnel apéritif."
       }
      ]
     }
    },
    "en": {
     "titre": "Pétanque: François Courtois re-elected head of La Boule d'Aubagne – La Gazette de Provence-Littoral",
     "url": "gazette-provence-littoral.fr › aubagne › petanque-francois-courtois-reelu",
     "extrait": "At the annual meeting, François Courtois, a retired baker, was re-elected club president for the fifth time…",
     "page": {
      "type": "presse",
      "site": "La Gazette de Provence-Littoral",
      "domaine": "gazette-provence-littoral.fr",
      "titre": "François Courtois re-elected head of La Boule d'Aubagne",
      "sousTitre": "Local life – Sport",
      "date": "9 February 2025",
      "encart": [
       [
        "Club",
        "La Boule d'Aubagne"
       ],
       [
        "Members",
        "212"
       ],
       [
        "Term",
        "5th re-election"
       ]
      ],
      "sections": [
       {
        "titre": "Annual meeting",
        "texte": "Meeting on Saturday at the municipal boules ground, La Boule d'Aubagne re-elected its president, François Courtois, a retired baker, unanimously. He presented a 'very encouraging' sporting record, with two county titles, and announced the creation of a pétanque school for 8 to 14-year-olds. 'Young people are the club's future,' he said before the traditional aperitif."
       }
      ]
     }
    }
   }
  ]
 },
 "p52-0": {
  "nom": "Édouard Vidal",
  "genre": "m",
  "cle": {
   "fr": "Helléniste, spécialiste de la Grèce antique",
   "en": "Classicist, specialist of ancient Greece"
  },
  "support": {
   "fr": "Entretien dans un magazine",
   "en": "Magazine interview"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Édouard Vidal – Département d'études classiques – Université de Montlucé",
     "url": "univ-montluce.fr › lettres › etudes-classiques › edouard-vidal",
     "extrait": "Professeur de littérature grecque ancienne. Spécialiste de l'épopée homérique, de la poésie orale et de la transmission des textes grecs…",
     "page": {
      "type": "institution",
      "site": "Université de Montlucé – Département d'études classiques",
      "domaine": "univ-montluce.fr",
      "titre": "Édouard Vidal",
      "sousTitre": "Professeur de littérature grecque ancienne",
      "date": null,
      "encart": [
       [
        "Spécialité",
        "Épopée grecque archaïque, poésie orale"
       ],
       [
        "Thèse",
        "1999, Formules et répétitions dans l'Iliade"
       ],
       [
        "Responsabilité",
        "Directeur du Centre d'études homériques"
       ]
      ],
      "sections": [
       {
        "titre": "Recherches",
        "texte": "Édouard Vidal étudie l'Iliade et l'Odyssée : leur langue, leur composition et la façon dont elles ont été transmises, d'abord oralement puis par écrit. Il compare les poèmes grecs à d'autres traditions orales étudiées par les anthropologues, des Balkans à l'Afrique de l'Ouest."
       },
       {
        "titre": "Enseignement",
        "liste": [
         "Grec ancien, de la licence au master",
         "Séminaire : « Lire Homère dans le texte »",
         "Atelier de traduction ouvert aux lycéens"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Édouard Vidal – Department of Classical Studies – University of Montlucé",
     "url": "univ-montluce.fr › lettres › classical-studies › edouard-vidal",
     "extrait": "Professor of ancient Greek literature. Specialist in Homeric epic, oral poetry and the transmission of Greek texts…",
     "page": {
      "type": "institution",
      "site": "University of Montlucé – Department of Classical Studies",
      "domaine": "univ-montluce.fr",
      "titre": "Édouard Vidal",
      "sousTitre": "Professor of ancient Greek literature",
      "date": null,
      "encart": [
       [
        "Specialty",
        "Archaic Greek epic, oral poetry"
       ],
       [
        "PhD",
        "1999, Formulas and repetition in the Iliad"
       ],
       [
        "Role",
        "Director of the Centre for Homeric Studies"
       ]
      ],
      "sections": [
       {
        "titre": "Research",
        "texte": "Édouard Vidal studies the Iliad and the Odyssey: their language, how they were composed and how they were passed down, first orally and then in writing. He compares the Greek poems with other oral traditions studied by anthropologists, from the Balkans to West Africa."
       },
       {
        "titre": "Teaching",
        "liste": [
         "Ancient Greek, from undergraduate to master's level",
         "Seminar: 'Reading Homer in Greek'",
         "Translation workshop open to secondary-school students"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Édouard Vidal – Poètes sans visage – Éditions du Portique",
     "url": "editions-portique.fr › catalogue › antiquite › poetes-sans-visage",
     "extrait": "« Poètes sans visage. Les épopées grecques et leurs chanteurs », par Édouard Vidal, professeur de littérature grecque. 320 pages, 24 €…",
     "page": {
      "type": "commerce",
      "site": "Éditions du Portique",
      "domaine": "editions-portique.fr",
      "titre": "Poètes sans visage",
      "sousTitre": "Les épopées grecques et leurs chanteurs, par Édouard Vidal",
      "date": null,
      "encart": [
       [
        "Prix",
        "24 €"
       ],
       [
        "Pages",
        "320"
       ],
       [
        "Parution",
        "Septembre 2023"
       ],
       [
        "Collection",
        "Savoirs de l'Antiquité"
       ]
      ],
      "sections": [
       {
        "titre": "Présentation",
        "texte": "Qui chantait les épopées dans la Grèce archaïque ? Comment des milliers de vers ont-ils pu se transmettre sans écriture ? Dans cet essai accessible, Édouard Vidal présente l'état des recherches et les débats entre spécialistes, en s'appuyant sur les textes grecs et sur l'étude des traditions orales vivantes."
       },
       {
        "titre": "L'auteur",
        "texte": "Édouard Vidal est professeur de littérature grecque ancienne à l'Université de Montlucé et dirige le Centre d'études homériques. Il est l'auteur d'une traduction annotée de l'Odyssée."
       },
       {
        "titre": "Presse",
        "liste": [
         "« Clair, rigoureux, passionnant. » – Revue des lettres anciennes",
         "« Le meilleur guide sur le sujet. » – Le Courrier de l'Ouest-Express"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Édouard Vidal – Faceless Poets – Éditions du Portique",
     "url": "editions-portique.fr › catalogue › antiquite › poetes-sans-visage",
     "extrait": "'Faceless Poets: the Greek epics and their singers', by Édouard Vidal, professor of Greek literature. 320 pages, €24…",
     "page": {
      "type": "commerce",
      "site": "Éditions du Portique",
      "domaine": "editions-portique.fr",
      "titre": "Faceless Poets",
      "sousTitre": "The Greek epics and their singers, by Édouard Vidal",
      "date": null,
      "encart": [
       [
        "Price",
        "€24"
       ],
       [
        "Pages",
        "320"
       ],
       [
        "Published",
        "September 2023"
       ],
       [
        "Series",
        "Knowledge of Antiquity"
       ]
      ],
      "sections": [
       {
        "titre": "About the book",
        "texte": "Who sang the epics in archaic Greece? How could thousands of lines be passed down without writing? In this accessible essay, Édouard Vidal presents the state of research and the debates among specialists, drawing on the Greek texts and on the study of living oral traditions."
       },
       {
        "titre": "The author",
        "texte": "Édouard Vidal is professor of ancient Greek literature at the University of Montlucé and directs the Centre for Homeric Studies. He is the author of an annotated translation of the Odyssey."
       },
       {
        "titre": "Reviews",
        "liste": [
         "'Clear, rigorous, fascinating.' – Revue des lettres anciennes",
         "'The best guide on the subject.' – Le Courrier de l'Ouest-Express"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Édouard Vidal – Profil auteur – SciIndex",
     "url": "sciindex.org › auteurs › vidal-edouard",
     "extrait": "52 publications · 1 180 citations · Thèmes : épopée homérique, poésie orale, langue grecque archaïque…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Édouard Vidal",
      "sousTitre": "Lettres classiques · Université de Montlucé",
      "date": null,
      "encart": [
       [
        "Publications",
        "52"
       ],
       [
        "Citations",
        "1 180"
       ],
       [
        "Indice h",
        "18"
       ],
       [
        "Première publication",
        "1997"
       ]
      ],
      "sections": [
       {
        "titre": "Thèmes principaux",
        "liste": [
         "Épopée homérique",
         "Poésie orale comparée",
         "Langue grecque archaïque",
         "Histoire de la transmission des textes"
        ]
       },
       {
        "titre": "Articles les plus cités",
        "liste": [
         "Les formules homériques et la composition orale (2004, 210 citations)",
         "Quand l'Iliade a-t-elle été écrite ? Bilan des hypothèses (2012, 175 citations)",
         "Chanteurs des Balkans et aèdes grecs : une comparaison (2016, 120 citations)"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Édouard Vidal – Author profile – SciIndex",
     "url": "sciindex.org › authors › vidal-edouard",
     "extrait": "52 publications · 1,180 citations · Topics: Homeric epic, oral poetry, archaic Greek language…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Édouard Vidal",
      "sousTitre": "Classics · University of Montlucé",
      "date": null,
      "encart": [
       [
        "Publications",
        "52"
       ],
       [
        "Citations",
        "1,180"
       ],
       [
        "h-index",
        "18"
       ],
       [
        "First publication",
        "1997"
       ]
      ],
      "sections": [
       {
        "titre": "Main topics",
        "liste": [
         "Homeric epic",
         "Comparative oral poetry",
         "Archaic Greek language",
         "History of textual transmission"
        ]
       },
       {
        "titre": "Most cited papers",
        "liste": [
         "Homeric formulas and oral composition (2004, 210 citations)",
         "When was the Iliad written down? A review of the hypotheses (2012, 175 citations)",
         "Balkan singers and Greek bards: a comparison (2016, 120 citations)"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p53-0": {
  "nom": "Clément Vial",
  "genre": "m",
  "cle": {
   "fr": "Chercheur en psychométrie",
   "en": "Psychometrics researcher"
  },
  "support": {
   "fr": "Interview dans un magazine",
   "en": "Magazine interview"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Clément Vial – Professeur de psychologie cognitive – Université de Rives-d'Armor",
     "url": "univ-rivesdarmor.fr › lpdp › membres › clement-vial",
     "extrait": "Professeur de psychologie cognitive au Laboratoire de psychologie différentielle et de psychométrie. Travaux sur la structure de l'intelligence et la validation des tests…",
     "page": {
      "type": "institution",
      "site": "Université de Rives-d'Armor",
      "domaine": "univ-rivesdarmor.fr",
      "titre": "Clément Vial",
      "sousTitre": "Professeur de psychologie cognitive",
      "date": null,
      "encart": [
       [
        "Laboratoire",
        "Psychologie différentielle et psychométrie (LPDP)"
       ],
       [
        "Thèse",
        "2006, Structure factorielle des batteries de tests cognitifs chez l'enfant"
       ],
       [
        "Enseignement",
        "Master Psychologie de l'éducation"
       ]
      ],
      "sections": [
       {
        "titre": "Recherches",
        "texte": "Clément Vial étudie la façon dont les différentes aptitudes cognitives (raisonnement, vocabulaire, repérage dans l'espace, mémoire de travail) sont liées entre elles. Son équipe construit et valide des tests utilisés en psychologie scolaire et analyse de grandes bases de données de résultats d'élèves. Il s'intéresse aussi aux idées reçues sur le cerveau qui circulent dans l'enseignement."
       },
       {
        "titre": "Projets en cours",
        "liste": [
         "Validation d'une batterie de tests pour les 11-15 ans",
         "Analyse statistique de 40 000 profils d'élèves",
         "Formation des enseignants aux bases de la psychométrie"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Clément Vial – Professor of Cognitive Psychology – University of Rives-d'Armor",
     "url": "univ-rivesdarmor.fr › lpdp › members › clement-vial",
     "extrait": "Professor of cognitive psychology at the Laboratory of Differential Psychology and Psychometrics. Research on the structure of intelligence and the validation of tests…",
     "page": {
      "type": "institution",
      "site": "University of Rives-d'Armor",
      "domaine": "univ-rivesdarmor.fr",
      "titre": "Clément Vial",
      "sousTitre": "Professor of Cognitive Psychology",
      "date": null,
      "encart": [
       [
        "Laboratory",
        "Differential Psychology and Psychometrics (LPDP)"
       ],
       [
        "PhD",
        "2006, Factor structure of cognitive test batteries in children"
       ],
       [
        "Teaching",
        "Master's in Educational Psychology"
       ]
      ],
      "sections": [
       {
        "titre": "Research",
        "texte": "Clément Vial studies how different cognitive abilities (reasoning, vocabulary, spatial orientation, working memory) relate to one another. His team designs and validates tests used in school psychology and analyses large databases of pupils' results. He is also interested in the misconceptions about the brain that circulate in education."
       },
       {
        "titre": "Current projects",
        "liste": [
         "Validating a test battery for 11 to 15-year-olds",
         "Statistical analysis of 40,000 pupil profiles",
         "Training teachers in the basics of psychometrics"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Vial, Clément – Fiche auteur – SciIndex",
     "url": "sciindex.org › auteurs › vial-clement",
     "extrait": "74 publications · 3 180 citations · Psychométrie, psychologie différentielle · Université de Rives-d'Armor…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Vial, Clément",
      "sousTitre": "Université de Rives-d'Armor, Laboratoire de psychologie différentielle et de psychométrie",
      "date": null,
      "encart": [
       [
        "Publications",
        "74"
       ],
       [
        "Citations",
        "3 180"
       ],
       [
        "Domaines",
        "Psychométrie, psychologie différentielle, psychologie de l'éducation"
       ],
       [
        "Première publication",
        "2005"
       ]
      ],
      "sections": [
       {
        "titre": "Publications les plus citées",
        "liste": [
         "Corrélations entre aptitudes cognitives chez l'enfant : une méta-analyse (2014)",
         "Le facteur général dans les batteries de tests scolaires : réplication sur trois cohortes (2017)",
         "Validité des tests d'intelligence non verbaux (2019)",
         "Neuromythes en éducation : ce que croient les enseignants (2021)"
        ]
       },
       {
        "titre": "Revues principales",
        "texte": "Revue de psychologie différentielle, Journal européen de psychométrie, Cahiers de psychologie de l'éducation."
       }
      ]
     }
    },
    "en": {
     "titre": "Vial, Clément – Author profile – SciIndex",
     "url": "sciindex.org › authors › vial-clement",
     "extrait": "74 publications · 3,180 citations · Psychometrics, differential psychology · University of Rives-d'Armor…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Vial, Clément",
      "sousTitre": "University of Rives-d'Armor, Laboratory of Differential Psychology and Psychometrics",
      "date": null,
      "encart": [
       [
        "Publications",
        "74"
       ],
       [
        "Citations",
        "3,180"
       ],
       [
        "Fields",
        "Psychometrics, differential psychology, educational psychology"
       ],
       [
        "First publication",
        "2005"
       ]
      ],
      "sections": [
       {
        "titre": "Most cited publications",
        "liste": [
         "Correlations between cognitive abilities in children: a meta-analysis (2014)",
         "The general factor in school test batteries: a replication across three cohorts (2017)",
         "Validity of non-verbal intelligence tests (2019)",
         "Neuromyths in education: what teachers believe (2021)"
        ]
       },
       {
        "titre": "Main journals",
        "texte": "Review of Differential Psychology, European Journal of Psychometrics, Papers in Educational Psychology."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Mesurer l'intelligence : rencontre avec Clément Vial – Le Mag de l'École",
     "url": "lemagdelecole.fr › rencontres › mesurer-intelligence-clement-vial",
     "extrait": "Ancien professeur des écoles devenu chercheur, Clément Vial passe ses journées à concevoir et à vérifier des tests cognitifs…",
     "page": {
      "type": "presse",
      "site": "Le Mag de l'École",
      "domaine": "lemagdelecole.fr",
      "titre": "Mesurer l'intelligence : rencontre avec Clément Vial",
      "sousTitre": "Rubrique Rencontres",
      "date": "4 février 2025",
      "encart": [],
      "sections": [
       {
        "titre": "Son parcours",
        "texte": "Ancien professeur des écoles devenu chercheur, Clément Vial passe ses journées à concevoir et à vérifier des tests cognitifs à l'Université de Rives-d'Armor. « Un test, il faut le faire passer à des milliers d'enfants avant de savoir s'il mesure vraiment ce qu'il prétend mesurer », explique-t-il. Il intervient régulièrement dans les formations d'enseignants."
       },
       {
        "titre": "Ses conseils aux enseignants",
        "liste": [
         "Demander sur quelles études repose une méthode",
         "Se méfier des tests en ligne non validés",
         "Vérifier qui a construit un test et sur combien d'élèves"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Measuring intelligence: meeting Clément Vial – Le Mag de l'École",
     "url": "lemagdelecole.fr › meetings › measuring-intelligence-clement-vial",
     "extrait": "A former primary school teacher turned researcher, Clément Vial spends his days designing and checking cognitive tests…",
     "page": {
      "type": "presse",
      "site": "Le Mag de l'École",
      "domaine": "lemagdelecole.fr",
      "titre": "Measuring intelligence: meeting Clément Vial",
      "sousTitre": "Meetings section",
      "date": "4 February 2025",
      "encart": [],
      "sections": [
       {
        "titre": "His background",
        "texte": "A former primary school teacher turned researcher, Clément Vial spends his days designing and checking cognitive tests at the University of Rives-d'Armor. 'You have to give a test to thousands of children before you know whether it really measures what it claims to measure,' he explains. He regularly takes part in teacher training."
       },
       {
        "titre": "His advice to teachers",
        "liste": [
         "Ask which studies a method is based on",
         "Be wary of unvalidated online tests",
         "Check who built a test and on how many pupils"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p54-0": {
  "nom": "Bruno Michaud",
  "genre": "m",
  "cle": {
   "fr": "Psychométricien critique des données de Lynn",
   "en": "Psychometrician critiquing Lynn's data"
  },
  "support": {
   "fr": "Conférence filmée",
   "en": "Filmed lecture"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Bruno Michaud – Professeur de méthodologie et psychométrie – ProLink",
     "url": "prolink.pro › in › bruno-michaud-psychometrie",
     "extrait": "Professeur, département de sciences cognitives, Université de Hautval. J'enseigne les statistiques et la construction des tests psychologiques…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.pro",
      "titre": "Bruno Michaud",
      "sousTitre": "Professeur de méthodologie et psychométrie, Université de Hautval",
      "date": null,
      "encart": [
       [
        "Poste actuel",
        "Professeur, département de sciences cognitives, Université de Hautval"
       ],
       [
        "Formation",
        "Doctorat en psychologie quantitative (2003)"
       ],
       [
        "Relations",
        "500+"
       ]
      ],
      "sections": [
       {
        "titre": "Infos",
        "texte": "J'enseigne les statistiques et la construction des tests psychologiques. Mes recherches portent sur la qualité des données : taille et représentativité des échantillons, conditions de passation des tests, comparaisons entre pays et entre cultures. J'aime remonter aux données d'origine avant de croire un chiffre."
       },
       {
        "titre": "Expérience",
        "liste": [
         "Professeur, Université de Hautval (depuis 2012)",
         "Maître de conférences, Université de Hautval (2005-2012)",
         "Chercheur invité, Institut de statistique de Nordhaven (2010)"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Bruno Michaud – Professor of Methodology and Psychometrics – ProLink",
     "url": "prolink.pro › in › bruno-michaud-psychometrics",
     "extrait": "Professor, Department of Cognitive Sciences, University of Hautval. I teach statistics and the construction of psychological tests…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.pro",
      "titre": "Bruno Michaud",
      "sousTitre": "Professor of Methodology and Psychometrics, University of Hautval",
      "date": null,
      "encart": [
       [
        "Current position",
        "Professor, Department of Cognitive Sciences, University of Hautval"
       ],
       [
        "Education",
        "PhD in quantitative psychology (2003)"
       ],
       [
        "Connections",
        "500+"
       ]
      ],
      "sections": [
       {
        "titre": "About",
        "texte": "I teach statistics and the construction of psychological tests. My research focuses on data quality: sample size and representativeness, testing conditions, comparisons between countries and cultures. I like to go back to the original data before believing a figure."
       },
       {
        "titre": "Experience",
        "liste": [
         "Professor, University of Hautval (since 2012)",
         "Senior lecturer, University of Hautval (2005-2012)",
         "Visiting researcher, Nordhaven Institute of Statistics (2010)"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Michaud, Bruno – Fiche auteur – SciIndex",
     "url": "sciindex.org › auteurs › michaud-bruno",
     "extrait": "61 publications · 2 450 citations · Psychométrie, méthodologie, comparaisons internationales…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Michaud, Bruno",
      "sousTitre": "Université de Hautval, département de sciences cognitives",
      "date": null,
      "encart": [
       [
        "Publications",
        "61"
       ],
       [
        "Citations",
        "2 450"
       ],
       [
        "Domaines",
        "Psychométrie, méthodologie, comparaisons internationales"
       ],
       [
        "Première publication",
        "2002"
       ]
      ],
      "sections": [
       {
        "titre": "Publications les plus citées",
        "liste": [
         "Échantillons et extrapolations dans les bases de QI nationales : un réexamen des sources (2020)",
         "Conditions de passation et biais de mesure dans les tests cognitifs (2016)",
         "Comparer des scores entre cultures : les limites de l'équivalence des tests (2018)",
         "Manuel de construction des tests psychologiques (2011, ouvrage)"
        ]
       },
       {
        "titre": "Revues principales",
        "texte": "Journal européen de psychométrie, Méthodes quantitatives en psychologie, Revue internationale de psychologie interculturelle."
       }
      ]
     }
    },
    "en": {
     "titre": "Michaud, Bruno – Author profile – SciIndex",
     "url": "sciindex.org › authors › michaud-bruno",
     "extrait": "61 publications · 2,450 citations · Psychometrics, methodology, international comparisons…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Michaud, Bruno",
      "sousTitre": "University of Hautval, Department of Cognitive Sciences",
      "date": null,
      "encart": [
       [
        "Publications",
        "61"
       ],
       [
        "Citations",
        "2,450"
       ],
       [
        "Fields",
        "Psychometrics, methodology, international comparisons"
       ],
       [
        "First publication",
        "2002"
       ]
      ],
      "sections": [
       {
        "titre": "Most cited publications",
        "liste": [
         "Samples and extrapolations in national IQ databases: a re-examination of the sources (2020)",
         "Testing conditions and measurement bias in cognitive tests (2016)",
         "Comparing scores across cultures: the limits of test equivalence (2018)",
         "Handbook of psychological test construction (2011, book)"
        ]
       },
       {
        "titre": "Main journals",
        "texte": "European Journal of Psychometrics, Quantitative Methods in Psychology, International Review of Cross-Cultural Psychology."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Bruno Michaud, le gardien qui a qualifié l'US Saint-Aubin – L'Écho du Val-de-Sèvre",
     "url": "echoduvaldesevre.fr › sports › football › bruno-michaud-gardien",
     "extrait": "À 34 ans, le gardien de but et plombier de métier Bruno Michaud a arrêté trois tirs au but dimanche…",
     "page": {
      "type": "presse",
      "site": "L'Écho du Val-de-Sèvre",
      "domaine": "echoduvaldesevre.fr",
      "titre": "Bruno Michaud, le gardien qui a qualifié l'US Saint-Aubin",
      "sousTitre": "Sports, football régional",
      "date": "18 mai 2024",
      "encart": [
       [
        "Club",
        "US Saint-Aubin"
       ],
       [
        "Poste",
        "Gardien de but"
       ],
       [
        "Âge",
        "34 ans"
       ]
      ],
      "sections": [
       {
        "titre": "Le héros du dimanche",
        "texte": "À 34 ans, Bruno Michaud a vécu dimanche le plus beau match de sa carrière amateur. Le gardien de l'US Saint-Aubin a arrêté trois tirs au but face à Mauzé et envoyé son club en finale de la coupe départementale. Plombier de métier, il s'entraîne deux soirs par semaine après le travail. « Je n'avais jamais connu une ambiance pareille », sourit-il."
       },
       {
        "titre": "Prochain rendez-vous",
        "texte": "Finale le 2 juin au stade municipal de Niort."
       }
      ]
     }
    },
    "en": {
     "titre": "Bruno Michaud, the goalkeeper who sent US Saint-Aubin through – L'Écho du Val-de-Sèvre",
     "url": "echoduvaldesevre.fr › sport › football › bruno-michaud-goalkeeper",
     "extrait": "At 34, goalkeeper and plumber by trade Bruno Michaud saved three penalties on Sunday…",
     "page": {
      "type": "presse",
      "site": "L'Écho du Val-de-Sèvre",
      "domaine": "echoduvaldesevre.fr",
      "titre": "Bruno Michaud, the goalkeeper who sent US Saint-Aubin through",
      "sousTitre": "Sport, regional football",
      "date": "18 May 2024",
      "encart": [
       [
        "Club",
        "US Saint-Aubin"
       ],
       [
        "Position",
        "Goalkeeper"
       ],
       [
        "Age",
        "34"
       ]
      ],
      "sections": [
       {
        "titre": "Sunday's hero",
        "texte": "At 34, Bruno Michaud played the best match of his amateur career on Sunday. The US Saint-Aubin goalkeeper saved three penalties against Mauzé and sent his club into the final of the county cup. A plumber by trade, he trains two evenings a week after work. 'I had never experienced an atmosphere like it,' he says with a smile."
       },
       {
        "titre": "Next fixture",
        "texte": "The final is on 2 June at the municipal stadium in Niort."
       }
      ]
     }
    }
   }
  ]
 },
 "p55-3": {
  "nom": "Mélanie Perrin",
  "genre": "f",
  "cle": {
   "fr": "Psychiatre, invité sur un plateau télé",
   "en": "Psychiatrist, guest on a TV panel show"
  },
  "support": {
   "fr": "Plateau télé",
   "en": "TV talk show"
  },
  "say": {
   "fr": "« Le deuil suit toujours les mêmes cinq étapes : déni, colère, marchandage, dépression, acceptation. C'est un mécanisme psychologique universel, je le vois tous les jours autour de moi. »",
   "en": "\"Grief always follows the same five stages: denial, anger, bargaining, depression, acceptance. It's a universal psychological mechanism, I see it every day around me.\""
  },
  "resultats": [
   {
    "fr": {
     "titre": "Dr Mélanie Perrin – Psychiatre – Centre hospitalier de Vauclair-les-Bains",
     "url": "ch-vauclair.fr › services › psychiatrie-adulte › equipe",
     "extrait": "Le Dr Mélanie Perrin reçoit en consultation des adultes souffrant de troubles anxieux et de troubles du sommeil…",
     "page": {
      "type": "institution",
      "site": "Centre hospitalier de Vauclair-les-Bains",
      "domaine": "ch-vauclair.fr",
      "titre": "Dr Mélanie Perrin",
      "sousTitre": "Psychiatre, praticienne hospitalière",
      "date": null,
      "encart": [
       [
        "Service",
        "Psychiatrie adulte"
       ],
       [
        "Consultations",
        "Troubles anxieux, insomnie"
       ],
       [
        "Diplôme",
        "Docteure en médecine, spécialité psychiatrie (2009)"
       ]
      ],
      "sections": [
       {
        "titre": "Présentation",
        "texte": "Le Dr Mélanie Perrin reçoit en consultation des adultes souffrant de troubles anxieux et de troubles du sommeil. Elle participe aussi à la permanence des urgences psychiatriques le week-end et à la formation des internes du service."
       },
       {
        "titre": "Informations pratiques",
        "liste": [
         "Consultations le mardi et le jeudi",
         "Rendez-vous par le secrétariat du service",
         "Bâtiment C, 2e étage"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Dr Mélanie Perrin – Psychiatrist – Vauclair-les-Bains Hospital",
     "url": "ch-vauclair.fr › departments › adult-psychiatry › team",
     "extrait": "Dr Mélanie Perrin sees adult outpatients suffering from anxiety disorders and sleep disorders…",
     "page": {
      "type": "institution",
      "site": "Vauclair-les-Bains Hospital",
      "domaine": "ch-vauclair.fr",
      "titre": "Dr Mélanie Perrin",
      "sousTitre": "Psychiatrist, hospital consultant",
      "date": null,
      "encart": [
       [
        "Department",
        "Adult psychiatry"
       ],
       [
        "Clinics",
        "Anxiety disorders, insomnia"
       ],
       [
        "Qualification",
        "Doctor of medicine, specialising in psychiatry (2009)"
       ]
      ],
      "sections": [
       {
        "titre": "Profile",
        "texte": "Dr Mélanie Perrin sees adult outpatients suffering from anxiety disorders and sleep disorders. She also takes part in the weekend psychiatric emergency rota and in training the department's junior doctors."
       },
       {
        "titre": "Practical information",
        "liste": [
         "Clinics on Tuesdays and Thursdays",
         "Appointments through the department secretary",
         "Building C, 2nd floor"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Nos invités réguliers : Dr Mélanie Perrin – Le Grand Débat de la Santé – Canal Vitalis",
     "url": "canalvitalis.fr › emissions › grand-debat-sante › invites",
     "extrait": "Chaleureuse et directe, le Dr Mélanie Perrin est l'une des invitées préférées des téléspectateurs. Depuis 2019, elle intervient chaque mois sur des sujets très variés…",
     "page": {
      "type": "presse",
      "site": "Canal Vitalis",
      "domaine": "canalvitalis.fr",
      "titre": "Nos invités réguliers : Dr Mélanie Perrin",
      "sousTitre": "Le Grand Débat de la Santé",
      "date": null,
      "encart": [
       [
        "Émission",
        "Le Grand Débat de la Santé"
       ],
       [
        "Invitée depuis",
        "2019"
       ],
       [
        "Livre",
        "Aller mieux en 30 jours (Éditions Soleil Levant, 2021)"
       ]
      ],
      "sections": [
       {
        "titre": "Portrait",
        "texte": "Chaleureuse et directe, le Dr Mélanie Perrin est l'une des invitées préférées des téléspectateurs. Depuis 2019, elle intervient chaque mois sur des sujets très variés et sait trouver la formule qui marque. Son livre de conseils pratiques a été un succès en librairie."
       },
       {
        "titre": "Ses derniers passages",
        "liste": [
         "Insomnie : les bons réflexes",
         "Les écrans rendent-ils nos enfants anxieux ?",
         "Le deuil, mode d'emploi",
         "Burn-out : reconnaître les signes",
         "Régimes et moral : ce qu'il faut savoir"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Our regular guests: Dr Mélanie Perrin – Le Grand Débat de la Santé – Canal Vitalis",
     "url": "canalvitalis.fr › shows › grand-debat-sante › guests",
     "extrait": "Warm and straight-talking, Dr Mélanie Perrin is one of viewers' favourite guests. Since 2019 she has appeared every month on a wide range of topics…",
     "page": {
      "type": "presse",
      "site": "Canal Vitalis",
      "domaine": "canalvitalis.fr",
      "titre": "Our regular guests: Dr Mélanie Perrin",
      "sousTitre": "Le Grand Débat de la Santé",
      "date": null,
      "encart": [
       [
        "Show",
        "Le Grand Débat de la Santé"
       ],
       [
        "Guest since",
        "2019"
       ],
       [
        "Book",
        "Aller mieux en 30 jours (Feel Better in 30 Days, Éditions Soleil Levant, 2021)"
       ]
      ],
      "sections": [
       {
        "titre": "Profile",
        "texte": "Warm and straight-talking, Dr Mélanie Perrin is one of viewers' favourite guests. Since 2019 she has appeared every month on a wide range of topics and always finds a memorable way to put things. Her book of practical tips was a bestseller."
       },
       {
        "titre": "Her latest appearances",
        "liste": [
         "Insomnia: the right habits",
         "Do screens make our children anxious?",
         "Grief: a user's guide",
         "Burnout: recognising the signs",
         "Diets and mood: what you need to know"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Perrin, Mélanie – Fiche auteur – SciIndex",
     "url": "sciindex.org › auteurs › perrin-melanie",
     "extrait": "4 publications · 37 citations · Psychiatrie, troubles du sommeil · Centre hospitalier de Vauclair-les-Bains…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Perrin, Mélanie",
      "sousTitre": "Centre hospitalier de Vauclair-les-Bains, psychiatrie adulte",
      "date": null,
      "encart": [
       [
        "Publications",
        "4"
       ],
       [
        "Citations",
        "37"
       ],
       [
        "Domaines",
        "Psychiatrie, troubles du sommeil"
       ],
       [
        "Dernière publication",
        "2013"
       ]
      ],
      "sections": [
       {
        "titre": "Publications",
        "liste": [
         "Insomnie et anxiété chez l'adulte : étude de 120 patients (2011)",
         "Somnifères et chutes chez les plus de 65 ans (2012, co-autrice)",
         "Prise en charge de l'insomnie en consultation hospitalière (2013, co-autrice)",
         "Thèse d'exercice : anxiété et sommeil chez les internes en médecine (2009)"
        ]
       },
       {
        "titre": "Mots-clés des publications",
        "texte": "insomnie, anxiété, somnifères, personnes âgées, internes en médecine."
       }
      ]
     }
    },
    "en": {
     "titre": "Perrin, Mélanie – Author profile – SciIndex",
     "url": "sciindex.org › authors › perrin-melanie",
     "extrait": "4 publications · 37 citations · Psychiatry, sleep disorders · Vauclair-les-Bains Hospital…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Perrin, Mélanie",
      "sousTitre": "Vauclair-les-Bains Hospital, adult psychiatry",
      "date": null,
      "encart": [
       [
        "Publications",
        "4"
       ],
       [
        "Citations",
        "37"
       ],
       [
        "Fields",
        "Psychiatry, sleep disorders"
       ],
       [
        "Latest publication",
        "2013"
       ]
      ],
      "sections": [
       {
        "titre": "Publications",
        "liste": [
         "Insomnia and anxiety in adults: a study of 120 patients (2011)",
         "Sleeping pills and falls in people over 65 (2012, co-author)",
         "Managing insomnia in hospital outpatient clinics (2013, co-author)",
         "Medical thesis: anxiety and sleep among junior doctors (2009)"
        ]
       },
       {
        "titre": "Publication keywords",
        "texte": "insomnia, anxiety, sleeping pills, older people, junior doctors."
       }
      ]
     }
    }
   }
  ]
 },
 "p56-1": {
  "nom": "Mehdi Masson",
  "genre": "m",
  "cle": {
   "fr": "Chercheur en cognition des poissons",
   "en": "Fish cognition researcher"
  },
  "support": {
   "fr": "Émission de radio",
   "en": "Radio programme"
  },
  "say": {
   "fr": "« L'attention d'un poisson rouge n'a jamais été mesurée par personne : ni 9 secondes, ni aucun autre chiffre. Ce qu'on a mesuré, c'est sa mémoire, et elle se compte en mois : il retient un parcours, associe un signal à de la nourriture. Mais je tiens à être précis, mémoire et attention ne sont pas la même chose, et les données sur la mémoire ne disent rien de la seconde. Les 9 secondes sont une invention accolée après coup à la statistique sur les humains. »",
   "en": "\"Nobody has ever measured a goldfish's attention: not 9 seconds, not any other figure. What has been measured is its memory, and that runs into months: it retains a learned route, associates a signal with food. But let me be precise, memory and attention are not the same thing, and the memory data says nothing about the latter. The 9 seconds are an invention tacked onto the human statistic after the fact.\""
  },
  "resultats": [
   {
    "fr": {
     "titre": "Mehdi Masson – Chargé de recherche – Laboratoire de biologie comportementale – Université de Lanvallec",
     "url": "univ-lanvallec.fr › lbc › equipe › mehdi-masson",
     "extrait": "Chargé de recherche en éthologie et cognition animale. Équipe « Cognition et apprentissage chez les poissons »…",
     "page": {
      "type": "institution",
      "site": "Université de Lanvallec",
      "domaine": "univ-lanvallec.fr",
      "titre": "Mehdi Masson",
      "sousTitre": "Chargé de recherche en éthologie et cognition animale",
      "date": null,
      "encart": [
       [
        "Laboratoire",
        "Biologie comportementale"
       ],
       [
        "Équipe",
        "Cognition et apprentissage chez les poissons"
       ],
       [
        "Thèse",
        "2011, Mémoire spatiale et apprentissage chez le poisson rouge (Carassius auratus)"
       ]
      ],
      "sections": [
       {
        "titre": "Recherches",
        "texte": "Mehdi Masson étudie ce que les poissons sont capables d'apprendre et de retenir : se repérer dans un labyrinthe, reconnaître un signal lumineux qui annonce la nourriture, distinguer des formes. Ses expériences, menées dans les 120 aquariums de l'animalerie du laboratoire, mesurent combien de temps ces apprentissages restent en mémoire."
       },
       {
        "titre": "Thèmes",
        "liste": [
         "Mémoire spatiale des poissons",
         "Apprentissage par association",
         "Bien-être des poissons d'élevage"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Mehdi Masson – Research Scientist – Behavioural Biology Laboratory – University of Lanvallec",
     "url": "univ-lanvallec.fr › lbc › team › mehdi-masson",
     "extrait": "Research scientist in ethology and animal cognition. 'Cognition and learning in fish' team…",
     "page": {
      "type": "institution",
      "site": "University of Lanvallec",
      "domaine": "univ-lanvallec.fr",
      "titre": "Mehdi Masson",
      "sousTitre": "Research scientist in ethology and animal cognition",
      "date": null,
      "encart": [
       [
        "Laboratory",
        "Behavioural Biology"
       ],
       [
        "Team",
        "Cognition and learning in fish"
       ],
       [
        "PhD",
        "2011, Spatial memory and learning in the goldfish (Carassius auratus)"
       ]
      ],
      "sections": [
       {
        "titre": "Research",
        "texte": "Mehdi Masson studies what fish are able to learn and remember: finding their way through a maze, recognising a light signal announcing food, telling shapes apart. His experiments, run in the laboratory's 120 research aquariums, measure how long these learned behaviours stay in memory."
       },
       {
        "titre": "Topics",
        "liste": [
         "Spatial memory in fish",
         "Associative learning",
         "Welfare of farmed fish"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Mehdi Masson – Encyclopédia Libre",
     "url": "encyclopedia-libre.org › wiki › Mehdi_Masson",
     "extrait": "Mehdi Masson, né en 1984 à Roubaix, est un éthologue français spécialiste de la cognition des poissons…",
     "page": {
      "type": "encyclo",
      "site": "Encyclopédia Libre",
      "domaine": "encyclopedia-libre.org",
      "titre": "Mehdi Masson",
      "sousTitre": "Éthologue français",
      "date": null,
      "encart": [
       [
        "Naissance",
        "1984, Roubaix"
       ],
       [
        "Domaine",
        "Éthologie, cognition animale"
       ],
       [
        "Institution",
        "Université de Lanvallec"
       ],
       [
        "Distinction",
        "Prix Lucien-Arnaud de la recherche animale (2020)"
       ]
      ],
      "sections": [
       {
        "titre": "Biographie",
        "texte": "Mehdi Masson, né en 1984 à Roubaix, étudie la biologie avant de se tourner vers l'étude du comportement animal. Il soutient en 2011 une thèse sur la mémoire du poisson rouge, puis rejoint le laboratoire de biologie comportementale de l'Université de Lanvallec."
       },
       {
        "titre": "Travaux",
        "texte": "Ses travaux portent sur l'apprentissage et la mémoire chez les poissons d'eau douce. Il est connu pour des expériences de labyrinthe montrant que des poissons rouges peuvent retenir un trajet appris. Il participe régulièrement à des émissions de vulgarisation scientifique."
       }
      ]
     }
    },
    "en": {
     "titre": "Mehdi Masson – Encyclopédia Libre",
     "url": "encyclopedia-libre.org › wiki › Mehdi_Masson",
     "extrait": "Mehdi Masson, born in 1984 in Roubaix, is a French ethologist specialising in fish cognition…",
     "page": {
      "type": "encyclo",
      "site": "Encyclopédia Libre",
      "domaine": "encyclopedia-libre.org",
      "titre": "Mehdi Masson",
      "sousTitre": "French ethologist",
      "date": null,
      "encart": [
       [
        "Born",
        "1984, Roubaix"
       ],
       [
        "Field",
        "Ethology, animal cognition"
       ],
       [
        "Institution",
        "University of Lanvallec"
       ],
       [
        "Award",
        "Lucien-Arnaud Prize for animal research (2020)"
       ]
      ],
      "sections": [
       {
        "titre": "Biography",
        "texte": "Mehdi Masson, born in 1984 in Roubaix, studied biology before turning to animal behaviour. In 2011 he defended a PhD on goldfish memory, then joined the Behavioural Biology Laboratory at the University of Lanvallec."
       },
       {
        "titre": "Work",
        "texte": "His work focuses on learning and memory in freshwater fish. He is known for maze experiments showing that goldfish can retain a route they have learned. He regularly takes part in popular science programmes."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Les Mardis de la Science – Vidéoflux",
     "url": "videoflux.com › @mardisdelascience › videos",
     "extrait": "« Ce que savent vraiment les poissons » : conférence de Mehdi Masson, chercheur en cognition animale à l'Université de Lanvallec…",
     "page": {
      "type": "video",
      "site": "Vidéoflux",
      "domaine": "videoflux.com",
      "titre": "Les Mardis de la Science",
      "sousTitre": "Chaîne de conférences de l'Université de Lanvallec",
      "date": null,
      "encart": [
       [
        "Abonnés",
        "18 400"
       ],
       [
        "Vidéos",
        "212"
       ]
      ],
      "sections": [
       {
        "titre": "Vidéo à la une",
        "texte": "« Ce que savent vraiment les poissons » : conférence de Mehdi Masson, chercheur en cognition animale. Il présente les expériences de son équipe sur l'apprentissage et la mémoire des poissons rouges, avec des images filmées dans les aquariums du laboratoire, puis répond aux questions du public."
       },
       {
        "titre": "Autres vidéos de la chaîne",
        "liste": [
         "Pourquoi les oiseaux migrateurs ne se perdent pas",
         "Les fourmis savent-elles compter ?",
         "Volcans : comment prévoir une éruption"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Les Mardis de la Science – Vidéoflux",
     "url": "videoflux.com › @mardisdelascience › videos",
     "extrait": "'What fish really know': a lecture by Mehdi Masson, animal cognition researcher at the University of Lanvallec…",
     "page": {
      "type": "video",
      "site": "Vidéoflux",
      "domaine": "videoflux.com",
      "titre": "Les Mardis de la Science",
      "sousTitre": "Lecture channel of the University of Lanvallec",
      "date": null,
      "encart": [
       [
        "Subscribers",
        "18,400"
       ],
       [
        "Videos",
        "212"
       ]
      ],
      "sections": [
       {
        "titre": "Featured video",
        "texte": "'What fish really know': a lecture by Mehdi Masson, animal cognition researcher. He presents his team's experiments on learning and memory in goldfish, with footage filmed in the laboratory's aquariums, then answers questions from the audience."
       },
       {
        "titre": "More videos from the channel",
        "liste": [
         "Why migratory birds don't get lost",
         "Can ants count?",
         "Volcanoes: how to forecast an eruption"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p56-2": {
  "nom": "Yaël Ferreira",
  "genre": "f",
  "cle": {
   "fr": "Blog d'un coach en marketing digital",
   "en": "A digital marketing coach's blog"
  },
  "support": {
   "fr": "Article de blog",
   "en": "Blog post"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Formation « Copywriting Magnétique » – AttentionMax",
     "url": "attentionmax.fr › formations › copywriting-magnetique",
     "extrait": "Écrivez des textes qui font vendre. La méthode de Yaël Ferreira déjà suivie par plus de 3 000 élèves. Offre de lancement : 497 €…",
     "page": {
      "type": "commerce",
      "site": "AttentionMax",
      "domaine": "attentionmax.fr",
      "titre": "Formation « Copywriting Magnétique »",
      "sousTitre": "Écrivez des textes qui font vendre",
      "date": null,
      "encart": [
       [
        "Prix",
        "497 € (au lieu de 997 €)"
       ],
       [
        "Format",
        "12 modules vidéo + groupe privé"
       ],
       [
        "Places restantes",
        "7"
       ],
       [
        "Garantie",
        "Satisfait ou remboursé 14 jours"
       ]
      ],
      "sections": [
       {
        "titre": "Qui suis-je ?",
        "texte": "Je m'appelle Yaël Ferreira. Après des années dans une agence de communication, j'ai créé AttentionMax pour aider les indépendants à vendre en ligne. Ma méthode a déjà séduit plus de 3 000 élèves, qui écrivent aujourd'hui des pages de vente qui convertissent."
       },
       {
        "titre": "Ce que vous allez apprendre",
        "liste": [
         "Écrire des titres qui arrêtent le défilement",
         "Transformer un visiteur en client",
         "Les 7 déclencheurs psychologiques de l'achat",
         "Mes modèles de courriels prêts à copier"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "'Magnetic Copywriting' course – AttentionMax",
     "url": "attentionmax.fr › courses › magnetic-copywriting",
     "extrait": "Write copy that sells. Yaël Ferreira's method, already followed by more than 3,000 students. Launch offer: €497…",
     "page": {
      "type": "commerce",
      "site": "AttentionMax",
      "domaine": "attentionmax.fr",
      "titre": "'Magnetic Copywriting' course",
      "sousTitre": "Write copy that sells",
      "date": null,
      "encart": [
       [
        "Price",
        "€497 (instead of €997)"
       ],
       [
        "Format",
        "12 video modules + private group"
       ],
       [
        "Places left",
        "7"
       ],
       [
        "Guarantee",
        "14-day money-back guarantee"
       ]
      ],
      "sections": [
       {
        "titre": "Who am I?",
        "texte": "My name is Yaël Ferreira. After years in a communications agency, I founded AttentionMax to help freelancers sell online. My method has already won over more than 3,000 students, who now write sales pages that convert."
       },
       {
        "titre": "What you will learn",
        "liste": [
         "Writing headlines that stop the scroll",
         "Turning a visitor into a customer",
         "The 7 psychological triggers of buying",
         "My ready-to-copy email templates"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Yaël Ferreira – Fondatrice d'AttentionMax | Copywriter | Formatrice web – ProLink",
     "url": "prolink.pro › in › yael-ferreira-attentionmax",
     "extrait": "Fondatrice, AttentionMax (depuis 2020). Formation : BTS Communication, bachelor Marketing digital…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.pro",
      "titre": "Yaël Ferreira",
      "sousTitre": "Fondatrice d'AttentionMax | Copywriter | Formatrice web",
      "date": null,
      "encart": [
       [
        "Poste actuel",
        "Fondatrice, AttentionMax"
       ],
       [
        "Formation",
        "BTS Communication, puis bachelor Marketing digital, Institut Pixel Business"
       ],
       [
        "Relations",
        "500+"
       ]
      ],
      "sections": [
       {
        "titre": "Expérience",
        "liste": [
         "Fondatrice, AttentionMax (2020 - aujourd'hui)",
         "Cheffe de projet web, agence Clic & Co (2014-2020)",
         "Assistante communication, Salon Maison & Déco (2012-2014)"
        ]
       },
       {
        "titre": "Compétences",
        "liste": [
         "Copywriting",
         "Tunnels de vente",
         "Publicité sur les réseaux sociaux",
         "Rédaction de pages de vente"
        ]
       },
       {
        "titre": "Infos",
        "texte": "J'aide les entrepreneurs à trouver les mots qui déclenchent l'achat. Conférencière dans les salons de l'entrepreneuriat en ligne."
       }
      ]
     }
    },
    "en": {
     "titre": "Yaël Ferreira – Founder of AttentionMax | Copywriter | Online trainer – ProLink",
     "url": "prolink.pro › in › yael-ferreira-attentionmax",
     "extrait": "Founder, AttentionMax (since 2020). Education: vocational diploma in communication, bachelor's in digital marketing…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.pro",
      "titre": "Yaël Ferreira",
      "sousTitre": "Founder of AttentionMax | Copywriter | Online trainer",
      "date": null,
      "encart": [
       [
        "Current position",
        "Founder, AttentionMax"
       ],
       [
        "Education",
        "Vocational diploma in communication, then bachelor's in digital marketing, Institut Pixel Business"
       ],
       [
        "Connections",
        "500+"
       ]
      ],
      "sections": [
       {
        "titre": "Experience",
        "liste": [
         "Founder, AttentionMax (2020 - present)",
         "Web project manager, Clic & Co agency (2014-2020)",
         "Communications assistant, Maison & Déco trade fair (2012-2014)"
        ]
       },
       {
        "titre": "Skills",
        "liste": [
         "Copywriting",
         "Sales funnels",
         "Social media advertising",
         "Writing sales pages"
        ]
       },
       {
        "titre": "About",
        "texte": "I help entrepreneurs find the words that trigger a purchase. Speaker at online entrepreneurship fairs."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Yaël Ferreira (@yael_attentionmax) – Chirp",
     "url": "chirp.social › @yael_attentionmax",
     "extrait": "Copywriter. Je t'apprends à vendre avec des mots. Formation ouverte, lien ci-dessous…",
     "page": {
      "type": "social",
      "site": "Chirp",
      "domaine": "chirp.social",
      "titre": "Yaël Ferreira",
      "sousTitre": "@yael_attentionmax",
      "date": null,
      "encart": [
       [
        "Abonnés",
        "24 300"
       ],
       [
        "Abonnements",
        "310"
       ],
       [
        "Bio",
        "Copywriter. Je t'apprends à vendre avec des mots. Formation ouverte ➜ attentionmax.fr"
       ]
      ],
      "sections": [
       {
        "titre": "Publications récentes",
        "liste": [
         "« Ton client décroche en quelques secondes. Ton texte doit frapper fort dès la première ligne. »",
         "« -50 % sur la formation jusqu'à dimanche minuit ! »",
         "« Encore une élève qui a doublé ses ventes. Et toi, tu attends quoi ? »",
         "« Live ce soir 21 h : mes 3 phrases d'accroche préférées. »"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Yaël Ferreira (@yael_attentionmax) – Chirp",
     "url": "chirp.social › @yael_attentionmax",
     "extrait": "Copywriter. I teach you to sell with words. Course now open, link below…",
     "page": {
      "type": "social",
      "site": "Chirp",
      "domaine": "chirp.social",
      "titre": "Yaël Ferreira",
      "sousTitre": "@yael_attentionmax",
      "date": null,
      "encart": [
       [
        "Followers",
        "24,300"
       ],
       [
        "Following",
        "310"
       ],
       [
        "Bio",
        "Copywriter. I teach you to sell with words. Course now open ➜ attentionmax.fr"
       ]
      ],
      "sections": [
       {
        "titre": "Recent posts",
        "liste": [
         "'Your customer tunes out in seconds. Your copy has to hit hard from the very first line.'",
         "'50% off the course until midnight on Sunday!'",
         "'Another student who doubled her sales. What are you waiting for?'",
         "'Live tonight at 9 pm: my 3 favourite opening lines.'"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p58-0": {
  "nom": "Raphaël Meunier",
  "genre": "m",
  "cle": {
   "fr": "Historien, spécialiste de la Révolution française",
   "en": "Historian, specialist in the French Revolution"
  },
  "support": {
   "fr": "Tribune dans un journal",
   "en": "Newspaper op-ed"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Raphaël Meunier – Professeur d'histoire moderne – Université de Clairval",
     "url": "univ-clairval.fr › histoire › enseignants › raphael-meunier",
     "extrait": "Professeur d'histoire moderne, spécialiste de la Révolution française, de ses chants et de ses fêtes. Centre d'études révolutionnaires et impériales…",
     "page": {
      "type": "institution",
      "site": "Université de Clairval",
      "domaine": "univ-clairval.fr",
      "titre": "Raphaël Meunier",
      "sousTitre": "Professeur d'histoire moderne",
      "date": null,
      "encart": [
       [
        "Centre de recherche",
        "Centre d'études révolutionnaires et impériales"
       ],
       [
        "Thèse",
        "2002, Chanter la nation : hymnes et chansons patriotiques, 1789-1799"
       ],
       [
        "Enseignement",
        "Licence et master d'histoire"
       ]
      ],
      "sections": [
       {
        "titre": "Recherches",
        "texte": "Raphaël Meunier étudie la Révolution française à travers ses chants, ses fêtes et ses journaux. Il analyse comment les textes patriotiques ont été écrits, imprimés, chantés et compris par leurs contemporains entre 1789 et 1799, en s'appuyant sur les archives des armées et des clubs révolutionnaires."
       },
       {
        "titre": "Publications",
        "liste": [
         "Les Chants de la Révolution, 1789-1799 (2010)",
         "La Patrie en danger : guerre et opinion en 1792 (2016)",
         "Dictionnaire des fêtes révolutionnaires (direction, 2021)"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Raphaël Meunier – Professor of Early Modern History – University of Clairval",
     "url": "univ-clairval.fr › history › staff › raphael-meunier",
     "extrait": "Professor of early modern history, specialist in the French Revolution, its songs and its festivals. Centre for Revolutionary and Imperial Studies…",
     "page": {
      "type": "institution",
      "site": "University of Clairval",
      "domaine": "univ-clairval.fr",
      "titre": "Raphaël Meunier",
      "sousTitre": "Professor of Early Modern History",
      "date": null,
      "encart": [
       [
        "Research centre",
        "Centre for Revolutionary and Imperial Studies"
       ],
       [
        "PhD",
        "2002, Singing the nation: patriotic hymns and songs, 1789-1799"
       ],
       [
        "Teaching",
        "Undergraduate and master's degrees in history"
       ]
      ],
      "sections": [
       {
        "titre": "Research",
        "texte": "Raphaël Meunier studies the French Revolution through its songs, festivals and newspapers. He analyses how patriotic texts were written, printed, sung and understood by people at the time, between 1789 and 1799, drawing on the archives of the armies and the revolutionary clubs."
       },
       {
        "titre": "Publications",
        "liste": [
         "Les Chants de la Révolution, 1789-1799 (Songs of the Revolution, 2010)",
         "La Patrie en danger (The Fatherland in Danger: war and opinion in 1792, 2016)",
         "Dictionnaire des fêtes révolutionnaires (Dictionary of Revolutionary Festivals, editor, 2021)"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Raphaël Meunier, l'historien qui fait chanter les archives – Le Journal des Deux-Rives",
     "url": "journaldesdeuxrives.fr › culture › raphael-meunier-historien",
     "extrait": "Professeur à l'Université de Clairval, Raphaël Meunier a passé vingt ans à dépouiller les chansonniers de la Révolution…",
     "page": {
      "type": "presse",
      "site": "Le Journal des Deux-Rives",
      "domaine": "journaldesdeuxrives.fr",
      "titre": "Raphaël Meunier, l'historien qui fait chanter les archives",
      "sousTitre": "Culture, portrait",
      "date": "10 juillet 2024",
      "encart": [],
      "sections": [
       {
        "titre": "Portrait",
        "texte": "Professeur à l'Université de Clairval, Raphaël Meunier a passé vingt ans à dépouiller les chansonniers, les affiches et les journaux de la Révolution. « Un chant de 1792 ne se comprend qu'avec les documents qui l'entourent », explique-t-il dans son bureau encombré de fac-similés. Il est le commissaire de l'exposition « Aux armes ! Chansons de 1792 », présentée cet été au musée départemental."
       },
       {
        "titre": "À voir",
        "liste": [
         "Exposition jusqu'au 29 septembre",
         "Visites guidées par l'historien le samedi",
         "Concert de chants révolutionnaires le 14 juillet"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Raphaël Meunier, the historian who makes the archives sing – Le Journal des Deux-Rives",
     "url": "journaldesdeuxrives.fr › culture › raphael-meunier-historian",
     "extrait": "A professor at the University of Clairval, Raphaël Meunier has spent twenty years combing through the songbooks of the Revolution…",
     "page": {
      "type": "presse",
      "site": "Le Journal des Deux-Rives",
      "domaine": "journaldesdeuxrives.fr",
      "titre": "Raphaël Meunier, the historian who makes the archives sing",
      "sousTitre": "Culture, profile",
      "date": "10 July 2024",
      "encart": [],
      "sections": [
       {
        "titre": "Profile",
        "texte": "A professor at the University of Clairval, Raphaël Meunier has spent twenty years combing through the songbooks, posters and newspapers of the Revolution. 'A song from 1792 can only be understood with the documents around it,' he explains in his office cluttered with facsimiles. He is the curator of the exhibition 'To arms! Songs of 1792', on show this summer at the county museum."
       },
       {
        "titre": "What's on",
        "liste": [
         "Exhibition until 29 September",
         "Guided tours by the historian on Saturdays",
         "Concert of revolutionary songs on 14 July"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Pâtisserie Raphaël Meunier – Artisan pâtissier à Annecy",
     "url": "patisserie-meunier-annecy.fr › la-maison",
     "extrait": "Artisan pâtissier depuis 2008, Raphaël Meunier vous accueille rue des Tilleuls. Gâteaux de fête, entremets, chocolats maison…",
     "page": {
      "type": "commerce",
      "site": "Pâtisserie Raphaël Meunier",
      "domaine": "patisserie-meunier-annecy.fr",
      "titre": "Pâtisserie Raphaël Meunier",
      "sousTitre": "Artisan pâtissier depuis 2008",
      "date": null,
      "encart": [
       [
        "Adresse",
        "12, rue des Tilleuls, Annecy"
       ],
       [
        "Horaires",
        "Du mardi au dimanche, 7 h - 19 h 30"
       ],
       [
        "Commandes",
        "48 h à l'avance pour les gâteaux de fête"
       ]
      ],
      "sections": [
       {
        "titre": "Notre histoire",
        "texte": "Formé auprès de grands chefs à Lyon, Raphaël Meunier a ouvert sa boutique en 2008. Avec son équipe de cinq pâtissiers, il travaille chaque jour des fruits de saison et des produits de producteurs savoyards."
       },
       {
        "titre": "Nos spécialités",
        "liste": [
         "Tarte aux myrtilles des Aravis",
         "Entremets chocolat-noisette",
         "Gâteau de Savoie revisité",
         "Chocolats et pâtes de fruits maison"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Pâtisserie Raphaël Meunier – Artisan pastry chef in Annecy",
     "url": "patisserie-meunier-annecy.fr › about-us",
     "extrait": "An artisan pastry chef since 2008, Raphaël Meunier welcomes you on rue des Tilleuls. Celebration cakes, layered desserts, homemade chocolates…",
     "page": {
      "type": "commerce",
      "site": "Pâtisserie Raphaël Meunier",
      "domaine": "patisserie-meunier-annecy.fr",
      "titre": "Pâtisserie Raphaël Meunier",
      "sousTitre": "Artisan pastry chef since 2008",
      "date": null,
      "encart": [
       [
        "Address",
        "12, rue des Tilleuls, Annecy"
       ],
       [
        "Opening hours",
        "Tuesday to Sunday, 7 am - 7.30 pm"
       ],
       [
        "Orders",
        "48 hours in advance for celebration cakes"
       ]
      ],
      "sections": [
       {
        "titre": "Our story",
        "texte": "Trained by great chefs in Lyon, Raphaël Meunier opened his shop in 2008. With his team of five pastry chefs, he works every day with seasonal fruit and produce from Savoie growers."
       },
       {
        "titre": "Our specialities",
        "liste": [
         "Aravis blueberry tart",
         "Chocolate-hazelnut layered dessert",
         "A new take on Savoie sponge cake",
         "Homemade chocolates and fruit jellies"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p59-1": {
  "nom": "Nathalie Chauvin",
  "genre": "f",
  "cle": {
   "fr": "Pharmacologue clinicienne",
   "en": "Clinical pharmacologist"
  },
  "support": {
   "fr": "Interview dans un journal",
   "en": "Newspaper interview"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Dr Nathalie Chauvin – Pharmacologie clinique – CHU de Valmontier",
     "url": "chu-valmontier.fr › services › pharmacologie-clinique › equipe",
     "extrait": "Pharmacologue, maîtresse de conférences et praticienne hospitalière. Centre de pharmacovigilance, médicaments de la douleur…",
     "page": {
      "type": "institution",
      "site": "CHU de Valmontier",
      "domaine": "chu-valmontier.fr",
      "titre": "Dr Nathalie Chauvin",
      "sousTitre": "Pharmacologue, maîtresse de conférences et praticienne hospitalière",
      "date": null,
      "encart": [
       [
        "Service",
        "Pharmacologie clinique et pharmacovigilance"
       ],
       [
        "Spécialité",
        "Médicaments de la douleur"
       ],
       [
        "Enseignement",
        "Faculté de médecine de Valmontier"
       ]
      ],
      "sections": [
       {
        "titre": "Présentation",
        "texte": "Le Dr Nathalie Chauvin partage son temps entre l'hôpital, la recherche et l'enseignement. Au sein du centre de pharmacovigilance, elle analyse les effets indésirables des médicaments signalés par les soignants et répond aux questions des médecins sur les doses et les interactions. Elle enseigne la pharmacologie aux futurs médecins."
       },
       {
        "titre": "Thèmes de recherche",
        "liste": [
         "Antalgiques courants : efficacité et toxicité",
         "Surdosages accidentels",
         "Mode d'action des médicaments de la douleur"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Dr Nathalie Chauvin – Clinical Pharmacology – Valmontier University Hospital",
     "url": "chu-valmontier.fr › departments › clinical-pharmacology › team",
     "extrait": "Pharmacologist, associate professor and hospital practitioner. Pharmacovigilance centre, pain medication…",
     "page": {
      "type": "institution",
      "site": "Valmontier University Hospital",
      "domaine": "chu-valmontier.fr",
      "titre": "Dr Nathalie Chauvin",
      "sousTitre": "Pharmacologist, associate professor and hospital practitioner",
      "date": null,
      "encart": [
       [
        "Department",
        "Clinical pharmacology and pharmacovigilance"
       ],
       [
        "Speciality",
        "Pain medication"
       ],
       [
        "Teaching",
        "Valmontier Faculty of Medicine"
       ]
      ],
      "sections": [
       {
        "titre": "Profile",
        "texte": "Dr Nathalie Chauvin divides her time between the hospital, research and teaching. At the pharmacovigilance centre, she analyses the side effects of medicines reported by health professionals and answers doctors' questions about doses and interactions. She teaches pharmacology to future doctors."
       },
       {
        "titre": "Research topics",
        "liste": [
         "Common painkillers: effectiveness and toxicity",
         "Accidental overdoses",
         "How pain medicines work"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Chauvin, Nathalie – Fiche auteur – SciIndex",
     "url": "sciindex.org › auteurs › chauvin-nathalie",
     "extrait": "89 publications · 2 970 citations · Pharmacologie clinique, douleur, toxicologie · CHU de Valmontier…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Chauvin, Nathalie",
      "sousTitre": "CHU de Valmontier, service de pharmacologie clinique",
      "date": null,
      "encart": [
       [
        "Publications",
        "89"
       ],
       [
        "Citations",
        "2 970"
       ],
       [
        "Domaines",
        "Pharmacologie clinique, douleur, toxicologie"
       ],
       [
        "Première publication",
        "2004"
       ]
      ],
      "sections": [
       {
        "titre": "Publications les plus citées",
        "liste": [
         "Toxicité hépatique des antalgiques en vente libre : quinze ans de signalements (2018)",
         "Mécanismes d'action des antalgiques non opioïdes : état des connaissances (2021)",
         "Interactions médicamenteuses chez la personne âgée (2015)",
         "Surdosages chez l'enfant : étude multicentrique (2022)"
        ]
       },
       {
        "titre": "Revues principales",
        "texte": "Revue française de pharmacologie clinique, Journal européen de toxicologie, Douleur et analgésie."
       }
      ]
     }
    },
    "en": {
     "titre": "Chauvin, Nathalie – Author profile – SciIndex",
     "url": "sciindex.org › authors › chauvin-nathalie",
     "extrait": "89 publications · 2,970 citations · Clinical pharmacology, pain, toxicology · Valmontier University Hospital…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Chauvin, Nathalie",
      "sousTitre": "Valmontier University Hospital, Department of Clinical Pharmacology",
      "date": null,
      "encart": [
       [
        "Publications",
        "89"
       ],
       [
        "Citations",
        "2,970"
       ],
       [
        "Fields",
        "Clinical pharmacology, pain, toxicology"
       ],
       [
        "First publication",
        "2004"
       ]
      ],
      "sections": [
       {
        "titre": "Most cited publications",
        "liste": [
         "Liver toxicity of over-the-counter painkillers: fifteen years of reports (2018)",
         "Mechanisms of action of non-opioid painkillers: the state of knowledge (2021)",
         "Drug interactions in older people (2015)",
         "Overdoses in children: a multicentre study (2022)"
        ]
       },
       {
        "titre": "Main journals",
        "texte": "French Review of Clinical Pharmacology, European Journal of Toxicology, Pain and Analgesia."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Médicaments du quotidien : cinq questions à une pharmacologue – Le Quotidien du Patient",
     "url": "quotidiendupatient.fr › sante › medicaments-du-quotidien",
     "extrait": "Nathalie Chauvin, pharmacologue au CHU de Valmontier, répond aux questions de nos lecteurs sur l'armoire à pharmacie familiale…",
     "page": {
      "type": "presse",
      "site": "Le Quotidien du Patient",
      "domaine": "quotidiendupatient.fr",
      "titre": "Médicaments du quotidien : cinq questions à une pharmacologue",
      "sousTitre": "Santé, vos questions",
      "date": "3 octobre 2025",
      "encart": [],
      "sections": [
       {
        "titre": "L'entretien",
        "texte": "Nathalie Chauvin, pharmacologue au CHU de Valmontier, répond aux questions de nos lecteurs sur l'armoire à pharmacie familiale. Spécialiste des médicaments contre la douleur, elle rappelle qu'un produit vendu sans ordonnance reste un médicament, avec des doses à respecter et des risques en cas d'erreur."
       },
       {
        "titre": "Les questions abordées",
        "liste": [
         "Peut-on couper un comprimé en deux ?",
         "Pourquoi respecter l'intervalle entre deux prises ?",
         "Que faire en cas d'oubli ?",
         "Où ranger les médicaments à la maison ?"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Everyday medicines: five questions for a pharmacologist – Le Quotidien du Patient",
     "url": "quotidiendupatient.fr › health › everyday-medicines",
     "extrait": "Nathalie Chauvin, a pharmacologist at Valmontier University Hospital, answers our readers' questions about the family medicine cabinet…",
     "page": {
      "type": "presse",
      "site": "Le Quotidien du Patient",
      "domaine": "quotidiendupatient.fr",
      "titre": "Everyday medicines: five questions for a pharmacologist",
      "sousTitre": "Health, your questions",
      "date": "3 October 2025",
      "encart": [],
      "sections": [
       {
        "titre": "The interview",
        "texte": "Nathalie Chauvin, a pharmacologist at Valmontier University Hospital, answers our readers' questions about the family medicine cabinet. A specialist in pain medication, she points out that a product sold without a prescription is still a medicine, with doses to respect and risks if mistakes are made."
       },
       {
        "titre": "Questions covered",
        "liste": [
         "Can you cut a tablet in half?",
         "Why respect the interval between two doses?",
         "What should you do if you forget a dose?",
         "Where should medicines be kept at home?"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p61-1": {
  "nom": "Lina Aubry",
  "genre": "f",
  "cle": {
   "fr": "Chercheuse en chimie de l'atmosphère",
   "en": "Atmospheric chemistry researcher"
  },
  "support": {
   "fr": "Publication sur un réseau social",
   "en": "Social media post"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Lina Aubry – Chimie stratosphérique – Observatoire de physique de l'atmosphère du Mont-Aiguillon",
     "url": "opa-montaiguillon.fr › equipes › chimie-stratospherique › lina-aubry",
     "extrait": "Chercheuse en chimie de l'atmosphère, équipe Chimie stratosphérique. Mesures et modélisation de l'ozone, campagnes en Antarctique…",
     "page": {
      "type": "institution",
      "site": "Observatoire de physique de l'atmosphère du Mont-Aiguillon",
      "domaine": "opa-montaiguillon.fr",
      "titre": "Lina Aubry",
      "sousTitre": "Chercheuse en chimie de l'atmosphère",
      "date": null,
      "encart": [
       [
        "Équipe",
        "Chimie stratosphérique"
       ],
       [
        "Thèse",
        "2008, Destruction de l'ozone par les composés chlorés au-dessus de l'Antarctique"
       ],
       [
        "Instruments",
        "Spectromètres au sol, ballons-sondes"
       ]
      ],
      "sections": [
       {
        "titre": "Recherches",
        "texte": "Lina Aubry mesure et modélise la quantité d'ozone dans la haute atmosphère. Elle suit l'évolution des gaz qui détruisent l'ozone, comme les CFC, et participe chaque année à des campagnes de mesures en Antarctique. Les modèles de son équipe servent à établir des projections pour les décennies à venir."
       },
       {
        "titre": "Responsabilités",
        "liste": [
         "Coordinatrice du réseau de spectromètres de l'observatoire",
         "Contributrice à des rapports d'évaluation internationaux sur l'ozone"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Lina Aubry – Stratospheric Chemistry – Mont-Aiguillon Atmospheric Physics Observatory",
     "url": "opa-montaiguillon.fr › teams › stratospheric-chemistry › lina-aubry",
     "extrait": "Atmospheric chemistry researcher, Stratospheric Chemistry team. Ozone measurement and modelling, Antarctic field campaigns…",
     "page": {
      "type": "institution",
      "site": "Mont-Aiguillon Atmospheric Physics Observatory",
      "domaine": "opa-montaiguillon.fr",
      "titre": "Lina Aubry",
      "sousTitre": "Atmospheric chemistry researcher",
      "date": null,
      "encart": [
       [
        "Team",
        "Stratospheric Chemistry"
       ],
       [
        "PhD",
        "2008, Ozone destruction by chlorine compounds over Antarctica"
       ],
       [
        "Instruments",
        "Ground-based spectrometers, weather balloons"
       ]
      ],
      "sections": [
       {
        "titre": "Research",
        "texte": "Lina Aubry measures and models the amount of ozone in the upper atmosphere. She tracks the gases that destroy ozone, such as CFCs, and takes part in measurement campaigns in Antarctica every year. Her team's models are used to produce projections for the coming decades."
       },
       {
        "titre": "Responsibilities",
        "liste": [
         "Coordinator of the observatory's spectrometer network",
         "Contributor to international ozone assessment reports"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Aubry, Lina – Fiche auteur – SciIndex",
     "url": "sciindex.org › auteurs › aubry-lina",
     "extrait": "67 publications · 3 820 citations · Chimie de l'atmosphère, ozone stratosphérique…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Aubry, Lina",
      "sousTitre": "Observatoire de physique de l'atmosphère du Mont-Aiguillon",
      "date": null,
      "encart": [
       [
        "Publications",
        "67"
       ],
       [
        "Citations",
        "3 820"
       ],
       [
        "Domaines",
        "Chimie de l'atmosphère, ozone stratosphérique"
       ],
       [
        "Première publication",
        "2006"
       ]
      ],
      "sections": [
       {
        "titre": "Publications les plus citées",
        "liste": [
         "Évolution de l'ozone antarctique de 1990 à 2020 (2021)",
         "Détection d'émissions inattendues de CFC-11 à partir de mesures au sol (2019, co-autrice)",
         "Modéliser le chlore stratosphérique : incertitudes et scénarios (2023)",
         "Ballons-sondes et profils d'ozone : vingt ans de mesures (2016)"
        ]
       },
       {
        "titre": "Revues principales",
        "texte": "Journal de chimie atmosphérique, Géophysique et climat, Revue des sciences polaires."
       }
      ]
     }
    },
    "en": {
     "titre": "Aubry, Lina – Author profile – SciIndex",
     "url": "sciindex.org › authors › aubry-lina",
     "extrait": "67 publications · 3,820 citations · Atmospheric chemistry, stratospheric ozone…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Aubry, Lina",
      "sousTitre": "Mont-Aiguillon Atmospheric Physics Observatory",
      "date": null,
      "encart": [
       [
        "Publications",
        "67"
       ],
       [
        "Citations",
        "3,820"
       ],
       [
        "Fields",
        "Atmospheric chemistry, stratospheric ozone"
       ],
       [
        "First publication",
        "2006"
       ]
      ],
      "sections": [
       {
        "titre": "Most cited publications",
        "liste": [
         "Antarctic ozone trends from 1990 to 2020 (2021)",
         "Detecting unexpected CFC-11 emissions from ground-based measurements (2019, co-author)",
         "Modelling stratospheric chlorine: uncertainties and scenarios (2023)",
         "Weather balloons and ozone profiles: twenty years of measurements (2016)"
        ]
       },
       {
        "titre": "Main journals",
        "texte": "Journal of Atmospheric Chemistry, Geophysics and Climate, Review of Polar Sciences."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Lina Aubry (@LinaAubry_atmo) – Chirp",
     "url": "chirp.social › @LinaAubry_atmo",
     "extrait": "Chimiste de l'atmosphère. Ozone, CFC, ballons-sondes. Avis personnels. Retour de la station antarctique après six semaines…",
     "page": {
      "type": "social",
      "site": "Chirp",
      "domaine": "chirp.social",
      "titre": "Lina Aubry",
      "sousTitre": "@LinaAubry_atmo",
      "date": null,
      "encart": [
       [
        "Abonnés",
        "6 900"
       ],
       [
        "Abonnements",
        "420"
       ],
       [
        "Bio",
        "Chimiste de l'atmosphère à l'observatoire du Mont-Aiguillon. Ozone, CFC, ballons-sondes. Avis personnels."
       ]
      ],
      "sections": [
       {
        "titre": "Publications récentes",
        "liste": [
         "« Retour de la station antarctique après six semaines de mesures. Les ballons-sondes ont tous été récupérés ! »",
         "« Notre nouvel article sur les scénarios de chlore stratosphérique est en accès libre. »",
         "« Ce soir, je réponds en direct aux questions d'une classe de 3e sur l'atmosphère. »",
         "« Rappel : une projection repose toujours sur des hypothèses. Lisez-les. »"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Lina Aubry (@LinaAubry_atmo) – Chirp",
     "url": "chirp.social › @LinaAubry_atmo",
     "extrait": "Atmospheric chemist. Ozone, CFCs, weather balloons. Views my own. Back from the Antarctic station after six weeks…",
     "page": {
      "type": "social",
      "site": "Chirp",
      "domaine": "chirp.social",
      "titre": "Lina Aubry",
      "sousTitre": "@LinaAubry_atmo",
      "date": null,
      "encart": [
       [
        "Followers",
        "6,900"
       ],
       [
        "Following",
        "420"
       ],
       [
        "Bio",
        "Atmospheric chemist at the Mont-Aiguillon observatory. Ozone, CFCs, weather balloons. Views my own."
       ]
      ],
      "sections": [
       {
        "titre": "Recent posts",
        "liste": [
         "'Back from the Antarctic station after six weeks of measurements. All the weather balloons were recovered!'",
         "'Our new paper on stratospheric chlorine scenarios is open access.'",
         "'Tonight I'm answering a Year 10 class's questions about the atmosphere, live.'",
         "'Reminder: a projection always rests on assumptions. Read them.'"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p62-1": {
  "nom": "Tristan Millet",
  "genre": "m",
  "cle": {
   "fr": "Ingénieur forestier, santé des peuplements",
   "en": "Forestry engineer, stand health"
  },
  "support": {
   "fr": "Reportage télévisé",
   "en": "TV report"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Tristan Millet – Ingénieur santé des forêts – Observatoire national de la santé des forêts",
     "url": "onsf-forets.fr › equipe › nord-est › tristan-millet",
     "extrait": "Ingénieur forestier, département Santé des forêts, secteur Grand Est et Bourgogne. Coordonne le réseau de surveillance des peuplements…",
     "page": {
      "type": "institution",
      "site": "Observatoire national de la santé des forêts",
      "domaine": "onsf-forets.fr",
      "titre": "Tristan Millet",
      "sousTitre": "Ingénieur forestier, correspondant régional santé des forêts",
      "date": null,
      "encart": [
       [
        "Département",
        "Santé des forêts"
       ],
       [
        "Secteur",
        "Grand Est et Bourgogne"
       ],
       [
        "Formation",
        "Ingénieur forestier, École supérieure des forêts de Vosgelande (2007)"
       ]
      ],
      "sections": [
       {
        "titre": "Missions",
        "texte": "Tristan Millet coordonne le réseau de surveillance des forêts de l'est de la France. Avec une trentaine d'observateurs de terrain, il recense chaque année les arbres morts ou affaiblis, identifie les causes (sécheresse, insectes, champignons) et alimente les bilans nationaux sur l'état sanitaire des forêts."
       },
       {
        "titre": "Dernières publications du réseau",
        "liste": [
         "Bilan sanitaire des forêts du Nord-Est 2024",
         "Scolytes de l'épicéa : point de situation",
         "Guide de diagnostic des dépérissements"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Tristan Millet – Forest Health Engineer – National Forest Health Observatory",
     "url": "onsf-forets.fr › team › north-east › tristan-millet",
     "extrait": "Forestry engineer, Forest Health department, Grand Est and Burgundy area. Coordinates the stand monitoring network…",
     "page": {
      "type": "institution",
      "site": "National Forest Health Observatory",
      "domaine": "onsf-forets.fr",
      "titre": "Tristan Millet",
      "sousTitre": "Forestry engineer, regional forest health officer",
      "date": null,
      "encart": [
       [
        "Department",
        "Forest Health"
       ],
       [
        "Area",
        "Grand Est and Burgundy"
       ],
       [
        "Education",
        "Forestry engineering degree, Vosgelande School of Forestry (2007)"
       ]
      ],
      "sections": [
       {
        "titre": "Role",
        "texte": "Tristan Millet coordinates the forest monitoring network for eastern France. With some thirty field observers, he records dead or weakened trees every year, identifies the causes (drought, insects, fungi) and feeds into the national reports on forest health."
       },
       {
        "titre": "Latest network publications",
        "liste": [
         "North-East forest health report 2024",
         "Spruce bark beetles: situation update",
         "Guide to diagnosing tree decline"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Scolytes : les épicéas tombent par milliers – L'Écho des Massifs",
     "url": "echodesmassifs.fr › environnement › scolytes-epiceas",
     "extrait": "« Sur certaines parcelles, plus de la moitié des épicéas sont morts en trois ans », constate Tristan Millet, ingénieur chargé de la santé des forêts…",
     "page": {
      "type": "presse",
      "site": "L'Écho des Massifs",
      "domaine": "echodesmassifs.fr",
      "titre": "Scolytes : les épicéas tombent par milliers",
      "sousTitre": "Environnement",
      "date": "14 septembre 2024",
      "encart": [],
      "sections": [
       {
        "titre": "Sur le terrain",
        "texte": "« Sur certaines parcelles, plus de la moitié des épicéas sont morts en trois ans », constate Tristan Millet, ingénieur forestier chargé de la santé des forêts. En arpentant une coupe près de Gérardmer, il montre les galeries creusées sous l'écorce par de minuscules coléoptères, les scolytes. Selon lui, les étés secs affaiblissent les arbres, qui deviennent des proies faciles."
       },
       {
        "titre": "Ce qu'il recommande aux propriétaires",
        "liste": [
         "Surveiller les arbres dès le printemps",
         "Évacuer rapidement les bois atteints",
         "Replanter des essences plus variées"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Bark beetles: spruce trees are falling by the thousand – L'Écho des Massifs",
     "url": "echodesmassifs.fr › environment › bark-beetles-spruce",
     "extrait": "'On some plots, more than half the spruce trees have died in three years,' says Tristan Millet, the engineer in charge of forest health…",
     "page": {
      "type": "presse",
      "site": "L'Écho des Massifs",
      "domaine": "echodesmassifs.fr",
      "titre": "Bark beetles: spruce trees are falling by the thousand",
      "sousTitre": "Environment",
      "date": "14 September 2024",
      "encart": [],
      "sections": [
       {
        "titre": "In the field",
        "texte": "'On some plots, more than half the spruce trees have died in three years,' says Tristan Millet, the forestry engineer in charge of forest health. Walking through a felled area near Gérardmer, he points out the tunnels dug under the bark by tiny beetles, bark beetles. In his view, dry summers weaken the trees, which become easy prey."
       },
       {
        "titre": "His advice to owners",
        "liste": [
         "Monitor trees from spring onwards",
         "Remove affected timber quickly",
         "Replant with a wider mix of species"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Tristan Millet – Ingénieur santé des forêts – ProLink",
     "url": "prolink.pro › in › tristan-millet-forets",
     "extrait": "Ingénieur santé des forêts à l'ONSF depuis 2015. Auparavant ingénieur aménagiste. Diagnostic sanitaire, inventaire forestier…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.pro",
      "titre": "Tristan Millet",
      "sousTitre": "Ingénieur santé des forêts, Observatoire national de la santé des forêts",
      "date": null,
      "encart": [
       [
        "Poste actuel",
        "Ingénieur santé des forêts, ONSF"
       ],
       [
        "Formation",
        "École supérieure des forêts de Vosgelande"
       ],
       [
        "Relations",
        "340"
       ]
      ],
      "sections": [
       {
        "titre": "Expérience",
        "liste": [
         "Ingénieur santé des forêts, ONSF (depuis 2015)",
         "Ingénieur aménagiste, Office des forêts du Jura-Doubs (2008-2015)",
         "Stage, station de recherche forestière de Haute-Saône (2007)"
        ]
       },
       {
        "titre": "Compétences",
        "liste": [
         "Diagnostic sanitaire des peuplements",
         "Inventaire forestier",
         "Entomologie forestière",
         "Cartographie"
        ]
       },
       {
        "titre": "Infos",
        "texte": "Passionné par la forêt de montagne, j'essaie de comprendre pourquoi certains peuplements résistent mieux que d'autres aux sécheresses."
       }
      ]
     }
    },
    "en": {
     "titre": "Tristan Millet – Forest Health Engineer – ProLink",
     "url": "prolink.pro › in › tristan-millet-forests",
     "extrait": "Forest health engineer at the NFHO since 2015. Previously a forest planning engineer. Health diagnosis, forest inventory…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.pro",
      "titre": "Tristan Millet",
      "sousTitre": "Forest health engineer, National Forest Health Observatory",
      "date": null,
      "encart": [
       [
        "Current position",
        "Forest health engineer, NFHO"
       ],
       [
        "Education",
        "Vosgelande School of Forestry"
       ],
       [
        "Connections",
        "340"
       ]
      ],
      "sections": [
       {
        "titre": "Experience",
        "liste": [
         "Forest health engineer, NFHO (since 2015)",
         "Forest planning engineer, Jura-Doubs Forestry Office (2008-2015)",
         "Internship, Haute-Saône forest research station (2007)"
        ]
       },
       {
        "titre": "Skills",
        "liste": [
         "Diagnosing stand health",
         "Forest inventory",
         "Forest entomology",
         "Mapping"
        ]
       },
       {
        "titre": "About",
        "texte": "Passionate about mountain forests, I try to understand why some stands withstand drought better than others."
       }
      ]
     }
    }
   }
  ]
 },
 "p62-2": {
  "nom": "Rachel Mansouri",
  "genre": "f",
  "cle": {
   "fr": "Historienne de l'environnement",
   "en": "Environmental historian"
  },
  "support": {
   "fr": "Épisode de podcast",
   "en": "Podcast episode"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Rachel Mansouri – Histoire de l'environnement – Université de Valbreuse",
     "url": "univ-valbreuse.fr › laboratoires › hpt › rachel-mansouri",
     "extrait": "Maîtresse de conférences en histoire contemporaine, laboratoire Histoire des paysages et des territoires. Spécialiste de l'histoire des forêts françaises…",
     "page": {
      "type": "institution",
      "site": "Université de Valbreuse",
      "domaine": "univ-valbreuse.fr",
      "titre": "Rachel Mansouri",
      "sousTitre": "Maîtresse de conférences en histoire contemporaine, histoire de l'environnement",
      "date": null,
      "encart": [
       [
        "Laboratoire",
        "Histoire des paysages et des territoires"
       ],
       [
        "Thèse",
        "2012, Des montagnes à reboiser : forêts et paysans dans les Alpes du Sud (1830-1914)"
       ]
      ],
      "sections": [
       {
        "titre": "Recherches",
        "texte": "Rachel Mansouri étudie l'histoire des forêts françaises depuis la fin du XVIIIe siècle : défrichements, lois de reboisement, exode rural. Elle travaille à partir de cadastres anciens, de cartes et d'archives des services forestiers pour reconstituer l'évolution des paysages sur deux siècles."
       },
       {
        "titre": "Publications",
        "liste": [
         "Forêts de France : deux siècles de paysages (2019)",
         "Reboiser la montagne : une politique du XIXe siècle (2015)",
         "Lire les cadastres anciens : guide pour historiens (2022)"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Rachel Mansouri – Environmental History – University of Valbreuse",
     "url": "univ-valbreuse.fr › laboratories › hpt › rachel-mansouri",
     "extrait": "Senior lecturer in modern history, History of Landscapes and Territories laboratory. Specialist in the history of French forests…",
     "page": {
      "type": "institution",
      "site": "University of Valbreuse",
      "domaine": "univ-valbreuse.fr",
      "titre": "Rachel Mansouri",
      "sousTitre": "Senior lecturer in modern history, environmental history",
      "date": null,
      "encart": [
       [
        "Laboratory",
        "History of Landscapes and Territories"
       ],
       [
        "PhD",
        "2012, Mountains to reforest: forests and peasants in the Southern Alps (1830-1914)"
       ]
      ],
      "sections": [
       {
        "titre": "Research",
        "texte": "Rachel Mansouri studies the history of French forests since the late 18th century: land clearance, reforestation laws, rural depopulation. She works from old land registers, maps and forestry service archives to reconstruct how landscapes changed over two centuries."
       },
       {
        "titre": "Publications",
        "liste": [
         "Forêts de France : deux siècles de paysages (Forests of France: two centuries of landscapes, 2019)",
         "Reboiser la montagne (Reforesting the mountains: a 19th-century policy, 2015)",
         "Lire les cadastres anciens (Reading old land registers: a guide for historians, 2022)"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "« Forêts de France », deux siècles de paysages racontés par une historienne – Le Courrier des Lettres",
     "url": "courrierdeslettres.fr › critiques › histoire › forets-de-france",
     "extrait": "Dans son livre, l'historienne Rachel Mansouri retrace deux siècles d'évolution des forêts françaises, des grands défrichements aux politiques de reboisement…",
     "page": {
      "type": "presse",
      "site": "Le Courrier des Lettres",
      "domaine": "courrierdeslettres.fr",
      "titre": "« Forêts de France », deux siècles de paysages racontés par une historienne",
      "sousTitre": "Critiques, histoire",
      "date": "2 avril 2019",
      "encart": [
       [
        "Livre",
        "Forêts de France : deux siècles de paysages"
       ],
       [
        "Autrice",
        "Rachel Mansouri"
       ],
       [
        "Pages",
        "352"
       ]
      ],
      "sections": [
       {
        "titre": "Notre avis",
        "texte": "Dans son livre, l'historienne Rachel Mansouri retrace deux siècles d'évolution des forêts françaises, des grands défrichements aux politiques de reboisement. Appuyé sur des cartes anciennes et des archives inédites, l'ouvrage montre comment les choix des paysans, des ingénieurs et de l'État ont dessiné les paysages actuels. Un livre exigeant mais très clair, illustré de nombreuses cartes."
       }
      ]
     }
    },
    "en": {
     "titre": "'Forêts de France': two centuries of landscapes told by a historian – Le Courrier des Lettres",
     "url": "courrierdeslettres.fr › reviews › history › forets-de-france",
     "extrait": "In her book, historian Rachel Mansouri traces two centuries of change in French forests, from large-scale land clearance to reforestation policies…",
     "page": {
      "type": "presse",
      "site": "Le Courrier des Lettres",
      "domaine": "courrierdeslettres.fr",
      "titre": "'Forêts de France': two centuries of landscapes told by a historian",
      "sousTitre": "Reviews, history",
      "date": "2 April 2019",
      "encart": [
       [
        "Book",
        "Forêts de France : deux siècles de paysages"
       ],
       [
        "Author",
        "Rachel Mansouri"
       ],
       [
        "Pages",
        "352"
       ]
      ],
      "sections": [
       {
        "titre": "Our verdict",
        "texte": "In her book, historian Rachel Mansouri traces two centuries of change in French forests, from large-scale land clearance to reforestation policies. Drawing on old maps and previously unpublished archives, the book shows how the choices of peasants, engineers and the state shaped today's landscapes. A demanding but very clear book, illustrated with many maps."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Rachel Mansouri (@atelier.petales) – Chirp",
     "url": "chirp.social › @atelier.petales",
     "extrait": "Fleuriste à Rouen. Bouquets de saison, mariages, ateliers couronnes de fleurs le samedi…",
     "page": {
      "type": "social",
      "site": "Chirp",
      "domaine": "chirp.social",
      "titre": "Rachel Mansouri",
      "sousTitre": "@atelier.petales",
      "date": null,
      "encart": [
       [
        "Abonnés",
        "3 150"
       ],
       [
        "Abonnements",
        "580"
       ],
       [
        "Bio",
        "Fleuriste à Rouen, Atelier Pétales. Bouquets de saison et mariages. Ateliers le samedi."
       ]
      ],
      "sections": [
       {
        "titre": "Publications récentes",
        "liste": [
         "« Les premières pivoines sont arrivées à la boutique ! »",
         "« Atelier couronnes de fleurs samedi 10 h, il reste 3 places. »",
         "« Merci à Léa et Hugo pour ce mariage plein de couleurs. »",
         "« Fermeture exceptionnelle lundi pour inventaire. »",
         "« Nouveau : livraison de bouquets dans tout Rouen le samedi matin. »"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Rachel Mansouri (@atelier.petales) – Chirp",
     "url": "chirp.social › @atelier.petales",
     "extrait": "Florist in Rouen. Seasonal bouquets, weddings, flower crown workshops on Saturdays…",
     "page": {
      "type": "social",
      "site": "Chirp",
      "domaine": "chirp.social",
      "titre": "Rachel Mansouri",
      "sousTitre": "@atelier.petales",
      "date": null,
      "encart": [
       [
        "Followers",
        "3,150"
       ],
       [
        "Following",
        "580"
       ],
       [
        "Bio",
        "Florist in Rouen, Atelier Pétales. Seasonal bouquets and weddings. Workshops on Saturdays."
       ]
      ],
      "sections": [
       {
        "titre": "Recent posts",
        "liste": [
         "'The first peonies have arrived at the shop!'",
         "'Flower crown workshop on Saturday at 10 am, 3 places left.'",
         "'Thank you to Léa and Hugo for such a colourful wedding.'",
         "'Closed on Monday for stocktaking.'",
         "'New: bouquet delivery across Rouen on Saturday mornings.'"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p64-1": {
  "nom": "Aurore Lacombe",
  "genre": "f",
  "cle": {
   "fr": "Égyptologue",
   "en": "Egyptologist"
  },
  "support": {
   "fr": "Vidéo en ligne",
   "en": "Online video"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Aurore Lacombe – Encyclopédia Libre",
     "url": "encyclopedia-libre.org › wiki › Aurore_Lacombe_(égyptologue)",
     "extrait": "Aurore Lacombe, née en 1974, est une égyptologue française, spécialiste de la chronologie de l'Ancien Empire…",
     "page": {
      "type": "encyclo",
      "site": "Encyclopédia Libre",
      "domaine": "encyclopedia-libre.org",
      "titre": "Aurore Lacombe (égyptologue)",
      "sousTitre": "Égyptologue française",
      "date": null,
      "encart": [
       [
        "Naissance",
        "1974"
       ],
       [
        "Domaine",
        "Égyptologie, Ancien Empire"
       ],
       [
        "Institution",
        "Institut d'archéologie orientale de Montvert"
       ],
       [
        "Thèse",
        "2003, Les chantiers des pyramides de la IVe dynastie"
       ]
      ],
      "sections": [
       {
        "titre": "Biographie",
        "texte": "Aurore Lacombe étudie l'archéologie et la langue hiéroglyphique avant de soutenir en 2003 une thèse sur les chantiers des pyramides de la IVe dynastie. Elle dirige depuis 2012 le département d'archéologie égyptienne de l'Institut d'archéologie orientale de Montvert."
       },
       {
        "titre": "Travaux",
        "texte": "Spécialiste de la chronologie de l'Ancien Empire, elle a participé à plusieurs missions de fouilles sur le plateau de Gizeh et à Dahchour. Ses recherches portent sur la datation des grands chantiers royaux et sur la vie des ouvriers qui y travaillaient."
       },
       {
        "titre": "Homonymie",
        "texte": "Ne pas confondre avec Aurore Lacombe, vidéaste spécialisée dans les jeux vidéo."
       }
      ]
     }
    },
    "en": {
     "titre": "Aurore Lacombe – Encyclopédia Libre",
     "url": "encyclopedia-libre.org › wiki › Aurore_Lacombe_(Egyptologist)",
     "extrait": "Aurore Lacombe, born in 1974, is a French Egyptologist specialising in the chronology of the Old Kingdom…",
     "page": {
      "type": "encyclo",
      "site": "Encyclopédia Libre",
      "domaine": "encyclopedia-libre.org",
      "titre": "Aurore Lacombe (Egyptologist)",
      "sousTitre": "French Egyptologist",
      "date": null,
      "encart": [
       [
        "Born",
        "1974"
       ],
       [
        "Field",
        "Egyptology, Old Kingdom"
       ],
       [
        "Institution",
        "Montvert Institute of Oriental Archaeology"
       ],
       [
        "PhD",
        "2003, The pyramid building sites of the 4th Dynasty"
       ]
      ],
      "sections": [
       {
        "titre": "Biography",
        "texte": "Aurore Lacombe studied archaeology and hieroglyphic writing before defending a PhD in 2003 on the pyramid building sites of the 4th Dynasty. Since 2012 she has headed the Department of Egyptian Archaeology at the Montvert Institute of Oriental Archaeology."
       },
       {
        "titre": "Work",
        "texte": "A specialist in the chronology of the Old Kingdom, she has taken part in several excavation missions on the Giza plateau and at Dahshur. Her research focuses on dating the great royal building sites and on the lives of the workers who built them."
       },
       {
        "titre": "Disambiguation",
        "texte": "Not to be confused with Aurore Lacombe, a video creator specialising in video games."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Aurore Lacombe – Département d'archéologie égyptienne – Institut d'archéologie orientale de Montvert",
     "url": "iao-montvert.fr › departements › egypte › aurore-lacombe",
     "extrait": "Directrice du département d'archéologie égyptienne. Spécialité : chronologie de l'Ancien Empire. Missions sur le plateau de Gizeh et à Dahchour…",
     "page": {
      "type": "institution",
      "site": "Institut d'archéologie orientale de Montvert",
      "domaine": "iao-montvert.fr",
      "titre": "Aurore Lacombe",
      "sousTitre": "Directrice du département d'archéologie égyptienne",
      "date": null,
      "encart": [
       [
        "Spécialité",
        "Chronologie de l'Ancien Empire"
       ],
       [
        "Missions",
        "Plateau de Gizeh, Dahchour"
       ],
       [
        "Langues anciennes",
        "Égyptien hiéroglyphique, hiératique"
       ]
      ],
      "sections": [
       {
        "titre": "Projets en cours",
        "liste": [
         "Affiner les datations radiocarbone des chantiers royaux",
         "Inventaire des graffitis laissés par les équipes d'ouvriers",
         "Formation des étudiants à l'épigraphie de terrain"
        ]
       },
       {
        "titre": "Séminaire",
        "texte": "Aurore Lacombe anime chaque premier jeudi du mois un séminaire ouvert au public, consacré aux méthodes de datation en archéologie égyptienne : textes, listes royales, observations astronomiques et analyses en laboratoire."
       }
      ]
     }
    },
    "en": {
     "titre": "Aurore Lacombe – Department of Egyptian Archaeology – Montvert Institute of Oriental Archaeology",
     "url": "iao-montvert.fr › departments › egypt › aurore-lacombe",
     "extrait": "Head of the Department of Egyptian Archaeology. Speciality: Old Kingdom chronology. Missions on the Giza plateau and at Dahshur…",
     "page": {
      "type": "institution",
      "site": "Montvert Institute of Oriental Archaeology",
      "domaine": "iao-montvert.fr",
      "titre": "Aurore Lacombe",
      "sousTitre": "Head of the Department of Egyptian Archaeology",
      "date": null,
      "encart": [
       [
        "Speciality",
        "Old Kingdom chronology"
       ],
       [
        "Missions",
        "Giza plateau, Dahshur"
       ],
       [
        "Ancient languages",
        "Hieroglyphic Egyptian, hieratic"
       ]
      ],
      "sections": [
       {
        "titre": "Current projects",
        "liste": [
         "Refining radiocarbon dates for the royal building sites",
         "Recording the graffiti left by work gangs",
         "Training students in field epigraphy"
        ]
       },
       {
        "titre": "Seminar",
        "texte": "On the first Thursday of every month, Aurore Lacombe runs a seminar open to the public on dating methods in Egyptian archaeology: texts, king lists, astronomical observations and laboratory analyses."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Aurore Lacombe – AuroreJoue – Vidéoflux",
     "url": "videoflux.com › @aurorejoue",
     "extrait": "Salut, c'est Aurore ! Je joue à des jeux d'aventure et de stratégie, en direct trois soirs par semaine…",
     "page": {
      "type": "video",
      "site": "Vidéoflux",
      "domaine": "videoflux.com",
      "titre": "AuroreJoue",
      "sousTitre": "La chaîne d'Aurore Lacombe",
      "date": null,
      "encart": [
       [
        "Abonnés",
        "212 000"
       ],
       [
        "Vidéos",
        "840"
       ],
       [
        "Lieu",
        "Bordeaux"
       ]
      ],
      "sections": [
       {
        "titre": "À propos",
        "texte": "Salut, c'est Aurore ! Je joue à des jeux d'aventure et de stratégie, en direct trois soirs par semaine depuis Bordeaux. Bonne humeur garantie, spoilers interdits dans le tchat. Pour les partenariats, écrivez-moi par message privé."
       },
       {
        "titre": "Vidéos récentes",
        "liste": [
         "Je construis une pyramide dans un jeu de gestion (épisode 12)",
         "Mon top 10 des jeux d'énigmes de l'année",
         "Je termine le jeu sans mourir une seule fois ?",
         "Questions-réponses : mon matériel de tournage"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Aurore Lacombe – AuroreJoue – Vidéoflux",
     "url": "videoflux.com › @aurorejoue",
     "extrait": "Hi, it's Aurore! I play adventure and strategy games, live three evenings a week…",
     "page": {
      "type": "video",
      "site": "Vidéoflux",
      "domaine": "videoflux.com",
      "titre": "AuroreJoue",
      "sousTitre": "Aurore Lacombe's channel",
      "date": null,
      "encart": [
       [
        "Subscribers",
        "212,000"
       ],
       [
        "Videos",
        "840"
       ],
       [
        "Location",
        "Bordeaux"
       ]
      ],
      "sections": [
       {
        "titre": "About",
        "texte": "Hi, it's Aurore! I play adventure and strategy games, live three evenings a week from Bordeaux. Good vibes guaranteed, no spoilers in the chat. For partnerships, send me a private message."
       },
       {
        "titre": "Recent videos",
        "liste": [
         "I build a pyramid in a management game (episode 12)",
         "My top 10 puzzle games of the year",
         "Can I finish the game without dying once?",
         "Q&A: my filming setup"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p65-1": {
  "nom": "Emmanuel Prevost",
  "genre": "m",
  "cle": {
   "fr": "Paléontologue",
   "en": "Palaeontologist"
  },
  "support": {
   "fr": "Interview à la radio",
   "en": "Radio interview"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Emmanuel Prevost – Paléontologue, conservateur – Muséum d'histoire naturelle de Valcourt",
     "url": "museum-valcourt.fr › equipe › conservation › emmanuel-prevost",
     "extrait": "Conservateur des collections de paléontologie, spécialiste de la mégafaune du Quaternaire : mammouths, rhinocéros laineux, cerfs géants…",
     "page": {
      "type": "institution",
      "site": "Muséum d'histoire naturelle de Valcourt",
      "domaine": "museum-valcourt.fr",
      "titre": "Emmanuel Prevost",
      "sousTitre": "Paléontologue, conservateur des collections de paléontologie",
      "date": null,
      "encart": [
       [
        "Collections",
        "Mammifères du Quaternaire"
       ],
       [
        "Thèse",
        "2005, Les extinctions de la mégafaune en Eurasie à la fin de la dernière glaciation"
       ],
       [
        "Exposition",
        "« Géants de glace » (2023)"
       ]
      ],
      "sections": [
       {
        "titre": "Recherches",
        "texte": "Emmanuel Prevost étudie les grands mammifères de l'ère glaciaire : mammouths, rhinocéros laineux, cerfs géants. Il s'intéresse à la façon dont leurs populations ont diminué puis disparu, en croisant les datations des ossements, l'ADN ancien et les données sur le climat."
       },
       {
        "titre": "Au muséum",
        "liste": [
         "Responsable de 4 000 fossiles du Quaternaire",
         "Commissaire de l'exposition « Géants de glace »",
         "Accueil des chercheurs et des étudiants en stage"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Emmanuel Prevost – Palaeontologist, curator – Valcourt Natural History Museum",
     "url": "museum-valcourt.fr › team › conservation › emmanuel-prevost",
     "extrait": "Curator of the palaeontology collections, specialist in Quaternary megafauna: mammoths, woolly rhinos, giant deer…",
     "page": {
      "type": "institution",
      "site": "Valcourt Natural History Museum",
      "domaine": "museum-valcourt.fr",
      "titre": "Emmanuel Prevost",
      "sousTitre": "Palaeontologist, curator of the palaeontology collections",
      "date": null,
      "encart": [
       [
        "Collections",
        "Quaternary mammals"
       ],
       [
        "PhD",
        "2005, Megafauna extinctions in Eurasia at the end of the last glaciation"
       ],
       [
        "Exhibition",
        "'Giants of Ice' (2023)"
       ]
      ],
      "sections": [
       {
        "titre": "Research",
        "texte": "Emmanuel Prevost studies the large mammals of the Ice Age: mammoths, woolly rhinos, giant deer. He looks at how their populations declined and then disappeared, combining bone dating, ancient DNA and climate data."
       },
       {
        "titre": "At the museum",
        "liste": [
         "In charge of 4,000 Quaternary fossils",
         "Curator of the 'Giants of Ice' exhibition",
         "Hosting visiting researchers and student interns"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Prevost, Emmanuel – Fiche auteur – SciIndex",
     "url": "sciindex.org › auteurs › prevost-emmanuel",
     "extrait": "52 publications · 1 940 citations · Paléontologie, mégafaune quaternaire, datation…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Prevost, Emmanuel",
      "sousTitre": "Muséum d'histoire naturelle de Valcourt",
      "date": null,
      "encart": [
       [
        "Publications",
        "52"
       ],
       [
        "Citations",
        "1 940"
       ],
       [
        "Domaines",
        "Paléontologie, mégafaune quaternaire, datation"
       ],
       [
        "Première publication",
        "2003"
       ]
      ],
      "sections": [
       {
        "titre": "Publications les plus citées",
        "liste": [
         "Chronologie de la disparition des mammouths en Eurasie (2016)",
         "Populations insulaires et extinctions de grands mammifères (2020, co-auteur)",
         "ADN ancien et taille des populations de mammouths (2022, co-auteur)",
         "Dater un os : méthodes et pièges du radiocarbone (2012)"
        ]
       },
       {
        "titre": "Revues principales",
        "texte": "Revue de paléontologie du Quaternaire, Journal européen de paléobiologie, Archéozoologie."
       }
      ]
     }
    },
    "en": {
     "titre": "Prevost, Emmanuel – Author profile – SciIndex",
     "url": "sciindex.org › authors › prevost-emmanuel",
     "extrait": "52 publications · 1,940 citations · Palaeontology, Quaternary megafauna, dating…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Prevost, Emmanuel",
      "sousTitre": "Valcourt Natural History Museum",
      "date": null,
      "encart": [
       [
        "Publications",
        "52"
       ],
       [
        "Citations",
        "1,940"
       ],
       [
        "Fields",
        "Palaeontology, Quaternary megafauna, dating"
       ],
       [
        "First publication",
        "2003"
       ]
      ],
      "sections": [
       {
        "titre": "Most cited publications",
        "liste": [
         "The chronology of mammoth disappearance in Eurasia (2016)",
         "Island populations and large mammal extinctions (2020, co-author)",
         "Ancient DNA and mammoth population size (2022, co-author)",
         "Dating a bone: methods and pitfalls of radiocarbon (2012)"
        ]
       },
       {
        "titre": "Main journals",
        "texte": "Review of Quaternary Palaeontology, European Journal of Palaeobiology, Archaeozoology."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "« Un os de mammouth raconte toute une vie » – Terre & Fossiles",
     "url": "terre-et-fossiles.fr › entretiens › emmanuel-prevost-mammouths",
     "extrait": "De retour d'une mission dans le pergélisol sibérien, le paléontologue Emmanuel Prevost présente l'exposition « Géants de glace »…",
     "page": {
      "type": "presse",
      "site": "Terre & Fossiles",
      "domaine": "terre-et-fossiles.fr",
      "titre": "« Un os de mammouth raconte toute une vie »",
      "sousTitre": "Entretien",
      "date": "7 novembre 2023",
      "encart": [],
      "sections": [
       {
        "titre": "L'entretien",
        "texte": "De retour d'une mission dans le pergélisol sibérien, le paléontologue Emmanuel Prevost présente l'exposition « Géants de glace » du Muséum de Valcourt. Il explique comment une défense de mammouth, découpée en fines lamelles, révèle l'âge de l'animal, ses déplacements et même les hivers difficiles qu'il a traversés."
       },
       {
        "titre": "À retenir",
        "liste": [
         "Exposition jusqu'en mars 2024",
         "Un squelette complet de mammouth reconstitué",
         "Ateliers pour les scolaires le mercredi"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "'A mammoth bone tells the story of a whole life' – Terre & Fossiles",
     "url": "terre-et-fossiles.fr › interviews › emmanuel-prevost-mammoths",
     "extrait": "Back from a mission in the Siberian permafrost, palaeontologist Emmanuel Prevost presents the 'Giants of Ice' exhibition…",
     "page": {
      "type": "presse",
      "site": "Terre & Fossiles",
      "domaine": "terre-et-fossiles.fr",
      "titre": "'A mammoth bone tells the story of a whole life'",
      "sousTitre": "Interview",
      "date": "7 November 2023",
      "encart": [],
      "sections": [
       {
        "titre": "The interview",
        "texte": "Back from a mission in the Siberian permafrost, palaeontologist Emmanuel Prevost presents the Valcourt Museum's 'Giants of Ice' exhibition. He explains how a mammoth tusk, cut into thin slices, reveals the animal's age, its movements and even the harsh winters it lived through."
       },
       {
        "titre": "Key points",
        "liste": [
         "Exhibition until March 2024",
         "A complete reconstructed mammoth skeleton",
         "Workshops for school groups on Wednesdays"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p67-1": {
  "nom": "Ophélie Moreau",
  "genre": "f",
  "cle": {
   "fr": "Analyste du secteur des télécommunications",
   "en": "Telecommunications sector analyst"
  },
  "support": {
   "fr": "Article en ligne",
   "en": "Online article"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Ophélie Moreau – Analyste senior marchés télécoms – Telmetrix Études – ProLink",
     "url": "prolink.pro › in › ophelie-moreau-telecoms",
     "extrait": "J'analyse les marchés de la téléphonie mobile et de l'internet : abonnements, prix, équipement des ménages, objets connectés…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.pro",
      "titre": "Ophélie Moreau",
      "sousTitre": "Analyste senior marchés télécoms, Telmetrix Études",
      "date": null,
      "encart": [
       [
        "Poste actuel",
        "Analyste senior, Telmetrix Études"
       ],
       [
        "Formation",
        "Master Économie du numérique, École nationale de statistique de Rennbourg"
       ],
       [
        "Relations",
        "500+"
       ]
      ],
      "sections": [
       {
        "titre": "Infos",
        "texte": "J'analyse les marchés de la téléphonie mobile et de l'internet : abonnements, prix, équipement des ménages, objets connectés. Je construis des indicateurs à partir des données des opérateurs et des enquêtes auprès des ménages, et j'interviens régulièrement auprès des journalistes pour expliquer les chiffres du secteur."
       },
       {
        "titre": "Expérience",
        "liste": [
         "Analyste senior, Telmetrix Études (depuis 2018)",
         "Chargée d'études, Autorité de régulation des réseaux de communication (2013-2018)",
         "Stage, service statistique d'un opérateur régional (2012)"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Ophélie Moreau – Senior Telecoms Market Analyst – Telmetrix Études – ProLink",
     "url": "prolink.pro › in › ophelie-moreau-telecoms",
     "extrait": "I analyse the mobile phone and internet markets: subscriptions, prices, household equipment, connected devices…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.pro",
      "titre": "Ophélie Moreau",
      "sousTitre": "Senior telecoms market analyst, Telmetrix Études",
      "date": null,
      "encart": [
       [
        "Current position",
        "Senior analyst, Telmetrix Études"
       ],
       [
        "Education",
        "Master's in Digital Economics, Rennbourg National School of Statistics"
       ],
       [
        "Connections",
        "500+"
       ]
      ],
      "sections": [
       {
        "titre": "About",
        "texte": "I analyse the mobile phone and internet markets: subscriptions, prices, household equipment, connected devices. I build indicators from operator data and household surveys, and I regularly help journalists make sense of the sector's figures."
       },
       {
        "titre": "Experience",
        "liste": [
         "Senior analyst, Telmetrix Études (since 2018)",
         "Research officer, Communications Networks Regulatory Authority (2013-2018)",
         "Internship, statistics department of a regional operator (2012)"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Notre équipe : Ophélie Moreau – Telmetrix Études",
     "url": "telmetrix-etudes.fr › equipe › ophelie-moreau",
     "extrait": "Analyste senior, pôle Mobile et objets connectés. Responsable du Baromètre annuel du mobile…",
     "page": {
      "type": "institution",
      "site": "Telmetrix Études",
      "domaine": "telmetrix-etudes.fr",
      "titre": "Ophélie Moreau",
      "sousTitre": "Analyste senior, pôle Mobile et objets connectés",
      "date": null,
      "encart": [
       [
        "Pôle",
        "Mobile et objets connectés"
       ],
       [
        "Spécialité",
        "Statistiques d'abonnements, cartes SIM, objets connectés"
       ],
       [
        "Publication phare",
        "Baromètre annuel du mobile"
       ]
      ],
      "sections": [
       {
        "titre": "Présentation",
        "texte": "Ophélie Moreau a rejoint Telmetrix Études en 2018, après cinq ans au sein d'une autorité de régulation des télécommunications. Elle pilote le Baromètre annuel du mobile, qui compile les données de 40 pays, et conseille collectivités et entreprises sur l'évolution des usages."
       },
       {
        "titre": "Ses domaines d'expertise",
        "liste": [
         "Mesure des abonnements et des utilisateurs",
         "Marché des objets connectés",
         "Comparaisons internationales"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Our team: Ophélie Moreau – Telmetrix Études",
     "url": "telmetrix-etudes.fr › team › ophelie-moreau",
     "extrait": "Senior analyst, Mobile and Connected Devices unit. In charge of the Annual Mobile Barometer…",
     "page": {
      "type": "institution",
      "site": "Telmetrix Études",
      "domaine": "telmetrix-etudes.fr",
      "titre": "Ophélie Moreau",
      "sousTitre": "Senior analyst, Mobile and Connected Devices unit",
      "date": null,
      "encart": [
       [
        "Unit",
        "Mobile and Connected Devices"
       ],
       [
        "Speciality",
        "Subscription statistics, SIM cards, connected devices"
       ],
       [
        "Flagship publication",
        "Annual Mobile Barometer"
       ]
      ],
      "sections": [
       {
        "titre": "Profile",
        "texte": "Ophélie Moreau joined Telmetrix Études in 2018, after five years at a telecoms regulatory authority. She leads the Annual Mobile Barometer, which compiles data from 40 countries, and advises local authorities and businesses on changing usage patterns."
       },
       {
        "titre": "Areas of expertise",
        "liste": [
         "Measuring subscriptions and users",
         "The connected devices market",
         "International comparisons"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "5G, objets connectés : les chiffres qui comptent – L'Hebdo du Numérique",
     "url": "hebdodunumerique.fr › marches › 5g-objets-connectes-chiffres",
     "extrait": "« Le nombre de lignes 5G a triplé en deux ans », explique Ophélie Moreau, analyste chez Telmetrix Études…",
     "page": {
      "type": "presse",
      "site": "L'Hebdo du Numérique",
      "domaine": "hebdodunumerique.fr",
      "titre": "5G, objets connectés : les chiffres qui comptent",
      "sousTitre": "Marchés",
      "date": "21 mars 2025",
      "encart": [],
      "sections": [
       {
        "titre": "L'article",
        "texte": "« Le nombre de lignes 5G a triplé en deux ans », explique Ophélie Moreau, analyste chez Telmetrix Études. Selon elle, la croissance du secteur ne vient plus seulement des téléphones : voitures, alarmes et compteurs sont désormais équipés de cartes SIM. Elle invite à lire les chiffres avec attention, car chaque organisme ne compte pas les lignes de la même façon."
       },
       {
        "titre": "En bref",
        "liste": [
         "Lignes 5G : x3 en deux ans",
         "Objets connectés : un abonnement sur cinq",
         "Prix moyen d'un forfait en baisse"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "5G, connected devices: the figures that matter – L'Hebdo du Numérique",
     "url": "hebdodunumerique.fr › markets › 5g-connected-devices-figures",
     "extrait": "'The number of 5G lines has tripled in two years,' explains Ophélie Moreau, an analyst at Telmetrix Études…",
     "page": {
      "type": "presse",
      "site": "L'Hebdo du Numérique",
      "domaine": "hebdodunumerique.fr",
      "titre": "5G, connected devices: the figures that matter",
      "sousTitre": "Markets",
      "date": "21 March 2025",
      "encart": [],
      "sections": [
       {
        "titre": "The article",
        "texte": "'The number of 5G lines has tripled in two years,' explains Ophélie Moreau, an analyst at Telmetrix Études. In her view, the sector's growth no longer comes only from phones: cars, alarms and meters are now fitted with SIM cards. She urges readers to look at the figures carefully, because not every organisation counts lines in the same way."
       },
       {
        "titre": "In brief",
        "liste": [
         "5G lines: tripled in two years",
         "Connected devices: one subscription in five",
         "Average price of a mobile plan falling"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p68-1": {
  "nom": "Paul Dumas",
  "genre": "m",
  "cle": {
   "fr": "Addictologue",
   "en": "Addiction specialist"
  },
  "support": {
   "fr": "Débat télévisé",
   "en": "TV debate"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Dr Paul Dumas – Addictologie – Centre hospitalier de la Croix-Fontaine",
     "url": "ch-croixfontaine.fr › services › addictologie › equipe",
     "extrait": "Médecin addictologue, responsable de l'unité d'addictologie. Consultations alcool, tabac, cannabis, consultations jeunes consommateurs…",
     "page": {
      "type": "institution",
      "site": "Centre hospitalier de la Croix-Fontaine",
      "domaine": "ch-croixfontaine.fr",
      "titre": "Dr Paul Dumas",
      "sousTitre": "Médecin addictologue, responsable de l'unité d'addictologie",
      "date": null,
      "encart": [
       [
        "Service",
        "Addictologie"
       ],
       [
        "Diplôme",
        "Docteur en médecine, spécialisé en addictologie (2010)"
       ],
       [
        "Consultations",
        "Alcool, tabac, cannabis"
       ]
      ],
      "sections": [
       {
        "titre": "Présentation",
        "texte": "Le Dr Paul Dumas dirige l'unité d'addictologie du centre hospitalier. Avec une équipe d'infirmiers, de psychologues et d'assistants sociaux, il accompagne des patients qui souhaitent réduire ou arrêter leur consommation d'alcool ou d'autres produits. Il participe à l'observatoire régional des consommations."
       },
       {
        "titre": "Activités de l'unité",
        "liste": [
         "Consultations jeunes consommateurs",
         "Hospitalisation pour sevrage",
         "Interventions de prévention dans les lycées",
         "Formation des médecins généralistes"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Dr Paul Dumas – Addiction Medicine – Croix-Fontaine Hospital",
     "url": "ch-croixfontaine.fr › departments › addiction-medicine › team",
     "extrait": "Addiction specialist, head of the addiction unit. Clinics for alcohol, tobacco, cannabis, young people's clinic…",
     "page": {
      "type": "institution",
      "site": "Croix-Fontaine Hospital",
      "domaine": "ch-croixfontaine.fr",
      "titre": "Dr Paul Dumas",
      "sousTitre": "Addiction specialist, head of the addiction unit",
      "date": null,
      "encart": [
       [
        "Department",
        "Addiction medicine"
       ],
       [
        "Qualification",
        "Doctor of medicine, specialising in addiction medicine (2010)"
       ],
       [
        "Clinics",
        "Alcohol, tobacco, cannabis"
       ]
      ],
      "sections": [
       {
        "titre": "Profile",
        "texte": "Dr Paul Dumas heads the hospital's addiction unit. With a team of nurses, psychologists and social workers, he supports patients who want to cut down or stop drinking alcohol or using other substances. He contributes to the regional observatory on substance use."
       },
       {
        "titre": "Unit activities",
        "liste": [
         "Young people's clinic",
         "Inpatient detox",
         "Prevention sessions in secondary schools",
         "Training for GPs"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Soirées étudiantes : les urgences en première ligne – La Voix du Bocage",
     "url": "lavoixdubocage.fr › sante › soirees-etudiantes-urgences",
     "extrait": "Le Dr Paul Dumas, addictologue au centre hospitalier de la Croix-Fontaine, décrit les week-ends où les urgences accueillent de très jeunes patients…",
     "page": {
      "type": "presse",
      "site": "La Voix du Bocage",
      "domaine": "lavoixdubocage.fr",
      "titre": "Soirées étudiantes : les urgences en première ligne",
      "sousTitre": "Santé",
      "date": "6 février 2025",
      "encart": [],
      "sections": [
       {
        "titre": "L'enquête",
        "texte": "Le jeudi soir, les urgences du centre hospitalier de la Croix-Fontaine se préparent. « Nous voyons arriver des jeunes de 17 ou 18 ans en état d'ivresse sévère », raconte le Dr Paul Dumas, addictologue à l'hôpital. Avec son équipe, il propose à ces jeunes un rendez-vous de suivi dans les jours qui suivent. « Le but n'est pas de faire la morale, mais d'ouvrir une porte », explique-t-il."
       },
       {
        "titre": "Les chiffres de l'hôpital",
        "liste": [
         "Près de 300 passages par an liés à l'alcool chez les moins de 25 ans",
         "Un jeune sur trois revient au rendez-vous de suivi"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Student parties: A&E on the front line – La Voix du Bocage",
     "url": "lavoixdubocage.fr › health › student-parties-emergency",
     "extrait": "Dr Paul Dumas, an addiction specialist at Croix-Fontaine Hospital, describes the weekends when A&E takes in very young patients…",
     "page": {
      "type": "presse",
      "site": "La Voix du Bocage",
      "domaine": "lavoixdubocage.fr",
      "titre": "Student parties: A&E on the front line",
      "sousTitre": "Health",
      "date": "6 February 2025",
      "encart": [],
      "sections": [
       {
        "titre": "The investigation",
        "texte": "On Thursday evenings, the A&E department at Croix-Fontaine Hospital gets ready. 'We see 17 and 18-year-olds coming in severely drunk,' says Dr Paul Dumas, an addiction specialist at the hospital. With his team, he offers these young people a follow-up appointment in the days afterwards. 'The aim isn't to lecture them, it's to open a door,' he explains."
       },
       {
        "titre": "Hospital figures",
        "liste": [
         "Nearly 300 alcohol-related visits a year among under-25s",
         "One young person in three comes back for the follow-up appointment"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Paul Dumas – Cours de guitare à Nantes",
     "url": "pauldumas-guitare.fr › accueil",
     "extrait": "Professeur de guitare depuis quinze ans, je donne des cours particuliers à domicile ou en visio, débutants et confirmés…",
     "page": {
      "type": "blog",
      "site": "Paul Dumas – Cours de guitare",
      "domaine": "pauldumas-guitare.fr",
      "titre": "Paul Dumas, professeur de guitare",
      "sousTitre": "Cours particuliers à Nantes et en visio",
      "date": null,
      "encart": [
       [
        "Tarif",
        "30 € le cours d'une heure"
       ],
       [
        "Niveaux",
        "Débutant à confirmé"
       ],
       [
        "Styles",
        "Folk, rock, blues"
       ]
      ],
      "sections": [
       {
        "titre": "Bienvenue",
        "texte": "Professeur de guitare depuis quinze ans, je donne des cours particuliers à domicile dans l'agglomération nantaise ou en visio. J'ai joué dans plusieurs groupes de rock de la région avant de me consacrer à l'enseignement. Premier cours d'essai offert."
       },
       {
        "titre": "Derniers articles du blog",
        "liste": [
         "Bien choisir sa première guitare",
         "5 exercices pour progresser en 10 minutes par jour",
         "Accorder sa guitare sans accordeur"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Paul Dumas – Guitar lessons in Nantes",
     "url": "pauldumas-guitare.fr › home",
     "extrait": "A guitar teacher for fifteen years, I give private lessons at home or by video call, beginners and advanced players…",
     "page": {
      "type": "blog",
      "site": "Paul Dumas – Guitar lessons",
      "domaine": "pauldumas-guitare.fr",
      "titre": "Paul Dumas, guitar teacher",
      "sousTitre": "Private lessons in Nantes and by video call",
      "date": null,
      "encart": [
       [
        "Price",
        "€30 for a one-hour lesson"
       ],
       [
        "Levels",
        "Beginner to advanced"
       ],
       [
        "Styles",
        "Folk, rock, blues"
       ]
      ],
      "sections": [
       {
        "titre": "Welcome",
        "texte": "A guitar teacher for fifteen years, I give private lessons at home in the Nantes area or by video call. I played in several local rock bands before devoting myself to teaching. First trial lesson free."
       },
       {
        "titre": "Latest blog posts",
        "liste": [
         "Choosing your first guitar",
         "5 exercises to improve in 10 minutes a day",
         "Tuning your guitar without a tuner"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p70-1": {
  "nom": "Juliette Morin",
  "genre": "f",
  "cle": {
   "fr": "Historienne de la langue française",
   "en": "Historian of the French language"
  },
  "support": {
   "fr": "Conférence filmée",
   "en": "Filmed talk"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Juliette Morin – Linguistique et lexicographie – Université de Belleroche",
     "url": "univ-belleroche.fr › lll › membres › juliette-morin",
     "extrait": "Maîtresse de conférences en linguistique française, lexicographe. Histoire des mots, emprunts et argots…",
     "page": {
      "type": "institution",
      "site": "Université de Belleroche",
      "domaine": "univ-belleroche.fr",
      "titre": "Juliette Morin",
      "sousTitre": "Maîtresse de conférences en linguistique française, lexicographe",
      "date": null,
      "encart": [
       [
        "Laboratoire",
        "Linguistique, lexicographie et langues en contact"
       ],
       [
        "Thèse",
        "2010, Les emprunts à l'arabe dans l'argot militaire français (1830-1914)"
       ],
       [
        "Projet",
        "Dictionnaire historique des mots voyageurs"
       ]
      ],
      "sections": [
       {
        "titre": "Recherches",
        "texte": "Juliette Morin étudie l'histoire du vocabulaire français : d'où viennent les mots, quand ils sont entrés dans la langue et comment leur sens a changé. Elle s'intéresse particulièrement aux mots empruntés à d'autres langues et aux argots, en dépouillant journaux, lettres de soldats, chansons et dictionnaires anciens."
       },
       {
        "titre": "Enseignements",
        "liste": [
         "Histoire de la langue française (licence)",
         "Étymologie et lexicographie (master)",
         "Atelier de rédaction d'articles de dictionnaire"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Juliette Morin – Linguistics and Lexicography – University of Belleroche",
     "url": "univ-belleroche.fr › lll › members › juliette-morin",
     "extrait": "Senior lecturer in French linguistics, lexicographer. History of words, borrowings and slang…",
     "page": {
      "type": "institution",
      "site": "University of Belleroche",
      "domaine": "univ-belleroche.fr",
      "titre": "Juliette Morin",
      "sousTitre": "Senior lecturer in French linguistics, lexicographer",
      "date": null,
      "encart": [
       [
        "Laboratory",
        "Linguistics, Lexicography and Languages in Contact"
       ],
       [
        "PhD",
        "2010, Arabic borrowings in French military slang (1830-1914)"
       ],
       [
        "Project",
        "Historical dictionary of travelling words"
       ]
      ],
      "sections": [
       {
        "titre": "Research",
        "texte": "Juliette Morin studies the history of French vocabulary: where words come from, when they entered the language and how their meaning has changed. She is particularly interested in words borrowed from other languages and in slang, combing through newspapers, soldiers' letters, songs and old dictionaries."
       },
       {
        "titre": "Teaching",
        "liste": [
         "History of the French language (undergraduate)",
         "Etymology and lexicography (master's)",
         "Dictionary entry writing workshop"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Juliette Morin (linguiste) – Encyclopédia Libre",
     "url": "encyclopedia-libre.org › wiki › Juliette_Morin_(linguiste)",
     "extrait": "Juliette Morin, née en 1981, est une linguiste et lexicographe française, spécialiste de l'histoire des emprunts…",
     "page": {
      "type": "encyclo",
      "site": "Encyclopédia Libre",
      "domaine": "encyclopedia-libre.org",
      "titre": "Juliette Morin (linguiste)",
      "sousTitre": "Linguiste et lexicographe française",
      "date": null,
      "encart": [
       [
        "Naissance",
        "1981"
       ],
       [
        "Domaine",
        "Linguistique historique, étymologie"
       ],
       [
        "Institution",
        "Université de Belleroche"
       ]
      ],
      "sections": [
       {
        "titre": "Biographie",
        "texte": "Juliette Morin, née en 1981, étudie les lettres modernes puis la linguistique. Après une thèse consacrée aux mots arabes passés dans l'argot des soldats français, elle devient maîtresse de conférences à l'Université de Belleroche. Elle collabore à plusieurs dictionnaires historiques de la langue française."
       },
       {
        "titre": "Ouvrages",
        "liste": [
         "Les Mots voyageurs : petit dictionnaire des emprunts (2017)",
         "Parler comme un soldat : l'argot des casernes, 1870-1918 (2020)",
         "Histoire de la langue française pour les curieux (2023)"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Juliette Morin (linguist) – Encyclopédia Libre",
     "url": "encyclopedia-libre.org › wiki › Juliette_Morin_(linguist)",
     "extrait": "Juliette Morin, born in 1981, is a French linguist and lexicographer specialising in the history of borrowed words…",
     "page": {
      "type": "encyclo",
      "site": "Encyclopédia Libre",
      "domaine": "encyclopedia-libre.org",
      "titre": "Juliette Morin (linguist)",
      "sousTitre": "French linguist and lexicographer",
      "date": null,
      "encart": [
       [
        "Born",
        "1981"
       ],
       [
        "Field",
        "Historical linguistics, etymology"
       ],
       [
        "Institution",
        "University of Belleroche"
       ]
      ],
      "sections": [
       {
        "titre": "Biography",
        "texte": "Juliette Morin, born in 1981, studied French literature and then linguistics. After a PhD on Arabic words that passed into French soldiers' slang, she became a senior lecturer at the University of Belleroche. She contributes to several historical dictionaries of the French language."
       },
       {
        "titre": "Books",
        "liste": [
         "Les Mots voyageurs (Travelling words: a little dictionary of borrowings, 2017)",
         "Parler comme un soldat (Talking like a soldier: barracks slang, 1870-1918, 2020)",
         "Histoire de la langue française pour les curieux (A history of French for the curious, 2023)"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Festival des Mots de Belleroche – Vidéoflux",
     "url": "videoflux.com › @festivaldesmots",
     "extrait": "Conférence de Juliette Morin : « Comment les mots traversent la Méditerranée ». Captation du festival 2024…",
     "page": {
      "type": "video",
      "site": "Vidéoflux",
      "domaine": "videoflux.com",
      "titre": "Festival des Mots de Belleroche",
      "sousTitre": "Chaîne officielle du festival",
      "date": null,
      "encart": [
       [
        "Abonnés",
        "9 800"
       ],
       [
        "Vidéos",
        "64"
       ]
      ],
      "sections": [
       {
        "titre": "Vidéo à la une",
        "texte": "« Comment les mots traversent la Méditerranée » : conférence de Juliette Morin, lexicographe à l'Université de Belleroche, enregistrée lors du festival 2024. Elle y raconte, documents d'époque à l'appui, comment des mots venus d'autres langues se sont installés dans le français de tous les jours."
       },
       {
        "titre": "Autres vidéos",
        "liste": [
         "Table ronde : les dictionnaires à l'heure du numérique",
         "Lecture publique : poèmes en langues régionales",
         "Atelier jeunesse : invente ton mot"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Festival des Mots de Belleroche – Vidéoflux",
     "url": "videoflux.com › @festivaldesmots",
     "extrait": "Talk by Juliette Morin: 'How words cross the Mediterranean'. Recorded at the 2024 festival…",
     "page": {
      "type": "video",
      "site": "Vidéoflux",
      "domaine": "videoflux.com",
      "titre": "Festival des Mots de Belleroche",
      "sousTitre": "Official festival channel",
      "date": null,
      "encart": [
       [
        "Subscribers",
        "9,800"
       ],
       [
        "Videos",
        "64"
       ]
      ],
      "sections": [
       {
        "titre": "Featured video",
        "texte": "'How words cross the Mediterranean': a talk by Juliette Morin, lexicographer at the University of Belleroche, recorded at the 2024 festival. Using period documents, she explains how words from other languages settled into everyday French."
       },
       {
        "titre": "More videos",
        "liste": [
         "Round table: dictionaries in the digital age",
         "Public reading: poems in regional languages",
         "Youth workshop: invent your own word"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p71-0": {
  "nom": "Didier Marchetti",
  "genre": "m",
  "cle": {
   "fr": "Historien des techniques, spécialiste des machines de bureau",
   "en": "Historian of technology, specialist in office machines"
  },
  "support": {
   "fr": "Interview dans un magazine",
   "en": "Magazine interview"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Didier Marchetti – Historien des techniques – Université de Rocheval",
     "url": "univ-rocheval.fr › lhst › chercheurs › didier-marchetti",
     "extrait": "Chargé de recherche au Laboratoire d'histoire des sciences et des techniques. Machines de bureau, brevets et archives industrielles du XIXe siècle…",
     "page": {
      "type": "institution",
      "site": "Université de Rocheval",
      "domaine": "univ-rocheval.fr",
      "titre": "Didier Marchetti",
      "sousTitre": "Historien des techniques, chargé de recherche",
      "date": null,
      "encart": [
       [
        "Laboratoire",
        "Histoire des sciences et des techniques"
       ],
       [
        "Thèse",
        "2008, Mécaniser l'écriture : inventeurs et fabricants de machines de bureau, 1860-1900"
       ],
       [
        "Spécialité",
        "Machines de bureau, brevets industriels"
       ]
      ],
      "sections": [
       {
        "titre": "Recherches",
        "texte": "Didier Marchetti étudie l'invention et la diffusion des machines de bureau au XIXe siècle : machines à écrire, à calculer, à copier. Il travaille sur les brevets déposés par les inventeurs, les archives des fabricants et les machines conservées dans les musées, afin de comprendre comment ces objets ont été conçus, fabriqués et vendus."
       },
       {
        "titre": "Projets en cours",
        "liste": [
         "Base de données des brevets de machines à écrire, 1865-1900",
         "Histoire des métiers de la dactylographie",
         "Catalogue des collections du musée des arts industriels de Saint-Ferréol"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Didier Marchetti – Historian of Technology – University of Rocheval",
     "url": "univ-rocheval.fr › lhst › researchers › didier-marchetti",
     "extrait": "Research fellow at the Laboratory for the History of Science and Technology. Office machines, patents and 19th-century industrial archives…",
     "page": {
      "type": "institution",
      "site": "University of Rocheval",
      "domaine": "univ-rocheval.fr",
      "titre": "Didier Marchetti",
      "sousTitre": "Historian of technology, research fellow",
      "date": null,
      "encart": [
       [
        "Laboratory",
        "History of Science and Technology"
       ],
       [
        "PhD",
        "2008, Mechanising writing: inventors and manufacturers of office machines, 1860-1900"
       ],
       [
        "Speciality",
        "Office machines, industrial patents"
       ]
      ],
      "sections": [
       {
        "titre": "Research",
        "texte": "Didier Marchetti studies the invention and spread of office machines in the 19th century: typewriters, calculators, copying machines. He works on the patents filed by inventors, manufacturers' archives and machines held in museums, in order to understand how these objects were designed, made and sold."
       },
       {
        "titre": "Current projects",
        "liste": [
         "Database of typewriter patents, 1865-1900",
         "History of typing as a profession",
         "Catalogue of the Saint-Ferréol Museum of Industrial Arts collections"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Marchetti, Didier – Fiche auteur – SciIndex",
     "url": "sciindex.org › auteurs › marchetti-didier",
     "extrait": "38 publications · 610 citations · Histoire des techniques, histoire industrielle · Université de Rocheval…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Marchetti, Didier",
      "sousTitre": "Université de Rocheval, Laboratoire d'histoire des sciences et des techniques",
      "date": null,
      "encart": [
       [
        "Publications",
        "38"
       ],
       [
        "Citations",
        "610"
       ],
       [
        "Domaines",
        "Histoire des techniques, histoire industrielle"
       ],
       [
        "Première publication",
        "2006"
       ]
      ],
      "sections": [
       {
        "titre": "Publications les plus citées",
        "liste": [
         "Brevets de machines à écrire déposés en Europe et aux États-Unis, 1865-1895 (2014)",
         "Le Bureau mécanisé : dactylographes et machines, 1880-1930 (2018, ouvrage)",
         "Lire un brevet du XIXe siècle : méthode et sources (2021)",
         "Vendre la vitesse : la publicité des fabricants de machines de bureau (2023)"
        ]
       },
       {
        "titre": "Revues principales",
        "texte": "Revue d'histoire des techniques, Cahiers d'histoire industrielle, Documents pour l'histoire des sciences."
       }
      ]
     }
    },
    "en": {
     "titre": "Marchetti, Didier – Author profile – SciIndex",
     "url": "sciindex.org › authors › marchetti-didier",
     "extrait": "38 publications · 610 citations · History of technology, industrial history · University of Rocheval…",
     "page": {
      "type": "biblio",
      "site": "SciIndex",
      "domaine": "sciindex.org",
      "titre": "Marchetti, Didier",
      "sousTitre": "University of Rocheval, Laboratory for the History of Science and Technology",
      "date": null,
      "encart": [
       [
        "Publications",
        "38"
       ],
       [
        "Citations",
        "610"
       ],
       [
        "Fields",
        "History of technology, industrial history"
       ],
       [
        "First publication",
        "2006"
       ]
      ],
      "sections": [
       {
        "titre": "Most cited publications",
        "liste": [
         "Typewriter patents filed in Europe and the United States, 1865-1895 (2014)",
         "The mechanised office: typists and machines, 1880-1930 (2018, book)",
         "Reading a 19th-century patent: method and sources (2021)",
         "Selling speed: office machine manufacturers' advertising (2023)"
        ]
       },
       {
        "titre": "Main journals",
        "texte": "Review of the History of Technology, Papers in Industrial History, Documents for the History of Science."
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Didier Marchetti – Carnet de recherche « Machines de bureau »",
     "url": "carnet-machines.fr › a-propos",
     "extrait": "Ce carnet accompagne mes recherches sur l'histoire des machines de bureau. J'y publie des documents d'archives et des photos de machines…",
     "page": {
      "type": "blog",
      "site": "Machines de bureau – Carnet de recherche",
      "domaine": "carnet-machines.fr",
      "titre": "Machines de bureau",
      "sousTitre": "Le carnet de recherche de Didier Marchetti",
      "date": null,
      "encart": [
       [
        "Auteur",
        "Didier Marchetti"
       ],
       [
        "Billets publiés",
        "146"
       ],
       [
        "Depuis",
        "2015"
       ]
      ],
      "sections": [
       {
        "titre": "À propos",
        "texte": "Ce carnet accompagne mes recherches au Laboratoire d'histoire des sciences et des techniques de Rocheval. J'y publie des documents d'archives, des photos de machines conservées dans les musées et des notes de lecture. Les commentaires de collectionneurs et de passionnés sont les bienvenus."
       },
       {
        "titre": "Derniers billets",
        "liste": [
         "Une visite aux réserves du musée des arts industriels de Saint-Ferréol",
         "Que disent les catalogues de vente de 1885 ?",
         "Comment dater une machine à écrire ancienne",
         "Un brevet oublié de 1872, enfin retrouvé"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Didier Marchetti – 'Office Machines' research notebook",
     "url": "carnet-machines.fr › about",
     "extrait": "This notebook accompanies my research on the history of office machines. I post archive documents and photos of machines…",
     "page": {
      "type": "blog",
      "site": "Office Machines – Research notebook",
      "domaine": "carnet-machines.fr",
      "titre": "Office Machines",
      "sousTitre": "Didier Marchetti's research notebook",
      "date": null,
      "encart": [
       [
        "Author",
        "Didier Marchetti"
       ],
       [
        "Posts published",
        "146"
       ],
       [
        "Since",
        "2015"
       ]
      ],
      "sections": [
       {
        "titre": "About",
        "texte": "This notebook accompanies my research at the Rocheval Laboratory for the History of Science and Technology. I post archive documents, photos of machines held in museums and reading notes. Comments from collectors and enthusiasts are welcome."
       },
       {
        "titre": "Latest posts",
        "liste": [
         "A visit to the stores of the Saint-Ferréol Museum of Industrial Arts",
         "What do the sales catalogues of 1885 tell us?",
         "How to date an antique typewriter",
         "A forgotten patent from 1872, found at last"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p4-3": {
  "nom": "Tristan Weber",
  "genre": "m",
  "cle": {
   "fr": "Militant vegan sur Instagram",
   "en": "Vegan activist on Instagram"
  },
  "support": {
   "fr": "Publication Instagram",
   "en": "Instagram post"
  },
  "resultats": [
   {
    "fr": {
     "titre": "Tristan Weber (@vivants_et_libres) – Profil Chirp",
     "url": "chirp.com › vivants_et_libres",
     "extrait": "Militant antispéciste 🌱 | 210 k abonnés | Ex-graphiste | Ici pour réveiller les consciences, pas pour plaire…",
     "page": {
      "type": "social",
      "site": "Chirp",
      "domaine": "chirp.com",
      "titre": "Tristan Weber",
      "sousTitre": "@vivants_et_libres · Militant antispéciste 🌱",
      "date": null,
      "encart": [
       [
        "Abonnés",
        "210 000"
       ],
       [
        "Publications",
        "1 284"
       ],
       [
        "Lieu",
        "Montpellier"
       ],
       [
        "Lien",
        "linktr.ee/vivantsetlibres (t-shirts, stickers, dons)"
       ]
      ],
      "sections": [
       {
        "titre": "Bio",
        "texte": "Ex-graphiste devenu militant à plein temps. Je montre ce que l'industrie de la viande cache. Mes visuels sont libres de droits : partagez-les partout !"
       },
       {
        "titre": "Publications épinglées",
        "liste": [
         "« L'élevage = 51 % des émissions ! » (38 k j'aime)",
         "Ma première manif devant un abattoir",
         "Pourquoi je ne débats plus avec les carnistes"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Tristan Weber (@plant_based_future) – Chirp profile",
     "url": "chirp.com › plant_based_future",
     "extrait": "Anti-speciesist activist 🌱 | 210k followers | Former graphic designer | Here to wake people up, not to please them…",
     "page": {
      "type": "social",
      "site": "Chirp",
      "domaine": "chirp.com",
      "titre": "Tristan Weber",
      "sousTitre": "@plant_based_future · Anti-speciesist activist 🌱",
      "date": null,
      "encart": [
       [
        "Followers",
        "210,000"
       ],
       [
        "Posts",
        "1,284"
       ],
       [
        "Location",
        "Montpellier, France"
       ],
       [
        "Link",
        "linktr.ee/plantbasedfuture (T-shirts, stickers, donations)"
       ]
      ],
      "sections": [
       {
        "titre": "Bio",
        "texte": "Former graphic designer turned full-time activist. I show what the meat industry hides. My visuals are copyright-free: share them everywhere!"
       },
       {
        "titre": "Pinned posts",
        "liste": [
         "\"Livestock = 51% of emissions!\" (41k likes)",
         "My first protest outside a slaughterhouse",
         "Why I no longer debate meat-eaters"
        ]
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "« Je ne suis pas scientifique, je suis en colère » : rencontre avec Tristan Weber",
     "url": "lagazettedulez.fr › societe › portrait-tristan-weber",
     "extrait": "À 31 ans, l'ancien graphiste fédère plus de 200 000 abonnés autour de ses visuels chocs. Ses chiffres ? « Je les trouve dans des vidéos et des documentaires »…",
     "page": {
      "type": "presse",
      "site": "La Gazette du Lez",
      "domaine": "lagazettedulez.fr",
      "titre": "« Je ne suis pas scientifique, je suis en colère »",
      "sousTitre": "Portrait de Tristan Weber, militant vegan",
      "date": "14 février 2024",
      "encart": [],
      "sections": [
       {
        "texte": "À 31 ans, Tristan Weber a quitté son agence de graphisme pour militer à plein temps. Ses visuels, très partagés, mettent en avant des chiffres frappants sur l'élevage."
       },
       {
        "texte": "D'où viennent-ils ? « Je les trouve dans des documentaires et des vidéos d'autres militants. Je ne vérifie pas tout, l'important c'est que les gens réagissent », reconnaît-il. Il assume un ton volontairement provocateur : « Un post nuancé, personne ne le partage. »"
       }
      ]
     }
    },
    "en": {
     "titre": "\"I'm not a scientist, I'm angry\": meet Tristan Weber",
     "url": "lagazettedulez.fr › society › portrait-tristan-weber",
     "extrait": "At 31, the former graphic designer rallies more than 200,000 followers around his shock visuals. His figures? \"I find them in videos and documentaries\"…",
     "page": {
      "type": "presse",
      "site": "La Gazette du Lez",
      "domaine": "lagazettedulez.fr",
      "titre": "\"I'm not a scientist, I'm angry\"",
      "sousTitre": "Portrait of Tristan Weber, vegan activist",
      "date": "14 February 2024",
      "encart": [],
      "sections": [
       {
        "texte": "At 31, Tristan Weber left his graphic design agency to campaign full time. His widely shared visuals highlight striking figures about livestock farming."
       },
       {
        "texte": "Where do they come from? \"I find them in documentaries and in other activists' videos. I don't check everything, what matters is that people react,\" he admits. He deliberately uses a provocative tone: \"Nobody shares a nuanced post.\""
       }
      ]
     }
    }
   },
   {
    "fr": {
     "titre": "Tristan Weber – Graphiste indépendant – ProLink",
     "url": "prolink.com › in › tristan-weber-graphiste",
     "extrait": "Graphiste indépendant · Identité visuelle, affiches, réseaux sociaux · BTS Communication visuelle…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Tristan Weber",
      "sousTitre": "Graphiste indépendant · Créateur de contenus militants",
      "date": null,
      "encart": [
       [
        "Formation",
        "BTS Communication visuelle (2013)"
       ],
       [
        "Lieu",
        "Montpellier"
       ]
      ],
      "sections": [
       {
        "titre": "Expérience",
        "liste": [
         "Créateur de contenus, compte @vivants_et_libres (depuis 2021)",
         "Graphiste, agence Pixel & Sel (2015-2021)",
         "Graphiste junior, imprimerie Méridienne (2013-2015)"
        ]
       },
       {
        "titre": "Compétences",
        "liste": [
         "Mise en page",
         "Affiches",
         "Montage vidéo court"
        ]
       }
      ]
     }
    },
    "en": {
     "titre": "Tristan Weber – Freelance graphic designer – ProLink",
     "url": "prolink.com › in › tristan-weber-design",
     "extrait": "Freelance graphic designer · Visual identity, posters, social media · Two-year diploma in visual communication…",
     "page": {
      "type": "reseau",
      "site": "ProLink",
      "domaine": "prolink.com",
      "titre": "Tristan Weber",
      "sousTitre": "Freelance graphic designer · Activist content creator",
      "date": null,
      "encart": [
       [
        "Education",
        "Two-year diploma in visual communication (2013)"
       ],
       [
        "Location",
        "Montpellier, France"
       ]
      ],
      "sections": [
       {
        "titre": "Experience",
        "liste": [
         "Content creator, @plant_based_future account (since 2021)",
         "Graphic designer, Pixel & Sel agency (2015-2021)",
         "Junior graphic designer, Méridienne printing works (2013-2015)"
        ]
       },
       {
        "titre": "Skills",
        "liste": [
         "Layout",
         "Posters",
         "Short video editing"
        ]
       }
      ]
     }
    }
   }
  ]
 },
 "p1-1": {
  "nom": "Andrew Wakefield",
  "reel": true,
  "cle": {
   "fr": "Andrew Wakefield, ex-gastro-entérologue du Royal Free Hospital",
   "en": "Andrew Wakefield, former gastroenterologist at Royal Free Hospital"
  }
 },
 "p2-1": {
  "nom": "William Happer",
  "reel": true,
  "cle": {
   "fr": "William Happer, physicien émérite de Princeton",
   "en": "William Happer, emeritus physicist at Princeton"
  }
 },
 "p19-1": {
  "nom": "Nicole Avena",
  "reel": true,
  "cle": {
   "fr": "Dr Nicole Avena, Columbia University, auteure de l'étude originale",
   "en": "Dr. Nicole Avena, Columbia University, author of the original study"
  }
 }
};
