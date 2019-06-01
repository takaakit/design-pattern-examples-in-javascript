// ˅
'use strict';

import { Command } from './command.mjs';

// ˄

// Command to paint a single point
export class PaintingCommand extends Command {
    // ˅
    
    // ˄

    // Painting position x
    paintingPosX;

    // Painting position y
    paintingPosY;

    paintingTarget;

    constructor(paintingObject, paintingPosX, paintingPosY) {
        // ˅
        super();
        this.paintingPosX = paintingPosX;
        this.paintingPosY = paintingPosY;
        this.paintingTarget = paintingObject;
        // ˄
    }

    execute() {
        // ˅
        this.paintingTarget.paint(this.paintingPosX, this.paintingPosY);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
