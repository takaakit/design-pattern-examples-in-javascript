// ˅
'use strict';

import { State } from './state.mjs';
import { DaytimeState } from './daytime-state.mjs';

// ˄

export class NightState extends State {
    // ˅
    
    // ˄

    static instance = new NightState();

    constructor() {
        // ˅
        super();
        // ˄
    }

    static getInstance() {
        // ˅
        return NightState.instance;
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
