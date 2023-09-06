const fs = require("fs");

// console.log(fs);

// READ FILES

// fs.readFile("../docs/blog1.txt", (error, data) => {
//   if (error) {
//     console.log(error);
//   }
//   console.log(data.toString());
// });

// console.log("last line");

//WRITE FILES

// fs.writeFile("../docs/blog1.txt","what are you doing" ,() => {
//  console.log("file was written");
// })
// fs.writeFile("../docs/blog2.txt","this is blog two" ,() => {
//  console.log("file was written");
// })

//DIRECTORIES (FORLDER CREATEING AND REMOVING FOLDER)

// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("Folder created");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder removed");
//   });
// }

//DELETING FILES


// if(fs.existsSync("../docs/deleteme.txt")){
//     fs.unlink("../docs/deleteme.txt",(err)=>{
//         if(err){
//             console.log(err)        }
//     })
//     console.log("file deleted");
// }else{
//     console.log("file not exist");
// }

