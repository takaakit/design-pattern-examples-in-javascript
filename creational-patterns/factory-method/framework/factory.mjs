// ˅
'use strict';

// ˄

export class Factory {
    // ˅
    
    // ˄

    create(owner) {
        // ˅
        const product = this.createProduct(owner);
        this.registerProduct(product);
        return product;
        // ˄
    }

    createProduct(owner) {
        throw new Error('An abstract method has been executed.');
    }

    registerProduct(product) {
        throw new Error('An abstract method has been executed.');
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
