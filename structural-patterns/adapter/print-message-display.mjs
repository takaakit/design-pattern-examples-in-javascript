// ˅
'use strict';

import { Print } from './print.mjs';
import { MessageDisplay } from './message-display.mjs';

// ˄

// Adapt the MessageDisplay interface to the Print interface.
export class PrintMessageDisplay extends Print {
    // ˅
    
    // ˄

    messageDisplay;

    constructor(message) {
        // ˅
        super();
        this.messageDisplay = new MessageDisplay(message);
        // ˄
    }

    printWeak() {
        // ˅
        this.messageDisplay.displayWithHyphens();
        // ˄
    }

    printStrong() {
        // ˅
        this.messageDisplay.displayWithBrackets();
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
