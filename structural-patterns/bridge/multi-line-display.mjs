// ˅
'use strict';

import { Display } from './display.mjs';

// ˄

export class MultiLineDisplay extends Display {
    // ˅
    
    // ˄

    constructor(impl) {
        // ˅
        super(impl);
        // ˄
    }

    // Repeat display for the specified number of times
    outputMultiple(times) {
        // ˅
        this.open();
        for (let i = 0; i < times; i++) {
            this.write();
        }
        this.close();
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
