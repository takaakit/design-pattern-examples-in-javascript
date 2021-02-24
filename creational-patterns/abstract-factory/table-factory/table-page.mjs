// ˅
'use strict';

import { Page } from '../factory/page.mjs';

// ˄

export class TablePage extends Page {
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
        htmlData.push('<html><head><title>' + this.title + '</title></head><body>\n');
        htmlData.push('<h1>' + this.title + '</h1>\n');
        htmlData.push('<table width="80%" border="3">\n');
        for (let content of this.contents) {
            htmlData.push('<tr>' + content.toHTML() + '</tr>\n');
        }
        htmlData.push('</table>\n');
        htmlData.push('<hr><address>' + this.author + '</address>\n');
        htmlData.push('</body></html>\n');
        return htmlData.join('');
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
