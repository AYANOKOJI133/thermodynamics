'use client';

import { useState } from 'react';
import { flashcardsData } from '@/lib/course-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw, 
  Eye, 
  EyeOff, 
  Shuffle, 
  CheckCircle,
  Lightbulb
} from 'lucide-react';
import { useProgressStore } from '@/lib/store';
import RenderContent from './RenderContent';

export default function Flashcards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [filterSession, setFilterSession] = useState<number | null>(null);
  const [shuffled, setShuffled] = useState(false);
  const { markCardReviewed, reviewedCards } = useProgressStore();

  const filteredCards = filterSession 
    ? flashcardsData.filter(card => card.session === filterSession)
    : flashcardsData;

  const [cardOrder, setCardOrder] = useState<number[]>(filteredCards.map((_, i) => i));

  const currentCard = filteredCards[cardOrder[currentIndex]];

  const handleNext = () => {
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped && currentCard) {
      markCardReviewed(currentCard.id);
    }
  };

  const handleShuffle = () => {
    const newOrder = [...cardOrder].sort(() => Math.random() - 0.5);
    setCardOrder(newOrder);
    setCurrentIndex(0);
    setIsFlipped(false);
    setShuffled(!shuffled);
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setCardOrder(filteredCards.map((_, i) => i));
    setShuffled(false);
  };

  const handleFilterChange = (session: number | null) => {
    setFilterSession(session);
    setCurrentIndex(0);
    setIsFlipped(false);
    
    const newFiltered = session 
      ? flashcardsData.filter(card => card.session === session)
      : flashcardsData;
    setCardOrder(newFiltered.map((_, i) => i));
  };

  if (!currentCard) return null;

  const sessionColors: Record<number, string> = {
    1: 'from-emerald-500 to-teal-500',
    2: 'from-blue-500 to-cyan-500',
    3: 'from-purple-500 to-pink-500',
    4: 'from-indigo-500 to-violet-500',
    5: 'from-rose-500 to-red-500',
    6: 'from-amber-500 to-orange-500'
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-emerald-800 flex items-center gap-2">
            <Lightbulb className="h-6 w-6" />
            Flashcards
          </h2>
          <p className="text-gray-600">Révisez les définitions et concepts clés</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-sm">
            {reviewedCards.size} / {flashcardsData.length} révisées
          </Badge>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant={filterSession === null ? 'default' : 'outline'}
          onClick={() => handleFilterChange(null)}
          className={filterSession === null ? 'bg-emerald-600' : ''}
        >
          Toutes
        </Button>
        {[1, 2, 3, 4, 5, 6].map(s => (
          <Button
            key={s}
            variant={filterSession === s ? 'default' : 'outline'}
            onClick={() => handleFilterChange(s)}
            className={filterSession === s ? 'bg-emerald-600' : ''}
          >
            Séance {s}
          </Button>
        ))}
      </div>

      {/* Progress */}
      <div className="bg-gray-100 rounded-full h-2 overflow-hidden">
        <div 
          className="bg-emerald-500 h-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / filteredCards.length) * 100}%` }}
        />
      </div>
      <p className="text-sm text-gray-500 text-center">
        Carte {currentIndex + 1} sur {filteredCards.length}
      </p>

      {/* Flashcard */}
      <div className="perspective-1000">
        <div
          className={`relative w-full h-80 md:h-96 transition-transform duration-500 transform-style-preserve-3d cursor-pointer ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          onClick={handleFlip}
        >
          {/* Front */}
          <Card className={`absolute inset-0 backface-hidden bg-gradient-to-br ${sessionColors[currentCard.session]} text-white`}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge className="bg-white/20 text-white">Séance {currentCard.session}</Badge>
                {reviewedCards.includes(currentCard.id) && (
                  <CheckCircle className="h-5 w-5" />
                )}
              </div>
            </CardHeader>
            <CardContent className="flex items-center justify-center h-48">
              <CardTitle className="text-xl md:text-2xl text-center leading-relaxed">
                <RenderContent text={currentCard.front} />
              </CardTitle>
            </CardContent>
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-sm text-white/70 flex items-center justify-center gap-2">
                <Eye className="h-4 w-4" />
                Cliquez pour voir la réponse
              </p>
            </div>
          </Card>

          {/* Back */}
          <Card className={`absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-gray-50 to-emerald-50 border-2 border-emerald-200`}>
            <CardHeader>
              <Badge className="bg-emerald-100 text-emerald-800 w-fit">Réponse</Badge>
            </CardHeader>
            <CardContent className="flex items-center justify-center h-48">
              <p className="text-lg md:text-xl text-gray-800 text-center leading-relaxed">
                <RenderContent text={currentCard.back} />
              </p>
            </CardContent>
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                <EyeOff className="h-4 w-4" />
                Cliquez pour retourner
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4">
        <Button
          variant="outline"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Précédent
        </Button>

        <Button
          variant="outline"
          onClick={handleShuffle}
          className="gap-2"
        >
          <Shuffle className="h-4 w-4" />
          {shuffled ? 'Remettre en ordre' : 'Mélanger'}
        </Button>

        <Button
          variant="outline"
          onClick={handleReset}
          className="gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          Reset
        </Button>

        <Button
          variant="outline"
          onClick={handleNext}
          disabled={currentIndex === filteredCards.length - 1}
          className="gap-2"
        >
          Suivant
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Keyboard shortcuts hint */}
      <p className="text-xs text-gray-400 text-center">
        Conseil : Utilisez les flèches ← → pour naviguer, Espace pour retourner
      </p>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
