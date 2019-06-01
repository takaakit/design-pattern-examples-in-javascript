// ˅
'use strict';

import { Element } from './element.mjs';

// ˄

export class FileSystemElement extends Element {
    // ˅
    
    // ˄

    _name;

    _size;

    get name() {
        throw new Error('An abstract method has been executed.');
    }

    get size() {
        throw new Error('An abstract method has been executed.');
    }

    accept(visitor) {
        throw new Error('An abstract method has been executed.');
    }

    toString() {
        // ˅
        return this.name + ' (' + this.size + ')';
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
