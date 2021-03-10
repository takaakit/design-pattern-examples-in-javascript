/*
Observers observe objects generating a numerical value and display the value.
The display formats are digits and bar charts.
 */
'use strict';

import { RandomNumberValue } from './random-number-value.mjs';
import { DigitObserver } from './digit-observer.mjs';
import { BarChartObserver } from './bar-chart-observer.mjs';

const randomNumberValue = new RandomNumberValue();
randomNumberValue.addObserver(new DigitObserver());
randomNumberValue.addObserver(new BarChartObserver());
randomNumberValue.generate();
