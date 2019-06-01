// ˅
'use strict';

import fs from 'fs';

// ˄

export class Page {
    // ˅
    
    // ˄

    title;

    author;

    contents;

    constructor(title, author) {
        // ˅
        this.title = title;
        this.author = author;
        this.contents = new Array();
        // ˄
    }

    toHTML() {
        throw new Error('An abstract method has been executed.');
    }

    add(item) {
        // ˅
        this.contents.push(item);
        // ˄
    }

    output() {
        // ˅
        const fileName = this.title + '.html';
        try {
            fs.writeFileSync(fileName, this.toHTML());
            console.log(fileName + ' has been created.');
        } catch(e) {
            console.error(e);
        }
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
