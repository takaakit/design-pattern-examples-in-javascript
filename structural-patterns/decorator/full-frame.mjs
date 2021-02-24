// ˅
'use strict';

import { Frame } from './frame.mjs';

// ˄

export class FullFrame extends Frame {
    // ˅
    
    // ˄

    constructor(display) {
        // ˅
        super(display);
        // ˄
    }

    // Number of characters added left and right decoration characters
    get columns() {
        // ˅
        return 1 + this.display.columns + 1;
        // ˄
    }

    // Number of rows added the upper and lower decoration lines
    get rows() {
        // ˅
        return 1 + this.display.rows + 1;
        // ˄
    }

    getLineText(row) {
        // ˅
        if (row === 0) {
            return '+' + this.createLine('-', this.display.columns) + '+';  // Upper frame
        }
        else if (row === this.display.rows + 1) {
            return '+' + this.createLine('-', this.display.columns) + '+';  // Bottom frame
        }
        else {
            return '|' + this.display.getLineText(row - 1) + '|';           // Other
        }
        // ˄
    }

    createLine(ch, size) {
        // ˅
        let line = '';
        for (let i = 0; i < size; i++) {
            line += ch;
        }
        return line;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
