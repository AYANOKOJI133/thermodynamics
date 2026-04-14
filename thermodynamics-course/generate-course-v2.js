const pptxgen = require('pptxgenjs');

// Forest Theme Colors (Educational/Courseware) - Only valid 6-digit hex
const THEME = {
  primary100: '0B1E14',
  primary90: '122D1F',
  primary80: '1B4332',
  primary60: '2E6B4F',
  primary40: '60A882',
  primary20: 'A8D4BC',
  primary10: 'D8EEE2',
  primary5: 'EEF7F1',
  accent: 'DCBD74',
  accentB: 'E18C70',
  accentC: '7EC8B0',
  white: 'FFFFFF',
  lightGray: 'F5F5F5',
  darkGray: '333333'
};

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_16x9';
pptx.title = 'Thermodynamique - Cours Complet';
pptx.author = 'Cours de Thermodynamique';

// Helper function to add a slide with dark header
function addContentSlide(title) {
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
  color: THEME.accentC, align: 'center'
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
slide = addContentSlide('Références Bibliographiques');
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
  slide.addText('Auteur: ' + ref.author + '  |  Édition: ' + ref.edition, { x: 0.87, y: y + 0.55, w: 8.26, h: 0.3, fontSize: 12, color: THEME.primary60 });
});

// ============================================
// SECTION DIVIDER: SÉANCE 1
// ============================================
slide = pptx.addSlide();
slide.addShape('rect', { x: 0, y: 0, w: '100%', h: '100%', fill: { color: THEME.primary80 } });
slide.addShape('rect', { x: 0, y: 0, w: 4, h: '100%', fill: { color: THEME.primary90 } });
slide.addText('SÉANCE 1', { x: 0.5, y: 1.5, w: 3, h: 0.5, fontSize: 14, color: THEME.accent, bold: true });
slide.addText('Concepts\nFondamentaux\nde la\nThermodynamique', { x: 0.5, y: 2, w: 3, h: 1.8, fontSize: 24, bold: true, color: THEME.white });
slide.addText('2 heures', { x: 0.5, y: 4, w: 3, h: 0.3, fontSize: 12, color: THEME.accentC });

// SLIDE: Introduction à la Thermodynamique
slide = addContentSlide('Introduction à la Thermodynamique');

slide.addShape('rect', { x: 0.67, y: 1.1, w: 8.66, h: 1.3, fill: { color: THEME.primary10 }, line: { color: THEME.accent, width: 2 } });
slide.addText('DÉFINITION', { x: 0.87, y: 1.2, w: 8.26, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80 });
slide.addText('La thermodynamique est la science qui étudie les transformations de la matière et de l\'énergie. Elle est née vers 1820, au début de l\'ère industrielle, de la nécessité de comprendre les relations entre les phénomènes thermiques et dynamiques dans les machines thermiques.', { 
  x: 0.87, y: 1.5, w: 8.26, h: 0.8, fontSize: 13, color: THEME.primary60 
});

slide.addText('Caractère universel :', { x: 0.67, y: 2.5, w: 8.66, h: 0.35, fontSize: 15, bold: true, color: THEME.primary80 });

slide.addText('La thermodynamique possède un caractère universel. Toute théorie ne vérifiant pas les principes de la thermodynamique est mise en doute. Dans tous les phénomènes, organismes, dispositifs, machines, systèmes et procédés, il y a inévitablement conversion d\'au moins une forme d\'énergie en une autre.', {
  x: 0.67, y: 2.9, w: 8.66, h: 1, fontSize: 14, color: THEME.primary60
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
  fontSize: 16, fontFace: 'Microsoft YaHei', color: THEME.accentC, align: 'center'
});
slide.addText('— Albert Einstein', {
  x: 0.8, y: 4, w: 8.4, h: 0.4,
  fontSize: 14, fontFace: 'Microsoft YaHei', bold: true, color: THEME.accent, align: 'center'
});

// SLIDE: Deux approches
slide = addContentSlide('Approches en Thermodynamique');

// Left column
slide.addShape('rect', { x: 0.67, y: 1.1, w: 4, h: 3.3, fill: { color: THEME.primary5 } });
slide.addText('Approche Macroscopique', { x: 0.87, y: 1.2, w: 3.6, h: 0.4, fontSize: 16, bold: true, color: THEME.primary80 });
slide.addText('Basée sur des grandeurs mesurables à grande échelle :\n\n• Pression P\n• Volume V\n• Température T\n• Quantité de matière n\n\nCette approche décrit le comportement d\'ensemble du système sans se soucier du comportement individuel des particules.', {
  x: 0.87, y: 1.65, w: 3.6, h: 2.5, fontSize: 12, color: THEME.primary60
});

// Right column
slide.addShape('rect', { x: 5.33, y: 1.1, w: 4, h: 3.3, fill: { color: THEME.primary5 } });
slide.addText('Approche Microscopique', { x: 5.53, y: 1.2, w: 3.6, h: 0.4, fontSize: 16, bold: true, color: THEME.primary80 });
slide.addText('Analyse le comportement des particules élémentaires :\n\n• Positions des molécules\n• Vitesses des molécules\n\nAppelée aussi thermodynamique statistique, elle permet de comprendre les phénomènes à l\'échelle atomique et moléculaire.', {
  x: 5.53, y: 1.65, w: 3.6, h: 2.5, fontSize: 12, color: THEME.primary60
});

// SLIDE: Notion de Système
slide = addContentSlide('Notion de Système Thermodynamique');

slide.addShape('rect', { x: 0.67, y: 1.1, w: 8.66, h: 1.5, fill: { color: THEME.primary10 }, line: { color: THEME.accent, width: 2 } });
slide.addText('DÉFINITION', { x: 0.87, y: 1.2, w: 8.26, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80 });
slide.addText('Un système thermodynamique est une partie de l\'univers à laquelle on porte de l\'intérêt. Il est constitué d\'un grand nombre de particules microscopiques (atomes ou molécules) délimitées par une surface fixe ou mobile, fictive ou réelle, à travers laquelle sont susceptibles de s\'effectuer des échanges d\'énergie et de matière avec le milieu extérieur.', { 
  x: 0.87, y: 1.5, w: 8.26, h: 1, fontSize: 13, color: THEME.primary60 
});

slide.addText('Le reste de l\'univers est appelé « milieu extérieur ». La frontière peut être :', {
  x: 0.67, y: 2.8, w: 8.66, h: 0.4, fontSize: 14, color: THEME.primary60
});

slide.addShape('rect', { x: 0.67, y: 3.3, w: 0.04, h: 0.4, fill: { color: THEME.accent } });
slide.addText('Réalité physique : paroi matérielle (cylindre, membrane...)', { x: 0.87, y: 3.3, w: 8.26, h: 0.4, fontSize: 13, color: THEME.primary60 });

slide.addShape('rect', { x: 0.67, y: 3.8, w: 0.04, h: 0.4, fill: { color: THEME.accent } });
slide.addText('Fictive : limite géométrique imaginaire délimitant une zone d\'étude', { x: 0.87, y: 3.8, w: 8.26, h: 0.4, fontSize: 13, color: THEME.primary60 });

// SLIDE: Types de Systèmes
slide = addContentSlide('Types de Systèmes Thermodynamiques');

const systemTypes = [
  { type: 'Système Ouvert', exchanges: 'Échange matière ET énergie', example: 'Bois qui brûle, moteur thermique', color: THEME.accent },
  { type: 'Système Fermé', exchanges: 'Échange d\'énergie SEULEMENT', example: 'Gaz dans un cylindre, réfrigérateur', color: THEME.accentB },
  { type: 'Système Isolé', exchanges: 'AUCUN échange', example: 'L\'Univers (exemple unique)', color: THEME.primary60 }
];

systemTypes.forEach((s, i) => {
  const y = 1.1 + (i * 1.15);
  
  slide.addShape('rect', { x: 0.67, y: y, w: 8.66, h: 1, fill: { color: THEME.primary5 }, line: { color: s.color, width: 2 } });
  slide.addShape('rect', { x: 0.67, y: y, w: 0.06, h: 1, fill: { color: s.color } });
  slide.addText(s.type, { x: 0.9, y: y + 0.1, w: 3, h: 0.35, fontSize: 16, bold: true, color: THEME.primary80 });
  slide.addText(s.exchanges, { x: 0.9, y: y + 0.45, w: 4, h: 0.25, fontSize: 13, color: THEME.primary60 });
  slide.addText('Exemple : ' + s.example, { x: 5, y: y + 0.35, w: 4, h: 0.35, fontSize: 12, color: THEME.primary40, italic: true });
});

// SLIDE: Convention du Banquier
slide = addContentSlide('Convention du Banquier - Signes des Échanges');

slide.addText('Les échanges d\'énergie entre le système et le milieu extérieur s\'effectuent par transfert de travail W ou de chaleur Q :', {
  x: 0.67, y: 1.1, w: 8.66, h: 0.5, fontSize: 14, color: THEME.primary60
});

// Positive box
slide.addShape('rect', { x: 0.67, y: 1.7, w: 4, h: 1.4, fill: { color: THEME.primary10 }, line: { color: THEME.accentC, width: 2 } });
slide.addText('Q > 0, W > 0', { x: 0.87, y: 1.85, w: 3.6, h: 0.35, fontSize: 18, bold: true, color: THEME.primary80, align: 'center' });
slide.addText('Énergie REÇUE par le système\nLe système « s\'enrichit »', { x: 0.87, y: 2.3, w: 3.6, h: 0.7, fontSize: 12, color: THEME.primary60, align: 'center' });

// Negative box
slide.addShape('rect', { x: 5.33, y: 1.7, w: 4, h: 1.4, fill: { color: THEME.primary5 }, line: { color: THEME.accentB, width: 2 } });
slide.addText('Q < 0, W < 0', { x: 5.53, y: 1.85, w: 3.6, h: 0.35, fontSize: 18, bold: true, color: THEME.primary80, align: 'center' });
slide.addText('Énergie CÉDÉE par le système\nLe système « s\'appauvrit »', { x: 5.53, y: 2.3, w: 3.6, h: 0.7, fontSize: 12, color: THEME.primary60, align: 'center' });

slide.addText('Analogie : Comme un compte bancaire, ce qui est reçu est positif (dépôt), ce qui est cédé est négatif (retrait).', {
  x: 0.67, y: 3.3, w: 8.66, h: 0.5, fontSize: 13, italic: true, color: THEME.primary40
});

// SLIDE: Variables d'État
slide = addContentSlide('Variables d\'État et Équation d\'État');

slide.addShape('rect', { x: 0.67, y: 1.1, w: 8.66, h: 1.1, fill: { color: THEME.primary10 }, line: { color: THEME.accent, width: 2 } });
slide.addText('DÉFINITION', { x: 0.87, y: 1.2, w: 8.26, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80 });
slide.addText('Ce sont des grandeurs mesurables (P, V, T, n...) capables de décrire complètement l\'état d\'un système à un instant donné.', { 
  x: 0.87, y: 1.5, w: 8.26, h: 0.6, fontSize: 13, color: THEME.primary60 
});

slide.addText('Les variables d\'état ne sont pas toutes indépendantes. Elles peuvent être liées par une équation d\'état :', {
  x: 0.67, y: 2.4, w: 8.66, h: 0.4, fontSize: 14, color: THEME.primary60
});

slide.addShape('rect', { x: 0.67, y: 2.9, w: 8.66, h: 0.7, fill: { color: THEME.primary5 }, line: { color: THEME.primary20, width: 1 } });
slide.addText('f(P, V, T, ...) = 0', { x: 0.67, y: 3, w: 8.66, h: 0.5, fontSize: 20, bold: true, color: THEME.primary80, align: 'center', fontFace: 'Cambria Math' });

slide.addText('Exemple fondamental - Gaz Parfait : PV = nRT', { x: 0.67, y: 3.8, w: 8.66, h: 0.4, fontSize: 14, bold: true, color: THEME.primary80 });

// SLIDE: Variables Extensives et Intensives
slide = addContentSlide('Variables Extensives et Intensives');

// Left column
slide.addShape('rect', { x: 0.67, y: 1.1, w: 4, h: 3.3, fill: { color: THEME.primary5 } });
slide.addText('Variables Extensives', { x: 0.87, y: 1.2, w: 3.6, h: 0.35, fontSize: 16, bold: true, color: THEME.primary80 });
slide.addText('Proportionnelles à la masse du système. Elles sont ADDITIVES.\n\nExemples :\n• Masse (m)\n• Volume (V)\n• Nombre de particules (N)\n• Énergie interne (U)\n\nSi on double la masse, ces grandeurs doublent aussi.', {
  x: 0.87, y: 1.6, w: 3.6, h: 2.5, fontSize: 12, color: THEME.primary60
});

// Right column
slide.addShape('rect', { x: 5.33, y: 1.1, w: 4, h: 3.3, fill: { color: THEME.primary5 } });
slide.addText('Variables Intensives', { x: 5.53, y: 1.2, w: 3.6, h: 0.35, fontSize: 16, bold: true, color: THEME.primary80 });
slide.addText('Indépendantes de la masse du système. Elles ont la même valeur en tout point à l\'équilibre.\n\nExemples :\n• Température (T)\n• Pression (P)\n• Masse volumique (ρ)\n\nSi on divise le système, ces grandeurs restent identiques.', {
  x: 5.53, y: 1.6, w: 3.6, h: 2.5, fontSize: 12, color: THEME.primary60
});

// SLIDE: Exemple Pratique
slide = addContentSlide('Exemple Pratique : Extensif vs Intensif');

slide.addShape('rect', { x: 0.67, y: 1.1, w: 8.66, h: 2.2, fill: { color: THEME.primary5 } });

// Before
slide.addText('AVANT', { x: 1, y: 1.2, w: 2.5, h: 0.3, fontSize: 12, bold: true, color: THEME.accent, align: 'center' });
slide.addShape('rect', { x: 1.2, y: 1.6, w: 2, h: 1, fill: { color: THEME.accentC }, line: { color: THEME.primary80, width: 1 } });
slide.addText('1 litre d\'eau\nà 300 K', { x: 1.2, y: 1.8, w: 2, h: 0.6, fontSize: 11, color: THEME.primary80, align: 'center' });

slide.addText('+', { x: 3.4, y: 1.9, w: 0.5, h: 0.5, fontSize: 24, bold: true, color: THEME.primary60, align: 'center' });

slide.addShape('rect', { x: 4.1, y: 1.6, w: 2, h: 1, fill: { color: THEME.accentC }, line: { color: THEME.primary80, width: 1 } });
slide.addText('1 litre d\'eau\nà 300 K', { x: 4.1, y: 1.8, w: 2, h: 0.6, fontSize: 11, color: THEME.primary80, align: 'center' });

// Arrow
slide.addText('→', { x: 6.3, y: 1.9, w: 0.5, h: 0.5, fontSize: 24, bold: true, color: THEME.primary60, align: 'center' });

// After
slide.addText('APRÈS', { x: 7, y: 1.2, w: 2, h: 0.3, fontSize: 12, bold: true, color: THEME.accent, align: 'center' });
slide.addShape('rect', { x: 7, y: 1.6, w: 2, h: 1, fill: { color: THEME.accentC }, line: { color: THEME.primary80, width: 1 } });
slide.addText('2 litres d\'eau\nà 300 K', { x: 7, y: 1.8, w: 2, h: 0.6, fontSize: 11, color: THEME.primary80, align: 'center' });

// Conclusion boxes
slide.addShape('rect', { x: 0.67, y: 3.5, w: 4, h: 0.7, fill: { color: THEME.primary10 }, line: { color: THEME.accent, width: 1 } });
slide.addText('VOLUME (extensif)\n1 L + 1 L = 2 L', { x: 0.87, y: 3.6, w: 3.6, h: 0.5, fontSize: 13, color: THEME.primary80, align: 'center' });

slide.addShape('rect', { x: 5.33, y: 3.5, w: 4, h: 0.7, fill: { color: THEME.primary10 }, line: { color: THEME.accent, width: 1 } });
slide.addText('TEMPÉRATURE (intensive)\n300 K = 300 K (inchangée)', { x: 5.53, y: 3.6, w: 3.6, h: 0.5, fontSize: 13, color: THEME.primary80, align: 'center' });

// SLIDE: Fonctions d'État
slide = addContentSlide('Fonctions d\'État vs Fonctions de Transfert');

slide.addShape('rect', { x: 0.67, y: 1.1, w: 8.66, h: 1.1, fill: { color: THEME.primary10 }, line: { color: THEME.accent, width: 2 } });
slide.addText('DÉFINITION', { x: 0.87, y: 1.2, w: 8.26, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80 });
slide.addText('Une grandeur dont la variation entre deux états dépend uniquement des états initial et final, et NON du chemin suivi.', { 
  x: 0.87, y: 1.5, w: 8.26, h: 0.6, fontSize: 13, color: THEME.primary60 
});

slide.addText('Exemples de fonctions d\'état :', { x: 0.67, y: 2.4, w: 4, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80 });
slide.addText('• Énergie interne (U)\n• Enthalpie (H)\n• Entropie (S)', { x: 0.67, y: 2.75, w: 4, h: 0.8, fontSize: 13, color: THEME.primary60 });

slide.addText('Exemples de fonctions de transfert :', { x: 5.33, y: 2.4, w: 4, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80 });
slide.addText('• Travail (W)\n• Chaleur (Q)\n\n⚠️ Ces grandeurs dépendent du chemin !', { x: 5.33, y: 2.75, w: 4, h: 0.8, fontSize: 13, color: THEME.primary60 });

slide.addShape('rect', { x: 0.67, y: 3.8, w: 8.66, h: 0.5, fill: { color: THEME.accentC } });
slide.addText('Δf = f₂ - f₁ = Cste quelque soit le chemin suivi (fonction d\'état)', { x: 0.87, y: 3.9, w: 8.26, h: 0.3, fontSize: 13, bold: true, color: THEME.primary80 });

// SLIDE: Transformations
slide = addContentSlide('Transformations Thermodynamiques');

slide.addText('Une transformation fait passer un système d\'un état initial à un état final :', {
  x: 0.67, y: 1.1, w: 8.66, h: 0.35, fontSize: 14, color: THEME.primary60
});

const transformations = [
  { type: 'Quasi-statique', desc: 'Suite continue d\'états d\'équilibre. Variables définies à tout instant.' },
  { type: 'Réversible', desc: 'Succession d\'états infiniment voisins. La transformation inverse passe par les mêmes états.' },
  { type: 'Irréversible', desc: 'Transformation brutale ou spontanée. États intermédiaires non définis.' }
];

transformations.forEach((t, i) => {
  const y = 1.55 + (i * 0.9);
  slide.addShape('rect', { x: 0.67, y: y, w: 8.66, h: 0.8, fill: { color: THEME.primary5 }, line: { color: THEME.primary20, width: 1 } });
  slide.addText(t.type, { x: 0.87, y: y + 0.1, w: 2.5, h: 0.3, fontSize: 15, bold: true, color: THEME.primary80 });
  slide.addText(t.desc, { x: 0.87, y: y + 0.4, w: 8.26, h: 0.3, fontSize: 12, color: THEME.primary60 });
});

slide.addText('Important : Une transformation quasi-statique n\'est pas nécessairement réversible !', {
  x: 0.67, y: 4.3, w: 8.66, h: 0.3, fontSize: 12, italic: true, color: THEME.accentB
});

// SLIDE: Transformations Particulières
slide = addContentSlide('Transformations Particulières');

const transPart = [
  { name: 'Isochore', condition: 'V = Cste', desc: 'Volume constant' },
  { name: 'Isobare', condition: 'P = Cste', desc: 'Pression constante' },
  { name: 'Isotherme', condition: 'T = Cste', desc: 'Température constante' },
  { name: 'Adiabatique', condition: 'Q = 0', desc: 'Aucun échange de chaleur' },
  { name: 'Cyclique', condition: 'État final = État initial', desc: 'Retour à l\'état initial' }
];

transPart.forEach((t, i) => {
  const row = Math.floor(i / 3);
  const col = i % 3;
  const x = 0.67 + (col * 3);
  const y = 1.1 + (row * 1.5);
  
  slide.addShape('rect', { x: x, y: y, w: 2.8, h: 1.3, fill: { color: THEME.primary5 }, line: { color: THEME.accent, width: 2 } });
  slide.addText(t.name, { x: x + 0.1, y: y + 0.1, w: 2.6, h: 0.35, fontSize: 14, bold: true, color: THEME.primary80, align: 'center' });
  slide.addText(t.condition, { x: x + 0.1, y: y + 0.5, w: 2.6, h: 0.3, fontSize: 13, color: THEME.accent, align: 'center', bold: true });
  slide.addText(t.desc, { x: x + 0.1, y: y + 0.85, w: 2.6, h: 0.3, fontSize: 11, color: THEME.primary60, align: 'center' });
});

// SLIDE: Outils Mathématiques
slide = addContentSlide('Outils Mathématiques : Différentielle Totale');

slide.addText('Pour une fonction f(x, y) continue et dérivable :', {
  x: 0.67, y: 1.1, w: 8.66, h: 0.35, fontSize: 14, color: THEME.primary60
});

slide.addShape('rect', { x: 0.67, y: 1.5, w: 8.66, h: 0.7, fill: { color: THEME.primary5 }, line: { color: THEME.primary20, width: 1 } });
slide.addText('df = (∂f/∂x)dx + (∂f/∂y)dy', { x: 0.67, y: 1.6, w: 8.66, h: 0.5, fontSize: 20, bold: true, color: THEME.primary80, align: 'center', fontFace: 'Cambria Math' });

slide.addText('Condition pour une différentielle totale exacte (DTE) :', {
  x: 0.67, y: 2.4, w: 8.66, h: 0.35, fontSize: 14, bold: true, color: THEME.primary80
});

slide.addShape('rect', { x: 0.67, y: 2.8, w: 8.66, h: 0.7, fill: { color: THEME.primary5 }, line: { color: THEME.primary20, width: 1 } });
slide.addText('∂²f/∂x∂y = ∂²f/∂y∂x', { x: 0.67, y: 2.9, w: 8.66, h: 0.5, fontSize: 20, bold: true, color: THEME.primary80, align: 'center', fontFace: 'Cambria Math' });

slide.addText('Interprétation : Si df est une DTE, alors ∫df ne dépend pas du chemin suivi entre A et B.', {
  x: 0.67, y: 3.7, w: 8.66, h: 0.4, fontSize: 13, italic: true, color: THEME.primary40
});

// SLIDE: DTE vs Forme Différentielle
slide = addContentSlide('DTE vs Forme Différentielle');

// Left column
slide.addShape('rect', { x: 0.67, y: 1.1, w: 4, h: 3, fill: { color: THEME.primary5 } });
slide.addText('Différentielle Totale Exacte (df)', { x: 0.87, y: 1.2, w: 3.6, h: 0.4, fontSize: 14, bold: true, color: THEME.primary80 });
slide.addText('✓ Intégration ne dépend PAS du chemin\n\n✓ f est une fonction d\'état\n\n✓ ∂²f/∂x∂y = ∂²f/∂y∂x\n\nExemples :\n• dU (énergie interne)\n• dH (enthalpie)\n• dS (entropie)', {
  x: 0.87, y: 1.65, w: 3.6, h: 2.3, fontSize: 12, color: THEME.primary60
});

// Right column
slide.addShape('rect', { x: 5.33, y: 1.1, w: 4, h: 3, fill: { color: THEME.primary5 } });
slide.addText('Forme Différentielle (δf)', { x: 5.53, y: 1.2, w: 3.6, h: 0.4, fontSize: 14, bold: true, color: THEME.primary80 });
slide.addText('✗ Intégration DÉPEND du chemin\n\n✗ f n\'est PAS une fonction d\'état\n\n✗ ∂²f/∂x∂y ≠ ∂²f/∂y∂x\n\nExemples :\n• δW (travail)\n• δQ (chaleur)', {
  x: 5.53, y: 1.65, w: 3.6, h: 2.3, fontSize: 12, color: THEME.primary60
});

slide.addText('Notation : On utilise df pour une DTE et δf pour une forme différentielle (non exacte).', { x: 0.67, y: 4.2, w: 8.66, h: 0.3, fontSize: 12, bold: true, color: THEME.primary80 });

// SLIDE: STEP
slide = addContentSlide('Systèmes Thermo-élastiques (STEP)');

slide.addShape('rect', { x: 0.67, y: 1.1, w: 8.66, h: 1.3, fill: { color: THEME.primary10 }, line: { color: THEME.accent, width: 2 } });
slide.addText('DÉFINITION', { x: 0.87, y: 1.2, w: 8.26, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80 });
slide.addText('Systèmes homogènes (gaz ou liquides) :\n• Inertes chimiquement (pas de réaction)  • Composition constante (fermé)\n• Travail uniquement mécanique  • Décrits par P, V, T', { 
  x: 0.87, y: 1.5, w: 8.26, h: 0.8, fontSize: 13, color: THEME.primary60 
});

slide.addText('Coefficients thermoélastiques :', { x: 0.67, y: 2.6, w: 8.66, h: 0.35, fontSize: 15, bold: true, color: THEME.primary80 });

const coeffs = [
  { symbol: 'α', name: 'Dilatation isobare', formula: 'α = (1/V)(∂V/∂T)P' },
  { symbol: 'β', name: 'Augmentation pression', formula: 'β = (1/P)(∂P/∂T)V' },
  { symbol: 'χT', name: 'Compressibilité isotherme', formula: 'χT = -(1/V)(∂V/∂P)T' }
];

coeffs.forEach((c, i) => {
  const y = 3.05 + (i * 0.5);
  slide.addShape('rect', { x: 0.67, y: y, w: 0.5, h: 0.45, fill: { color: THEME.accent } });
  slide.addText(c.symbol, { x: 0.67, y: y + 0.05, w: 0.5, h: 0.35, fontSize: 16, bold: true, color: THEME.white, align: 'center' });
  slide.addText(c.name + ':  ' + c.formula, { x: 1.27, y: y + 0.05, w: 7, h: 0.35, fontSize: 13, color: THEME.primary60, fontFace: 'Cambria Math' });
});

// ============================================
// SECTION DIVIDER: SÉANCE 2
// ============================================
slide = pptx.addSlide();
slide.addShape('rect', { x: 0, y: 0, w: '100%', h: '100%', fill: { color: THEME.primary80 } });
slide.addShape('rect', { x: 0, y: 0, w: 4, h: '100%', fill: { color: THEME.primary90 } });
slide.addText('SÉANCE 2', { x: 0.5, y: 1.5, w: 3, h: 0.5, fontSize: 14, color: THEME.accent, bold: true });
slide.addText('Température\net\nDilatation\nThermique', { x: 0.5, y: 2, w: 3, h: 1.8, fontSize: 24, bold: true, color: THEME.white });
slide.addText('2 heures', { x: 0.5, y: 4, w: 3, h: 0.3, fontSize: 12, color: THEME.accentC });

// SLIDE: Définition de la Température
slide = addContentSlide('Définition de la Température');

slide.addShape('rect', { x: 0.67, y: 1.1, w: 8.66, h: 1.3, fill: { color: THEME.primary10 }, line: { color: THEME.accent, width: 2 } });
slide.addText('DÉFINITION', { x: 0.87, y: 1.2, w: 8.26, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80 });
slide.addText('La température est une grandeur physique mesurable indirectement, liée à l\'agitation moléculaire. Elle représente l\'énergie moyenne d\'une molécule.', { 
  x: 0.87, y: 1.5, w: 8.26, h: 0.8, fontSize: 13, color: THEME.primary60 
});

slide.addText('On peut définir la température comme une fonction de deux variables d\'état :', {
  x: 0.67, y: 2.6, w: 8.66, h: 0.35, fontSize: 14, color: THEME.primary60
});

slide.addShape('rect', { x: 0.67, y: 3, w: 8.66, h: 0.7, fill: { color: THEME.primary5 }, line: { color: THEME.primary20, width: 1 } });
slide.addText('θ = f(x, y)', { x: 0.67, y: 3.1, w: 8.66, h: 0.5, fontSize: 20, bold: true, color: THEME.primary80, align: 'center', fontFace: 'Cambria Math' });

slide.addText('Un thermomètre : système où une variable est constante, l\'autre dépend de T', {
  x: 0.67, y: 3.9, w: 8.66, h: 0.4, fontSize: 13, color: THEME.primary60
});

// SLIDE: Échelle Centésimale
slide = addContentSlide('Échelle Centésimale (Celsius)');

slide.addText('L\'échelle centésimale suppose une relation linéaire :', {
  x: 0.67, y: 1.1, w: 8.66, h: 0.35, fontSize: 14, color: THEME.primary60
});

slide.addShape('rect', { x: 0.67, y: 1.5, w: 8.66, h: 0.6, fill: { color: THEME.primary5 }, line: { color: THEME.primary20, width: 1 } });
slide.addText('θ = ax + b', { x: 0.67, y: 1.55, w: 8.66, h: 0.5, fontSize: 20, bold: true, color: THEME.primary80, align: 'center', fontFace: 'Cambria Math' });

slide.addText('Deux points fixes :', { x: 0.67, y: 2.3, w: 8.66, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80 });

slide.addShape('rect', { x: 0.67, y: 2.7, w: 4, h: 0.6, fill: { color: THEME.primary5 } });
slide.addText('Fusion de la glace : θ = 0°C', { x: 0.87, y: 2.8, w: 3.6, h: 0.4, fontSize: 13, color: THEME.primary60 });

slide.addShape('rect', { x: 5.33, y: 2.7, w: 4, h: 0.6, fill: { color: THEME.primary5 } });
slide.addText('Ébullition de l\'eau : θ = 100°C', { x: 5.53, y: 2.8, w: 3.6, h: 0.4, fontSize: 13, color: THEME.primary60 });

slide.addText('Limitation : Le coefficient α(θ) varie avec la température. L\'échelle centésimale n\'est pas universelle. Un thermomètre ne mesure pas la température, il la repère.', {
  x: 0.67, y: 3.5, w: 8.66, h: 0.6, fontSize: 12, italic: true, color: THEME.accentB
});

// SLIDE: Température Absolue
slide = addContentSlide('Température Absolue et Échelle Kelvin');

slide.addText('Pour les gaz à faible pression, le coefficient de dilatation est constant :', {
  x: 0.67, y: 1.1, w: 8.66, h: 0.35, fontSize: 14, color: THEME.primary60
});

slide.addShape('rect', { x: 0.67, y: 1.5, w: 8.66, h: 0.6, fill: { color: THEME.primary5 }, line: { color: THEME.primary20, width: 1 } });
slide.addText('α ≈ 1/273.15 K⁻¹', { x: 0.67, y: 1.55, w: 8.66, h: 0.5, fontSize: 20, bold: true, color: THEME.primary80, align: 'center', fontFace: 'Cambria Math' });

slide.addShape('rect', { x: 0.67, y: 2.3, w: 8.66, h: 1.1, fill: { color: THEME.primary10 }, line: { color: THEME.accent, width: 2 } });
slide.addText('ZÉRO ABSOLU', { x: 0.87, y: 2.4, w: 8.26, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80 });
slide.addText('Température correspondant à une agitation moléculaire nulle. Un corps à cette température ne peut céder de la chaleur à aucun autre.\n\nT = 0 K correspond à θ = -273.15°C', { 
  x: 0.87, y: 2.7, w: 8.26, h: 0.6, fontSize: 12, color: THEME.primary60 
});

slide.addText('Point triple de l\'eau : T = 273.16 K (0.01°C), P = 611 Pa', {
  x: 0.67, y: 3.6, w: 8.66, h: 0.4, fontSize: 14, bold: true, color: THEME.primary80
});

// SLIDE: Échelles de Température
slide = addContentSlide('Les Échelles de Température');

slide.addTable([
  [{ text: 'Échelle', options: { bold: true, fill: { color: THEME.primary80 }, color: THEME.white } },
   { text: 'Zéro absolu', options: { bold: true, fill: { color: THEME.primary80 }, color: THEME.white } },
   { text: 'Glace fondante', options: { bold: true, fill: { color: THEME.primary80 }, color: THEME.white } },
   { text: 'Ébullition', options: { bold: true, fill: { color: THEME.primary80 }, color: THEME.white } }]
], { x: 0.67, y: 1.1, w: 8.66, h: 0.4, colW: [2, 2.2, 2.2, 2.2], fontSize: 11, fontFace: 'Microsoft YaHei', border: { pt: 0.5, color: THEME.primary20 } });

const scales = [
  ['Kelvin', '0 K', '273.15 K', '373.15 K'],
  ['Celsius', '-273.15°C', '0°C', '100°C'],
  ['Fahrenheit', '-459.67°F', '32°F', '212°F']
];

scales.forEach((s, i) => {
  slide.addTable([s], { x: 0.67, y: 1.55 + (i * 0.4), w: 8.66, h: 0.35, colW: [2, 2.2, 2.2, 2.2], fontSize: 11, fontFace: 'Microsoft YaHei', color: THEME.primary60, border: { pt: 0.5, color: THEME.primary20 } });
});

slide.addText('Conversion : T(K) = T(°C) + 273.15', { x: 0.67, y: 3, w: 8.66, h: 0.3, fontSize: 14, bold: true, color: THEME.accent, fontFace: 'Cambria Math' });

// SLIDE: Principe Zéro
slide = addContentSlide('Principe Zéro de la Thermodynamique');

slide.addShape('rect', { x: 0.67, y: 1.1, w: 8.66, h: 2, fill: { color: THEME.accentC } });
slide.addText('PRINCIPE ZÉRO', { x: 0.87, y: 1.2, w: 8.26, h: 0.4, fontSize: 16, bold: true, color: THEME.primary80, align: 'center' });
slide.addText('"Deux systèmes thermodynamiques en équilibre thermique avec un même troisième sont en équilibre thermique entre eux."', {
  x: 0.87, y: 1.7, w: 8.26, h: 1.2, fontSize: 16, italic: true, color: THEME.primary80, align: 'center'
});

slide.addText('Conséquence : Si A est en équilibre avec B, et B avec C, alors A est en équilibre avec C.', {
  x: 0.67, y: 3.3, w: 8.66, h: 0.4, fontSize: 14, color: THEME.primary60
});

// SLIDE: Gaz Parfait
slide = addContentSlide('Modèle du Gaz Parfait');

slide.addText('Hypothèses du gaz parfait :', { x: 0.67, y: 1.1, w: 8.66, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80 });

const hypotheses = [
  'Molécules ponctuelles (sans volume propre)',
  'Molécules sans interaction (indépendantes)',
  'Chocs élastiques (conservation de l\'énergie cinétique)'
];

hypotheses.forEach((h, i) => {
  const y = 1.5 + (i * 0.4);
  slide.addShape('ellipse', { x: 0.67, y: y + 0.08, w: 0.12, h: 0.12, fill: { color: THEME.accent } });
  slide.addText(h, { x: 0.9, y: y, w: 8, h: 0.35, fontSize: 13, color: THEME.primary60 });
});

slide.addText('Équation d\'état :', { x: 0.67, y: 2.8, w: 8.66, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80 });

slide.addShape('rect', { x: 0.67, y: 3.15, w: 8.66, h: 0.7, fill: { color: THEME.primary5 }, line: { color: THEME.accent, width: 2 } });
slide.addText('PV = nRT', { x: 0.67, y: 3.25, w: 8.66, h: 0.5, fontSize: 24, bold: true, color: THEME.primary80, align: 'center', fontFace: 'Cambria Math' });

slide.addText('R = 8.314 J·K⁻¹·mol⁻¹ (constante universelle des gaz parfaits)', {
  x: 0.67, y: 4, w: 8.66, h: 0.3, fontSize: 13, color: THEME.primary60
});

// SLIDE: Lois Particulières
slide = addContentSlide('Lois Particulières des Gaz Parfaits');

const lois = [
  { name: 'Loi de Mariotte', condition: 'T = cste', formula: 'P₁V₁ = P₂V₂' },
  { name: 'Loi de Charles', condition: 'V = cste', formula: 'P₁/T₁ = P₂/T₂' },
  { name: 'Loi de Gay-Lussac', condition: 'P = cste', formula: 'V₁/T₁ = V₂/T₂' }
];

lois.forEach((l, i) => {
  const y = 1.1 + (i * 0.95);
  slide.addShape('rect', { x: 0.67, y: y, w: 8.66, h: 0.85, fill: { color: THEME.primary5 }, line: { color: THEME.primary20, width: 1 } });
  slide.addText(l.name, { x: 0.87, y: y + 0.1, w: 3, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80 });
  slide.addText('Condition : ' + l.condition, { x: 0.87, y: y + 0.45, w: 3, h: 0.25, fontSize: 11, color: THEME.primary40 });
  slide.addText(l.formula, { x: 5, y: y + 0.2, w: 3, h: 0.45, fontSize: 18, bold: true, color: THEME.accent, fontFace: 'Cambria Math', align: 'center' });
});

// SLIDE: Théorie Cinétique
slide = addContentSlide('Théorie Cinétique - Vue Microscopique');

slide.addText('L\'énergie cinétique moyenne d\'une molécule :', { x: 0.67, y: 1.1, w: 8.66, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80 });

slide.addShape('rect', { x: 0.67, y: 1.5, w: 8.66, h: 0.7, fill: { color: THEME.primary5 }, line: { color: THEME.accent, width: 2 } });
slide.addText('(1/2)m<v²> = (3/2)kT', { x: 0.67, y: 1.55, w: 8.66, h: 0.6, fontSize: 22, bold: true, color: THEME.primary80, align: 'center', fontFace: 'Cambria Math' });

slide.addText('k = 1.38×10⁻²³ J/K (constante de Boltzmann)', { x: 0.67, y: 2.4, w: 8.66, h: 0.3, fontSize: 12, color: THEME.primary40 });

slide.addText('Théorème d\'équipartition : (1/2)kT par degré de liberté', { x: 0.67, y: 2.9, w: 8.66, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80 });

slide.addText('• Gaz monoatomique (3 ddl) : Ec = (3/2)kT\n• Gaz diatomique (5 ddl) : Ec = (5/2)kT', {
  x: 0.67, y: 3.3, w: 8.66, h: 0.6, fontSize: 13, color: THEME.primary60
});

// SLIDE: Dilatation
slide = addContentSlide('Dilatation Thermique');

slide.addText('L\'amplitude des oscillations atomiques augmente avec la température → dilatation.', {
  x: 0.67, y: 1.1, w: 8.66, h: 0.35, fontSize: 14, color: THEME.primary60
});

// Left column
slide.addShape('rect', { x: 0.67, y: 1.55, w: 4, h: 1.5, fill: { color: THEME.primary5 } });
slide.addText('Dilatation Linéaire', { x: 0.87, y: 1.65, w: 3.6, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80 });
slide.addText('L = L₀(1 + αl·ΔT)\n\nαl : coefficient de dilatation linéaire (K⁻¹)', { x: 0.87, y: 2.05, w: 3.6, h: 0.9, fontSize: 12, color: THEME.primary60, fontFace: 'Cambria Math' });

// Right column
slide.addShape('rect', { x: 5.33, y: 1.55, w: 4, h: 1.5, fill: { color: THEME.primary5 } });
slide.addText('Dilatation Volumique', { x: 5.53, y: 1.65, w: 3.6, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80 });
slide.addText('V = V₀(1 + αV·ΔT)\n\nαV : coefficient de dilatation volumique (K⁻¹)', { x: 5.53, y: 2.05, w: 3.6, h: 0.9, fontSize: 12, color: THEME.primary60, fontFace: 'Cambria Math' });

slide.addText('Pour un corps isotrope : αV = 3αl', { x: 0.67, y: 3.3, w: 8.66, h: 0.3, fontSize: 14, bold: true, color: THEME.accent, fontFace: 'Cambria Math' });

// ============================================
// SECTION DIVIDER: SÉANCE 3
// ============================================
slide = pptx.addSlide();
slide.addShape('rect', { x: 0, y: 0, w: '100%', h: '100%', fill: { color: THEME.primary80 } });
slide.addShape('rect', { x: 0, y: 0, w: 4, h: '100%', fill: { color: THEME.primary90 } });
slide.addText('SÉANCE 3', { x: 0.5, y: 1.5, w: 3, h: 0.5, fontSize: 14, color: THEME.accent, bold: true });
slide.addText('Travail\net\nChaleur', { x: 0.5, y: 2, w: 3, h: 1.8, fontSize: 24, bold: true, color: THEME.white });
slide.addText('2 heures', { x: 0.5, y: 4, w: 3, h: 0.3, fontSize: 12, color: THEME.accentC });

// SLIDE: Définition de la Chaleur
slide = addContentSlide('La Chaleur : Définition');

slide.addShape('rect', { x: 0.67, y: 1.1, w: 8.66, h: 1.3, fill: { color: THEME.primary10 }, line: { color: THEME.accent, width: 2 } });
slide.addText('DÉFINITION', { x: 0.87, y: 1.2, w: 8.26, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80 });
slide.addText('Énergie échangée entre deux corps de températures différentes mis en contact. À l\'échelle microscopique, c\'est une énergie cinétique échangée par agitation moléculaire.', { 
  x: 0.87, y: 1.5, w: 8.26, h: 0.8, fontSize: 13, color: THEME.primary60 
});

slide.addText('Unités : Joule [J] ou calorie [cal]     |     1 cal = 4.186 J', {
  x: 0.67, y: 2.6, w: 8.66, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80
});

slide.addShape('rect', { x: 0.67, y: 3.1, w: 8.66, h: 0.7, fill: { color: THEME.accentB } });
slide.addText('Attention : La chaleur et la température sont deux grandeurs différentes !', { x: 0.87, y: 3.2, w: 8.26, h: 0.25, fontSize: 13, bold: true, color: THEME.primary80 });
slide.addText('Un échange de chaleur peut s\'effectuer sans variation de température (changement d\'état).', { x: 0.87, y: 3.5, w: 8.26, h: 0.2, fontSize: 11, color: THEME.primary60 });

// SLIDE: Modes de Transfert
slide = addContentSlide('Les Trois Modes de Transfert de Chaleur');

const modes = [
  { name: 'Conduction', desc: 'Transfert par contact matériel direct', formula: 'Q = λSΔT/e' },
  { name: 'Convection', desc: 'Transfert par mouvement de fluide', formula: 'Q = hSΔT' },
  { name: 'Rayonnement', desc: 'Transfert par ondes EM (sans contact)', formula: 'Q = εσST⁴' }
];

modes.forEach((m, i) => {
  const y = 1.1 + (i * 1);
  slide.addShape('rect', { x: 0.67, y: y, w: 8.66, h: 0.9, fill: { color: THEME.primary5 }, line: { color: THEME.primary20, width: 1 } });
  slide.addShape('rect', { x: 0.67, y: y, w: 0.05, h: 0.9, fill: { color: THEME.accent } });
  slide.addText(m.name, { x: 0.87, y: y + 0.1, w: 2.5, h: 0.3, fontSize: 15, bold: true, color: THEME.primary80 });
  slide.addText(m.desc, { x: 0.87, y: y + 0.45, w: 4, h: 0.3, fontSize: 12, color: THEME.primary60 });
  slide.addText(m.formula, { x: 5.5, y: y + 0.25, w: 3, h: 0.4, fontSize: 14, bold: true, color: THEME.accent, fontFace: 'Cambria Math' });
});

// SLIDE: Expression de la Chaleur
slide = addContentSlide('Expression de la Quantité de Chaleur');

slide.addText('La chaleur élémentaire selon les variables choisies :', {
  x: 0.67, y: 1.1, w: 8.66, h: 0.35, fontSize: 14, color: THEME.primary60
});

const heatForms = [
  { vars: '(T, V)', formula: 'δQ = ldV + CVdT' },
  { vars: '(T, P)', formula: 'δQ = hdP + CPdT' },
  { vars: '(P, V)', formula: 'δQ = λdP + μdV' }
];

heatForms.forEach((h, i) => {
  const x = 0.67 + (i * 3);
  slide.addShape('rect', { x: x, y: 1.55, w: 2.8, h: 1, fill: { color: THEME.primary5 }, line: { color: THEME.accent, width: 1 } });
  slide.addText(h.vars, { x: x + 0.1, y: 1.65, w: 2.6, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80, align: 'center' });
  slide.addText(h.formula, { x: x + 0.1, y: 2.05, w: 2.6, h: 0.4, fontSize: 13, color: THEME.accent, fontFace: 'Cambria Math', align: 'center' });
});

slide.addText('⚠️ Ces expressions ne sont valables que pour des transformations réversibles ou quasi-statiques !', {
  x: 0.67, y: 2.8, w: 8.66, h: 0.3, fontSize: 12, italic: true, color: THEME.accentB
});

// SLIDE: Capacités Thermiques
slide = addContentSlide('Capacités Thermiques');

// Left column
slide.addShape('rect', { x: 0.67, y: 1.1, w: 4, h: 2.3, fill: { color: THEME.primary5 } });
slide.addText('À Volume Constant (CV)', { x: 0.87, y: 1.2, w: 3.6, h: 0.35, fontSize: 14, bold: true, color: THEME.primary80 });
slide.addText('δQV = CV dT\n\nQV = m·cV·(T₂-T₁)\n\ncV : chaleur massique [J/kg·K]\ncᵥ : chaleur molaire [J/mol·K]', { x: 0.87, y: 1.6, w: 3.6, h: 1.5, fontSize: 12, color: THEME.primary60, fontFace: 'Cambria Math' });

// Right column
slide.addShape('rect', { x: 5.33, y: 1.1, w: 4, h: 2.3, fill: { color: THEME.primary5 } });
slide.addText('À Pression Constante (CP)', { x: 5.53, y: 1.2, w: 3.6, h: 0.35, fontSize: 14, bold: true, color: THEME.primary80 });
slide.addText('δQP = CP dT\n\nQP = m·cP·(T₂-T₁)\n\ncP : chaleur massique [J/kg·K]\ncₚ : chaleur molaire [J/mol·K]', { x: 5.53, y: 1.6, w: 3.6, h: 1.5, fontSize: 12, color: THEME.primary60, fontFace: 'Cambria Math' });

slide.addText('Relation de Mayer : CP - CV = nR', { x: 0.67, y: 3.6, w: 8.66, h: 0.3, fontSize: 14, bold: true, color: THEME.accent, fontFace: 'Cambria Math' });

// SLIDE: Chaleur Latente
slide = addContentSlide('Chaleur Latente de Changement d\'État');

slide.addShape('rect', { x: 0.67, y: 1.1, w: 8.66, h: 0.9, fill: { color: THEME.primary10 }, line: { color: THEME.accent, width: 2 } });
slide.addText('DÉFINITION', { x: 0.87, y: 1.2, w: 8.26, h: 0.25, fontSize: 14, bold: true, color: THEME.primary80 });
slide.addText('Quantité de chaleur nécessaire pour faire passer l\'unité de masse d\'un corps d\'un état à un autre, à température constante.', { 
  x: 0.87, y: 1.45, w: 8.26, h: 0.5, fontSize: 13, color: THEME.primary60 
});

slide.addShape('rect', { x: 0.67, y: 2.1, w: 8.66, h: 0.6, fill: { color: THEME.primary5 }, line: { color: THEME.primary20, width: 1 } });
slide.addText('Q = m × L', { x: 0.67, y: 2.2, w: 8.66, h: 0.4, fontSize: 20, bold: true, color: THEME.primary80, align: 'center', fontFace: 'Cambria Math' });

slide.addText('Exemples :', { x: 0.67, y: 2.9, w: 8.66, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80 });
slide.addText('• Fusion de la glace : L = 334 kJ/kg à 0°C\n• Vaporisation de l\'eau : L = 2260 kJ/kg à 100°C', {
  x: 0.67, y: 3.25, w: 8.66, h: 0.6, fontSize: 13, color: THEME.primary60
});

// SLIDE: Calorimétrie
slide = addContentSlide('Calorimétrie - Principe');

slide.addText('Principe : La somme des chaleurs échangées dans un système isolé est nulle.', {
  x: 0.67, y: 1.1, w: 8.66, h: 0.4, fontSize: 14, bold: true, color: THEME.primary80
});

slide.addShape('rect', { x: 0.67, y: 1.6, w: 8.66, h: 0.7, fill: { color: THEME.primary10 }, line: { color: THEME.accent, width: 2 } });
slide.addText('ΣQi = Qcalorimètre + Qcorps + Qeau = 0', { x: 0.67, y: 1.7, w: 8.66, h: 0.5, fontSize: 18, bold: true, color: THEME.primary80, align: 'center', fontFace: 'Cambria Math' });

slide.addText('Valeur en eau du calorimètre : μ = Σ(mi·ci)', { x: 0.67, y: 2.5, w: 8.66, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80 });

slide.addText('C\'est la masse d\'eau équivalente qui aurait la même capacité thermique que le calorimètre et ses accessoires (thermomètre, agitateur, vase).', {
  x: 0.67, y: 2.9, w: 8.66, h: 0.5, fontSize: 12, color: THEME.primary60
});

// SLIDE: Travail
slide = addContentSlide('Travail des Forces de Pression');

slide.addShape('rect', { x: 0.67, y: 1.1, w: 8.66, h: 0.9, fill: { color: THEME.primary10 }, line: { color: THEME.accent, width: 2 } });
slide.addText('DÉFINITION', { x: 0.87, y: 1.2, w: 8.26, h: 0.25, fontSize: 14, bold: true, color: THEME.primary80 });
slide.addText('Énergie échangée entre le système et le milieu extérieur par les forces de pression. Le travail est reçu par le système (W > 0) si le volume diminue.', { 
  x: 0.87, y: 1.45, w: 8.26, h: 0.5, fontSize: 13, color: THEME.primary60 
});

slide.addText('Travail élémentaire :', { x: 0.67, y: 2.2, w: 8.66, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80 });
slide.addShape('rect', { x: 0.67, y: 2.55, w: 8.66, h: 0.6, fill: { color: THEME.primary5 }, line: { color: THEME.primary20, width: 1 } });
slide.addText('δW = -Pext · dV', { x: 0.67, y: 2.6, w: 8.66, h: 0.5, fontSize: 20, bold: true, color: THEME.primary80, align: 'center', fontFace: 'Cambria Math' });

slide.addText('Travail total : W = -∫Pext dV', { x: 0.67, y: 3.3, w: 8.66, h: 0.3, fontSize: 14, bold: true, color: THEME.primary80 });

slide.addText('Interprétation : |W| est donné par l\'aire sous la courbe P(V) dans le diagramme de Clapeyron.', {
  x: 0.67, y: 3.8, w: 8.66, h: 0.4, fontSize: 12, italic: true, color: THEME.primary40
});

// SLIDE: Travail Cas Particuliers
slide = addContentSlide('Travail dans les Transformations Particulières');

const workCases = [
  { type: 'Isobare', formula: 'W = -P(V₂-V₁)' },
  { type: 'Isochore', formula: 'W = 0' },
  { type: 'Isotherme réversible (gaz parfait)', formula: 'W = nRT·ln(V₂/V₁)' },
  { type: 'Irréversible', formula: 'W = -Pext(V₂-V₁)' }
];

workCases.forEach((w, i) => {
  const y = 1.1 + (i * 0.85);
  slide.addShape('rect', { x: 0.67, y: y, w: 8.66, h: 0.75, fill: { color: THEME.primary5 }, line: { color: THEME.primary20, width: 1 } });
  slide.addText(w.type, { x: 0.87, y: y + 0.1, w: 4, h: 0.25, fontSize: 13, bold: true, color: THEME.primary80 });
  slide.addText(w.formula, { x: 0.87, y: y + 0.38, w: 8, h: 0.3, fontSize: 15, color: THEME.accent, fontFace: 'Cambria Math' });
});

// SLIDE: Travail pas fonction d'état
slide = addContentSlide('Le Travail n\'est pas une Fonction d\'État');

slide.addText('Démonstration par deux chemins différents :', {
  x: 0.67, y: 1.1, w: 8.66, h: 0.35, fontSize: 14, color: THEME.primary60
});

// Chemin 1
slide.addShape('rect', { x: 0.67, y: 1.55, w: 4, h: 1.3, fill: { color: THEME.primary5 }, line: { color: THEME.accent, width: 1 } });
slide.addText('Chemin 1 : A → B → C', { x: 0.77, y: 1.65, w: 3.8, h: 0.25, fontSize: 12, bold: true, color: THEME.primary80 });
slide.addText('WAB = -P1(V2-V1)\nWBC = 0\n\nW1 = -P1(V2-V1)', { x: 0.77, y: 2, w: 3.8, h: 0.75, fontSize: 11, color: THEME.primary60, fontFace: 'Cambria Math' });

// Chemin 2
slide.addShape('rect', { x: 5.33, y: 1.55, w: 4, h: 1.3, fill: { color: THEME.primary5 }, line: { color: THEME.accentB, width: 1 } });
slide.addText('Chemin 2 : A → D → C', { x: 5.43, y: 1.65, w: 3.8, h: 0.25, fontSize: 12, bold: true, color: THEME.primary80 });
slide.addText('WAD = 0\nWDC = -P2(V2-V1)\n\nW2 = -P2(V2-V1)', { x: 5.43, y: 2, w: 3.8, h: 0.75, fontSize: 11, color: THEME.primary60, fontFace: 'Cambria Math' });

slide.addShape('rect', { x: 0.67, y: 3.1, w: 8.66, h: 0.7, fill: { color: THEME.accentB } });
slide.addText('W₁ = -P1(V2-V1) ≠ W₂ = -P2(V2-V1)', { x: 0.87, y: 3.2, w: 8.26, h: 0.25, fontSize: 14, bold: true, color: THEME.primary80, fontFace: 'Cambria Math', align: 'center' });
slide.addText('Le travail dépend du chemin → Ce n\'est PAS une fonction d\'état !', { x: 0.87, y: 3.5, w: 8.26, h: 0.2, fontSize: 11, color: THEME.primary60, align: 'center' });

// ============================================
// SYNTHÈSE GLOBALE
// ============================================
slide = pptx.addSlide();
slide.addShape('rect', { x: 0, y: 0, w: '100%', h: '100%', fill: { color: THEME.primary90 } });
slide.addShape('rect', { x: 0, y: 0, w: '100%', h: 0.06, fill: { color: THEME.accent } });
slide.addText('SYNTHÈSE GLOBALE', {
  x: 0.5, y: 1.2, w: 9, h: 0.6, fontSize: 36, bold: true, color: THEME.white, align: 'center'
});
slide.addText('Connexions entre les trois séances', {
  x: 0.5, y: 1.9, w: 9, h: 0.4, fontSize: 18, color: THEME.accentC, align: 'center'
});

// SLIDE: Vue d'Ensemble
slide = addContentSlide('Vue d\'Ensemble du Cours');

// Flow boxes
const flow = [
  { num: '1', title: 'Concepts\nFondamentaux', items: 'Systèmes, Variables\nTransformations' },
  { num: '2', title: 'Température\net Mesure', items: 'Échelles, Gaz parfait\nPrincipe zéro' },
  { num: '3', title: 'Échanges\nd\'Énergie', items: 'Travail W, Chaleur Q\nCalorimétrie' }
];

flow.forEach((f, i) => {
  const x = 0.67 + (i * 3.2);
  
  slide.addShape('rect', { x: x, y: 1.1, w: 2.9, h: 2.2, fill: { color: THEME.primary5 }, line: { color: THEME.primary20, width: 1 } });
  slide.addShape('ellipse', { x: x + 1.05, y: 1.2, w: 0.8, h: 0.5, fill: { color: THEME.accent } });
  slide.addText(f.num, { x: x + 1.05, y: 1.25, w: 0.8, h: 0.4, fontSize: 18, bold: true, color: THEME.white, align: 'center' });
  slide.addText(f.title, { x: x + 0.1, y: 1.8, w: 2.7, h: 0.6, fontSize: 13, bold: true, color: THEME.primary80, align: 'center' });
  slide.addText(f.items, { x: x + 0.1, y: 2.5, w: 2.7, h: 0.7, fontSize: 11, color: THEME.primary60, align: 'center' });
  
  if (i < 2) {
    slide.addText('→', { x: x + 2.9, y: 1.9, w: 0.3, h: 0.4, fontSize: 20, bold: true, color: THEME.accent, align: 'center' });
  }
});

slide.addText('Progression : Les concepts de base permettent de définir la température, qui permet d\'analyser les échanges d\'énergie.', {
  x: 0.67, y: 3.6, w: 8.66, h: 0.5, fontSize: 12, italic: true, color: THEME.primary40
});

// SLIDE: Formules Clés
slide = addContentSlide('Formules Clés à Retenir');

const keyFormulas = [
  { cat: 'Général', formulas: 'PV = nRT | f(P,V,T) = 0' },
  { cat: 'Température', formulas: 'T(K) = T(°C) + 273.15 | α = (1/V)(∂V/∂T)P' },
  { cat: 'Travail', formulas: 'W = -∫P dV | Wisoth = nRT·ln(V₂/V₁)' },
  { cat: 'Chaleur', formulas: 'Q = mcΔT | Q = mL' }
];

keyFormulas.forEach((kf, i) => {
  const y = 1.1 + (i * 0.85);
  slide.addShape('rect', { x: 0.67, y: y, w: 2, h: 0.75, fill: { color: THEME.accent } });
  slide.addText(kf.cat, { x: 0.67, y: y + 0.2, w: 2, h: 0.35, fontSize: 12, bold: true, color: THEME.white, align: 'center' });
  slide.addText(kf.formulas, { x: 2.8, y: y + 0.2, w: 6.2, h: 0.35, fontSize: 13, color: THEME.primary60, fontFace: 'Cambria Math' });
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
  { title: 'Température', content: '0 K = -273.15°C | Point triple eau = 273.16 K' },
  { title: 'Travail', content: 'W = -∫P dV | W isochore = 0' },
  { title: 'Chaleur', content: 'Q = mcΔT (sensible) | Q = mL (latente)' },
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
  x: 0.5, y: 1.6, w: 9, h: 0.5, fontSize: 32, bold: true, color: THEME.white, align: 'center'
});
slide.addShape('rect', { x: 4, y: 2.2, w: 2, h: 0.04, fill: { color: THEME.accent } });
slide.addText('La thermodynamique est une science universelle\nqui repose sur des principes simples mais fondamentaux.\n\nElle permet de comprendre les transformations\nde la matière et de l\'énergie dans les systèmes physiques.', {
  x: 0.5, y: 2.5, w: 9, h: 1.5, fontSize: 16, color: THEME.accentC, align: 'center'
});
slide.addText('Les notions de différentielle totale et de forme différentielle\nsont essentielles pour analyser les variations\ndes grandeurs physiques et thermodynamiques.', {
  x: 0.5, y: 4.1, w: 9, h: 0.8, fontSize: 13, color: THEME.primary40, align: 'center', italic: true
});

// Save the presentation
const outputPath = '/home/z/my-project/thermodynamics-course/Thermodynamique_Cours_Complet.pptx';
pptx.writeFile({ fileName: outputPath })
  .then(() => {
    console.log('Presentation saved to: ' + outputPath);
    console.log('Total slides: ' + pptx.slides.length);
  })
  .catch(err => {
    console.error('Error saving presentation:', err);
  });
