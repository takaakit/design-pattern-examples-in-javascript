// ˅
'use strict';

import { Frame } from './frame.mjs';

// ˄

export class SideFrame extends Frame {
    // ˅
    
    // ˄

    // Decoration character
    frameChar;

    constructor(display, frameChar) {
        // ˅
        super(display);
        this.frameChar = frameChar;
        // ˄
    }

    // Number of characters added left and right decoration characters
    get columns() {
        // ˅
        return 1 + this.display.columns + 1;
        // ˄
    }

    // Number of lines
    get rows() {
        // ˅
        return this.display.rows;
        // ˄
    }

    getLineText(row) {
        // ˅
        return this.frameChar + this.display.getLineText(row) + this.frameChar;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
