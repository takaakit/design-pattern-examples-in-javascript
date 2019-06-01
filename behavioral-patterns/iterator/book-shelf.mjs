// ˅
'use strict';

import { Aggregate } from './aggregate.mjs';
import { BookShelfIterator } from './book-shelf-iterator.mjs';

// ˄

export class BookShelf extends Aggregate {
    // ˅
    
    // ˄

    numberOfBooks;

    books;

    constructor(maxsize) {
        // ˅
        super();
		this.books = new Array(maxsize);
		this.numberOfBooks = 0;
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
		this.books[this.numberOfBooks] = book;
		this.numberOfBooks++;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
