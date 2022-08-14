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
        // Before processing, it checks to make sure the changed subject is the subject held.
        if (changedSubject === this.numberSubject) {
            console.log(`Bar chart: ${`*`.repeat(this.numberSubject.value)}`);
        }
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
