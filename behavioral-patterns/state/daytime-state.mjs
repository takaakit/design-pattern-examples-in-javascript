// ˅
'use strict';

import { State } from './state.mjs';
import { NightState } from './night-state.mjs';

// ˄

export class DaytimeState extends State {
    // ˅
    
    // ˄

    static instance = new DaytimeState();

    static getInstance() {
        // ˅
        return this.instance;
        // ˄
    }

    constructor() {
        // ˅
        super();
        // ˄
    }

    setTime(context, hour) {
        // ˅
        if (hour < 9 || 17 <= hour) {
            context.changeState(NightState.getInstance());
        }
        // ˄
    }

    use(context) {
        // ˅
        context.recordSecurityLog('Use a safe in the daytime');
        // ˄
    }

    alarm(context) {
        // ˅
        context.callSecurityGuardsRoom('Sound an emergency bell in the daytime');
        // ˄
    }

    phone(context) {
        // ˅
        context.callSecurityGuardsRoom('Make a normal call in the daytime');
        // ˄
    }

    toString() {
        // ˅
        return '[Daytime]';
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
