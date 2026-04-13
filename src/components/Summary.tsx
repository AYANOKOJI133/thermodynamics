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
        'La thermodynamique étudie les transformations de matière et d\'énergie',
        '3 types de systèmes: ouvert (matière+énergie), fermé (énergie), isolé (rien)',
        'Variables extensives (V, m) vs intensives (T, P)',
        'Fonctions d\'état: variation indépendante du chemin (U, H, S)',
        'Transformations: isochore (V=cst), isobare (P=cst), isotherme (T=cst), adiabatique (Q=0)',
        'DTE: ∂²f/∂x∂y = ∂²f/∂y∂x (intégration indépendante du chemin)',
        'Coefficients STEP: α, β, χT'
      ],
      formulas: ['PV = nRT', 'f(P,V,T) = 0', 'df = (∂f/∂x)dx + (∂f/∂y)dy']
    },
    {
      id: 2,
      title: 'Température et Dilatation',
      color: 'blue',
      keyPoints: [
        'Température = mesure de l\'agitation moléculaire',
        'Zéro absolu: 0 K = -273.15°C (agitation nulle)',
        'Point triple de l\'eau: T = 273.16 K, P = 611 Pa',
        'Principe zéro: équilibre thermique entre systèmes',
        'Gaz parfait: molécules ponctuelles, sans interaction, chocs élastiques',
        'R = 8.314 J·K⁻¹·mol⁻¹',
        'Théorème d\'équipartition: (1/2)kT par degré de liberté',
        'Dilatation: αV = 3αl (corps isotrope)'
      ],
      formulas: ['T(K) = T(°C) + 273.15', 'PV = nRT', 'P₁V₁ = P₂V₂ (Mariotte)', '(1/2)m<v²> = (3/2)kT']
    },
    {
      id: 3,
      title: 'Travail et Chaleur',
      color: 'purple',
      keyPoints: [
        'Chaleur: énergie échangée par différence de température',
        '3 modes: conduction, convection, rayonnement',
        'Capacités thermiques: CV (V=cst), CP (P=cst)',
        'Relation de Mayer: CP - CV = nR',
        'Chaleur latente: Q = mL (changement d\'état)',
        'Calorimétrie: ΣQi = 0 (système isolé)',
        'Travail: δW = -Pext·dV',
        'W n\'est PAS une fonction d\'état (dépend du chemin)'
      ],
      formulas: ['Q = mcΔT', 'Q = mL', 'δW = -Pext·dV', 'W = nRT·ln(V₂/V₁) (isotherme)']
    }
  ];

  const tips = [
    'Mémorisez la convention du banquier: positif = reçu, négatif = cédé',
    'DTE vs forme différentielle: seule la DTE est indépendante du chemin',
    'Pour les gaz parfaits, utilisez PV = nRT dans les problèmes',
    'Attention: W et Q ne sont PAS des fonctions d\'état',
    'Le zéro absolu est la limite, impossible à atteindre physiquement',
    'Relation importante: αV = 3αl pour les corps isotropes'
  ];

  const pitfalls = [
    'Confondre chaleur et température (grandeurs différentes !)',
    'Penser qu\'une transformation quasi-statique est toujours réversible',
    'Oublier le signe négatif dans δW = -Pext·dV',
    'Appliquer les lois des gaz parfaits aux gaz réels sans précaution',
    'Négliger la valeur en eau du calorimètre dans les calculs',
    'Confondre variables extensives et intensives'
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-emerald-800 flex items-center gap-2">
          <FileText className="h-6 w-6" />
          Fiche de Révision Finale
        </h2>
        <p className="text-gray-600">Synthèse complète des 3 séances</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200">
          <CardContent className="pt-4 text-center">
            <p className="text-3xl font-bold text-emerald-600">3</p>
            <p className="text-sm text-gray-600">Séances</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
          <CardContent className="pt-4 text-center">
            <p className="text-3xl font-bold text-blue-600">47</p>
            <p className="text-sm text-gray-600">Flashcards</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
          <CardContent className="pt-4 text-center">
            <p className="text-3xl font-bold text-purple-600">24</p>
            <p className="text-sm text-gray-600">Questions Quiz</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200">
          <CardContent className="pt-4 text-center">
            <p className="text-3xl font-bold text-amber-600">20+</p>
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
              <CardTitle>Séance {session.id}: {session.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-4 space-y-4">
            {/* Key Points */}
            <div>
              <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <Target className="h-4 w-4" />
                Points Clés
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
            Conseils pour Réussir
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
            Pièges à Éviter
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
          <CardTitle>Tableau Récapitulatif des Formules</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-emerald-600 text-white">
                <tr>
                  <th className="px-4 py-2 text-left">Catégorie</th>
                  <th className="px-4 py-2 text-left">Formule</th>
                  <th className="px-4 py-2 text-left">Signification</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-medium" rowSpan={2}>Général</td>
                  <td className="px-4 py-2 font-mono">PV = nRT</td>
                  <td className="px-4 py-2">Équation gaz parfait</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-mono">df = (∂f/∂x)dx + (∂f/∂y)dy</td>
                  <td className="px-4 py-2">Différentielle totale</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium" rowSpan={2}>Température</td>
                  <td className="px-4 py-2 font-mono">T(K) = T(°C) + 273.15</td>
                  <td className="px-4 py-2">Conversion Kelvin-Celsius</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono">(1/2)m&lt;v²&gt; = (3/2)kT</td>
                  <td className="px-4 py-2">Energie cinetique moyenne</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-medium" rowSpan={3}>Travail</td>
                  <td className="px-4 py-2 font-mono">dW = -Pext.dV</td>
                  <td className="px-4 py-2">Travail elementaire</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-mono">W = -P(V2-V1)</td>
                  <td className="px-4 py-2">Travail isobare</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-mono">W = nRT.ln(V2/V1)</td>
                  <td className="px-4 py-2">Travail isotherme (gaz parfait)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium" rowSpan={3}>Chaleur</td>
                  <td className="px-4 py-2 font-mono">Q = mc.dT</td>
                  <td className="px-4 py-2">Chaleur sensible</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono">Q = mL</td>
                  <td className="px-4 py-2">Chaleur latente</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono">CP - CV = nR</td>
                  <td className="px-4 py-2">Relation de Mayer</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-medium" rowSpan={3}>STEP</td>
                  <td className="px-4 py-2 font-mono">α = (1/V)(∂V/∂T)P</td>
                  <td className="px-4 py-2">Dilatation isobare</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-mono">β = (1/P)(∂P/∂T)V</td>
                  <td className="px-4 py-2">Augmentation pression</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-mono">χT = -(1/V)(∂V/∂P)T</td>
                  <td className="px-4 py-2">Compressibilité isotherme</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Final Message */}
      <Card className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
        <CardContent className="pt-6 text-center">
          <p className="text-xl font-bold mb-2">Bonne révision ! 🎓</p>
          <p className="text-emerald-100">
            Utilisez les flashcards pour mémoriser les définitions et les quiz pour tester vos connaissances.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
