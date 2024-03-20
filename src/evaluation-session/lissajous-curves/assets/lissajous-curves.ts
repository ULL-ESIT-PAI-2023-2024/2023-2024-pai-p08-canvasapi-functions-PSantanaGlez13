/**
 * Universidad de La Laguna.
 * Curso 2023 - 2024. Programación de Aplicaciones Interactivas.
 * @author Pablo Santana Gonzalez <alu0101480541@ull.edu.es>
 * @fileoverview lissajous-curves.ts.
 * @date 19/03/2024
 * @link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024_P08_CanvasAPI-2/blob/main/p08_Canvas-GraphingCalculator.md
 */

import { ValidFunction } from './grid-function.js'
import { Drawable } from './view.js';

export class LissajousCurveFunction implements Drawable {
  constructor(private functionX: ValidFunction, private functionY: ValidFunction) {}

  public draw(context: CanvasRenderingContext2D): void {
    const LIMIT = 100;
    let first = true;
    context.beginPath();
    for (let time = 0; time < LIMIT; ++time) {
      let xCoord = this.functionX(time);
      let yCoord = this.functionY(time);
      if (xCoord === undefined || yCoord === undefined) {
        throw new Error('One of the functions failed.');
      }
      if (first) {
        context.moveTo(xCoord, -yCoord);
        first = false;
      }
      context.lineTo(xCoord, -yCoord);
    }
    context.stroke();
  }
}