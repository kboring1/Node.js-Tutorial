const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog.txt');
const writeStream = fs.createWriteStream('./docs/blog4.txt');

//readStream.on('data', (chunk) =>{
   // console.log('---NEW CHUNK---');
    //console.log(chunk);
    //writeStream('\n NEW CHUNK');
    //writeStream.write(chunk);

//});

//piping
readStream.pipe(writeStream);
