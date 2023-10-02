const express = require("express");
const morgan = require("morgan");

//express app
const app = express();

//register view engine
app.set("view engine", "ejs");

//listen for requsets
app.listen(3001);

// Middleware
// app.use((req, res, next) => {
//   console.log("New Request Made");
//   console.log("host", req.hostname);
//   console.log("path", req.path);
//   console.log("method", req.method);
//   next();
// });

// Morgan Middleware
app.use(morgan("dev"));

// Static Folder setting;
app.use(express.static("public"))

//SAMPLE ROUTE

// app.get("/", (req, res) => {
//   res.send("<p>Home page</p>");
// });

// routes

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  // res.send("<p>Home page</p>");  //sending a html or plane text
  // res.sendFile("./views/sampleHtmlPages/index.html", { root: __dirname }); //sending a html file
  res.render("index", { title: "Home", blogs }); //view engine with ejs
});

app.get("/about", (req, res) => {
  // res.send("<p>About page</p>");
  // res.sendFile("./views/sampleHtmlPages/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

//REDIRECT

// app.get("/about-us", (req, res) => {
//   res.redirect("/about");
// });

app.use("/blogs/create", (req, res) => {
  res.render("create", { title: "Create Blog" });
});

//404 ERROR PAGE

//the position will be always at last otherwise it will check first
//others will be unknown so always use last

app.use((req, res) => {
  // res.sendFile("./views/sampleHtmlPages/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404 " });
});
