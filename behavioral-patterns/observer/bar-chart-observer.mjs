// ˅
'use strict';

import { Observer } from './observer.mjs';

// ˄

// Display values with a bar chart.
export class BarChartObserver extends Observer {
    // ˅
    
    // ˄

    update(value) {
        // ˅
		var barChart = 'Bar chart: ';
		for (var i = 0; i < value.valueNumber; i++) {
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
