// ˅
'use strict';

import { Observer } from './observer.mjs';

// ˄

// Display values as a bar chart.
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
        // ˄
    }

    // ˅
    
    // ˄
}

// ˅

// ˄
