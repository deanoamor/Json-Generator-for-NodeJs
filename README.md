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
Explanation:
- This code works to run the json.file generator asynchronously:
```
// jsongn.jsonCreate('data.json' ,5, 'name:male', 'age:50' ,'address:id');
```

- This code works to run the json.file generator synchronously:
```
jsongn.jsonCreateSync('data.json' ,5, 'name:male', 'age:50' ,'address:ID');
```
- The first parameter contains the name of the file to be created.
- The second parameter contains how much data will be created.
- The next parameter contains the fields to be used.
  - Currently there are only 3 fields available: name, age and address.
  - You can also add options according to the available fields by using `:` . 
 | Field | Optional choice |
 | --- | --- |
 | name | male , female or just write `name` without optional choice to use all genders |
 | age | When you write 50, it means that the age that appears is under 50. |
 | address | Currently there are only 2 country codes available: ID and US. |
