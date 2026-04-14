'use client';

import Math from './Math';

interface RenderContentProps {
  text: string;
  className?: string;
}

// Helper function to parse text with LaTeX formulas
// Supports $...$ for inline math and $$...$$ for display math
export default function RenderContent({ text, className = '' }: RenderContentProps) {
  // Parse text to find LaTeX formulas enclosed in $...$
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  // First handle display math ($$...$$)
  const displayMathRegex = /\$\$(.*?)\$\$/g;
  let lastIndex = 0;
  let match;

  // Process display math first
  const processedText = text.replace(displayMathRegex, (match, formula) => {
    return `%%DISPLAY_MATH_${formula}%%`;
  });

  // Then process inline math
  const inlineMathRegex = /\$(.*?)\$/g;
  const finalText = processedText.replace(inlineMathRegex, (match, formula) => {
    return `%%INLINE_MATH_${formula}%%`;
  });

  // Split by math markers
  const segments = finalText.split(/%%(DISPLAY_MATH_|INLINE_MATH_)(.*?)%%/g);
  
  return (
    <span className={className}>
      {segments.map((segment, index) => {
        if (segment === 'DISPLAY_MATH_' || segment === 'INLINE_MATH_') {
          return null; // Skip the marker type
        }
        
        const prevSegment = segments[index - 1];
        if (prevSegment === 'DISPLAY_MATH_') {
          return <Math key={index} display>{segment}</Math>;
        }
        if (prevSegment === 'INLINE_MATH_') {
          return <Math key={index}>{segment}</Math>;
        }
        
        // Regular text
        if (segment && !segment.startsWith('DISPLAY_MATH_') && !segment.startsWith('INLINE_MATH_')) {
          // Handle newlines
          return segment.split('\n').map((line, lineIndex, lines) => (
            <span key={`${index}-${lineIndex}`}>
              {line}
              {lineIndex < lines.length - 1 && <br />}
            </span>
          ));
        }
        
        return null;
      })}
    </span>
  );
}
