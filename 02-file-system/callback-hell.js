const fs = require('fs');

const fileName = 'my-file.txt';

fs.readFile(fileName, 'utf-8', (error, data)=>{
    if(error) throw error;
    //console.log(data);

    fs.writeFile(fileName, data + '\nCallback Hell',(error) => {
        console.log("it's worked");
    })
})