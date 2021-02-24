// ˅
'use strict';

import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Get the absolute path of the currently executing file referring to the information below.
// https://stackoverflow.com/questions/46745014/alternative-for-dirname-in-node-when-using-the-experimental-modules-flag
const __dirname = dirname(fileURLToPath(import.meta.url));

// ˄

export class LargeSizeChar {
    // ˅
    
    // ˄

    // Display data of the large size character
    displayData;

    constructor(charName) {
        // ˅
        try {
            const buf = fs.readFileSync(__dirname + '/big' + charName + '.txt', 'utf8');
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
