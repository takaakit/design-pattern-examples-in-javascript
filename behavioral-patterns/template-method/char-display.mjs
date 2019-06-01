// ˅
'use strict';

import { AbstractDisplay } from './abstract-display.mjs';

// ˄

export class CharDisplay extends AbstractDisplay {
    // ˅
    
    // ˄

    charValue;

    outputString;

    constructor(charValue) {
        // ˅
        super();
        this.charValue = charValue;
        this.outputString = '';
        // ˄
    }

    open() {
        // ˅
        this.outputString += '<<';             // Display '<<' in the start characters.
        // ˄
    }

    write() {
        // ˅
        this.outputString += this.charValue;   // Display the character.
        // ˄
    }

    close() {
        // ˅
        this.outputString += '>>' + '\n';      // Display '>>' in the start characters.
        console.log(this.outputString);
        this.outputString = '';
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
