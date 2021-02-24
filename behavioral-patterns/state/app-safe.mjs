// ˅
'use strict';

import { Context } from './context.mjs';
import { DaytimeState } from './daytime-state.mjs';

// ˄

// Safe security system that the security status changes with time.
export class AppSafe extends Context {
    // ˅
    
    // ˄

    hour;

    timerId;

    // Current state
    state;

    textClock;

    textMessage;

    safebutton;

    soundbutton;

    callbutton;

    exitbutton;

    constructor() {
        // ˅
        super();
        this.state = new DaytimeState();
        this.hour = 0;
        this.textClock = document.getElementById('textTime');
        this.textMessage = document.getElementById('textMessage');
        this.safebutton = document.getElementById('buttonUse');
        this.soundbutton = document.getElementById('buttonAlarm');
        this.callbutton = document.getElementById('buttonPhone');
        this.exitbutton = document.getElementById('buttonExit');

        this.safebutton.addEventListener('click', () => this.useSafe());        // Use button pressed
        this.soundbutton.addEventListener('click', () => this.soundBell());     // Alarm button pressed
        this.callbutton.addEventListener('click', () => this.call());           // Phone button pressed
        this.exitbutton.addEventListener('click', () => this.exit());           // Exit button pressed

        this.timerId = window.setInterval(this.setTime.bind(this), 1000);       // Set interval timer
        // ˄
    }

    // Set time
    setTime() {
        // ˅
        let clockTime;
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
        console.log('The state changed from ' + this.state.toString() + ' to ' + state.toString() + '.');
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

    useSafe() {
        // ˅
        this.state.useSafe(this);
        // ˄
    }

    soundBell() {
        // ˅
        this.state.soundBell(this);
        // ˄
    }

    call() {
        // ˅
        this.state.call(this);
        // ˄
    }

    exit() {
        // ˅
        clearInterval(this.timerId);    // Clear interval timer
        document.body.innerHTML = '<h1>Dialog terminated.</h1>';
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
