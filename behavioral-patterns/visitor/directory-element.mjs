// ˅
'use strict';

import { FileSystemElement } from './file-system-element.mjs';

// ˄

export class DirectoryElement extends FileSystemElement {
    // ˅
    
    // ˄

    _name;

    // Collection of elements
    elements;

    constructor(name) {
        // ˅
        super();
        this._name = name;
        this.elements = [];
        // ˄
    }

    // Accept a visitor
    accept(visitor) {
        // ˅
        visitor.visitDirectory(this);
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
        let size = 0;
        for (let element of this.elements) {
            size += element.size;
        }
        return size;
        // ˄
    }

    // Add an element
    add(element) {
        // ˅
        this.elements.push(element);
        // ˄
    }

    // Get the iterator
    iterator() {
        // ˅
        return this.elements[Symbol.iterator]();
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
