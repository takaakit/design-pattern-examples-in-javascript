// ˅
'use strict';

// ˄

// Provides an interface for attaching and detaching Observer objects.
export class Subject {
    // ˅
    
    // ˄

    observers;

    constructor() {
        // ˅
        this.observers = new Array();
        this._value = 0;
        // ˄
    }

    attach(observer) {
        // ˅
        this.observers.push(observer);
        // ˄
    }

    detach(observer) {
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
