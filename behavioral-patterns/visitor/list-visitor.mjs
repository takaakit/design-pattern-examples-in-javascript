// ˅
'use strict';

import { Visitor } from './visitor.mjs';

// ˄

export class ListVisitor extends Visitor {
    // ˅
    
    // ˄

    // Currently visited directory
    currentDirectory;

    constructor() {
        // ˅
        super();
        this.currentDirectory = '';
        // ˄
    }

    // Visit a file
    visitFile(file) {
        // ˅
        console.log(this.currentDirectory + '/' + file.toString());
        // ˄
    }

    // Visit a directory
    visitDirectory(directory) {
        // ˅
        console.log(this.currentDirectory + '/' + directory.toString());
        const visitedDirectory = this.currentDirectory;
        this.currentDirectory = this.currentDirectory + '/' + directory.name;

        const iterator = directory.iterator();
        let result = iterator.next();
        while(!result.done) {
            result.value.accept(this);
            result = iterator.next();
        }

        this.currentDirectory = visitedDirectory;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
