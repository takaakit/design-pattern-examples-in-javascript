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
        this.elements = new Array();
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
        let value = 0;
        for (let element of this.elements) {
            value += element.size;
        }
        return value;
        // ˄
    }

    // Add an element
    add(element) {
        // ˅
        this.elements.push(element);
        return this;
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
