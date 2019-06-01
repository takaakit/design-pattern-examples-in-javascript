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
        this._name = name;
        this._size = size;
        // ˄
    }

    // File element name
    get name() {
        // ˅
        return this._name
        // ˄
    }

    get size() {
        // ˅
        return this._size;
        // ˄
    }

    accept(visitor) {
        // ˅
        visitor.visitFile(this);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
