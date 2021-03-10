/*
The subject is a factory to make credit cards. The Factory defines how to create an credit card,
but the actual credit card is created by the CreditCardFactory.
The "createProduct()" is called a Factory Method, and it is responsible for manufacturing an object.
 */
'use strict';

import { CreditCardFactory } from './credit-card/credit-card-factory.mjs';

const factory = new CreditCardFactory();

const jacksonCard = factory.create('Jackson');
jacksonCard.use();

const sophiaCard = factory.create('Sophia');
sophiaCard.use();

const oliviaCard = factory.create('Olivia');
oliviaCard.use();
