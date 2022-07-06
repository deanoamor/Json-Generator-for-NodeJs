# Json.file-Generator-for-NodeJs

## About Project
A project whose purpose is to create a json.file automatically and instantly.

## How To Use It
1. Make sure your computer can run NodeJs.
2. Open app.js
3. You will see this code
```

const jsongn = require('./json-generator.js');


console.log('start');
// jsongn.jsonCreate('data.json' ,5, 'name:male', 'age:50' ,'address:id');
jsongn.jsonCreateSync('data.json' ,5, 'name:male', 'age:50' ,'address:ID');
// jsongn.jsonRead('test.json');
console.log('end');
```
