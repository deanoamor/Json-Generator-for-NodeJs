const jsongn = require('./json-generator.js');


console.log('start');
jsongn.jsonCreate('test.json' ,5, 'name', 'age' ,'address');
// jsongn.jsonRead('test.json');
console.log('end');

