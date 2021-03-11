// ˅
'use strict';

import { Colleague } from './colleague.mjs';

// ˄

export class ColleagueTextField extends Colleague {
    // ˅
    
    // ˄

    textArea;

    constructor(textArea) {
        // ˅
        super();
        this.textArea = textArea;
        this.textArea.addEventListener('input', (event) => this.inputTextArea(event));
        // ˄
    }

    // Set enable/disable from the Mediator
    setActivation(isEnable) {
        // ˅
        this.textArea.disabled = !isEnable;
        // ˄
    }

    isEmpty() {
        // ˅
        return this.textArea.value.length === 0
        // ˄
    }

    inputTextArea(event) {
        // ˅
        this._mediator.colleagueChanged();
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
