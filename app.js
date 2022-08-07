const jsongn = require('./generator/json-generator.js');


console.log('start');
jsongn.jsonCreate('data' ,5, 'name:male', 'age:50' ,'address:US');
// jsongn.jsonCreateSync('data' ,5, 'name:female', 'age:50' ,'address:ID');
// jsongn.jsonRead('test.json');
console.log('end');
