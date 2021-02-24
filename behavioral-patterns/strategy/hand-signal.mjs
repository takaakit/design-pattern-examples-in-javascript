// ˅
'use strict';

// ˄

export class HandSignal {
    // ˅
    
    // ˄

    // Rock
    static ROCK = 0;

    // Scissors
    static SCISSORS = 1;

    // Paper
    static PAPER = 2;

    // Hands of rock-scissors-paper
    static handSignals = [new HandSignal(HandSignal.ROCK), new HandSignal(HandSignal.SCISSORS), new HandSignal(HandSignal.PAPER)];

    // Characters of the hands
    static handName = ['Rock', 'Scissors', 'Paper'];

    // Values of rock, scissors and paper.
    value;

    // Get an instance of the hand
    static getHand(handValue) {
        // ˅
        return this.handSignals[handValue];
        // ˄
    }

    constructor(value) {
        // ˅
        this.value = value;
        // ˄
    }

    // Return true if "this" is stronger than "hand".
    isStrongerThan(hand) {
        // ˅
        return this.judgeGame(hand) === 1;
        // ˄
    }

    // Return false if "this" is weaker than "hand".
    isWeakerThan(hand) {
        // ˅
        return this.judgeGame(hand) === -1;
        // ˄
    }

    toString() {
        // ˅
        return HandSignal.handName[this.value];
        // ˄
    }

    // The draw is 0. "this" win is 1. "hand" win is -1.
    judgeGame(hand) {
        // ˅
        if (this === hand) {
            return 0;
        }
        else if ((this.value + 1) % 3 === hand.value) {
            return 1;
        }
        else {
            return -1;
        }
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
