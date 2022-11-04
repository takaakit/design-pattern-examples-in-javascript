// ˅
'use strict';

import { Item } from './item.mjs';

// ˄

export class Data extends Item {
    // ˅
    
    // ˄

    items;

    constructor(name) {
        // ˅
        super(name);
        this.items = [];
        // ˄
    }

    add(item) {
        // ˅
        this.items.push(item);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
