// ˅
'use strict';

import { LargeSizeChar } from './large-size-char.mjs';

// ˄

export class LargeSizeCharFactory {
    // ˅
    
    // ˄

    static poolChars = new Map();

    // Create an instance of the large size character.
    static getLargeSizeChar(charName) {
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
