'use client';

import { useState } from 'react';
import { courseData } from '@/lib/course-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight, Clock, BookOpen, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import { useProgressStore } from '@/lib/store';

export default function CourseContent() {
  const [activeSession, setActiveSession] = useState(0);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const { reviewedCards, markCardReviewed } = useProgressStore();

  const session = courseData.sessions[activeSession];

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title);
    markCardReviewed(`session-${activeSession + 1}-${title}`);
  };

  return (
    <div className="space-y-6">
      {/* Session Selector */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {courseData.sessions.map((s, index) => (
          <Card
            key={s.id}
            className={`cursor-pointer transition-all hover:shadow-lg ${
              activeSession === index
                ? 'ring-2 ring-emerald-500 bg-emerald-50'
                : 'hover:bg-gray-50'
            }`}
            onClick={() => setActiveSession(index)}
          >
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <Badge variant={activeSession === index ? 'default' : 'secondary'} className="bg-emerald-600">
                  Seance {s.id}
                </Badge>
                <Clock className="h-4 w-4 text-gray-400" />
              </div>
              <CardTitle className={`text-lg ${activeSession === index ? 'text-emerald-800' : ''}`}>
                {s.title.split(':')[0] || s.title}
              </CardTitle>
              <CardDescription>{s.duration}</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-gray-600 line-clamp-2">{s.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Session Content */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="h-5 w-5 text-emerald-600" />
          <h2 className="text-xl font-bold text-emerald-800">{session.title}</h2>
        </div>

        {/* Topics List */}
        <div className="bg-emerald-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-emerald-700 mb-2">Themes abordes :</h3>
          <div className="flex flex-wrap gap-2">
            {session.topics.map((topic, i) => (
              <Badge key={i} variant="outline" className="border-emerald-300 text-emerald-700">
                {topic}
              </Badge>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-4">
          {session.content.map((section, sectionIndex) => (
            <Card key={sectionIndex} className="overflow-hidden">
              <CardHeader
                className="cursor-pointer bg-gradient-to-r from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 transition-colors"
                onClick={() => toggleSection(section.title)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {reviewedCards.includes(`session-${activeSession + 1}-${section.title}`) && (
                      <CheckCircle className="h-5 w-5 text-emerald-500" />
                    )}
                    <CardTitle className="text-lg text-emerald-800">{section.title}</CardTitle>
                  </div>
                  {expandedSection === section.title ? (
                    <ChevronUp className="h-5 w-5 text-emerald-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-emerald-600" />
                  )}
                </div>
              </CardHeader>

              {expandedSection === section.title && (
                <CardContent className="pt-4 space-y-4">
                  {section.sections.map((subSection, subIndex) => (
                    <div key={subIndex} className="space-y-3">
                      <h4 className="font-semibold text-emerald-700 border-l-4 border-emerald-400 pl-3">
                        {subSection.subtitle}
                      </h4>

                      {/* Main Content */}
                      {subSection.content && (
                        <p className="text-gray-700 leading-relaxed pl-4">{subSection.content}</p>
                      )}

                      {/* Quote */}
                      {subSection.isQuote && (
                        <blockquote className="border-l-4 border-amber-400 bg-amber-50 p-4 italic text-gray-700 mx-4">
                          {subSection.content}
                        </blockquote>
                      )}

                      {/* Key Points */}
                      {subSection.keyPoints && (
                        <ul className="list-none space-y-1 pl-4">
                          {subSection.keyPoints.map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-700">
                              <ChevronRight className="h-4 w-4 text-emerald-500 mt-1 flex-shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Examples */}
                      {subSection.examples && (
                        <div className="bg-blue-50 rounded-lg p-3 ml-4">
                          <span className="font-medium text-blue-800">Exemples :</span>
                          <ul className="list-disc list-inside text-blue-700 mt-1">
                            {subSection.examples.map((ex, i) => (
                              <li key={i}>{ex}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Properties */}
                      {subSection.properties && (
                        <ul className="list-none space-y-1 pl-4">
                          {subSection.properties.map((prop, i) => (
                            <li key={i} className="text-gray-700">{prop}</li>
                          ))}
                        </ul>
                      )}

                      {/* Hypotheses */}
                      {subSection.hypotheses && (
                        <ul className="list-none space-y-1 pl-4">
                          {subSection.hypotheses.map((h, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-700">
                              <span className="bg-emerald-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                                {i + 1}
                              </span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Formula */}
                      {subSection.formula && (
                        <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-lg p-4 mx-4 text-center">
                          <p className="text-2xl font-mono font-bold text-emerald-800">
                            {subSection.formula}
                          </p>
                          {subSection.formulaDescription && (
                            <p className="text-sm text-emerald-600 mt-1">{subSection.formulaDescription}</p>
                          )}
                        </div>
                      )}

                      {/* Sub Formula */}
                      {subSection.subformula && (
                        <p className="font-mono text-emerald-700 pl-4">{subSection.subformula}</p>
                      )}

                      {/* Multiple Formulas */}
                      {subSection.formulas && (
                        <div className="space-y-2 pl-4">
                          {subSection.formulas.map((f, i) => (
                            <div key={i} className="bg-gray-50 rounded p-2">
                              <span className="font-mono text-emerald-700">{f.formula}</span>
                              {f.description && (
                                <span className="text-sm text-gray-500 ml-2">- {f.description}</span>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tables */}
                      {subSection.table && (
                        <div className="overflow-x-auto pl-4">
                          <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                            <thead className="bg-emerald-600 text-white">
                              <tr>
                                {subSection.table.headers.map((h, i) => (
                                  <th key={i} className="px-4 py-2 text-left text-sm font-medium">
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              {subSection.table.rows.map((row, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                  {row.map((cell, j) => (
                                    <td key={j} className="px-4 py-2 text-sm text-gray-700">
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Transformations */}
                      {subSection.transformations && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-4">
                          {subSection.transformations.map((t, i) => (
                            <div key={i} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                              <div className="flex items-center gap-2 mb-1">
                                <Badge className="bg-emerald-500">{t.name}</Badge>
                                {t.condition && (
                                  <span className="text-sm text-emerald-600 font-mono">{t.condition}</span>
                                )}
                              </div>
                              <p className="text-sm text-gray-600">{t.description}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Coefficients */}
                      {subSection.coefficients && (
                        <div className="space-y-3 pl-4">
                          {subSection.coefficients.map((c, i) => (
                            <div key={i} className="bg-gradient-to-r from-gray-50 to-emerald-50 rounded-lg p-3 border-l-4 border-emerald-500">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="bg-emerald-600 text-white rounded w-8 h-8 flex items-center justify-center font-bold text-lg">
                                  {c.symbol}
                                </span>
                                <span className="font-medium text-gray-800">{c.name}</span>
                              </div>
                              <p className="font-mono text-emerald-700 ml-10">{c.formula}</p>
                              {c.description && (
                                <p className="text-sm text-gray-500 ml-10">{c.description}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Equilibres */}
                      {subSection.equilibres && (
                        <div className="space-y-2 pl-4">
                          {subSection.equilibres.map((e, i) => (
                            <div key={i} className="bg-gray-50 rounded p-3 border-l-4 border-teal-500">
                              <span className="font-medium text-teal-800">{e.name}</span>
                              <p className="text-sm text-gray-600">{e.description}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Warning */}
                      {subSection.warning && (
                        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mx-4">
                          <p className="text-amber-800 font-medium">Attention: {subSection.warning}</p>
                        </div>
                      )}

                      {/* Note */}
                      {subSection.note && (
                        <p className="text-sm text-gray-500 italic pl-4">Note: {subSection.note}</p>
                      )}

                      {/* Explanation */}
                      {subSection.explanation && (
                        <p className="text-sm text-gray-500 italic pl-4">{subSection.explanation}</p>
                      )}
                    </div>
                  ))}
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
