// ˅
'use strict';

import { Context } from './context.mjs';
import { DaytimeState } from './daytime-state.mjs';

// ˄

export class AppSafe extends Context {
    // ˅
    
    // ˄

    textClock;

    textMessage;

    safebutton;

    soundbutton;

    callbutton;

    exitbutton;

    hour;

    // Current state
    state;

    constructor() {
        // ˅
        super();
        this.state = DaytimeState.getInstance();
        this.hour = 0;
        this.textClock = document.getElementById('textTime');
        this.textMessage = document.getElementById('textMessage');
        this.safebutton = document.getElementById('buttonUse');
        this.soundbutton = document.getElementById('buttonAlarm');
        this.callbutton = document.getElementById('buttonPhone');
        this.exitbutton = document.getElementById('buttonExit');

        this.safebutton.addEventListener('click', (e) => this.clickSafe());
        this.soundbutton.addEventListener('click', (e) => this.clickSound());
        this.callbutton.addEventListener('click', (e) => this.clickCall());
        this.exitbutton.addEventListener('click', (e) => this.clickExit());

        setInterval(this.setTime.bind(this), 1000);     // Set the time
        // ˄
    }

    // Set time
    setTime() {
        // ˅
        var clockTime;
        if (this.hour < 10) {
            clockTime = '0' + this.hour + ':00';
        }
        else {
            clockTime = this.hour + ':00';
        }

        console.log(clockTime);
        this.textClock.value = clockTime;
        this.state.setTime(this, this.hour);
    
        this.hour++;
        if (this.hour >= 24) {
            this.hour = 0;
        }
        // ˄
    }

    // Change state
    changeState(state) {
        // ˅
        console.log('The state changed from ' + this.state.toString() + ' to ' + state.toString());
        this.state = state;
        // ˄
    }

    // Call a security guard room
    callSecurityGuardsRoom(message) {
        // ˅
        this.textMessage.value += 'call! ' + message + '\n';
        this.textMessage.scrollTop = this.textMessage.scrollHeight;     // Scroll to the bottom
        // ˄
    }

    // Record security log
    recordSecurityLog(message) {
        // ˅
        this.textMessage.value += 'record ... ' + message + '\n';
        this.textMessage.scrollTop = this.textMessage.scrollHeight;     // Scroll to the bottom
        // ˄
    }

    clickSafe() {
        // ˅
        this.state.soundBell(this);         // Safe use button pressed
        // ˄
    }

    clickSound() {
        // ˅
        this.state.soundBell(this);         // Emergency bell button pressed
        // ˄
    }

    clickCall() {
        // ˅
        this.state.call(this);              // Normal call button pressed
        // ˄
    }

    clickExit() {
        // ˅
        document.body.innerHTML = "<h1>Dialog terminated.</h1>" // Exit button pressed
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
