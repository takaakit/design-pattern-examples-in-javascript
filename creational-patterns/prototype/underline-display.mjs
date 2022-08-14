// ˅
'use strict';

import { Display } from './framework/display.mjs';

// ˄

export class UnderlineDisplay extends Display {
    // ˅
    
    // ˄

    underlineChar;

    constructor(underlineChar) {
        // ˅
        super();
        this.underlineChar = underlineChar;
        // ˄
    }

    clone() {
        // ˅
        return new UnderlineDisplay(this.underlineChar);
        // ˄
    }

    show(message) {
        // ˅
        console.log(`"${message}"`);
        console.log(` ${this.underlineChar.repeat(message.length)}`);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
