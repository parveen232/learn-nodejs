const fs = require("fs");

fs.mkdir('fruits', {recursive: true}, (err) => {
    console.log("In the callback")
    if(err) throw err;
})
console.log("i come after mkdir in file")