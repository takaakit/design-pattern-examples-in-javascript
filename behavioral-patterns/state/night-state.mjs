// ˅
'use strict';

import { State } from './state.mjs';
import { DaytimeState } from './daytime-state.mjs';

// ˄

export class NightState extends State {
    // ˅
    
    // ˄

    static instance = new NightState();

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
        if (9 <= hour && hour < 17) {
            context.changeState(DaytimeState.getInstance());
        }
        // ˄
    }

    // Use a safe
    useSafe(context) {
        // ˅
        context.callSecurityGuardsRoom('Emergency: Use a safe at night!');
        // ˄
    }

    // Sound a emergency bell
    soundBell(context) {
        // ˅
        context.callSecurityGuardsRoom('Sound a emergency bell at night');
        // ˄
    }

    // Make a normal call
    call(context) {
        // ˅
        context.recordSecurityLog('Record a night call');
        // ˄
    }

    toString() {
        // ˅
        return '[Night]';
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
