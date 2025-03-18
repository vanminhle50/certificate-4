const fs = require('node:fs');
const data ="This is a string that we are going in to write to file.";
console.log("Writing to file");
<<<<<<< HEAD

fs.writeFile('output.txt', data,(err)=>{
=======
fs.writeFile('output1.txt', data,(err)=>{
>>>>>>> 108a455390e3718527839808d46633ab69209364
    if (err){
        console.log(err);
    }else{
            console.log("File written successfully");
        }
    }
);
console.log("Reading from file");

fs.readFile("output1.txt",(err,fileText)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("The file content are: ");
    console.log(fileText.toString());
});
