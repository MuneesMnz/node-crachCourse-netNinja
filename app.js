const express = require("express");

//express app
const app = express();

//listen for requsets
app.listen(3001);

//SAMPLE ROUTE

// app.get("/", (req, res) => {
//   res.send("<p>Home page</p>");
// });

// routes

app.get("/", (req, res) => {
  // res.send("<p>Home page</p>");  //sending a html or plane text
  res.sendFile("./views/index.html", { root: __dirname }); //sending a html file
});

app.get("/about", (req, res) => {
  // res.send("<p>About page</p>");
  res.sendFile("./views/about.html", { root: __dirname });
});

//REDIRECT

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

//404 ERROR PAGE
//the position will be always at last otherwise it will check first
//others will be unknown so always use last
app.use((req, res) => {
  res.sendFile("./views/404.html", { root: __dirname });
});
