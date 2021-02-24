// ˅
'use strict';

import { CreditCard } from './credit-card.mjs';
import { Factory } from '../framework/factory.mjs';

// ˄

export class CreditCardFactory extends Factory {
    // ˅
    
    // ˄

    constructor() {
        // ˅
        super();
        // ˄
    }

    createProduct(owner) {
        // ˅
        return new CreditCard(owner);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
