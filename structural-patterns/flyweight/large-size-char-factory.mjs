// ˅
'use strict';

import { LargeSizeChar } from './large-size-char.mjs';

// ˄

export class LargeSizeCharFactory {
    // ˅
    
    // ˄

    poolChars;

    static instance = new LargeSizeCharFactory();

    constructor() {
        // ˅
        this.poolChars = new Map();
        // ˄
    }

    static getInstance() {
        // ˅
        return this.instance;
        // ˄
    }

    // Create an instance of the large size character.
    getLargeSizeChar(charName) {
        // ˅
        var lsc = null;
        if (this.poolChars.has(charName) === false) {
            lsc = new LargeSizeChar(charName);  // Create an instance
            this.poolChars.set(charName, lsc);
        }
        else {
            lsc = this.poolChars.get(charName);
        }
        return lsc;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
