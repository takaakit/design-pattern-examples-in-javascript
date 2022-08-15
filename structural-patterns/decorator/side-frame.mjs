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

        if (frameChar.length !== 1) {
            console.log(`Only one character is allowed in a side frame.`);
            process.exit(1);
        }
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
