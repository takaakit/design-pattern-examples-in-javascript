// ˅
'use strict';

import { AbstractDisplay } from './abstract-display.mjs';

// ˄

export class StringDisplay extends AbstractDisplay {
    // ˅
    
    // ˄

    stringValue;

    // String width
    width;

    constructor(stringValue) {
        // ˅
        super();
        this.stringValue = stringValue;
        this.width = stringValue.length;
        // ˄
    }

    open() {
        // ˅
        this.writeLine();            // Write a line
        // ˄
    }

    write() {
        // ˅
        console.log('|' + this.stringValue + '|');  // Display the character with '|'
        // ˄
    }

    close() {
        // ˅
        this.writeLine();            // Write a line
        // ˄
    }

    writeLine() {
        // ˅
        var line = '';
        line += '+';       // Display an end mark '+'
        for (var i = 0; i < this.width; i++) {
            line += '-';   // Display a line '='
        }
        line += '+';       // Display an end mark '+'
        console.log(line);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
