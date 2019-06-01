// ˅
'use strict';

import { Factory } from '../factory/factory.mjs';
import { TableData } from './table-data.mjs';
import { TableLink } from './table-link.mjs';
import { TablePage } from './table-page.mjs';

// ˄

export class TableFactory extends Factory {
    // ˅
    
    // ˄

    createPage(title, author) {
        // ˅
        return new TablePage(title, author);
        // ˄
    }

    createLink(name, url) {
        // ˅
        return new TableLink(name, url);
        // ˄
    }

    createData(name) {
        // ˅
        return new TableData(name);
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
