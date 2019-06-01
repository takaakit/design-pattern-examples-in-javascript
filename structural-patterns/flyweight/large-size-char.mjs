// ˅
'use strict';

import fs from 'fs';

// ˄

export class LargeSizeChar {
    // ˅
    
    // ˄

    // Display data of the large size character
    displayData;

    constructor(charName) {
        // ˅
        this.displayData = null;
        
        try {
            const buf = fs.readFileSync('./big' + charName + '.txt', 'utf8');
            this.displayData = buf.toString();
        }
        catch {
            this.displayData = charName + '?';
        }
        // ˄
    }

    // Display the large size character
    display() {
        // ˅
        console.log(this.displayData);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
