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

    setTime(context, hour) {
        // ˅
        if (9 <= hour && hour < 17) {
            context.changeState(DaytimeState.getInstance());
        }
        // ˄
    }

    use(context) {
        // ˅
        context.callSecurityGuardsRoom('Emergency: Use a safe at night!');
        // ˄
    }

    alarm(context) {
        // ˅
        context.callSecurityGuardsRoom('Sound an emergency bell at night');
        // ˄
    }

    phone(context) {
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
