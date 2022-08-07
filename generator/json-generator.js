const getJn = require('../data_json/process/get-json.js');
const fs = require('fs');


function getJson(fieldsRandom){

    let result = fieldsRandom.split(':')[0];
    let choose = fieldsRandom.split(':')[1];

    let obj = {
        name: function(a){
            return getJn.getName(a);
        },
        age: function(a){
            return Math.floor(Math.random() * a)
        },
        address: function(a){
            return getJn.getAddress(a);
        }
    };

    let objarray = Object.keys(obj);

    for(let i = 0; i < objarray.length; i++){
        if(objarray[i] === result){
            return obj[result](choose);
        }
    }

}

//function to create json.file asynchronus
function jsonCreate(file,amount , ...fields){

    //extract string befor (): symbol) from array field
    let field = fields.map(e => {
        if(e.includes(':')){
            return e.split(':')[0];
        }else{
            return e;
        }
    });

    //create array of object
        
        let data = [];


        let fieldsResult = fields.map(e => {
            return e;
        });

        //fill field json file with value
        for(let i = 0; i < amount; i++){
            let fieldObj = {};
            field.forEach( (e , i) => {
                fieldObj[e] = getJson(fieldsResult[i]);
            });
            data.push(fieldObj);
        };

        let obj = {data};

        //write to json file
        fs.writeFile(`${file}.json`, JSON.stringify(obj), (err) => {
            if(err){
                console.log(err);
            }else{
                console.log('File created');
            }
        });

}

//function to create json.file synchronus
function jsonCreateSync(file,amount , ...fields){

    //extract string befor (): symbol) from array field
    let field = fields.map(e => {
        if(e.includes(':')){
            return e.split(':')[0];
        }else{
            return e;
        }
    });

    //create array of object
        
        let data = [];


        let fieldsResult = fields.map(e => {
            return e;
        });

        //fill field json file with value
        for(let i = 0; i < amount; i++){
            let fieldObj = {};
            field.forEach( (e , i) => {
                fieldObj[e] = getJson(fieldsResult[i]);
            });
            data.push(fieldObj);
        };

        let obj = {data};

        //write to json file
        fs.writeFileSync(`${file}.json`, JSON.stringify(obj));
        console.log('File created');
}

//function to read json.file
function jsonRead(file){
    if(file.includes('.json')){
        fs.readFile(file, 'utf-8' , (err, data) => {
            if(err){
                console.log(err);
            }else{
                console.log(JSON.parse(data));
            }
        });
    }else{
        console.log('File name must end with .json');
    }
}


module.exports = {
    jsonCreate,
    jsonCreateSync,
    jsonRead
}