const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blogs");
const cors = require("cors");
const { render } = require("ejs");

//express app
const app = express();
app.use(cors());

//connect to
const dbURI =
  "mongodb+srv://netninja:netninja@cluster0.sgcjn2j.mongodb.net/netninja-tutrial?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }) //inside object is for removing warnings
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

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
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); //this cas pass object from the static file and we can use it as request object

//SAMPLE ROUTE

// app.get("/", (req, res) => {
//   res.send("<p>Home page</p>");
// });

//mongoose and mongo sandbox routes

// app.get("/add-blog", (req, res) => {
//   //adding a blog for calling this api
//   const blog = new Blog({
//     title: "new Blog 3",
//     snippet: "About my new blog",
//     body: "More about my new blog",
//   });

//   //save() is the process for storing data in to DB it is async funstion
//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/all-blogs", (req, res) => {
//   //find() is the method for get all Data from that collection
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/single-Blog", (req, res) => {
//     //findById() is the method for get on Data from that collection
//   Blog.findById("651e58f18569560a5149a098")
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
// routes
app.get("/", (req, res) => {
  // const blogs = [
  //   {
  //     title: "Yoshi finds eggs",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     title: "Mario finds stars",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     title: "How to defeat bowser",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  // ];
  // // res.send("<p>Home page</p>");  //sending a html or plane text
  // // res.sendFile("./views/sampleHtmlPages/index.html", { root: __dirname }); //sending a html file
  // res.render("index", { title: "Home", blogs }); //view engine with ejs
  res.redirect("/blogs");
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

//blogs routes
app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => console.log(err));
});

app.post("/blogs", (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => console.log(err));
});

app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("detailes", { blog: result, title: "Blog Detailes" });
    })
    .catch((err) => console.log(err));
});

app.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({redirect:'/blogs'})
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create Blog" });
});

//404 ERROR PAGE

//the position will be always at last otherwise it will check first
//others will be unknown so always use last

app.use((req, res) => {
  // res.sendFile("./views/sampleHtmlPages/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404 " });
});
