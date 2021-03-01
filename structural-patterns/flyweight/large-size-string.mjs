// ˅
'use strict';

import { LargeSizeCharFactory } from './large-size-char-factory.mjs';

// ˄

export class LargeSizeString {
    // ˅
    
    // ˄

    largeSizeChars;

    constructor(stringValue) {
        // ˅
        this.largeSizeChars = new Array();
        for (let i = 0; i < stringValue.length; i++) {
            this.largeSizeChars.push(LargeSizeCharFactory.getInstance().getLargeSizeChar(stringValue[i]));
        }
        // ˄
    }

    display() {
        // ˅
        for (let largeSizeChar of this.largeSizeChars) {
            largeSizeChar.display();
        }
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
