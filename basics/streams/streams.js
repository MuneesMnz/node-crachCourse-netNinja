//STREAMING

const fs = require("fs");

const readStrean = fs.createReadStream("./docs.txt", { encoding: "utf8" });
const writeStream = fs.createWriteStream("./docs2.txt");

// readStrean.on("data", (chunk) => {
//   console.log("-------- NEW CHUNK --------------");
//   console.log(chunk);
//   writeStream.write("\n\nNEW CHUNK\n\n")
//   writeStream.write(chunk)
// });

//PIPING
readStrean.pipe(writeStream); //this is also work like above code
