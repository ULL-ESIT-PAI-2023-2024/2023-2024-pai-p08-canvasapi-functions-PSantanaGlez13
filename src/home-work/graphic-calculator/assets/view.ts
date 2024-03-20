/**
 * Universidad de La Laguna.
 * Curso 2023 - 2024. Programación de Aplicaciones Interactivas.
 * @author Pablo Santana Gonzalez <alu0101480541@ull.edu.es>
 * @fileoverview view.ts
 *               View class.
 * @date 19/03/2024
 * @link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024_P08_CanvasAPI-2/blob/main/p08_Canvas-GraphingCalculator.md
 */

export interface Drawable {
  draw(context: CanvasRenderingContext2D): void;
}

export class View {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  /**
   * Constructor
   * @param canvasId Identifier of the canvas in the DOM. 
   */
  constructor(canvasId: string) {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (this.canvas == null) {
      throw new Error('Canvas wasn\'t found');
    }
    const CONTEXT_OR_NULL = this.canvas?.getContext('2d');
    if (CONTEXT_OR_NULL == null) {
      throw new Error('Error getting the context');
    }
    this.context = CONTEXT_OR_NULL;
    const WIDTH: number = this.canvas.width;
    const HEIGHT: number = this.canvas.height;
    // Centering the canvas.
    this.context.translate(WIDTH / 2, HEIGHT / 2);
  }

  /**
   * Method to draw the element.
   * @param toDraw Element to draw.
   */
  public draw(toDraw: Drawable) {
    toDraw.draw(this.context);
  }
};