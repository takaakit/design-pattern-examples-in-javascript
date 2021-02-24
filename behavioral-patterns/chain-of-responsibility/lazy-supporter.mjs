// ˅
'use strict';

import { Supporter } from './supporter.mjs';

// ˄

export class LazySupporter extends Supporter {
    // ˅
    
    // ˄

    constructor(name) {
        // ˅
        super(name);
        // ˄
    }

    // No troubles are handled.
    canHandle(trouble) {
        // ˅
        return false;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
