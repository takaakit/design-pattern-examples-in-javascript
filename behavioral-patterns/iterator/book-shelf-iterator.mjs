// ˅
'use strict';

import { Iterator } from './iterator.mjs';

// ˄

export class BookShelfIterator extends Iterator {
    // ˅
    
    // ˄

    index;

    bookShelf;

    constructor(bookShelf) {
        // ˅
        super();
		this.index = 0;
		this.bookShelf = bookShelf;
        // ˄
    }

    hasNext() {
        // ˅
		return this.index < this.bookShelf.numberOfBooks;
        // ˄
    }

    next() {
        // ˅
		const book = this.bookShelf.getAt(this.index);
		this.index++;
		return book;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
