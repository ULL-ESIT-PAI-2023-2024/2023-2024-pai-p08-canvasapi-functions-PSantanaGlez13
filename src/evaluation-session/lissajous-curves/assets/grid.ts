/**
 * Universidad de La Laguna.
 * Curso 2023 - 2024. Programación de Aplicaciones Interactivas.
 * @author Pablo Santana Gonzalez <alu0101480541@ull.edu.es>
 * @fileoverview grid.ts
 *               Grid class. Represents the grid on a graphic calculator.
 * @date 19/03/2024
 * @link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024_P08_CanvasAPI-2/blob/main/p08_Canvas-GraphingCalculator.md
 */

import { Drawable } from "./view.js";
import { GridFunction } from "./grid-function.js";

export class Grid implements Drawable {
  private functions: GridFunction[] = [];
  private contextMaxValueX: number = 0;
  private contextMaxValueY: number = 0;
  /**
   * Constructor.
   * @param xMax Max value for X on the grid.
   * @param xMin Min value for X on the grid. Must be negative or 0.
   * @param yMax Max value for Y on the grid.
   * @param yMin Min value for Y on the grid. Must be negative or 0.
   */
  constructor(private xMax: number, private xMin: number, private yMax: number, private yMin: number) {
    if (xMin > 0 || yMin > 0) {
      throw new Error('xMin and yMin can\'t be positive.');
    }
  }

  /**
   * Adds a function to the grid.
   * @param theFunction The new function on the grid.
   */
  public insertFunction(theFunction: GridFunction): void {
    this.functions.push(theFunction);
  }

  /**
   * Draw the grid with its functions.
   * @param context The context to draw on.
   */
  public draw(context: CanvasRenderingContext2D): void {
    const SCALE_X: number = context.canvas.width / (Math.abs(this.xMin) + this.xMax);
    const SCALE_Y: number = context.canvas.height / (Math.abs(this.yMin) + this.yMax);
    this.adjustCenter(context, SCALE_X, SCALE_Y);
    const LARGEST_X: number = Math.trunc(this.contextMaxValueX);
    const LOWEST_X: number = LARGEST_X - context.canvas.width;
    const LARGEST_Y: number = Math.trunc(this.contextMaxValueY);
    const LOWEST_Y: number = LARGEST_Y - context.canvas.height;
    for (let func of this.functions) {
      context.strokeStyle = func.getColor();
      context.lineWidth = func.getLineWidth();
      let first = true;
      context.beginPath();
      for (let currentX = LOWEST_X; currentX <= LARGEST_X; ++currentX) {
        let currentY: number | undefined = func.evaluate(currentX / SCALE_X);
        if (currentY != undefined) {
          currentY = currentY * SCALE_Y;
          if (currentY > LARGEST_Y || currentY < LOWEST_Y) {
            continue;
          }
          if (first) {
            context.moveTo(currentX, -currentY);
            first = false;
          } else {
            context.lineTo(currentX, -currentY);
          }    
        } else {
          first = true;
        }
      }
      context.stroke();
    }
  }

  /**
   * Adjusts the center of the context.
   * @param context The context to center.
   * @param scaleX Scale of the X axis.
   * @param scaleY Scale of the Y axis.
   */
  private adjustCenter(context: CanvasRenderingContext2D, scaleX: number, scaleY: number) {
    const POSITIVE_X_NEEDED: number = this.xMax * scaleX;
    this.contextMaxValueX = POSITIVE_X_NEEDED;
    const USED_X: number = context.canvas.width / 2;
    const X_ADJUSTMENT: number = USED_X - POSITIVE_X_NEEDED;
    const POSITIVE_Y_NEEDED: number = this.yMax * scaleY;
    this.contextMaxValueY = POSITIVE_Y_NEEDED
    const USED_Y: number = context.canvas.height / 2;
    const Y_ADJUSTMENT: number = USED_Y - POSITIVE_Y_NEEDED;
    context.translate(X_ADJUSTMENT, -Y_ADJUSTMENT);
  }

}