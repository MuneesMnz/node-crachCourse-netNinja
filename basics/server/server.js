const http = require("http");
const fs = require("fs");
const lodash = require("lodash");

const server = http.createServer((req, res) => {
  // console.log("Requset made");
  // console.log(req.url, req.method);

  //LODASH
  // --------

  const num = lodash.random(0, 20); //using lodash creating random numbers
  console.log(num);

  const abc = lodash.once(() => {
    console.log("consoling abc function"); //using once its only load once 
  });

  abc()
  abc()
  abc()

  //SET HEADERS CONTENT TYPE
  //-------------------------

  //CONTENT TYPE - TEXT/PLANE :-
  // res.setHeader("Content-Type", "text/plane");
  // res.write("hello mnz"); //plane text will be get in that server

  //CONTENT TYPE - TEXT/HTML :-

  // res.setHeader("Content-Type", "text/html");

  // res.write('<head><link rel="stylesheet" href="#"/></head>');
  // res.write("<p>Hello Mnz</p>");
  // res.write("<p>How Are You</p>"); //writing html elementes in the server
  // res.end(); //end() method for ending server loading after printing elemets
  // res.write("<p>Hello Mnz</p>"); //if we use this element after end() method it will not loaded in server

  //CONTENT TYPE - TEXT/HTML WITH HTML FILE;-

  res.setHeader("Content-Type", "text/html");

  let path = "./views/"; //seting path for file read

  //checking condition of requset url
  switch (req.url) {
    case "/":
      path += "index.html"; //if case equal to req.url path assign to index.html
      res.statusCode = 200; //seting status code success
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301; //seting status code redirect
      res.setHeader("Location", "/about"); //redirecting to /about
      res.end();
      break;
    default:
      path += "404.html"; //if url is not equal to that cases it will set to this path
      res.statusCode = 404; //seting 404 (user or client error) bcoz there is no route
      break;
  }

  //read a html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err); //if error consoling it
      res.end();
    } else {
      console.log("file read successfull"); //if not error the file will get
      res.write(data); //writing data ro the res
      res.end(); //ending responce
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});

// STATUS CODES RANGES

// 100 Ranges - informational responces
// 200 Ranges - Success codes
// 300 Ranges - codes for redirects
// 400 Ranges - user or client error codes
// 500 Ranges - server error codes
