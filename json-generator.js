const getJn = require('./data_json/process/get-json.js');
const fs = require('fs');

let FuncGetJson = {};

function getJson(){
    FuncGetJson = {
        name: getJn.getName('data_json/json/name.json'),
        age: Math.floor(Math.random() * 30),
        address: 'alamat'
    }
}

//function to create json.file
function jsonCreate(file,amount , ...fields){

    //extract string befor (): symbol) from array field
    let field = fields.map(e => {
        if(e.includes(':')){
            return e.split(':')[0];
        }else{
            return e;
        }
    });

    //extract string after (: symbol) from array field
    let value = fields.map(e => {
        if(e.includes(':')){
            return e.split(':')[1];
        }else{
            return 'none';
        }
    });

    //create array of object
    if(file.includes('.json')){
        
        let fieldArr = [];

        //fill field json file with value
        for(let i = 0; i < amount; i++){
            getJson();
            let fieldObj = {};
            field.forEach( (e) => fieldObj[e] = FuncGetJson[e]);
            fieldArr.push(fieldObj);
        };

        //write to json file
        fs.writeFile(file, JSON.stringify(fieldArr), (err) => {
            if(err){
                console.log(err);
            }else{
                console.log('File created');
            }
        });
    }else{
        console.log('File name must end with .json');
    }
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
    jsonRead
}