// ˅
'use strict';

import { DisplayImpl } from './display-impl.mjs';

// ˄

export class TextDisplayImpl extends DisplayImpl {
    // ˅
    
    // ˄

    // A string to display
    text;

    // A number of characters in bytes
    width;

    constructor(text) {
        // ˅
        super();
        this.text = text;
        this.width = text.length;   // Set the number of characters in bytes.
        // ˄
    }

    implOpen() {
        // ˅
        this.printLine();
        // ˄
    }

    implWrite() {
        // ˅
        console.log(':' + this.text + ':');     // Enclose a text with ":" and display it.
        // ˄
    }

    implClose() {
        // ˅
        this.printLine();
        // ˄
    }

    printLine() {
        // ˅
        process.stdout.write('*');              // Display "*" mark at the beginning of a frame.
        for (let i = 0; i < this.width; i++) {  // Display "." for the number of "width".
            process.stdout.write('.');
        }
        process.stdout.write('*\n');            // Display "*" mark at the end of a frame.
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
