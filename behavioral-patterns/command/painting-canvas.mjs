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

    width;

    height;

    context;

    constructor(context, width, height) {
        // ˅
        super();
        this.COLOR = 'lightgreen';
        this.POINT_RADIUS = 10;
        this.context = context;
        this.width = width;
        this.height = height;
        // ˄
    }

    paint(x, y) {
        // ˅
        this.context.beginPath();
        this.context.arc(x, y, this.POINT_RADIUS, 0, Math.PI*2, false);
        this.context.fillStyle = this.COLOR;
        this.context.fill();
        // ˄
    }

    clear() {
        // ˅
        this.context.clearRect(0, 0, this.width, this.height);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
