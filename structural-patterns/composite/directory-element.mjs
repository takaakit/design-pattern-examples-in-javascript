// ˅
'use strict';

import { FileSystemElement } from './file-system-element.mjs';

// ˄

export class DirectoryElement extends FileSystemElement {
    // ˅
    
    // ˄

    elements;

    constructor(name) {
        // ˅
        super();
        this.elements = new Array();
        this.name = name;
        this.size = 0;
        // ˄
    }

    // Print this element with the "upperPath".
    print(upperPath) {
        // ˅
        console.log(upperPath + '/' + this.toString());
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i].print(upperPath + '/' + this.name);
        }
        // ˄
    }

    // Add a element
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
