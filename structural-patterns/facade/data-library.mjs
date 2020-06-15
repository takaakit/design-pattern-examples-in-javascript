// ˅
'use strict';

import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

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

        // Get the absolute path of the currently executing file referring to the information below.
        // https://stackoverflow.com/questions/46745014/alternative-for-dirname-in-node-when-using-the-experimental-modules-flag
        const __dirname = dirname(fileURLToPath(import.meta.url));

        for (let line of fs.readFileSync(__dirname + '/' + fileName, 'utf8').toString().split(/\r\n|\r|\n/)) {
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
