// ˅
'use strict';

import { Product } from '../framework/product.mjs';

// ˄

export class CreditCard extends Product {
    // ˅
    
    // ˄

    owner;

    constructor(owner) {
        // ˅
        super();
        console.log('Make ' + owner + '\'s card.');
        this.owner = owner;
        // ˄
    }

    use() {
        // ˅
        console.log('Use ' + this.owner + '\'s card.');
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
