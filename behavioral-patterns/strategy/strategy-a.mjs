// ˅
'use strict';

import { Hand } from './hand.mjs';
import { Strategy } from './strategy.mjs';

// ˄

// When winning a game, show the same hand at the next time.
export class StrategyA extends Strategy {
    // ˅
    
    // ˄

    won;

    preHand;

    constructor() {
        // ˅
        super();
        this.won = false;
        this.preHand = Hand.getHand(Hand.ROCK);
        // ˄
    }

    nextHand() {
        // ˅
        if (this.won === false) {
            this.preHand = Hand.getHand(Math.floor(Math.random() * 3));
        }
        return this.preHand;
        // ˄
    }

    learn(win) {
        // ˅
        this.won = win;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
