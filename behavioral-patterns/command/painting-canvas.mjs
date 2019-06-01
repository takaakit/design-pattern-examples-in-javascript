// ˅
'use strict';

import { PaintingTarget } from './painting-target.mjs';

// ˄

export class PaintingCanvas extends PaintingTarget {
    // ˅
    
    // ˄

    COLOR;

    // Radius of the painting point
    POINT_RADIUS;

    canvas;

    context;

    constructor(canvas, context) {
        // ˅
        super();
        this.COLOR = 'lightgreen';
        this.POINT_RADIUS = 10;
        this.canvas = canvas;
        this.context = context;
        // ˄
    }

    paint(paintingPosX, paintingPosY) {
        // ˅
        this.context.beginPath();
        this.context.arc(paintingPosX, paintingPosY, this.POINT_RADIUS, 0, Math.PI*2, false);
        this.context.fillStyle = this.COLOR;
        this.context.fill();
        // ˄
    }

    clear() {
        // ˅
        this.context.clearRect(0, 0, this.canvas.getBoundingClientRect().width, this.canvas.getBoundingClientRect().height);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
