const fs = require('fs');

function getName(url){

    //read from json.file
    let data = fs.readFileSync(url, 'utf-8');
    // let data1 = fs.readFileSync('../json/name.json', 'utf-8');

    //change to json fromat
    const result = JSON.parse(data);
    // console.log(result);

    //get member data
    const resultMember = result.data.map(e => e.member)
    // console.log(resultMember);

    //get random member data
    let resultRandomMember = resultMember[Math.floor(Math.random() * resultMember.length)];

    //get name data
    const resultName = resultRandomMember.map(n => n.name);
    // console.log(resultName);

    //get random name data
    let resultRandomName = resultName[Math.floor(Math.random() * resultName.length)];

    //return final result
    return resultRandomName;

};

module.exports = {
    getName
};
