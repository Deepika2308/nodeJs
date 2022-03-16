// const os = require("os");
// console.log("Remaining RAM space ",os.freemem()/Math.pow(1024,3));
// console.log("Total RAM space ",os.totalmem()/Math.pow(1024,3));
// console.log("OS version ",os.version());
// console.log("Processor ",os.cpus());

// const fs= require("fs");

// let data = "This is a sample text file";
// fs.writeFile("./sampleText.txt",data,err=>{
//     console.log("Completed writing!!");
// })

// const [,,num] = process.argv;
// const fs= require("fs");

// let data = "Live more worry less!!";
// for(let i=1;i<=num;i++){
//     filesName =`text-${i}.html`;
//     fs.writeFile("./htmlFiles/"+filesName,data,err=>{
//         console.log("Completed writing!!", i);
//     });
// }

// const fs=require("fs");
// fs.readFile("./htmlFiles/textr-1.html","utf-8",(err,contentOfFile) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log(contentOfFile);
// });


// const fs=require("fs");
// const quote="This is append sample";
// fs.appendFile("./htmlFiles/text-1.html","\n"+quote,(err) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log("Append completed!!");
// });


const fs=require("fs");

fs.readdir("./htmlFiles",(err,files)=>{
    for(let i=0;i<10;i++){
    fs.unlink("./htmlFiles/"+files[i],(err)=>{
        console.log("deleted all files!!");
    })
}
});
