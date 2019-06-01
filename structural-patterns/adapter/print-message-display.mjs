// ˅
'use strict';

import { Print } from './print.mjs';
import { MessageDisplay } from './message-display.mjs';

// ˄

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
