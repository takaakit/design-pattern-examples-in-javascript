// ˅
'use strict';

// ˄

export class Item {
    // ˅
    
    // ˄

    name;

    constructor(name) {
        // ˅
        this.name = name;
        // ˄
    }

    toHTML() {
        throw new Error('An abstract method has been executed.');
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
