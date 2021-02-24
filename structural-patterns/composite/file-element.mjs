// ˅
'use strict';

import { FileSystemElement } from './file-system-element.mjs';

// ˄

export class FileElement extends FileSystemElement {
    // ˅
    
    // ˄

    _name;

    _size;

    constructor(name, size) {
        // ˅
        super();
        this._name = name;
        this._size = size;
        // ˄
    }

    get name() {
        // ˅
        return this._name;
        // ˄
    }

    get size() {
        // ˅
        return this._size;
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
