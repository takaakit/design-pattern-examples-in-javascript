// ˅
'use strict';

import { Aggregate } from './aggregate.mjs';
import { BookShelfIterator } from './book-shelf-iterator.mjs';

// ˄

export class BookShelf extends Aggregate {
    // ˅
    
    // ˄

    _numberOfBooks;

    books;

    constructor(maxsize) {
        // ˅
        super();
		this.books = new Array(maxsize);
		this._numberOfBooks = 0;
        // ˄
    }

    iterator() {
        // ˅
		return new BookShelfIterator(this);
        // ˄
    }

    getAt(index) {
        // ˅
		return this.books[index];
        // ˄
    }

    add(book) {
        // ˅
		this.books[this._numberOfBooks] = book;
		this._numberOfBooks++;
        // ˄
    }

    get numberOfBooks() {
        // ˅
        return this._numberOfBooks;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
