// ˅
'use strict';

// ˄

export class Memento {
    // ˅
    
    // ˄

    // Money
    money;

    // Desserts
    desserts;

    constructor(money) {
        // ˅
		this.money = money;
		this.desserts = new Array();
        // ˄
    }

    // Add a dessert
    addDessert(dessert) {
        // ˅
		this.desserts.push(dessert);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
