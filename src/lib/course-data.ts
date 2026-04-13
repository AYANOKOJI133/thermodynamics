// Complete thermodynamics course data from all 6 documents

export const courseData = {
  sessions: [
    {
      id: 1,
      title: "Concepts Fondamentaux de la Thermodynamique",
      duration: "2 heures",
      description: "Introduction à la thermodynamique, systèmes, variables d'état, transformations et outils mathématiques.",
      topics: [
        "Introduction à la thermodynamique",
        "Approches macroscopique et microscopique",
        "Notion de système thermodynamique",
        "Types de systèmes",
        "Convention du banquier",
        "Variables d'état et équation d'état",
        "Variables extensives et intensives",
        "Fonctions d'état",
        "Transformations thermodynamiques",
        "Outils mathématiques",
        "Systèmes thermo-élastiques (STEP)"
      ],
      content: [
        {
          title: "Introduction à la Thermodynamique",
          sections: [
            {
              subtitle: "Définition",
              content: "La thermodynamique est la science qui étudie les transformations de la matière et de l'énergie. Elle est née vers 1820, au début de l'ère industrielle, de la nécessité de comprendre les relations entre les phénomènes thermiques et dynamiques dans les machines thermiques.",
              keyPoints: [
                "Caractère universel de la thermodynamique",
                "Toute théorie ne vérifiant pas les principes de la thermodynamique est mise en doute",
                "Conversion inévitable d'au moins une forme d'énergie en une autre"
              ]
            },
            {
              subtitle: "Citation d'Einstein",
              content: "\"Une théorie est d'autant plus impressionnante que les principes sur lesquels elle repose sont simples, qu'elle relie toutes sortes de choses différentes et que son champ d'application est vaste. Par conséquent, la thermodynamique classique m'a fait une très grande impression. C'est la seule théorie physique à caractère universel dont je suis convaincu, compte tenu de l'application de ses concepts de base, qu'elle ne sera jamais contestée.\"",
              isQuote: true
            }
          ]
        },
        {
          title: "Approches en Thermodynamique",
          sections: [
            {
              subtitle: "Approche Macroscopique",
              content: "Basée sur des grandeurs mesurables à grande échelle (pression P, volume V, température T, quantité de matière n). Cette approche décrit le comportement d'ensemble du système.",
              keyPoints: [
                "Variables macroscopiques : P, V, T, n",
                "Description globale du système",
                "Sans considération du comportement individuel des particules"
              ]
            },
            {
              subtitle: "Approche Microscopique",
              content: "Analyse le comportement des particules élémentaires (positions et vitesses). Appelée aussi thermodynamique statistique.",
              keyPoints: [
                "Positions des molécules",
                "Vitesses des molécules",
                "Compréhension à l'échelle atomique et moléculaire"
              ]
            }
          ]
        },
        {
          title: "Notion de Système Thermodynamique",
          sections: [
            {
              subtitle: "Définition",
              content: "Un système thermodynamique est une partie de l'univers à laquelle on porte de l'intérêt. Il est constitué d'un grand nombre de particules microscopiques (atomes ou molécules) délimitées par une surface fixe ou mobile, fictive ou réelle, à travers laquelle sont susceptibles de s'effectuer des échanges d'énergie et de matière avec le milieu extérieur.",
              keyPoints: [
                "Le reste de l'univers est appelé \"milieu extérieur\"",
                "La frontière peut être réelle (paroi matérielle) ou fictive"
              ]
            },
            {
              subtitle: "Types de Systèmes",
              table: {
                headers: ["Type", "Échanges", "Exemples"],
                rows: [
                  ["Système Ouvert", "Échange matière ET énergie", "Bois qui brûle, moteur thermique"],
                  ["Système Fermé", "Échange d'énergie SEULEMENT", "Gaz dans un cylindre, réfrigérateur"],
                  ["Système Isolé", "AUCUN échange", "L'Univers"]
                ]
              }
            }
          ]
        },
        {
          title: "Convention du Banquier",
          sections: [
            {
              subtitle: "Signes des Échanges",
              content: "Les échanges d'énergie entre le système et le milieu extérieur s'effectuent par transfert de travail W ou de chaleur Q.",
              keyPoints: [
                "Q > 0, W > 0 : Énergie REÇUE par le système (positive)",
                "Q < 0, W < 0 : Énergie CÉDÉE par le système (négative)",
                "Analogie : comme un compte bancaire, dépôt = positif, retrait = négatif"
              ]
            }
          ]
        },
        {
          title: "Variables d'État et Équation d'État",
          sections: [
            {
              subtitle: "Variables d'État",
              content: "Ce sont des grandeurs mesurables (P, V, T, n...) capables de décrire complètement l'état d'un système à un instant donné. Connaître l'état d'un système, c'est déterminer les valeurs de ces variables.",
              keyPoints: [
                "Variables d'état non toutes indépendantes",
                "Liées par une équation d'état : f(P, V, T, ...) = 0"
              ]
            },
            {
              subtitle: "Exemple : Gaz Parfait",
              formula: "PV = nRT",
              formulaDescription: "Équation d'état du gaz parfait",
              keyPoints: [
                "P : Pression (Pa)",
                "V : Volume (m³)",
                "n : Quantité de matière (mol)",
                "R : Constante des gaz parfaits = 8.314 J·K⁻¹·mol⁻¹",
                "T : Température absolue (K)"
              ]
            }
          ]
        },
        {
          title: "Variables Extensives et Intensives",
          sections: [
            {
              subtitle: "Variables Extensives",
              content: "Proportionnelles à la masse du système. Elles sont ADDITIVES lors de la réunion de deux systèmes de même nature.",
              examples: ["Masse (m)", "Volume (V)", "Nombre de particules (N)", "Énergie interne (U)"],
              note: "Si on double la masse, ces grandeurs doublent aussi"
            },
            {
              subtitle: "Variables Intensives",
              content: "Indépendantes de la masse du système. Elles ont la même valeur en tout point d'un système homogène à l'équilibre.",
              examples: ["Température (T)", "Pression (P)", "Masse volumique (ρ)"],
              note: "Si on divise le système, ces grandeurs restent identiques"
            },
            {
              subtitle: "Exemple Pratique",
              content: "1 litre d'eau à 300K + 1 litre d'eau à 300K = 2 litres d'eau à 300K",
              explanation: "Le volume (extensif) s'additionne : 1L + 1L = 2L. La température (intensive) reste identique : 300K"
            }
          ]
        },
        {
          title: "Fonctions d'État",
          sections: [
            {
              subtitle: "Définition",
              content: "Une grandeur dont la variation entre deux états dépend uniquement des états initial et final, et NON du chemin suivi.",
              formula: "Δf = f₂ - f₁ = Cste quelque soit le chemin suivi",
              examples: [
                "Énergie interne (U)",
                "Enthalpie (H)",
                "Entropie (S)",
                "Pression, Volume, Température"
              ]
            },
            {
              subtitle: "Fonctions de Transfert",
              content: "Grandeurs dépendant du chemin suivi.",
              examples: [
                "Travail (W) - pas une fonction d'état",
                "Chaleur (Q) - pas une fonction d'état"
              ],
              warning: "W et Q dépendent du chemin suivi entre les états initial et final"
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
                  description: "Suite continue d'états d'équilibre interne. À tout instant, les variables du système sont définies."
                },
                {
                  name: "Réversible",
                  description: "Succession d'états d'équilibre infiniment voisins. La transformation inverse passe par les mêmes états intermédiaires."
                },
                {
                  name: "Irréversible",
                  description: "Transformation brutale ou spontanée. Les états intermédiaires ne sont pas des états d'équilibre."
                }
              ]
            },
            {
              subtitle: "Important",
              warning: "Une transformation quasi-statique n'est pas nécessairement réversible !"
            }
          ]
        },
        {
          title: "Transformations Particulières",
          sections: [
            {
              subtitle: "Types Principaux",
              transformations: [
                { name: "Isochore", condition: "V = Cste", description: "Volume constant" },
                { name: "Isobare", condition: "P = Cste", description: "Pression constante" },
                { name: "Isotherme", condition: "T = Cste", description: "Température constante" },
                { name: "Adiabatique", condition: "Q = 0", description: "Aucun échange de chaleur" },
                { name: "Cyclique", condition: "État final = État initial", description: "Retour à l'état initial" }
              ]
            }
          ]
        },
        {
          title: "Outils Mathématiques",
          sections: [
            {
              subtitle: "Différentielle Totale",
              content: "Pour une fonction f(x, y) continue et dérivable :",
              formula: "df = (∂f/∂x)dx + (∂f/∂y)dy"
            },
            {
              subtitle: "Condition de DTE",
              content: "Pour que df soit une différentielle totale exacte :",
              formula: "∂²f/∂x∂y = ∂²f/∂y∂x",
              explanation: "Égalité des dérivées secondes croisées (condition de Schwartz)"
            },
            {
              subtitle: "Interprétation Physique",
              content: "Si df est une DTE, alors ∫df entre A et B ne dépend pas du chemin suivi."
            }
          ]
        },
        {
          title: "DTE vs Forme Différentielle",
          sections: [
            {
              subtitle: "Différentielle Totale Exacte (df)",
              properties: [
                "✓ Intégration ne dépend PAS du chemin suivi",
                "✓ f est une fonction d'état",
                "✓ ∂²f/∂x∂y = ∂²f/∂y∂x"
              ],
              examples: ["dU (énergie interne)", "dH (enthalpie)", "dS (entropie)"]
            },
            {
              subtitle: "Forme Différentielle (δf)",
              properties: [
                "✗ Intégration DÉPEND du chemin suivi",
                "✗ f n'est PAS une fonction d'état",
                "✗ ∂²f/∂x∂y ≠ ∂²f/∂y∂x"
              ],
              examples: ["δW (travail)", "δQ (chaleur)"],
              note: "Notation : df pour DTE, δf pour forme différentielle"
            }
          ]
        },
        {
          title: "État d'Équilibre",
          sections: [
            {
              subtitle: "Définition",
              content: "Un système est en équilibre lorsque ses variables d'état ne varient pas dans le temps ET sont uniformes dans tout le système."
            },
            {
              subtitle: "Types d'Équilibre",
              equilibres: [
                { name: "Équilibre Thermique", description: "Température constante et uniforme en tout point" },
                { name: "Équilibre Mécanique", description: "Pression constante et uniforme en tout point" }
              ]
            }
          ]
        },
        {
          title: "Systèmes Thermo-élastiques (STEP)",
          sections: [
            {
              subtitle: "Définition",
              content: "Systèmes homogènes (gaz ou liquides) :\n• Inertes chimiquement (pas de réaction)\n• Composition constante (système fermé)\n• Travail uniquement mécanique\n• Décrits par P, V, T"
            },
            {
              subtitle: "Coefficients Thermoélastiques",
              coefficients: [
                { 
                  symbol: "α", 
                  name: "Coefficient de dilatation isobare", 
                  formula: "α = (1/V)(∂V/∂T)P",
                  description: "À pression constante"
                },
                { 
                  symbol: "β", 
                  name: "Coefficient d'augmentation de pression", 
                  formula: "β = (1/P)(∂P/∂T)V",
                  description: "À volume constant"
                },
                { 
                  symbol: "χT", 
                  name: "Coefficient de compressibilité isotherme", 
                  formula: "χT = -(1/V)(∂V/∂P)T",
                  description: "À température constante"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Température et Dilatation Thermique",
      duration: "2 heures",
      description: "Définition de la température, échelles de mesure, principe zéro, modèle du gaz parfait et dilatation thermique.",
      topics: [
        "Définition de la température",
        "Variables thermométriques",
        "Échelle centésimale (Celsius)",
        "Température absolue et échelle Kelvin",
        "Point triple de l'eau",
        "Les échelles de température",
        "Principe zéro de la thermodynamique",
        "Modèle du gaz parfait",
        "Constante des gaz parfaits",
        "Lois particulières",
        "Théorie cinétique",
        "Dilatation thermique"
      ],
      content: [
        {
          title: "Définition de la Température",
          sections: [
            {
              subtitle: "Définition",
              content: "La température est une grandeur physique mesurable indirectement. Elle est liée à l'état microscopique de la matière, c'est-à-dire à l'agitation moléculaire. Elle représente l'énergie moyenne d'une molécule.",
              keyPoints: [
                "Fonction de deux variables d'état : θ = f(x, y)",
                "Un thermomètre : système où une variable est constante, l'autre dépend de T",
                "θ = f(x) avec y = constante"
              ]
            }
          ]
        },
        {
          title: "Variables Thermométriques",
          sections: [
            {
              subtitle: "Grandeurs pouvant servir de variable thermométrique",
              table: {
                headers: ["Variable", "Type de Thermomètre", "Exemple"],
                rows: [
                  ["Volume V", "Thermomètre à liquide", "Mercure, alcool"],
                  ["Pression P", "Thermomètre à gaz", "Gaz parfait"],
                  ["Résistance R", "Thermomètre à résistance", "Platine, thermistance"],
                  ["Force électromotrice E", "Thermocouple", "Jonction de métaux différents"],
                  ["Flux thermique Φ", "Mesures optiques", "Pyromètre"],
                  ["Capacité électrique C", "Capteur capacitif", "Semiconducteur"]
                ]
              }
            }
          ]
        },
        {
          title: "Échelle Centésimale (Celsius)",
          sections: [
            {
              subtitle: "Relation Linéaire",
              content: "L'échelle centésimale suppose une relation linéaire entre la grandeur physique x et la température θ :",
              formula: "θ = ax + b"
            },
            {
              subtitle: "Points Fixes",
              table: {
                headers: ["Point", "Température", "Description"],
                rows: [
                  ["Fusion de la glace", "θ = 0°C", "Équilibre glace-eau à pression atmosphérique"],
                  ["Ébullition de l'eau", "θ = 100°C", "Vapeur d'eau à pression atmosphérique"]
                ]
              }
            },
            {
              subtitle: "Limitations",
              warning: "Le coefficient de dilatation α(θ) varie avec la température. L'échelle centésimale n'est donc pas universelle. Un thermomètre ne mesure pas la température, il la repère."
            }
          ]
        },
        {
          title: "Température Absolue et Échelle Kelvin",
          sections: [
            {
              subtitle: "Coefficient de Dilatation des Gaz",
              content: "Pour les gaz à faible pression, le coefficient de dilatation est pratiquement constant :",
              formula: "α ≈ 1/273.15 K⁻¹"
            },
            {
              subtitle: "Zéro Absolu",
              content: "En extrapolant les courbes expérimentales du volume en fonction de la température jusqu'à V=0, toutes les courbes convergent vers une température correspondant à une agitation moléculaire nulle.",
              keyPoints: [
                "C'est la limite absolue du froid",
                "Un corps à cette température ne peut céder de la chaleur à aucun autre",
                "T = 0 K correspond à θ = -273.15°C"
              ]
            }
          ]
        },
        {
          title: "Point Triple de l'Eau",
          sections: [
            {
              subtitle: "Définition",
              content: "Point où coexistent les trois phases de l'eau (solide, liquide, gazeuse) en équilibre.",
              keyPoints: [
                "Température : Ttp = 273.16 K (soit 0.01°C)",
                "Pression : Ptp = 611 Pa"
              ]
            },
            {
              subtitle: "Fonction Thermométrique",
              content: "L'échelle Kelvin utilise un seul point fixe :",
              formula: "T = (273.16 / xtp) × x",
              explanation: "où xtp est la valeur de la variable thermométrique au point triple"
            }
          ]
        },
        {
          title: "Les Échelles de Température",
          sections: [
            {
              subtitle: "Comparaison des Échelles",
              table: {
                headers: ["Échelle", "Symbole", "Zéro absolu", "Glace fondante", "Ébullition"],
                rows: [
                  ["Kelvin", "K", "0 K", "273.15 K", "373.15 K"],
                  ["Celsius", "°C", "-273.15°C", "0°C", "100°C"],
                  ["Fahrenheit", "°F", "-459.67°F", "32°F", "212°F"],
                  ["Rankine", "°R", "0°R", "491.67°R", "671.67°R"]
                ]
              }
            },
            {
              subtitle: "Relations de Conversion",
              formulas: [
                { formula: "T(K) = T(°C) + 273.15", description: "Kelvin vers Celsius" },
                { formula: "T(°F) = 1.8 × T(°C) + 32", description: "Celsius vers Fahrenheit" },
                { formula: "T(°R) = 1.8 × T(K)", description: "Kelvin vers Rankine" }
              ]
            }
          ]
        },
        {
          title: "Principe Zéro de la Thermodynamique",
          sections: [
            {
              subtitle: "Énoncé",
              content: "\"Deux systèmes thermodynamiques en équilibre thermique avec un même troisième sont en équilibre thermique entre eux.\"",
              isQuote: true
            },
            {
              subtitle: "Types de Cloisons",
              table: {
                headers: ["Type", "Échange", "Conséquence"],
                rows: [
                  ["Cloison adiabatique", "Aucun échange de chaleur", "Systèmes restent dans leurs états initiaux"],
                  ["Cloison diatherme", "Échange de chaleur possible", "Systèmes atteignent équilibre thermique commun"]
                ]
              }
            }
          ]
        },
        {
          title: "Modèle du Gaz Parfait",
          sections: [
            {
              subtitle: "Hypothèses",
              hypotheses: [
                "Molécules assimilables à des points immatériels (sans volume propre)",
                "Molécules très éloignées les unes des autres, sans force d'interaction (indépendantes)",
                "Les forces de répulsion ne se manifestent que lors des chocs élastiques",
                "Conservation de l'énergie cinétique totale : E₁ + E₂ = E₁' + E₂'"
              ]
            },
            {
              subtitle: "Équation d'État",
              formula: "PV = nRT",
              keyPoints: [
                "P : Pression (Pa)",
                "V : Volume (m³)",
                "n : Quantité de matière (mol)",
                "R = 8.314 J·K⁻¹·mol⁻¹",
                "T : Température (K)"
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
                "Température : T = 273.15 K (0°C)",
                "Pression : P = 1.013 × 10⁵ Pa (1 atm)",
                "Volume molaire : Vm = 22.414 L/mol"
              ]
            },
            {
              subtitle: "Calcul de R",
              formula: "R = PV/nT = 8.314 J·K⁻¹·mol⁻¹"
            }
          ]
        },
        {
          title: "Lois Particulières des Gaz Parfaits",
          sections: [
            {
              subtitle: "Lois Fondamentales",
              table: {
                headers: ["Loi", "Condition", "Formule", "Description"],
                rows: [
                  ["Mariotte", "T = cste", "P₁V₁ = P₂V₂", "À T constante, PV = cste"],
                  ["Charles", "V = cste", "P₁/T₁ = P₂/T₂", "À V constant, P/T = cste"],
                  ["Gay-Lussac", "P = cste", "V₁/T₁ = V₂/T₂", "À P constante, V/T = cste"]
                ]
              }
            }
          ]
        },
        {
          title: "Théorie Cinétique des Gaz",
          sections: [
            {
              subtitle: "Énergie Cinétique Moyenne",
              formula: "(1/2)m<v²> = (3/2)kT",
              explanation: "k = 1.38×10⁻²³ J/K est la constante de Boltzmann"
            },
            {
              subtitle: "Théorème d'Équipartition",
              formula: "(1/2)kT par degré de liberté",
              keyPoints: [
                "Gaz monoatomique (3 ddl) : Ec = (3/2)kT",
                "Gaz diatomique (5 ddl) : Ec = (5/2)kT"
              ]
            },
            {
              subtitle: "Distribution de Maxwell-Boltzmann",
              content: "Les molécules n'ont pas toutes la même vitesse. Quand T augmente, les énergies cinétiques sont plus élevées mais aussi plus dispersées."
            }
          ]
        },
        {
          title: "Dilatation Thermique",
          sections: [
            {
              subtitle: "Principe",
              content: "L'amplitude des oscillations atomiques augmente avec la température, provoquant une dilatation."
            },
            {
              subtitle: "Dilatation Linéaire",
              formula: "L = L₀(1 + αl·ΔT)",
              explanation: "αl : coefficient de dilatation linéaire (K⁻¹)"
            },
            {
              subtitle: "Dilatation Volumique",
              formula: "V = V₀(1 + αV·ΔT)",
              explanation: "αV : coefficient de dilatation volumique (K⁻¹)"
            },
            {
              subtitle: "Relation",
              formula: "αV = 3αl",
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
      description: "Échanges d'énergie : travail des forces de pression et chaleur, capacités thermiques, chaleur latente et calorimétrie.",
      topics: [
        "Définition de la chaleur",
        "Modes de transfert thermique",
        "Expression de la chaleur",
        "Capacités thermiques",
        "Chaleur latente",
        "Calorimétrie",
        "Travail des forces de pression",
        "Travail dans les transformations",
        "Le travail n'est pas une fonction d'état"
      ],
      content: [
        {
          title: "La Chaleur : Définition",
          sections: [
            {
              subtitle: "Définition",
              content: "Énergie échangée entre deux corps de températures différentes mis en contact (le contact peut ne pas être matériel). Cette énergie est transférée de manière à atteindre un équilibre thermique.",
              keyPoints: [
                "À l'échelle microscopique : énergie cinétique échangée par agitation moléculaire",
                "Unités : Joule [J] ou calorie [cal]",
                "1 calorie = 4.186 Joules"
              ]
            },
            {
              subtitle: "Distinction Importante",
              warning: "La chaleur et la température sont deux grandeurs différentes ! Un échange de chaleur peut s'effectuer sans variation de température (changement d'état)."
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
                  ["Conduction", "Transfert par contact matériel direct", "Q = λS(TA-TB)/e"],
                  ["Convection", "Transfert par mouvement de fluide", "Q = hS(T-Tfluide)"],
                  ["Rayonnement", "Transfert par ondes EM (sans contact)", "Q = εσST⁴"]
                ]
              }
            },
            {
              subtitle: "Paramètres",
              keyPoints: [
                "λ : conductivité thermique",
                "h : coefficient de convection",
                "ε : émissivité thermique",
                "σ : constante de Boltzmann"
              ]
            }
          ]
        },
        {
          title: "Expression de la Quantité de Chaleur",
          sections: [
            {
              subtitle: "Formes selon les Variables",
              table: {
                headers: ["Variables", "Formule"],
                rows: [
                  ["(T, V)", "δQ = ldV + CVdT"],
                  ["(T, P)", "δQ = hdP + CPdT"],
                  ["(P, V)", "δQ = λdP + μdV"]
                ]
              }
            },
            {
              subtitle: "Coefficients Calorimétriques",
              content: "Les 6 coefficients Cp, CV, l, h, μ et λ sont appelés les coefficients calorimétriques de la substance étudiée.",
              warning: "Ces expressions ne sont valables que pour des transformations réversibles ou quasi-statiques !"
            }
          ]
        },
        {
          title: "Capacités Thermiques",
          sections: [
            {
              subtitle: "À Volume Constant (CV)",
              formula: "δQV = CV dT",
              subformula: "QV = m·cV·(T₂-T₁)",
              keyPoints: [
                "cV : chaleur massique à volume constant [J/kg·K]",
                "cᵥ = CV/n : chaleur molaire [J/mol·K]"
              ]
            },
            {
              subtitle: "À Pression Constante (CP)",
              formula: "δQP = CP dT",
              subformula: "QP = m·cP·(T₂-T₁)",
              keyPoints: [
                "cP : chaleur massique à pression constante [J/kg·K]",
                "cₚ = CP/n : chaleur molaire [J/mol·K]"
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
          title: "Chaleur Latente de Changement d'État",
          sections: [
            {
              subtitle: "Définition",
              content: "Quantité de chaleur nécessaire pour faire passer l'unité de masse d'un corps pur d'un état physique à un autre, à température et pression constantes."
            },
            {
              subtitle: "Formule",
              formula: "Q = m × L",
              explanation: "L : chaleur latente massique [J/kg]"
            },
            {
              subtitle: "Exemples",
              table: {
                headers: ["Transition", "Chaleur Latente", "Température"],
                rows: [
                  ["Fusion (glace → eau)", "334 kJ/kg", "0°C"],
                  ["Vaporisation (eau → vapeur)", "2260 kJ/kg", "100°C"],
                  ["Sublimation (glace → vapeur)", "2594 kJ/kg", "0°C"]
                ]
              }
            }
          ]
        },
        {
          title: "Calorimétrie",
          sections: [
            {
              subtitle: "Principe",
              content: "La calorimétrie permet de mesurer les échanges de chaleur entre différents corps dans un système isolé thermiquement."
            },
            {
              subtitle: "Équation Calorimétrique",
              formula: "ΣQi = Qcalorimètre + Qcorps + Qeau = 0",
              explanation: "La somme des chaleurs échangées dans un système isolé est nulle"
            },
            {
              subtitle: "Valeur en Eau",
              formula: "μ = Σ(mi·ci)",
              explanation: "Masse d'eau équivalente qui aurait la même capacité thermique que le calorimètre et ses accessoires"
            }
          ]
        },
        {
          title: "Travail des Forces de Pression",
          sections: [
            {
              subtitle: "Définition",
              content: "Énergie échangée entre le système et le milieu extérieur par l'intermédiaire des forces de pression. Le travail est reçu par le système (W > 0) si le volume diminue."
            },
            {
              subtitle: "Travail Élémentaire",
              formula: "δW = -Pext · dV"
            },
            {
              subtitle: "Travail Total",
              formula: "W = -∫Pext dV",
              explanation: "Intégrale le long du chemin (C)"
            },
            {
              subtitle: "Interprétation Graphique",
              content: "|W| est donné par l'aire sous la courbe P(V) dans le diagramme de Clapeyron."
            }
          ]
        },
        {
          title: "Travail dans les Transformations Particulières",
          sections: [
            {
              subtitle: "Cas Particuliers",
              table: {
                headers: ["Transformation", "Travail", "Remarque"],
                rows: [
                  ["Isobare (P = cste)", "W = -P(V₂-V₁)", "Pression constante"],
                  ["Isochore (V = cste)", "W = 0", "Pas de travail"],
                  ["Isotherme réversible (gaz parfait)", "W = nRT·ln(V₂/V₁)", "T constante"],
                  ["Irréversible", "W = -Pext(V₂-V₁)", "Pext constante"]
                ]
              }
            }
          ]
        },
        {
          title: "Le Travail n'est pas une Fonction d'État",
          sections: [
            {
              subtitle: "Démonstration",
              content: "Considérons deux chemins différents entre A et C :"
            },
            {
              subtitle: "Chemin 1 : A → B → C",
              content: "1. Détente isobare (A-B) : WAB = -P₁(V₂-V₁)\n2. Compression isochore (B-C) : WBC = 0\n→ W₁ = -P₁(V₂-V₁)"
            },
            {
              subtitle: "Chemin 2 : A → D → C",
              content: "1. Compression isochore (A-D) : WAD = 0\n2. Détente isobare (D-C) : WDC = -P₂(V₂-V₁)\n→ W₂ = -P₂(V₂-V₁)"
            },
            {
              subtitle: "Conclusion",
              warning: "W₁ = -P₁(V₂-V₁) ≠ W₂ = -P₂(V₂-V₁)\nLe travail dépend du chemin suivi → Ce n'est PAS une fonction d'état !"
            }
          ]
        }
      ]
    }
  ]
};

// Flashcards data
export const flashcardsData = [
  // Session 1
  { id: 'f1', session: 1, front: "Qu'est-ce que la thermodynamique?", back: "La science qui étudie les transformations de la matière et de l'énergie. Elle est née vers 1820 et possède un caractère universel." },
  { id: 'f2', session: 1, front: "Qu'est-ce qu'un système ouvert?", back: "Un système qui peut échanger de la matière ET de l'énergie avec le milieu extérieur. Exemple: bois qui brûle, moteur thermique." },
  { id: 'f3', session: 1, front: "Qu'est-ce qu'un système fermé?", back: "Un système qui peut échanger de l'énergie SEULEMENT avec le milieu extérieur (pas de matière). Exemple: gaz dans un cylindre, réfrigérateur." },
  { id: 'f4', session: 1, front: "Qu'est-ce qu'un système isolé?", back: "Un système qui n'échange NI matière NI énergie avec le milieu extérieur. Exemple: l'Univers." },
  { id: 'f5', session: 1, front: "Quelle est la convention du banquier?", back: "Q > 0, W > 0 : énergie REÇUE par le système (positive)\nQ < 0, W < 0 : énergie CÉDÉE par le système (négative)" },
  { id: 'f6', session: 1, front: "Qu'est-ce qu'une variable extensive?", back: "Une variable proportionnelle à la masse du système. Elle est additive. Exemples: masse, volume, nombre de particules, énergie interne." },
  { id: 'f7', session: 1, front: "Qu'est-ce qu'une variable intensive?", back: "Une variable indépendante de la masse du système. Exemples: température, pression, masse volumique." },
  { id: 'f8', session: 1, front: "Qu'est-ce qu'une fonction d'état?", back: "Une grandeur dont la variation entre deux états dépend uniquement des états initial et final, et NON du chemin suivi. Exemples: U, H, S." },
  { id: 'f9', session: 1, front: "Qu'est-ce qu'une transformation quasi-statique?", back: "Une transformation constituée d'une suite continue d'états d'équilibre interne. À tout instant, les variables du système sont définies." },
  { id: 'f10', session: 1, front: "Qu'est-ce qu'une transformation réversible?", back: "Une transformation qui se fait par succession d'états d'équilibre infiniment voisins. La transformation inverse passe par les mêmes états." },
  { id: 'f11', session: 1, front: "Qu'est-ce qu'une transformation isochore?", back: "Une transformation à volume constant (V = Cste)." },
  { id: 'f12', session: 1, front: "Qu'est-ce qu'une transformation isobare?", back: "Une transformation à pression constante (P = Cste)." },
  { id: 'f13', session: 1, front: "Qu'est-ce qu'une transformation isotherme?", back: "Une transformation à température constante (T = Cste)." },
  { id: 'f14', session: 1, front: "Qu'est-ce qu'une transformation adiabatique?", back: "Une transformation sans échange de chaleur avec le milieu extérieur (Q = 0)." },
  { id: 'f15', session: 1, front: "Qu'est-ce qu'une différentielle totale exacte (DTE)?", back: "Une forme différentielle dont l'intégration ne dépend pas du chemin suivi. Condition: ∂²f/∂x∂y = ∂²f/∂y∂x" },
  { id: 'f16', session: 1, front: "Qu'est-ce que le coefficient α (alpha)?", back: "Coefficient de dilatation isobare: α = (1/V)(∂V/∂T)P. Il caractérise la variation de volume avec la température à pression constante." },
  { id: 'f17', session: 1, front: "Qu'est-ce que le coefficient β (beta)?", back: "Coefficient d'augmentation de pression isochore: β = (1/P)(∂P/∂T)V. Il caractérise la variation de pression avec la température à volume constant." },
  { id: 'f18', session: 1, front: "Qu'est-ce que le coefficient χT (chi)?", back: "Coefficient de compressibilité isotherme: χT = -(1/V)(∂V/∂P)T. Il caractérise la variation de volume avec la pression à température constante." },
  
  // Session 2
  { id: 'f19', session: 2, front: "Qu'est-ce que la température?", back: "Une grandeur physique mesurable indirectement, liée à l'agitation moléculaire. Elle représente l'énergie moyenne d'une molécule." },
  { id: 'f20', session: 2, front: "Qu'est-ce qu'un thermomètre?", back: "Un système dans lequel une variable est maintenue constante tandis que l'autre dépend de la température." },
  { id: 'f21', session: 2, front: "Quels sont les deux points fixes de l'échelle centésimale?", back: "Fusion de la glace: θ = 0°C\nÉbullition de l'eau: θ = 100°C" },
  { id: 'f22', session: 2, front: "Qu'est-ce que le zéro absolu?", back: "La température correspondant à une agitation moléculaire nulle. T = 0 K = -273.15°C. Un corps à cette température ne peut céder de chaleur à aucun autre." },
  { id: 'f23', session: 2, front: "Qu'est-ce que le point triple de l'eau?", back: "Le point où coexistent les trois phases de l'eau en équilibre. T = 273.16 K (0.01°C), P = 611 Pa." },
  { id: 'f24', session: 2, front: "Comment convertir Celsius en Kelvin?", back: "T(K) = T(°C) + 273.15" },
  { id: 'f25', session: 2, front: "Qu'est-ce que le principe zéro de la thermodynamique?", back: "\"Deux systèmes en équilibre thermique avec un même troisième sont en équilibre thermique entre eux.\"" },
  { id: 'f26', session: 2, front: "Quelles sont les hypothèses du gaz parfait?", back: "1. Molécules ponctuelles (sans volume propre)\n2. Sans interaction (indépendantes)\n3. Chocs élastiques (conservation de l'énergie)" },
  { id: 'f27', session: 2, front: "Quelle est l'équation d'état du gaz parfait?", back: "PV = nRT, où R = 8.314 J·K⁻¹·mol⁻¹" },
  { id: 'f28', session: 2, front: "Quelle est la loi de Mariotte?", back: "À température constante: P₁V₁ = P₂V₂" },
  { id: 'f29', session: 2, front: "Quelle est la loi de Charles?", back: "À volume constant: P₁/T₁ = P₂/T₂" },
  { id: 'f30', session: 2, front: "Quelle est la loi de Gay-Lussac?", back: "À pression constante: V₁/T₁ = V₂/T₂" },
  { id: 'f31', session: 2, front: "Quelle est l'énergie cinétique moyenne d'une molécule?", back: "(1/2)m<v²> = (3/2)kT, où k = 1.38×10⁻²³ J/K (constante de Boltzmann)" },
  { id: 'f32', session: 2, front: "Qu'est-ce que le théorème d'équipartition?", back: "Chaque degré de liberté contribue (1/2)kT à l'énergie cinétique moyenne." },
  { id: 'f33', session: 2, front: "Quelle est la relation entre αV et αl?", back: "Pour un corps isotrope: αV = 3αl" },
  
  // Session 3
  { id: 'f34', session: 3, front: "Qu'est-ce que la chaleur?", back: "Énergie échangée entre deux corps de températures différentes mis en contact. À l'échelle microscopique: énergie cinétique échangée par agitation moléculaire." },
  { id: 'f35', session: 3, front: "Quels sont les trois modes de transfert de chaleur?", back: "1. Conduction: transfert par contact matériel\n2. Convection: transfert par mouvement de fluide\n3. Rayonnement: transfert par ondes EM" },
  { id: 'f36', session: 3, front: "Qu'est-ce que la capacité thermique CV?", back: "Capacité thermique à volume constant. δQV = CV dT. QV = m·cV·(T₂-T₁)" },
  { id: 'f37', session: 3, front: "Qu'est-ce que la capacité thermique CP?", back: "Capacité thermique à pression constante. δQP = CP dT. QP = m·cP·(T₂-T₁)" },
  { id: 'f38', session: 3, front: "Quelle est la relation de Mayer?", back: "CP - CV = nR (pour les gaz parfaits)" },
  { id: 'f39', session: 3, front: "Qu'est-ce que la chaleur latente?", back: "Quantité de chaleur nécessaire pour faire passer l'unité de masse d'un corps d'un état physique à un autre, à température constante. Q = m × L" },
  { id: 'f40', session: 3, front: "Quelle est la chaleur latente de fusion de la glace?", back: "L = 334 kJ/kg à 0°C" },
  { id: 'f41', session: 3, front: "Quelle est la chaleur latente de vaporisation de l'eau?", back: "L = 2260 kJ/kg à 100°C" },
  { id: 'f42', session: 3, front: "Qu'est-ce que la calorimétrie?", back: "Mesure des échanges de chaleur entre différents corps dans un système isolé. Principe: ΣQi = 0" },
  { id: 'f43', session: 3, front: "Quelle est l'expression du travail élémentaire?", back: "δW = -Pext · dV" },
  { id: 'f44', session: 3, front: "Quel est le travail d'une transformation isobare?", back: "W = -P(V₂-V₁)" },
  { id: 'f45', session: 3, front: "Quel est le travail d'une transformation isochore?", back: "W = 0 (pas de travail car le volume ne change pas)" },
  { id: 'f46', session: 3, front: "Quel est le travail d'une transformation isotherme réversible pour un gaz parfait?", back: "W = nRT · ln(V₂/V₁)" },
  { id: 'f47', session: 3, front: "Pourquoi le travail n'est-il pas une fonction d'état?", back: "Parce que W dépend du chemin suivi entre les états initial et final. Différents chemins donnent des valeurs de W différentes." }
];

// Quiz data
export const quizData = [
  // Session 1 Questions
  {
    id: 'q1',
    session: 1,
    question: "Un système qui échange uniquement de l'énergie avec l'extérieur est appelé:",
    options: ["Système ouvert", "Système fermé", "Système isolé", "Système adiabatique"],
    correctAnswer: 1,
    explanation: "Un système fermé échange de l'énergie (chaleur/travail) mais pas de matière avec l'extérieur."
  },
  {
    id: 'q2',
    session: 1,
    question: "Laquelle de ces variables est une variable intensive?",
    options: ["Volume", "Masse", "Température", "Nombre de particules"],
    correctAnswer: 2,
    explanation: "La température est intensive (indépendante de la masse), tandis que volume, masse et nombre de particules sont extensifs."
  },
  {
    id: 'q3',
    session: 1,
    question: "Une transformation isotherme s'effectue à:",
    options: ["Pression constante", "Volume constant", "Température constante", "Sans échange de chaleur"],
    correctAnswer: 2,
    explanation: "Isotherme signifie température constante (T = Cste)."
  },
  {
    id: 'q4',
    session: 1,
    question: "Lequel de ces éléments est une fonction d'état?",
    options: ["Travail W", "Chaleur Q", "Énergie interne U", "Aucun des trois"],
    correctAnswer: 2,
    explanation: "L'énergie interne U est une fonction d'état. W et Q sont des fonctions de transfert qui dépendent du chemin."
  },
  {
    id: 'q5',
    session: 1,
    question: "La condition pour qu'une différentielle soit totale exacte est:",
    options: ["∂²f/∂x² = ∂²f/∂y²", "∂²f/∂x∂y = ∂²f/∂y∂x", "∂f/∂x = ∂f/∂y", "df = 0"],
    correctAnswer: 1,
    explanation: "La condition de Schwartz: égalité des dérivées secondes croisées."
  },
  {
    id: 'q6',
    session: 1,
    question: "Une transformation adiabatique s'effectue:",
    options: ["À température constante", "À pression constante", "Sans échange de chaleur", "Sans échange de travail"],
    correctAnswer: 2,
    explanation: "Adiabatique signifie Q = 0 (aucun échange de chaleur avec l'extérieur)."
  },
  {
    id: 'q7',
    session: 1,
    question: "Selon la convention du banquier, si Q > 0:",
    options: ["Le système cède de la chaleur", "Le système reçoit de la chaleur", "Il n'y a pas d'échange", "La température diminue"],
    correctAnswer: 1,
    explanation: "Q > 0 signifie que le système reçoit de la chaleur (énergie positive = reçue)."
  },
  {
    id: 'q8',
    session: 1,
    question: "Le coefficient α (dilatation isobare) est défini par:",
    options: ["(1/V)(∂V/∂T)P", "(1/P)(∂P/∂T)V", "-(1/V)(∂V/∂P)T", "(∂V/∂T)P"],
    correctAnswer: 0,
    explanation: "α = (1/V)(∂V/∂T)P représente la variation relative de volume avec la température à pression constante."
  },
  
  // Session 2 Questions
  {
    id: 'q9',
    session: 2,
    question: "Le zéro absolu correspond à:",
    options: ["0°C", "273.15 K", "0 K", "-100°C"],
    correctAnswer: 2,
    explanation: "Le zéro absolu est T = 0 K, correspondant à -273.15°C, soit une agitation moléculaire nulle."
  },
  {
    id: 'q10',
    session: 2,
    question: "Le point triple de l'eau correspond à la température:",
    options: ["273.15 K", "273.16 K", "0 K", "373.15 K"],
    correctAnswer: 1,
    explanation: "Le point triple de l'eau est à T = 273.16 K (soit 0.01°C), où coexistent les trois phases."
  },
  {
    id: 'q11',
    session: 2,
    question: "Selon le principe zéro, si A et B sont en équilibre avec C:",
    options: ["A et B ont la même pression", "A et B sont en équilibre entre eux", "C est à température nulle", "A, B et C sont isolés"],
    correctAnswer: 1,
    explanation: "Le principe zéro établit que deux systèmes en équilibre avec un même troisième sont en équilibre entre eux."
  },
  {
    id: 'q12',
    session: 2,
    question: "La constante des gaz parfaits R vaut:",
    options: ["1.38×10⁻²³ J/K", "8.314 J·K⁻¹·mol⁻¹", "273.15 J/K", "22.414 L/mol"],
    correctAnswer: 1,
    explanation: "R = 8.314 J·K⁻¹·mol⁻¹. 1.38×10⁻²³ est la constante de Boltzmann k."
  },
  {
    id: 'q13',
    session: 2,
    question: "La loi de Mariotte s'applique à:",
    options: ["Température constante", "Volume constant", "Pression constante", "Transformation adiabatique"],
    correctAnswer: 0,
    explanation: "La loi de Mariotte (P₁V₁ = P₂V₂) s'applique à température constante."
  },
  {
    id: 'q14',
    session: 2,
    question: "Pour un gaz parfait monoatomique, l'énergie cinétique moyenne est:",
    options: ["(1/2)kT", "kT", "(3/2)kT", "(5/2)kT"],
    correctAnswer: 2,
    explanation: "Un gaz monoatomique a 3 degrés de liberté, donc Ec = 3 × (1/2)kT = (3/2)kT."
  },
  {
    id: 'q15',
    session: 2,
    question: "Le volume molaire d'un gaz parfait dans les conditions STP est:",
    options: ["22.414 L/mol", "8.314 L/mol", "273.15 L/mol", "1 L/mol"],
    correctAnswer: 0,
    explanation: "À 0°C et 1 atm, le volume molaire d'un gaz parfait est Vm = 22.414 L/mol."
  },
  {
    id: 'q16',
    session: 2,
    question: "Pour un corps isotrope, αV = ?",
    options: ["αl", "2αl", "3αl", "αl/3"],
    correctAnswer: 2,
    explanation: "Pour un corps isotrope, le coefficient de dilatation volumique vaut 3 fois le coefficient linéaire: αV = 3αl."
  },
  
  // Session 3 Questions
  {
    id: 'q17',
    session: 3,
    question: "La chaleur est:",
    options: ["Une fonction d'état", "Une énergie échangée par différence de température", "Toujours positive", "Identique à la température"],
    correctAnswer: 1,
    explanation: "La chaleur est une énergie échangée entre corps de températures différentes. Ce n'est pas une fonction d'état."
  },
  {
    id: 'q18',
    session: 3,
    question: "Le transfert de chaleur par convection s'effectue:",
    options: ["Par contact matériel", "Par mouvement de fluide", "Par ondes électromagnétiques", "Sans milieu matériel"],
    correctAnswer: 1,
    explanation: "La convection est le transport de chaleur par un fluide en mouvement."
  },
  {
    id: 'q19',
    session: 3,
    question: "La relation de Mayer pour les gaz parfaits est:",
    options: ["CP + CV = nR", "CP - CV = nR", "CP/CV = γ", "CP × CV = nR"],
    correctAnswer: 1,
    explanation: "La relation de Mayer: CP - CV = nR pour les gaz parfaits."
  },
  {
    id: 'q20',
    session: 3,
    question: "La chaleur latente de fusion de la glace est:",
    options: ["2260 kJ/kg", "334 kJ/kg", "4.186 kJ/kg", "273 kJ/kg"],
    correctAnswer: 1,
    explanation: "La chaleur latente de fusion de la glace à 0°C est L = 334 kJ/kg."
  },
  {
    id: 'q21',
    session: 3,
    question: "Le travail élémentaire des forces de pression est:",
    options: ["δW = P dV", "δW = -Pext dV", "δW = V dP", "δW = nRT dV"],
    correctAnswer: 1,
    explanation: "δW = -Pext · dV (travail élémentaire, négatif car le système fournit du travail quand le volume augmente)."
  },
  {
    id: 'q22',
    session: 3,
    question: "Dans une transformation isochore, le travail est:",
    options: ["W = -P(V₂-V₁)", "W = nRT·ln(V₂/V₁)", "W = 0", "W = PΔV"],
    correctAnswer: 2,
    explanation: "À volume constant (isochore), dV = 0, donc W = 0."
  },
  {
    id: 'q23',
    session: 3,
    question: "Le travail est une fonction d'état:",
    options: ["Vrai", "Faux", "Seulement pour les gaz parfaits", "Seulement à température constante"],
    correctAnswer: 1,
    explanation: "Faux. Le travail dépend du chemin suivi et n'est pas une fonction d'état."
  },
  {
    id: 'q24',
    session: 3,
    question: "Le principe de la calorimétrie est:",
    options: ["ΣQi > 0", "ΣQi = 0", "ΣQi < 0", "Qi = constante"],
    correctAnswer: 1,
    explanation: "Dans un système isolé, la somme des chaleurs échangées est nulle: ΣQi = 0."
  }
];

// Formulas data
export const formulasData = {
  general: [
    { name: "Équation d'état du gaz parfait", formula: "PV = nRT", variables: "P: Pression (Pa), V: Volume (m³), n: moles, R = 8.314 J·K⁻¹·mol⁻¹, T: Température (K)" },
    { name: "Équation d'état générale", formula: "f(P, V, T) = 0", variables: "Relation entre variables d'état" }
  ],
  temperature: [
    { name: "Conversion Kelvin-Celsius", formula: "T(K) = T(°C) + 273.15", variables: "" },
    { name: "Fonction thermométrique", formula: "T = (273.16/xtp) × x", variables: "xtp: valeur au point triple" },
    { name: "Coefficient de dilatation isobare", formula: "α = (1/V)(∂V/∂T)P", variables: "" },
    { name: "Dilatation linéaire", formula: "L = L₀(1 + αl·ΔT)", variables: "αl: coefficient linéaire" },
    { name: "Dilatation volumique", formula: "V = V₀(1 + αV·ΔT)", variables: "αV = 3αl pour corps isotrope" }
  ],
  travail: [
    { name: "Travail élémentaire", formula: "δW = -Pext · dV", variables: "" },
    { name: "Travail total", formula: "W = -∫Pext dV", variables: "Intégrale le long du chemin" },
    { name: "Travail isobare", formula: "W = -P(V₂-V₁)", variables: "P = constante" },
    { name: "Travail isochore", formula: "W = 0", variables: "V = constante" },
    { name: "Travail isotherme réversible", formula: "W = nRT·ln(V₂/V₁)", variables: "Gaz parfait, T = constante" }
  ],
  chaleur: [
    { name: "Chaleur à volume constant", formula: "QV = m·cV·(T₂-T₁)", variables: "cV: chaleur massique à V constant" },
    { name: "Chaleur à pression constante", formula: "QP = m·cP·(T₂-T₁)", variables: "cP: chaleur massique à P constant" },
    { name: "Chaleur latente", formula: "Q = m × L", variables: "L: chaleur latente massique (J/kg)" },
    { name: "Relation de Mayer", formula: "CP - CV = nR", variables: "Gaz parfaits" },
    { name: "Équation calorimétrique", formula: "ΣQi = 0", variables: "Système isolé" }
  ],
  step: [
    { name: "Coefficient de dilatation isobare", formula: "α = (1/V)(∂V/∂T)P", variables: "" },
    { name: "Coefficient d'augmentation de pression", formula: "β = (1/P)(∂P/∂T)V", variables: "" },
    { name: "Coefficient de compressibilité isotherme", formula: "χT = -(1/V)(∂V/∂P)T", variables: "" }
  ],
  gazParfait: [
    { name: "Loi de Mariotte", formula: "P₁V₁ = P₂V₂", variables: "T = constante" },
    { name: "Loi de Charles", formula: "P₁/T₁ = P₂/T₂", variables: "V = constante" },
    { name: "Loi de Gay-Lussac", formula: "V₁/T₁ = V₂/T₂", variables: "P = constante" },
    { name: "Énergie cinétique moyenne", formula: "(1/2)m<v²> = (3/2)kT", variables: "k = 1.38×10⁻²³ J/K" },
    { name: "Énergie par degré de liberté", formula: "(1/2)kT", variables: "Théorème d'équipartition" }
  ]
};
