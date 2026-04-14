'use client';

import { useState, useEffect } from 'react';
import { BookOpen, GraduationCap, FlaskConical, Lightbulb, FileText, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import CourseContent from '@/components/CourseContent';
import Flashcards from '@/components/Flashcards';
import Quiz from '@/components/Quiz';
import Formulas from '@/components/Formulas';
import Summary from '@/components/Summary';
import { useProgressStore } from '@/lib/store';
import { flashcardsData } from '@/lib/course-data';

type Tab = 'course' | 'flashcards' | 'quiz' | 'formulas' | 'summary';

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('course');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { reviewedCards, setTotalCards } = useProgressStore();

  // Set total cards on mount
  useEffect(() => {
    setTotalCards(flashcardsData.length);
  }, [setTotalCards]);

  const tabs = [
    { id: 'course' as Tab, label: 'Cours', icon: BookOpen, description: 'Contenu complet des 6 seances' },
    { id: 'flashcards' as Tab, label: 'Flashcards', icon: Lightbulb, description: 'Reviser les definitions cles' },
    { id: 'quiz' as Tab, label: 'Quiz', icon: GraduationCap, description: 'Testez vos connaissances' },
    { id: 'formulas' as Tab, label: 'Formules', icon: FlaskConical, description: 'Toutes les formules essentielles' },
    { id: 'summary' as Tab, label: 'Resume', icon: FileText, description: 'Fiche de revision finale' },
  ];

  const progressPercentage = flashcardsData.length > 0 
    ? (reviewedCards.length / flashcardsData.length) * 100 
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-800 to-teal-700 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-amber-500 p-2 rounded-lg">
                <FlaskConical className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold">Thermodynamique - Adil_Err</h1>
                <p className="text-emerald-200 text-sm hidden sm:block">Mon outil de revision</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? 'secondary' : 'ghost'}
                  size="sm"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 ${activeTab === tab.id ? 'bg-white text-emerald-800' : 'text-white hover:bg-emerald-700'}`}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </Button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 flex flex-col gap-2">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? 'secondary' : 'ghost'}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`justify-start ${activeTab === tab.id ? 'bg-white text-emerald-800' : 'text-white hover:bg-emerald-700'}`}
                >
                  <tab.icon className="h-4 w-4 mr-2" />
                  {tab.label}
                </Button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-medium text-emerald-800">Ma progression</span>
            <span className="text-sm text-emerald-600">{Math.round(progressPercentage)}%</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Tab Cards for Desktop */}
        <div className="hidden md:grid grid-cols-5 gap-4 mb-6">
          {tabs.map((tab) => (
            <Card
              key={tab.id}
              className={`cursor-pointer transition-all hover:shadow-lg ${activeTab === tab.id ? 'ring-2 ring-emerald-500 bg-emerald-50' : 'hover:bg-gray-50'}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <CardHeader className="p-4">
                <div className="flex items-center gap-2">
                  <tab.icon className={`h-5 w-5 ${activeTab === tab.id ? 'text-emerald-600' : 'text-gray-500'}`} />
                  <CardTitle className={`text-sm ${activeTab === tab.id ? 'text-emerald-800' : 'text-gray-700'}`}>
                    {tab.label}
                  </CardTitle>
                </div>
                <CardDescription className="text-xs">{tab.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Content Area */}
        <div className="mt-4">
          {activeTab === 'course' && <CourseContent />}
          {activeTab === 'flashcards' && <Flashcards />}
          {activeTab === 'quiz' && <Quiz />}
          {activeTab === 'formulas' && <Formulas />}
          {activeTab === 'summary' && <Summary />}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg font-medium">Made by Adil_Err & 7bibna l'AI 🤖</p>
          <p className="text-sm text-emerald-300 mt-2">Thermodynamique - 6 Seances</p>
        </div>
      </footer>
    </div>
  );
}
