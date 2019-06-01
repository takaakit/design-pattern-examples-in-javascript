// ˅
'use strict';

import { CreditCard } from './credit-card.mjs';
import { Factory } from '../framework/factory.mjs';

// ˄

export class CreditCardFactory extends Factory {
    // ˅
    
    // ˄

    cardOwners;

    constructor() {
        // ˅
        super();
        this.cardOwners = new Array();
        // ˄
    }

    createProduct(owner) {
        // ˅
        return new CreditCard(owner);
        // ˄
    }

    registerProduct(product) {
        // ˅
        this.cardOwners.push(product.owner);
        // ˄
    }

    getCardOwner() {
        // ˅
        return this.cardOwners;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
