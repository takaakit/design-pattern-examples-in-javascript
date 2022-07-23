// ˅
'use strict';

// ˄

export class Factory {
    // ˅
    
    // ˄

    create(owner) {
        // ˅
        // Write pre-creation code here.

        // Encapsulate the knowledge of which Product subclass to create and move this knowledge out of the framework.
        let product = this.createProduct(owner);

        // Write post-creation code here.

        return product;
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
