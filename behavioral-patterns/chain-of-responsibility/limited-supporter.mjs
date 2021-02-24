// ˅
'use strict';

import { Supporter } from './supporter.mjs';

// ˄

export class LimitedSupporter extends Supporter {
    // ˅
    
    // ˄

    limitId;

    constructor(name, limitId) {
        // ˅
        super(name);
        this.limitId = limitId;
        // ˄
    }

    // Troubles with an ID below the limit are handled.
    canHandle(trouble) {
        // ˅
        return trouble.id <= this.limitId;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
