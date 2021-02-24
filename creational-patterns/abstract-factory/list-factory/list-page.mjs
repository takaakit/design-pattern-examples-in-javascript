// ˅
'use strict';

import { Page } from '../factory/page.mjs';

// ˄

export class ListPage extends Page {
    // ˅
    
    // ˄

    constructor(title, author) {
        // ˅
        super(title, author);
        // ˄
    }

    toHTML() {
        // ˅
        const htmlData = new Array();
        htmlData.push('<html><head><title>' + this.title + '</title></head>');
        htmlData.push('<body><h1>' + this.title + '</h1>');
        htmlData.push('<ul>');
        for (let content of this.contents) {
            htmlData.push(content.toHTML());
        }
        htmlData.push('</ul>');
        htmlData.push('<hr><address>' + this.author + '</address>');
        htmlData.push('</body></html>\n');
        return htmlData.join('');
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
