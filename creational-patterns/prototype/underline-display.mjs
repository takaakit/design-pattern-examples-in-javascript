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

    createClone() {
        // ˅
        return new UnderlineDisplay(this.underlineChar);
        // ˄
    }

    show(message) {
        // ˅
        const length = message.length;
        console.log('"' + message + '"');
        var line = ' ';
        for (let i = 0; i < length; i++) {
            line += this.underlineChar;
        }
        console.log(line);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
