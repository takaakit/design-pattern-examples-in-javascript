// ˅
'use strict';

import { Display } from './framework/display.mjs';

// ˄

export class FrameDisplay extends Display {
    // ˅
    
    // ˄

    borderChar;

    constructor(borderChar) {
        // ˅
        super();
        this.borderChar = borderChar;
        // ˄
    }

    clone() {
        // ˅
        return new FrameDisplay(this.borderChar);
        // ˄
    }

    show(message) {
        // ˅
        console.log(this.borderChar.repeat(message.length + 4));
        console.log(`${this.borderChar} ${message} ${this.borderChar}`);
        console.log(this.borderChar.repeat(message.length + 4));
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
