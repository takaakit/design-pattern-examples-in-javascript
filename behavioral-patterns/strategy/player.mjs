// ˅
'use strict';

import { GameResultType } from './game-result-type.mjs';

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

    // Show a hand signal from the strategy.
    showHandSignal() {
        // ˅
        return this.strategy.showHandSignal();
        // ˄
    }

    // Notify a game result.
    notifyGameResult(result, ownHand, opponentsHand) {
        // ˅
        switch (result) {
            case GameResultType.Win:
                this.winCount++;
                this.gameCount++;
                break;
            case GameResultType.Loss:
                this.lossCount++;
                this.gameCount++;
                break;
            case GameResultType.Draw:
                this.gameCount++;
                break;
        }

        this.strategy.notifyGameResult(result, ownHand, opponentsHand);
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
