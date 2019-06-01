// ˅
'use strict';

// ˄

// An abstract class that generates numbers.
export class ValueNumber {
    // ˅
    
    // ˄

    valueNumber;

    observers;

    constructor() {
        // ˅
		this.observers = new Array();
		this.valueNumber = 0;
        // ˄
    }

    generate() {
        throw new Error('An abstract method has been executed.');
    }

    addObserver(observer) {
        // ˅
		this.observers.push(observer);
        // ˄
    }

    deleteObserver(observer) {
        // ˅
		for (let i = 0; i < this.observers.length; i++) {
			if(this.observers[i] === observer){
				this.observers.splice(i, 1);
			}
		}
        // ˄
    }

    notifyObservers() {
        // ˅
		for (let observer of this.observers) {
			observer.update(this);
		}
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
