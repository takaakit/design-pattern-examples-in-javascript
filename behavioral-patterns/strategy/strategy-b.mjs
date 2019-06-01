// ˅
'use strict';

import { Hand } from './hand.mjs';
import { Strategy } from './strategy.mjs';

// ˄

// Calculate a hand from the previous hand stochastically.
export class StrategyB extends Strategy {
    // ˅
    
    // ˄

    history;

    preHand;

    curHand;

    constructor() {
        // ˅
        super();
        this.history = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
        this.preHand = new Hand(Hand.ROCK);
        this.curHand = new Hand(Hand.ROCK);
        // ˄
    }

    nextHand() {
        // ˅
        const randomHandValue = Math.floor(Math.random() * 50);   // A random number from 0 to less than 50.
        var handValue = 0;
        if (randomHandValue < this.history[this.curHand.value][0]) {
            handValue = Hand.ROCK;
        }
        else if (randomHandValue < this.history[this.curHand.value][0] + this.history[this.curHand.value][1]) {
            handValue = Hand.SCISSORS;
        }
        else {
            handValue = Hand.PAPER;
        }
        this.preHand = this.curHand;
        this.curHand = Hand.getHand(handValue);
        return this.curHand;
        // ˄
    }

    learn(win) {
        // ˅
        if (win === true) {
            this.history[this.preHand.value][this.curHand.value]++;
        }
        else {
            this.history[this.preHand.value][(this.curHand.value + 1) % 3]++;
            this.history[this.preHand.value][(this.curHand.value + 2) % 3]++;
        }
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
