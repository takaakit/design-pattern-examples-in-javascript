// ˅
'use strict';

import fs from 'fs';

// ˄

export class DataLibrary {
    // ˅
    
    // ˄

    static instance = new DataLibrary();

    constructor() {
        // ˅
        
        // ˄
    }

    static getInstance() {
        // ˅
        return DataLibrary.instance;
        // ˄
    }

    // Read a data library file.
    getData(dataLibraryName) {
        // ˅
        const data = new Map();
        const fileName = dataLibraryName + '.txt';

        for (let line of fs.readFileSync('./' + fileName, 'utf8').toString().split(/\r\n|\r|\n/)) {
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
