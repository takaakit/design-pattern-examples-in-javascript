// ˅
'use strict';

import { Mediator } from './mediator.mjs';
import { ColleagueRadioButton } from './colleague-radio-button.mjs';
import { ColleagueTextField } from './colleague-text-field.mjs';
import { ColleagueButton } from './colleague-button.mjs';

// ˄

export class AppLogin extends Mediator {
    // ˅
    
    // ˄

    radioLogin;

    radioGuest;

    textUsername;

    textPassword;

    buttonOk;

    buttonCancel;

    constructor() {
        // ˅
        super();

        // Create TextField, Button and RadioButton
        this.createColleagues();

        // Set mediators
        this.radioGuest.mediator = this;
        this.radioLogin.mediator = this;
        this.textUsername.mediator = this;
        this.textPassword.mediator = this;
        this.buttonOk.mediator = this;
        this.buttonCancel.mediator = this;

        // Generate a click event of the Guest radio button.
        (document.getElementById('radioGuest')).click();
        // ˄
    }

    createColleagues() {
        // ˅
        this.radioGuest = new ColleagueRadioButton(document.getElementById('radioGuest'));
        this.radioLogin = new ColleagueRadioButton(document.getElementById('radioLogin'));
        this.textUsername = new ColleagueTextField(document.getElementById('textUsername'));
        this.textPassword = new ColleagueTextField(document.getElementById('textPassword'));
        this.buttonOk = new ColleagueButton(document.getElementById('buttonOk'));
        this.buttonCancel = new ColleagueButton(document.getElementById('buttonCancel'));
        // ˄
    }

    // Change enable/disable of the Colleagues when notified from the Mediators.
    colleagueChanged() {
        // ˅
        if (this.buttonOk.isPressed() || this.buttonCancel.isPressed()) {
            document.body.innerHTML = '<h1>Dialog terminated.</h1>'     // Display a termination message
        }
        else {
            if (this.radioGuest.isSelected()) {             // Guest mode
                this.textUsername.setActivation(false);
                this.textPassword.setActivation(false);
                this.buttonOk.setActivation(true);
            }
            else {                                          // Login mode
                this.textUsername.setActivation(true);
                this.textPassword.setActivation(true);

                // Judge whether the changed Colleage is enabled or disabled
                if (this.textUsername.isEmpty() === false
                        && this.textPassword.isEmpty() === false) {
                    this.buttonOk.setActivation(true);
                }
                else {
                    this.buttonOk.setActivation(false);
                }
            }
        }
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
