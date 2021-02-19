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

    colleagueRadioLogin;

    colleagueRadioGuest;

    colleagueTextUsername;

    colleagueTextPassword;

    colleagueButtonOk;

    colleagueButtonCancel;

    constructor() {
        // ˅
        super();
        this.createColleagues();
        // ˄
    }

    createColleagues() {
        // ˅
        this.colleagueRadioGuest = new ColleagueRadioButton(document.getElementById('radioGuest'));
        this.colleagueRadioLogin = new ColleagueRadioButton(document.getElementById('radioLogin'));
        this.colleagueTextUsername = new ColleagueTextField(document.getElementById('textUsername'));
        this.colleagueTextPassword = new ColleagueTextField(document.getElementById('textPassword'));
        this.colleagueButtonOk = new ColleagueButton(document.getElementById('buttonOk'));
        this.colleagueButtonCancel = new ColleagueButton(document.getElementById('buttonCancel'));

        // Set mediators
        this.colleagueRadioGuest.mediator = this;
        this.colleagueRadioLogin.mediator = this;
        this.colleagueTextUsername.mediator = this;
        this.colleagueTextPassword.mediator = this;
        this.colleagueButtonOk.mediator = this;
        this.colleagueButtonCancel.mediator = this;

        // Generate a click event of the guest radio button.
        (document.getElementById('radioGuest')).click();
        // ˄
    }

    // Change enable/disable of the Colleagues when notified from the Mediators.
    colleagueChanged(event) {
        // ˅
        if (event.currentTarget === document.getElementById('buttonOk')
                || event.currentTarget === document.getElementById('buttonCancel')) {
            document.body.innerHTML = "<h1>Dialog terminated.</h1>"
        }
        else {
            if (event.currentTarget === document.getElementById('radioGuest')) { // Guest mode
                this.colleagueTextUsername.setActivation(false);
                this.colleagueTextPassword.setActivation(false);
                this.colleagueButtonOk.setActivation(true);
            }
            else {                                                              // Login mode
                this.colleagueTextUsername.setActivation(true);
                this.colleagueTextPassword.setActivation(true);

                // Judge whether the changed Colleage is enabled or disabled
                if (this.colleagueTextUsername.isEmpty() === false
                        && this.colleagueTextPassword.isEmpty() === false) {
                    this.colleagueButtonOk.setActivation(true);
                }
                else {
                    this.colleagueButtonOk.setActivation(false);
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
