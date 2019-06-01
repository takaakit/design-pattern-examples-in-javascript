// ˅
'use strict';

import { Factory } from '../factory/factory.mjs';
import { ListData } from './list-data.mjs';
import { ListLink } from './list-link.mjs';
import { ListPage } from './list-page.mjs';

// ˄

export class ListFactory extends Factory {
    // ˅
    
    // ˄

    createPage(title, author) {
        // ˅
        return new ListPage(title, author);
        // ˄
    }

    createLink(name, url) {
        // ˅
        return new ListLink(name, url);
        // ˄
    }

    createData(name) {
        // ˅
        return new ListData(name);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
