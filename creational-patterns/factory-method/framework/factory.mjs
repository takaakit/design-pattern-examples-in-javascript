// ˅
'use strict';

// ˄

export class Factory {
    // ˅
    
    // ˄

    create(owner) {
        // ˅
        return this.createProduct(owner);
        // ˄
    }

    createProduct(owner) {
        throw new Error('An abstract method has been executed.');
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
