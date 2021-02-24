// ˅
'use strict';

// ˄

export class Colleague {
    // ˅
    
    // ˄

    _mediator;

    constructor() {
        // ˅
        this._mediator = null;
        // ˄
    }

    // Set enable/disable from the Mediator
    setActivation(isEnable) {
        throw new Error('An abstract method has been executed.');
    }

    set mediator(mediator) {
        // ˅
        this._mediator = mediator;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
