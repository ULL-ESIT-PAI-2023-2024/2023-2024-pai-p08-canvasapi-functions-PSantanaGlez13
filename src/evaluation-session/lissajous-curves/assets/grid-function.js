/**
 * Universidad de La Laguna.
 * Curso 2023 - 2024. Programación de Aplicaciones Interactivas.
 * @author Pablo Santana Gonzalez <alu0101480541@ull.edu.es>
 * @fileoverview grid-function.ts
 *               GridFunction class. Represents the functions on a graphic calculator.
 * @date 19/03/2024
 * @link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024_P08_CanvasAPI-2/blob/main/p08_Canvas-GraphingCalculator.md
 */
export class GridFunction {
    /**
     * Constructor.
     * @param callback The function we are calling when evaluating. Takes only one parameter
     *        and can return number or undefined (if the value in the function is not valid).
     * @param color Color of the function.
     * @param lineWidth Line width of the function.
     */
    constructor(callback, color, lineWidth) {
        this.callback = callback;
        this.color = color;
        this.lineWidth = lineWidth;
    }
    /**
     * Gets the color of the function.
     * @returns The color of the function.
     */
    getColor() {
        return this.color;
    }
    /**
     * Gets the line width of the function.
     * @returns The line width of the function.
     */
    getLineWidth() {
        return this.lineWidth;
    }
    /**
     * Evaluates the function.
     * @param xValue Parameter for the function.
     */
    evaluate(xValue) {
        return this.callback(xValue);
    }
    /**
     * Draws the function.
     * @param context
     */
    draw(context) {
    }
}
