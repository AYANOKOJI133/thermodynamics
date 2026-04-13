'use client';

import { useState } from 'react';
import { formulasData } from '@/lib/course-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FlaskConical, Calculator, Thermometer, Zap, Flame, Atom, ChevronDown, ChevronUp } from 'lucide-react';

const categories = [
  { id: 'general', label: 'Général', icon: Calculator, color: 'from-gray-500 to-slate-500' },
  { id: 'temperature', label: 'Température', icon: Thermometer, color: 'from-blue-500 to-cyan-500' },
  { id: 'travail', label: 'Travail', icon: Zap, color: 'from-amber-500 to-orange-500' },
  { id: 'chaleur', label: 'Chaleur', icon: Flame, color: 'from-red-500 to-pink-500' },
  { id: 'step', label: 'STEP', icon: Atom, color: 'from-purple-500 to-violet-500' },
  { id: 'gazParfait', label: 'Gaz Parfait', icon: FlaskConical, color: 'from-emerald-500 to-teal-500' },
];

export default function Formulas() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('general');
  const [copiedFormula, setCopiedFormula] = useState<string | null>(null);

  const handleCopy = (formula: string, name: string) => {
    navigator.clipboard.writeText(formula);
    setCopiedFormula(name);
    setTimeout(() => setCopiedFormula(null), 2000);
  };

  const toggleCategory = (id: string) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-emerald-800 flex items-center gap-2">
          <FlaskConical className="h-6 w-6" />
          Formules Essentielles
        </h2>
        <p className="text-gray-600">Toutes les formules à retenir pour votre cours de thermodynamique</p>
      </div>

      {/* Quick Reference Card */}
      <Card className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
        <CardContent className="pt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-3xl font-mono font-bold">PV=nRT</p>
              <p className="text-sm text-emerald-100 mt-1">Gaz Parfait</p>
            </div>
            <div>
              <p className="text-3xl font-mono font-bold">δW=-PdV</p>
              <p className="text-sm text-emerald-100 mt-1">Travail</p>
            </div>
            <div>
              <p className="text-3xl font-mono font-bold">Q=mcΔT</p>
              <p className="text-sm text-emerald-100 mt-1">Chaleur</p>
            </div>
            <div>
              <p className="text-3xl font-mono font-bold">T(K)=T(°C)+273.15</p>
              <p className="text-sm text-emerald-100 mt-1">Conversion</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <div className="space-y-4">
        {categories.map((category) => {
          const Icon = category.icon;
          const formulas = formulasData[category.id as keyof typeof formulasData];
          const isExpanded = expandedCategory === category.id;

          return (
            <Card key={category.id} className="overflow-hidden">
              <CardHeader
                className={`cursor-pointer bg-gradient-to-r ${category.color} text-white transition-all`}
                onClick={() => toggleCategory(category.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon className="h-6 w-6" />
                    <div>
                      <CardTitle>{category.label}</CardTitle>
                      <CardDescription className="text-white/70">
                        {formulas.length} formule{formulas.length > 1 ? 's' : ''}
                      </CardDescription>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </div>
              </CardHeader>

              {isExpanded && (
                <CardContent className="pt-4 space-y-4">
                  {formulas.map((formula, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-emerald-300 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <p className="font-medium text-gray-800 mb-2">{formula.name}</p>
                          <div className="bg-white rounded-lg p-3 border border-gray-100">
                            <p className="text-xl md:text-2xl font-mono text-emerald-700 text-center">
                              {formula.formula}
                            </p>
                          </div>
                          {formula.variables && (
                            <p className="text-sm text-gray-500 mt-2 italic">
                              {formula.variables}
                            </p>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleCopy(formula.formula, formula.name)}
                          className="text-emerald-600"
                        >
                          {copiedFormula === formula.name ? '✓' : 'Copier'}
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>

      {/* Constants Reference */}
      <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200">
        <CardHeader>
          <CardTitle className="text-amber-800">Constantes Fondamentales</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-amber-100">
              <p className="font-medium text-amber-800">Constante des gaz parfaits</p>
              <p className="text-2xl font-mono text-amber-600 mt-1">R = 8.314 J·K⁻¹·mol⁻¹</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-amber-100">
              <p className="font-medium text-amber-800">Constante de Boltzmann</p>
              <p className="text-2xl font-mono text-amber-600 mt-1">k = 1.38×10⁻²³ J/K</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-amber-100">
              <p className="font-medium text-amber-800">Point triple de l'eau</p>
              <p className="text-2xl font-mono text-amber-600 mt-1">T = 273.16 K</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-amber-100">
              <p className="font-medium text-amber-800">Volume molaire (STP)</p>
              <p className="text-2xl font-mono text-amber-600 mt-1">Vm = 22.414 L/mol</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Unit Conversions */}
      <Card>
        <CardHeader>
          <CardTitle>Conversions d'Unités</CardTitle>
          <CardDescription>Tables de conversion utiles</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left font-medium">Grandeur</th>
                  <th className="px-4 py-2 text-left font-medium">Unité SI</th>
                  <th className="px-4 py-2 text-left font-medium">Autres unités</th>
                  <th className="px-4 py-2 text-left font-medium">Conversion</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-2">Énergie</td>
                  <td className="px-4 py-2 font-mono">Joule (J)</td>
                  <td className="px-4 py-2">calorie, eV</td>
                  <td className="px-4 py-2 font-mono">1 cal = 4.186 J</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Pression</td>
                  <td className="px-4 py-2 font-mono">Pascal (Pa)</td>
                  <td className="px-4 py-2">atm, bar</td>
                  <td className="px-4 py-2 font-mono">1 atm = 1.013×10⁵ Pa</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Température</td>
                  <td className="px-4 py-2 font-mono">Kelvin (K)</td>
                  <td className="px-4 py-2">°C, °F</td>
                  <td className="px-4 py-2 font-mono">T(K) = T(°C) + 273.15</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Volume</td>
                  <td className="px-4 py-2 font-mono">m³</td>
                  <td className="px-4 py-2">L, cm³</td>
                  <td className="px-4 py-2 font-mono">1 L = 10⁻³ m³</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
