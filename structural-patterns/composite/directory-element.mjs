// ˅
'use strict';

import { FileSystemElement } from './file-system-element.mjs';

// ˄

export class DirectoryElement extends FileSystemElement {
    // ˅
    
    // ˄

    _name;

    elements;

    constructor(name) {
        // ˅
        super();
        this._name = name;
        this.elements = new Array();
        // ˄
    }

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

    // Print this element with the "upperPath".
    print(upperPath) {
        // ˅
        console.log(`${upperPath}/${this.toString()}`);
        for (let element of this.elements) {
            element.print(`${upperPath}/${this.name}`);
        }
        // ˄
    }

    // Add an element
    add(element) {
        // ˅
        this.elements.push(element);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
