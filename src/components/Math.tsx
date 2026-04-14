'use client';

import { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface MathProps {
  children: string;
  display?: boolean;
  className?: string;
}

export default function Math({ children, display = false, className = '' }: MathProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      try {
        katex.render(children, containerRef.current, {
          displayMode: display,
          throwOnError: false,
          trust: true,
          strict: false,
        });
      } catch (error) {
        console.error('KaTeX error:', error);
        containerRef.current.textContent = children;
      }
    }
  }, [children, display]);

  return (
    <span
      ref={containerRef}
      className={`${display ? 'block my-2' : 'inline'} ${className}`}
    />
  );
}

// Common LaTeX formulas for thermodynamics
export const latexFormulas = {
  // Gaz parfait
  gazParfait: 'PV = nRT',
  
  // Premier principe
  premierPrincipe: '\\Delta U = W + Q',
  premierPrincipeDiff: 'dU = \\delta W + \\delta Q',
  
  // Second principe
  entropie: 'dS = \\frac{\\delta Q_{rev}}{T}',
  entropieCree: '\\Delta S = \\Delta S_e + \\Delta S_c',
  
  // Travail
  travailElementaire: '\\delta W = -P_{ext} \\, dV',
  travailIsobare: 'W = -P(V_2 - V_1)',
  travailIsotherme: 'W = nRT \\ln\\frac{V_2}{V_1}',
  
  // Chaleur
  chaleurCV: '\\delta Q_V = C_V \\, dT',
  chaleurCP: '\\delta Q_P = C_P \\, dT',
  
  // Carnot
  rendementCarnot: '\\eta = 1 - \\frac{T_2}{T_1}',
  efficaciteFrigorifique: 'e = \\frac{T_2}{T_1 - T_2}',
  performancePAC: '\\text{COP} = \\frac{T_1}{T_1 - T_2}',
  
  // Enthalpie
  enthalpie: 'H = U + PV',
  mayer: 'C_P - C_V = R',
  
  // Adiabatique
  adiabatiquePV: 'PV^{\\gamma} = \\text{cste}',
  adiabatiqueTV: 'TV^{\\gamma-1} = \\text{cste}',
  
  // Coefficients
  alpha: '\\alpha = \\frac{1}{V}\\left(\\frac{\\partial V}{\\partial T}\\right)_P',
  beta: '\\beta = \\frac{1}{P}\\left(\\frac{\\partial P}{\\partial T}\\right)_V',
  chiT: '\\chi_T = -\\frac{1}{V}\\left(\\frac{\\partial V}{\\partial P}\\right)_T',
  
  // Gaz parfait energies
  energieMonoatomique: 'U = \\frac{3}{2}nRT',
  energieDiatomique: 'U = \\frac{5}{2}nRT',
  
  // Cinetique
  energieCinetique: '\\frac{1}{2}m\\langle v^2 \\rangle = \\frac{3}{2}kT',
  equipartition: '\\frac{1}{2}kT \\text{ par degré de liberté}',
};
