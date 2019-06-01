// ˅
'use strict';

import fs from 'fs';
import { DataLibrary } from './data-library.mjs';
import { HtmlWriter } from './html-writer.mjs';

// ˄

export class PageCreator {
    // ˅
    
    // ˄

    static instance = new PageCreator();

    constructor() {
        // ˅
        
        // ˄
    }

    static getInstance() {
        // ˅
        return PageCreator.instance;
        // ˄
    }

    createSimpleHomepage(mailAddress, htmlFileName) {
        // ˅
        const addressBook = DataLibrary.getInstance().getData('addressbook');
        const userName = addressBook.get(mailAddress);
        const writer = new HtmlWriter(fs.createWriteStream(htmlFileName, 'utf8'));
        writer.heading(userName + '\'s homepage');
        writer.paragraph('Welcome to ' + userName + '\'s homepage.');
        writer.paragraph('Please email me at this address.');
        writer.mailto(mailAddress, userName);
        writer.close();
        console.log(htmlFileName + ' is created for ' + mailAddress + ' (' + userName + ')');
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
