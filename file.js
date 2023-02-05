//reading files
const fs = require('fs');

fs.readFile('./docs/clog1.txt', (err,data)=>{
    if(err) {
        console.log(err);
    }
    console.log(data.toString());
    })
    

//writing files


//directories



//deleting files