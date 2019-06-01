// Observers observe objects generating a numerical value and display the value.
'use strict';

////////////////////////////////////////////////////
// USAGE:  node --experimental-modules main.mjs   //
////////////////////////////////////////////////////

import { RandomNumber } from './random-number.mjs';
import { DigitObserver } from './digit-observer.mjs';
import { BarChartObserver } from './bar-chart-observer.mjs';

const randomNumber = new RandomNumber();
const digitObserver = new DigitObserver();
const barChartObserver = new BarChartObserver();
randomNumber.addObserver(digitObserver);
randomNumber.addObserver(barChartObserver);
randomNumber.generate();
