// ˅
'use strict';

import { HandSignal } from './hand-signal.mjs';
import { Strategy } from './strategy.mjs';

// ˄

// Random Strategy: showing a random hand signal.
export class RandomStrategy extends Strategy {
    // ˅
    
    // ˄

    constructor() {
        // ˅
        super();
        // ˄
    }

    showHandSignal() {
        // ˅
        return HandSignal.getHand(Math.floor(Math.random() * 3));
        // ˄
    }

    notifyGameResult(result, ownHand, opponentsHand) {
        // ˅
        // Do nothing
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
