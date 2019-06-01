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

    createClone() {
        // ˅
        return new FrameDisplay(this.borderChar);
        // ˄
    }

    show(message) {
        // ˅
        const length = message.length;
        var upperLine = '';
        for (let i = 0; i < length + 4; i++) {
            upperLine += this.borderChar;
        }
        console.log(upperLine);
        console.log(this.borderChar + ' ' + message + ' ' + this.borderChar);
        var buttonLine = '';
        for (var i = 0; i < length + 4; i++) {
            buttonLine += this.borderChar;
        }
        console.log(buttonLine);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
