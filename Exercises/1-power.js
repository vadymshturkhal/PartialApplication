'use strict';

const power = Math.pow.bind(null);

const square = num => power.bind(null)(num, 2);

const cube = num => power.bind(null)(num, 3);

module.exports = { power, square, cube };
