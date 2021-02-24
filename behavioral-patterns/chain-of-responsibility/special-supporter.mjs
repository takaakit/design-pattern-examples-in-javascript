// ˅
'use strict';

import { Supporter } from './supporter.mjs';

// ˄

export class SpecialSupporter extends Supporter {
    // ˅
    
    // ˄

    targetId;

    constructor(name, targetId) {
        // ˅
        super(name);
        this.targetId = targetId;
        // ˄
    }

    // Troubles with the specific ID are handled.
    canHandle(trouble) {
        // ˅
        return trouble.id === this.targetId;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
