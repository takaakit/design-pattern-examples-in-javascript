// ˅
'use strict';

// ˄

export class Factory {
    // ˅
    
    // ˄

    create(owner) {
        // ˅
        // Write pre-creation code here, if any.

        let product = this.createProduct(owner);

        // Write post-creation code here, if any.

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
