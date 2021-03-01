// ˅
'use strict';

import fs from 'fs';
import { DataLibrary } from './data-library.mjs';
import { HtmlWriter } from './html-writer.mjs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

// ˄

export class PageCreator {
    // ˅
    
    // ˄

    static instance = new PageCreator();

    static getInstance() {
        // ˅
        return this.instance;
        // ˄
    }

    constructor() {
        // ˅
        
        // ˄
    }

    createSimpleHomepage(mailAddress, htmlFileName) {
        // ˅
        // Get the absolute path of the currently executing file referring to the information below.
        // https://stackoverflow.com/questions/46745014/alternative-for-dirname-in-node-when-using-the-experimental-modules-flag
        const __dirname = dirname(fileURLToPath(import.meta.url));

        const addressBook = DataLibrary.getInstance().getData(__dirname + '/addressbook.txt');
        const userName = addressBook.get(mailAddress);
        
        const writer = new HtmlWriter(fs.createWriteStream(htmlFileName, 'utf8'));
        writer.heading(userName + '\'s homepage');
        writer.paragraph('Welcome to ' + userName + '\'s homepage.');
        writer.paragraph('Please email me at this address.');
        writer.mailto(mailAddress, userName);
        writer.close();
        console.log(htmlFileName + ' is created for ' + mailAddress + ' (' + userName + ')');
        console.log('Output File: ' + path.join(process.cwd(), htmlFileName));
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
