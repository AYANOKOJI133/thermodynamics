// Complete thermodynamics course data from all 6 documents
// COMPREHENSIVE VERSION - All information included

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
            },
            {
              subtitle: "Exemple Pratique",
              content: "1 litre d'eau a 300K + 1 litre d'eau a 300K = 2 litres d'eau a 300K",
              explanation: "Le volume (extensif) s'additionne : 1L + 1L = 2L. La temperature (intensive) reste identique : 300K"
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
            },
            {
              subtitle: "Interpretation Physique",
              content: "Si df est une DTE, alors l'integrale de df entre A et B ne depend pas du chemin suivi."
            }
          ]
        },
        {
          title: "DTE vs Forme Differentielle",
          sections: [
            {
              subtitle: "Differentielle Totale Exacte (df)",
              properties: [
                "Integration ne depend PAS du chemin suivi",
                "f est une fonction d'etat",
                "d2f/dxdy = d2f/dydx"
              ],
              examples: ["dU (energie interne)", "dH (enthalpie)", "dS (entropie)"]
            },
            {
              subtitle: "Forme Differentielle (df)",
              properties: [
                "Integration DEPEND du chemin suivi",
                "f n'est PAS une fonction d'etat",
                "d2f/dxdy different de d2f/dydx"
              ],
              examples: ["dW (travail)", "dQ (chaleur)"],
              note: "Notation : df pour DTE, df pour forme differentielle"
            }
          ]
        },
        {
          title: "Etat d'Equilibre",
          sections: [
            {
              subtitle: "Definition",
              content: "Un systeme est en equilibre lorsque ses variables d'etat ne varient pas dans le temps ET sont uniformes dans tout le systeme."
            },
            {
              subtitle: "Types d'Equilibre",
              equilibres: [
                { name: "Equilibre Thermique", description: "Temperature constante et uniforme en tout point" },
                { name: "Equilibre Mecanique", description: "Pression constante et uniforme en tout point" }
              ]
            }
          ]
        },
        {
          title: "Systemes Thermo-elastiques (STEP)",
          sections: [
            {
              subtitle: "Definition",
              content: "Systemes homogenes (gaz ou liquides) :\n- Inertes chimiquement (pas de reaction)\n- Composition constante (systeme ferme)\n- Travail uniquement mecanique\n- Decrits par P, V, T"
            },
            {
              subtitle: "Coefficients Thermoelastiques",
              coefficients: [
                { 
                  symbol: "alpha", 
                  name: "Coefficient de dilatation isobare", 
                  formula: "alpha = (1/V)(dV/dT)P",
                  description: "A pression constante"
                },
                { 
                  symbol: "beta", 
                  name: "Coefficient d'augmentation de pression", 
                  formula: "beta = (1/P)(dP/dT)V",
                  description: "A volume constant"
                },
                { 
                  symbol: "chiT", 
                  name: "Coefficient de compressibilite isotherme", 
                  formula: "chiT = -(1/V)(dV/dP)T",
                  description: "A temperature constante"
                }
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
              content: "La temperature est une grandeur physique mesurable indirectement. Elle est liee a l'etat microscopique de la matiere, c'est-a-dire a l'agitation moleculaire. Elle represente l'energie moyenne d'une molecule.",
              keyPoints: [
                "Fonction de deux variables d'etat : theta = f(x, y)",
                "Un thermometre : systeme ou une variable est constante, l'autre depend de T",
                "theta = f(x) avec y = constante"
              ]
            }
          ]
        },
        {
          title: "Variables Thermometriques",
          sections: [
            {
              subtitle: "Grandeurs pouvant servir de variable thermometrique",
              table: {
                headers: ["Variable", "Type de Thermometre", "Exemple"],
                rows: [
                  ["Volume V", "Thermometre a liquide", "Mercure, alcool"],
                  ["Pression P", "Thermometre a gaz", "Gaz parfait"],
                  ["Resistance R", "Thermometre a resistance", "Platine, thermistance"],
                  ["Force electromotrice E", "Thermocouple", "Jonction de metaux differents"],
                  ["Flux thermique Phi", "Mesures optiques", "Pyrometre"],
                  ["Capacite electrique C", "Capteur capacitif", "Semiconducteur"]
                ]
              }
            }
          ]
        },
        {
          title: "Echelle Centesimale (Celsius)",
          sections: [
            {
              subtitle: "Relation Lineaire",
              content: "L'echelle centesimale suppose une relation lineaire entre la grandeur physique x et la temperature theta :",
              formula: "theta = ax + b"
            },
            {
              subtitle: "Points Fixes",
              table: {
                headers: ["Point", "Temperature", "Description"],
                rows: [
                  ["Fusion de la glace", "theta = 0 C", "Equilibre glace-eau a pression atmospherique"],
                  ["Ebullition de l'eau", "theta = 100 C", "Vapeur d'eau a pression atmospherique"]
                ]
              }
            },
            {
              subtitle: "Limitations",
              warning: "Le coefficient de dilatation alpha(theta) varie avec la temperature. L'echelle centesimale n'est donc pas universelle. Un thermometre ne mesure pas la temperature, il la repere."
            }
          ]
        },
        {
          title: "Temperature Absolue et Echelle Kelvin",
          sections: [
            {
              subtitle: "Coefficient de Dilatation des Gaz",
              content: "Pour les gaz a faible pression, le coefficient de dilatation est pratiquement constant :",
              formula: "alpha = 1/273.15 K-1"
            },
            {
              subtitle: "Zero Absolu",
              content: "En extrapolant les courbes experimentales du volume en fonction de la temperature jusqu'a V=0, toutes les courbes convergent vers une temperature correspondant a une agitation moleculaire nulle.",
              keyPoints: [
                "C'est la limite absolue du froid",
                "Un corps a cette temperature ne peut ceder de la chaleur a aucun autre",
                "T = 0 K correspond a theta = -273.15 C"
              ]
            }
          ]
        },
        {
          title: "Point Triple de l'Eau",
          sections: [
            {
              subtitle: "Definition",
              content: "Point ou coexistent les trois phases de l'eau (solide, liquide, gazeuse) en equilibre.",
              keyPoints: [
                "Temperature : Ttp = 273.16 K (soit 0.01 C)",
                "Pression : Ptp = 611 Pa"
              ]
            },
            {
              subtitle: "Fonction Thermometrique",
              content: "L'echelle Kelvin utilise un seul point fixe :",
              formula: "T = (273.16 / xtp) x X",
              explanation: "ou xtp est la valeur de la variable thermometrique au point triple"
            }
          ]
        },
        {
          title: "Les Echelles de Temperature",
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
                { formula: "T(F) = 1.8 x T(C) + 32", description: "Celsius vers Fahrenheit" },
                { formula: "T(R) = 1.8 x T(K)", description: "Kelvin vers Rankine" }
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
            },
            {
              subtitle: "Types de Cloisons",
              table: {
                headers: ["Type", "Echange", "Consequence"],
                rows: [
                  ["Cloison adiabatique", "Aucun echange de chaleur", "Systemes restent dans leurs etats initiaux"],
                  ["Cloison diatherme", "Echange de chaleur possible", "Systemes atteignent equilibre thermique commun"]
                ]
              }
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
                "Molecules tres eloignees les unes des autres, sans force d'interaction (independantes)",
                "Les forces de repulsion ne se manifestent que lors des chocs elastiques",
                "Conservation de l'energie cinetique totale : E1 + E2 = E1' + E2'"
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
          title: "Constante des Gaz Parfaits",
          sections: [
            {
              subtitle: "Conditions Normales (STP)",
              keyPoints: [
                "Temperature : T = 273.15 K (0 C)",
                "Pression : P = 1.013 x 10^5 Pa (1 atm)",
                "Volume molaire : Vm = 22.414 L/mol"
              ]
            },
            {
              subtitle: "Calcul de R",
              formula: "R = PV/nT = 8.314 J.K-1.mol-1"
            }
          ]
        },
        {
          title: "Lois Particulieres des Gaz Parfaits",
          sections: [
            {
              subtitle: "Lois Fondamentales",
              table: {
                headers: ["Loi", "Condition", "Formule", "Description"],
                rows: [
                  ["Mariotte", "T = cste", "P1V1 = P2V2", "A T constante, PV = cste"],
                  ["Charles", "V = cste", "P1/T1 = P2/T2", "A V constant, P/T = cste"],
                  ["Gay-Lussac", "P = cste", "V1/T1 = V2/T2", "A P constante, V/T = cste"]
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
            },
            {
              subtitle: "Distribution de Maxwell-Boltzmann",
              content: "Les molecules n'ont pas toutes la meme vitesse. Quand T augmente, les energies cinetiques sont plus elevees mais aussi plus dispersees."
            }
          ]
        },
        {
          title: "Dilatation Thermique",
          sections: [
            {
              subtitle: "Principe",
              content: "L'amplitude des oscillations atomiques augmente avec la temperature, provoquant une dilatation."
            },
            {
              subtitle: "Dilatation Lineaire",
              formula: "L = L0(1 + alpha_l x Delta T)",
              explanation: "alpha_l : coefficient de dilatation lineaire (K-1)"
            },
            {
              subtitle: "Dilatation Volumique",
              formula: "V = V0(1 + alpha_V x Delta T)",
              explanation: "alpha_V : coefficient de dilatation volumique (K-1)"
            },
            {
              subtitle: "Relation",
              formula: "alpha_V = 3 x alpha_l",
              explanation: "Pour un corps isotrope"
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
        "Travail dans les transformations",
        "Le travail n'est pas une fonction d'etat"
      ],
      content: [
        {
          title: "La Chaleur : Definition",
          sections: [
            {
              subtitle: "Definition",
              content: "Energie echangee entre deux corps de temperatures differentes mis en contact (le contact peut ne pas etre materiel). Cette energie est transferee de maniere a atteindre un equilibre thermique.",
              keyPoints: [
                "A l'echelle microscopique : energie cinetique echangee par agitation moleculaire",
                "Unites : Joule [J] ou calorie [cal]",
                "1 calorie = 4.186 Joules"
              ]
            },
            {
              subtitle: "Distinction Importante",
              warning: "La chaleur et la temperature sont deux grandeurs differentes ! Un echange de chaleur peut s'effectuer sans variation de temperature (changement d'etat)."
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
                  ["Rayonnement", "Transfert par ondes EM (sans contact)", "Q = epsilon x sigma x S x T^4"]
                ]
              }
            },
            {
              subtitle: "Parametres",
              keyPoints: [
                "lambda : conductivite thermique",
                "h : coefficient de convection",
                "epsilon : emissivite thermique",
                "sigma : constante de Boltzmann"
              ]
            }
          ]
        },
        {
          title: "Expression de la Quantite de Chaleur",
          sections: [
            {
              subtitle: "Formes selon les Variables",
              table: {
                headers: ["Variables", "Formule"],
                rows: [
                  ["(T, V)", "dQ = l x dV + CV x dT"],
                  ["(T, P)", "dQ = h x dP + CP x dT"],
                  ["(P, V)", "dQ = lambda x dP + mu x dV"]
                ]
              }
            },
            {
              subtitle: "Coefficients Calorimetriques",
              content: "Les 6 coefficients Cp, CV, l, h, mu et lambda sont appeles les coefficients calorimetriques de la substance etudiee.",
              warning: "Ces expressions ne sont valables que pour des transformations reversibles ou quasi-statiques !"
            }
          ]
        },
        {
          title: "Capacites Thermiques",
          sections: [
            {
              subtitle: "A Volume Constant (CV)",
              formula: "dQ_V = CV x dT",
              subformula: "Q_V = m x c_V x (T2-T1)",
              keyPoints: [
                "c_V : chaleur massique a volume constant [J/kg.K]",
                "c_v = CV/n : chaleur molaire [J/mol.K]"
              ]
            },
            {
              subtitle: "A Pression Constante (CP)",
              formula: "dQ_P = CP x dT",
              subformula: "Q_P = m x c_P x (T2-T1)",
              keyPoints: [
                "c_P : chaleur massique a pression constante [J/kg.K]",
                "c_p = CP/n : chaleur molaire [J/mol.K]"
              ]
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
              content: "Quantite de chaleur necessaire pour faire passer l'unite de masse d'un corps pur d'un etat physique a un autre, a temperature et pression constantes."
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
                  ["Fusion (glace -> eau)", "334 kJ/kg", "0 C"],
                  ["Vaporisation (eau -> vapeur)", "2260 kJ/kg", "100 C"],
                  ["Sublimation (glace -> vapeur)", "2594 kJ/kg", "0 C"]
                ]
              }
            }
          ]
        },
        {
          title: "Calorimetrie",
          sections: [
            {
              subtitle: "Principe",
              content: "La calorimetrie permet de mesurer les echanges de chaleur entre differents corps dans un systeme isole thermiquement."
            },
            {
              subtitle: "Equation Calorimetrique",
              formula: "Somme(Qi) = Q_calorimetre + Q_corps + Q_eau = 0",
              explanation: "La somme des chaleurs echangees dans un systeme isole est nulle"
            },
            {
              subtitle: "Valeur en Eau",
              formula: "mu = Somme(mi x ci)",
              explanation: "Masse d'eau equivalente qui aurait la meme capacite thermique que le calorimetre et ses accessoires"
            }
          ]
        },
        {
          title: "Travail des Forces de Pression",
          sections: [
            {
              subtitle: "Definition",
              content: "Energie echangee entre le systeme et le milieu exterieur par l'intermediaire des forces de pression. Le travail est recu par le systeme (W > 0) si le volume diminue."
            },
            {
              subtitle: "Travail Elementaire",
              formula: "dW = -P_ext x dV"
            },
            {
              subtitle: "Travail Total",
              formula: "W = -Integrale(P_ext x dV)",
              explanation: "Integrale le long du chemin (C)"
            },
            {
              subtitle: "Interpretation Graphique",
              content: "|W| est donne par l'aire sous la courbe P(V) dans le diagramme de Clapeyron."
            }
          ]
        },
        {
          title: "Travail dans les Transformations Particulieres",
          sections: [
            {
              subtitle: "Cas Particuliers",
              table: {
                headers: ["Transformation", "Travail", "Remarque"],
                rows: [
                  ["Isobare (P = cste)", "W = -P(V2-V1)", "Pression constante"],
                  ["Isochore (V = cste)", "W = 0", "Pas de travail"],
                  ["Isotherme reversible (gaz parfait)", "W = nRT x ln(V2/V1)", "T constante"],
                  ["Irreversible", "W = -P_ext(V2-V1)", "P_ext constante"]
                ]
              }
            }
          ]
        },
        {
          title: "Le Travail n'est pas une Fonction d'Etat",
          sections: [
            {
              subtitle: "Demonstration",
              content: "Considerons deux chemins differents entre A et C :"
            },
            {
              subtitle: "Chemin 1 : A -> B -> C",
              content: "1. Detente isobare (A-B) : W_AB = -P1(V2-V1)\n2. Compression isochore (B-C) : W_BC = 0\n=> W1 = -P1(V2-V1)"
            },
            {
              subtitle: "Chemin 2 : A -> D -> C",
              content: "1. Compression isochore (A-D) : W_AD = 0\n2. Detente isobare (D-C) : W_DC = -P2(V2-V1)\n=> W2 = -P2(V2-V1)"
            },
            {
              subtitle: "Conclusion",
              warning: "W1 = -P1(V2-V1) different de W2 = -P2(V2-V1)\nLe travail depend du chemin suivi -> Ce n'est PAS une fonction d'etat !"
            }
          ]
        }
      ]
    }
  ]
};

// COMPREHENSIVE FLASHCARDS - 100+ cards covering ALL concepts
export const flashcardsData = [
  // ==================== SESSION 1 - 40 FLASHCARDS ====================
  // Introduction (3 cards)
  { id: 'f1', session: 1, front: "Qu'est-ce que la thermodynamique?", back: "La science qui etudie les transformations de la matiere et de l'energie. Nee vers 1820, elle possede un caractere universel: toute theorie ne verifiant pas ses principes est mise en doute." },
  { id: 'f2', session: 1, front: "Quelle est l'origine de la thermodynamique?", back: "Elle est nee vers 1820, au debut de l'ere industrielle, de la necessite de comprendre les relations entre phenomenes thermiques et dynamiques dans les machines thermiques." },
  { id: 'f3', session: 1, front: "Que disait Einstein de la thermodynamique?", back: "\"C'est la seule theorie physique a caractere universel dont je suis convaincu... qu'elle ne sera jamais contestee.\" - Elle l'a profondement impressionne par sa simplicite et son universalite." },
  
  // Approches (4 cards)
  { id: 'f4', session: 1, front: "Qu'est-ce que l'approche macroscopique?", back: "Approche basee sur des grandeurs mesurables a grande echelle (P, V, T, n). Elle decrit le comportement d'ensemble du systeme sans consideration du comportement individuel des particules." },
  { id: 'f5', session: 1, front: "Qu'est-ce que l'approche microscopique?", back: "Analyse du comportement des particules elementaires (positions et vitesses). Appelee aussi thermodynamique statistique. Elle permet la comprehension a l'echelle atomique et moleculaire." },
  { id: 'f6', session: 1, front: "Quelles sont les variables macroscopiques?", back: "Pression (P), Volume (V), Temperature (T), Quantite de matiere (n)." },
  { id: 'f7', session: 1, front: "Quel autre nom donne-t-on a l'approche microscopique?", back: "Thermodynamique statistique." },
  
  // Systemes (7 cards)
  { id: 'f8', session: 1, front: "Qu'est-ce qu'un systeme thermodynamique?", back: "Une partie de l'univers a laquelle on porte de l'interet. Constitue d'un grand nombre de particules microscopiques delimitees par une surface (fixe/mobile, fictive/reelle) travers laquelle s'effectuent des echanges d'energie et de matiere." },
  { id: 'f9', session: 1, front: "Qu'est-ce que le milieu exterieur?", back: "Le reste de l'univers, tout ce qui n'appartient pas au systeme etudie." },
  { id: 'f10', session: 1, front: "Qu'est-ce qu'un systeme ouvert?", back: "Un systeme qui peut echanger de la matiere ET de l'energie avec le milieu exterieur. Exemples: bois qui brule, moteur thermique." },
  { id: 'f11', session: 1, front: "Qu'est-ce qu'un systeme ferme?", back: "Un systeme qui peut echanger de l'energie SEULEMENT avec le milieu exterieur (pas de matiere). Exemples: gaz dans un cylindre, refrigerateur." },
  { id: 'f12', session: 1, front: "Qu'est-ce qu'un systeme isole?", back: "Un systeme qui n'echange NI matiere NI energie avec le milieu exterieur. Exemple: l'Univers." },
  { id: 'f13', session: 1, front: "Donnez un exemple de systeme ouvert.", back: "Bois qui brule, moteur thermique, etre humain, turbine a vapeur." },
  { id: 'f14', session: 1, front: "Donnez un exemple de systeme ferme.", back: "Gaz dans un cylindre avec piston, refrigerateur, bombe aerosol." },
  
  // Convention du banquier (3 cards)
  { id: 'f15', session: 1, front: "Quelle est la convention du banquier pour les echanges d'energie?", back: "Q > 0, W > 0 : energie RECUE par le systeme (positive)\nQ < 0, W < 0 : energie CEDEE par le systeme (negative)\nAnalogie: compte bancaire, depot = positif, retrait = negatif" },
  { id: 'f16', session: 1, front: "Si un systeme recoit 500 J de chaleur, que vaut Q?", back: "Q = +500 J (positif car energie recue par le systeme)." },
  { id: 'f17', session: 1, front: "Si un systeme fournit 200 J de travail, que vaut W?", back: "W = -200 J (negatif car energie cedee par le systeme)." },
  
  // Variables d'etat (5 cards)
  { id: 'f18', session: 1, front: "Qu'est-ce qu'une variable d'etat?", back: "Une grandeur mesurable (P, V, T, n...) capable de decrire completement l'etat d'un systeme a un instant donne." },
  { id: 'f19', session: 1, front: "Qu'est-ce qu'une equation d'etat?", back: "Une relation f(P, V, T, ...) = 0 qui lie les variables d'etat entre elles. Les variables d'etat ne sont pas toutes independantes." },
  { id: 'f20', session: 1, front: "Quelle est l'equation d'etat du gaz parfait?", back: "PV = nRT, avec R = 8.314 J.K-1.mol-1" },
  { id: 'f21', session: 1, front: "Quelle est l'unite de la pression dans le SI?", back: "Le Pascal (Pa) = N/m2" },
  { id: 'f22', session: 1, front: "Quelle est l'unite du volume dans le SI?", back: "Le metre cube (m3)" },
  
  // Variables extensives/intensives (6 cards)
  { id: 'f23', session: 1, front: "Qu'est-ce qu'une variable extensive?", back: "Une variable proportionnelle a la masse du systeme. Elle est ADDITIVE lors de la reunion de deux systemes. Ex: masse, volume, nombre de particules, energie interne." },
  { id: 'f24', session: 1, front: "Qu'est-ce qu'une variable intensive?", back: "Une variable independante de la masse du systeme. Elle a la meme valeur en tout point d'un systeme homogene a l'equilibre. Ex: temperature, pression, masse volumique." },
  { id: 'f25', session: 1, front: "Citez 4 variables extensives.", back: "Masse (m), Volume (V), Nombre de particules (N), Energie interne (U)." },
  { id: 'f26', session: 1, front: "Citez 3 variables intensives.", back: "Temperature (T), Pression (P), Masse volumique (rho)." },
  { id: 'f27', session: 1, front: "Si on double la masse d'un systeme, que deviennent les variables extensives?", back: "Elles doublent aussi (proportionnelles a la masse)." },
  { id: 'f28', session: 1, front: "Si on divise un systeme en deux, que deviennent les variables intensives?", back: "Elles restent identiques dans chaque partie (independantes de la masse)." },
  
  // Fonctions d'etat (4 cards)
  { id: 'f29', session: 1, front: "Qu'est-ce qu'une fonction d'etat?", back: "Une grandeur dont la variation entre deux etats depend UNIQUEMENT des etats initial et final, et NON du chemin suivi. Ex: U, H, S, P, V, T." },
  { id: 'f30', session: 1, front: "Citez 3 fonctions d'etat.", back: "Energie interne (U), Enthalpie (H), Entropie (S)." },
  { id: 'f31', session: 1, front: "Pourquoi W et Q ne sont-ils pas des fonctions d'etat?", back: "Parce que le travail W et la chaleur Q dependent du chemin suivi entre les etats initial et final." },
  { id: 'f32', session: 1, front: "Quelle est la formule de variation d'une fonction d'etat?", back: "Delta f = f2 - f1 = Constante quelque soit le chemin suivi." },
  
  // Transformations (6 cards)
  { id: 'f33', session: 1, front: "Qu'est-ce qu'une transformation quasi-statique?", back: "Une transformation constituee d'une suite continue d'etats d'equilibre interne. A tout instant, les variables du systeme sont definies." },
  { id: 'f34', session: 1, front: "Qu'est-ce qu'une transformation reversible?", back: "Une succession d'etats d'equilibre infiniment voisins. La transformation inverse passe par les memes etats intermediaires." },
  { id: 'f35', session: 1, front: "Qu'est-ce qu'une transformation irreversible?", back: "Une transformation brutale ou spontanee. Les etats intermediaires ne sont pas des etats d'equilibre." },
  { id: 'f36', session: 1, front: "Une transformation quasi-statique est-elle toujours reversible?", back: "NON ! Une transformation quasi-statique n'est pas necessairement reversible." },
  { id: 'f37', session: 1, front: "Qu'est-ce qu'une transformation isochore?", back: "Une transformation a volume constant (V = Cste)." },
  { id: 'f38', session: 1, front: "Qu'est-ce qu'une transformation isobare?", back: "Une transformation a pression constante (P = Cste)." },
  
  // Transformations particulieres (4 cards)
  { id: 'f39', session: 1, front: "Qu'est-ce qu'une transformation isotherme?", back: "Une transformation a temperature constante (T = Cste)." },
  { id: 'f40', session: 1, front: "Qu'est-ce qu'une transformation adiabatique?", back: "Une transformation sans echange de chaleur avec le milieu exterieur (Q = 0)." },
  { id: 'f41', session: 1, front: "Qu'est-ce qu'une transformation cyclique?", back: "Une transformation ou l'etat final est identique a l'etat initial." },
  { id: 'f42', session: 1, front: "Quelle est la particularite d'une transformation cyclique?", back: "L'etat final = Etat initial, donc toutes les fonctions d'etat retrouvent leur valeur initiale." },

  // Outils mathematiques (5 cards)
  { id: 'f43', session: 1, front: "Qu'est-ce qu'une differentielle totale exacte (DTE)?", back: "Une forme differentielle dont l'integrale entre A et B ne depend PAS du chemin suivi. C'est la differentielle d'une fonction d'etat." },
  { id: 'f44', session: 1, front: "Quelle est la condition de Schwartz pour une DTE?", back: "d2f/dxdy = d2f/dydx (egalite des derivees secondes croisees)." },
  { id: 'f45', session: 1, front: "Quelle est la formule de la differentielle totale?", back: "df = (df/dx)dx + (df/dy)dy" },
  { id: 'f46', session: 1, front: "Quelle notation utilise-t-on pour une forme differentielle (pas DTE)?", back: "On utilise le symbole 'delta': dW pour le travail, dQ pour la chaleur." },
  { id: 'f47', session: 1, front: "Pour une DTE, que peut-on dire de l'integrale?", back: "L'integrale de df entre A et B ne depend pas du chemin suivi." },
  
  // Equilibre (3 cards)
  { id: 'f48', session: 1, front: "Qu'est-ce qu'un etat d'equilibre?", back: "Un systeme est en equilibre lorsque ses variables d'etat ne varient pas dans le temps ET sont uniformes dans tout le systeme." },
  { id: 'f49', session: 1, front: "Qu'est-ce que l'equilibre thermique?", back: "Etat ou la temperature est constante et uniforme en tout point du systeme." },
  { id: 'f50', session: 1, front: "Qu'est-ce que l'equilibre mecanique?", back: "Etat ou la pression est constante et uniforme en tout point du systeme." },
  
  // STEP (4 cards)
  { id: 'f51', session: 1, front: "Qu'est-ce qu'un systeme thermo-elastique (STEP)?", back: "Systeme homogene (gaz ou liquide) inerte chimiquement, a composition constante (ferme), avec travail uniquement mecanique, decrit par P, V, T." },
  { id: 'f52', session: 1, front: "Qu'est-ce que le coefficient alpha?", back: "Coefficient de dilatation isobare: alpha = (1/V)(dV/dT)P. Caracterise la variation relative de volume avec la temperature a pression constante." },
  { id: 'f53', session: 1, front: "Qu'est-ce que le coefficient beta?", back: "Coefficient d'augmentation de pression isochore: beta = (1/P)(dP/dT)V. Caracterise la variation relative de pression avec la temperature a volume constant." },
  { id: 'f54', session: 1, front: "Qu'est-ce que le coefficient chi_T?", back: "Coefficient de compressibilite isotherme: chi_T = -(1/V)(dV/dP)T. Caracterise la variation relative de volume avec la pression a temperature constante." },
  
  // ==================== SESSION 2 - 35 FLASHCARDS ====================
  // Temperature (5 cards)
  { id: 'f55', session: 2, front: "Qu'est-ce que la temperature?", back: "Une grandeur physique mesurable indirectement, liee a l'agitation moleculaire. Elle represente l'energie moyenne d'une molecule. Fonction de deux variables d'etat: theta = f(x, y)." },
  { id: 'f56', session: 2, front: "Qu'est-ce qu'un thermometre?", back: "Un systeme dans lequel une variable est maintenue constante tandis que l'autre depend de la temperature: theta = f(x) avec y = constante." },
  { id: 'f57', session: 2, front: "Qu'est-ce qu'une variable thermometrique?", back: "Une grandeur physique qui varie avec la temperature et peut etre mesuree: volume, pression, resistance, force electromotrice, etc." },
  { id: 'f58', session: 2, front: "Citez 6 types de thermometres.", back: "1. Thermometre a liquide (mercure, alcool)\n2. Thermometre a gaz\n3. Thermometre a resistance (platine)\n4. Thermocouple\n5. Pyrometre (mesures optiques)\n6. Capteur capacitif" },
  { id: 'f59', session: 2, front: "Quel principe utilise un thermocouple?", back: "La force electromotrice E creee a la jonction de deux metaux differents varie avec la temperature." },
  
  // Echelle centesimale (4 cards)
  { id: 'f60', session: 2, front: "Qu'est-ce que l'echelle centesimale?", back: "Echelle de temperature basee sur une relation lineaire theta = ax + b entre la grandeur physique et la temperature." },
  { id: 'f61', session: 2, front: "Quels sont les deux points fixes de l'echelle centesimale?", back: "1. Fusion de la glace: theta = 0 C (equilibre glace-eau a Patm)\n2. Ebullition de l'eau: theta = 100 C (vapeur d'eau a Patm)" },
  { id: 'f62', session: 2, front: "Quelle est la limitation de l'echelle centesimale?", back: "Le coefficient de dilatation alpha(theta) varie avec la temperature. L'echelle n'est donc pas universelle. Un thermometre ne mesure pas la temperature, il la repere." },
  { id: 'f63', session: 2, front: "Pourquoi l'echelle centesimale n'est-elle pas universelle?", back: "Parce que le coefficient de dilatation depend de la temperature. Deux thermometres differents peuvent donner des valeurs legerement differentes pour la meme temperature." },
  
  // Temperature absolue (5 cards)
  { id: 'f64', session: 2, front: "Qu'est-ce que le zero absolu?", back: "La temperature correspondant a une agitation moleculaire nulle. T = 0 K = -273.15 C. C'est la limite absolue du froid: un corps a cette temperature ne peut ceder de chaleur a aucun autre." },
  { id: 'f65', session: 2, front: "Quelle est la valeur du zero absolu en Kelvin?", back: "T = 0 K" },
  { id: 'f66', session: 2, front: "Quelle est la valeur du zero absolu en Celsius?", back: "theta = -273.15 C" },
  { id: 'f67', session: 2, front: "Quel est le coefficient de dilatation des gaz a faible pression?", back: "alpha = 1/273.15 K-1 (pratiquement constant pour tous les gaz a faible pression)." },
  { id: 'f68', session: 2, front: "Que se passe-t-il si on extrapole V(T) jusqu'a V=0 pour un gaz?", back: "Toutes les courbes convergent vers une temperature correspondant au zero absolu (T = 0 K)." },
  
  // Point triple (3 cards)
  { id: 'f69', session: 2, front: "Qu'est-ce que le point triple de l'eau?", back: "Le point ou coexistent les trois phases de l'eau (solide, liquide, gazeuse) en equilibre." },
  { id: 'f70', session: 2, front: "Quelles sont les coordonnees du point triple de l'eau?", back: "Temperature: Ttp = 273.16 K (soit 0.01 C)\nPression: Ptp = 611 Pa" },
  { id: 'f71', session: 2, front: "Quelle est la fonction thermometrique de l'echelle Kelvin?", back: "T = (273.16 / xtp) x X, ou xtp est la valeur de la variable thermometrique au point triple. L'echelle Kelvin utilise un seul point fixe." },
  
  // Echelles de temperature (5 cards)
  { id: 'f72', session: 2, front: "Comment convertir Celsius en Kelvin?", back: "T(K) = T(C) + 273.15" },
  { id: 'f73', session: 2, front: "Comment convertir Celsius en Fahrenheit?", back: "T(F) = 1.8 x T(C) + 32" },
  { id: 'f74', session: 2, front: "Comment convertir Kelvin en Rankine?", back: "T(R) = 1.8 x T(K)" },
  { id: 'f75', session: 2, front: "Quelle est la temperature de la glace fondante en Kelvin?", back: "T = 273.15 K" },
  { id: 'f76', session: 2, front: "Quelle est la temperature d'ebullition de l'eau en Kelvin?", back: "T = 373.15 K" },
  
  // Principe zero (4 cards)
  { id: 'f77', session: 2, front: "Enoncez le principe zero de la thermodynamique.", back: "\"Deux systemes thermodynamiques en equilibre thermique avec un meme troisieme sont en equilibre thermique entre eux.\"" },
  { id: 'f78', session: 2, front: "Qu'est-ce qu'une cloison adiabatique?", back: "Une paroi qui ne permet aucun echange de chaleur. Les systemes restent dans leurs etats initiaux." },
  { id: 'f79', session: 2, front: "Qu'est-ce qu'une cloison diatherme?", back: "Une paroi qui permet les echanges de chaleur. Les systemes atteignent un equilibre thermique commun." },
  { id: 'f80', session: 2, front: "Quelle consequence a le principe zero?", back: "Il justifie l'utilisation de thermometres: on peut comparer les temperatures de differents systemes en les mettant en contact avec un meme thermometre." },
  
  // Gaz parfait (6 cards)
  { id: 'f81', session: 2, front: "Quelles sont les hypotheses du gaz parfait?", back: "1. Molecules ponctuelles (sans volume propre)\n2. Sans interaction (independantes)\n3. Chocs elastiques (conservation de l'energie cinetique)" },
  { id: 'f82', session: 2, front: "Pourquoi les molecules d'un gaz parfait n'interagissent-elles pas?", back: "Par hypothese, elles sont tres eloignees les unes des autres, sans force d'interaction. Les forces de repulsion ne se manifestent que lors des chocs elastiques." },
  { id: 'f83', session: 2, front: "Quelle est l'equation d'etat du gaz parfait?", back: "PV = nRT, avec R = 8.314 J.K-1.mol-1" },
  { id: 'f84', session: 2, front: "Quelles sont les conditions normales (STP)?", back: "Temperature: T = 273.15 K (0 C)\nPression: P = 1.013 x 10^5 Pa (1 atm)\nVolume molaire: Vm = 22.414 L/mol" },
  { id: 'f85', session: 2, front: "Quel est le volume molaire d'un gaz parfait a STP?", back: "Vm = 22.414 L/mol" },
  { id: 'f86', session: 2, front: "Quelle est la valeur de la constante des gaz parfaits R?", back: "R = 8.314 J.K-1.mol-1" },
  
  // Lois des gaz (4 cards)
  { id: 'f87', session: 2, front: "Quelle est la loi de Mariotte?", back: "A temperature constante: P1V1 = P2V2 (PV = constante)" },
  { id: 'f88', session: 2, front: "Quelle est la loi de Charles?", back: "A volume constant: P1/T1 = P2/T2 (P/T = constante)" },
  { id: 'f89', session: 2, front: "Quelle est la loi de Gay-Lussac?", back: "A pression constante: V1/T1 = V2/T2 (V/T = constante)" },
  { id: 'f90', session: 2, front: "Quelle condition est necessaire pour appliquer la loi de Mariotte?", back: "Temperature constante (isotherme)." },
  
  // Theorie cinetique (4 cards)
  { id: 'f91', session: 2, front: "Quelle est l'energie cinetique moyenne d'une molecule?", back: "(1/2)m<v2> = (3/2)kT, ou k = 1.38 x 10^-23 J/K est la constante de Boltzmann." },
  { id: 'f92', session: 2, front: "Qu'est-ce que le theoreme d'equipartition?", back: "Chaque degre de liberte contribue (1/2)kT a l'energie cinetique moyenne." },
  { id: 'f93', session: 2, front: "Quelle est l'energie cinetique d'un gaz monoatomique?", back: "Ec = (3/2)kT (3 degres de liberte)" },
  { id: 'f94', session: 2, front: "Quelle est l'energie cinetique d'un gaz diatomique?", back: "Ec = (5/2)kT (5 degres de liberte)" },
  
  // Dilatation (3 cards)
  { id: 'f95', session: 2, front: "Quelle est la formule de dilatation lineaire?", back: "L = L0(1 + alpha_l x Delta T), ou alpha_l est le coefficient de dilatation lineaire (K-1)." },
  { id: 'f96', session: 2, front: "Quelle est la formule de dilatation volumique?", back: "V = V0(1 + alpha_V x Delta T), ou alpha_V est le coefficient de dilatation volumique (K-1)." },
  { id: 'f97', session: 2, front: "Quelle est la relation entre alpha_V et alpha_l pour un corps isotrope?", back: "alpha_V = 3 x alpha_l" },
  
  // ==================== SESSION 3 - 40 FLASHCARDS ====================
  // Chaleur definition (5 cards)
  { id: 'f98', session: 3, front: "Qu'est-ce que la chaleur?", back: "Energie echangee entre deux corps de temperatures differentes mis en contact. A l'echelle microscopique: energie cinetique echangee par agitation moleculaire." },
  { id: 'f99', session: 3, front: "Quelles sont les unites de chaleur?", back: "Joule [J] ou calorie [cal]. 1 calorie = 4.186 Joules." },
  { id: 'f100', session: 3, front: "Quelle est la difference entre chaleur et temperature?", back: "La chaleur est une energie echangee (J), la temperature est une grandeur d'etat (K). Un echange de chaleur peut s'effectuer sans variation de temperature (changement d'etat)." },
  { id: 'f101', session: 3, front: "Un echange de chaleur s'accompagne-t-il toujours d'un changement de temperature?", back: "NON ! Pendant un changement d'etat, il y a echange de chaleur sans changement de temperature (chaleur latente)." },
  { id: 'f102', session: 3, front: "Quelle est l'equivalence entre calorie et Joule?", back: "1 calorie = 4.186 Joules" },
  
  // Modes de transfert (6 cards)
  { id: 'f103', session: 3, front: "Quels sont les trois modes de transfert de chaleur?", back: "1. Conduction: transfert par contact materiel\n2. Convection: transfert par mouvement de fluide\n3. Rayonnement: transfert par ondes electromagnetiques" },
  { id: 'f104', session: 3, front: "Qu'est-ce que la conduction thermique?", back: "Transfert de chaleur par contact materiel direct. Formule: Q = lambda x S x (TA-TB)/e" },
  { id: 'f105', session: 3, front: "Qu'est-ce que la convection thermique?", back: "Transfert de chaleur par mouvement de fluide. Formule: Q = h x S x (T - Tfluide)" },
  { id: 'f106', session: 3, front: "Qu'est-ce que le rayonnement thermique?", back: "Transfert de chaleur par ondes electromagnetiques (sans contact materiel). Formule: Q = epsilon x sigma x S x T^4" },
  { id: 'f107', session: 3, front: "Qu'est-ce que la conductivite thermique?", back: "Coefficient lambda qui caracterise la capacite d'un materiau a conduire la chaleur. Unite: W/(m.K)" },
  { id: 'f108', session: 3, front: "Qu'est-ce que le coefficient de convection?", back: "Coefficient h qui caracterise les echanges thermiques par convection. Unite: W/(m2.K)" },
  
  // Expression de la chaleur (4 cards)
  { id: 'f109', session: 3, front: "Quelle est l'expression de la chaleur en variables (T, V)?", back: "dQ = l x dV + CV x dT" },
  { id: 'f110', session: 3, front: "Quelle est l'expression de la chaleur en variables (T, P)?", back: "dQ = h x dP + CP x dT" },
  { id: 'f111', session: 3, front: "Quelle est l'expression de la chaleur en variables (P, V)?", back: "dQ = lambda x dP + mu x dV" },
  { id: 'f112', session: 3, front: "Quels sont les 6 coefficients calorimetriques?", back: "CP, CV, l, h, mu, lambda. Ces expressions ne sont valables que pour des transformations reversibles ou quasi-statiques." },
  
  // Capacites thermiques (6 cards)
  { id: 'f113', session: 3, front: "Qu'est-ce que la capacite thermique CV?", back: "Capacite thermique a volume constant. dQ_V = CV x dT. Q_V = m x c_V x (T2-T1)." },
  { id: 'f114', session: 3, front: "Qu'est-ce que la capacite thermique CP?", back: "Capacite thermique a pression constante. dQ_P = CP x dT. Q_P = m x c_P x (T2-T1)." },
  { id: 'f115', session: 3, front: "Qu'est-ce que la chaleur massique?", back: "Capacite thermique massique: quantite de chaleur necessaire pour elever 1 kg de substance de 1 K. Unite: J/(kg.K)" },
  { id: 'f116', session: 3, front: "Qu'est-ce que la chaleur molaire?", back: "Capacite thermique molaire: quantite de chaleur necessaire pour elever 1 mole de substance de 1 K. Unite: J/(mol.K). c_v = CV/n, c_p = CP/n." },
  { id: 'f117', session: 3, front: "Quelle est la relation de Mayer?", back: "CP - CV = nR (pour les gaz parfaits)" },
  { id: 'f118', session: 3, front: "Comment calcule-t-on la chaleur echangee a pression constante?", back: "Q_P = m x c_P x (T2 - T1) = n x c_p x (T2 - T1)" },
  
  // Chaleur latente (5 cards)
  { id: 'f119', session: 3, front: "Qu'est-ce que la chaleur latente?", back: "Quantite de chaleur necessaire pour faire passer l'unite de masse d'un corps pur d'un etat physique a un autre, a temperature et pression constantes. Formule: Q = m x L." },
  { id: 'f120', session: 3, front: "Quelle est la chaleur latente de fusion de la glace?", back: "L = 334 kJ/kg a 0 C" },
  { id: 'f121', session: 3, front: "Quelle est la chaleur latente de vaporisation de l'eau?", back: "L = 2260 kJ/kg a 100 C" },
  { id: 'f122', session: 3, front: "Quelle est la chaleur latente de sublimation de la glace?", back: "L = 2594 kJ/kg a 0 C" },
  { id: 'f123', session: 3, front: "Pourquoi la chaleur latente est-elle necessaire lors d'un changement d'etat?", back: "Pour modifier les liaisons entre molecules sans changer la temperature. L'energie est utilisee pour reorganiser la structure moleculaire." },
  
  // Calorimetrie (4 cards)
  { id: 'f124', session: 3, front: "Qu'est-ce que la calorimetrie?", back: "Mesure des echanges de chaleur entre differents corps dans un systeme isole thermiquement." },
  { id: 'f125', session: 3, front: "Quel est le principe de la calorimetrie?", back: "Dans un systeme isole, la somme des chaleurs echangees est nulle: Somme(Qi) = 0" },
  { id: 'f126', session: 3, front: "Qu'est-ce que la valeur en eau d'un calorimetre?", back: "Masse d'eau equivalente mu = Somme(mi x ci) qui aurait la meme capacite thermique que le calorimetre et ses accessoires." },
  { id: 'f127', session: 3, front: "Comment s'ecrit l'equation calorimetrique?", back: "Somme(Qi) = Q_calorimetre + Q_corps + Q_eau = 0" },
  
  // Travail (7 cards)
  { id: 'f128', session: 3, front: "Qu'est-ce que le travail des forces de pression?", back: "Energie echangee entre le systeme et le milieu exterieur par l'intermediaire des forces de pression." },
  { id: 'f129', session: 3, front: "Quelle est l'expression du travail elementaire?", back: "dW = -P_ext x dV" },
  { id: 'f130', session: 3, front: "Quelle est l'expression du travail total?", back: "W = -Integrale(P_ext x dV) le long du chemin (C)" },
  { id: 'f131', session: 3, front: "Comment interprete-t-on graphiquement le travail?", back: "|W| est donne par l'aire sous la courbe P(V) dans le diagramme de Clapeyron." },
  { id: 'f132', session: 3, front: "Quand le travail est-il positif?", back: "W > 0 quand le systeme recoit du travail, c'est-a-dire quand le volume diminue (compression)." },
  { id: 'f133', session: 3, front: "Quand le travail est-il negatif?", back: "W < 0 quand le systeme fournit du travail, c'est-a-dire quand le volume augmente (detente)." },
  { id: 'f134', session: 3, front: "Qu'est-ce que le diagramme de Clapeyron?", back: "Graphique representant la pression P en fonction du volume V. L'aire sous la courbe represente le travail." },
  
  // Travail dans les transformations (5 cards)
  { id: 'f135', session: 3, front: "Quel est le travail d'une transformation isobare?", back: "W = -P(V2 - V1) (pression constante)" },
  { id: 'f136', session: 3, front: "Quel est le travail d'une transformation isochore?", back: "W = 0 (pas de travail car dV = 0)" },
  { id: 'f137', session: 3, front: "Quel est le travail d'une transformation isotherme reversible pour un gaz parfait?", back: "W = nRT x ln(V2/V1)" },
  { id: 'f138', session: 3, front: "Quel est le travail d'une transformation irreversible?", back: "W = -P_ext(V2 - V1) (pression exterieure constante)" },
  { id: 'f139', session: 3, front: "Pour une detente isotherme (V2 > V1), que vaut W?", back: "W < 0 (le systeme fournit du travail). W = nRT x ln(V2/V1) < 0 car ln(V2/V1) > 0 et il y a un signe negatif." },
  
  // Travail pas fonction d'etat (3 cards)
  { id: 'f140', session: 3, front: "Pourquoi le travail n'est-il pas une fonction d'etat?", back: "Parce que W depend du chemin suivi entre les etats initial et final. Deux chemins differents donnent des valeurs de W differentes." },
  { id: 'f141', session: 3, front: "Comment demontrer que W n'est pas une fonction d'etat?", back: "Considerer deux chemins differents entre A et C (ex: A-B-C et A-D-C). Si W1 different de W2, alors W depend du chemin." },
  { id: 'f142', session: 3, front: "Quelle est la difference entre fonction d'etat et fonction de transfert?", back: "Fonction d'etat: variation independante du chemin (U, H, S)\nFonction de transfert: depend du chemin (W, Q)" }
];

// COMPREHENSIVE QUIZ - 60+ questions covering ALL concepts
export const quizData = [
  // ==================== SESSION 1 - 20 QUESTIONS ====================
  {
    id: 'q1',
    session: 1,
    question: "Un systeme qui echange uniquement de l'energie avec l'exterieur est appele:",
    options: ["Systeme ouvert", "Systeme ferme", "Systeme isole", "Systeme adiabatique"],
    correctAnswer: 1,
    explanation: "Un systeme ferme echange de l'energie (chaleur/travail) mais pas de matiere avec l'exterieur."
  },
  {
    id: 'q2',
    session: 1,
    question: "Laquelle de ces variables est une variable intensive?",
    options: ["Volume", "Masse", "Temperature", "Nombre de particules"],
    correctAnswer: 2,
    explanation: "La temperature est intensive (independante de la masse), tandis que volume, masse et nombre de particules sont extensifs."
  },
  {
    id: 'q3',
    session: 1,
    question: "Une transformation isotherme s'effectue a:",
    options: ["Pression constante", "Volume constant", "Temperature constante", "Sans echange de chaleur"],
    correctAnswer: 2,
    explanation: "Isotherme signifie temperature constante (T = Cste)."
  },
  {
    id: 'q4',
    session: 1,
    question: "Lequel de ces elements est une fonction d'etat?",
    options: ["Travail W", "Chaleur Q", "Energie interne U", "Aucun des trois"],
    correctAnswer: 2,
    explanation: "L'energie interne U est une fonction d'etat. W et Q sont des fonctions de transfert qui dependent du chemin."
  },
  {
    id: 'q5',
    session: 1,
    question: "La condition pour qu'une differentielle soit totale exacte est:",
    options: ["d2f/dx2 = d2f/dy2", "d2f/dxdy = d2f/dydx", "df/dx = df/dy", "df = 0"],
    correctAnswer: 1,
    explanation: "La condition de Schwartz: egalite des derivees secondes croisees."
  },
  {
    id: 'q6',
    session: 1,
    question: "Une transformation adiabatique s'effectue:",
    options: ["A temperature constante", "A pression constante", "Sans echange de chaleur", "Sans echange de travail"],
    correctAnswer: 2,
    explanation: "Adiabatique signifie Q = 0 (aucun echange de chaleur avec l'exterieur)."
  },
  {
    id: 'q7',
    session: 1,
    question: "Selon la convention du banquier, si Q > 0:",
    options: ["Le systeme cede de la chaleur", "Le systeme recoit de la chaleur", "Il n'y a pas d'echange", "La temperature diminue"],
    correctAnswer: 1,
    explanation: "Q > 0 signifie que le systeme recoit de la chaleur (energie positive = recue)."
  },
  {
    id: 'q8',
    session: 1,
    question: "Le coefficient alpha (dilatation isobare) est defini par:",
    options: ["(1/V)(dV/dT)P", "(1/P)(dP/dT)V", "-(1/V)(dV/dP)T", "(dV/dT)P"],
    correctAnswer: 0,
    explanation: "alpha = (1/V)(dV/dT)P represente la variation relative de volume avec la temperature a pression constante."
  },
  {
    id: 'q9',
    session: 1,
    question: "Un systeme isole peut echanger:",
    options: ["De la matiere uniquement", "De l'energie uniquement", "Matiere et energie", "Rien du tout"],
    correctAnswer: 3,
    explanation: "Un systeme isole n'echange NI matiere NI energie avec l'exterieur."
  },
  {
    id: 'q10',
    session: 1,
    question: "Une transformation quasi-statique:",
    options: ["Est toujours reversible", "Est une suite continue d'etats d'equilibre", "Est forcement irreversible", "Se fait a vitesse elevee"],
    correctAnswer: 1,
    explanation: "Une transformation quasi-statique est une suite continue d'etats d'equilibre, mais n'est pas necessairement reversible."
  },
  {
    id: 'q11',
    session: 1,
    question: "L'equation d'etat du gaz parfait est:",
    options: ["PV = nRT", "P/V = nRT", "PT = nRV", "P + V = nRT"],
    correctAnswer: 0,
    explanation: "PV = nRT est l'equation d'etat du gaz parfait avec R = 8.314 J.K-1.mol-1."
  },
  {
    id: 'q12',
    session: 1,
    question: "Dans l'approche macroscopique, on utilise:",
    options: ["Les positions des molecules", "Les vitesses des molecules", "Les grandeurs P, V, T, n", "L'energie des particules"],
    correctAnswer: 2,
    explanation: "L'approche macroscopique utilise les grandeurs mesurables a grande echelle: P, V, T, n."
  },
  {
    id: 'q13',
    session: 1,
    question: "Si on double la masse d'un systeme, les variables intensives:",
    options: ["Doublent", "Sont divisees par 2", "Restent identiques", "Deviennent nulles"],
    correctAnswer: 2,
    explanation: "Les variables intensives sont independantes de la masse du systeme."
  },
  {
    id: 'q14',
    session: 1,
    question: "Une transformation cyclique se termine par:",
    options: ["Un etat different de l'initial", "L'etat initial", "Un volume nul", "Une pression nulle"],
    correctAnswer: 1,
    explanation: "Dans une transformation cyclique, l'etat final est identique a l'etat initial."
  },
  {
    id: 'q15',
    session: 1,
    question: "La constante des gaz parfaits R vaut:",
    options: ["1.38 x 10^-23 J/K", "8.314 J.K-1.mol-1", "273.15 J/K", "22.414 L/mol"],
    correctAnswer: 1,
    explanation: "R = 8.314 J.K-1.mol-1. 1.38 x 10^-23 J/K est la constante de Boltzmann k."
  },
  {
    id: 'q16',
    session: 1,
    question: "Le coefficient de compressibilite isotherme chi_T est:",
    options: ["Toujours positif", "Toujours negatif", "Parfois positif, parfois negatif", "Nul"],
    correctAnswer: 0,
    explanation: "chi_T = -(1/V)(dV/dP)T est toujours positif car (dV/dP)T < 0 (le volume diminue quand la pression augmente)."
  },
  {
    id: 'q17',
    session: 1,
    question: "Quelle notation utilise-t-on pour la differentielle du travail?",
    options: ["dW", "dW", "Delta W", "DW"],
    correctAnswer: 1,
    explanation: "On utilise dW (delta W) car le travail n'est pas une fonction d'etat."
  },
  {
    id: 'q18',
    session: 1,
    question: "Un systeme est en equilibre thermique quand:",
    options: ["P est uniforme", "T est uniforme et constante", "V est constant", "Il n'y a pas de travail"],
    correctAnswer: 1,
    explanation: "L'equilibre thermique signifie temperature constante et uniforme en tout point."
  },
  {
    id: 'q19',
    session: 1,
    question: "L'approche microscopique est aussi appelee:",
    options: ["Thermodynamique classique", "Thermodynamique statistique", "Thermodynamique quantique", "Thermodynamique appliquee"],
    correctAnswer: 1,
    explanation: "L'approche microscopique analyse le comportement des particules et est appelee thermodynamique statistique."
  },
  {
    id: 'q20',
    session: 1,
    question: "Un systeme STEP (thermo-elastique) est:",
    options: ["Ouvert", "Ferme et sans reaction chimique", "Isole", "En reaction chimique"],
    correctAnswer: 1,
    explanation: "Un systeme STEP est ferme, inerte chimiquement, a composition constante, avec travail uniquement mecanique."
  },
  
  // ==================== SESSION 2 - 20 QUESTIONS ====================
  {
    id: 'q21',
    session: 2,
    question: "Le zero absolu correspond a:",
    options: ["0 C", "273.15 K", "0 K", "-100 C"],
    correctAnswer: 2,
    explanation: "Le zero absolu est T = 0 K, correspondant a -273.15 C, soit une agitation moleculaire nulle."
  },
  {
    id: 'q22',
    session: 2,
    question: "Le point triple de l'eau correspond a la temperature:",
    options: ["273.15 K", "273.16 K", "0 K", "373.15 K"],
    correctAnswer: 1,
    explanation: "Le point triple de l'eau est a T = 273.16 K (soit 0.01 C), ou coexistent les trois phases."
  },
  {
    id: 'q23',
    session: 2,
    question: "Selon le principe zero, si A et B sont en equilibre avec C:",
    options: ["A et B ont la meme pression", "A et B sont en equilibre entre eux", "C est a temperature nulle", "A, B et C sont isoles"],
    correctAnswer: 1,
    explanation: "Le principe zero etablit que deux systemes en equilibre avec un meme troisieme sont en equilibre entre eux."
  },
  {
    id: 'q24',
    session: 2,
    question: "La loi de Mariotte s'applique a:",
    options: ["Temperature constante", "Volume constant", "Pression constante", "Transformation adiabatique"],
    correctAnswer: 0,
    explanation: "La loi de Mariotte (P1V1 = P2V2) s'applique a temperature constante."
  },
  {
    id: 'q25',
    session: 2,
    question: "Pour un gaz parfait monoatomique, l'energie cinetique moyenne est:",
    options: ["(1/2)kT", "kT", "(3/2)kT", "(5/2)kT"],
    correctAnswer: 2,
    explanation: "Un gaz monoatomique a 3 degres de liberte, donc Ec = 3 x (1/2)kT = (3/2)kT."
  },
  {
    id: 'q26',
    session: 2,
    question: "Le volume molaire d'un gaz parfait dans les conditions STP est:",
    options: ["22.414 L/mol", "8.314 L/mol", "273.15 L/mol", "1 L/mol"],
    correctAnswer: 0,
    explanation: "A 0 C et 1 atm, le volume molaire d'un gaz parfait est Vm = 22.414 L/mol."
  },
  {
    id: 'q27',
    session: 2,
    question: "Pour un corps isotrope, alpha_V = ?",
    options: ["alpha_l", "2 x alpha_l", "3 x alpha_l", "alpha_l / 3"],
    correctAnswer: 2,
    explanation: "Pour un corps isotrope, le coefficient de dilatation volumique vaut 3 fois le coefficient lineaire: alpha_V = 3 x alpha_l."
  },
  {
    id: 'q28',
    session: 2,
    question: "Une cloison adiabatique:",
    options: ["Permet les echanges de chaleur", "Empesche les echanges de chaleur", "Permet les echanges de matiere", "Est toujours mobile"],
    correctAnswer: 1,
    explanation: "Une cloison adiabatique ne permet aucun echange de chaleur entre les systemes."
  },
  {
    id: 'q29',
    session: 2,
    question: "La loi de Charles s'applique a:",
    options: ["Temperature constante", "Volume constant", "Pression constante", "Transformation isochore"],
    correctAnswer: 1,
    explanation: "La loi de Charles (P1/T1 = P2/T2) s'applique a volume constant."
  },
  {
    id: 'q30',
    session: 2,
    question: "La loi de Gay-Lussac s'applique a:",
    options: ["Temperature constante", "Volume constant", "Pression constante", "Transformation isobare"],
    correctAnswer: 2,
    explanation: "La loi de Gay-Lussac (V1/T1 = V2/T2) s'applique a pression constante."
  },
  {
    id: 'q31',
    session: 2,
    question: "La constante de Boltzmann k vaut:",
    options: ["8.314 J.K-1.mol-1", "1.38 x 10^-23 J/K", "273.15 J/K", "22.414 L/mol"],
    correctAnswer: 1,
    explanation: "k = 1.38 x 10^-23 J/K. Attention a ne pas confondre avec R = 8.314 J.K-1.mol-1."
  },
  {
    id: 'q32',
    session: 2,
    question: "Pour un gaz diatomique, l'energie cinetique moyenne est:",
    options: ["(1/2)kT", "kT", "(3/2)kT", "(5/2)kT"],
    correctAnswer: 3,
    explanation: "Un gaz diatomique a 5 degres de liberte, donc Ec = 5 x (1/2)kT = (5/2)kT."
  },
  {
    id: 'q33',
    session: 2,
    question: "Combien de points fixes utilise l'echelle Kelvin?",
    options: ["0", "1", "2", "3"],
    correctAnswer: 1,
    explanation: "L'echelle Kelvin utilise un seul point fixe: le point triple de l'eau (273.16 K)."
  },
  {
    id: 'q34',
    session: 2,
    question: "La temperature 100 C correspond en Kelvin a:",
    options: ["100 K", "273.15 K", "373.15 K", "473.15 K"],
    correctAnswer: 2,
    explanation: "T(K) = T(C) + 273.15, donc 100 C = 373.15 K."
  },
  {
    id: 'q35',
    session: 2,
    question: "La pression au point triple de l'eau est:",
    options: ["101325 Pa", "611 Pa", "0 Pa", "273.16 Pa"],
    correctAnswer: 1,
    explanation: "Au point triple de l'eau, la pression est Ptp = 611 Pa."
  },
  {
    id: 'q36',
    session: 2,
    question: "Un thermocouple utilise comme variable thermometrique:",
    options: ["Le volume", "La resistance", "La force electromotrice", "La pression"],
    correctAnswer: 2,
    explanation: "Un thermocouple utilise la force electromotrice E creee a la jonction de deux metaux differents."
  },
  {
    id: 'q37',
    session: 2,
    question: "Pourquoi l'echelle centesimale n'est-elle pas universelle?",
    options: ["Elle utilise trop de points fixes", "Le coefficient de dilatation varie avec T", "Elle n'est pas lineaire", "Elle est trop ancienne"],
    correctAnswer: 1,
    explanation: "Le coefficient de dilatation alpha(theta) varie avec la temperature, donc differentes substances donnent des echelles legerement differentes."
  },
  {
    id: 'q38',
    session: 2,
    question: "Dans les hypotheses du gaz parfait, les molecules sont considerees comme:",
    options: ["De grandes spheres", "Des points immateriels", "Des ellipsoides", "Des cylindres"],
    correctAnswer: 1,
    explanation: "Dans le modele du gaz parfait, les molecules sont assimilables a des points immateriels (sans volume propre)."
  },
  {
    id: 'q39',
    session: 2,
    question: "Le theoreme d'equipartition dit que chaque degre de liberte contribue:",
    options: ["kT", "(1/2)kT", "(3/2)kT", "2kT"],
    correctAnswer: 1,
    explanation: "Le theoreme d'equipartition: chaque degre de liberte contribue (1/2)kT a l'energie cinetique moyenne."
  },
  {
    id: 'q40',
    session: 2,
    question: "La distribution de Maxwell-Boltzmann decrit:",
    options: ["La pression des gaz", "La distribution des vitesses moleculaires", "La temperature", "Le volume molaire"],
    correctAnswer: 1,
    explanation: "La distribution de Maxwell-Boltzmann decrit comment les vitesses (energies cinetiques) des molecules sont distribuees dans un gaz."
  },
  
  // ==================== SESSION 3 - 20 QUESTIONS ====================
  {
    id: 'q41',
    session: 3,
    question: "La chaleur est:",
    options: ["Une fonction d'etat", "Une energie echangee par difference de temperature", "Toujours positive", "Identique a la temperature"],
    correctAnswer: 1,
    explanation: "La chaleur est une energie echangee entre corps de temperatures differentes. Ce n'est pas une fonction d'etat."
  },
  {
    id: 'q42',
    session: 3,
    question: "Le transfert de chaleur par convection s'effectue:",
    options: ["Par contact materiel", "Par mouvement de fluide", "Par ondes electromagnetiques", "Sans milieu materiel"],
    correctAnswer: 1,
    explanation: "La convection est le transport de chaleur par un fluide en mouvement."
  },
  {
    id: 'q43',
    session: 3,
    question: "La relation de Mayer pour les gaz parfaits est:",
    options: ["CP + CV = nR", "CP - CV = nR", "CP/CV = gamma", "CP x CV = nR"],
    correctAnswer: 1,
    explanation: "La relation de Mayer: CP - CV = nR pour les gaz parfaits."
  },
  {
    id: 'q44',
    session: 3,
    question: "La chaleur latente de fusion de la glace est:",
    options: ["2260 kJ/kg", "334 kJ/kg", "4.186 kJ/kg", "273 kJ/kg"],
    correctAnswer: 1,
    explanation: "La chaleur latente de fusion de la glace a 0 C est L = 334 kJ/kg."
  },
  {
    id: 'q45',
    session: 3,
    question: "Le travail elementaire des forces de pression est:",
    options: ["dW = P dV", "dW = -P_ext dV", "dW = V dP", "dW = nRT dV"],
    correctAnswer: 1,
    explanation: "dW = -P_ext x dV (negatif car le systeme fournit du travail quand le volume augmente)."
  },
  {
    id: 'q46',
    session: 3,
    question: "Dans une transformation isochore, le travail est:",
    options: ["W = -P(V2-V1)", "W = nRT x ln(V2/V1)", "W = 0", "W = P x Delta V"],
    correctAnswer: 2,
    explanation: "A volume constant (isochore), dV = 0, donc W = 0."
  },
  {
    id: 'q47',
    session: 3,
    question: "Le travail est une fonction d'etat:",
    options: ["Vrai", "Faux", "Seulement pour les gaz parfaits", "Seulement a temperature constante"],
    correctAnswer: 1,
    explanation: "Faux. Le travail depend du chemin suivi et n'est pas une fonction d'etat."
  },
  {
    id: 'q48',
    session: 3,
    question: "Le principe de la calorimetrie est:",
    options: ["Somme(Qi) > 0", "Somme(Qi) = 0", "Somme(Qi) < 0", "Qi = constante"],
    correctAnswer: 1,
    explanation: "Dans un systeme isole, la somme des chaleurs echangees est nulle: Somme(Qi) = 0."
  },
  {
    id: 'q49',
    session: 3,
    question: "1 calorie equivaut a:",
    options: ["1 Joule", "4.186 Joules", "1000 Joules", "0.239 Joules"],
    correctAnswer: 1,
    explanation: "1 calorie = 4.186 Joules."
  },
  {
    id: 'q50',
    session: 3,
    question: "Le rayonnement thermique s'effectue par:",
    options: ["Contact materiel", "Mouvement de fluide", "Ondes electromagnetiques", "Conducteurs solides"],
    correctAnswer: 2,
    explanation: "Le rayonnement est un transfert de chaleur par ondes electromagnetiques, sans contact materiel necessaire."
  },
  {
    id: 'q51',
    session: 3,
    question: "La chaleur latente de vaporisation de l'eau est:",
    options: ["334 kJ/kg", "2260 kJ/kg", "2594 kJ/kg", "4186 kJ/kg"],
    correctAnswer: 1,
    explanation: "La chaleur latente de vaporisation de l'eau a 100 C est L = 2260 kJ/kg."
  },
  {
    id: 'q52',
    session: 3,
    question: "Dans une transformation isobare, le travail est:",
    options: ["W = 0", "W = -P(V2-V1)", "W = nRT x ln(V2/V1)", "W = P x dT"],
    correctAnswer: 1,
    explanation: "A pression constante (isobare), W = -P(V2-V1)."
  },
  {
    id: 'q53',
    session: 3,
    question: "Combien y a-t-il de coefficients calorimetriques?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 3,
    explanation: "Il y a 6 coefficients calorimetriques: CP, CV, l, h, mu, lambda."
  },
  {
    id: 'q54',
    session: 3,
    question: "L'expression de la chaleur en variables (T, V) est:",
    options: ["dQ = l dV + CV dT", "dQ = h dP + CP dT", "dQ = lambda dP + mu dV", "dQ = CV dP + l dV"],
    correctAnswer: 0,
    explanation: "En variables (T, V): dQ = l x dV + CV x dT."
  },
  {
    id: 'q55',
    session: 3,
    question: "La capacite thermique a pression constante est notee:",
    options: ["CV", "CP", "Q", "W"],
    correctAnswer: 1,
    explanation: "CP est la capacite thermique a pression constante, CV a volume constant."
  },
  {
    id: 'q56',
    session: 3,
    question: "Pour un gaz parfait isotherme reversible, le travail est:",
    options: ["W = -P(V2-V1)", "W = 0", "W = nRT x ln(V2/V1)", "W = -nRT x ln(V2/V1)"],
    correctAnswer: 2,
    explanation: "Pour un gaz parfait en transformation isotherme reversible: W = nRT x ln(V2/V1)."
  },
  {
    id: 'q57',
    session: 3,
    question: "La valeur en eau d'un calorimetre represente:",
    options: ["La masse d'eau qu'il contient", "La masse d'eau equivalente en capacite thermique", "Le volume du calorimetre", "La temperature de l'eau"],
    correctAnswer: 1,
    explanation: "La valeur en eau mu est la masse d'eau equivalente qui aurait la meme capacite thermique que le calorimetre."
  },
  {
    id: 'q58',
    session: 3,
    question: "Dans le diagramme de Clapeyron, le travail est represente par:",
    options: ["La pente de la courbe", "L'aire sous la courbe P(V)", "L'ordonnee a l'origine", "Le point d'intersection"],
    correctAnswer: 1,
    explanation: "|W| est donne par l'aire sous la courbe P(V) dans le diagramme de Clapeyron."
  },
  {
    id: 'q59',
    session: 3,
    question: "Quand le volume augmente lors d'une detente:",
    options: ["W > 0", "W < 0", "W = 0", "W = infini"],
    correctAnswer: 1,
    explanation: "Lors d'une detente (V2 > V1), le systeme fournit du travail, donc W < 0."
  },
  {
    id: 'q60',
    session: 3,
    question: "La formule Q = m x L s'applique:",
    options: ["A un chauffage sans changement d'etat", "A un changement d'etat", "A un travail mecanique", "A une transformation isotherme"],
    correctAnswer: 1,
    explanation: "Q = m x L s'applique aux changements d'etat, ou L est la chaleur latente massique."
  }
];

// COMPLETE FORMULAS DATA - All formulas from all documents
export const formulasData = {
  general: [
    { name: "Equation d'etat du gaz parfait", formula: "PV = nRT", variables: "P: Pression (Pa), V: Volume (m3), n: moles, R = 8.314 J.K-1.mol-1, T: Temperature (K)", session: 1 },
    { name: "Equation d'etat generale", formula: "f(P, V, T) = 0", variables: "Relation entre variables d'etat", session: 1 },
    { name: "Differentielle totale", formula: "df = (df/dx)dx + (df/dy)dy", variables: "Pour une fonction f(x, y) continue et derivable", session: 1 },
    { name: "Condition de Schwartz (DTE)", formula: "d2f/dxdy = d2f/dydx", variables: "Egalite des derivees secondes croisees", session: 1 },
    { name: "Variation d'une fonction d'etat", formula: "Delta f = f2 - f1", variables: "Independante du chemin suivi", session: 1 }
  ],
  temperature: [
    { name: "Conversion Kelvin-Celsius", formula: "T(K) = T(C) + 273.15", variables: "", session: 2 },
    { name: "Conversion Celsius-Fahrenheit", formula: "T(F) = 1.8 x T(C) + 32", variables: "", session: 2 },
    { name: "Conversion Kelvin-Rankine", formula: "T(R) = 1.8 x T(K)", variables: "", session: 2 },
    { name: "Fonction thermometrique (Kelvin)", formula: "T = (273.16 / xtp) x X", variables: "xtp: valeur de la variable au point triple", session: 2 },
    { name: "Coefficient de dilatation isobare", formula: "alpha = (1/V)(dV/dT)P", variables: "Variation relative de volume a P constante", session: 1 },
    { name: "Coefficient d'augmentation de pression", formula: "beta = (1/P)(dP/dT)V", variables: "Variation relative de pression a V constant", session: 1 },
    { name: "Coefficient de compressibilite isotherme", formula: "chi_T = -(1/V)(dV/dP)T", variables: "Variation relative de volume a T constante", session: 1 },
    { name: "Dilatation lineaire", formula: "L = L0(1 + alpha_l x Delta T)", variables: "alpha_l: coefficient de dilatation lineaire (K-1)", session: 2 },
    { name: "Dilatation volumique", formula: "V = V0(1 + alpha_V x Delta T)", variables: "alpha_V: coefficient de dilatation volumique (K-1)", session: 2 },
    { name: "Relation dilatation volumique-lineaire", formula: "alpha_V = 3 x alpha_l", variables: "Pour un corps isotrope", session: 2 }
  ],
  travail: [
    { name: "Travail elementaire", formula: "dW = -P_ext x dV", variables: "Travail des forces de pression", session: 3 },
    { name: "Travail total", formula: "W = -Integrale(P_ext x dV)", variables: "Integrale le long du chemin (C)", session: 3 },
    { name: "Travail isobare", formula: "W = -P(V2 - V1)", variables: "P = constante", session: 3 },
    { name: "Travail isochore", formula: "W = 0", variables: "V = constante", session: 3 },
    { name: "Travail isotherme reversible (gaz parfait)", formula: "W = nRT x ln(V2/V1)", variables: "T = constante", session: 3 },
    { name: "Travail irreversible", formula: "W = -P_ext(V2 - V1)", variables: "P_ext constante", session: 3 }
  ],
  chaleur: [
    { name: "Chaleur a volume constant", formula: "dQ_V = CV x dT", variables: "CV: capacite thermique a V constant", session: 3 },
    { name: "Chaleur a pression constante", formula: "dQ_P = CP x dT", variables: "CP: capacite thermique a P constant", session: 3 },
    { name: "Chaleur massique a V constant", formula: "Q_V = m x c_V x (T2 - T1)", variables: "c_V: chaleur massique a V constant [J/kg.K]", session: 3 },
    { name: "Chaleur massique a P constant", formula: "Q_P = m x c_P x (T2 - T1)", variables: "c_P: chaleur massique a P constant [J/kg.K]", session: 3 },
    { name: "Chaleur molaire", formula: "c_mol = C/n", variables: "C: capacite thermique, n: nombre de moles", session: 3 },
    { name: "Relation de Mayer", formula: "CP - CV = nR", variables: "Gaz parfaits", session: 3 },
    { name: "Chaleur latente", formula: "Q = m x L", variables: "L: chaleur latente massique [J/kg]", session: 3 },
    { name: "Equation calorimetrique", formula: "Somme(Qi) = 0", variables: "Systeme isole", session: 3 },
    { name: "Valeur en eau", formula: "mu = Somme(mi x ci)", variables: "Masse d'eau equivalente", session: 3 }
  ],
  expressionChaleur: [
    { name: "Expression en variables (T, V)", formula: "dQ = l x dV + CV x dT", variables: "l: coefficient calorimetrique", session: 3 },
    { name: "Expression en variables (T, P)", formula: "dQ = h x dP + CP x dT", variables: "h: coefficient calorimetrique", session: 3 },
    { name: "Expression en variables (P, V)", formula: "dQ = lambda x dP + mu x dV", variables: "lambda, mu: coefficients calorimetriques", session: 3 }
  ],
  transfertThermique: [
    { name: "Conduction", formula: "Q = lambda x S x (TA - TB) / e", variables: "lambda: conductivite thermique, S: surface, e: epaisseur", session: 3 },
    { name: "Convection", formula: "Q = h x S x (T - T_fluide)", variables: "h: coefficient de convection, S: surface", session: 3 },
    { name: "Rayonnement", formula: "Q = epsilon x sigma x S x T^4", variables: "epsilon: emissivite, sigma: constante de Boltzmann", session: 3 }
  ],
  gazParfait: [
    { name: "Equation d'etat", formula: "PV = nRT", variables: "P (Pa), V (m3), n (mol), R = 8.314 J.K-1.mol-1, T (K)", session: 2 },
    { name: "Loi de Mariotte (isotherme)", formula: "P1 x V1 = P2 x V2", variables: "T = constante", session: 2 },
    { name: "Loi de Charles (isochore)", formula: "P1/T1 = P2/T2", variables: "V = constante", session: 2 },
    { name: "Loi de Gay-Lussac (isobare)", formula: "V1/T1 = V2/T2", variables: "P = constante", session: 2 },
    { name: "Energie cinetique moyenne", formula: "(1/2)m<v2> = (3/2)kT", variables: "k = 1.38 x 10^-23 J/K (constante de Boltzmann)", session: 2 },
    { name: "Theoreme d'equipartition", formula: "E par ddl = (1/2)kT", variables: "Energie par degre de liberte", session: 2 },
    { name: "Energie cinetique gaz monoatomique", formula: "Ec = (3/2)kT", variables: "3 degres de liberte", session: 2 },
    { name: "Energie cinetique gaz diatomique", formula: "Ec = (5/2)kT", variables: "5 degres de liberte", session: 2 },
    { name: "Volume molaire a STP", formula: "Vm = 22.414 L/mol", variables: "Conditions: T = 273.15 K, P = 1 atm", session: 2 },
    { name: "Constante des gaz parfaits", formula: "R = PV/nT = 8.314 J.K-1.mol-1", variables: "", session: 2 }
  ],
  chaleursLatentes: [
    { name: "Fusion de la glace", formula: "L_fusion = 334 kJ/kg", variables: "A 0 C", session: 3 },
    { name: "Vaporisation de l'eau", formula: "L_vap = 2260 kJ/kg", variables: "A 100 C", session: 3 },
    { name: "Sublimation de la glace", formula: "L_sub = 2594 kJ/kg", variables: "A 0 C", session: 3 }
  ],
  pointTriple: [
    { name: "Temperature du point triple de l'eau", formula: "T_tp = 273.16 K", variables: "Soit 0.01 C", session: 2 },
    { name: "Pression du point triple de l'eau", formula: "P_tp = 611 Pa", variables: "", session: 2 }
  ]
};
