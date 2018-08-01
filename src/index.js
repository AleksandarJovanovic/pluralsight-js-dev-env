import numeral from 'numeral'
// var numeral = require('numeral')

const courseValue = numeral(1000).format('$0,0.00');
console.log(`Number 1000 formatting ${courseValue} done by \'numeral\'`);
