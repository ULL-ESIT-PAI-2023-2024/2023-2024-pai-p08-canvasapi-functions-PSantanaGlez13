/**
 * Universidad de La Laguna.
 * Curso 2023 - 2024. Programación de Aplicaciones Interactivas.
 * @author Pablo Santana Gonzalez <alu0101480541@ull.edu.es>
 * @fileoverview grid-function.ts
 *               GridFunction class. Represents the functions on a graphic calculator.
 * @date 19/03/2024
 * @link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024_P08_CanvasAPI-2/blob/main/p08_Canvas-GraphingCalculator.md
 */

import { Drawable } from "./view.js";

/** Interface describing a valid function for the class GridFunction */
export interface ValidFunction {
  (xValue: number): number | undefined
}

export class GridFunction implements Drawable {
  /**
   * Constructor.
   * @param callback The function we are calling when evaluating. Takes only one parameter
   *        and can return number or undefined (if the value in the function is not valid).
   * @param color Color of the function.
   * @param lineWidth Line width of the function.
   */
  constructor(private callback: ValidFunction, private color: string, private lineWidth: number) {}

  /**
   * Gets the color of the function.
   * @returns The color of the function.
   */
  public getColor(): string {
    return this.color;
  }

  /**
   * Gets the line width of the function.
   * @returns The line width of the function.
   */
  public getLineWidth(): number {
    return this.lineWidth;
  }

  /**
   * Evaluates the function.
   * @param xValue Parameter for the function.
   */
  public evaluate(xValue: number): number | undefined {
    return this.callback(xValue);
  }

  /**
   * Draws the function.
   * @param context 
   */
  public draw(context: CanvasRenderingContext2D): void {
    
  }
}