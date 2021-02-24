// ˅
'use strict';

import { Link } from '../factory/link.mjs';

// ˄

export class ListLink extends Link {
    // ˅
    
    // ˄

    constructor(name, url) {
        // ˅
        super(name, url);
        // ˄
    }

    toHTML() {
        // ˅
        return '  <li><a href="' + this.url + '">' + this.name + '</a></li>\n';
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
