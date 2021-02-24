// ˅
'use strict';

import { HandSignal } from './hand-signal.mjs';
import { Strategy } from './strategy.mjs';

// ˄

// Mirror Strategy: showing a hand signal from the previous opponent's hand signal.
export class MirrorStrategy extends Strategy {
    // ˅
    
    // ˄

    preOpponentsHand;

    constructor() {
        // ˅
        super();
        this.preOpponentsHand = HandSignal.getHand(HandSignal.ROCK);
        // ˄
    }

    showHandSignal() {
        // ˅
        return this.preOpponentsHand;
        // ˄
    }

    notifyGameResult(result, ownHand, opponentsHand) {
        // ˅
        this.preOpponentsHand = opponentsHand;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
