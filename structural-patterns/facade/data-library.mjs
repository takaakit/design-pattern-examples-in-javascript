// ˅
'use strict';

import fs from 'fs';

// ˄

export class DataLibrary {
    // ˅
    
    // ˄

    // Read a data library file.
    static getData(dataLibraryFileName) {
        // ˅
        const data = new Map();

        for (let line of fs.readFileSync(dataLibraryFileName, 'utf8').toString().split(/\r\n|\r|\n/)) {
            const keyAndValue = line.split('=');
            if (keyAndValue.length === 2) {
                data.set(keyAndValue[0], keyAndValue[1]);
            }
        }

        return data;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
