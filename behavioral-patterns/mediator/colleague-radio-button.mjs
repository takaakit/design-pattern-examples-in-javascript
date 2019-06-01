// ˅
'use strict';

import { Colleague } from './colleague.mjs';

// ˄

export class ColleagueRadioButton extends Colleague {
    // ˅
    
    // ˄

    radioButton;

    constructor(radioButton) {
        // ˅
        super();
        this.mediator = null;
        this.radioButton = radioButton;
        this.radioButton.addEventListener('click', (event) => this.clickRadioButton(event));
        // ˄
    }

    // Set enable/disable from the Mediator
    setActivation(isEnable) {
        // ˅
        this.radioButton.disabled = !isEnable;
        // ˄
    }

    clickRadioButton(event) {
        // ˅
        this.mediator.colleagueChanged(event);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
