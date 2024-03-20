/**
 * Universidad de La Laguna.
 * Curso 2023 - 2024. Programación de Aplicaciones Interactivas.
 * @author Pablo Santana Gonzalez <alu0101480541@ull.edu.es>
 * @fileoverview view.ts
 *               View class.
 * @date 19/03/2024
 * @link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024_P08_CanvasAPI-2/blob/main/p08_Canvas-GraphingCalculator.md
 */
export class View {
    /**
     * Constructor
     * @param canvasId Identifier of the canvas in the DOM.
     */
    constructor(canvasId) {
        var _a;
        this.canvas = document.getElementById(canvasId);
        if (this.canvas == null) {
            throw new Error('Canvas wasn\'t found');
        }
        const CONTEXT_OR_NULL = (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.getContext('2d');
        if (CONTEXT_OR_NULL == null) {
            throw new Error('Error getting the context');
        }
        this.context = CONTEXT_OR_NULL;
        const WIDTH = this.canvas.width;
        const HEIGHT = this.canvas.height;
        // Centering the canvas.
        this.context.translate(WIDTH / 2, HEIGHT / 2);
    }
    /**
     * Method to draw the element.
     * @param toDraw Element to draw.
     */
    draw(toDraw) {
        toDraw.draw(this.context);
    }
}
;
