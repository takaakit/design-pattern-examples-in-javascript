// ˅
'use strict';

// ˄

export class Player {
    // ˅
    
    // ˄

    name;

    winCount;

    lossCount;

    gameCount;

    strategy;

    constructor(name, strategy) {
        // ˅
        this.name = name;
        this.winCount = 0;
        this.lossCount = 0;
        this.gameCount = 0;
        this.strategy = strategy;
        // ˄
    }

    // Calculate a hand from the strategy.
    nextHand() {
        // ˅
        return this.strategy.nextHand();
        // ˄
    }

    // Won a game.
    won() {
        // ˅
        this.strategy.learn(true);
        this.winCount++;
        this.gameCount++;
        // ˄
    }

    // Lost a game.
    lost() {
        // ˅
        this.strategy.learn(false);
        this.lossCount++;
        this.gameCount++;
        // ˄
    }

    // Drew a game.
    drew() {
        // ˅
        this.gameCount++;
        // ˄
    }

    toString() {
        // ˅
        return this.name + ' [' + this.gameCount + ' games, ' + this.winCount + ' won, ' + this.lossCount + ' lost, ' + (this.gameCount - this.winCount - this.lossCount) + ' drew]';
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
