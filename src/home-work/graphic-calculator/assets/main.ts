/**
 * Universidad de La Laguna.
 * Curso 2023 - 2024. Programación de Aplicaciones Interactivas.
 * @author Pablo Santana Gonzalez <alu0101480541@ull.edu.es>
 * @fileoverview main.ts
 *               Main function for the graphic calculator.
 * @date 19/03/2024
 * @link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024_P08_CanvasAPI-2/blob/main/p08_Canvas-GraphingCalculator.md
 */

import { Grid } from './grid.js';
import { View } from './view.js';
import { GridFunction } from './grid-function.js';

function main(): void {
  const CANVAS_ID = 'canvas_functions';
  let graphicCalculatorView = new View(CANVAS_ID);
  let grid = new Grid(22, -16, 6, -6);
  const FUNCTION_TO_DRAW = (xValue: number): number | undefined => {
    try {
      return Math.exp(xValue);
      //return Math.sin(xValue);
      //return (xValue * xValue);
      //return xValue;
    } catch (error: any) {
      return undefined;
    }
  }
  const COLOR = 'red';
  const WIDTH = 3;
  const FUNCTION_1 = new GridFunction(FUNCTION_TO_DRAW, COLOR, WIDTH);
  grid.insertFunction(FUNCTION_1)
  graphicCalculatorView.draw(grid);
}

main();