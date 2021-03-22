// ˅
'use strict';

import { Observer } from './observer.mjs';

// ˄

// Display values as a bar chart.
export class BarChartObserver extends Observer {
    // ˅
    
    // ˄

    numberSubject;

    constructor(numberSubject) {
        // ˅
        super();
        this.numberSubject = numberSubject;
        // ˄
    }

    update(changedSubject) {
        // ˅
        if (changedSubject === this.numberSubject) {
            let barChart = 'Bar chart: ';
            for (let i = 0; i < this.numberSubject.value; i++) {
                barChart += '*';
            }
            console.log(barChart);
        }
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
