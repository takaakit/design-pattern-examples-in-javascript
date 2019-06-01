// ˅
'use strict';

import { FileSystemElement } from './file-system-element.mjs';

// ˄

export class DirectoryElement extends FileSystemElement {
    // ˅
    
    // ˄

    // Collection of elements
    elements;

    constructor(name) {
        // ˅
        super();
        this._name = name;
        this.elements = new Array();
        // ˄
    }

    // Directory element name
    get name() {
        // ˅
        return this._name;
        // ˄
    }

    get size() {
        // ˅
        var value = 0;
        for (let element of this.elements) {
            value += element.size;
        }
        return value;
        // ˄
    }

    // Accept a visitor
    accept(visitor) {
        // ˅
        visitor.visitDirectory(this);
        // ˄
    }

    // Add an entry
    add(element) {
        // ˅
        this.elements.push(element);
        return this;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
