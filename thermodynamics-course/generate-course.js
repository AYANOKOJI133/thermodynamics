const pptxgen = require('pptxgenjs');
const fs = require('fs');
const path = require('path');

// Forest Theme Colors (Educational/Courseware)
const THEME = {
  primary100: '#0B1E14',
  primary90: '#122D1F',
  primary80: '#1B4332',
  primary60: '#2E6B4F',
  primary40: '#60A882',
  primary20: '#A8D4BC',
  primary10: '#D8EEE2',
  primary5: '#EEF7F1',
  accent: '#DCBD74',
  accentB: '#E18C70',
  accentC: '#7EC8B0',
  white: '#FFFFFF',
  onDark: '#FFFFFF',
  onDarkSecondary: 'rgba(255,255,255,0.75)'
};

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_16x9';
pptx.title = 'Thermodynamique - Cours Complet';
pptx.author = 'Cours de Thermodynamique';

// Helper function to add a slide with dark header
function addContentSlide(title, content) {
  const slide = pptx.addSlide();
  
  // Header bar
  slide.addShape('rect', {
    x: 0, y: 0, w: '100%', h: 0.78,
    fill: { color: THEME.primary90 }
  });
  
  // Title
  slide.addText(title, {
    x: 0.67, y: 0.17, w: 9, h: 0.44,
    fontSize: 22, fontFace: 'Microsoft YaHei', bold: true,
    color: THEME.white
  });
  
  return slide;
}

// Helper function to add bullet points
function addBullets(slide, bullets, options = {}) {
  const startY = options.startY || 1.1;
  const x = options.x || 0.67;
  const w = options.w || 8.66;
  
  bullets.forEach((bullet, i) => {
    const y = startY + (i * 0.5);
    
    // Accent bar
    slide.addShape('rect', {
      x: x, y: y + 0.05, w: 0.04, h: 0.35,
      fill: { color: THEME.accent }
    });
    
    if (typeof bullet === 'object') {
      // Title + description
      slide.addText(bullet.title, {
        x: x + 0.17, y: y, w: w - 0.17, h: 0.25,
        fontSize: 15, fontFace: 'Microsoft YaHei', bold: true,
        color: THEME.primary80
      });
      slide.addText(bullet.desc, {
        x: x + 0.17, y: y + 0.25, w: w - 0.17, h: 0.25,
        fontSize: 14, fontFace: 'Microsoft YaHei',
        color: THEME.primary60
      });
    } else {
      // Simple text
      slide.addText(bullet, {
        x: x + 0.17, y: y, w: w - 0.17, h: 0.5,
        fontSize: 15, fontFace: 'Microsoft YaHei',
        color: THEME.primary60, valign: 'middle'
      });
    }
  });
}

// Helper for two-column layout
function addTwoColumns(slide, leftContent, rightContent, options = {}) {
  const y = options.y || 1.2;
  
  // Left column
  slide.addText(leftContent.title, {
    x: 0.67, y: y, w: 4, h: 0.4,
    fontSize: 18, fontFace: 'Microsoft YaHei', bold: true,
    color: THEME.primary80
  });
  slide.addText(leftContent.content, {
    x: 0.67, y: y + 0.5, w: 4, h: 2.5,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: THEME.primary60, valign: 'top'
  });
  
  // Divider
  slide.addShape('rect', {
    x: 4.9, y: y, w: 0.01, h: 3,
    fill: { color: THEME.primary10 }
  });
  
  // Right column
  slide.addText(rightContent.title, {
    x: 5.33, y: y, w: 4, h: 0.4,
    fontSize: 18, fontFace: 'Microsoft YaHei', bold: true,
    color: THEME.primary80
  });
  slide.addText(rightContent.content, {
    x: 5.33, y: y + 0.5, w: 4, h: 2.5,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: THEME.primary60, valign: 'top'
  });
}

// Helper for formula box
function addFormula(slide, formula, label, options = {}) {
  const x = options.x || 0.67;
  const y = options.y || 1.2;
  const w = options.w || 8.66;
  
  slide.addShape('rect', {
    x: x, y: y, w: w, h: 0.7,
    fill: { color: THEME.primary5 },
    line: { color: THEME.primary20, width: 1 }
  });
  
  slide.addText(formula, {
    x: x + 0.2, y: y + 0.1, w: w - 0.4, h: 0.5,
    fontSize: 18, fontFace: 'Cambria Math', bold: true,
    color: THEME.primary80, align: 'center'
  });
  
  if (label) {
    slide.addText(label, {
      x: x, y: y + 0.75, w: w, h: 0.3,
      fontSize: 12, fontFace: 'Microsoft YaHei',
      color: THEME.primary40, align: 'center'
    });
  }
}

// Helper for definition box
function addDefinition(slide, term, definition, options = {}) {
  const x = options.x || 0.67;
  const y = options.y || 1.2;
  const w = options.w || 8.66;
  
  // Box
  slide.addShape('rect', {
    x: x, y: y, w: w, h: 1.2,
    fill: { color: THEME.primary10 },
    line: { color: THEME.accent, width: 2 }
  });
  
  // Term
  slide.addText(term, {
    x: x + 0.2, y: y + 0.1, w: w - 0.4, h: 0.35,
    fontSize: 16, fontFace: 'Microsoft YaHei', bold: true,
    color: THEME.primary80
  });
  
  // Definition
  slide.addText(definition, {
    x: x + 0.2, y: y + 0.45, w: w - 0.4, h: 0.65,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: THEME.primary60
  });
}

// Helper for table
function addTable(slide, rows, options = {}) {
  const x = options.x || 0.67;
  const y = options.y || 1.2;
  const colW = options.colW || [2.5, 6.16];
  
  slide.addTable(rows, {
    x: x, y: y, w: 8.66,
    colW: colW,
    border: { pt: 0.5, color: THEME.primary20 },
    fontFace: 'Microsoft YaHei',
    fontSize: 12,
    color: THEME.primary60,
    align: 'left',
    valign: 'middle'
  });
}

// ============================================
// SLIDE GENERATION
// ============================================

// SLIDE 1: Title
let slide = pptx.addSlide();
slide.addShape('rect', { x: 0, y: 0, w: '100%', h: '100%', fill: { color: THEME.primary90 } });
slide.addShape('rect', { x: 0, y: 0, w: '100%', h: 0.06, fill: { color: THEME.accent } });
slide.addShape('ellipse', { x: 4.85, y: 1.5, w: 0.14, h: 0.14, fill: { color: THEME.accent } });
slide.addText('THERMODYNAMIQUE', {
  x: 0.5, y: 1.9, w: 9, h: 0.8,
  fontSize: 44, fontFace: 'Microsoft YaHei', bold: true,
  color: THEME.white, align: 'center'
});
slide.addShape('rect', { x: 4, y: 2.8, w: 2, h: 0.04, fill: { color: THEME.accent } });
slide.addText('Concepts Fondamentaux, Température, Échanges d\'Énergie', {
  x: 0.5, y: 3, w: 9, h: 0.5,
  fontSize: 20, fontFace: 'Microsoft YaHei',
  color: THEME.onDarkSecondary, align: 'center'
});
slide.addText('Cours Complet - 3 Séances', {
  x: 0.5, y: 3.6, w: 9, h: 0.4,
  fontSize: 14, fontFace: 'Microsoft YaHei',
  color: THEME.primary40, align: 'center'
});

// SLIDE 2: Course Roadmap
slide = pptx.addSlide();
slide.addShape('rect', { x: 0, y: 0, w: '100%', h: 0.78, fill: { color: THEME.primary90 } });
slide.addText('Plan du Cours', {
  x: 0.67, y: 0.17, w: 9, h: 0.44,
  fontSize: 24, fontFace: 'Microsoft YaHei', bold: true, color: THEME.white
});

// Timeline
const sessions = [
  { num: '01', title: 'Séance 1', desc: 'Concepts Fondamentaux\nSystèmes, Variables d\'état\nTransformations, Outils mathématiques' },
  { num: '02', title: 'Séance 2', desc: 'Température et Dilatation\nÉchelles de température\nPrincipe zéro, Gaz parfait' },
  { num: '03', title: 'Séance 3', desc: 'Travail et Chaleur\nÉchanges d\'énergie\nCalorimétrie' }
];

// Timeline line
slide.addShape('rect', { x: 1.5, y: 2.5, w: 7, h: 0.03, fill: { color: THEME.primary20 } });

sessions.forEach((s, i) => {
  const x = 1.5 + (i * 2.8);
  
  // Circle
  slide.addShape('ellipse', { x: x + 0.55, y: 2.35, w: 0.35, h: 0.35, fill: { color: THEME.accent } });
  slide.addText(s.num, { x: x + 0.55, y: 2.38, w: 0.35, h: 0.3, fontSize: 12, bold: true, color: THEME.white, align: 'center' });
  
  // Title
  slide.addText(s.title, { x: x, y: 2.9, w: 1.5, h: 0.35, fontSize: 16, bold: true, color: THEME.primary80, align: 'center' });
  
  // Description
  slide.addText(s.desc, { x: x - 0.3, y: 3.3, w: 2.1, h: 1.2, fontSize: 11, color: THEME.primary60, align: 'center' });
});

// SLIDE 3: References
slide = addContentSlide('Références Bibliographiques', []);
slide.addText('Ouvrages recommandés pour approfondir le cours :', {
  x: 0.67, y: 1.1, w: 8.66, h: 0.4,
  fontSize: 16, fontFace: 'Microsoft YaHei', bold: true, color: THEME.primary80
});

const refs = [
  { title: 'Thermodynamique - Bases et Applications', author: 'Jean-Noël Foussard, Edmond Julien', edition: 'DUNOD' },
  { title: 'Thermodynamique - Fondements et Applications', author: 'José-Philippe PEREZ', edition: 'DUNOD' }
];

refs.forEach((ref, i) => {
  const y = 1.7 + (i * 1.2);
  slide.addShape('rect', { x: 0.67, y: y, w: 8.66, h: 1, fill: { color: THEME.primary5 }, line: { color: THEME.primary20, width: 1 } });
  slide.addText(ref.title, { x: 0.87, y: y + 0.15, w: 8.26, h: 0.35, fontSize: 15, bold: true, color: THEME.primary80 });
  slide.addText(`Auteur: ${ref.author}  |  Édition: ${ref.edition}`, { x: 0.87, y: y + 0.55, w: 8.26, h: 0.3, fontSize: 12, color: THEME.primary60 });
});

// ============================================
// SECTION DIVIDER: SÉANCE 1
// ============================================
slide = pptx.addSlide();
slide.addShape('rect', { x: 0, y: 0, w: '100%', h: '100%', fill: { color: THEME.primary80 } });
slide.addShape('rect', { x: 0, y: 0, w: 4, h: '100%', fill: { color: THEME.primary90 } });
slide.addText('SÉANCE 1', { x: 0.5, y: 1.5, w: 3, h: 0.5, fontSize: 14, color: THEME.accent, bold: true });
slide.addText('Concepts\nFondamentaux\nde la\nThermodynamique', { x: 0.5, y: 2, w: 3, h: 1.8, fontSize: 24, bold: true, color: THEME.white });
slide.addText('2 heures', { x: 0.5, y: 4, w: 3, h: 0.3, fontSize: 12, color: THEME.onDarkSecondary });

// SLIDE: Introduction à la Thermodynamique
slide = addContentSlide('Introduction à la Thermodynamique', []);
addDefinition(slide, 'Définition', 'La thermodynamique est la science qui étudie les transformations de la matière et de l\'énergie. Elle est née vers 1820, au début de l\'ère industrielle, de la nécessité de comprendre les relations entre les phénomènes thermiques et dynamiques dans les machines thermiques.', { y: 1.1 });

slide.addText('Caractère universel :', {
  x: 0.67, y: 2.5, w: 8.66, h: 0.35,
  fontSize: 15, fontFace: 'Microsoft YaHei', bold: true, color: THEME.primary80
});

slide.addText('La thermodynamique possède un caractère universel. Toute théorie ne vérifiant pas les principes de la thermodynamique est mise en doute. Dans tous les phénomènes, organismes, dispositifs, machines, systèmes et procédés, il y a inévitablement conversion d\'au moins une forme d\'énergie en une autre.', {
  x: 0.67, y: 2.9, w: 8.66, h: 1,
  fontSize: 14, fontFace: 'Microsoft YaHei', color: THEME.primary60
});

// SLIDE: Citation d'Einstein
slide = pptx.addSlide();
slide.addShape('rect', { x: 0, y: 0, w: '100%', h: '100%', fill: { color: THEME.primary90 } });
slide.addShape('rect', { x: 0, y: 0, w: '100%', h: 0.06, fill: { color: THEME.accent } });
slide.addText('"Une théorie est d\'autant plus impressionnante que les principes sur lesquels elle repose sont simples, qu\'elle relie toutes sortes de choses différentes et que son champ d\'application est vaste."', {
  x: 0.8, y: 1.2, w: 8.4, h: 1.5,
  fontSize: 20, fontFace: 'Microsoft YaHei', italic: true, color: THEME.white, align: 'center'
});
slide.addText('« Par conséquent, la thermodynamique classique m\'a fait une très grande impression. C\'est la seule théorie physique à caractère universel dont je suis convaincu, compte tenu de l\'application de ses concepts de base, qu\'elle ne sera jamais contestée. »', {
  x: 0.8, y: 2.8, w: 8.4, h: 1,
  fontSize: 16, fontFace: 'Microsoft YaHei', color: THEME.onDarkSecondary, align: 'center'
});
slide.addText('— Albert Einstein', {
  x: 0.8, y: 4, w: 8.4, h: 0.4,
  fontSize: 14, fontFace: 'Microsoft YaHei', bold: true, color: THEME.accent, align: 'center'
});

// SLIDE: Deux approches
slide = addContentSlide('Approches en Thermodynamique', []);
addTwoColumns(slide, 
  { title: 'Approche Macroscopique', content: 'Basée sur des grandeurs mesurables à grande échelle :\n\n• Pression P\n• Volume V\n• Température T\n• Quantité de matière n\n\nCette approche décrit le comportement d\'ensemble du système sans se soucier du comportement individuel des particules.' },
  { title: 'Approche Microscopique', content: 'Analyse le comportement des particules élémentaires :\n\n• Positions des molécules\n• Vitesses des molécules\n\nAppelée aussi thermodynamique statistique, elle permet de comprendre les phénomènes à l\'échelle atomique et moléculaire.' }
);

// SLIDE: Notion de Système - Définition
slide = addContentSlide('Notion de Système Thermodynamique', []);
addDefinition(slide, 'Système Thermodynamique', 'Un système thermodynamique est une partie de l\'univers à laquelle on porte de l\'intérêt. Il est constitué d\'un grand nombre de particules microscopiques (atomes ou molécules) délimitées par une surface fixe ou mobile, fictive ou réelle, à travers laquelle sont susceptibles de s\'effectuer des échanges d\'énergie et de matière avec le milieu extérieur.', { y: 1.1, h: 1.4 });

slide.addText('Le reste de l\'univers est appelé « milieu extérieur ». La frontière séparant le système du milieu extérieur peut être :', {
  x: 0.67, y: 2.7, w: 8.66, h: 0.4,
  fontSize: 14, fontFace: 'Microsoft YaHei', color: THEME.primary60
});

addBullets(slide, [
  { title: 'Réalité physique', desc: 'Paroi matérielle (paroi d\'un cylindre, membrane...)' },
  { title: 'Fictive', desc: 'Limite géométrique imaginaire délimitant une zone d\'étude' }
], { startY: 3.2 });

// SLIDE: Types de Systèmes
slide = addContentSlide('Types de Systèmes Thermodynamiques', []);

const systemTypes = [
  { type: 'Système Ouvert', exchanges: 'Échange matière ET énergie', example: 'Bois qui brûle, moteur thermique', color: THEME.accent },
  { type: 'Système Fermé', exchanges: 'Échange d\'énergie SEULEMENT', example: 'Gaz dans un cylindre, réfrigérateur', color: THEME.accentB },
  { type: 'Système Isolé', exchanges: 'AUCUN échange', example: 'L\'Univers (exemple unique)', color: THEME.primary60 }
];

systemTypes.forEach((s, i) => {
  const y = 1.1 + (i * 1.15);
  
  // Card
  slide.addShape('rect', { x: 0.67, y: y, w: 8.66, h: 1, fill: { color: THEME.primary5 }, line: { color: s.color, width: 2, dashType: 'solid' } });
  
  // Left accent bar
  slide.addShape('rect', { x: 0.67, y: y, w: 0.06, h: 1, fill: { color: s.color } });
  
  // Type
  slide.addText(s.type, { x: 0.9, y: y + 0.1, w: 3, h: 0.35, fontSize: 16, bold: true, color: THEME.primary80 });
  
  // Exchanges
  slide.addText(s.exchanges, { x: 0.9, y: y + 0.45, w: 4, h: 0.25, fontSize: 13, color: THEME.primary60 });
  
  // Example
  slide.addText(`Exemple : ${s.example}`, { x: 5, y: y + 0.35, w: 4, h: 0.35, fontSize: 12, color: THEME.primary40, italic: true });
});

// SLIDE: Convention du Banquier
slide = addContentSlide('Convention du Banquier - Signes des Échanges', []);

slide.addText('Les échanges d\'énergie entre le système et le milieu extérieur s\'effectuent par transfert de travail W ou de chaleur Q. Le signe de ces quantités est défini conventionnellement :', {
  x: 0.67, y: 1.1, w: 8.66, h: 0.6,
  fontSize: 14, fontFace: 'Microsoft YaHei', color: THEME.primary60
});

// Two boxes
slide.addShape('rect', { x: 0.67, y: 1.9, w: 4, h: 1.5, fill: { color: THEME.primary10 }, line: { color: THEME.accentC, width: 2 } });
slide.addText('Q > 0, W > 0', { x: 0.87, y: 2.05, w: 3.6, h: 0.35, fontSize: 18, bold: true, color: THEME.primary80, align: 'center' });
slide.addText('Énergie REÇUE par le système\n\nLe système « s\'enrichit » en énergie', { x: 0.87, y: 2.45, w: 3.6, h: 0.85, fontSize: 12, color: THEME.primary60, align: 'center' });

slide.addShape('rect', { x: 5.33, y: 1.9, w: 4, h: 1.5, fill: { color: THEME.primary5 }, line: { color: THEME.accentB, width: 2 } });
slide.addText('Q < 0, W < 0', { x: 5.53, y: 2.05, w: 3.6, h: 0.35, fontSize: 18, bold: true, color: THEME.primary80, align: 'center' });
slide.addText('Énergie CÉDÉE par le système\n\nLe système « s\'appauvrit » en énergie', { x: 5.53, y: 2.45, w: 3.6, h: 0.85, fontSize: 12, color: THEME.primary60, align: 'center' });

slide.addText('💡 Analogie : Comme un compte bancaire, ce qui est reçu est positif (dépôt), ce qui est cédé est négatif (retrait).', {
  x: 0.67, y: 3.6, w: 8.66, h: 0.5,
  fontSize: 13, fontFace: 'Microsoft YaHei', italic: true, color: THEME.primary40
});

// SLIDE: Variables d'État
slide = addContentSlide('Variables d\'État et Équation d\'État', []);

addDefinition(slide, 'Variables d\'état', 'Ce sont des grandeurs mesurables (P, V, T, n...) capables de décrire complètement l\'état d\'un système à un instant donné. Connaître l\'état d\'un système, c\'est déterminer les valeurs de ces variables.', { y: 1.1 });

slide.addText('Les variables d\'état ne sont pas toutes indépendantes. Elles peuvent être liées par une relation appelée équation d\'état :', {
  x: 0.67, y: 2.5, w: 8.66, h: 0.4,
  fontSize: 14, fontFace: 'Microsoft YaHei', color: THEME.primary60
});

addFormula(slide, 'f(P, V, T, ...) = 0', 'Équation d\'état', { y: 3 });

slide.addText('Exemple fondamental - Gaz Parfait :', {
  x: 0.67, y: 4, w: 8.66, h: 0.3,
  fontSize: 14, fontFace: 'Microsoft YaHei', bold: true, color: THEME.primary80
});
addFormula(slide, 'PV - nRT = 0   ou   PV = nRT', 'Équation d\'état du gaz parfait', { y: 4.35 });

// SLIDE: Variables Extensives et Intensives
slide = addContentSlide('Variables Extensives et Intensives', []);

addTwoColumns(slide,
  { title: 'Variables Extensives', content: 'Proportionnelles à la masse du système.\n\nElles sont ADDITIVES lors de la réunion de deux systèmes de même nature.\n\nExemples :\n• Masse (m)\n• Volume (V)\n• Nombre de particules (N)\n• Énergie interne (U)\n\n📐 Si on double la masse, ces grandeurs doublent aussi.' },
  { title: 'Variables Intensives', content: 'Indépendantes de la masse du système.\n\nElles ont la même valeur en tout point d\'un système homogène à l\'équilibre.\n\nExemples :\n• Température (T)\n• Pression (P)\n• Masse volumique (ρ)\n• Potentiel chimique (μ)\n\n🌡️ Si on divise le système, ces grandeurs restent identiques.' }
);

// SLIDE: Exemple Pratique
slide = addContentSlide('Exemple Pratique : Extensif vs Intensif', []);

slide.addShape('rect', { x: 0.67, y: 1.1, w: 8.66, h: 2.5, fill: { color: THEME.primary5 } });

// Before
slide.addText('AVANT', { x: 1, y: 1.2, w: 2.5, h: 0.3, fontSize: 12, bold: true, color: THEME.accent, align: 'center' });
slide.addShape('rect', { x: 1.2, y: 1.6, w: 2, h: 1.2, fill: { color: THEME.accentC }, line: { color: THEME.primary80, width: 1 } });
slide.addText('1 litre d\'eau\nà 300 K', { x: 1.2, y: 1.9, w: 2, h: 0.6, fontSize: 11, color: THEME.primary80, align: 'center' });

slide.addText('+', { x: 3.4, y: 2, w: 0.5, h: 0.5, fontSize: 24, bold: true, color: THEME.primary60, align: 'center' });

slide.addShape('rect', { x: 4.1, y: 1.6, w: 2, h: 1.2, fill: { color: THEME.accentC }, line: { color: THEME.primary80, width: 1 } });
slide.addText('1 litre d\'eau\nà 300 K', { x: 4.1, y: 1.9, w: 2, h: 0.6, fontSize: 11, color: THEME.primary80, align: 'center' });

// Arrow
slide.addText('→', { x: 6.3, y: 2, w: 0.5, h: 0.5, fontSize: 24, bold: true, color: THEME.primary60, align: 'center' });

// After
slide.addText('APRÈS', { x: 7, y: 1.2, w: 2, h: 0.3, fontSize: 12, bold: true, color: THEME.accent, align: 'center' });
slide.addShape('rect', { x: 7, y: 1.6, w: 2, h: 1.2, fill: { color: THEME.accentC }, line: { color: THEME.primary80, width: 1 } });
slide.addText('2 litres d\'eau\nà 300 K', { x: 7, y: 1.9, w: 2, h: 0.6, fontSize: 11, color: THEME.primary80, align: 'center' });

// Conclusion boxes
slide.addShape('rect', { x: 0.67, y: 3.8, w: 4, h: 0.7, fill: { color: THEME.primary10 }, line: { color: THEME.accent, width: 1 } });
slide.addText('VOLUME (extensif)\n1 L + 1 L = 2 L ✓', { x: 0.87, y: 3.9, w: 3.6, h: 0.5, fontSize: 13, color: THEME.primary80, align: 'center' });

slide.addShape('rect', { x: 5.33, y: 3.8, w: 4, h: 0.7, fill: { color: THEME.primary10 }, line: { color: THEME.accent, width: 1 } });
slide.addText('TEMPÉRATURE (intensive)\n300 K = 300 K (inchangée) ✓', { x: 5.53, y: 3.9, w: 3.6, h: 0.5, fontSize: 13, color: THEME.primary80, align: 'center' });

// SLIDE: Fonctions d'État
slide = addContentSlide('Fonctions d\'État vs Fonctions de Transfert', []);

addDefinition(slide, 'Fonction d\'état', 'Une grandeur dont la variation entre deux états dépend uniquement des états initial et final, et NON du chemin suivi. La différentielle d\'une fonction d\'état est une différentielle totale exacte (DTE).', { y: 1.1, h: 1.1 });

slide.addText('Exemples de fonctions d\'état :', { x: 0.67, y: 2.4, w: 4, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80 });
slide.addText('• Énergie interne (U)\n• Enthalpie (H)\n• Entropie (S)\n• Pression, Volume, Température', { x: 0.67, y: 2.75, w: 4, h: 1, fontSize: 13, color: THEME.primary60 });

slide.addText('Exemples de fonctions de transfert :', { x: 5.33, y: 2.4, w: 4, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80 });
slide.addText('• Travail (W)\n• Chaleur (Q)\n\n⚠️ Ces grandeurs dépendent du chemin suivi !', { x: 5.33, y: 2.75, w: 4, h: 1, fontSize: 13, color: THEME.primary60 });

// Key point
slide.addShape('rect', { x: 0.67, y: 4, w: 8.66, h: 0.5, fill: { color: THEME.accentC + '40' } });
slide.addText('💡 Δf = f₂ - f₁ = Cste quelque soit le chemin suivi (pour une fonction d\'état)', { x: 0.87, y: 4.1, w: 8.26, h: 0.3, fontSize: 13, bold: true, color: THEME.primary80 });

// SLIDE: Représentation Graphique
slide = addContentSlide('Représentation Graphique des États', []);

slide.addText('Les états d\'un système peuvent être représentés par des points dans des diagrammes thermodynamiques :', {
  x: 0.67, y: 1.1, w: 8.66, h: 0.4,
  fontSize: 14, fontFace: 'Microsoft YaHei', color: THEME.primary60
});

const diagrams = [
  { name: 'Diagramme de Clapeyron', axes: 'P en fonction de V', desc: 'Le plus utilisé pour représenter les transformations' },
  { name: 'Diagramme (P, T)', axes: 'P en fonction de T', desc: 'Utile pour les changements de phase' },
  { name: 'Diagramme (V, T)', axes: 'V en fonction de T', desc: 'Montre la dilatation thermique' }
];

diagrams.forEach((d, i) => {
  const x = 0.67 + (i * 3);
  slide.addShape('rect', { x: x, y: 1.6, w: 2.8, h: 1.5, fill: { color: THEME.primary5 }, line: { color: THEME.primary20, width: 1 } });
  slide.addText(d.name, { x: x + 0.1, y: 1.7, w: 2.6, h: 0.35, fontSize: 13, bold: true, color: THEME.primary80, align: 'center' });
  slide.addText(d.axes, { x: x + 0.1, y: 2.1, w: 2.6, h: 0.3, fontSize: 11, color: THEME.accent, align: 'center' });
  slide.addText(d.desc, { x: x + 0.1, y: 2.5, w: 2.6, h: 0.5, fontSize: 10, color: THEME.primary60, align: 'center' });
});

slide.addText('Dans le diagramme de Clapeyron, un état A est caractérisé par (PA, VA, TA) et un état B par (PB, VB, TB).', {
  x: 0.67, y: 3.4, w: 8.66, h: 0.4,
  fontSize: 13, fontFace: 'Microsoft YaHei', color: THEME.primary40, italic: true
});

// SLIDE: État d'Équilibre
slide = addContentSlide('État d\'Équilibre Thermodynamique', []);

addDefinition(slide, 'Équilibre Thermodynamique', 'Un système est en équilibre lorsque ses variables d\'état ne varient pas dans le temps ET sont uniformes dans tout le système.', { y: 1.1 });

slide.addText('Types d\'équilibre :', { x: 0.67, y: 2.2, w: 8.66, h: 0.3, fontSize: 15, bold: true, color: THEME.primary80 });

const equilibres = [
  { type: 'Équilibre Thermique', desc: 'Température constante et uniforme en tout point du système' },
  { type: 'Équilibre Mécanique', desc: 'Pression constante et uniforme en tout point du système' }
];

equilibres.forEach((e, i) => {
  const y = 2.6 + (i * 0.8);
  slide.addShape('rect', { x: 0.67, y: y, w: 8.66, h: 0.7, fill: { color: THEME.primary5 } });
  slide.addShape('rect', { x: 0.67, y: y, w: 0.05, h: 0.7, fill: { color: THEME.accent } });
  slide.addText(e.type, { x: 0.9, y: y + 0.1, w: 3, h: 0.25, fontSize: 14, bold: true, color: THEME.primary80 });
  slide.addText(e.desc, { x: 0.9, y: y + 0.35, w: 8, h: 0.25, fontSize: 12, color: THEME.primary60 });
});

// SLIDE: Transformations - Vue d'ensemble
slide = addContentSlide('Transformations Thermodynamiques', []);

slide.addText('Une transformation fait passer un système d\'un état initial à un état final. Il existe plusieurs types de transformations :', {
  x: 0.67, y: 1.1, w: 8.66, h: 0.4,
  fontSize: 14, fontFace: 'Microsoft YaHei', color: THEME.primary60
});

const transformations = [
  { type: 'Quasi-statique', desc: 'Suite continue d\'états d\'équilibre interne. À tout instant, les variables sont définies.' },
  { type: 'Réversible', desc: 'Succession d\'états d\'équilibre infiniment voisins. La transformation inverse passe par les mêmes états.' },
  { type: 'Irréversible', desc: 'Transformation brutale ou spontanée. Les états intermédiaires ne sont pas des états d\'équilibre.' }
];

transformations.forEach((t, i) => {
  const y = 1.6 + (i * 1);
  slide.addShape('rect', { x: 0.67, y: y, w: 8.66, h: 0.9, fill: { color: THEME.primary5 }, line: { color: THEME.primary20, width: 1 } });
  slide.addText(t.type, { x: 0.87, y: y + 0.1, w: 2.5, h: 0.3, fontSize: 15, bold: true, color: THEME.primary80 });
  slide.addText(t.desc, { x: 0.87, y: y + 0.45, w: 8.26, h: 0.35, fontSize: 12, color: THEME.primary60 });
});

slide.addText('⚠️ Important : Une transformation quasi-statique n\'est pas nécessairement réversible !', {
  x: 0.67, y: 4.2, w: 8.66, h: 0.3,
  fontSize: 12, fontFace: 'Microsoft YaHei', italic: true, color: THEME.accentB
});

// SLIDE: Transformations Particulières
slide = addContentSlide('Transformations Particulières', []);

const transPart = [
  { name: 'Isochore', condition: 'V = Cste', desc: 'Volume constant', color: THEME.accent },
  { name: 'Isobare', condition: 'P = Cste', desc: 'Pression constante', color: THEME.accentB },
  { name: 'Isotherme', condition: 'T = Cste', desc: 'Température constante', color: THEME.accentC },
  { name: 'Adiabatique', condition: 'Q = 0', desc: 'Aucun échange de chaleur', color: THEME.primary60 },
  { name: 'Cyclique', condition: 'État final = État initial', desc: 'Retour à l\'état initial', color: THEME.primary40 }
];

transPart.forEach((t, i) => {
  const row = Math.floor(i / 3);
  const col = i % 3;
  const x = 0.67 + (col * 3);
  const y = 1.1 + (row * 1.5);
  
  slide.addShape('rect', { x: x, y: y, w: 2.8, h: 1.3, fill: { color: THEME.primary5 }, line: { color: t.color, width: 2 } });
  slide.addText(t.name, { x: x + 0.1, y: y + 0.1, w: 2.6, h: 0.35, fontSize: 14, bold: true, color: THEME.primary80, align: 'center' });
  slide.addText(t.condition, { x: x + 0.1, y: y + 0.5, w: 2.6, h: 0.3, fontSize: 13, color: t.color, align: 'center', bold: true });
  slide.addText(t.desc, { x: x + 0.1, y: y + 0.85, w: 2.6, h: 0.3, fontSize: 11, color: THEME.primary60, align: 'center' });
});

// SLIDE: Outils Mathématiques - Différentielle
slide = addContentSlide('Outils Mathématiques : Différentielle Totale', []);

slide.addText('Pour une fonction f(x, y) continue et dérivable, la différentielle totale s\'écrit :', {
  x: 0.67, y: 1.1, w: 8.66, h: 0.35,
  fontSize: 14, fontFace: 'Microsoft YaHei', color: THEME.primary60
});

addFormula(slide, 'df = (∂f/∂x)dx + (∂f/∂y)dy', 'Différentielle totale de f', { y: 1.55 });

slide.addText('Condition pour qu\'une forme différentielle soit une différentielle totale exacte (DTE) :', {
  x: 0.67, y: 2.6, w: 8.66, h: 0.35,
  fontSize: 14, fontFace: 'Microsoft YaHei', bold: true, color: THEME.primary80
});

addFormula(slide, '∂²f/∂x∂y = ∂²f/∂y∂x', 'Condition de Schwartz (égalité des dérivées secondes croisées)', { y: 3 });

slide.addText('Interprétation physique : Si df est une DTE, alors ∫df ne dépend pas du chemin suivi entre A et B.', {
  x: 0.67, y: 4.1, w: 8.66, h: 0.4,
  fontSize: 13, fontFace: 'Microsoft YaHei', color: THEME.primary40, italic: true
});

// SLIDE: Forme Différentielle vs DTE
slide = addContentSlide('Différentielle Totale Exacte vs Forme Différentielle', []);

addTwoColumns(slide,
  { title: 'Différentielle Totale Exacte (df)', content: '✓ Intégration ne dépend PAS du chemin suivi\n\n✓ La grandeur f est une fonction d\'état\n\n✓ ∂²f/∂x∂y = ∂²f/∂y∂x\n\nExemples :\n• dU (énergie interne)\n• dH (enthalpie)\n• dS (entropie)' },
  { title: 'Forme Différentielle (δf)', content: '✗ Intégration DÉPEND du chemin suivi\n\n✗ La grandeur f n\'est PAS une fonction d\'état\n\n✗ ∂²f/∂x∂y ≠ ∂²f/∂y∂x\n\nExemples :\n• δW (travail)\n• δQ (chaleur)' }
);

slide.addShape('rect', { x: 0.67, y: 4, w: 8.66, h: 0.45, fill: { color: THEME.accent + '30' } });
slide.addText('💡 Notation : On utilise df pour une DTE et δf pour une forme différentielle (non exacte).', { x: 0.87, y: 4.1, w: 8.26, h: 0.25, fontSize: 12, bold: true, color: THEME.primary80 });

// SLIDE: Systèmes Thermo-élastiques (STEP)
slide = addContentSlide('Systèmes Thermo-élastiques Physiques (STEP)', []);

addDefinition(slide, 'S.T.E.P.', 'Ce sont des systèmes homogènes (gaz ou liquides) :\n• Inertes chimiquement (pas de réaction)\n• Composition constante (système fermé)\n• Échanges de travail uniquement mécaniques\n• Décrits par les variables P, V, T', { y: 1.1, h: 1.3 });

slide.addText('Coefficients thermoélastiques :', { x: 0.67, y: 2.6, w: 8.66, h: 0.35, fontSize: 15, bold: true, color: THEME.primary80 });

const coeffs = [
  { symbol: 'α', name: 'Dilatation isobare', formula: 'α = (1/V)(∂V/∂T)ᵖ', desc: 'À pression constante' },
  { symbol: 'β', name: 'Augmentation de pression', formula: 'β = (1/P)(∂P/∂T)ᵥ', desc: 'À volume constant' },
  { symbol: 'χT', name: 'Compressibilité isotherme', formula: 'χT = -(1/V)(∂V/∂P)ᵀ', desc: 'À température constante' }
];

coeffs.forEach((c, i) => {
  const y = 3.05 + (i * 0.55);
  slide.addShape('rect', { x: 0.67, y: y, w: 0.5, h: 0.5, fill: { color: THEME.accent } });
  slide.addText(c.symbol, { x: 0.67, y: y + 0.05, w: 0.5, h: 0.4, fontSize: 16, bold: true, color: THEME.white, align: 'center' });
  slide.addText(c.name, { x: 1.27, y: y, w: 3, h: 0.25, fontSize: 12, bold: true, color: THEME.primary80 });
  slide.addText(c.formula, { x: 1.27, y: y + 0.25, w: 4, h: 0.25, fontSize: 12, color: THEME.primary60, fontFace: 'Cambria Math' });
  slide.addText(c.desc, { x: 6, y: y + 0.1, w: 3, h: 0.3, fontSize: 11, color: THEME.primary40, italic: true });
});

// ============================================
// SECTION DIVIDER: SÉANCE 2
// ============================================
slide = pptx.addSlide();
slide.addShape('rect', { x: 0, y: 0, w: '100%', h: '100%', fill: { color: THEME.primary80 } });
slide.addShape('rect', { x: 0, y: 0, w: 4, h: '100%', fill: { color: THEME.primary90 } });
slide.addText('SÉANCE 2', { x: 0.5, y: 1.5, w: 3, h: 0.5, fontSize: 14, color: THEME.accent, bold: true });
slide.addText('Température\net\nDilatation\nThermique', { x: 0.5, y: 2, w: 3, h: 1.8, fontSize: 24, bold: true, color: THEME.white });
slide.addText('2 heures', { x: 0.5, y: 4, w: 3, h: 0.3, fontSize: 12, color: THEME.onDarkSecondary });

// SLIDE: Définition de la Température
slide = addContentSlide('Définition de la Température', []);

addDefinition(slide, 'Température', 'La température est une grandeur physique mesurable indirectement. Elle est liée à l\'état microscopique de la matière, c\'est-à-dire à l\'agitation moléculaire. Elle représente l\'énergie moyenne d\'une molécule.', { y: 1.1 });

slide.addText('On peut définir la température comme une fonction de deux variables d\'état :', {
  x: 0.67, y: 2.4, w: 8.66, h: 0.35,
  fontSize: 14, fontFace: 'Microsoft YaHei', color: THEME.primary60
});

addFormula(slide, 'θ = f(x, y)', 'Température comme fonction de variables d\'état', { y: 2.85 });

slide.addText('Un thermomètre est un système dans lequel une variable est maintenue constante tandis que l\'autre dépend de la température :', {
  x: 0.67, y: 3.8, w: 8.66, h: 0.35,
  fontSize: 13, fontFace: 'Microsoft YaHei', color: THEME.primary60
});

addFormula(slide, 'θ = f(x)', 'avec y = constante', { y: 4.2 });

// SLIDE: Variables Thermométriques
slide = addContentSlide('Variables Thermométriques', []);

slide.addText('Différentes grandeurs physiques peuvent servir de variables thermométriques x :', {
  x: 0.67, y: 1.1, w: 8.66, h: 0.35,
  fontSize: 14, fontFace: 'Microsoft YaHei', color: THEME.primary60
});

const varThermo = [
  { var: 'Volume V', type: 'Thermomètre à liquide', ex: 'Mercure, alcool' },
  { var: 'Pression P', type: 'Thermomètre à gaz', ex: 'Gaz parfait' },
  { var: 'Résistance R', type: 'Thermomètre à résistance', ex: 'Platine, thermistance' },
  { var: 'Force électromotrice E', type: 'Thermocouple', ex: 'Jonction de métaux différents' },
  { var: 'Flux thermique Φ', type: 'Mesures optiques', ex: 'Pyromètre' },
  { var: 'Capacité électrique C', type: 'Capteur capacitif', ex: 'Semiconducteur' }
];

varThermo.forEach((v, i) => {
  const col = i % 2;
  const row = Math.floor(i / 2);
  const x = 0.67 + (col * 4.5);
  const y = 1.6 + (row * 0.85);
  
  slide.addShape('rect', { x: x, y: y, w: 4.2, h: 0.75, fill: { color: THEME.primary5 }, line: { color: THEME.primary20, width: 1 } });
  slide.addText(v.var, { x: x + 0.1, y: y + 0.05, w: 1.5, h: 0.3, fontSize: 13, bold: true, color: THEME.primary80 });
  slide.addText(v.type, { x: x + 0.1, y: y + 0.38, w: 4, h: 0.3, fontSize: 11, color: THEME.primary60 });
});

// SLIDE: Échelle Centésimale
slide = addContentSlide('Échelle Centésimale (Celsius)', []);

slide.addText('L\'échelle centésimale suppose une relation linéaire entre la grandeur physique x et la température θ :', {
  x: 0.67, y: 1.1, w: 8.66, h: 0.35,
  fontSize: 14, fontFace: 'Microsoft YaHei', color: THEME.primary60
});

addFormula(slide, 'θ = ax + b', 'Relation linéaire de l\'échelle centésimale', { y: 1.55 });

slide.addText('Deux points fixes sont utilisés pour déterminer les constantes a et b :', {
  x: 0.67, y: 2.4, w: 8.66, h: 0.35,
  fontSize: 14, fontFace: 'Microsoft YaHei', bold: true, color: THEME.primary80
});

const pointsFixes = [
  { point: 'Fusion de la glace', temp: 'θ = 0°C', desc: 'Équilibre glace-eau à pression atmosphérique' },
  { point: 'Ébullition de l\'eau', temp: 'θ = 100°C', desc: 'Vapeur d\'eau à pression atmosphérique' }
];

pointsFixes.forEach((p, i) => {
  const y = 2.85 + (i * 0.7);
  slide.addShape('rect', { x: 0.67, y: y, w: 8.66, h: 0.6, fill: { color: THEME.primary5 } });
  slide.addText(p.point, { x: 0.87, y: y + 0.05, w: 3, h: 0.25, fontSize: 13, bold: true, color: THEME.primary80 });
  slide.addText(p.temp, { x: 4, y: y + 0.05, w: 1.5, h: 0.25, fontSize: 13, bold: true, color: THEME.accent });
  slide.addText(p.desc, { x: 0.87, y: y + 0.32, w: 8, h: 0.2, fontSize: 11, color: THEME.primary60 });
});

slide.addText('⚠️ Limitation : Le coefficient de dilatation α(θ) varie avec la température. L\'échelle centésimale n\'est donc pas universelle. Un thermomètre ne mesure pas la température, il la repère.', {
  x: 0.67, y: 4.3, w: 8.66, h: 0.5,
  fontSize: 12, fontFace: 'Microsoft YaHei', color: THEME.accentB, italic: true
});

// SLIDE: Température Absolue
slide = addContentSlide('Température Absolue et Échelle Kelvin', []);

slide.addText('Pour les gaz à faible pression, le coefficient de dilatation est pratiquement constant :', {
  x: 0.67, y: 1.1, w: 8.66, h: 0.35,
  fontSize: 14, fontFace: 'Microsoft YaHei', color: THEME.primary60
});

addFormula(slide, 'α ≈ 1/273.15 K⁻¹', 'Coefficient de dilatation des gaz parfaits', { y: 1.55 });

slide.addText('En extrapolant les courbes expérimentales du volume en fonction de la température jusqu\'à V = 0, toutes les courbes convergent vers une température correspondant à une agitation moléculaire nulle.', {
  x: 0.67, y: 2.5, w: 8.66, h: 0.5,
  fontSize: 13, fontFace: 'Microsoft YaHei', color: THEME.primary60
});

addDefinition(slide, 'Zéro Absolu', 'C\'est la température qui correspond à une agitation moléculaire nulle. Un corps à cette température ne peut céder de la chaleur à aucun autre. C\'est la limite absolue du froid.\n\nT = 0 K correspond à θ = -273.15°C', { y: 3.1, h: 1.2 });

// SLIDE: Point Triple de l'Eau
slide = addContentSlide('Point Triple de l\'Eau', []);

slide.addText('L\'échelle Kelvin utilise un seul point fixe : le point triple de l\'eau.', {
  x: 0.67, y: 1.1, w: 8.66, h: 0.35,
  fontSize: 14, fontFace: 'Microsoft YaHei', bold: true, color: THEME.primary80
});

addDefinition(slide, 'Point Triple de l\'Eau', 'Point où coexistent les trois phases de l\'eau (solide, liquide, gazeuse) en équilibre.\n\n• Température : Ttp = 273.16 K (soit 0.01°C)\n• Pression : Ptp = 611 Pa', { y: 1.6, h: 1.2 });

slide.addText('Fonction thermométrique à un point fixe :', {
  x: 0.67, y: 3, w: 8.66, h: 0.3,
  fontSize: 14, fontFace: 'Microsoft YaHei', color: THEME.primary60
});

addFormula(slide, 'T = (273.16 / xtp) × x', 'où xtp est la valeur de la variable au point triple', { y: 3.4 });

slide.addText('Cette définition permet d\'établir une échelle de température absolue, indépendante du type de thermomètre utilisé.', {
  x: 0.67, y: 4.3, w: 8.66, h: 0.4,
  fontSize: 12, fontFace: 'Microsoft YaHei', italic: true, color: THEME.primary40
});

// SLIDE: Échelles de Température
slide = addContentSlide('Les Différentes Échelles de Température', []);

const scales = [
  { name: 'Kelvin', symbol: 'K', zero: '0 K', water: '273.15 K', boil: '373.15 K', note: 'Échelle absolue (SI)' },
  { name: 'Celsius', symbol: '°C', zero: '-273.15°C', water: '0°C', boil: '100°C', note: 'Usage quotidien' },
  { name: 'Fahrenheit', symbol: '°F', zero: '-459.67°F', water: '32°F', boil: '212°F', note: 'Usage USA' },
  { name: 'Rankine', symbol: '°R', zero: '0°R', water: '491.67°R', boil: '671.67°R', note: 'Absolue Fahrenheit' }
];

// Table header
slide.addTable([
  [{ text: 'Échelle', options: { bold: true, fill: { color: THEME.primary80 }, color: THEME.white } },
   { text: 'Symbole', options: { bold: true, fill: { color: THEME.primary80 }, color: THEME.white } },
   { text: 'Zéro absolu', options: { bold: true, fill: { color: THEME.primary80 }, color: THEME.white } },
   { text: 'Glace fondante', options: { bold: true, fill: { color: THEME.primary80 }, color: THEME.white } },
   { text: 'Ébullition', options: { bold: true, fill: { color: THEME.primary80 }, color: THEME.white } },
   { text: 'Note', options: { bold: true, fill: { color: THEME.primary80 }, color: THEME.white } }]
], {
  x: 0.67, y: 1.1, w: 8.66, h: 0.4,
  colW: [1.3, 1, 1.5, 1.5, 1.3, 2],
  fontSize: 11,
  fontFace: 'Microsoft YaHei',
  border: { pt: 0.5, color: THEME.primary20 }
});

// Table data
scales.forEach((s, i) => {
  slide.addTable([
    [{ text: s.name, options: { bold: true } }, s.symbol, s.zero, s.water, s.boil, s.note]
  ], {
    x: 0.67, y: 1.55 + (i * 0.4), w: 8.66, h: 0.35,
    colW: [1.3, 1, 1.5, 1.5, 1.3, 2],
    fontSize: 11,
    fontFace: 'Microsoft YaHei',
    color: THEME.primary60,
    border: { pt: 0.5, color: THEME.primary20 }
  });
});

slide.addText('Relations de conversion :', { x: 0.67, y: 3.4, w: 8.66, h: 0.3, fontSize: 13, bold: true, color: THEME.primary80 });
slide.addText('T(K) = T(°C) + 273.15     |     T(°F) = 1.8 × T(°C) + 32     |     T(°R) = 1.8 × T(K)', {
  x: 0.67, y: 3.75, w: 8.66, h: 0.3, fontSize: 12, color: THEME.primary60, fontFace: 'Cambria Math'
});

// SLIDE: Principe Zéro
slide = addContentSlide('Principe Zéro de la Thermodynamique', []);

slide.addText('Considérons deux systèmes A et B initialement en équilibre et mis en contact par une cloison :', {
  x: 0.67, y: 1.1, w: 8.66, h: 0.35,
  fontSize: 14, fontFace: 'Microsoft YaHei', color: THEME.primary60
});

const cloisons = [
  { type: 'Cloison adiabatique', desc: 'Aucun échange de chaleur. Les systèmes restent dans leurs états initiaux.' },
  { type: 'Cloison diatherme', desc: 'Échange de chaleur possible. Les systèmes atteignent un équilibre thermique commun.' }
];

cloisons.forEach((c, i) => {
  const y = 1.55 + (i * 0.7);
  slide.addShape('rect', { x: 0.67, y: y, w: 8.66, h: 0.6, fill: { color: THEME.primary5 } });
  slide.addText(c.type, { x: 0.87, y: y + 0.05, w: 3, h: 0.25, fontSize: 13, bold: true, color: THEME.primary80 });
  slide.addText(c.desc, { x: 0.87, y: y + 0.32, w: 8, h: 0.2, fontSize: 12, color: THEME.primary60 });
});

slide.addShape('rect', { x: 0.67, y: 3.1, w: 8.66, h: 1.5, fill: { color: THEME.accent + '20' }, line: { color: THEME.accent, width: 2 } });
slide.addText('PRINCIPE ZÉRO DE LA THERMODYNAMIQUE', { x: 0.87, y: 3.2, w: 8.26, h: 0.35, fontSize: 14, bold: true, color: THEME.primary80, align: 'center' });
slide.addText('"Deux systèmes thermodynamiques en équilibre thermique avec un même troisième sont en équilibre thermique entre eux."', {
  x: 0.87, y: 3.65, w: 8.26, h: 0.8,
  fontSize: 14, fontFace: 'Microsoft YaHei', italic: true, color: THEME.primary60, align: 'center'
});

// SLIDE: Modèle du Gaz Parfait
slide = addContentSlide('Modèle du Gaz Parfait', []);

slide.addText('Le gaz parfait est un modèle théorique basé sur les hypothèses suivantes :', {
  x: 0.67, y: 1.1, w: 8.66, h: 0.35,
  fontSize: 14, fontFace: 'Microsoft YaHei', color: THEME.primary60
});

const hypotheses = [
  'Molécules assimilables à des points immatériels (sans volume propre)',
  'Molécules très éloignées les unes des autres, sans force d\'interaction (indépendantes)',
  'Les forces de répulsion ne se manifestent que lors des chocs élastiques',
  'Conservation de l\'énergie cinétique totale : E₁ + E₂ = E₁\' + E₂\''
];

hypotheses.forEach((h, i) => {
  const y = 1.55 + (i * 0.5);
  slide.addShape('ellipse', { x: 0.67, y: y + 0.08, w: 0.15, h: 0.15, fill: { color: THEME.accent } });
  slide.addText(h, { x: 0.97, y: y, w: 8.36, h: 0.45, fontSize: 13, color: THEME.primary60 });
});

slide.addText('Équation d\'état du gaz parfait :', { x: 0.67, y: 3.7, w: 8.66, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80 });
addFormula(slide, 'PV = nRT', 'Équation d\'état du gaz parfait', { y: 4.05 });

// SLIDE: Constante des Gaz Parfaits
slide = addContentSlide('Constante des Gaz Parfaits R', []);

slide.addText('D\'après la loi d\'Avogadro, pour une mole de gaz parfait :', {
  x: 0.67, y: 1.1, w: 8.66, h: 0.35,
  fontSize: 14, fontFace: 'Microsoft YaHei', color: THEME.primary60
});

slide.addShape('rect', { x: 0.67, y: 1.55, w: 8.66, h: 1.8, fill: { color: THEME.primary5 } });

slide.addText('Conditions normales (STP) :', { x: 0.87, y: 1.65, w: 8.26, h: 0.3, fontSize: 13, bold: true, color: THEME.primary80 });
slide.addText('• Température : T = 273.15 K (0°C)\n• Pression : P = 1,013 × 10⁵ Pa (1 atm)\n• Volume molaire : Vm = 22,414 L/mol', {
  x: 0.87, y: 2, w: 8.26, h: 0.8, fontSize: 12, color: THEME.primary60
});

slide.addText('Calcul de R :', { x: 0.87, y: 2.8, w: 8.26, h: 0.3, fontSize: 13, bold: true, color: THEME.primary80 });
addFormula(slide, 'R = PV/nT = (1.013×10⁵ × 0.022414) / (1 × 273.15) = 8.3143 J·K⁻¹·mol⁻¹', 'Constante universelle des gaz parfaits', { y: 3.15 });

// SLIDE: Lois Particulières
slide = addContentSlide('Lois Particulières des Gaz Parfaits', []);

const lois = [
  { name: 'Loi de Mariotte', condition: 'T = cste', formula: 'P₁V₁ = P₂V₂', desc: 'À température constante, PV = cste' },
  { name: 'Loi de Charles', condition: 'V = cste', formula: 'P₁/T₁ = P₂/T₂', desc: 'À volume constant, P/T = cste' },
  { name: 'Loi de Gay-Lussac', condition: 'P = cste', formula: 'V₁/T₁ = V₂/T₂', desc: 'À pression constante, V/T = cste' }
];

lois.forEach((l, i) => {
  const y = 1.1 + (i * 1.1);
  slide.addShape('rect', { x: 0.67, y: y, w: 8.66, h: 1, fill: { color: THEME.primary5 }, line: { color: THEME.primary20, width: 1 } });
  
  slide.addText(l.name, { x: 0.87, y: y + 0.1, w: 3, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80 });
  slide.addText(`Condition : ${l.condition}`, { x: 0.87, y: y + 0.4, w: 3, h: 0.25, fontSize: 11, color: THEME.primary40 });
  
  slide.addText(l.formula, { x: 4.5, y: y + 0.25, w: 2.5, h: 0.5, fontSize: 16, bold: true, color: THEME.accent, fontFace: 'Cambria Math', align: 'center' });
  slide.addText(l.desc, { x: 7, y: y + 0.35, w: 2.2, h: 0.3, fontSize: 10, color: THEME.primary60 });
});

// SLIDE: Théorie Cinétique
slide = addContentSlide('Théorie Cinétique des Gaz - Vue Microscopique', []);

slide.addText('La théorie cinétique relie le comportement macroscopique aux propriétés microscopiques :', {
  x: 0.67, y: 1.1, w: 8.66, h: 0.35,
  fontSize: 14, fontFace: 'Microsoft YaHei', color: THEME.primary60
});

slide.addText('Résultats fondamentaux :', { x: 0.67, y: 1.55, w: 8.66, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80 });

addFormula(slide, '(1/2)m<v²> = (3/2)kT', 'Énergie cinétique moyenne d\'une molécule', { y: 1.95 });

slide.addText('où k = 1.38×10⁻²³ J/K est la constante de Boltzmann', {
  x: 0.67, y: 2.8, w: 8.66, h: 0.3,
  fontSize: 12, fontFace: 'Microsoft YaHei', color: THEME.primary40
});

slide.addText('Énergie par degré de liberté :', { x: 0.67, y: 3.2, w: 8.66, h: 0.3, fontSize: 13, bold: true, color: THEME.primary80 });
addFormula(slide, '(1/2)kT par degré de liberté', 'Théorème d\'équipartition de l\'énergie', { y: 3.55 });

slide.addText('💡 Pour un gaz parfait monoatomique (3 degrés de liberté) : Ec = (3/2)kT\n    Pour un gaz parfait diatomique (5 degrés de liberté) : Ec = (5/2)kT', {
  x: 0.67, y: 4.3, w: 8.66, h: 0.5,
  fontSize: 12, fontFace: 'Microsoft YaHei', color: THEME.primary60
});

// SLIDE: Dilatation Thermique
slide = addContentSlide('Dilatation Thermique des Solides et Liquides', []);

slide.addText('L\'amplitude des oscillations atomiques augmente avec la température, provoquant une dilatation.', {
  x: 0.67, y: 1.1, w: 8.66, h: 0.35,
  fontSize: 14, fontFace: 'Microsoft YaHei', color: THEME.primary60
});

addTwoColumns(slide,
  { title: 'Dilatation Linéaire', content: 'Pour une dimension :\n\nL = L₀(1 + αl·ΔT)\n\noù αl est le coefficient de dilatation linéaire (K⁻¹)' },
  { title: 'Dilatation Volumique', content: 'Pour un volume :\n\nV = V₀(1 + αV·ΔT)\n\noù αV est le coefficient de dilatation volumique (K⁻¹)' }
);

slide.addText('Pour un corps isotrope : αV = 3αl', {
  x: 0.67, y: 4.2, w: 8.66, h: 0.3,
  fontSize: 13, fontFace: 'Microsoft YaHei', bold: true, color: THEME.accent, fontFace: 'Cambria Math'
});

// ============================================
// SECTION DIVIDER: SÉANCE 3
// ============================================
slide = pptx.addSlide();
slide.addShape('rect', { x: 0, y: 0, w: '100%', h: '100%', fill: { color: THEME.primary80 } });
slide.addShape('rect', { x: 0, y: 0, w: 4, h: '100%', fill: { color: THEME.primary90 } });
slide.addText('SÉANCE 3', { x: 0.5, y: 1.5, w: 3, h: 0.5, fontSize: 14, color: THEME.accent, bold: true });
slide.addText('Travail\net\nChaleur', { x: 0.5, y: 2, w: 3, h: 1.8, fontSize: 24, bold: true, color: THEME.white });
slide.addText('2 heures', { x: 0.5, y: 4, w: 3, h: 0.3, fontSize: 12, color: THEME.onDarkSecondary });

// SLIDE: Définition de la Chaleur
slide = addContentSlide('La Chaleur : Définition', []);

addDefinition(slide, 'Chaleur (Q)', 'Énergie échangée entre deux corps de températures différentes mis en contact (le contact peut ne pas être matériel). Cette énergie est transférée de manière à atteindre un équilibre thermique où la température est la même pour les deux corps.', { y: 1.1 });

slide.addText('À l\'échelle microscopique, la chaleur est une énergie cinétique échangée par agitation moléculaire (chocs entre molécules en mouvement).', {
  x: 0.67, y: 2.5, w: 8.66, h: 0.5,
  fontSize: 13, fontFace: 'Microsoft YaHei', color: THEME.primary60
});

slide.addText('Unités : Joule [J] ou calorie [cal]     |     1 calorie = 4.186 Joules', {
  x: 0.67, y: 3.1, w: 8.66, h: 0.3,
  fontSize: 13, fontFace: 'Microsoft YaHei', bold: true, color: THEME.primary80
});

// Important note
slide.addShape('rect', { x: 0.67, y: 3.6, w: 8.66, h: 0.8, fill: { color: THEME.accentB + '20' } });
slide.addText('⚠️ Distinction importante : La chaleur et la température sont deux grandeurs différentes !', { x: 0.87, y: 3.7, w: 8.26, h: 0.25, fontSize: 13, bold: true, color: THEME.primary80 });
slide.addText('Un échange de chaleur peut s\'effectuer sans variation de température (changement d\'état).', { x: 0.87, y: 4, w: 8.26, h: 0.3, fontSize: 12, color: THEME.primary60 });

// SLIDE: Modes de Transfert
slide = addContentSlide('Les Trois Modes de Transfert de Chaleur', []);

const modes = [
  { name: 'Conduction', desc: 'Transfert par contact matériel direct', formula: 'Q = λS(TA-TB)/e', params: 'λ: conductivité thermique' },
  { name: 'Convection', desc: 'Transfert par mouvement de fluide', formula: 'Q = hS(T-Tfluide)', params: 'h: coefficient de convection' },
  { name: 'Rayonnement', desc: 'Transfert par ondes EM (sans contact)', formula: 'Q = εσST⁴', params: 'ε: émissivité, σ: cte Boltzmann' }
];

modes.forEach((m, i) => {
  const y = 1.1 + (i * 1.15);
  slide.addShape('rect', { x: 0.67, y: y, w: 8.66, h: 1.05, fill: { color: THEME.primary5 }, line: { color: THEME.primary20, width: 1 } });
  
  slide.addShape('rect', { x: 0.67, y: y, w: 0.05, h: 1.05, fill: { color: THEME.accent } });
  
  slide.addText(m.name, { x: 0.87, y: y + 0.1, w: 2.5, h: 0.3, fontSize: 15, bold: true, color: THEME.primary80 });
  slide.addText(m.desc, { x: 0.87, y: y + 0.4, w: 4, h: 0.25, fontSize: 12, color: THEME.primary60 });
  slide.addText(m.formula, { x: 5, y: y + 0.15, w: 3, h: 0.35, fontSize: 13, bold: true, color: THEME.accent, fontFace: 'Cambria Math' });
  slide.addText(m.params, { x: 5, y: y + 0.55, w: 3.5, h: 0.35, fontSize: 10, color: THEME.primary40 });
});

// SLIDE: Expression de la Chaleur
slide = addContentSlide('Expression de la Quantité de Chaleur', []);

slide.addText('Pour un système décrit par P, V, T reliés par une équation d\'état, la chaleur élémentaire s\'écrit selon les variables choisies :', {
  x: 0.67, y: 1.1, w: 8.66, h: 0.4,
  fontSize: 14, fontFace: 'Microsoft YaHei', color: THEME.primary60
});

const heatForms = [
  { vars: '(T, V)', formula: 'δQ = ldV + CVdT', desc: 'Variables T et V' },
  { vars: '(T, P)', formula: 'δQ = hdP + CPdT', desc: 'Variables T et P' },
  { vars: '(P, V)', formula: 'δQ = λdP + μdV', desc: 'Variables P et V' }
];

heatForms.forEach((h, i) => {
  const x = 0.67 + (i * 3);
  slide.addShape('rect', { x: x, y: 1.6, w: 2.8, h: 1.3, fill: { color: THEME.primary5 }, line: { color: THEME.accent, width: 1 } });
  slide.addText(h.vars, { x: x + 0.1, y: 1.7, w: 2.6, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80, align: 'center' });
  slide.addText(h.formula, { x: x + 0.1, y: 2.1, w: 2.6, h: 0.4, fontSize: 14, color: THEME.accent, fontFace: 'Cambria Math', align: 'center' });
  slide.addText(h.desc, { x: x + 0.1, y: 2.55, w: 2.6, h: 0.25, fontSize: 10, color: THEME.primary60, align: 'center' });
});

slide.addText('⚠️ Ces expressions ne sont valables que pour des transformations réversibles ou quasi-statiques !', {
  x: 0.67, y: 3.1, w: 8.66, h: 0.3,
  fontSize: 12, fontFace: 'Microsoft YaHei', italic: true, color: THEME.accentB
});

// SLIDE: Capacités Thermiques
slide = addContentSlide('Capacités Thermiques', []);

addTwoColumns(slide,
  { title: 'À Volume Constant (CV)', content: 'δQV = CV dT\n\nQV = m·cV·(T₂-T₁)\n\noù cV est la chaleur massique à volume constant [J/kg·K]\n\ncᵥ = CV/n est la chaleur molaire [J/mol·K]' },
  { title: 'À Pression Constante (CP)', content: 'δQP = CP dT\n\nQP = m·cP·(T₂-T₁)\n\noù cP est la chaleur massique à pression constante [J/kg·K]\n\ncₚ = CP/n est la chaleur molaire [J/mol·K]' }
);

slide.addText('Relation de Mayer pour les gaz parfaits : CP - CV = nR', {
  x: 0.67, y: 4.2, w: 8.66, h: 0.3,
  fontSize: 13, fontFace: 'Microsoft YaHei', bold: true, color: THEME.accent, fontFace: 'Cambria Math'
});

// SLIDE: Chaleur Latente
slide = addContentSlide('Chaleur Latente de Changement d\'État', []);

addDefinition(slide, 'Chaleur Latente (L)', 'Quantité de chaleur nécessaire pour faire passer l\'unité de masse d\'un corps pur d\'un état physique à un autre état, à température et pression constantes.', { y: 1.1 });

addFormula(slide, 'Q = m × L', 'Chaleur échangée lors d\'un changement d\'état', { y: 2 });

slide.addText('Exemples de chaleurs latentes :', { x: 0.67, y: 2.9, w: 8.66, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80 });

const latents = [
  { trans: 'Fusion (glace → eau)', L: '334 kJ/kg', T: '0°C' },
  { trans: 'Vaporisation (eau → vapeur)', L: '2260 kJ/kg', T: '100°C' },
  { trans: 'Sublimation (glace → vapeur)', L: '2594 kJ/kg', T: '0°C' }
];

latents.forEach((l, i) => {
  const y = 3.3 + (i * 0.45);
  slide.addText(`${l.trans} : L = ${l.L} à ${l.T}`, { x: 0.87, y: y, w: 8, h: 0.35, fontSize: 12, color: THEME.primary60 });
});

// SLIDE: Calorimétrie
slide = addContentSlide('Calorimétrie - Principe', []);

slide.addText('La calorimétrie permet de mesurer les échanges de chaleur entre différents corps dans un système isolé thermiquement (calorimètre).', {
  x: 0.67, y: 1.1, w: 8.66, h: 0.4,
  fontSize: 14, fontFace: 'Microsoft YaHei', color: THEME.primary60
});

slide.addText('Principe fondamental :', { x: 0.67, y: 1.6, w: 8.66, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80 });

slide.addShape('rect', { x: 0.67, y: 1.95, w: 8.66, h: 0.8, fill: { color: THEME.primary10 }, line: { color: THEME.accent, width: 2 } });
slide.addText('La somme des chaleurs échangées dans un système isolé est nulle :', { x: 0.87, y: 2.05, w: 8.26, h: 0.3, fontSize: 13, color: THEME.primary80 });
addFormula(slide, 'ΣQi = Qcalorimètre + Qcorps + Qeau = 0', 'Équation calorimétrique', { y: 2.4 });

slide.addText('Valeur en eau du calorimètre : μ = Σ(mi·ci)', { x: 0.67, y: 3.5, w: 8.66, h: 0.3, fontSize: 13, bold: true, color: THEME.primary80 });
slide.addText('C\'est la masse d\'eau équivalente qui aurait la même capacité thermique que le calorimètre et ses accessoires (thermomètre, agitateur, vase).', {
  x: 0.67, y: 3.85, w: 8.66, h: 0.5,
  fontSize: 12, fontFace: 'Microsoft YaHei', color: THEME.primary60
});

// SLIDE: Travail des Forces de Pression
slide = addContentSlide('Travail des Forces de Pression', []);

addDefinition(slide, 'Travail (W)', 'Énergie échangée entre le système et le milieu extérieur par l\'intermédiaire des forces de pression. Le travail est reçu par le système (W > 0) si le volume diminue.', { y: 1.1 });

slide.addText('Expression du travail élémentaire :', { x: 0.67, y: 2.1, w: 8.66, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80 });
addFormula(slide, 'δW = -Pext · dV', 'Travail élémentaire des forces de pression', { y: 2.45 });

slide.addText('Travail total :', { x: 0.67, y: 3.2, w: 8.66, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80 });
addFormula(slide, 'W = -∫Pext dV', 'Intégrale le long du chemin (C)', { y: 3.55 });

slide.addText('Interprétation graphique : |W| est donné par l\'aire sous la courbe P(V) dans le diagramme de Clapeyron.', {
  x: 0.67, y: 4.3, w: 8.66, h: 0.4,
  fontSize: 12, fontFace: 'Microsoft YaHei', italic: true, color: THEME.primary40
});

// SLIDE: Travail Cas Particuliers
slide = addContentSlide('Travail dans les Transformations Particulières', []);

const workCases = [
  { type: 'Transformation isobare', formula: 'W = -P(V₂-V₁)', note: 'Pression constante' },
  { type: 'Transformation isochore', formula: 'W = 0', note: 'Volume constant, pas de travail' },
  { type: 'Transformation isotherme réversible (gaz parfait)', formula: 'W = nRT·ln(V₂/V₁)', note: 'T = constante' },
  { type: 'Transformation irréversible', formula: 'W = -Pext(V₂-V₁)', note: 'Pext constante' }
];

workCases.forEach((w, i) => {
  const y = 1.1 + (i * 0.85);
  slide.addShape('rect', { x: 0.67, y: y, w: 8.66, h: 0.75, fill: { color: THEME.primary5 }, line: { color: THEME.primary20, width: 1 } });
  
  slide.addText(w.type, { x: 0.87, y: y + 0.1, w: 4, h: 0.25, fontSize: 13, bold: true, color: THEME.primary80 });
  slide.addText(w.formula, { x: 0.87, y: y + 0.38, w: 5, h: 0.3, fontSize: 14, color: THEME.accent, fontFace: 'Cambria Math' });
  slide.addText(w.note, { x: 6.5, y: y + 0.25, w: 2.5, h: 0.25, fontSize: 10, color: THEME.primary40, italic: true });
});

// SLIDE: Le Travail n'est pas une Fonction d'État
slide = addContentSlide('Le Travail n\'est pas une Fonction d\'État', []);

slide.addText('Démonstration par deux chemins différents entre A et C :', {
  x: 0.67, y: 1.1, w: 8.66, h: 0.35,
  fontSize: 14, fontFace: 'Microsoft YaHei', color: THEME.primary60
});

// Chemin 1
slide.addShape('rect', { x: 0.67, y: 1.55, w: 4, h: 1.4, fill: { color: THEME.primary5 }, line: { color: THEME.accent, width: 1 } });
slide.addText('Chemin 1 : A → B → C', { x: 0.77, y: 1.65, w: 3.8, h: 0.25, fontSize: 12, bold: true, color: THEME.primary80 });
slide.addText('1. Détente isobare (A-B)\n   WAB = -P1(V2-V1)\n\n2. Compression isochore (B-C)\n   WBC = 0', { x: 0.77, y: 1.95, w: 3.8, h: 0.9, fontSize: 11, color: THEME.primary60 });

// Chemin 2
slide.addShape('rect', { x: 5.33, y: 1.55, w: 4, h: 1.4, fill: { color: THEME.primary5 }, line: { color: THEME.accentB, width: 1 } });
slide.addText('Chemin 2 : A → D → C', { x: 5.43, y: 1.65, w: 3.8, h: 0.25, fontSize: 12, bold: true, color: THEME.primary80 });
slide.addText('1. Compression isochore (A-D)\n   WAD = 0\n\n2. Détente isobare (D-C)\n   WDC = -P2(V2-V1)', { x: 5.43, y: 1.95, w: 3.8, h: 0.9, fontSize: 11, color: THEME.primary60 });

slide.addShape('rect', { x: 0.67, y: 3.1, w: 8.66, h: 0.8, fill: { color: THEME.accentB + '20' }, line: { color: THEME.accentB, width: 2 } });
slide.addText('W₁ = -P1(V2-V1) ≠ W₂ = -P2(V2-V1)', { x: 0.87, y: 3.2, w: 8.26, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80, fontFace: 'Cambria Math', align: 'center' });
slide.addText('Le travail dépend du chemin suivi → Ce n\'est PAS une fonction d\'état !', { x: 0.87, y: 3.55, w: 8.26, h: 0.25, fontSize: 12, color: THEME.primary60, align: 'center' });

// ============================================
// SYNTHÈSE GLOBALE
// ============================================
slide = pptx.addSlide();
slide.addShape('rect', { x: 0, y: 0, w: '100%', h: '100%', fill: { color: THEME.primary90 } });
slide.addShape('rect', { x: 0, y: 0, w: '100%', h: 0.06, fill: { color: THEME.accent } });
slide.addText('SYNTHÈSE GLOBALE', {
  x: 0.5, y: 1.2, w: 9, h: 0.6,
  fontSize: 36, fontFace: 'Microsoft YaHei', bold: true, color: THEME.white, align: 'center'
});
slide.addText('Connexions entre les trois séances', {
  x: 0.5, y: 1.9, w: 9, h: 0.4,
  fontSize: 18, fontFace: 'Microsoft YaHei', color: THEME.onDarkSecondary, align: 'center'
});

// SLIDE: Vue d'Ensemble
slide = addContentSlide('Vue d\'Ensemble du Cours', []);

// Flow diagram
const flow = [
  { num: '1', title: 'Concepts\nFondamentaux', items: 'Systèmes\nVariables d\'état\nTransformations' },
  { num: '2', title: 'Température\net Mesure', items: 'Échelles\nGaz parfait\nPrincipe zéro' },
  { num: '3', title: 'Échanges\nd\'Énergie', items: 'Travail W\nChaleur Q\nCalorimétrie' }
];

flow.forEach((f, i) => {
  const x = 0.67 + (i * 3.2);
  
  slide.addShape('rect', { x: x, y: 1.1, w: 2.9, h: 2.5, fill: { color: THEME.primary5 }, line: { color: THEME.primary20, width: 1 } });
  slide.addShape('ellipse', { x: x + 1.05, y: 1.2, w: 0.8, h: 0.5, fill: { color: THEME.accent } });
  slide.addText(f.num, { x: x + 1.05, y: 1.25, w: 0.8, h: 0.4, fontSize: 18, bold: true, color: THEME.white, align: 'center' });
  slide.addText(f.title, { x: x + 0.1, y: 1.8, w: 2.7, h: 0.6, fontSize: 14, bold: true, color: THEME.primary80, align: 'center' });
  slide.addText(f.items, { x: x + 0.1, y: 2.5, w: 2.7, h: 0.9, fontSize: 11, color: THEME.primary60, align: 'center' });
  
  if (i < 2) {
    slide.addText('→', { x: x + 2.9, y: 2.1, w: 0.3, h: 0.4, fontSize: 20, bold: true, color: THEME.accent, align: 'center' });
  }
});

slide.addText('Progression logique : Les concepts de base permettent de définir la température, qui à son tour permet d\'analyser les échanges d\'énergie.', {
  x: 0.67, y: 3.9, w: 8.66, h: 0.5,
  fontSize: 12, fontFace: 'Microsoft YaHei', italic: true, color: THEME.primary40
});

// SLIDE: Formules Clés
slide = addContentSlide('Formules Clés à Retenir', []);

const keyFormulas = [
  { cat: 'Général', formulas: ['PV = nRT (gaz parfait)', 'f(P,V,T) = 0 (équation d\'état)'] },
  { cat: 'Température', formulas: ['T(K) = T(°C) + 273.15', 'α = (1/V)(∂V/∂T)P'] },
  { cat: 'Travail', formulas: ['W = -∫Pext dV', 'Wisoth = nRT·ln(V₂/V₁)'] },
  { cat: 'Chaleur', formulas: ['Q = m·c·ΔT (sans changement d\'état)', 'Q = m·L (changement d\'état)'] }
];

keyFormulas.forEach((kf, i) => {
  const y = 1.1 + (i * 0.95);
  slide.addShape('rect', { x: 0.67, y: y, w: 2, h: 0.85, fill: { color: THEME.accent } });
  slide.addText(kf.cat, { x: 0.67, y: y + 0.25, w: 2, h: 0.35, fontSize: 12, bold: true, color: THEME.white, align: 'center' });
  
  kf.formulas.forEach((f, j) => {
    slide.addText('• ' + f, { x: 2.8, y: y + (j * 0.35), w: 6, h: 0.35, fontSize: 12, color: THEME.primary60, fontFace: 'Cambria Math' });
  });
});

// SLIDE: Fiche de Révision
slide = pptx.addSlide();
slide.addShape('rect', { x: 0, y: 0, w: '100%', h: '100%', fill: { color: THEME.primary5 } });
slide.addShape('rect', { x: 0, y: 0, w: '100%', h: 0.56, fill: { color: THEME.primary90 } });
slide.addText('FICHE DE RÉVISION FINALE', { x: 0.67, y: 0.13, w: 9, h: 0.3, fontSize: 20, bold: true, color: THEME.white });

const revisionItems = [
  { title: 'Systèmes', content: 'Ouvert (matière+énergie), Fermé (énergie), Isolé (rien)' },
  { title: 'Variables', content: 'Extensives (V, m) vs Intensives (T, P)' },
  { title: 'Fonctions d\'état', content: 'Δf indépendant du chemin (U, H, S)' },
  { title: 'Transformations', content: 'Isochore (V=cst), Isobare (P=cst), Isotherme (T=cst), Adiabatique (Q=0)' },
  { title: 'Température', content: '0 K = -273.15°C, Point triple eau = 273.16 K' },
  { title: 'Travail', content: 'W = -∫P dV, W isochore = 0' },
  { title: 'Chaleur', content: 'Q = mcΔT (sensible), Q = mL (latente)' },
  { title: 'Calorimétrie', content: 'ΣQi = 0 (système isolé)' }
];

revisionItems.forEach((r, i) => {
  const row = Math.floor(i / 2);
  const col = i % 2;
  const x = 0.33 + (col * 4.83);
  const y = 0.75 + (row * 0.85);
  
  slide.addShape('rect', { x: x, y: y, w: 4.67, h: 0.75, fill: { color: THEME.white }, line: { color: THEME.primary20, width: 1 } });
  slide.addShape('rect', { x: x, y: y, w: 0.06, h: 0.75, fill: { color: THEME.accent } });
  slide.addText(r.title, { x: x + 0.17, y: y + 0.05, w: 4.33, h: 0.25, fontSize: 11, bold: true, color: THEME.primary80 });
  slide.addText(r.content, { x: x + 0.17, y: y + 0.35, w: 4.33, h: 0.35, fontSize: 10, color: THEME.primary60 });
});

// SLIDE: Conclusion
slide = pptx.addSlide();
slide.addShape('rect', { x: 0, y: 0, w: '100%', h: '100%', fill: { color: THEME.primary90 } });
slide.addShape('rect', { x: 0, y: 0, w: '100%', h: 0.06, fill: { color: THEME.accent } });
slide.addShape('ellipse', { x: 4.85, y: 1.3, w: 0.14, h: 0.14, fill: { color: THEME.accent } });
slide.addText('Conclusion', {
  x: 0.5, y: 1.6, w: 9, h: 0.5,
  fontSize: 32, fontFace: 'Microsoft YaHei', bold: true, color: THEME.white, align: 'center'
});
slide.addShape('rect', { x: 4, y: 2.2, w: 2, h: 0.04, fill: { color: THEME.accent } });
slide.addText('La thermodynamique est une science universelle\nqui repose sur des principes simples mais fondamentaux.\n\nElle permet de comprendre les transformations\nde la matière et de l\'énergie dans les systèmes physiques.', {
  x: 0.5, y: 2.5, w: 9, h: 1.5,
  fontSize: 16, fontFace: 'Microsoft YaHei', color: THEME.onDarkSecondary, align: 'center'
});
slide.addText('Les notions de différentielle totale et de forme différentielle\nsont essentielles pour analyser les variations\ndes grandeurs physiques et thermodynamiques.', {
  x: 0.5, y: 4.1, w: 9, h: 0.8,
  fontSize: 13, fontFace: 'Microsoft YaHei', color: THEME.primary40, align: 'center', italic: true
});

// Save the presentation
const outputPath = '/home/z/my-project/thermodynamics-course/Thermodynamique_Cours_Complet.pptx';
pptx.writeFile({ fileName: outputPath })
  .then(() => {
    console.log(`Presentation saved to: ${outputPath}`);
    console.log(`Total slides: ${pptx.slides.length}`);
  })
  .catch(err => {
    console.error('Error saving presentation:', err);
  });
