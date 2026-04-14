'use client';

import { useState } from 'react';
import { formulasData } from '@/lib/course-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FlaskConical, Calculator, Thermometer, Zap, Flame, Atom, ChevronDown, ChevronUp, Waves, Sparkles, Droplets, Target, Settings, RotateCcw, Cpu, Database, Copy, Check } from 'lucide-react';
import Math from './Math';

const categories = [
  { id: 'general', label: 'General', icon: Calculator, color: 'from-gray-500 to-slate-500' },
  { id: 'temperature', label: 'Temperature', icon: Thermometer, color: 'from-blue-500 to-cyan-500' },
  { id: 'travail', label: 'Travail', icon: Zap, color: 'from-amber-500 to-orange-500' },
  { id: 'chaleur', label: 'Chaleur', icon: Flame, color: 'from-red-500 to-pink-500' },
  { id: 'gazParfait', label: 'Gaz Parfait', icon: FlaskConical, color: 'from-emerald-500 to-teal-500' },
  { id: 'premierPrincipe', label: 'Premier Principe', icon: Settings, color: 'from-purple-500 to-violet-500' },
  { id: 'secondPrincipe', label: 'Second Principe', icon: RotateCcw, color: 'from-indigo-500 to-blue-500' },
  { id: 'machines', label: 'Machines Dithermes', icon: Cpu, color: 'from-rose-500 to-red-500' },
  { id: 'chaleursLatentes', label: 'Chaleurs Latentes', icon: Droplets, color: 'from-sky-500 to-blue-500' },
  { id: 'constantes', label: 'Constantes', icon: Database, color: 'from-amber-500 to-yellow-500' },
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

  // Count total formulas
  const totalFormulas = Object.values(formulasData).reduce((acc, arr) => acc + arr.length, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-emerald-800 flex items-center gap-2">
          <FlaskConical className="h-6 w-6" />
          Formules Essentielles
        </h2>
        <p className="text-gray-600">Toutes les formules a retenir - {totalFormulas} formules au total (Seances 1-6)</p>
      </div>

      {/* Quick Reference Card */}
      <Card className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
        <CardContent className="pt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-2xl">
                <Math>{'PV = nRT'}</Math>
              </div>
              <p className="text-sm text-emerald-100 mt-1">Gaz Parfait</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-2xl">
                <Math>{'\\Delta U = W + Q'}</Math>
              </div>
              <p className="text-sm text-emerald-100 mt-1">1er Principe</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-2xl">
                <Math>{'dS = \\frac{\\delta Q}{T}'}</Math>
              </div>
              <p className="text-sm text-emerald-100 mt-1">Entropie</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-2xl">
                <Math>{'\\eta = 1 - \\frac{T_2}{T_1}'}</Math>
              </div>
              <p className="text-sm text-emerald-100 mt-1">Carnot</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <div className="space-y-4">
        {categories.map((category) => {
          const Icon = category.icon;
          const formulas = formulasData[category.id as keyof typeof formulasData];
          
          if (!formulas || formulas.length === 0) return null;
          
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
                          <div className="flex items-center gap-2 mb-2">
                            <p className="font-medium text-gray-800">{formula.name}</p>
                            {formula.session && (
                              <Badge variant="outline" className="text-xs">
                                S{formula.session}
                              </Badge>
                            )}
                          </div>
                          <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                            <div className="text-xl md:text-2xl text-center text-emerald-700">
                              <Math display>{formula.formula}</Math>
                            </div>
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
                          className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
                        >
                          {copiedFormula === formula.name ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 border border-amber-100">
              <p className="font-medium text-amber-800">Constante des gaz parfaits</p>
              <div className="text-xl mt-1 text-amber-600">
                <Math>{'R = 8.314 \\, \\text{J.K}^{-1}\\text{.mol}^{-1}'}</Math>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-amber-100">
              <p className="font-medium text-amber-800">Constante de Boltzmann</p>
              <div className="text-xl mt-1 text-amber-600">
                <Math>{'k = 1.38 \\times 10^{-23} \\, \\text{J/K}'}</Math>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-amber-100">
              <p className="font-medium text-amber-800">Point triple de l&apos;eau</p>
              <div className="text-xl mt-1 text-amber-600">
                <Math>{'T = 273.16 \\, \\text{K}'}</Math>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-amber-100">
              <p className="font-medium text-amber-800">Volume molaire (STP)</p>
              <div className="text-xl mt-1 text-amber-600">
                <Math>{'V_m = 22.414 \\, \\text{L/mol}'}</Math>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-amber-100">
              <p className="font-medium text-amber-800">Pression atmospherique</p>
              <div className="text-xl mt-1 text-amber-600">
                <Math>{'P_{atm} = 1.013 \\times 10^5 \\, \\text{Pa}'}</Math>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-amber-100">
              <p className="font-medium text-amber-800">Zero absolu</p>
              <div className="text-xl mt-1 text-amber-600">
                <Math>{'T = 0 \\, \\text{K} = -273.15 \\, ^\\circ\\text{C}'}</Math>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Chaleurs Latentes */}
      <Card className="bg-gradient-to-br from-sky-50 to-blue-50 border-sky-200">
        <CardHeader>
          <CardTitle className="text-sky-800">Chaleurs Latentes de l&apos;Eau</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 border border-sky-100 text-center">
              <p className="font-medium text-sky-800">Fusion (glace vers eau)</p>
              <div className="text-xl mt-1 text-sky-600">
                <Math>{'L = 334 \\, \\text{kJ/kg}'}</Math>
              </div>
              <p className="text-sm text-gray-500 mt-1">a 0°C</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-sky-100 text-center">
              <p className="font-medium text-sky-800">Vaporisation (eau vers vapeur)</p>
              <div className="text-xl mt-1 text-sky-600">
                <Math>{'L = 2260 \\, \\text{kJ/kg}'}</Math>
              </div>
              <p className="text-sm text-gray-500 mt-1">a 100°C</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-sky-100 text-center">
              <p className="font-medium text-sky-800">Sublimation (glace vers vapeur)</p>
              <div className="text-xl mt-1 text-sky-600">
                <Math>{'L = 2594 \\, \\text{kJ/kg}'}</Math>
              </div>
              <p className="text-sm text-gray-500 mt-1">a 0°C</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary by Session */}
      <Card>
        <CardHeader>
          <CardTitle>Resume par Seance</CardTitle>
          <CardDescription>Nombre de formules par seance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="text-center p-4 bg-emerald-50 rounded-lg">
              <p className="text-3xl font-bold text-emerald-700">3</p>
              <p className="text-sm text-gray-600">Seance 1</p>
              <p className="text-xs text-gray-500">General</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-3xl font-bold text-blue-700">4</p>
              <p className="text-sm text-gray-600">Seance 2</p>
              <p className="text-xs text-gray-500">Temperature</p>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <p className="text-3xl font-bold text-red-700">5</p>
              <p className="text-sm text-gray-600">Seance 3</p>
              <p className="text-xs text-gray-500">Chaleur</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <p className="text-3xl font-bold text-purple-700">10</p>
              <p className="text-sm text-gray-600">Seance 4</p>
              <p className="text-xs text-gray-500">1er Principe</p>
            </div>
            <div className="text-center p-4 bg-indigo-50 rounded-lg">
              <p className="text-3xl font-bold text-indigo-700">7</p>
              <p className="text-sm text-gray-600">Seance 5</p>
              <p className="text-xs text-gray-500">2nd Principe</p>
            </div>
            <div className="text-center p-4 bg-rose-50 rounded-lg">
              <p className="text-3xl font-bold text-rose-700">8</p>
              <p className="text-sm text-gray-600">Seance 6</p>
              <p className="text-xs text-gray-500">Machines</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
