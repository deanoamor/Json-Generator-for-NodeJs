const fs = require('fs');

function getName(url){

    //read from json.file
    let data = fs.readFileSync(url, 'utf-8');
    // let data1 = fs.readFileSync('../json/name.json', 'utf-8');

    //change to json fromat
    const result = JSON.parse(data);

    //get member data
    const resultMember = result.data.map(e => e.member)

    //get random member data
    let resultRandomMember = resultMember[Math.floor(Math.random() * resultMember.length)];

    //get name data
    const resultName = resultRandomMember.map(n => n.name);

    //get random name data
    let resultRandomName = resultName[Math.floor(Math.random() * resultName.length)];

    //return final result
    return resultRandomName;

};

function getAddress(url){

   //read from json.file
   let data = fs.readFileSync(url, 'utf-8');
   // let data1 = fs.readFileSync('../json/name.json', 'utf-8');

   //change to json fromat
   const result = JSON.parse(data);

   //get road data
   const resultRoad = result.data.map(e => e.road)

   //get random road data
   let resultRandomRoad = resultRoad[Math.floor(Math.random() * resultRoad.length)];

   //get addressdata
   const resultAddress = resultRandomRoad.map(n => n.address);

   //get random address data
   let resultRandomAddress = resultAddress[Math.floor(Math.random() * resultAddress.length)];

   //return final result
   return resultRandomAddress;
};


module.exports = {
    getName,
    getAddress
};
