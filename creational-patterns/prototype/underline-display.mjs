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
        const length = message.length;
        console.log('"' + message + '"');
        process.stdout.write(' ');
        for (let i = 0; i < length; i++) {
            process.stdout.write(this.underlineChar);
        }
        console.log();
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
