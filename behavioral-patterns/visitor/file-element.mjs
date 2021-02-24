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

    accept(visitor) {
        // ˅
        visitor.visitFile(this);
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

    // ˅
    
    // ˄
}

// ˅

// ˄
