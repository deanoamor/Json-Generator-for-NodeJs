const jsongn = require('./json-generator.js');


console.log('start');
// jsongn.jsonCreate('data.json' ,5, 'name:male', 'age:50' ,'address:id');
jsongn.jsonCreateSync('data.json' ,5, 'name:male', 'age:50' ,'address:ID');
// jsongn.jsonRead('test.json');
console.log('end');
