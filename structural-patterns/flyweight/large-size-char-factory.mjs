// ˅
'use strict';

import { LargeSizeChar } from './large-size-char.mjs';

// ˄

export class LargeSizeCharFactory {
    // ˅
    
    // ˄

    poolChars;

    static instance = new LargeSizeCharFactory();

    static getInstance() {
        // ˅
        return this.instance;
        // ˄
    }

    constructor() {
        // ˅
        this.poolChars = new Map()
        // ˄
    }

    // Create an instance of the large size character.
    getLargeSizeChar(charName) {
        // ˅
        let lsc = this.poolChars.get(charName);
        if (lsc === undefined) {
            lsc = new LargeSizeChar(charName);  // Create an instance
            this.poolChars.set(charName, lsc);
        }
        return lsc;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
