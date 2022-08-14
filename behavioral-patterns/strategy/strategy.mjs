// ˅
'use strict';

// ˄

export class Strategy {
    // ˅
    
    // ˄

    // Show a hand signal.
    showHandSignal() {
        throw new Error('An abstract method has been executed.');
    }

    // Notify a game result.
    notifyGameResult(result, ownHand, opponentsHand) {
        throw new Error('An abstract method has been executed.');
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
