// ˅
'use strict';

import { Supporter } from './supporter.mjs';

// ˄

export class MoodySupporter extends Supporter {
    // ˅
    
    // ˄

    constructor(name) {
        // ˅
        super(name);
        // ˄
    }

    // Troubles with an odd ID are handled.
    handle(trouble) {
        // ˅
        return trouble.id % 2 === 1;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
