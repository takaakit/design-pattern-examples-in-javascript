// ˅
'use strict';

import { Colleague } from './colleague.mjs';

// ˄

export class ColleagueButton extends Colleague {
    // ˅
    
    // ˄

    button;

    constructor(button) {
        // ˅
        super();
        this.button = button;
        this.button.addEventListener('click', (event) => this.clickButton(event));
        // ˄
    }

    // Set enable/disable from the Mediator
    setActivation(isEnable) {
        // ˅
        this.button.disabled = !isEnable;
        // ˄
    }

    clickButton(event) {
        // ˅
        this._mediator.colleagueChanged(event);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
