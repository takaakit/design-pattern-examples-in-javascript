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
        const length = message.length;
        for (let i = 0; i < length + 4; i++) {
            process.stdout.write(this.borderChar);
        }
        console.log();
        console.log(this.borderChar + ' ' + message + ' ' + this.borderChar);
        for (let i = 0; i < length + 4; i++) {
            process.stdout.write(this.borderChar);
        }
        console.log();
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
