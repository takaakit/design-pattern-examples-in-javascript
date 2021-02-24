// ˅
'use strict';

import { AbstractDisplay } from './abstract-display.mjs';

// ˄

export class CharDisplay extends AbstractDisplay {
    // ˅
    
    // ˄

    charValue;

    constructor(charValue) {
        // ˅
        super();
        this.charValue = charValue;
        // ˄
    }

    open() {
        // ˅
        process.stdout.write('<<');             // Display '<<' in the start characters.
        // ˄
    }

    write() {
        // ˅
        process.stdout.write(this.charValue);   // Display the character.
        // ˄
    }

    close() {
        // ˅
        console.log('>>');                      // Display '>>' in the end characters.
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
