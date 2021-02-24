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
        this.owner = owner;
        console.log('Make ' + this.owner + '\'s card.');
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
