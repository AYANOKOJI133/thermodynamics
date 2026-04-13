'use client';

import { useState } from 'react';
import { quizData } from '@/lib/course-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  CheckCircle, 
  XCircle, 
  RotateCcw, 
  Trophy,
  GraduationCap,
  ChevronRight,
  HelpCircle
} from 'lucide-react';

interface QuizQuestion {
  id: string;
  session: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export default function Quiz() {
  const [selectedSession, setSelectedSession] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [quizCompleted, setQuizCompleted] = useState(false);

  const filteredQuestions: QuizQuestion[] = selectedSession 
    ? quizData.filter(q => q.session === selectedSession)
    : quizData;

  const question = filteredQuestions[currentQuestion];

  const handleAnswerSelect = (index: number) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
  };

  const handleConfirm = () => {
    if (selectedAnswer === null) return;
    
    setAnswers(prev => ({
      ...prev,
      [question.id]: selectedAnswer
    }));
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setAnswers({});
    setQuizCompleted(false);
  };

  const handleSelectSession = (session: number | null) => {
    setSelectedSession(session);
    handleRestart();
  };

  const calculateScore = () => {
    let correct = 0;
    filteredQuestions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) correct++;
    });
    return correct;
  };

  const getScoreColor = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return 'text-emerald-600';
    if (percentage >= 60) return 'text-amber-600';
    return 'text-red-600';
  };

  // Session selection view
  if (!selectedSession && selectedSession !== null) {
    setSelectedSession(null);
  }

  if (selectedSession === null) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-emerald-800 flex items-center gap-2">
            <GraduationCap className="h-6 w-6" />
            Quiz
          </h2>
          <p className="text-gray-600">Testez vos connaissances</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card
            className="cursor-pointer hover:shadow-lg transition-all hover:border-emerald-500"
            onClick={() => handleSelectSession(null)}
          >
            <CardHeader>
              <CardTitle className="text-lg">Toutes les séances</CardTitle>
              <CardDescription>{quizData.length} questions</CardDescription>
            </CardHeader>
          </Card>

          {[1, 2, 3].map(session => {
            const count = quizData.filter(q => q.session === session).length;
            return (
              <Card
                key={session}
                className="cursor-pointer hover:shadow-lg transition-all hover:border-emerald-500"
                onClick={() => handleSelectSession(session)}
              >
                <CardHeader>
                  <CardTitle className="text-lg">Séance {session}</CardTitle>
                  <CardDescription>{count} questions</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <HelpCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
              <div>
                <p className="font-medium text-emerald-800">Comment ça marche ?</p>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li>• Sélectionnez une séance ou testez toutes les questions</li>
                  <li>• Lisez chaque question et choisissez la bonne réponse</li>
                  <li>• Validez pour voir l'explication et passer à la suivante</li>
                  <li>• Obtenez votre score final à la fin du quiz</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Quiz completed view
  if (quizCompleted) {
    const score = calculateScore();
    const total = filteredQuestions.length;
    const percentage = Math.round((score / total) * 100);

    return (
      <div className="space-y-6">
        <Card className="overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6 text-white text-center">
            <Trophy className="h-16 w-16 mx-auto mb-4" />
            <h2 className="text-2xl font-bold">Quiz terminé !</h2>
          </div>
          <CardContent className="pt-6 text-center">
            <p className={`text-5xl font-bold ${getScoreColor(score, total)}`}>
              {score} / {total}
            </p>
            <p className="text-gray-600 mt-2">{percentage}% de réussite</p>

            <div className="mt-6">
              <Progress value={percentage} className="h-3" />
            </div>

            <div className="mt-6 space-y-3">
              {percentage >= 80 && (
                <div className="bg-emerald-50 text-emerald-800 rounded-lg p-3">
                  🎉 Excellent ! Vous maîtrisez bien les concepts !
                </div>
              )}
              {percentage >= 60 && percentage < 80 && (
                <div className="bg-amber-50 text-amber-800 rounded-lg p-3">
                  👍 Bien joué ! Continuez à réviser pour vous améliorer.
                </div>
              )}
              {percentage < 60 && (
                <div className="bg-red-50 text-red-800 rounded-lg p-3">
                  📚 Continuez à étudier les flashcards et le cours.
                </div>
              )}
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <Button variant="outline" onClick={handleRestart} className="gap-2">
                <RotateCcw className="h-4 w-4" />
                Recommencer
              </Button>
              <Button 
                onClick={() => setSelectedSession(null)}
                className="bg-emerald-600 gap-2"
              >
                <GraduationCap className="h-4 w-4" />
                Changer de quiz
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Review answers */}
        <Card>
          <CardHeader>
            <CardTitle>Révision des réponses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredQuestions.map((q, index) => {
                const isCorrect = answers[q.id] === q.correctAnswer;
                return (
                  <div
                    key={q.id}
                    className={`p-3 rounded-lg border ${
                      isCorrect 
                        ? 'bg-emerald-50 border-emerald-200' 
                        : 'bg-red-50 border-red-200'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {isCorrect ? (
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                      )}
                      <div>
                        <p className="font-medium text-gray-800">
                          {index + 1}. {q.question}
                        </p>
                        {!isCorrect && (
                          <p className="text-sm text-emerald-700 mt-1">
                            ✓ Réponse correcte : {q.options[q.correctAnswer]}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Quiz in progress
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-emerald-800 flex items-center gap-2">
            <GraduationCap className="h-6 w-6" />
            Quiz {selectedSession ? `- Séance ${selectedSession}` : '- Toutes séances'}
          </h2>
          <p className="text-gray-600">Question {currentQuestion + 1} sur {filteredQuestions.length}</p>
        </div>
        <Button variant="outline" onClick={() => setSelectedSession(null)}>
          Changer de quiz
        </Button>
      </div>

      {/* Progress */}
      <Progress 
        value={((currentQuestion + 1) / filteredQuestions.length) * 100} 
        className="h-2" 
      />

      {/* Question Card */}
      <Card className="overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50">
          <div className="flex items-center justify-between">
            <Badge className="bg-emerald-600">Séance {question.session}</Badge>
            <span className="text-sm text-gray-500">
              Question {currentQuestion + 1}/{filteredQuestions.length}
            </span>
          </div>
          <CardTitle className="text-xl mt-4">{question.question}</CardTitle>
        </CardHeader>

        <CardContent className="pt-6 space-y-3">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === question.correctAnswer;
            const showResult = showExplanation;

            let buttonClass = 'border-gray-200 hover:border-emerald-400 hover:bg-emerald-50';
            if (showResult) {
              if (isCorrect) {
                buttonClass = 'border-emerald-500 bg-emerald-50 text-emerald-800';
              } else if (isSelected && !isCorrect) {
                buttonClass = 'border-red-500 bg-red-50 text-red-800';
              }
            } else if (isSelected) {
              buttonClass = 'border-emerald-500 bg-emerald-50';
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showExplanation}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${buttonClass}`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span>{option}</span>
                  {showResult && isCorrect && (
                    <CheckCircle className="h-5 w-5 text-emerald-600 ml-auto" />
                  )}
                  {showResult && isSelected && !isCorrect && (
                    <XCircle className="h-5 w-5 text-red-600 ml-auto" />
                  )}
                </div>
              </button>
            );
          })}
        </CardContent>
      </Card>

      {/* Explanation */}
      {showExplanation && (
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-4">
            <p className="font-medium text-blue-800 mb-2">Explication :</p>
            <p className="text-blue-700">{question.explanation}</p>
          </CardContent>
        </Card>
      )}

      {/* Actions */}
      <div className="flex justify-center gap-4">
        {!showExplanation ? (
          <Button
            onClick={handleConfirm}
            disabled={selectedAnswer === null}
            className="bg-emerald-600 gap-2 px-8"
          >
            Valider
            <ChevronRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            onClick={handleNext}
            className="bg-emerald-600 gap-2 px-8"
          >
            {currentQuestion < filteredQuestions.length - 1 ? (
              <>
                Question suivante
                <ChevronRight className="h-4 w-4" />
              </>
            ) : (
              <>
                Voir les résultats
                <Trophy className="h-4 w-4" />
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  );
}
