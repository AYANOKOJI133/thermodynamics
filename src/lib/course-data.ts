// Donnees du cours de Thermodynamique - Adil_Err
// Seances 1-6 : Tout le cours en un seul endroit

export const courseData = {
  sessions: [
    {
      id: 1,
      title: "Concepts Fondamentaux de la Thermodynamique",
      duration: "2 heures",
      description: "Introduction a la thermodynamique, systemes, variables d'etat, transformations et outils mathematiques.",
      topics: [
        "Introduction a la thermodynamique",
        "Approches macroscopique et microscopique",
        "Notion de systeme thermodynamique",
        "Types de systemes",
        "Convention du banquier",
        "Variables d'etat et equation d'etat",
        "Variables extensives et intensives",
        "Fonctions d'etat",
        "Transformations thermodynamiques",
        "Outils mathematiques",
        "Systemes thermo-elastiques (STEP)"
      ],
      content: [
        {
          title: "Introduction a la Thermodynamique",
          sections: [
            {
              subtitle: "Definition",
              content: "La thermodynamique est la science qui etudie les transformations de la matiere et de l'energie. Elle est nee vers 1820, au debut de l'ere industrielle, de la necessite de comprendre les relations entre les phenomenes thermiques et dynamiques dans les machines thermiques.",
              keyPoints: [
                "Caractere universel de la thermodynamique",
                "Toute theorie ne verifiant pas les principes de la thermodynamique est mise en doute",
                "Conversion inevitable d'au moins une forme d'energie en une autre"
              ]
            },
            {
              subtitle: "Citation d'Einstein",
              content: "\"Une theorie est d'autant plus impressionnante que les principes sur lesquels elle repose sont simples, qu'elle relie toutes sortes de choses differentes et que son champ d'application est vaste. Par consequent, la thermodynamique classique m'a fait une tres grande impression. C'est la seule theorie physique a caractere universel dont je suis convaincu, compte tenu de l'application de ses concepts de base, qu'elle ne sera jamais contestee.\"",
              isQuote: true
            }
          ]
        },
        {
          title: "Approches en Thermodynamique",
          sections: [
            {
              subtitle: "Approche Macroscopique",
              content: "Basee sur des grandeurs mesurables a grande echelle (pression P, volume V, temperature T, quantite de matiere n). Cette approche decrit le comportement d'ensemble du systeme.",
              keyPoints: [
                "Variables macroscopiques : P, V, T, n",
                "Description globale du systeme",
                "Sans consideration du comportement individuel des particules"
              ]
            },
            {
              subtitle: "Approche Microscopique",
              content: "Analyse le comportement des particules elementaires (positions et vitesses). Appelee aussi thermodynamique statistique.",
              keyPoints: [
                "Positions des molecules",
                "Vitesses des molecules",
                "Comprehension a l'echelle atomique et moleculaire"
              ]
            }
          ]
        },
        {
          title: "Notion de Systeme Thermodynamique",
          sections: [
            {
              subtitle: "Definition",
              content: "Un systeme thermodynamique est une partie de l'univers a laquelle on porte de l'interet. Il est constitue d'un grand nombre de particules microscopiques (atomes ou molecules) delimitees par une surface fixe ou mobile, fictive ou reelle, a travers laquelle sont susceptibles de s'effectuer des echanges d'energie et de matiere avec le milieu exterieur.",
              keyPoints: [
                "Le reste de l'univers est appele \"milieu exterieur\"",
                "La frontiere peut etre reelle (paroi materielle) ou fictive"
              ]
            },
            {
              subtitle: "Types de Systemes",
              table: {
                headers: ["Type", "Echanges", "Exemples"],
                rows: [
                  ["Systeme Ouvert", "Echange matiere ET energie", "Bois qui brule, moteur thermique"],
                  ["Systeme Ferme", "Echange d'energie SEULEMENT", "Gaz dans un cylindre, refrigerateur"],
                  ["Systeme Isole", "AUCUN echange", "L'Univers"]
                ]
              }
            }
          ]
        },
        {
          title: "Convention du Banquier",
          sections: [
            {
              subtitle: "Signes des Echanges",
              content: "Les echanges d'energie entre le systeme et le milieu exterieur s'effectuent par transfert de travail W ou de chaleur Q.",
              keyPoints: [
                "Q > 0, W > 0 : Energie RECUE par le systeme (positive)",
                "Q < 0, W < 0 : Energie CEDEE par le systeme (negative)",
                "Analogie : comme un compte bancaire, depot = positif, retrait = negatif"
              ]
            }
          ]
        },
        {
          title: "Variables d'Etat et Equation d'Etat",
          sections: [
            {
              subtitle: "Variables d'Etat",
              content: "Ce sont des grandeurs mesurables (P, V, T, n...) capables de decrire completement l'etat d'un systeme a un instant donne. Connaitre l'etat d'un systeme, c'est determiner les valeurs de ces variables.",
              keyPoints: [
                "Variables d'etat non toutes independantes",
                "Liees par une equation d'etat : f(P, V, T, ...) = 0"
              ]
            },
            {
              subtitle: "Exemple : Gaz Parfait",
              formula: "PV = nRT",
              formulaDescription: "Equation d'etat du gaz parfait",
              keyPoints: [
                "P : Pression (Pa)",
                "V : Volume (m3)",
                "n : Quantite de matiere (mol)",
                "R : Constante des gaz parfaits = 8.314 J.K-1.mol-1",
                "T : Temperature absolue (K)"
              ]
            }
          ]
        },
        {
          title: "Variables Extensives et Intensives",
          sections: [
            {
              subtitle: "Variables Extensives",
              content: "Proportionnelles a la masse du systeme. Elles sont ADDITIVES lors de la reunion de deux systemes de meme nature.",
              examples: ["Masse (m)", "Volume (V)", "Nombre de particules (N)", "Energie interne (U)"],
              note: "Si on double la masse, ces grandeurs doublent aussi"
            },
            {
              subtitle: "Variables Intensives",
              content: "Independantes de la masse du systeme. Elles ont la meme valeur en tout point d'un systeme homogene a l'equilibre.",
              examples: ["Temperature (T)", "Pression (P)", "Masse volumique (p)"],
              note: "Si on divise le systeme, ces grandeurs restent identiques"
            }
          ]
        },
        {
          title: "Fonctions d'Etat",
          sections: [
            {
              subtitle: "Definition",
              content: "Une grandeur dont la variation entre deux etats depend uniquement des etats initial et final, et NON du chemin suivi.",
              formula: "Delta f = f2 - f1 = Cste quelque soit le chemin suivi",
              examples: [
                "Energie interne (U)",
                "Enthalpie (H)",
                "Entropie (S)",
                "Pression, Volume, Temperature"
              ]
            },
            {
              subtitle: "Fonctions de Transfert",
              content: "Grandeurs dependant du chemin suivi.",
              examples: [
                "Travail (W) - pas une fonction d'etat",
                "Chaleur (Q) - pas une fonction d'etat"
              ],
              warning: "W et Q dependent du chemin suivi entre les etats initial et final"
            }
          ]
        },
        {
          title: "Transformations Thermodynamiques",
          sections: [
            {
              subtitle: "Types de Transformations",
              transformations: [
                {
                  name: "Quasi-statique",
                  description: "Suite continue d'etats d'equilibre interne. A tout instant, les variables du systeme sont definies."
                },
                {
                  name: "Reversible",
                  description: "Succession d'etats d'equilibre infiniment voisins. La transformation inverse passe par les memes etats intermediaires."
                },
                {
                  name: "Irreversible",
                  description: "Transformation brutale ou spontanee. Les etats intermediaires ne sont pas des etats d'equilibre."
                }
              ]
            },
            {
              subtitle: "Important",
              warning: "Une transformation quasi-statique n'est pas necessairement reversible !"
            }
          ]
        },
        {
          title: "Transformations Particulieres",
          sections: [
            {
              subtitle: "Types Principaux",
              transformations: [
                { name: "Isochore", condition: "V = Cste", description: "Volume constant" },
                { name: "Isobare", condition: "P = Cste", description: "Pression constante" },
                { name: "Isotherme", condition: "T = Cste", description: "Temperature constante" },
                { name: "Adiabatique", condition: "Q = 0", description: "Aucun echange de chaleur" },
                { name: "Cyclique", condition: "Etat final = Etat initial", description: "Retour a l'etat initial" }
              ]
            }
          ]
        },
        {
          title: "Outils Mathematiques",
          sections: [
            {
              subtitle: "Differentielle Totale",
              content: "Pour une fonction f(x, y) continue et derivable :",
              formula: "df = (df/dx)dx + (df/dy)dy"
            },
            {
              subtitle: "Condition de DTE",
              content: "Pour que df soit une differentielle totale exacte :",
              formula: "d2f/dxdy = d2f/dydx",
              explanation: "Egalite des derivees secondes croisees (condition de Schwartz)"
            }
          ]
        },
        {
          title: "Systemes Thermo-elastiques (STEP)",
          sections: [
            {
              subtitle: "Definition",
              content: "Systemes homogenes (gaz ou liquides) inertes chimiquement, a composition constante (ferme), avec travail uniquement mecanique, decrits par P, V, T."
            },
            {
              subtitle: "Coefficients Thermoelastiques",
              coefficients: [
                { symbol: "alpha", name: "Coefficient de dilatation isobare", formula: "alpha = (1/V)(dV/dT)P", description: "A pression constante" },
                { symbol: "beta", name: "Coefficient d'augmentation de pression", formula: "beta = (1/P)(dP/dT)V", description: "A volume constant" },
                { symbol: "chiT", name: "Coefficient de compressibilite isotherme", formula: "chiT = -(1/V)(dV/dP)T", description: "A temperature constante" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Temperature et Dilatation Thermique",
      duration: "2 heures",
      description: "Definition de la temperature, echelles de mesure, principe zero, modele du gaz parfait et dilatation thermique.",
      topics: [
        "Definition de la temperature",
        "Variables thermometriques",
        "Echelle centesimale (Celsius)",
        "Temperature absolue et echelle Kelvin",
        "Point triple de l'eau",
        "Les echelles de temperature",
        "Principe zero de la thermodynamique",
        "Modele du gaz parfait",
        "Constante des gaz parfaits",
        "Lois particulieres",
        "Theorie cinetique",
        "Dilatation thermique"
      ],
      content: [
        {
          title: "Definition de la Temperature",
          sections: [
            {
              subtitle: "Definition",
              content: "La temperature est une grandeur physique mesurable indirectement. Elle est liee a l'agitation moleculaire et represente l'energie moyenne d'une molecule.",
              keyPoints: [
                "Fonction de deux variables d'etat : theta = f(x, y)",
                "Un thermometre : systeme ou une variable est constante, l'autre depend de T"
              ]
            }
          ]
        },
        {
          title: "Echelles de Temperature",
          sections: [
            {
              subtitle: "Comparaison des Echelles",
              table: {
                headers: ["Echelle", "Symbole", "Zero absolu", "Glace fondante", "Ebullition"],
                rows: [
                  ["Kelvin", "K", "0 K", "273.15 K", "373.15 K"],
                  ["Celsius", "C", "-273.15 C", "0 C", "100 C"],
                  ["Fahrenheit", "F", "-459.67 F", "32 F", "212 F"],
                  ["Rankine", "R", "0 R", "491.67 R", "671.67 R"]
                ]
              }
            },
            {
              subtitle: "Relations de Conversion",
              formulas: [
                { formula: "T(K) = T(C) + 273.15", description: "Kelvin vers Celsius" },
                { formula: "T(F) = 1.8 x T(C) + 32", description: "Celsius vers Fahrenheit" }
              ]
            }
          ]
        },
        {
          title: "Principe Zero de la Thermodynamique",
          sections: [
            {
              subtitle: "Enonce",
              content: "\"Deux systemes thermodynamiques en equilibre thermique avec un meme troisieme sont en equilibre thermique entre eux.\"",
              isQuote: true
            }
          ]
        },
        {
          title: "Modele du Gaz Parfait",
          sections: [
            {
              subtitle: "Hypotheses",
              hypotheses: [
                "Molecules assimilables a des points immateriels (sans volume propre)",
                "Molecules tres eloignees les unes des autres, sans force d'interaction",
                "Les forces de repulsion ne se manifestent que lors des chocs elastiques",
                "Conservation de l'energie cinetique totale"
              ]
            },
            {
              subtitle: "Equation d'Etat",
              formula: "PV = nRT",
              keyPoints: [
                "P : Pression (Pa)",
                "V : Volume (m3)",
                "n : Quantite de matiere (mol)",
                "R = 8.314 J.K-1.mol-1",
                "T : Temperature (K)"
              ]
            }
          ]
        },
        {
          title: "Lois Particulieres des Gaz Parfaits",
          sections: [
            {
              subtitle: "Lois Fondamentales",
              table: {
                headers: ["Loi", "Condition", "Formule"],
                rows: [
                  ["Mariotte", "T = cste", "P1V1 = P2V2"],
                  ["Charles", "V = cste", "P1/T1 = P2/T2"],
                  ["Gay-Lussac", "P = cste", "V1/T1 = V2/T2"]
                ]
              }
            }
          ]
        },
        {
          title: "Theorie Cinetique des Gaz",
          sections: [
            {
              subtitle: "Energie Cinetique Moyenne",
              formula: "(1/2)m<v2> = (3/2)kT",
              explanation: "k = 1.38 x 10^-23 J/K est la constante de Boltzmann"
            },
            {
              subtitle: "Theoreme d'Equipartition",
              formula: "(1/2)kT par degre de liberte",
              keyPoints: [
                "Gaz monoatomique (3 ddl) : Ec = (3/2)kT",
                "Gaz diatomique (5 ddl) : Ec = (5/2)kT"
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Travail et Chaleur",
      duration: "2 heures",
      description: "Echanges d'energie : travail des forces de pression et chaleur, capacites thermiques, chaleur latente et calorimetrie.",
      topics: [
        "Definition de la chaleur",
        "Modes de transfert thermique",
        "Expression de la chaleur",
        "Capacites thermiques",
        "Chaleur latente",
        "Calorimetrie",
        "Travail des forces de pression",
        "Travail dans les transformations"
      ],
      content: [
        {
          title: "La Chaleur : Definition",
          sections: [
            {
              subtitle: "Definition",
              content: "Energie echangee entre deux corps de temperatures differentes mis en contact.",
              keyPoints: [
                "A l'echelle microscopique : energie cinetique echangee par agitation moleculaire",
                "Unites : Joule [J] ou calorie [cal]",
                "1 calorie = 4.186 Joules"
              ]
            }
          ]
        },
        {
          title: "Les Trois Modes de Transfert de Chaleur",
          sections: [
            {
              subtitle: "Modes de Transfert",
              table: {
                headers: ["Mode", "Description", "Formule"],
                rows: [
                  ["Conduction", "Transfert par contact materiel direct", "Q = lambda x S x (TA-TB)/e"],
                  ["Convection", "Transfert par mouvement de fluide", "Q = h x S x (T-Tfluide)"],
                  ["Rayonnement", "Transfert par ondes EM", "Q = epsilon x sigma x S x T^4"]
                ]
              }
            }
          ]
        },
        {
          title: "Capacites Thermiques",
          sections: [
            {
              subtitle: "A Volume Constant (CV)",
              formula: "dQ_V = CV x dT",
              subformula: "Q_V = m x c_V x (T2-T1)"
            },
            {
              subtitle: "A Pression Constante (CP)",
              formula: "dQ_P = CP x dT",
              subformula: "Q_P = m x c_P x (T2-T1)"
            },
            {
              subtitle: "Relation de Mayer",
              formula: "CP - CV = nR",
              explanation: "Pour les gaz parfaits"
            }
          ]
        },
        {
          title: "Chaleur Latente de Changement d'Etat",
          sections: [
            {
              subtitle: "Definition",
              content: "Quantite de chaleur necessaire pour faire passer l'unite de masse d'un corps pur d'un etat physique a un autre, a temperature constante."
            },
            {
              subtitle: "Formule",
              formula: "Q = m x L",
              explanation: "L : chaleur latente massique [J/kg]"
            },
            {
              subtitle: "Exemples",
              table: {
                headers: ["Transition", "Chaleur Latente", "Temperature"],
                rows: [
                  ["Fusion (glace vers eau)", "334 kJ/kg", "0 C"],
                  ["Vaporisation (eau vers vapeur)", "2260 kJ/kg", "100 C"],
                  ["Sublimation (glace vers vapeur)", "2594 kJ/kg", "0 C"]
                ]
              }
            }
          ]
        },
        {
          title: "Travail des Forces de Pression",
          sections: [
            {
              subtitle: "Travail Elementaire",
              formula: "dW = -P_ext x dV"
            },
            {
              subtitle: "Travail Total",
              formula: "W = -Integrale(P_ext x dV)",
              explanation: "Integrale le long du chemin"
            }
          ]
        },
        {
          title: "Travail dans les Transformations Particulieres",
          sections: [
            {
              subtitle: "Cas Particuliers",
              table: {
                headers: ["Transformation", "Travail"],
                rows: [
                  ["Isobare (P = cste)", "W = -P(V2-V1)"],
                  ["Isochore (V = cste)", "W = 0"],
                  ["Isotherme reversible (gaz parfait)", "W = nRT x ln(V2/V1)"],
                  ["Irreversible", "W = -P_ext(V2-V1)"]
                ]
              }
            }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Premier Principe de la Thermodynamique",
      duration: "2 heures",
      description: "Premier principe, energie interne, application au gaz parfait, fonction enthalpie, transformations particulieres reversibles.",
      topics: [
        "Principe d'equivalence",
        "Enonce du premier principe",
        "Energie interne",
        "Application au gaz parfait",
        "Detente de Joule",
        "Fonction enthalpie",
        "Transformation isochore",
        "Transformation isobare",
        "Transformation isotherme",
        "Transformation adiabatique",
        "Transformation polytrope"
      ],
      content: [
        {
          title: "Principe d'Equivalence",
          sections: [
            {
              subtitle: "Enonce",
              content: "\"Lorsqu'un systeme thermodynamique ferme quelconque subit un cycle de transformations, la somme algebrique des quantites d'energie echangees par le systeme avec l'exterieur est nulle.\"",
              isQuote: true
            },
            {
              subtitle: "Consequence",
              content: "La quantite (W + Q) est independante de la nature de la transformation du systeme d'un etat 1 a un etat 2. Cette somme est par definition egale a la variation d'une fonction d'etat appelee \"energie interne\" U.",
              keyPoints: [
                "W + Q = Delta U",
                "U est une fonction d'etat",
                "1 cal = 4.18 Joules"
              ]
            }
          ]
        },
        {
          title: "Enonce du Premier Principe",
          sections: [
            {
              subtitle: "Formulation",
              content: "Si au cours d'une transformation d'un systeme ferme d'un etat initial (1) a un etat final (2), il y a echange d'une quantite de chaleur Q et d'un travail W avec le milieu exterieur, alors la somme du travail et de la chaleur echanges est egale a la variation de l'energie interne :",
              formula: "Delta U = W + Q",
              keyPoints: [
                "U est une fonction d'etat extensive",
                "U a un caractere additif",
                "Pour un systeme isole : Delta U = 0"
              ]
            }
          ]
        },
        {
          title: "Expression Differentielle",
          sections: [
            {
              subtitle: "Forme Differentielle",
              content: "Pour une transformation entre deux etats d'equilibre infiniment proches :",
              formula: "dU = dQ + dW",
              explanation: "dU est une differentielle totale exacte"
            }
          ]
        },
        {
          title: "Cas General",
          sections: [
            {
              subtitle: "Energie Totale",
              content: "Dans le cas general, la variation d'energie totale s'ecrit :",
              formula: "Delta E_tot = Delta E_c + Delta E_p + Delta U = W + Q",
              keyPoints: [
                "E_c : Energie cinetique macroscopique",
                "E_p : Energie potentielle macroscopique",
                "U : Energie interne (microscopique)"
              ]
            }
          ]
        },
        {
          title: "Cas d'un Systeme Isole",
          sections: [
            {
              subtitle: "Propriete",
              content: "La variation de l'energie interne d'un systeme isole est nulle. L'energie interne est constante.",
              formula: "Delta U = 0 (W = 0, Q = 0)",
              keyPoints: [
                "Pas d'echange d'energie",
                "U = Cste",
                "L'energie interne est conservee"
              ]
            },
            {
              subtitle: "Interpretation",
              content: "Le premier principe est un principe de conservation d'energie : pas de creation ni de destruction d'energie, uniquement de la conversion d'une forme en une autre."
            }
          ]
        },
        {
          title: "Application au Gaz Parfait : Detente de Joule",
          sections: [
            {
              subtitle: "Experience de Joule",
              content: "Un gaz parfait se detend dans le vide (transformation spontanee irreversible). Les parois sont adiabatiques.",
              keyPoints: [
                "P_ext = 0 donc dW = 0",
                "Parois adiabatiques donc dQ = 0",
                "Delta U = 0 : transformation isoenergetique"
              ]
            },
            {
              subtitle: "Consequence : Loi de Joule",
              content: "L'energie interne d'un gaz parfait ne depend que de la temperature :",
              formula: "U = U(T) uniquement",
              explanation: "Pour un gaz parfait, dU = n x C_V x dT"
            }
          ]
        },
        {
          title: "Energie Interne du Gaz Parfait",
          sections: [
            {
              subtitle: "Gaz Monoatomique",
              content: "(Ar, Ne, ...) - 3 degres de liberte (translations uniquement)",
              formula: "U = (3/2) x n x R x T",
              keyPoints: [
                "C_V = (3/2) x R",
                "C_P = (5/2) x R"
              ]
            },
            {
              subtitle: "Gaz Diatomique",
              content: "(N2, O2, H2, ...) - 5 degres de liberte (3 translations + 2 rotations)",
              formula: "U = (5/2) x n x R x T",
              keyPoints: [
                "C_V = (5/2) x R",
                "C_P = (7/2) x R"
              ]
            }
          ]
        },
        {
          title: "Fonction Enthalpie",
          sections: [
            {
              subtitle: "Definition",
              content: "L'enthalpie H est definie par :",
              formula: "H = U + PV",
              keyPoints: [
                "H est une fonction d'etat",
                "Pour un gaz parfait : H = U + nRT",
                "dH = n x C_P x dT"
              ]
            },
            {
              subtitle: "Relation de Mayer",
              formula: "C_P - C_V = R",
              explanation: "Pour une mole de gaz parfait"
            }
          ]
        },
        {
          title: "Transformation Isochore",
          sections: [
            {
              subtitle: "Caracteristiques",
              content: "V = Cste, donc dW = 0",
              formula: "Delta U = Q = n x C_V x (T2 - T1)",
              keyPoints: [
                "W = 0",
                "Q = Delta U",
                "Delta H = n x C_P x (T2 - T1)"
              ]
            }
          ]
        },
        {
          title: "Transformation Isobare",
          sections: [
            {
              subtitle: "Caracteristiques",
              content: "P = Cste",
              formula: "Q = n x C_P x (T2 - T1)",
              keyPoints: [
                "W = -P(V2 - V1)",
                "Delta U = n x C_V x (T2 - T1)",
                "Q = Delta H"
              ]
            }
          ]
        },
        {
          title: "Transformation Isotherme",
          sections: [
            {
              subtitle: "Caracteristiques",
              content: "T = Cste, donc dU = 0 (pour gaz parfait)",
              formula: "Q = -W",
              keyPoints: [
                "Delta U = 0",
                "Delta H = 0",
                "PV = Cste (loi de Mariotte)"
              ]
            }
          ]
        },
        {
          title: "Transformation Adiabatique Reversible",
          sections: [
            {
              subtitle: "Caracteristiques",
              content: "dQ = 0, donc dU = dW",
              formula: "P x V^gamma = Cste",
              keyPoints: [
                "gamma = C_P/C_V",
                "T x V^(gamma-1) = Cste",
                "T^gamma x P^(1-gamma) = Cste"
              ]
            },
            {
              subtitle: "Travail",
              formula: "W = (P2V2 - P1V1)/(gamma - 1) = n x C_V x (T2 - T1)"
            }
          ]
        },
        {
          title: "Transformation Polytropique",
          sections: [
            {
              subtitle: "Definition",
              content: "Un gaz parfait subit une transformation polytropique reversible d'indice k definie par :",
              formula: "P x V^k = Cste",
              explanation: "avec k = (C_P - C_k)/(C_V - C_k)"
            },
            {
              subtitle: "Cas Particuliers",
              table: {
                headers: ["Transformation", "k", "C_k"],
                rows: [
                  ["Isotherme", "1", "infini"],
                  ["Isobare", "0", "C_P"],
                  ["Isochore", "infini", "C_V"],
                  ["Adiabatique", "gamma", "0"]
                ]
              }
            }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Second Principe de la Thermodynamique",
      duration: "2 heures",
      description: "Insuffisance du premier principe, enonces du second principe, entropie, transformations irreversibles.",
      topics: [
        "Insuffisance du premier principe",
        "Necessite d'un deuxieme principe",
        "Enonce de Clausius",
        "Enonce de Kelvin",
        "Forme mathematique du second principe",
        "Inegalite de Carnot-Clausius",
        "Notion d'entropie",
        "Entropie echangee",
        "Entropie creee",
        "Bilan entropique"
      ],
      content: [
        {
          title: "Insuffisance du Premier Principe",
          sections: [
            {
              subtitle: "Introduction",
              content: "L'expression mathematique du premier principe applique a un systeme isole ou subissant une transformation cyclique s'ecrit W + Q = 0. Mais cette expression qui traduit la conservation d'energie ne nous renseigne pas sur le SIGNE de Q et W.",
              keyPoints: [
                "Le premier principe ne s'oppose pas au transfert de chaleur d'un corps froid vers un corps chaud",
                "Le premier principe n'explique pas le sens privilegie des transformations naturelles"
              ]
            },
            {
              subtitle: "Exemple 1 : Equilibre Thermique",
              content: "Le premier principe ne s'oppose pas au transfert spontane de chaleur d'un corps froid vers un corps chaud, pourtant ce phenomene n'est jamais observe dans la nature."
            },
            {
              subtitle: "Exemple 2 : Bicyclette",
              content: "Une bicyclette en mouvement freine et s'echauffe. Il est impossible de la voir se mettre en mouvement seule en refroidissant les freins. Le premier principe ne s'y oppose pas."
            }
          ]
        },
        {
          title: "Enonce de Clausius",
          sections: [
            {
              subtitle: "Postulat d'Irreversibilite",
              content: "\"Une quantite de chaleur ne peut jamais etre transferee spontanement d'une source froide (SF) vers une source chaude (SC).\"",
              isQuote: true,
              keyPoints: [
                "Le transfert spontane a lieu toujours de SC vers SF",
                "L'inverse necessite un apport de travail (refrigerateur)"
              ]
            }
          ]
        },
        {
          title: "Enonce de Kelvin",
          sections: [
            {
              subtitle: "Postulat d'Irreversibilite",
              content: "\"Il est impossible de prelever une quantite de chaleur Q d'une source de chaleur et de la transformer integralement en travail.\"",
              isQuote: true,
              keyPoints: [
                "Une machine thermique doit fonctionner entre au moins deux sources",
                "Machine parfaite impossible"
              ]
            }
          ]
        },
        {
          title: "Forme Mathematique du Second Principe",
          sections: [
            {
              subtitle: "Relation de Clausius",
              content: "Pour un cycle ditherme reversible :",
              formula: "Q1/T1 + Q2/T2 = 0",
              explanation: "La somme des quantites de chaleur echangees divisees par la temperature de la source est nulle."
            },
            {
              subtitle: "Cas General",
              content: "Pour un cycle quelconque (inegalite de Clausius) :",
              formula: "Somme(Q_i/T_i) <= 0",
              keyPoints: [
                "= 0 : transformation reversible",
                "< 0 : transformation irreversible"
              ]
            }
          ]
        },
        {
          title: "Inegalite de Carnot-Clausius",
          sections: [
            {
              subtitle: "Forme Differentielle",
              content: "Pour une transformation entre deux etats d'equilibre :",
              formula: "Integrale(dQ_rev/T) >= Integrale(dQ_irrev/T_source)",
              explanation: "Le signe = correspond au cas reversible, < au cas irreversible"
            }
          ]
        },
        {
          title: "Notion d'Entropie",
          sections: [
            {
              subtitle: "Definition",
              content: "L'integrale Integrale(dQ_rev/T) ne depend pas du chemin suivi. Elle peut donc etre consideree comme la variation d'une fonction d'etat S appelee entropie.",
              formula: "dS = dQ_rev/T",
              keyPoints: [
                "S est une fonction d'etat",
                "dS est une differentielle totale exacte",
                "Unite : J/K"
              ]
            },
            {
              subtitle: "Variation d'Entropie",
              formula: "Delta S = S2 - S1 = Integrale(dQ_rev/T)",
              explanation: "Pour une transformation reversible"
            }
          ]
        },
        {
          title: "Entropie Creee",
          sections: [
            {
              subtitle: "Bilan Entropique",
              content: "Pour une transformation irreversible :",
              formula: "Delta S = Delta S_e + Delta S_c",
              keyPoints: [
                "Delta S_e = Q_irrev/T_source (entropie echangee)",
                "Delta S_c >= 0 (entropie creee, toujours positive)",
                "Delta S_c = 0 pour une transformation reversible"
              ]
            },
            {
              subtitle: "Principe d'Evolution",
              content: "L'entropie creee est toujours positive ou nulle. Elle caracterise l'irreversibilite de la transformation.",
              warning: "Une transformation irreversible cree de l'entropie !"
            }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Les Machines Dithermes",
      duration: "2 heures",
      description: "Machines thermiques, cycles moteurs et recepteurs, cycle de Carnot, rendement et efficacite.",
      topics: [
        "Definition des machines thermiques",
        "Source de chaleur",
        "Cycles dithermes",
        "Cycle moteur",
        "Cycle recepteur",
        "Machine frigorifique",
        "Pompe a chaleur",
        "Cycle de Carnot",
        "Theoreme de Carnot",
        "Diagramme de Raveau"
      ],
      content: [
        {
          title: "Machines Thermiques : Definition",
          sections: [
            {
              subtitle: "Machine Thermique",
              content: "Dispositif effectuant des transformations cycliques permettant de transformer une energie calorifique (chaleur) en energie mecanique (travail) et reciproquement.",
              keyPoints: [
                "Fonctionne de maniere cyclique",
                "Echange de la chaleur avec au moins deux sources",
                "Etat final = Etat initial"
              ]
            },
            {
              subtitle: "Source de Chaleur",
              content: "Corps de tres forte capacite calorifique. La temperature de la source reste pratiquement inchangee lors des echanges de chaleur."
            }
          ]
        },
        {
          title: "Premier Principe pour un Cycle",
          sections: [
            {
              subtitle: "Bilan Energetique",
              content: "Pour un cycle ditherme :",
              formula: "W + Q1 + Q2 = 0",
              explanation: "Ou Q1 est echange avec la source chaude (T1) et Q2 avec la source froide (T2)"
            }
          ]
        },
        {
          title: "Cycle Moteur",
          sections: [
            {
              subtitle: "Caracteristiques",
              content: "Le moteur convertit de la chaleur en travail.",
              keyPoints: [
                "W < 0 (le systeme fournit du travail)",
                "Q1 > 0 (recoit chaleur de la source chaude)",
                "Q2 < 0 (rejette chaleur a la source froide)"
              ]
            },
            {
              subtitle: "Rendement",
              formula: "eta = |W|/Q1 = -W/Q1 = 1 + Q2/Q1",
              explanation: "Le rendement est toujours inferieur a 1 (eta < 1)"
            }
          ]
        },
        {
          title: "Cycle Recepteur",
          sections: [
            {
              subtitle: "Caracteristiques",
              content: "Le systeme recoit du travail.",
              keyPoints: [
                "W > 0 (le systeme recoit du travail)",
                "Q1 < 0 (rejette chaleur a la source chaude)",
                "Q2 > 0 (preleve chaleur de la source froide)"
              ]
            }
          ]
        },
        {
          title: "Machine Frigorifique",
          sections: [
            {
              subtitle: "Principe",
              content: "Extraire de la chaleur d'une source froide pour la refroidir.",
              formula: "e = Q2/W = -Q2/(Q1 + Q2)",
              explanation: "e est l'efficacite frigorifique, toujours positive"
            }
          ]
        },
        {
          title: "Pompe a Chaleur",
          sections: [
            {
              subtitle: "Principe",
              content: "Chauffer une source en y transferant de la chaleur depuis une source froide.",
              formula: "p = -Q1/W = Q1/(Q1 + Q2)",
              explanation: "p est la performance (COP), toujours superieure a 1"
            }
          ]
        },
        {
          title: "Cycle de Carnot",
          sections: [
            {
              subtitle: "Definition",
              content: "Cycle ditherme reversible evoluant entre deux sources de temperature T1 et T2 (T1 > T2), forme de deux isothermes et deux adiabatiques.",
              keyPoints: [
                "AB : Detente isotherme a T1",
                "BC : Detente adiabatique",
                "CD : Compression isotherme a T2",
                "DA : Compression adiabatique"
              ]
            },
            {
              subtitle: "Rendement de Carnot",
              formula: "eta_Carnot = 1 - T2/T1",
              explanation: "Rendement maximal pour des sources donnees"
            }
          ]
        },
        {
          title: "Theoreme de Carnot",
          sections: [
            {
              subtitle: "Enonce",
              content: "On a le meme rendement pour tous les cycles reversibles fonctionnant entre les memes sources de chaleur. Ce rendement est superieur au rendement de tous les cycles irreversibles fonctionnant entre les memes temperatures.",
              formula: "eta_reversible = eta_Carnot",
              warning: "Le rendement de Carnot est le rendement maximal possible !"
            }
          ]
        },
        {
          title: "Formules du Cycle de Carnot",
          sections: [
            {
              subtitle: "Efficacite Machine Frigorifique",
              formula: "e = T2/(T1 - T2)"
            },
            {
              subtitle: "Performance Pompe a Chaleur",
              formula: "p = T1/(T1 - T2)"
            }
          ]
        }
      ]
    }
  ]
};

// Mes Flashcards - Toutes les cartes de revision pour les 6 seances
export const flashcardsData = [
  // ==================== SESSION 1 - 54 FLASHCARDS ====================
  // Introduction
  { id: 'f1', session: 1, front: "Qu'est-ce que la thermodynamique?", back: "La science qui etudie les transformations de la matiere et de l'energie. Nee vers 1820, elle possede un caractere universel." },
  { id: 'f2', session: 1, front: "Quelle est l'origine de la thermodynamique?", back: "Nee vers 1820, au debut de l'ere industrielle, de la necessite de comprendre les relations entre phenomenes thermiques et dynamiques dans les machines thermiques." },
  { id: 'f3', session: 1, front: "Que disait Einstein de la thermodynamique?", back: "\"C'est la seule theorie physique a caractere universel dont je suis convaincu... qu'elle ne sera jamais contestee.\"" },
  { id: 'f4', session: 1, front: "Qu'est-ce que l'approche macroscopique?", back: "Approche basee sur des grandeurs mesurables a grande echelle (P, V, T, n). Elle decrit le comportement d'ensemble du systeme." },
  { id: 'f5', session: 1, front: "Qu'est-ce que l'approche microscopique?", back: "Analyse du comportement des particules elementaires (positions et vitesses). Appelee aussi thermodynamique statistique." },
  { id: 'f6', session: 1, front: "Quelles sont les variables macroscopiques?", back: "Pression (P), Volume (V), Temperature (T), Quantite de matiere (n)." },
  
  // Systemes
  { id: 'f7', session: 1, front: "Qu'est-ce qu'un systeme thermodynamique?", back: "Une partie de l'univers a laquelle on porte de l'interet. Constitue d'un grand nombre de particules delimitees par une surface a travers laquelle s'effectuent des echanges." },
  { id: 'f8', session: 1, front: "Qu'est-ce qu'un systeme ouvert?", back: "Un systeme qui peut echanger de la matiere ET de l'energie avec le milieu exterieur. Exemples: bois qui brule, moteur thermique." },
  { id: 'f9', session: 1, front: "Qu'est-ce qu'un systeme ferme?", back: "Un systeme qui peut echanger de l'energie SEULEMENT avec le milieu exterieur (pas de matiere). Exemples: gaz dans un cylindre, refrigerateur." },
  { id: 'f10', session: 1, front: "Qu'est-ce qu'un systeme isole?", back: "Un systeme qui n'echange NI matiere NI energie avec le milieu exterieur. Exemple: l'Univers." },
  
  // Convention du banquier
  { id: 'f11', session: 1, front: "Quelle est la convention du banquier?", back: "Q > 0, W > 0 : energie RECUE par le systeme (positive)\nQ < 0, W < 0 : energie CEDEE par le systeme (negative)" },
  { id: 'f12', session: 1, front: "Si un systeme recoit 500 J de chaleur, que vaut Q?", back: "Q = +500 J (positif car energie recue)." },
  { id: 'f13', session: 1, front: "Si un systeme fournit 200 J de travail, que vaut W?", back: "W = -200 J (negatif car energie cedee)." },
  
  // Variables d'etat
  { id: 'f14', session: 1, front: "Qu'est-ce qu'une variable d'etat?", back: "Une grandeur mesurable (P, V, T, n...) capable de decrire completement l'etat d'un systeme a un instant donne." },
  { id: 'f15', session: 1, front: "Qu'est-ce qu'une equation d'etat?", back: "Une relation f(P, V, T, ...) = 0 qui lie les variables d'etat entre elles." },
  { id: 'f16', session: 1, front: "Quelle est l'equation d'etat du gaz parfait?", back: "PV = nRT, avec R = 8.314 J.K-1.mol-1" },
  
  // Variables extensives/intensives
  { id: 'f17', session: 1, front: "Qu'est-ce qu'une variable extensive?", back: "Une variable proportionnelle a la masse, ADDITIVE. Ex: masse, volume, nombre de particules, energie interne." },
  { id: 'f18', session: 1, front: "Qu'est-ce qu'une variable intensive?", back: "Une variable independante de la masse. Ex: temperature, pression, masse volumique." },
  { id: 'f19', session: 1, front: "Si on double la masse d'un systeme, que deviennent les variables extensives?", back: "Elles doublent aussi." },
  { id: 'f20', session: 1, front: "Si on divise un systeme, que deviennent les variables intensives?", back: "Elles restent identiques dans chaque partie." },
  
  // Fonctions d'etat
  { id: 'f21', session: 1, front: "Qu'est-ce qu'une fonction d'etat?", back: "Une grandeur dont la variation depend uniquement des etats initial et final, et NON du chemin suivi. Ex: U, H, S." },
  { id: 'f22', session: 1, front: "Pourquoi W et Q ne sont-ils pas des fonctions d'etat?", back: "Parce qu'ils dependent du chemin suivi entre les etats initial et final." },
  { id: 'f23', session: 1, front: "Citez 3 fonctions d'etat.", back: "Energie interne (U), Enthalpie (H), Entropie (S)." },
  
  // Transformations
  { id: 'f24', session: 1, front: "Qu'est-ce qu'une transformation quasi-statique?", back: "Une suite continue d'etats d'equilibre interne. A tout instant, les variables sont definies." },
  { id: 'f25', session: 1, front: "Qu'est-ce qu'une transformation reversible?", back: "Succession d'etats d'equilibre infiniment voisins. La transformation inverse passe par les memes etats." },
  { id: 'f26', session: 1, front: "Qu'est-ce qu'une transformation irreversible?", back: "Transformation brutale ou spontanee. Les etats intermediaires ne sont pas des etats d'equilibre." },
  { id: 'f27', session: 1, front: "Une transformation quasi-statique est-elle toujours reversible?", back: "NON ! Ce n'est pas une condition suffisante." },
  { id: 'f28', session: 1, front: "Qu'est-ce qu'une transformation isochore?", back: "Volume constant (V = Cste)." },
  { id: 'f29', session: 1, front: "Qu'est-ce qu'une transformation isobare?", back: "Pression constante (P = Cste)." },
  { id: 'f30', session: 1, front: "Qu'est-ce qu'une transformation isotherme?", back: "Temperature constante (T = Cste)." },
  { id: 'f31', session: 1, front: "Qu'est-ce qu'une transformation adiabatique?", back: "Sans echange de chaleur (Q = 0)." },
  { id: 'f32', session: 1, front: "Qu'est-ce qu'une transformation cyclique?", back: "Etat final identique a l'etat initial." },
  
  // Outils mathematiques
  { id: 'f33', session: 1, front: "Qu'est-ce qu'une differentielle totale exacte (DTE)?", back: "Une forme differentielle dont l'integrale ne depend PAS du chemin suivi. C'est la differentielle d'une fonction d'etat." },
  { id: 'f34', session: 1, front: "Quelle est la condition de Schwartz?", back: "d2f/dxdy = d2f/dydx (egalite des derivees secondes croisees)." },
  { id: 'f35', session: 1, front: "Quelle notation utilise-t-on pour une forme differentielle (pas DTE)?", back: "On utilise delta: dW pour le travail, dQ pour la chaleur." },
  
  // Equilibre
  { id: 'f36', session: 1, front: "Qu'est-ce qu'un etat d'equilibre?", back: "Un systeme est en equilibre lorsque ses variables d'etat ne varient pas dans le temps ET sont uniformes." },
  { id: 'f37', session: 1, front: "Qu'est-ce que l'equilibre thermique?", back: "Temperature constante et uniforme en tout point." },
  { id: 'f38', session: 1, front: "Qu'est-ce que l'equilibre mecanique?", back: "Pression constante et uniforme en tout point." },
  
  // STEP
  { id: 'f39', session: 1, front: "Qu'est-ce qu'un systeme thermo-elastique (STEP)?", back: "Systeme homogene (gaz ou liquide) inerte chimiquement, a composition constante (ferme), avec travail uniquement mecanique." },
  { id: 'f40', session: 1, front: "Qu'est-ce que le coefficient alpha?", back: "Coefficient de dilatation isobare: alpha = (1/V)(dV/dT)P." },
  { id: 'f41', session: 1, front: "Qu'est-ce que le coefficient beta?", back: "Coefficient d'augmentation de pression isochore: beta = (1/P)(dP/dT)V." },
  { id: 'f42', session: 1, front: "Qu'est-ce que le coefficient chi_T?", back: "Coefficient de compressibilite isotherme: chi_T = -(1/V)(dV/dP)T." },
  
  // ==================== SESSION 2 - 43 FLASHCARDS ====================
  { id: 'f43', session: 2, front: "Qu'est-ce que la temperature?", back: "Une grandeur physique mesurable indirectement, liee a l'agitation moleculaire. Represente l'energie moyenne d'une molecule." },
  { id: 'f44', session: 2, front: "Qu'est-ce qu'un thermometre?", back: "Un systeme ou une variable est maintenue constante tandis que l'autre depend de la temperature." },
  { id: 'f45', session: 2, front: "Citez 6 types de thermometres.", back: "1. Thermometre a liquide (mercure)\n2. Thermometre a gaz\n3. Thermometre a resistance\n4. Thermocouple\n5. Pyrometre\n6. Capteur capacitif" },
  { id: 'f46', session: 2, front: "Quels sont les deux points fixes de l'echelle centesimale?", back: "Fusion de la glace: 0 C\nEbullition de l'eau: 100 C" },
  { id: 'f47', session: 2, front: "Qu'est-ce que le zero absolu?", back: "T = 0 K = -273.15 C. Agitation moleculaire nulle. Limite absolue du froid." },
  { id: 'f48', session: 2, front: "Qu'est-ce que le point triple de l'eau?", back: "Point ou coexistent les trois phases. T = 273.16 K, P = 611 Pa." },
  { id: 'f49', session: 2, front: "Comment convertir Celsius en Kelvin?", back: "T(K) = T(C) + 273.15" },
  { id: 'f50', session: 2, front: "Comment convertir Celsius en Fahrenheit?", back: "T(F) = 1.8 x T(C) + 32" },
  { id: 'f51', session: 2, front: "Enoncez le principe zero.", back: "\"Deux systemes en equilibre thermique avec un meme troisieme sont en equilibre thermique entre eux.\"" },
  { id: 'f52', session: 2, front: "Qu'est-ce qu'une cloison adiabatique?", back: "Une paroi qui ne permet aucun echange de chaleur." },
  { id: 'f53', session: 2, front: "Qu'est-ce qu'une cloison diatherme?", back: "Une paroi qui permet les echanges de chaleur." },
  { id: 'f54', session: 2, front: "Quelles sont les hypotheses du gaz parfait?", back: "1. Molecules ponctuelles (sans volume propre)\n2. Sans interaction\n3. Chocs elastiques" },
  { id: 'f55', session: 2, front: "Quelle est l'equation d'etat du gaz parfait?", back: "PV = nRT, avec R = 8.314 J.K-1.mol-1" },
  { id: 'f56', session: 2, front: "Quelles sont les conditions normales (STP)?", back: "T = 273.15 K (0 C), P = 1.013 x 10^5 Pa (1 atm), Vm = 22.414 L/mol" },
  { id: 'f57', session: 2, front: "Quelle est la loi de Mariotte?", back: "A T constante: P1V1 = P2V2" },
  { id: 'f58', session: 2, front: "Quelle est la loi de Charles?", back: "A V constant: P1/T1 = P2/T2" },
  { id: 'f59', session: 2, front: "Quelle est la loi de Gay-Lussac?", back: "A P constante: V1/T1 = V2/T2" },
  { id: 'f60', session: 2, front: "Quelle est l'energie cinetique moyenne d'une molecule?", back: "(1/2)m<v2> = (3/2)kT, avec k = 1.38 x 10^-23 J/K" },
  { id: 'f61', session: 2, front: "Qu'est-ce que le theoreme d'equipartition?", back: "Chaque degre de liberte contribue (1/2)kT a l'energie cinetique moyenne." },
  { id: 'f62', session: 2, front: "Quelle est l'energie d'un gaz monoatomique?", back: "Ec = (3/2)kT (3 degres de liberte)" },
  { id: 'f63', session: 2, front: "Quelle est l'energie d'un gaz diatomique?", back: "Ec = (5/2)kT (5 degres de liberte)" },
  { id: 'f64', session: 2, front: "Quelle est la relation entre alpha_V et alpha_l?", back: "Pour un corps isotrope: alpha_V = 3 x alpha_l" },
  
  // ==================== SESSION 3 - 45 FLASHCARDS ====================
  { id: 'f65', session: 3, front: "Qu'est-ce que la chaleur?", back: "Energie echangee entre deux corps de temperatures differentes mis en contact. A l'echelle microscopique: energie cinetique echangee par agitation moleculaire." },
  { id: 'f66', session: 3, front: "Quelles sont les unites de chaleur?", back: "Joule [J] ou calorie [cal]. 1 calorie = 4.186 Joules." },
  { id: 'f67', session: 3, front: "Quelle est la difference entre chaleur et temperature?", back: "La chaleur est une energie echangee (J), la temperature est une grandeur d'etat (K). Un echange de chaleur peut s'effectuer sans variation de temperature." },
  { id: 'f68', session: 3, front: "Quels sont les trois modes de transfert de chaleur?", back: "1. Conduction: par contact materiel\n2. Convection: par mouvement de fluide\n3. Rayonnement: par ondes EM" },
  { id: 'f69', session: 3, front: "Qu'est-ce que la conduction thermique?", back: "Transfert de chaleur par contact materiel direct." },
  { id: 'f70', session: 3, front: "Qu'est-ce que la convection thermique?", back: "Transfert de chaleur par mouvement de fluide." },
  { id: 'f71', session: 3, front: "Qu'est-ce que le rayonnement thermique?", back: "Transfert de chaleur par ondes electromagnetiques (sans contact)." },
  { id: 'f72', session: 3, front: "Quels sont les 6 coefficients calorimetriques?", back: "CP, CV, l, h, mu, lambda." },
  { id: 'f73', session: 3, front: "Qu'est-ce que la capacite thermique CV?", back: "Capacite thermique a volume constant. dQ_V = CV x dT." },
  { id: 'f74', session: 3, front: "Qu'est-ce que la capacite thermique CP?", back: "Capacite thermique a pression constante. dQ_P = CP x dT." },
  { id: 'f75', session: 3, front: "Quelle est la relation de Mayer?", back: "CP - CV = nR (pour les gaz parfaits)" },
  { id: 'f76', session: 3, front: "Qu'est-ce que la chaleur latente?", back: "Quantite de chaleur necessaire pour faire passer l'unite de masse d'un corps d'un etat a un autre, a T constante. Q = m x L." },
  { id: 'f77', session: 3, front: "Quelle est la chaleur latente de fusion de la glace?", back: "L = 334 kJ/kg a 0 C" },
  { id: 'f78', session: 3, front: "Quelle est la chaleur latente de vaporisation de l'eau?", back: "L = 2260 kJ/kg a 100 C" },
  { id: 'f79', session: 3, front: "Qu'est-ce que la calorimetrie?", back: "Mesure des echanges de chaleur. Principe: Somme(Qi) = 0" },
  { id: 'f80', session: 3, front: "Quelle est l'expression du travail elementaire?", back: "dW = -P_ext x dV" },
  { id: 'f81', session: 3, front: "Quel est le travail d'une transformation isobare?", back: "W = -P(V2 - V1)" },
  { id: 'f82', session: 3, front: "Quel est le travail d'une transformation isochore?", back: "W = 0 (pas de travail)" },
  { id: 'f83', session: 3, front: "Quel est le travail d'une transformation isotherme reversible?", back: "W = nRT x ln(V2/V1)" },
  { id: 'f84', session: 3, front: "Pourquoi le travail n'est-il pas une fonction d'etat?", back: "Parce que W depend du chemin suivi entre les etats initial et final." },
  
  // ==================== SESSION 4 - 50 FLASHCARDS ====================
  { id: 'f85', session: 4, front: "Qu'est-ce que le principe d'equivalence?", back: "\"La somme algebrique des quantites d'energie echangees par un systeme ferme subissant un cycle est nulle.\"" },
  { id: 'f86', session: 4, front: "Qu'est-ce que l'energie interne U?", back: "Fonction d'etat dont la variation egale W + Q. C'est l'energie microscopique du systeme." },
  { id: 'f87', session: 4, front: "Enoncez le premier principe.", back: "Delta U = W + Q. La somme du travail et de la chaleur echanges est egale a la variation de l'energie interne." },
  { id: 'f88', session: 4, front: "Quelle est la forme differentielle du premier principe?", back: "dU = dQ + dW" },
  { id: 'f89', session: 4, front: "L'energie interne est-elle extensive ou intensive?", back: "Extensive. Elle a un caractere additif: U_total = Somme(U_i)." },
  { id: 'f90', session: 4, front: "Que vaut Delta U pour un systeme isole?", back: "Delta U = 0 (pas d'echange d'energie). L'energie interne est conservee." },
  { id: 'f91', session: 4, front: "Qu'est-ce que la detente de Joule?", back: "Detente d'un gaz parfait dans le vide. Transformation isoenergetique (Delta U = 0)." },
  { id: 'f92', session: 4, front: "Quelle est la loi de Joule pour un gaz parfait?", back: "L'energie interne d'un gaz parfait ne depend que de la temperature: U = U(T)." },
  { id: 'f93', session: 4, front: "Quelle est l'energie interne d'un gaz monoatomique?", back: "U = (3/2) x nRT. C_V = (3/2) x R." },
  { id: 'f94', session: 4, front: "Quelle est l'energie interne d'un gaz diatomique?", back: "U = (5/2) x nRT. C_V = (5/2) x R." },
  { id: 'f95', session: 4, front: "Qu'est-ce que l'enthalpie H?", back: "H = U + PV. C'est une fonction d'etat." },
  { id: 'f96', session: 4, front: "Quelle est la variation d'enthalpie pour un gaz parfait?", back: "dH = n x C_P x dT" },
  { id: 'f97', session: 4, front: "Quelle est la relation de Mayer?", back: "C_P - C_V = R (pour une mole de gaz parfait)" },
  { id: 'f98', session: 4, front: "Que vaut W pour une transformation isochore?", back: "W = 0 (volume constant, donc pas de travail)." },
  { id: 'f99', session: 4, front: "Que vaut Q pour une transformation isochore?", back: "Q = Delta U = n x C_V x (T2 - T1)" },
  { id: 'f100', session: 4, front: "Que vaut Q pour une transformation isobare?", back: "Q = Delta H = n x C_P x (T2 - T1)" },
  { id: 'f101', session: 4, front: "Que vaut Delta U pour une transformation isotherme (gaz parfait)?", back: "Delta U = 0 (U ne depend que de T)." },
  { id: 'f102', session: 4, front: "Que vaut Q pour une transformation isotherme reversible?", back: "Q = -W = nRT x ln(V2/V1)" },
  { id: 'f103', session: 4, front: "Quelle est l'equation d'une adiabatique reversible?", back: "P x V^gamma = Cste, avec gamma = C_P/C_V" },
  { id: 'f104', session: 4, front: "Que vaut Q pour une transformation adiabatique?", back: "Q = 0 (pas d'echange de chaleur)." },
  { id: 'f105', session: 4, front: "Que vaut W pour une transformation adiabatique reversible?", back: "W = n x C_V x (T2 - T1) = (P2V2 - P1V1)/(gamma - 1)" },
  { id: 'f106', session: 4, front: "Qu'est-ce que le coefficient gamma?", back: "gamma = C_P/C_V. Pour un gaz monoatomique: gamma = 5/3. Pour un gaz diatomique: gamma = 7/5." },
  { id: 'f107', session: 4, front: "Qu'est-ce qu'une transformation polytropique?", back: "Transformation reversible definie par P x V^k = Cste, avec k = (C_P - C_k)/(C_V - C_k)." },
  { id: 'f108', session: 4, front: "Que vaut k pour une transformation isotherme?", back: "k = 1" },
  { id: 'f109', session: 4, front: "Que vaut k pour une transformation isobare?", back: "k = 0" },
  { id: 'f110', session: 4, front: "Que vaut k pour une transformation isochore?", back: "k = infini" },
  { id: 'f111', session: 4, front: "Que vaut k pour une transformation adiabatique?", back: "k = gamma" },
  { id: 'f112', session: 4, front: "Dans un cycle, que vaut Delta U?", back: "Delta U = 0 (etat final = etat initial)." },
  { id: 'f113', session: 4, front: "Que vaut C_P pour un gaz monoatomique?", back: "C_P = (5/2) x R" },
  { id: 'f114', session: 4, front: "Que vaut C_P pour un gaz diatomique?", back: "C_P = (7/2) x R" },
  
  // ==================== SESSION 5 - 45 FLASHCARDS ====================
  { id: 'f115', session: 5, front: "Pourquoi le premier principe est-il insuffisant?", back: "Il traduit la conservation d'energie mais n'indique pas le sens d'evolution des transformations. Il n'explique pas l'irreversibilite." },
  { id: 'f116', session: 5, front: "Donnez un exemple montrant l'insuffisance du premier principe.", back: "Le transfert spontane de chaleur: le 1er principe ne s'oppose pas au transfert d'un corps froid vers un corps chaud, pourtant cela n'arrive jamais." },
  { id: 'f117', session: 5, front: "Enoncez le postulat de Clausius.", back: "\"Une quantite de chaleur ne peut jamais etre transferee spontanement d'une source froide vers une source chaude.\"" },
  { id: 'f118', session: 5, front: "Enoncez le postulat de Kelvin.", back: "\"Il est impossible de prelever de la chaleur d'une seule source et de la transformer integralement en travail.\"" },
  { id: 'f119', session: 5, front: "Qu'est-ce qu'une machine parfaite?", back: "Une machine qui convertirait integralement de la chaleur en travail. Impossible selon Kelvin." },
  { id: 'f120', session: 5, front: "Quelle est la relation de Clausius pour un cycle reversible?", back: "Somme(Q_i/T_i) = 0" },
  { id: 'f121', session: 5, front: "Quelle est la relation de Clausius pour un cycle irreversible?", back: "Somme(Q_i/T_i) < 0" },
  { id: 'f122', session: 5, front: "Qu'est-ce que l'inegalite de Carnot-Clausius?", back: "Integrale(dQ_rev/T) >= Integrale(dQ_irrev/T_source)" },
  { id: 'f123', session: 5, front: "Qu'est-ce que l'entropie S?", back: "Fonction d'etat definie par dS = dQ_rev/T. Unite: J/K." },
  { id: 'f124', session: 5, front: "Quelle est la variation d'entropie pour une transformation reversible?", back: "Delta S = Integrale(dQ_rev/T)" },
  { id: 'f125', session: 5, front: "Qu'est-ce que l'entropie echangee?", back: "Delta S_e = Q_irrev/T_source. Entropie transferée avec l'exterieur." },
  { id: 'f126', session: 5, front: "Qu'est-ce que l'entropie creee?", back: "Delta S_c = Delta S - Delta S_e. Toujours positive ou nulle. Mesure l'irreversibilite." },
  { id: 'f127', session: 5, front: "Quel est le signe de l'entropie creee?", back: "Toujours positive ou nulle. Delta S_c >= 0." },
  { id: 'f128', session: 5, front: "Que vaut l'entropie creee pour une transformation reversible?", back: "Delta S_c = 0" },
  { id: 'f129', session: 5, front: "Que vaut l'entropie creee pour une transformation irreversible?", back: "Delta S_c > 0" },
  { id: 'f130', session: 5, front: "Qu'est-ce que le bilan entropique?", back: "Delta S = Delta S_e + Delta S_c (variation = echangee + creee)" },
  { id: 'f131', session: 5, front: "L'entropie est-elle une fonction d'etat?", back: "OUI. dS est une differentielle totale exacte." },
  { id: 'f132', session: 5, front: "L'entropie est-elle extensive ou intensive?", back: "Extensive. Additive comme l'energie interne." },
  { id: 'f133', session: 5, front: "Quelle est la cause principale de creation d'entropie?", back: "La mise en contact de deux corps a temperatures differentes (irreversibilite thermique)." },
  { id: 'f134', session: 5, front: "Pour un systeme isole, que peut-on dire de l'entropie?", back: "Delta S >= 0. L'entropie d'un systeme isole ne peut qu'augmenter." },
  
  // ==================== SESSION 6 - 50 FLASHCARDS ====================
  { id: 'f135', session: 6, front: "Qu'est-ce qu'une machine thermique?", back: "Dispositif effectuant des transformations cycliques permettant de transformer de l'energie calorifique en energie mecanique et reciproquement." },
  { id: 'f136', session: 6, front: "Qu'est-ce qu'une source de chaleur?", back: "Corps de tres forte capacite calorifique. Sa temperature reste pratiquement inchangee lors des echanges." },
  { id: 'f137', session: 6, front: "Qu'est-ce qu'un cycle ditherme?", back: "Cycle au cours duquel le systeme echange de la chaleur avec deux sources de temperatures differentes." },
  { id: 'f138', session: 6, front: "Que dit le premier principe pour un cycle?", back: "W + Q1 + Q2 = 0 (la somme des energies echangees est nulle)." },
  { id: 'f139', session: 6, front: "Qu'est-ce qu'un cycle moteur?", back: "Cycle qui convertit de la chaleur en travail. W < 0, Q1 > 0, Q2 < 0." },
  { id: 'f140', session: 6, front: "Qu'est-ce qu'un cycle recepteur?", back: "Cycle qui recoit du travail. W > 0, Q1 < 0, Q2 > 0." },
  { id: 'f141', session: 6, front: "Comment definit-on le rendement d'un moteur?", back: "eta = |W|/Q1 = -W/Q1 = 1 + Q2/Q1" },
  { id: 'f142', session: 6, front: "Pourquoi le rendement est-il toujours < 1?", back: "Parce qu'une partie de la chaleur Q1 est inevitablement rejetee a la source froide (Q2 < 0)." },
  { id: 'f143', session: 6, front: "Qu'est-ce qu'une machine frigorifique?", back: "Machine qui extrait de la chaleur d'une source froide pour la refroidir. W > 0." },
  { id: 'f144', session: 6, front: "Comment definit-on l'efficacite d'une machine frigorifique?", back: "e = Q2/W = -Q2/(Q1 + Q2)" },
  { id: 'f145', session: 6, front: "Qu'est-ce qu'une pompe a chaleur?", back: "Machine qui chauffe une source en y transferant de la chaleur depuis une source froide." },
  { id: 'f146', session: 6, front: "Comment definit-on la performance d'une pompe a chaleur?", back: "p = -Q1/W = Q1/(Q1 + Q2)" },
  { id: 'f147', session: 6, front: "Pourquoi la performance d'une PAC est-elle > 1?", back: "Parce que Q1 > W. On recupere plus de chaleur que le travail fourni." },
  { id: 'f148', session: 6, front: "Qu'est-ce que le cycle de Carnot?", back: "Cycle ditherme reversible forme de deux isothermes et deux adiabatiques." },
  { id: 'f149', session: 6, front: "Quelles sont les 4 etapes du cycle de Carnot?", back: "1. Detente isotherme a T1\n2. Detente adiabatique\n3. Compression isotherme a T2\n4. Compression adiabatique" },
  { id: 'f150', session: 6, front: "Quel est le rendement du cycle de Carnot?", back: "eta_Carnot = 1 - T2/T1" },
  { id: 'f151', session: 6, front: "Qu'est-ce que le theoreme de Carnot?", back: "Le rendement de Carnot est le rendement maximal pour des sources donnees. Tous les cycles reversibles ont le meme rendement." },
  { id: 'f152', session: 6, front: "Quel est le rendement d'un cycle irreversible?", back: "eta < eta_Carnot (toujours inferieur au rendement de Carnot)." },
  { id: 'f153', session: 6, front: "Quelle est l'efficacite d'une machine frigorifique de Carnot?", back: "e = T2/(T1 - T2)" },
  { id: 'f154', session: 6, front: "Quelle est la performance d'une pompe a chaleur de Carnot?", back: "p = T1/(T1 - T2)" },
  { id: 'f155', session: 6, front: "Pourquoi ne peut-on pas avoir un rendement de 100%?", back: "Il faudrait T2 = 0 K (impossible) ou une source froide a 0 K (impossible)." },
  { id: 'f156', session: 6, front: "Qu'est-ce que le diagramme de Raveau?", back: "Diagramme montrant les differents types de machines thermiques selon les signes de Q1, Q2 et W." },
  { id: 'f157', session: 6, front: "Quelle est la relation entre T1, T2, Q1 et Q2 pour un cycle reversible?", back: "Q1/T1 + Q2/T2 = 0" },
  { id: 'f158', session: 6, front: "Dans un moteur, d'ou vient Q1?", back: "De la combustion (essence, diesel, charbon) ou d'une reaction nucleaire." },
  { id: 'f159', session: 6, front: "Dans un moteur, ou va Q2?", back: "Perdue dans les gaz d'echappement et le circuit de refroidissement." },
  { id: 'f160', session: 6, front: "Qu'est-ce qu'un cycle monotherme?", back: "Cycle avec une seule source de chaleur. Impossible de produire du travail (eta = 0)." },
  // Additional flashcards from Séance 4 documents
  { id: 'f161', session: 4, front: "Quelle est la relation TV^(gamma-1) = Cste?", back: "Une des equations de l'adiabatique reversible reliant temperature et volume." },
  { id: 'f162', session: 4, front: "Quelle est la relation T^gamma x P^(1-gamma) = Cste?", back: "Une des equations de l'adiabatique reversible reliant temperature et pression." },
  { id: 'f163', session: 4, front: "Combien de degres de liberte a un gaz monoatomique?", back: "3 degres de liberte (translations uniquement, pas de rotation)." },
  { id: 'f164', session: 4, front: "Combien de degres de liberte a un gaz diatomique?", back: "5 degres de liberte (3 translations + 2 rotations)." },
  { id: 'f165', session: 4, front: "Pourquoi un gaz diatomique a 5 degres de liberte?", back: "3 translations + 2 rotations (la rotation autour de l'axe inter-nucleaire n'a pas d'effet)." },
  { id: 'f166', session: 4, front: "Que vaut l'energie cinetique moyenne par degre de liberte?", back: "(1/2)kT ou k = 1.38 x 10^-23 J/K (constante de Boltzmann)." },
  { id: 'f167', session: 4, front: "Dans une transformation isochore, que devient dQ?", back: "dQ s'identifie a dQ (DTE). La chaleur devient une fonction d'etat." },
  { id: 'f168', session: 4, front: "Dans une transformation adiabatique reversible, que devient W?", back: "W devient une fonction d'etat (DTE). Il ne depend que des etats initial et final." },
  { id: 'f169', session: 4, front: "Qu'est-ce qu'une transformation isoenergetique?", back: "Transformation ou Delta U = 0. Exemple: detente de Joule, transformation isotherme d'un gaz parfait." },
  { id: 'f170', session: 4, front: "Comment calcule-t-on le travail d'une adiabatique avec P et V?", back: "W = (P2V2 - P1V1)/(gamma - 1)" },
  // Additional flashcards from Séance 5 documents
  { id: 'f171', session: 5, front: "Donnez un exemple de transformation irreversible.", back: "La detente de Joule, le transfert thermique spontane, le freinage d'une bicyclette." },
  { id: 'f172', session: 5, front: "Pourquoi le freinage d'une bicyclette est-il irreversible?", back: "L'energie cinetique se transforme en chaleur. Impossible de voir la bicyclette se remettre en mouvement en refroidissant les freins." },
  { id: 'f173', session: 5, front: "Que signifie l'inegalite de Carnot-Clausius?", back: "Integrale(dQ_rev/T) >= Integrale(dQ_irrev/T_source). Le signe = est pour reversible, < pour irreversible." },
  { id: 'f174', session: 5, front: "Comment calculer l'entropie creee dans un exemple pratique?", back: "Delta S_c = Delta S - Delta S_e = Delta S - Q/T_source" },
  { id: 'f175', session: 5, front: "Quelle est la cause de creation d'entropie dans l'exemple du fer chaud dans le lac?", back: "La mise en contact de deux corps a temperatures differentes (880 K et 278 K)." },
  { id: 'f176', session: 5, front: "L'entropie est-elle additive?", back: "OUI, c'est une grandeur extensive. S_totale = S1 + S2 + ..." },
  { id: 'f177', session: 5, front: "Quelle est la relation entre entropie et reversibilite?", back: "Transformation reversible: Delta S_c = 0. Transformation irreversible: Delta S_c > 0." },
  // Additional flashcards from Séance 6 documents
  { id: 'f178', session: 6, front: "Quelles sont les 4 transformations du cycle de Carnot?", back: "1. Detente isotherme (T1)\n2. Detente adiabatique\n3. Compression isotherme (T2)\n4. Compression adiabatique" },
  { id: 'f179', session: 6, front: "Dans un cycle moteur, que vaut Q1 et Q2?", back: "Q1 > 0 (recoit chaleur de source chaude), Q2 < 0 (rejette chaleur a source froide)." },
  { id: 'f180', session: 6, front: "Dans un cycle recepteur, que vaut W?", back: "W > 0 (le systeme recoit du travail de l'exterieur)." },
  { id: 'f181', session: 6, front: "Pourquoi eta = 1 est impossible?", back: "Il faudrait Q2 = 0, donc supprimer la source froide. C'est impossible selon le 2eme principe." },
  { id: 'f182', session: 6, front: "Qu'est-ce que le theoreme de Carnot?", back: "Tous les cycles reversibles entre T1 et T2 ont le meme rendement = 1 - T2/T1, superieur aux cycles irreversibles." },
  { id: 'f183', session: 6, front: "Comment fonctionne une pompe a chaleur?", back: "Elle preleve de la chaleur d'une source froide et la transfere a une source chaude en consommant du travail." },
  { id: 'f184', session: 6, front: "Pourquoi la performance d'une PAC > 1?", back: "Parce que la chaleur Q1 fournie est superieure au travail W consomme. Q1 = W + |Q2| > W." },
  { id: 'f185', session: 6, front: "Qu'est-ce que le diagramme de Raveau?", back: "Graphique montrant les zones de fonctionnement des machines thermiques selon les signes de Q1, Q2 et W." },
  { id: 'f186', session: 6, front: "Dans un moteur a explosion, ou a lieu l'explosion?", back: "En fin de compression, au point B du cycle." },
  { id: 'f187', session: 6, front: "Comment calculer le travail dans un cycle moteur?", back: "W = -Somme(Q) car Delta U = 0 pour un cycle." },
  { id: 'f188', session: 6, front: "Quelle est l'application du 2eme principe aux machines?", back: "Somme(Q_i/T_i) <= 0, donc Q1/T1 + Q2/T2 <= 0." },
];

// Mes Quiz - Questions pour tester mes connaissances sur les 6 seances
export const quizData = [
  // ==================== SESSION 1 - 20 QUESTIONS ====================
  {
    id: 'q1',
    session: 1,
    question: "Un systeme qui echange uniquement de l'energie avec l'exterieur est appele:",
    options: ["Systeme ouvert", "Systeme ferme", "Systeme isole", "Systeme adiabatique"],
    correctAnswer: 1,
    explanation: "Un systeme ferme echange de l'energie mais pas de matiere avec l'exterieur."
  },
  {
    id: 'q2',
    session: 1,
    question: "Laquelle de ces variables est une variable intensive?",
    options: ["Volume", "Masse", "Temperature", "Nombre de particules"],
    correctAnswer: 2,
    explanation: "La temperature est intensive (independante de la masse)."
  },
  {
    id: 'q3',
    session: 1,
    question: "Une transformation isotherme s'effectue a:",
    options: ["Pression constante", "Volume constant", "Temperature constante", "Sans echange de chaleur"],
    correctAnswer: 2,
    explanation: "Isotherme = temperature constante."
  },
  {
    id: 'q4',
    session: 1,
    question: "Lequel est une fonction d'etat?",
    options: ["Travail W", "Chaleur Q", "Energie interne U", "Aucun"],
    correctAnswer: 2,
    explanation: "U est une fonction d'etat. W et Q dependent du chemin."
  },
  {
    id: 'q5',
    session: 1,
    question: "La condition pour qu'une differentielle soit totale exacte est:",
    options: ["d2f/dx2 = d2f/dy2", "d2f/dxdy = d2f/dydx", "df/dx = df/dy", "df = 0"],
    correctAnswer: 1,
    explanation: "Condition de Schwartz."
  },
  {
    id: 'q6',
    session: 1,
    question: "Une transformation adiabatique s'effectue:",
    options: ["A T constante", "A P constante", "Sans echange de chaleur", "Sans echange de travail"],
    correctAnswer: 2,
    explanation: "Adiabatique = Q = 0."
  },
  {
    id: 'q7',
    session: 1,
    question: "Selon la convention du banquier, si Q > 0:",
    options: ["Le systeme cede de la chaleur", "Le systeme recoit de la chaleur", "Il n'y a pas d'echange", "La temperature diminue"],
    correctAnswer: 1,
    explanation: "Q > 0 = energie recue (positive)."
  },
  {
    id: 'q8',
    session: 1,
    question: "Le coefficient alpha est defini par:",
    options: ["(1/V)(dV/dT)P", "(1/P)(dP/dT)V", "-(1/V)(dV/dP)T", "(dV/dT)P"],
    correctAnswer: 0,
    explanation: "alpha = (1/V)(dV/dT)P, coefficient de dilatation isobare."
  },
  {
    id: 'q9',
    session: 1,
    question: "Un systeme isole peut echanger:",
    options: ["De la matiere uniquement", "De l'energie uniquement", "Matiere et energie", "Rien du tout"],
    correctAnswer: 3,
    explanation: "Un systeme isole n'echange NI matiere NI energie."
  },
  {
    id: 'q10',
    session: 1,
    question: "Une transformation quasi-statique:",
    options: ["Est toujours reversible", "Est une suite continue d'etats d'equilibre", "Est forcement irreversible", "Se fait a vitesse elevee"],
    correctAnswer: 1,
    explanation: "Quasi-statique = suite continue d'etats d'equilibre."
  },
  
  // ==================== SESSION 2 - 15 QUESTIONS ====================
  {
    id: 'q11',
    session: 2,
    question: "Le zero absolu correspond a:",
    options: ["0 C", "273.15 K", "0 K", "-100 C"],
    correctAnswer: 2,
    explanation: "Zero absolu = 0 K = -273.15 C."
  },
  {
    id: 'q12',
    session: 2,
    question: "Le point triple de l'eau correspond a la temperature:",
    options: ["273.15 K", "273.16 K", "0 K", "373.15 K"],
    correctAnswer: 1,
    explanation: "Point triple de l'eau = 273.16 K."
  },
  {
    id: 'q13',
    session: 2,
    question: "La loi de Mariotte s'applique a:",
    options: ["T constante", "V constant", "P constante", "Adiabatique"],
    correctAnswer: 0,
    explanation: "Mariotte: P1V1 = P2V2 a T constante."
  },
  {
    id: 'q14',
    session: 2,
    question: "Pour un gaz parfait monoatomique, l'energie cinetique moyenne est:",
    options: ["(1/2)kT", "kT", "(3/2)kT", "(5/2)kT"],
    correctAnswer: 2,
    explanation: "Gaz monoatomique: 3 ddl, donc Ec = (3/2)kT."
  },
  {
    id: 'q15',
    session: 2,
    question: "Le volume molaire d'un gaz parfait a STP est:",
    options: ["22.414 L/mol", "8.314 L/mol", "273.15 L/mol", "1 L/mol"],
    correctAnswer: 0,
    explanation: "Vm = 22.414 L/mol a STP."
  },
  {
    id: 'q16',
    session: 2,
    question: "Pour un corps isotrope, alpha_V = ?",
    options: ["alpha_l", "2 x alpha_l", "3 x alpha_l", "alpha_l/3"],
    correctAnswer: 2,
    explanation: "alpha_V = 3 x alpha_l."
  },
  {
    id: 'q17',
    session: 2,
    question: "Une cloison adiabatique:",
    options: ["Permet les echanges de chaleur", "Empeche les echanges de chaleur", "Permet les echanges de matiere", "Est toujours mobile"],
    correctAnswer: 1,
    explanation: "Adiabatique = pas d'echange de chaleur."
  },
  {
    id: 'q18',
    session: 2,
    question: "La constante de Boltzmann k vaut:",
    options: ["8.314 J.K-1.mol-1", "1.38 x 10^-23 J/K", "273.15 J/K", "22.414 L/mol"],
    correctAnswer: 1,
    explanation: "k = 1.38 x 10^-23 J/K."
  },
  
  // ==================== SESSION 3 - 15 QUESTIONS ====================
  {
    id: 'q19',
    session: 3,
    question: "La chaleur est:",
    options: ["Une fonction d'etat", "Une energie echangee par difference de temperature", "Toujours positive", "Identique a la temperature"],
    correctAnswer: 1,
    explanation: "La chaleur est une energie echangee, pas une fonction d'etat."
  },
  {
    id: 'q20',
    session: 3,
    question: "Le transfert par convection s'effectue:",
    options: ["Par contact materiel", "Par mouvement de fluide", "Par ondes EM", "Sans milieu materiel"],
    correctAnswer: 1,
    explanation: "Convection = transfert par mouvement de fluide."
  },
  {
    id: 'q21',
    session: 3,
    question: "La relation de Mayer est:",
    options: ["CP + CV = nR", "CP - CV = nR", "CP/CV = gamma", "CP x CV = nR"],
    correctAnswer: 1,
    explanation: "CP - CV = nR pour les gaz parfaits."
  },
  {
    id: 'q22',
    session: 3,
    question: "La chaleur latente de fusion de la glace est:",
    options: ["2260 kJ/kg", "334 kJ/kg", "4.186 kJ/kg", "273 kJ/kg"],
    correctAnswer: 1,
    explanation: "L_fusion = 334 kJ/kg."
  },
  {
    id: 'q23',
    session: 3,
    question: "Le travail elementaire des forces de pression est:",
    options: ["dW = P dV", "dW = -P_ext dV", "dW = V dP", "dW = nRT dV"],
    correctAnswer: 1,
    explanation: "dW = -P_ext dV."
  },
  {
    id: 'q24',
    session: 3,
    question: "Dans une transformation isochore, le travail est:",
    options: ["W = -P(V2-V1)", "W = nRT ln(V2/V1)", "W = 0", "W = P Delta V"],
    correctAnswer: 2,
    explanation: "Isochore: dV = 0, donc W = 0."
  },
  {
    id: 'q25',
    session: 3,
    question: "Le travail est une fonction d'etat:",
    options: ["Vrai", "Faux", "Seulement pour les gaz parfaits", "Seulement a T constante"],
    correctAnswer: 1,
    explanation: "Faux. Le travail depend du chemin."
  },
  {
    id: 'q26',
    session: 3,
    question: "Le principe de la calorimetrie est:",
    options: ["Somme(Qi) > 0", "Somme(Qi) = 0", "Somme(Qi) < 0", "Qi = constante"],
    correctAnswer: 1,
    explanation: "Dans un systeme isole: Somme(Qi) = 0."
  },
  
  // ==================== SESSION 4 - 20 QUESTIONS ====================
  {
    id: 'q27',
    session: 4,
    question: "Enonce du premier principe:",
    options: ["Delta U = W - Q", "Delta U = W + Q", "Delta U = Q - W", "Delta U = 0"],
    correctAnswer: 1,
    explanation: "Delta U = W + Q."
  },
  {
    id: 'q28',
    session: 4,
    question: "Pour un systeme isole:",
    options: ["Delta U > 0", "Delta U < 0", "Delta U = 0", "Delta U indefini"],
    correctAnswer: 2,
    explanation: "Systeme isole: pas d'echange, donc Delta U = 0."
  },
  {
    id: 'q29',
    session: 4,
    question: "L'energie interne d'un gaz parfait depend de:",
    options: ["P uniquement", "V uniquement", "T uniquement", "P et V"],
    correctAnswer: 2,
    explanation: "Loi de Joule: U = U(T) pour un gaz parfait."
  },
  {
    id: 'q30',
    session: 4,
    question: "L'enthalpie H est definie par:",
    options: ["H = U - PV", "H = U + PV", "H = PV", "H = U/T"],
    correctAnswer: 1,
    explanation: "H = U + PV."
  },
  {
    id: 'q31',
    session: 4,
    question: "Pour un gaz monoatomique, C_V = ?",
    options: ["R", "(3/2)R", "(5/2)R", "2R"],
    correctAnswer: 1,
    explanation: "Gaz monoatomique: C_V = (3/2)R."
  },
  {
    id: 'q32',
    session: 4,
    question: "Pour un gaz diatomique, C_V = ?",
    options: ["R", "(3/2)R", "(5/2)R", "2R"],
    correctAnswer: 2,
    explanation: "Gaz diatomique: C_V = (5/2)R."
  },
  {
    id: 'q33',
    session: 4,
    question: "Lors d'une transformation isochore reversible:",
    options: ["W = 0 et Q = Delta U", "W = 0 et Q = Delta H", "W different de 0", "Q = 0"],
    correctAnswer: 0,
    explanation: "Isochore: W = 0, donc Q = Delta U."
  },
  {
    id: 'q34',
    session: 4,
    question: "Lors d'une transformation isobare reversible:",
    options: ["Q = Delta U", "Q = Delta H", "Q = 0", "W = 0"],
    correctAnswer: 1,
    explanation: "Isobare: Q = Delta H."
  },
  {
    id: 'q35',
    session: 4,
    question: "Pour une transformation isotherme reversible d'un gaz parfait:",
    options: ["Delta U = 0 et Q = -W", "Delta U different de 0", "Q = 0", "W = 0"],
    correctAnswer: 0,
    explanation: "Isotherme (GP): Delta U = 0, donc Q = -W."
  },
  {
    id: 'q36',
    session: 4,
    question: "L'equation d'une adiabatique reversible est:",
    options: ["PV = Cste", "P/V = Cste", "PV^gamma = Cste", "P^gamma V = Cste"],
    correctAnswer: 2,
    explanation: "Adiabatique: PV^gamma = Cste."
  },
  {
    id: 'q37',
    session: 4,
    question: "Le coefficient gamma est defini par:",
    options: ["gamma = C_V/C_P", "gamma = C_P/C_V", "gamma = C_P - C_V", "gamma = C_P + C_V"],
    correctAnswer: 1,
    explanation: "gamma = C_P/C_V."
  },
  {
    id: 'q38',
    session: 4,
    question: "Pour un gaz monoatomique, gamma = ?",
    options: ["1", "5/3", "7/5", "4/3"],
    correctAnswer: 1,
    explanation: "Gaz monoatomique: gamma = 5/3."
  },
  {
    id: 'q39',
    session: 4,
    question: "Pour un gaz diatomique, gamma = ?",
    options: ["1", "5/3", "7/5", "4/3"],
    correctAnswer: 2,
    explanation: "Gaz diatomique: gamma = 7/5."
  },
  {
    id: 'q40',
    session: 4,
    question: "Pour un cycle, Delta U = ?",
    options: ["Delta U > 0", "Delta U < 0", "Delta U = 0", "Depend du cycle"],
    correctAnswer: 2,
    explanation: "Cycle: etat final = etat initial, donc Delta U = 0."
  },
  
  // ==================== SESSION 5 - 15 QUESTIONS ====================
  {
    id: 'q41',
    session: 5,
    question: "L'enonce de Clausius dit que:",
    options: ["La chaleur va du froid vers le chaud", "La chaleur va spontanement du chaud vers le froid", "La chaleur est conservée", "Le travail peut etre integrealement converti en chaleur"],
    correctAnswer: 1,
    explanation: "Clausius: la chaleur va spontanement du chaud vers le froid."
  },
  {
    id: 'q42',
    session: 5,
    question: "L'enonce de Kelvin dit que:",
    options: ["On peut convertir Q en W integralement", "On ne peut pas convertir Q en W integralement", "Q est toujours positif", "W est toujours negatif"],
    correctAnswer: 1,
    explanation: "Kelvin: impossible de convertir integralement Q en W."
  },
  {
    id: 'q43',
    session: 5,
    question: "L'entropie S est definie par:",
    options: ["dS = dQ x T", "dS = dQ/T", "dS = T x dQ", "dS = dQ + T"],
    correctAnswer: 1,
    explanation: "dS = dQ_rev/T."
  },
  {
    id: 'q44',
    session: 5,
    question: "L'entropie est:",
    options: ["Une fonction d'etat", "Pas une fonction d'etat", "Toujours positive", "Toujours negative"],
    correctAnswer: 0,
    explanation: "L'entropie est une fonction d'etat."
  },
  {
    id: 'q45',
    session: 5,
    question: "L'entropie creee est:",
    options: ["Toujours negative", "Toujours positive ou nulle", "Toujours nulle", "Variable"],
    correctAnswer: 1,
    explanation: "L'entropie creee est toujours >= 0."
  },
  {
    id: 'q46',
    session: 5,
    question: "Pour une transformation reversible, l'entropie creee vaut:",
    options: ["Delta S_c > 0", "Delta S_c = 0", "Delta S_c < 0", "Delta S_c indefini"],
    correctAnswer: 1,
    explanation: "Transformation reversible: Delta S_c = 0."
  },
  {
    id: 'q47',
    session: 5,
    question: "Pour un systeme isole:",
    options: ["Delta S > 0", "Delta S < 0", "Delta S >= 0", "Delta S = 0"],
    correctAnswer: 2,
    explanation: "Systeme isole: Delta S >= 0 (l'entropie augmente ou reste constante)."
  },
  {
    id: 'q48',
    session: 5,
    question: "L'unite de l'entropie est:",
    options: ["J", "J/K", "K", "J.K"],
    correctAnswer: 1,
    explanation: "L'entropie s'exprime en J/K."
  },
  {
    id: 'q49',
    session: 5,
    question: "La relation de Clausius pour un cycle reversible est:",
    options: ["Somme(Q/T) > 0", "Somme(Q/T) = 0", "Somme(Q/T) < 0", "Somme(Q/T) = 1"],
    correctAnswer: 1,
    explanation: "Cycle reversible: Somme(Q/T) = 0."
  },
  {
    id: 'q50',
    session: 5,
    question: "La relation de Clausius pour un cycle irreversible est:",
    options: ["Somme(Q/T) > 0", "Somme(Q/T) = 0", "Somme(Q/T) < 0", "Somme(Q/T) = 1"],
    correctAnswer: 2,
    explanation: "Cycle irreversible: Somme(Q/T) < 0."
  },
  
  // ==================== SESSION 6 - 15 QUESTIONS ====================
  {
    id: 'q51',
    session: 6,
    question: "Une machine thermique fonctionne:",
    options: ["Avec une seule source", "Avec au moins deux sources", "Sans source", "Avec trois sources minimum"],
    correctAnswer: 1,
    explanation: "Une machine thermique necessite au moins deux sources."
  },
  {
    id: 'q52',
    session: 6,
    question: "Dans un cycle moteur:",
    options: ["W > 0, Q1 > 0, Q2 > 0", "W < 0, Q1 > 0, Q2 < 0", "W > 0, Q1 < 0, Q2 > 0", "W < 0, Q1 < 0, Q2 > 0"],
    correctAnswer: 1,
    explanation: "Moteur: W < 0 (fournit du travail), Q1 > 0 (recoit chaleur), Q2 < 0 (rejette chaleur)."
  },
  {
    id: 'q53',
    session: 6,
    question: "Le rendement d'un moteur est defini par:",
    options: ["eta = W/Q1", "eta = |W|/Q1", "eta = Q1/W", "eta = Q2/Q1"],
    correctAnswer: 1,
    explanation: "eta = |W|/Q1 = -W/Q1."
  },
  {
    id: 'q54',
    session: 6,
    question: "Le rendement d'un moteur est toujours:",
    options: ["Superieur a 1", "Egal a 1", "Inferieur a 1", "Egal a 0"],
    correctAnswer: 2,
    explanation: "Le rendement est toujours < 1 (car Q2 < 0)."
  },
  {
    id: 'q55',
    session: 6,
    question: "Le rendement de Carnot est:",
    options: ["eta = 1 - T1/T2", "eta = 1 - T2/T1", "eta = T2/T1", "eta = T1/T2"],
    correctAnswer: 1,
    explanation: "eta_Carnot = 1 - T2/T1."
  },
  {
    id: 'q56',
    session: 6,
    question: "Le theoreme de Carnot dit que:",
    options: ["Carnot est le rendement minimum", "Carnot est le rendement maximum", "Tous les cycles ont le meme rendement", "Le rendement depend du gaz"],
    correctAnswer: 1,
    explanation: "Carnot = rendement maximum pour des sources donnees."
  },
  {
    id: 'q57',
    session: 6,
    question: "L'efficacite d'une machine frigorifique est:",
    options: ["e = W/Q2", "e = Q2/W", "e = Q1/W", "e = W/Q1"],
    correctAnswer: 1,
    explanation: "e = Q2/W (chaleur extraite / travail fourni)."
  },
  {
    id: 'q58',
    session: 6,
    question: "La performance d'une pompe a chaleur est:",
    options: ["p = W/Q1", "p = Q1/W", "p = Q2/W", "p = W/Q2"],
    correctAnswer: 1,
    explanation: "p = -Q1/W = Q1/(Q1 + Q2)."
  },
  {
    id: 'q59',
    session: 6,
    question: "La performance d'une PAC est toujours:",
    options: ["< 1", "= 1", "> 1", "= 0"],
    correctAnswer: 2,
    explanation: "Performance PAC > 1 car Q1 > W."
  },
  {
    id: 'q60',
    session: 6,
    question: "Le cycle de Carnot est compose de:",
    options: ["2 isothermes et 2 isochores", "2 isothermes et 2 adiabatiques", "2 isobares et 2 adiabatiques", "4 isothermes"],
    correctAnswer: 1,
    explanation: "Carnot: 2 isothermes + 2 adiabatiques."
  },
  
  // ==================== SESSION 4 - ADDITIONAL QUESTIONS ====================
  {
    id: 'q61',
    session: 4,
    question: "La relation de Mayer s'ecrit:",
    options: ["C_P + C_V = R", "C_P - C_V = R", "C_P x C_V = R", "C_P/C_V = R"],
    correctAnswer: 1,
    explanation: "La relation de Mayer: C_P - C_V = R (pour une mole)."
  },
  {
    id: 'q62',
    session: 4,
    question: "Pour une transformation polytropique, que vaut k pour une isotherme?",
    options: ["k = 0", "k = 1", "k = gamma", "k = infini"],
    correctAnswer: 1,
    explanation: "Pour une isotherme: k = 1."
  },
  {
    id: 'q63',
    session: 4,
    question: "La detente de Joule est:",
    options: ["Une transformation reversible", "Une transformation irreversible spontanee", "Une transformation isobare", "Une transformation isochore"],
    correctAnswer: 1,
    explanation: "La detente de Joule est une transformation irreversible spontanee (gaz se detend dans le vide)."
  },
  {
    id: 'q64',
    session: 4,
    question: "Lors de la detente de Joule, que vaut Delta U?",
    options: ["Delta U > 0", "Delta U < 0", "Delta U = 0", "Depend du gaz"],
    correctAnswer: 2,
    explanation: "Detente de Joule: W = 0 (P_ext = 0) et Q = 0 (adiabatique), donc Delta U = 0."
  },
  {
    id: 'q65',
    session: 4,
    question: "Un gaz monoatomique a combien de degres de liberte?",
    options: ["3", "5", "6", "2"],
    correctAnswer: 0,
    explanation: "Un gaz monoatomique a 3 degres de liberte (translations uniquement)."
  },
  {
    id: 'q66',
    session: 4,
    question: "Un gaz diatomique a combien de degres de liberte?",
    options: ["3", "5", "6", "7"],
    correctAnswer: 1,
    explanation: "Un gaz diatomique a 5 degres de liberte (3 translations + 2 rotations)."
  },
  {
    id: 'q67',
    session: 4,
    question: "L'energie cinetique moyenne par degre de liberte vaut:",
    options: ["kT", "(1/2)kT", "(3/2)kT", "2kT"],
    correctAnswer: 1,
    explanation: "Theoreme d'equipartition: (1/2)kT par degre de liberte."
  },
  {
    id: 'q68',
    session: 4,
    question: "Pour une transformation adiabatique reversible, que vaut Q?",
    options: ["Q > 0", "Q < 0", "Q = 0", "Q = W"],
    correctAnswer: 2,
    explanation: "Adiabatique: pas d'echange de chaleur, donc Q = 0."
  },
  {
    id: 'q69',
    session: 4,
    question: "Le travail d'une adiabatique reversible peut s'ecrire:",
    options: ["W = nR(T2-T1)", "W = nC_V(T2-T1)", "W = nC_P(T2-T1)", "W = 0"],
    correctAnswer: 1,
    explanation: "Pour une adiabatique: W = Delta U = nC_V(T2-T1)."
  },
  
  // ==================== SESSION 5 - ADDITIONAL QUESTIONS ====================
  {
    id: 'q70',
    session: 5,
    question: "Le premier principe ne peut pas expliquer:",
    options: ["La conservation de l'energie", "Le sens des transformations naturelles", "La relation entre W et Q", "L'energie interne"],
    correctAnswer: 1,
    explanation: "Le 1er principe traduit la conservation mais n'explique pas le sens d'evolution."
  },
  {
    id: 'q71',
    session: 5,
    question: "Un exemple de transformation irreversible est:",
    options: ["Une detente isotherme reversible", "Le freinage d'une bicyclette", "Une compression adiabatique reversible", "Un cycle de Carnot"],
    correctAnswer: 1,
    explanation: "Le freinage d'une bicyclette transforme l'energie cinetique en chaleur (irreversible)."
  },
  {
    id: 'q72',
    session: 5,
    question: "L'entropie echangee est definie par:",
    options: ["Delta S_e = Q/T_systeme", "Delta S_e = Q/T_source", "Delta S_e = W/T", "Delta S_e = Delta S - Q"],
    correctAnswer: 1,
    explanation: "L'entropie echangee = Q/T_source."
  },
  {
    id: 'q73',
    session: 5,
    question: "Le bilan entropique s'ecrit:",
    options: ["Delta S = Delta S_e - Delta S_c", "Delta S = Delta S_e + Delta S_c", "Delta S = Delta S_e x Delta S_c", "Delta S = Delta S_c"],
    correctAnswer: 1,
    explanation: "Bilan entropique: Delta S = Delta S_e + Delta S_c."
  },
  {
    id: 'q74',
    session: 5,
    question: "L'inegalite de Carnot-Clausius pour une irreversible s'ecrit:",
    options: ["Integrale(dQ/T) > 0", "Integrale(dQ/T) = 0", "Integrale(dQ/T) < 0", "Integrale(dQ/T) >= 0"],
    correctAnswer: 2,
    explanation: "Pour un cycle irreversible: Somme(Q/T) < 0."
  },
  {
    id: 'q75',
    session: 5,
    question: "La creation d'entropie est due a:",
    options: ["La reversibilite", "L'irreversibilite", "L'isolation", "La conservation d'energie"],
    correctAnswer: 1,
    explanation: "L'entropie creee > 0 caracterise l'irreversibilite."
  },
  
  // ==================== SESSION 6 - ADDITIONAL QUESTIONS ====================
  {
    id: 'q76',
    session: 6,
    question: "Une source de chaleur est caracterisee par:",
    options: ["Une faible capacite calorifique", "Une tres forte capacite calorifique", "Une temperature variable", "Un volume nul"],
    correctAnswer: 1,
    explanation: "Une source de chaleur a une tres forte capacite calorifique (temperature constante)."
  },
  {
    id: 'q77',
    session: 6,
    question: "Dans un cycle recepteur (machine frigo), les signes sont:",
    options: ["W > 0, Q1 < 0, Q2 > 0", "W < 0, Q1 > 0, Q2 < 0", "W > 0, Q1 > 0, Q2 < 0", "W < 0, Q1 < 0, Q2 > 0"],
    correctAnswer: 0,
    explanation: "Cycle recepteur: W > 0 (recoit travail), Q1 < 0 (rejette chaleur), Q2 > 0 (preleve chaleur)."
  },
  {
    id: 'q78',
    session: 6,
    question: "L'efficacite d'une machine frigorifique de Carnot est:",
    options: ["e = T1/(T1-T2)", "e = T2/(T1-T2)", "e = 1 - T2/T1", "e = (T1-T2)/T1"],
    correctAnswer: 1,
    explanation: "Efficacite Carnot frigo: e = T2/(T1-T2)."
  },
  {
    id: 'q79',
    session: 6,
    question: "La performance d'une pompe a chaleur de Carnot est:",
    options: ["p = T1/(T1-T2)", "p = T2/(T1-T2)", "p = 1 - T2/T1", "p = (T1-T2)/T2"],
    correctAnswer: 0,
    explanation: "Performance Carnot PAC: p = T1/(T1-T2)."
  },
  {
    id: 'q80',
    session: 6,
    question: "Un cycle monotherme:",
    options: ["Peut produire du travail", "Ne peut pas produire du travail", "A un rendement de 100%", "Necessite deux sources"],
    correctAnswer: 1,
    explanation: "Un cycle monotherme ne peut pas produire de travail (interdit par Kelvin)."
  },
  {
    id: 'q81',
    session: 6,
    question: "Dans un moteur a explosion, l'explosion a lieu:",
    options: ["Au debut de la detente", "En fin de compression", "Pendant la detente", "Au debut de la compression"],
    correctAnswer: 1,
    explanation: "L'explosion a lieu en fin de compression (point B du cycle)."
  },
  {
    id: 'q82',
    session: 6,
    question: "Pour un cycle reversible, la relation entre Q et T est:",
    options: ["Q1/T1 + Q2/T2 > 0", "Q1/T1 + Q2/T2 = 0", "Q1/T1 + Q2/T2 < 0", "Q1/T1 = Q2/T2"],
    correctAnswer: 1,
    explanation: "Pour un cycle reversible: Q1/T1 + Q2/T2 = 0."
  },
  {
    id: 'q83',
    session: 6,
    question: "Le rendement d'un cycle irreversible est:",
    options: ["Superieur a Carnot", "Egal a Carnot", "Inferieur a Carnot", "Independant de Carnot"],
    correctAnswer: 2,
    explanation: "Theoreme de Carnot: eta_irreversible < eta_Carnot."
  },

  // ==================== SESSION 1 - ADDITIONAL 20 QUESTIONS ====================
  {
    id: 'q84',
    session: 1,
    question: "La thermodynamique est nee vers:",
    options: ["1700", "1820", "1900", "1950"],
    correctAnswer: 1,
    explanation: "La thermodynamique est nee vers 1820, au debut de l'ere industrielle."
  },
  {
    id: 'q85',
    session: 1,
    question: "L'approche macroscopique utilise les variables:",
    options: ["Positions des molecules", "P, V, T, n", "Vitesses des particules", "Energie cinetique individuelle"],
    correctAnswer: 1,
    explanation: "L'approche macroscopique utilise les variables mesurables a grande echelle: P, V, T, n."
  },
  {
    id: 'q86',
    session: 1,
    question: "L'approche microscopique est aussi appelee:",
    options: ["Thermodynamique classique", "Thermodynamique statistique", "Thermodynamique quantique", "Thermodynamique appliquee"],
    correctAnswer: 1,
    explanation: "L'approche microscopique analyse le comportement des particules: thermodynamique statistique."
  },
  {
    id: 'q87',
    session: 1,
    question: "Un exemple de systeme ouvert est:",
    options: ["Gaz dans un cylindre ferme", "L'Univers", "Un moteur thermique", "Un refrigerateur"],
    correctAnswer: 2,
    explanation: "Un moteur thermique echange matiere (carburant, gaz) et energie avec l'exterieur."
  },
  {
    id: 'q88',
    session: 1,
    question: "Si W = -500 J, cela signifie que:",
    options: ["Le systeme recoit 500 J de travail", "Le systeme fournit 500 J de travail", "Le systeme recoit 500 J de chaleur", "Aucun echange"],
    correctAnswer: 1,
    explanation: "W < 0 signifie que le systeme fournit (cede) du travail a l'exterieur."
  },
  {
    id: 'q89',
    session: 1,
    question: "La constante des gaz parfaits R vaut:",
    options: ["1.38 x 10^-23 J/K", "8.314 J.K-1.mol-1", "273.15 J/K", "22.414 L/mol"],
    correctAnswer: 1,
    explanation: "R = 8.314 J.K-1.mol-1."
  },
  {
    id: 'q90',
    session: 1,
    question: "Si on double la masse d'un systeme, le volume:",
    options: ["Reste identique", "Double", "Divise par 2", "Triple"],
    correctAnswer: 1,
    explanation: "Le volume est une variable extensive, proportionnelle a la masse."
  },
  {
    id: 'q91',
    session: 1,
    question: "La masse volumique est une variable:",
    options: ["Extensive", "Intensive", "Ni l'un ni l'autre", "Les deux"],
    correctAnswer: 1,
    explanation: "La masse volumique (rho = m/V) est intensive, independante de la masse."
  },
  {
    id: 'q92',
    session: 1,
    question: "Une transformation reversible passe par:",
    options: ["Des etats d'equilibre instables", "Des etats d'equilibre infiniment voisins", "Des etats non definis", "Un seul etat d'equilibre"],
    correctAnswer: 1,
    explanation: "Une transformation reversible est une succession d'etats d'equilibre infiniment voisins."
  },
  {
    id: 'q93',
    session: 1,
    question: "La condition de Schwartz verifie qu'une forme differentielle est:",
    options: ["Une fonction d'etat", "Une differentielle totale exacte", "Une fonction de transfert", "Une grandeur extensive"],
    correctAnswer: 1,
    explanation: "Si d2f/dxdy = d2f/dydx, alors df est une differentielle totale exacte."
  },
  {
    id: 'q94',
    session: 1,
    question: "Le coefficient beta est defini par:",
    options: ["(1/V)(dV/dT)P", "(1/P)(dP/dT)V", "-(1/V)(dV/dP)T", "(dP/dT)V"],
    correctAnswer: 1,
    explanation: "beta = (1/P)(dP/dT)V est le coefficient d'augmentation de pression isochore."
  },
  {
    id: 'q95',
    session: 1,
    question: "Le coefficient chi_T est le coefficient de:",
    options: ["Dilatation isobare", "Augmentation de pression", "Compressibilite isotherme", "Dilatation isochore"],
    correctAnswer: 2,
    explanation: "chi_T = -(1/V)(dV/dP)T est le coefficient de compressibilite isotherme."
  },
  {
    id: 'q96',
    session: 1,
    question: "Un STEP (systeme thermo-elastique) est:",
    options: ["Un systeme ouvert", "Un systeme homogene inerte chimiquement", "Un systeme avec reactions chimiques", "Un systeme avec transfert de matiere"],
    correctAnswer: 1,
    explanation: "Un STEP est un systeme homogene, inerte chimiquement, a composition constante."
  },
  {
    id: 'q97',
    session: 1,
    question: "Une transformation cyclique implique:",
    options: ["Delta U > 0", "Delta U < 0", "Etat final = Etat initial", "Q = 0"],
    correctAnswer: 2,
    explanation: "Une transformation cyclique ramene le systeme a son etat initial."
  },
  {
    id: 'q98',
    session: 1,
    question: "Pour un gaz parfait, l'equation d'etat PV = nRT est:",
    options: ["Lineaire en P et V", "Lineaire en P et T", "Non lineaire", "Une identite"],
    correctAnswer: 1,
    explanation: "PV = nRT est lineaire en P et T (pour n et V fixes, P est proportionnel a T)."
  },
  {
    id: 'q99',
    session: 1,
    question: "L'energie interne U est:",
    options: ["Une fonction de transfert", "Une fonction d'etat extensive", "Une variable intensive", "Une constante universelle"],
    correctAnswer: 1,
    explanation: "U est une fonction d'etat extensive, energie microscopique du systeme."
  },
  {
    id: 'q100',
    session: 1,
    question: "Une transformation spontanee est generalement:",
    options: ["Reversible", "Irreversible", "Quasi-statique", "Isotherme"],
    correctAnswer: 1,
    explanation: "Une transformation spontanee est brutale et irreversible."
  },
  {
    id: 'q101',
    session: 1,
    question: "L'equilibre thermodynamique implique:",
    options: ["Seulement T constante", "Variables d'etat constantes et uniformes", "P constante uniquement", "V constant uniquement"],
    correctAnswer: 1,
    explanation: "A l'equilibre, les variables d'etat ne varient pas dans le temps ET sont uniformes."
  },
  {
    id: 'q102',
    session: 1,
    question: "La pression est une variable:",
    options: ["Extensive", "Intensive", "Ni l'une ni l'autre", "Depend du systeme"],
    correctAnswer: 1,
    explanation: "La pression est intensive: independante de la masse du systeme."
  },
  {
    id: 'q103',
    session: 1,
    question: "Le milieu exterieur est:",
    options: ["Le systeme etudie", "Tout ce qui n'est pas le systeme", "La frontiere du systeme", "L'Univers entier"],
    correctAnswer: 1,
    explanation: "Le milieu exterieur est tout ce qui n'est pas le systeme thermodynamique."
  },

  // ==================== SESSION 2 - ADDITIONAL 20 QUESTIONS ====================
  {
    id: 'q104',
    session: 2,
    question: "La temperature est liee a:",
    options: ["La masse du systeme", "L'agitation moleculaire", "Le volume du systeme", "La pression uniquement"],
    correctAnswer: 1,
    explanation: "La temperature represente l'energie moyenne d'une molecule, liee a l'agitation moleculaire."
  },
  {
    id: 'q105',
    session: 2,
    question: "Un thermometre a gaz utilise:",
    options: ["La dilatation d'un metal", "La variation de pression d'un gaz", "La resistance electrique", "Le rayonnement"],
    correctAnswer: 1,
    explanation: "Un thermometre a gaz mesure la variation de pression ou de volume d'un gaz."
  },
  {
    id: 'q106',
    session: 2,
    question: "Dans l'echelle Fahrenheit, la glace fond a:",
    options: ["0 F", "32 F", "273 F", "-32 F"],
    correctAnswer: 1,
    explanation: "La glace fond a 32 F dans l'echelle Fahrenheit."
  },
  {
    id: 'q107',
    session: 2,
    question: "Le principe zero permet de definir:",
    options: ["L'energie", "La temperature", "Le travail", "L'entropie"],
    correctAnswer: 1,
    explanation: "Le principe zero permet de definir la notion de temperature et de thermometre."
  },
  {
    id: 'q108',
    session: 2,
    question: "Une cloison diatherme permet:",
    options: ["Les echanges de matiere", "Les echanges de chaleur", "Aucun echange", "Seulement le travail"],
    correctAnswer: 1,
    explanation: "Une cloison diatherme permet les echanges de chaleur entre systemes."
  },
  {
    id: 'q109',
    session: 2,
    question: "Pour un gaz parfait, les molecules sont supposees:",
    options: ["Tres proches les unes des autres", "Sans interaction entre elles", "Avec de fortes interactions", "Immobiles"],
    correctAnswer: 1,
    explanation: "Hypothese du gaz parfait: molecules sans interaction (sauf lors des chocs)."
  },
  {
    id: 'q110',
    session: 2,
    question: "Les conditions STP correspondent a:",
    options: ["T = 0 C, P = 1 atm", "T = 0 C, P = 1.013 x 10^5 Pa", "T = 25 C, P = 1 atm", "T = 273 K, P = 10^5 Pa"],
    correctAnswer: 1,
    explanation: "STP: T = 273.15 K (0 C), P = 1.013 x 10^5 Pa (1 atm)."
  },
  {
    id: 'q111',
    session: 2,
    question: "La loi de Charles s'applique a:",
    options: ["T constante", "V constant", "P constante", "Q = 0"],
    correctAnswer: 1,
    explanation: "La loi de Charles: P1/T1 = P2/T2 a volume constant."
  },
  {
    id: 'q112',
    session: 2,
    question: "La loi de Gay-Lussac s'applique a:",
    options: ["T constante", "V constant", "P constante", "Adiabatique"],
    correctAnswer: 2,
    explanation: "La loi de Gay-Lussac: V1/T1 = V2/T2 a pression constante."
  },
  {
    id: 'q113',
    session: 2,
    question: "Pour un gaz diatomique, l'energie cinetique moyenne est:",
    options: ["(1/2)kT", "kT", "(3/2)kT", "(5/2)kT"],
    correctAnswer: 3,
    explanation: "Un gaz diatomique a 5 ddl, donc Ec = (5/2)kT."
  },
  {
    id: 'q114',
    session: 2,
    question: "Le theoreme d'equipartition dit que chaque ddl contribue:",
    options: ["kT", "(1/2)kT", "(3/2)kT", "2kT"],
    correctAnswer: 1,
    explanation: "Chaque degre de liberte contribue (1/2)kT a l'energie moyenne."
  },
  {
    id: 'q115',
    session: 2,
    question: "La dilatation lineaire s'ecrit:",
    options: ["L = L0(1 + alpha Delta T)", "L = L0/alpha Delta T", "L = alpha L0 Delta T", "L = L0 - alpha Delta T"],
    correctAnswer: 0,
    explanation: "Dilatation lineaire: L = L0(1 + alpha_l x Delta T)."
  },
  {
    id: 'q116',
    session: 2,
    question: "Le coefficient de dilatation volumique alpha_V vaut:",
    options: ["alpha_l", "2 x alpha_l", "3 x alpha_l", "alpha_l / 3"],
    correctAnswer: 2,
    explanation: "Pour un corps isotrope: alpha_V = 3 x alpha_l."
  },
  {
    id: 'q117',
    session: 2,
    question: "L'echelle Rankine a pour zero absolu:",
    options: ["0 R", "-273 R", "-459 R", "273 R"],
    correctAnswer: 0,
    explanation: "L'echelle Rankine a 0 R correspond au zero absolu."
  },
  {
    id: 'q118',
    session: 2,
    question: "Un thermocouple fonctionne par:",
    options: ["Dilatation", "Effet Seebeck", "Resistance", "Rayonnement"],
    correctAnswer: 1,
    explanation: "Un thermocouple utilise l'effet Seebeck (difference de potentiel due a une difference de temperature)."
  },
  {
    id: 'q119',
    session: 2,
    question: "Le point triple de l'eau correspond a la pression:",
    options: ["1 atm", "611 Pa", "1013 hPa", "0 Pa"],
    correctAnswer: 1,
    explanation: "Le point triple de l'eau: T = 273.16 K, P = 611 Pa."
  },
  {
    id: 'q120',
    session: 2,
    question: "A volume constant, si T augmente, la pression d'un gaz:",
    options: ["Diminue", "Augmente", "Reste constante", "Devient nulle"],
    correctAnswer: 1,
    explanation: "Loi de Charles: P/T = constante, donc si T augmente, P augmente."
  },
  {
    id: 'q121',
    session: 2,
    question: "A pression constante, si T augmente, le volume d'un gaz:",
    options: ["Diminue", "Augmente", "Reste constant", "Devient nul"],
    correctAnswer: 1,
    explanation: "Loi de Gay-Lussac: V/T = constante, donc si T augmente, V augmente."
  },
  {
    id: 'q122',
    session: 2,
    question: "A temperature constante, si P augmente, le volume d'un gaz:",
    options: ["Augmente", "Diminue", "Reste constant", "Devient infini"],
    correctAnswer: 1,
    explanation: "Loi de Mariotte: PV = constante, donc si P augmente, V diminue."
  },
  {
    id: 'q123',
    session: 2,
    question: "L'unite de temperature dans le SI est:",
    options: ["Celsius", "Kelvin", "Fahrenheit", "Rankine"],
    correctAnswer: 1,
    explanation: "Le Kelvin (K) est l'unite SI de temperature."
  },

  // ==================== SESSION 3 - ADDITIONAL 20 QUESTIONS ====================
  {
    id: 'q124',
    session: 3,
    question: "La conduction thermique se fait par:",
    options: ["Mouvement de fluide", "Contact materiel direct", "Ondes electromagnetiques", "Vide"],
    correctAnswer: 1,
    explanation: "La conduction est le transfert par contact materiel direct."
  },
  {
    id: 'q125',
    session: 3,
    question: "Le rayonnement thermique peut se faire:",
    options: ["Seulement dans les solides", "Seulement dans les gaz", "Dans le vide", "Seulement dans les liquides"],
    correctAnswer: 2,
    explanation: "Le rayonnement thermique peut traverser le vide (ondes EM)."
  },
  {
    id: 'q126',
    session: 3,
    question: "La formule Q = lambda x S x (TA-TB)/e correspond a:",
    options: ["La convection", "La conduction", "Le rayonnement", "La calorimetrie"],
    correctAnswer: 1,
    explanation: "Cette formule decrit la conduction thermique (loi de Fourier)."
  },
  {
    id: 'q127',
    session: 3,
    question: "La chaleur massique c represente:",
    options: ["La chaleur totale", "La chaleur par unite de masse", "La chaleur par unite de volume", "La temperature"],
    correctAnswer: 1,
    explanation: "La chaleur massique c est la quantite de chaleur par unite de masse et par degree."
  },
  {
    id: 'q128',
    session: 3,
    question: "Pour l'eau, c vaut environ:",
    options: ["1 J/kg.K", "4186 J/kg.K", "1000 J/kg.K", "4.186 J/kg.K"],
    correctAnswer: 1,
    explanation: "La chaleur massique de l'eau est environ 4186 J/kg.K."
  },
  {
    id: 'q129',
    session: 3,
    question: "La chaleur latente de vaporisation de l'eau est:",
    options: ["334 kJ/kg", "2260 kJ/kg", "4.186 kJ/kg", "100 kJ/kg"],
    correctAnswer: 1,
    explanation: "L_vaporisation = 2260 kJ/kg a 100 C."
  },
  {
    id: 'q130',
    session: 3,
    question: "Pendant un changement d'etat, la temperature:",
    options: ["Augmente", "Diminue", "Reste constante", "Devient nulle"],
    correctAnswer: 2,
    explanation: "Pendant un changement d'etat, la temperature reste constante."
  },
  {
    id: 'q131',
    session: 3,
    question: "Le travail des forces de pression est:",
    options: ["Toujours positif", "Toujours negatif", "De signe variable selon la transformation", "Toujours nul"],
    correctAnswer: 2,
    explanation: "Le signe de W depend du sens de la transformation (compression ou detente)."
  },
  {
    id: 'q132',
    session: 3,
    question: "Dans une detente (V2 > V1), le travail est:",
    options: ["Positif", "Negatif", "Nul", "Infini"],
    correctAnswer: 1,
    explanation: "Dans une detente, le systeme fournit du travail: W < 0."
  },
  {
    id: 'q133',
    session: 3,
    question: "Dans une compression (V2 < V1), le travail est:",
    options: ["Positif", "Negatif", "Nul", "Infini"],
    correctAnswer: 0,
    explanation: "Dans une compression, le systeme recoit du travail: W > 0."
  },
  {
    id: 'q134',
    session: 3,
    question: "Le travail est une grandeur:",
    options: ["Extensive", "Intensive", "De chemin", "D'etat"],
    correctAnswer: 2,
    explanation: "Le travail est une grandeur de chemin (depend du chemin suivi)."
  },
  {
    id: 'q135',
    session: 3,
    question: "La relation CP/C_V est appelee:",
    options: ["Coefficient de Mayer", "Coefficient gamma", "Coefficient alpha", "Coefficient beta"],
    correctAnswer: 1,
    explanation: "gamma = C_P/C_V est le coefficient adiabatique."
  },
  {
    id: 'q136',
    session: 3,
    question: "Pour un gaz monoatomique, C_P = ?",
    options: ["(3/2)R", "(5/2)R", "(7/2)R", "R"],
    correctAnswer: 1,
    explanation: "Pour un gaz monoatomique: C_P = (5/2)R."
  },
  {
    id: 'q137',
    session: 3,
    question: "Pour un gaz diatomique, C_P = ?",
    options: ["(3/2)R", "(5/2)R", "(7/2)R", "R"],
    correctAnswer: 2,
    explanation: "Pour un gaz diatomique: C_P = (7/2)R."
  },
  {
    id: 'q138',
    session: 3,
    question: "La calorimetrie mesure:",
    options: ["La temperature", "Les echanges de chaleur", "La pression", "Le volume"],
    correctAnswer: 1,
    explanation: "La calorimetrie est la mesure des echanges de chaleur."
  },
  {
    id: 'q139',
    session: 3,
    question: "Un calorimetre est considere comme:",
    options: ["Un systeme ouvert", "Un systeme isole", "Un systeme ferme non isole", "Une source de chaleur"],
    correctAnswer: 1,
    explanation: "Un calorimetre est approximativement un systeme isole (Q = 0)."
  },
  {
    id: 'q140',
    session: 3,
    question: "Dans un calorimetre, la somme des chaleurs echangees est:",
    options: ["Positive", "Negative", "Nulle", "Infinie"],
    correctAnswer: 2,
    explanation: "Dans un systeme isole: Somme(Qi) = 0."
  },
  {
    id: 'q141',
    session: 3,
    question: "Le travail isotherme reversible pour un gaz parfait est:",
    options: ["W = -P(V2-V1)", "W = nRT ln(V2/V1)", "W = 0", "W = nC_V(T2-T1)"],
    correctAnswer: 1,
    explanation: "Travail isotherme reversible: W = nRT ln(V2/V1)."
  },
  {
    id: 'q142',
    session: 3,
    question: "La convection naturelle est due a:",
    options: ["Un ventilateur", "La difference de densite", "Une pompe", "Le rayonnement"],
    correctAnswer: 1,
    explanation: "La convection naturelle est due aux differences de densite (fluide chaud plus leger)."
  },
  {
    id: 'q143',
    session: 3,
    question: "Le coefficient h dans Q = hS(T-Tfluide) est:",
    options: ["La conductivite thermique", "Le coefficient de convection", "La chaleur massique", "L'emissivite"],
    correctAnswer: 1,
    explanation: "h est le coefficient d'echange convectif (W/m2.K)."
  },

  // ==================== SESSION 4 - ADDITIONAL 20 QUESTIONS ====================
  {
    id: 'q144',
    session: 4,
    question: "Le principe d'equivalence affirme que pour un cycle:",
    options: ["W = Q", "W + Q = 0", "W = 0", "Q = 0"],
    correctAnswer: 1,
    explanation: "Pour un cycle: W + Q = 0 (principe d'equivalence)."
  },
  {
    id: 'q145',
    session: 4,
    question: "1 calorie equivaut a environ:",
    options: ["1 J", "4.18 J", "1000 J", "0.001 J"],
    correctAnswer: 1,
    explanation: "1 cal = 4.186 J (environ 4.18 J)."
  },
  {
    id: 'q146',
    session: 4,
    question: "L'energie interne U represente:",
    options: ["L'energie cinetique macroscopique", "L'energie potentielle macroscopique", "L'energie microscopique totale", "L'enerlie mecanique"],
    correctAnswer: 2,
    explanation: "U est l'enerlie microscopique (agitation thermique, liaisons, etc.)."
  },
  {
    id: 'q147',
    session: 4,
    question: "Pour un systeme isole, l'enerlie interne:",
    options: ["Augmente", "Diminue", "Reste constante", "Devient nulle"],
    correctAnswer: 2,
    explanation: "Systeme isole: pas d'echange, donc U = constante."
  },
  {
    id: 'q148',
    session: 4,
    question: "La detente de Joule est une transformation:",
    options: ["Isotherme", "Isobare", "Isoenergetique", "Isochore"],
    correctAnswer: 2,
    explanation: "Detente de Joule: Delta U = 0, donc isoenergetique."
  },
  {
    id: 'q149',
    session: 4,
    question: "Dans la detente de Joule, le gaz se detend:",
    options: ["Contre une pression exterieure", "Dans le vide", "Dans un cylindre", "Dans un piston"],
    correctAnswer: 1,
    explanation: "Dans la detente de Joule, le gaz se detend librement dans le vide."
  },
  {
    id: 'q150',
    session: 4,
    question: "L'enthalpie H est definie par H = U + PV, donc H est:",
    options: ["Une fonction de chemin", "Une fonction d'etat", "Une grandeur intensive", "N'est pas une fonction"],
    correctAnswer: 1,
    explanation: "H = U + PV est une fonction d'etat (combinaison de fonctions d'etat)."
  },
  {
    id: 'q151',
    session: 4,
    question: "Pour un gaz parfait, H depend de:",
    options: ["P uniquement", "V uniquement", "T uniquement", "P et V"],
    correctAnswer: 2,
    explanation: "Pour un gaz parfait: H = U + nRT = H(T), donc H ne depend que de T."
  },
  {
    id: 'q152',
    session: 4,
    question: "Dans une transformation isochore, Q = ?",
    options: ["Delta H", "Delta U", "0", "-W"],
    correctAnswer: 1,
    explanation: "Isochore: W = 0, donc Q = Delta U."
  },
  {
    id: 'q153',
    session: 4,
    question: "Dans une transformation isobare, Q = ?",
    options: ["Delta H", "Delta U", "0", "-W"],
    correctAnswer: 0,
    explanation: "Isobare: Q = Delta H."
  },
  {
    id: 'q154',
    session: 4,
    question: "Dans une transformation isotherme de gaz parfait, Delta U = ?",
    options: ["nC_V(T2-T1)", "0", "nC_P(T2-T1)", "-W"],
    correctAnswer: 1,
    explanation: "Pour un GP isotherme: T = cste, U = U(T), donc Delta U = 0."
  },
  {
    id: 'q155',
    session: 4,
    question: "La relation TV^(gamma-1) = Cste est valable pour:",
    options: ["Une isotherme", "Une isobare", "Une adiabatique reversible", "Une isochore"],
    correctAnswer: 2,
    explanation: "Pour une adiabatique reversible: TV^(gamma-1) = Cste."
  },
  {
    id: 'q156',
    session: 4,
    question: "Pour une transformation polytropique avec k = 0:",
    options: ["Isotherme", "Isobare", "Isochore", "Adiabatique"],
    correctAnswer: 1,
    explanation: "Pour k = 0: PV^0 = P = Cste, donc isobare."
  },
  {
    id: 'q157',
    session: 4,
    question: "Pour une transformation polytropique avec k = infini:",
    options: ["Isotherme", "Isobare", "Isochore", "Adiabatique"],
    correctAnswer: 2,
    explanation: "Pour k = infini: V = Cste, donc isochore."
  },
  {
    id: 'q158',
    session: 4,
    question: "Le travail d'une adiabatique reversible peut s'ecrire:",
    options: ["nRT ln(V2/V1)", "(P2V2 - P1V1)/(gamma-1)", "-P(V2-V1)", "0"],
    correctAnswer: 1,
    explanation: "W_adiabatique = (P2V2 - P1V1)/(gamma-1)."
  },
  {
    id: 'q159',
    session: 4,
    question: "Pour un gaz monoatomique, C_V/C_P = ?",
    options: ["5/3", "3/5", "7/5", "5/7"],
    correctAnswer: 1,
    explanation: "Pour un gaz monoatomique: gamma = 5/3, donc C_V/C_P = 1/gamma = 3/5."
  },
  {
    id: 'q160',
    session: 4,
    question: "Dans un cycle, la variation d'enerlie interne est:",
    options: ["Positive", "Negative", "Nulle", "Variable"],
    correctAnswer: 2,
    explanation: "Cycle: etat final = etat initial, donc Delta U = 0."
  },
  {
    id: 'q161',
    session: 4,
    question: "Pour un gaz diatomique, C_V/C_P = ?",
    options: ["5/3", "3/5", "5/7", "7/5"],
    correctAnswer: 2,
    explanation: "Pour un gaz diatomique: gamma = 7/5, donc C_V/C_P = 1/gamma = 5/7."
  },
  {
    id: 'q162',
    session: 4,
    question: "L'enerlie totale d'un systeme est:",
    options: ["U uniquement", "Ec + Ep + U", "Ec + U", "Ep + U"],
    correctAnswer: 1,
    explanation: "E_totale = E_cin + E_pot + U (enerlie interne)."
  },
  {
    id: 'q163',
    session: 4,
    question: "Si Delta U = 0, alors:",
    options: ["W = Q", "W = -Q", "W = 0", "Q = 0"],
    correctAnswer: 1,
    explanation: "Delta U = W + Q = 0 implique W = -Q."
  },

  // ==================== SESSION 5 - ADDITIONAL 20 QUESTIONS ====================
  {
    id: 'q164',
    session: 5,
    question: "Le deuxieme principe explique:",
    options: ["La conservation de l'enerlie", "Le sens des transformations", "La definition de U", "La relation W + Q"],
    correctAnswer: 1,
    explanation: "Le 2eme principe explique pourquoi les transformations ont un sens privilegie."
  },
  {
    id: 'q165',
    session: 5,
    question: "Un exemple d'irreversibilite est:",
    options: ["Un cycle de Carnot", "Le melange de deux gaz", "Une compression reversible", "Une detente isotherme quasi-statique"],
    correctAnswer: 1,
    explanation: "Le melange spontane de deux gaz est irreversible."
  },
  {
    id: 'q166',
    session: 5,
    question: "Selon Clausius, la chaleur passe spontanement:",
    options: ["Du froid au chaud", "Du chaud au froid", "Dans les deux sens", "Ne passe pas"],
    correctAnswer: 1,
    explanation: "Clausius: la chaleur passe spontanement du chaud vers le froid."
  },
  {
    id: 'q167',
    session: 5,
    question: "Selon Kelvin, il est impossible de:",
    options: ["Convertir W en Q", "Convertir Q en W integralement", "Créer de l'enerlie", "Detruire de l'enerlie"],
    correctAnswer: 1,
    explanation: "Kelvin: impossible de convertir integralement de la chaleur en travail."
  },
  {
    id: 'q168',
    session: 5,
    question: "Une machine parfaite violerait:",
    options: ["Le 1er principe", "Le 2eme principe", "Les deux", "Aucun"],
    correctAnswer: 1,
    explanation: "Une machine parfaite (rendement 100%) violerait le 2eme principe."
  },
  {
    id: 'q169',
    session: 5,
    question: "Pour un cycle reversible, Somme(Q/T) = ?",
    options: ["> 0", "= 0", "< 0", "Indefini"],
    correctAnswer: 1,
    explanation: "Cycle reversible: Somme(Q/T) = 0."
  },
  {
    id: 'q170',
    session: 5,
    question: "Pour un cycle irreversible, Somme(Q/T) ?",
    options: ["> 0", "= 0", "< 0", ">= 0"],
    correctAnswer: 2,
    explanation: "Cycle irreversible: Somme(Q/T) < 0."
  },
  {
    id: 'q171',
    session: 5,
    question: "L'entropie S est une fonction:",
    options: ["De chemin", "D'etat", "Intensive uniquement", "Non definie"],
    correctAnswer: 1,
    explanation: "L'entropie est une fonction d'etat."
  },
  {
    id: 'q172',
    session: 5,
    question: "L'unite de l'entropie est:",
    options: ["J", "J/K", "K", "J.K"],
    correctAnswer: 1,
    explanation: "L'entropie s'exprime en J/K."
  },
  {
    id: 'q173',
    session: 5,
    question: "Pour une transformation reversible, dS = ?",
    options: ["dQ", "dQ/T", "dQ x T", "T/dQ"],
    correctAnswer: 1,
    explanation: "Pour une transformation reversible: dS = dQ_rev/T."
  },
  {
    id: 'q174',
    session: 5,
    question: "L'entropie echangee est:",
    options: ["Toujours positive", "Toujours negative", "De signe quelconque", "Toujours nulle"],
    correctAnswer: 2,
    explanation: "L'entropie echangee peut etre positive ou negative selon le sens de l'echange."
  },
  {
    id: 'q175',
    session: 5,
    question: "L'entropie creee est toujours:",
    options: ["Positive", "Negative", "Nulle", "De signe variable"],
    correctAnswer: 0,
    explanation: "L'entropie creee est toujours positive ou nulle (Delta S_c >= 0)."
  },
  {
    id: 'q176',
    session: 5,
    question: "Pour un systeme isole, Delta S est:",
    options: ["< 0", "= 0", ">= 0", "<= 0"],
    correctAnswer: 2,
    explanation: "Pour un systeme isole: Delta S >= 0 (l'entropie augmente ou reste constante)."
  },
  {
    id: 'q177',
    session: 5,
    question: "Le bilan entropique est:",
    options: ["Delta S = Delta S_e - Delta S_c", "Delta S = Delta S_e + Delta S_c", "Delta S = Delta S_e x Delta S_c", "Delta S = Delta S_c"],
    correctAnswer: 1,
    explanation: "Bilan entropique: Delta S = Delta S_e + Delta S_c."
  },
  {
    id: 'q178',
    session: 5,
    question: "L'entropie est une grandeur:",
    options: ["Intensive", "Extensive", "Ni l'une ni l'autre", "Les deux"],
    correctAnswer: 1,
    explanation: "L'entropie est extensive (additive)."
  },
  {
    id: 'q179',
    session: 5,
    question: "La cause principale de creation d'entropie est:",
    options: ["La reversibilite", "L'irreversibilite thermique", "L'isolation", "La conservation"],
    correctAnswer: 1,
    explanation: "La mise en contact de corps a temperatures differenties cree de l'entropie."
  },
  {
    id: 'q180',
    session: 5,
    question: "L'inegalite de Clausius s'applique a:",
    options: ["Les systemes isoles uniquement", "Les cycles uniquement", "Toutes transformations", "Les transformations reversibles uniquement"],
    correctAnswer: 1,
    explanation: "L'inegalite de Clausius: Somme(Q/T) <= 0 pour un cycle."
  },
  {
    id: 'q181',
    session: 5,
    question: "Si Delta S_c = 0, la transformation est:",
    options: ["Irreversible", "Reversible", "Impossible", "Spontanee"],
    correctAnswer: 1,
    explanation: "Delta S_c = 0 caracterise une transformation reversible."
  },
  {
    id: 'q182',
    session: 5,
    question: "Si Delta S_c > 0, la transformation est:",
    options: ["Irreversible", "Reversible", "Impossible", "A l'equilibre"],
    correctAnswer: 0,
    explanation: "Delta S_c > 0 caracterise une transformation irreversible."
  },
  {
    id: 'q183',
    session: 5,
    question: "Pour un systeme fermé, Delta S peut etre:",
    options: ["Uniquement positive", "Uniquement negative", "Positive ou negative", "Toujours nulle"],
    correctAnswer: 2,
    explanation: "Pour un systeme ferme, Delta S peut etre positive ou negative selon les echanges."
  },

  // ==================== SESSION 6 - ADDITIONAL 20 QUESTIONS ====================
  {
    id: 'q184',
    session: 6,
    question: "Une machine thermique convertit:",
    options: ["Travail en chaleur uniquement", "Chaleur en travail et inversement", "Matiere en energie", "Rien"],
    correctAnswer: 1,
    explanation: "Une machine thermique peut convertir chaleur en travail et inversement."
  },
  {
    id: 'q185',
    session: 6,
    question: "Une source de chaleur a une:",
    options: ["Faible capacite calorifique", "Forte capacite calorifique", "Temperature variable", "Pression variable"],
    correctAnswer: 1,
    explanation: "Une source de chaleur a une tres forte capacite calorifique (T constante)."
  },
  {
    id: 'q186',
    session: 6,
    question: "Dans un cycle ditherme, le systeme echange avec:",
    options: ["Une source", "Deux sources", "Trois sources", "Aucune source"],
    correctAnswer: 1,
    explanation: "Un cycle ditherme echange avec deux sources de temperatures differentes."
  },
  {
    id: 'q187',
    session: 6,
    question: "Pour un cycle: W + Q1 + Q2 = ?",
    options: ["W", "Q1", "0", "Q2"],
    correctAnswer: 2,
    explanation: "Pour un cycle: Delta U = 0, donc W + Q1 + Q2 = 0."
  },
  {
    id: 'q188',
    session: 6,
    question: "Dans un moteur, W est:",
    options: ["Positif", "Negatif", "Nul", "Infini"],
    correctAnswer: 1,
    explanation: "Moteur: W < 0 (le systeme fournit du travail)."
  },
  {
    id: 'q189',
    session: 6,
    question: "Dans un moteur, Q1 est:",
    options: ["Positif", "Negatif", "Nul", "Variable"],
    correctAnswer: 0,
    explanation: "Moteur: Q1 > 0 (recoit chaleur de la source chaude)."
  },
  {
    id: 'q190',
    session: 6,
    question: "Dans un moteur, Q2 est:",
    options: ["Positif", "Negatif", "Nul", "Variable"],
    correctAnswer: 1,
    explanation: "Moteur: Q2 < 0 (rejette chaleur a la source froide)."
  },
  {
    id: 'q191',
    session: 6,
    question: "Le rendement d'un moteur est toujours:",
    options: ["> 1", "= 1", "< 1", "= 0"],
    correctAnswer: 2,
    explanation: "eta = |W|/Q1 < 1 car une partie de Q1 est rejetee (Q2 < 0)."
  },
  {
    id: 'q192',
    session: 6,
    question: "Le rendement de Carnot est le rendement:",
    options: ["Minimum", "Maximum", "Moyen", "Nul"],
    correctAnswer: 1,
    explanation: "Le rendement de Carnot est le rendement maximal possible."
  },
  {
    id: 'q193',
    session: 6,
    question: "eta_Carnot = 1 - T2/T1. Pour T1 = 400K et T2 = 300K, eta = ?",
    options: ["0.25", "0.33", "0.75", "0.50"],
    correctAnswer: 0,
    explanation: "eta = 1 - 300/400 = 1 - 0.75 = 0.25 (25%)."
  },
  {
    id: 'q194',
    session: 6,
    question: "Une machine frigorifique extrait de la chaleur:",
    options: ["De la source chaude", "De la source froide", "Des deux sources", "D'aucune source"],
    correctAnswer: 1,
    explanation: "Une machine frigorifique extrait Q2 > 0 de la source froide."
  },
  {
    id: 'q195',
    session: 6,
    question: "L'efficacite d'une machine frigorifique est:",
    options: ["Toujours < 1", "Toujours > 1", "Peut etre > ou < 1", "= 1"],
    correctAnswer: 2,
    explanation: "L'efficacite frigorifique peut etre > 1 ou < 1 selon les conditions."
  },
  {
    id: 'q196',
    session: 6,
    question: "Une pompe a chaleur chauffe:",
    options: ["La source froide", "La source chaude", "Les deux sources", "Aucune source"],
    correctAnswer: 1,
    explanation: "Une PAC transfere de la chaleur vers la source chaude (interieur)."
  },
  {
    id: 'q197',
    session: 6,
    question: "La performance d'une PAC est toujours:",
    options: ["< 1", "= 1", "> 1", "= 0"],
    correctAnswer: 2,
    explanation: "La performance d'une PAC est toujours > 1 (Q1 > W)."
  },
  {
    id: 'q198',
    session: 6,
    question: "Le cycle de Carnot est compose de:",
    options: ["2 isothermes", "2 adiabatiques", "2 isothermes + 2 adiabatiques", "4 isothermes"],
    correctAnswer: 2,
    explanation: "Le cycle de Carnot: 2 isothermes + 2 adiabatiques."
  },
  {
    id: 'q199',
    session: 6,
    question: "Pour un cycle de Carnot, Q1/T1 + Q2/T2 = ?",
    options: ["> 0", "= 0", "< 0", "Indefini"],
    correctAnswer: 1,
    explanation: "Carnot est reversible, donc Q1/T1 + Q2/T2 = 0."
  },
  {
    id: 'q200',
    session: 6,
    question: "Un cycle monotherme ne peut pas:",
    options: ["Echanger de la chaleur", "Produire du travail", "Recevoir du travail", "Etre reversible"],
    correctAnswer: 1,
    explanation: "Un cycle monotherme ne peut pas produire du travail (interdit par Kelvin)."
  },
  {
    id: 'q201',
    session: 6,
    question: "Si eta = 1, cela implique:",
    options: ["T1 = T2", "T2 = 0 K", "Q2 = Q1", "W = 0"],
    correctAnswer: 1,
    explanation: "eta = 1 - T2/T1 = 1 implique T2 = 0 K (impossible)."
  },
  {
    id: 'q202',
    session: 6,
    question: "L'efficacite d'un frigo de Carnot avec T1 = 300K et T2 = 270K est:",
    options: ["9", "10", "0.1", "1"],
    correctAnswer: 0,
    explanation: "e = T2/(T1-T2) = 270/(300-270) = 270/30 = 9."
  },
  {
    id: 'q203',
    session: 6,
    question: "La performance d'une PAC de Carnot avec T1 = 300K et T2 = 270K est:",
    options: ["9", "10", "0.1", "1"],
    correctAnswer: 1,
    explanation: "p = T1/(T1-T2) = 300/(300-270) = 300/30 = 10."
  }
];

// Mes Formules - Toutes les formules importantes des 6 seances
export const formulasData = {
  general: [
    { name: "Equation d'etat du gaz parfait", formula: "PV = nRT", variables: "P (Pa), V (m3), n (mol), R = 8.314 J.K-1.mol-1, T (K)", session: 1 },
    { name: "Differentielle totale", formula: "df = (df/dx)dx + (df/dy)dy", variables: "Pour f(x, y) continue et derivable", session: 1 },
    { name: "Condition de Schwartz (DTE)", formula: "d2f/dxdy = d2f/dydx", variables: "Egalite des derivees secondes croisees", session: 1 },
  ],
  temperature: [
    { name: "Conversion Kelvin-Celsius", formula: "T(K) = T(C) + 273.15", variables: "", session: 2 },
    { name: "Conversion Celsius-Fahrenheit", formula: "T(F) = 1.8 x T(C) + 32", variables: "", session: 2 },
    { name: "Dilatation lineaire", formula: "L = L0(1 + alpha_l x Delta T)", variables: "alpha_l: coefficient de dilatation lineaire", session: 2 },
    { name: "Dilatation volumique", formula: "V = V0(1 + alpha_V x Delta T)", variables: "alpha_V = 3 x alpha_l", session: 2 },
  ],
  travail: [
    { name: "Travail elementaire", formula: "dW = -P_ext x dV", variables: "Travail des forces de pression", session: 3 },
    { name: "Travail isobare", formula: "W = -P(V2 - V1)", variables: "P = constante", session: 3 },
    { name: "Travail isochore", formula: "W = 0", variables: "V = constante", session: 3 },
    { name: "Travail isotherme reversible", formula: "W = nRT x ln(V2/V1)", variables: "Gaz parfait, T = constante", session: 3 },
  ],
  chaleur: [
    { name: "Chaleur a volume constant", formula: "Q_V = m x c_V x (T2 - T1)", variables: "c_V: chaleur massique a V constant", session: 3 },
    { name: "Chaleur a pression constante", formula: "Q_P = m x c_P x (T2 - T1)", variables: "c_P: chaleur massique a P constant", session: 3 },
    { name: "Relation de Mayer", formula: "C_P - C_V = nR", variables: "Gaz parfaits", session: 3 },
    { name: "Chaleur latente", formula: "Q = m x L", variables: "L: chaleur latente massique (J/kg)", session: 3 },
    { name: "Equation calorimetrique", formula: "Somme(Qi) = 0", variables: "Systeme isole", session: 3 },
  ],
  gazParfait: [
    { name: "Loi de Mariotte", formula: "P1V1 = P2V2", variables: "T = constante", session: 2 },
    { name: "Loi de Charles", formula: "P1/T1 = P2/T2", variables: "V = constante", session: 2 },
    { name: "Loi de Gay-Lussac", formula: "V1/T1 = V2/T2", variables: "P = constante", session: 2 },
    { name: "Energie cinetique moyenne", formula: "(1/2)m<v2> = (3/2)kT", variables: "k = 1.38 x 10^-23 J/K", session: 2 },
    { name: "Theoreme d'equipartition", formula: "E/ddl = (1/2)kT", variables: "Energie par degre de liberte", session: 2 },
  ],
  premierPrincipe: [
    { name: "Premier principe", formula: "Delta U = W + Q", variables: "Variation d'energie interne", session: 4 },
    { name: "Forme differentielle", formula: "dU = dQ + dW", variables: "Transformation elementaire", session: 4 },
    { name: "Systeme isole", formula: "Delta U = 0", variables: "Pas d'echange d'energie", session: 4 },
    { name: "Energie interne gaz monoatomique", formula: "U = (3/2)nRT", variables: "C_V = (3/2)R", session: 4 },
    { name: "Energie interne gaz diatomique", formula: "U = (5/2)nRT", variables: "C_V = (5/2)R", session: 4 },
    { name: "Enthalpie", formula: "H = U + PV", variables: "Fonction d'etat", session: 4 },
    { name: "Variation d'enthalpie (GP)", formula: "dH = nC_PdT", variables: "Pour un gaz parfait", session: 4 },
    { name: "Adiabatique reversible", formula: "PV^gamma = Cste", variables: "gamma = C_P/C_V", session: 4 },
    { name: "Adiabatique (T-V)", formula: "TV^(gamma-1) = Cste", variables: "Relation temperature-volume", session: 4 },
    { name: "Adiabatique (T-P)", formula: "T^gamma x P^(1-gamma) = Cste", variables: "Relation temperature-pression", session: 4 },
    { name: "Travail adiabatique", formula: "W = nC_V(T2 - T1)", variables: "Q = 0", session: 4 },
    { name: "Travail adiabatique (P,V)", formula: "W = (P2V2 - P1V1)/(gamma - 1)", variables: "Forme avec pression et volume", session: 4 },
    { name: "Polytropique", formula: "PV^k = Cste", variables: "k: indice polytropique", session: 4 },
    { name: "Polytropique - k isotherme", formula: "k = 1, C_k = infini", variables: "Transformation isotherme", session: 4 },
    { name: "Polytropique - k isobare", formula: "k = 0, C_k = C_P", variables: "Transformation isobare", session: 4 },
    { name: "Polytropique - k isochore", formula: "k = infini, C_k = C_V", variables: "Transformation isochore", session: 4 },
    { name: "Polytropique - k adiabatique", formula: "k = gamma, C_k = 0", variables: "Transformation adiabatique", session: 4 },
    { name: "Coeff gamma monoatomique", formula: "gamma = 5/3 = 1.67", variables: "Gaz monoatomique (Ar, Ne)", session: 4 },
    { name: "Coeff gamma diatomique", formula: "gamma = 7/5 = 1.4", variables: "Gaz diatomique (N2, O2, H2)", session: 4 },
  ],
  secondPrincipe: [
    { name: "Relation de Clausius (rev)", formula: "Somme(Q_i/T_i) = 0", variables: "Cycle reversible", session: 5 },
    { name: "Relation de Clausius (irrev)", formula: "Somme(Q_i/T_i) < 0", variables: "Cycle irreversible", session: 5 },
    { name: "Entropie", formula: "dS = dQ_rev/T", variables: "Fonction d'etat, unite: J/K", session: 5 },
    { name: "Bilan entropique", formula: "Delta S = Delta S_e + Delta S_c", variables: "Variation = echangee + creee", session: 5 },
    { name: "Entropie echangee", formula: "Delta S_e = Q/T_source", variables: "Echange avec l'exterieur", session: 5 },
    { name: "Entropie creee", formula: "Delta S_c >= 0", variables: "Toujours positive ou nulle", session: 5 },
    { name: "Systeme isole", formula: "Delta S >= 0", variables: "L'entropie augmente ou reste constante", session: 5 },
  ],
  machines: [
    { name: "Premier principe (cycle)", formula: "W + Q1 + Q2 = 0", variables: "Cycle ditherme", session: 6 },
    { name: "Rendement moteur", formula: "eta = 1 + Q2/Q1 = -W/Q1", variables: "Toujours < 1", session: 6 },
    { name: "Rendement de Carnot", formula: "eta_Carnot = 1 - T2/T1", variables: "Rendement maximal", session: 6 },
    { name: "Efficacite machine frigorifique", formula: "e = Q2/W", variables: "Chaleur extraite / travail", session: 6 },
    { name: "Performance pompe a chaleur", formula: "p = -Q1/W = Q1/(Q1+Q2)", variables: "Toujours > 1", session: 6 },
    { name: "Efficacite Carnot (frigo)", formula: "e_Carnot = T2/(T1 - T2)", variables: "Machine frigorifique reversible", session: 6 },
    { name: "Performance Carnot (PAC)", formula: "p_Carnot = T1/(T1 - T2)", variables: "Pompe a chaleur reversible", session: 6 },
    { name: "Relation Carnot reversible", formula: "Q1/T1 + Q2/T2 = 0", variables: "Cycle reversible", session: 6 },
  ],
  chaleursLatentes: [
    { name: "Fusion de la glace", formula: "L_fusion = 334 kJ/kg", variables: "A 0 C", session: 3 },
    { name: "Vaporisation de l'eau", formula: "L_vap = 2260 kJ/kg", variables: "A 100 C", session: 3 },
    { name: "Sublimation de la glace", formula: "L_sub = 2594 kJ/kg", variables: "A 0 C", session: 3 },
  ],
  constantes: [
    { name: "Constante des gaz parfaits", formula: "R = 8.314 J.K-1.mol-1", variables: "", session: 2 },
    { name: "Constante de Boltzmann", formula: "k = 1.38 x 10^-23 J/K", variables: "", session: 2 },
    { name: "Point triple de l'eau", formula: "T = 273.16 K, P = 611 Pa", variables: "", session: 2 },
    { name: "Volume molaire STP", formula: "Vm = 22.414 L/mol", variables: "T = 273.15 K, P = 1 atm", session: 2 },
    { name: "Zero absolu", formula: "T = 0 K = -273.15 C", variables: "", session: 2 },
  ]
};
