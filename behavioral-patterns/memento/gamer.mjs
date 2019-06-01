// ˅
'use strict';

import { Memento } from './memento.mjs';

// ˄

export class Gamer {
    // ˅
    
    // ˄

    // Gamer's money
    money;

    // Acquired desserts 
    desserts;

    // Dessert name table
    static dessertsName = ['Cake', 'Candy', 'Cookie'];

    constructor(money) {
        // ˅
		this.desserts = new Array();
		this.money = money;
        // ˄
    }

    // Get a dessert
    get dessert() {
        // ˅
		var prefix = '';
		if (Math.floor(Math.random() * 2) === 0) {
			prefix = 'Delicious ';
		}
		return prefix + Gamer.dessertsName[Math.floor(Math.random() * Gamer.dessertsName.length)];
        // ˄
    }

    // Get current status
    createMemento() {
        // ˅
		const memento = new Memento(this.money);
		for (let dessert of this.desserts) {
			if (dessert.startsWith('Delicious ')) {		// Add a only delicious dessert
				memento.addDessert(dessert);
			}
		}
		return memento;
        // ˄
    }

    // Undo status
    restoreMemento(memento) {
        // ˅
		this.money = memento.money;
		this.desserts = memento.desserts;
        // ˄
    }

    // Play a game
    play() {
        // ˅
		const dice = Math.floor(Math.random() * 6) + 1;		// Shake a dice
		switch (dice) {
			case 1:		// In case of 1...Gamer's money increases
				this.money = this.money + 100;
				console.log('Gamer\'s money increases.');
				break;
			case 2:		// In case of 2...Gamer's money halves
				this.money = this.money / 2;
				console.log('Gamer\'s money halves.');
				break;
			case 6:		// In case of 6...Gamer gets desserts
				const gotDessert = this.dessert
				console.log('Gamer gets desserts(' + gotDessert + ')');
				this.desserts.push(gotDessert);
				break;
			default:	// Other...Nothing happens
				console.log('Nothing happens.');
				break;
		}
        // ˄
    }

    toString() {
        // ˅
		return '[money = ' + this.money + ', desserts = ' + this.desserts.join(', ') + ']';
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
