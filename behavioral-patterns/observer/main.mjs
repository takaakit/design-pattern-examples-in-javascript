/*
Observers observe a Subject object holding a numerical value and display the value.
The display formats are digits and bar charts.
 */
'use strict';

import { NumberSubject } from './number-subject.mjs';
import { DigitObserver } from './digit-observer.mjs';
import { BarChartObserver } from './bar-chart-observer.mjs';

const numberSubject = new NumberSubject();
numberSubject.attach(new DigitObserver(numberSubject));
numberSubject.attach(new BarChartObserver(numberSubject));

(async () => {      // Note: Define an anonymous function with async keyword for using await keyword.
    for (let i = 0; i < 20; i++) {
        numberSubject.value = Math.floor(Math.random() * 50);
        await new Promise(r => setTimeout(r, 200));         // Wait 200ms
    }
})();
