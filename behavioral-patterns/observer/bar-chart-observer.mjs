// ˅
'use strict';

import { Observer } from './observer.mjs';
import sleep from 'sleep';

// ˄

// Display number values with a bar chart.
export class BarChartObserver extends Observer {
    // ˅
    
    // ˄

    update(numberValue) {
        // ˅
		let barChart = 'Bar chart: ';
		for (let i = 0; i < numberValue.value; i++) {
			barChart += '*';
		}
		console.log(barChart);

        sleep.msleep(100);   // Wait 100ms
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
