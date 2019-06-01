// ˅
'use strict';

// ˄

export class FileSystemElement {
    // ˅
    
    // ˄

    name;

    size;

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
