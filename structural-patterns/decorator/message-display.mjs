// ˅
'use strict';

import { Display } from './display.mjs';

// ˄

export class MessageDisplay extends Display {
    // ˅
    
    // ˄

    // Message to be displayed
    message;

    constructor(message) {
        // ˅
        super();
        this.message = message;
        // ˄
    }

    // Number of characters
    get columns() {
        // ˅
        return this.message.length;
        // ˄
    }

    // The number of rows is 1
    get rows() {
        // ˅
        return 1;
        // ˄
    }

    getLineText(row) {
        // ˅
        if (row === 0) {
            return this.message;
        }
        else {
            return null;
        }
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
