// ˅
'use strict';

import { Colleague } from './colleague.mjs';

// ˄

export class ColleagueButton extends Colleague {
    // ˅
    
    // ˄

    _isPressed;

    button;

    constructor(button) {
        // ˅
        super();
        this.button = button;
        this._isPressed = false;
        this.button.addEventListener('mousedown', (event) => this.pressedButton(event));
        this.button.addEventListener('mouseup', (event) => this.releasedButton(event));
        // ˄
    }

    // Set enable/disable from the Mediator
    setActivation(isEnable) {
        // ˅
        this.button.disabled = !isEnable;
        // ˄
    }

    isPressed() {
        // ˅
        return this._isPressed;
        // ˄
    }

    pressedButton(event) {
        // ˅
        this._isPressed = true;
        // ˄
    }

    releasedButton(event) {
        // ˅
        this._mediator.colleagueChanged();
        this._isPressed = false;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
