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

    // Set time
    setTime(context, hour) {
        // ˅
        if (hour < 9 || 17 <= hour) {
            context.changeState(NightState.getInstance());
        }
        // ˄
    }

    // Use a safe
    useSafe(context) {
        // ˅
        context.recordSecurityLog('Use a safe in the daytime');
        // ˄
    }

    // Sound a emergency bell
    soundBell(context) {
        // ˅
        context.callSecurityGuardsRoom('Sound a emergency bell in the daytime');
        // ˄
    }

    // Make a normal call
    call(context) {
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
