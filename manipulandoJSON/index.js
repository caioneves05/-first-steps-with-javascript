const fs = require('fs');

const JSONwrite = (filePath, data, enconding = 'utf-8') => { 
    const promiseCallback = (resolve, reject)=> {
        fs.writeFile(filePath, JSON.stringify(data, null, 2), enconding), (err) =>{
            if(err) {
                reject(err);
                return;
            }
            resolve(true);
        };
    };
    return new Promise(promiseCallback);
};

JSONwrite('./test.json', { name: 'Caio Neves'}).then(console.log).catch(console.error);