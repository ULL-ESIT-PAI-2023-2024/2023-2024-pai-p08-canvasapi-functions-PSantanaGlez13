/**
 * Universidad de La Laguna.
 * Curso 2023 - 2024. Programación de Aplicaciones Interactivas.
 * @author Pablo Santana Gonzalez <alu0101480541@ull.edu.es>
 * @fileoverview main.ts
 *               Main function for the graphic calculator.
 * @date 19/03/2024
 * @link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024_P08_CanvasAPI-2/blob/main/p08_Canvas-GraphingCalculator.md
 */

import { View } from './view.js';
import {LissajousCurveFunction} from './lissajous-curves.js';

function main(): void {
  let graphic__view = new View();
  const WIDTH: number = 200;
  const HEIGHT: number = 200;
  const PHI: number = 0;
  const CONSTANT_A: number = 1;
  const CONSTANT_B: number = 3;
  const FUNCTION_X = (tValue: number): number => {
    return WIDTH * Math.sin(CONSTANT_A * tValue + PHI); 
  };
  const FUNCTION_Y = (tValue: number): number => {
    return HEIGHT * Math.sin(CONSTANT_B * tValue);
  };
  let curve = new LissajousCurveFunction(FUNCTION_X, FUNCTION_Y);
  graphic__view.draw(curve);
}

main();