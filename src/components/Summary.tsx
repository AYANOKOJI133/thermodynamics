'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  CheckCircle, 
  Lightbulb, 
  AlertTriangle,
  BookOpen,
  Target,
  ArrowRight
} from 'lucide-react';

export default function Summary() {
  const sessions = [
    {
      id: 1,
      title: 'Concepts Fondamentaux',
      color: 'emerald',
      keyPoints: [
        'La thermodynamique etudie les transformations de matiere et d\'energie',
        '3 types de systemes: ouvert (matiere+energie), ferme (energie), isole (rien)',
        'Variables extensives (V, m) vs intensives (T, P)',
        'Fonctions d\'etat: variation independante du chemin (U, H, S)',
        'Transformations: isochore (V=cst), isobare (P=cst), isotherme (T=cst), adiabatique (Q=0)',
        'DTE: d2f/dxdy = d2f/dydx (integration independante du chemin)',
        'Coefficients STEP: alpha, beta, chi_T'
      ],
      formulas: ['PV = nRT', 'f(P,V,T) = 0', 'df = (df/dx)dx + (df/dy)dy']
    },
    {
      id: 2,
      title: 'Temperature et Dilatation',
      color: 'blue',
      keyPoints: [
        'Temperature = mesure de l\'agitation moleculaire',
        'Zero absolu: 0 K = -273.15 C (agitation nulle)',
        'Point triple de l\'eau: T = 273.16 K, P = 611 Pa',
        'Principe zero: equilibre thermique entre systemes',
        'Gaz parfait: molecules ponctuelles, sans interaction, chocs elastiques',
        'R = 8.314 J.K-1.mol-1',
        'Theoreme d\'equipartition: (1/2)kT par degre de liberte',
        'Dilatation: alpha_V = 3 x alpha_l (corps isotrope)'
      ],
      formulas: ['T(K) = T(C) + 273.15', 'PV = nRT', 'P1V1 = P2V2 (Mariotte)', '(1/2)m<v2> = (3/2)kT']
    },
    {
      id: 3,
      title: 'Travail et Chaleur',
      color: 'purple',
      keyPoints: [
        'Chaleur: energie echangee par difference de temperature',
        '3 modes: conduction, convection, rayonnement',
        'Capacites thermiques: CV (V=cst), CP (P=cst)',
        'Relation de Mayer: CP - CV = nR',
        'Chaleur latente: Q = mL (changement d\'etat)',
        'Calorimetrie: Somme(Qi) = 0 (systeme isole)',
        'Travail: dW = -P_ext x dV',
        'W n\'est PAS une fonction d\'etat (depend du chemin)'
      ],
      formulas: ['Q = mc x dT', 'Q = mL', 'dW = -P_ext x dV', 'W = nRT x ln(V2/V1) (isotherme)']
    },
    {
      id: 4,
      title: 'Premier Principe',
      color: 'indigo',
      keyPoints: [
        'Delta U = W + Q (conservation de l\'energie)',
        'U = fonction d\'etat extensive',
        'Systeme isole: Delta U = 0',
        'Loi de Joule: U = U(T) pour un gaz parfait',
        'Gaz monoatomique: U = (3/2)nRT, CV = (3/2)R',
        'Gaz diatomique: U = (5/2)nRT, CV = (5/2)R',
        'Enthalpie: H = U + PV',
        'Transformation isochore: W = 0, Q = Delta U',
        'Transformation isobare: Q = Delta H',
        'Adiabatique reversible: PV^gamma = Cste'
      ],
      formulas: ['Delta U = W + Q', 'H = U + PV', 'PV^gamma = Cste', 'gamma = CP/CV']
    },
    {
      id: 5,
      title: 'Second Principe',
      color: 'rose',
      keyPoints: [
        'Le 1er principe ne predit pas le sens des transformations',
        'Enonce de Clausius: chaleur va du chaud vers le froid',
        'Enonce de Kelvin: impossible de convertir Q integralement en W',
        'Entropie S: fonction d\'etat, dS = dQ_rev/T',
        'Unite de S: J/K',
        'Bilan entropique: Delta S = Delta S_e + Delta S_c',
        'Entropie creee: Delta S_c >= 0 (toujours positive)',
        'Systeme isole: Delta S >= 0 (l\'entropie augmente)',
        'Transformation reversible: Delta S_c = 0'
      ],
      formulas: ['dS = dQ_rev/T', 'Delta S = Delta S_e + Delta S_c', 'Somme(Q/T) <= 0 (cycle)']
    },
    {
      id: 6,
      title: 'Machines Dithermes',
      color: 'amber',
      keyPoints: [
        'Machine thermique: transformations cycliques',
        'Fonctionne avec au moins 2 sources de chaleur',
        'Cycle moteur: W < 0 (fournit travail), Q1 > 0, Q2 < 0',
        'Rendement: eta = |W|/Q1 < 1',
        'Cycle recepteur: W > 0 (recoit travail)',
        'Machine frigorifique: efficacite e = Q2/W',
        'Pompe a chaleur: performance p = -Q1/W > 1',
        'Cycle de Carnot: 2 isothermes + 2 adiabatiques',
        'Rendement Carnot: eta = 1 - T2/T1 (maximal)',
        'Theoreme de Carnot: rendement max pour sources donnees'
      ],
      formulas: ['eta = 1 - T2/T1', 'e = T2/(T1-T2)', 'p = T1/(T1-T2)', 'Q1/T1 + Q2/T2 = 0']
    }
  ];

  const tips = [
    'Memorisez la convention du banquier: positif = recu, negatif = cede',
    'DTE vs forme differentielle: seule la DTE est independante du chemin',
    'Pour les gaz parfaits, utilisez PV = nRT dans les problemes',
    'Attention: W et Q ne sont PAS des fonctions d\'etat',
    'Le zero absolu est la limite, impossible a atteindre physiquement',
    'Gamma = CP/CV: monoatomique = 5/3, diatomique = 7/5',
    'Pour un cycle: Delta U = 0 (etat final = etat initial)',
    'L\'entropie creee est toujours positive (Delta S_c >= 0)',
    'Rendement Carnot = rendement MAXIMAL',
    'Performance PAC toujours > 1 (plus efficace que chauffage electrique)'
  ];

  const pitfalls = [
    'Confondre chaleur et temperature (grandeurs differentes !)',
    'Penser qu\'une transformation quasi-statique est toujours reversible',
    'Oublier le signe negatif dans dW = -P_ext x dV',
    'Appliquer les lois des gaz parfaits aux gaz reels sans precaution',
    'Negliger la valeur en eau du calorimetre dans les calculs',
    'Confondre variables extensives et intensives',
    'Croire que le rendement peut atteindre 100%',
    'Oublier que l\'entropie creee est toujours positive',
    'Confondre rendement (moteur) et efficacite (frigo)',
    'Penser que l\'enthalpie ne depend que de T (vrai seulement pour GP)'
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-emerald-800 flex items-center gap-2">
          <FileText className="h-6 w-6" />
          Fiche de Revision Finale
        </h2>
        <p className="text-gray-600">Synthese complete des 6 seances</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200">
          <CardContent className="pt-4 text-center">
            <p className="text-3xl font-bold text-emerald-600">6</p>
            <p className="text-sm text-gray-600">Seances</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
          <CardContent className="pt-4 text-center">
            <p className="text-3xl font-bold text-blue-600">188</p>
            <p className="text-sm text-gray-600">Flashcards</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
          <CardContent className="pt-4 text-center">
            <p className="text-3xl font-bold text-purple-600">83</p>
            <p className="text-sm text-gray-600">Questions Quiz</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200">
          <CardContent className="pt-4 text-center">
            <p className="text-3xl font-bold text-amber-600">50+</p>
            <p className="text-sm text-gray-600">Formules</p>
          </CardContent>
        </Card>
      </div>

      {/* Sessions Summary */}
      {sessions.map((session) => (
        <Card key={session.id} className="overflow-hidden">
          <CardHeader className={`bg-gradient-to-r from-${session.color}-500 to-${session.color}-600 text-white`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-lg">
                {session.id}
              </div>
              <CardTitle>Seance {session.id}: {session.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-4 space-y-4">
            {/* Key Points */}
            <div>
              <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <Target className="h-4 w-4" />
                Points Cles
              </h4>
              <ul className="space-y-2">
                {session.keyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Formulas */}
            <div>
              <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Formules Essentielles
              </h4>
              <div className="flex flex-wrap gap-2">
                {session.formulas.map((formula, i) => (
                  <Badge key={i} variant="outline" className="text-sm font-mono bg-gray-50">
                    {formula}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Tips */}
      <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-800 flex items-center gap-2">
            <Lightbulb className="h-5 w-5" />
            Conseils pour Reussir
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                {tip}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Common Pitfalls */}
      <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
        <CardHeader>
          <CardTitle className="text-red-800 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Pieges a Eviter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {pitfalls.map((pitfall, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                {pitfall}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Master Formulas Table */}
      <Card>
        <CardHeader>
          <CardTitle>Tableau Recapitulatif des Formules</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-emerald-600 text-white">
                <tr>
                  <th className="px-4 py-2 text-left">Categorie</th>
                  <th className="px-4 py-2 text-left">Formule</th>
                  <th className="px-4 py-2 text-left">Signification</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-medium">General</td>
                  <td className="px-4 py-2 font-mono">PV = nRT</td>
                  <td className="px-4 py-2">Equation gaz parfait</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">Temperature</td>
                  <td className="px-4 py-2 font-mono">T(K) = T(C) + 273.15</td>
                  <td className="px-4 py-2">Conversion Kelvin-Celsius</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-medium" rowSpan={2}>Travail</td>
                  <td className="px-4 py-2 font-mono">dW = -P_ext x dV</td>
                  <td className="px-4 py-2">Travail elementaire</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-mono">W = nRT x ln(V2/V1)</td>
                  <td className="px-4 py-2">Travail isotherme (GP)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium" rowSpan={2}>Chaleur</td>
                  <td className="px-4 py-2 font-mono">Q = mc x dT</td>
                  <td className="px-4 py-2">Chaleur sensible</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono">CP - CV = nR</td>
                  <td className="px-4 py-2">Relation de Mayer</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-medium" rowSpan={2}>1er Principe</td>
                  <td className="px-4 py-2 font-mono">Delta U = W + Q</td>
                  <td className="px-4 py-2">Conservation energie</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-mono">PV^gamma = Cste</td>
                  <td className="px-4 py-2">Adiabatique reversible</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium" rowSpan={2}>2nd Principe</td>
                  <td className="px-4 py-2 font-mono">dS = dQ_rev/T</td>
                  <td className="px-4 py-2">Entropie</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono">Delta S_c &gt;= 0</td>
                  <td className="px-4 py-2">Entropie creee positive</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-medium" rowSpan={3}>Machines</td>
                  <td className="px-4 py-2 font-mono">eta = 1 - T2/T1</td>
                  <td className="px-4 py-2">Rendement Carnot</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-mono">e = T2/(T1-T2)</td>
                  <td className="px-4 py-2">Efficacite frigo Carnot</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-mono">p = T1/(T1-T2)</td>
                  <td className="px-4 py-2">Performance PAC Carnot</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Final Message */}
      <Card className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
        <CardContent className="pt-6 text-center">
          <p className="text-xl font-bold mb-2">Bonne revision !</p>
          <p className="text-emerald-100">
            Utilisez les flashcards pour memoriser les definitions et les quiz pour tester vos connaissances.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
