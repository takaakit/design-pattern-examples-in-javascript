// ˅
'use strict';

import fs from 'fs';

// ˄

export class DataLibrary {
    // ˅
    
    // ˄

    static instance = new DataLibrary();

    static getInstance() {
        // ˅
        return this.instance;
        // ˄
    }

    constructor() {
        // ˅
        
        // ˄
    }

    // Read a data library file.
    getData(dataLibraryFileName) {
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
