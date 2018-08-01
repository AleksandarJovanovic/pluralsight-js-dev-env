// alejov: Avoiding Babel here as it obviously has a problem with importing css files
// https://github.com/webpack/webpack/issues/1754
// import './index.css';
require('./index.css')
// import numeral from 'numeral';
var numeral = require('numeral')

const courseValue = numeral(1000).format('$0,0.00');
console.log(`Number 1000 formatting ${courseValue} done by \'numeral\'`);
