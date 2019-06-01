// ˅
'use strict';

import { FileSystemElement } from './file-system-element.mjs';

// ˄

export class FileElement extends FileSystemElement {
    // ˅
    
    // ˄

    constructor(name, size) {
        // ˅
        super();
        this.name = name;
        this.size = size;
        // ˄
    }

    // Print this element with the "upperPath".
    print(upperPath) {
        // ˅
        console.log(upperPath + '/' + this.toString());
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
