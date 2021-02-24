// ˅
'use strict';

import { PaintingCommand } from './painting-command.mjs';
import { HistoryCommand } from './history-command.mjs';
import { PaintingCanvas } from './painting-canvas.mjs';

// ˄

export class AppMain {
    // ˅
    
    // ˄

    isDragging;

    // Painting history
    history;

    paintingCanvas;

    canvas;

    undoButton;

    clearButton;

    constructor() {
        // ˅
        this.canvas = document.getElementById('canvas');
        this.undoButton = document.getElementById('undoButton')
        this.clearButton = document.getElementById('clearButton')
        this.history = new HistoryCommand();
        this.paintingCanvas = new PaintingCanvas(this.canvas.getContext('2d'), this.canvas.width, this.canvas.height);

        this.canvas.addEventListener('mousedown', () => this.onMouseDown());
        this.canvas.addEventListener('mousemove', (event) => this.onMouseMove(event));
        this.canvas.addEventListener('mouseup', () => this.onMouseUp());
        this.undoButton.addEventListener('click', () => this.onUndoButtonClick());
        this.clearButton.addEventListener('click', () => this.onClearButtonClick());

        this.paintingCanvas.clear();
        // ˄
    }

    onMouseDown() {
        // ˅
        this.isDragging = true;
        // ˄
    }

    onMouseMove(event) {
        // ˅
        if(this.isDragging){
            const paintingPosX = event.clientX - this.canvas.getBoundingClientRect().left;
            const paintingPosY = event.clientY - this.canvas.getBoundingClientRect().top ;
            const paintingCommand = new PaintingCommand(this.paintingCanvas, paintingPosX, paintingPosY);
            this.history.add(paintingCommand);
            paintingCommand.execute();
        }
        // ˄
    }

    onMouseUp() {
        // ˅
        this.isDragging = false;
        // ˄
    }

    onUndoButtonClick() {
        // ˅
        this.paintingCanvas.clear();
        this.history.undo();
        this.history.execute();
        // ˄
    }

    onClearButtonClick() {
        // ˅
        this.paintingCanvas.clear();
        this.history.clear();
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
