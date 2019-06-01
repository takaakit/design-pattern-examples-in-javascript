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
        for (let element of directory.elements) {
            element.accept(this);
        }
        this.currentDirectory = visitedDirectory;
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
