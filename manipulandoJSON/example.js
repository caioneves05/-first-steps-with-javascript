//Utilizando a biblioteca fs do node.
const fs = require('fs');

fs.readFile('./user.json', 'utf-8', (error, data)=>{
    
    if(error){
        console.log(error);
        return
    }
    
    try{
        const user = JSON.parse(data);
        console.log(user);
    }
    catch(e){
        console.log(e);
    };

});



// or



try{
    const data = fs.readFileSync('./user.json', 'utf-8');
    const user = JSON.parse(data);
    
    console.log(user);
}catch(error){
    console.log(error);
};



//Escrevendo em um arquivo JSON

const data2 = {
    "id": 2,
    "name": "Emerson Broga",
    "email": "Deshaun.kshlerin@hotmil,com",
    "phone": "(59)97053-7508",
    "dob": "1985-05-17t03:00:00.00Z",
    "avatar": "https://cdn.fakercloud.com/avatars/robinflayfield_128."
};

        //  Caminho, dados, options       Formatando e sobrescrevendo o arquivo JSON
fs.writeFile('./broga.json', JSON.stringify(data2, ['id', 'name', 'email'], 2), 'utf-8', (error, result)=>{
    if(error){
        console.log(error);
        return;
    }

    console.log(result);
});




// or




try{
    const dataBrogaJson = JSON.stringify(data, null, 2)
    const result = fs.writeFileSync('./broga.json', dataBrogaJson, 'utf-8');

    console.log(result);
}catch(error){
    console.log(error)
};



// Fazendo atualizações em um arquivo JSON



function updateFile(filePath, updateData, encoding = 'utf-8') {

    const dataString = fs.readFileSync(filePath, encoding);
    const dataObjt = JSON.parse(dataString);


    const newDataObject = {...dataObjt, ...updateData};

    const newDataString  = JSON.stringify(newDataObject, null, 2, encoding)
    fs.writeFileSync(filePath, newDataString, encoding);

};

//Parâmetros para serem passados dentro da função.
const filePath = './broga.json'
const fileEncoding = 'utf-8'
//Objeto que irá ser adicionado no filePath.
const data = {
    name: 'Emerson Carvalho',
    programingLanguages: ['js', 'php', 'swift'],
}

updateFile(filePath, data, fileEncoding);




// or



function alterationFile(filePath) {
    const data = fs.readFileSync(filePath, 'utf-8');
    const user = JSON.parse(data);
    user.id = 2
    const userString = JSON.stringify(user, null, 2);
    fs.writeFileSync(filePath, userString, 'utf-8')
};

const file = './broga.json';

alterationFile(file);