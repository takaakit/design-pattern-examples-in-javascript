// ˅
'use strict';

// ˄

// An abstract class that generates number value.
export class NumberValue {
    // ˅
    
    // ˄

    _value;

    observers;

    constructor() {
        // ˅
        this.observers = new Array();
        this._value = 0;
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

    removeObserver(observer) {
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

    get value() {
        // ˅
        return this._value;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
