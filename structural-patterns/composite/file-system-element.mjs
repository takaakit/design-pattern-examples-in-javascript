// ˅
'use strict';

// ˄

export class FileSystemElement {
    // ˅
    
    // ˄

    get name() {
        throw new Error('An abstract method has been executed.');
    }

    get size() {
        throw new Error('An abstract method has been executed.');
    }

    // Print this element with the "upperPath".
    print(upperPath) {
        throw new Error('An abstract method has been executed.');
    }

    toString() {
        // ˅
        return this.name + ' (' + this.size + ')'
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
