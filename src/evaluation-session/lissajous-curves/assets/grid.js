/**
 * Universidad de La Laguna.
 * Curso 2023 - 2024. Programación de Aplicaciones Interactivas.
 * @author Pablo Santana Gonzalez <alu0101480541@ull.edu.es>
 * @fileoverview grid.ts
 *               Grid class. Represents the grid on a graphic calculator.
 * @date 19/03/2024
 * @link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024_P08_CanvasAPI-2/blob/main/p08_Canvas-GraphingCalculator.md
 */
export class Grid {
    /**
     * Constructor.
     * @param xMax Max value for X on the grid.
     * @param xMin Min value for X on the grid. Must be negative or 0.
     * @param yMax Max value for Y on the grid.
     * @param yMin Min value for Y on the grid. Must be negative or 0.
     */
    constructor(xMax, xMin, yMax, yMin) {
        this.xMax = xMax;
        this.xMin = xMin;
        this.yMax = yMax;
        this.yMin = yMin;
        this.functions = [];
        this.contextMaxValueX = 0;
        this.contextMaxValueY = 0;
        if (xMin > 0 || yMin > 0) {
            throw new Error('xMin and yMin can\'t be positive.');
        }
    }
    /**
     * Adds a function to the grid.
     * @param theFunction The new function on the grid.
     */
    insertFunction(theFunction) {
        this.functions.push(theFunction);
    }
    /**
     * Draw the grid with its functions.
     * @param context The context to draw on.
     */
    draw(context) {
        const SCALE_X = context.canvas.width / (Math.abs(this.xMin) + this.xMax);
        const SCALE_Y = context.canvas.height / (Math.abs(this.yMin) + this.yMax);
        this.adjustCenter(context, SCALE_X, SCALE_Y);
        const LARGEST_X = Math.trunc(this.contextMaxValueX);
        const LOWEST_X = LARGEST_X - context.canvas.width;
        const LARGEST_Y = Math.trunc(this.contextMaxValueY);
        const LOWEST_Y = LARGEST_Y - context.canvas.height;
        for (let func of this.functions) {
            context.strokeStyle = func.getColor();
            context.lineWidth = func.getLineWidth();
            let first = true;
            context.beginPath();
            for (let currentX = LOWEST_X; currentX <= LARGEST_X; ++currentX) {
                let currentY = func.evaluate(currentX / SCALE_X);
                if (currentY != undefined) {
                    currentY = currentY * SCALE_Y;
                    if (currentY > LARGEST_Y || currentY < LOWEST_Y) {
                        continue;
                    }
                    if (first) {
                        context.moveTo(currentX, -currentY);
                        first = false;
                    }
                    else {
                        context.lineTo(currentX, -currentY);
                    }
                }
                else {
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
    adjustCenter(context, scaleX, scaleY) {
        const POSITIVE_X_NEEDED = this.xMax * scaleX;
        this.contextMaxValueX = POSITIVE_X_NEEDED;
        const USED_X = context.canvas.width / 2;
        const X_ADJUSTMENT = USED_X - POSITIVE_X_NEEDED;
        const POSITIVE_Y_NEEDED = this.yMax * scaleY;
        this.contextMaxValueY = POSITIVE_Y_NEEDED;
        const USED_Y = context.canvas.height / 2;
        const Y_ADJUSTMENT = USED_Y - POSITIVE_Y_NEEDED;
        context.translate(X_ADJUSTMENT, -Y_ADJUSTMENT);
    }
}
