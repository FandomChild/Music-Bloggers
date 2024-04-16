import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const URL = "http://localhost:4000";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// function Create(title, content) {
//   this.titleP = title;
//   this.dateND = new Date();
//   this.dateP = this.dateND.toLocaleString();
//   this.contentP = content;
// }

// function newPost(title, content) {
//   let bpost = new Create(title, content);
//   blog.push(bpost);
//   blog.reverse();
//   titles.push(title);
//   titles.reverse();
// }

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", async (req, res) => {
  try {
    const response = await axios.get(`${URL}/submit`);
    const randomArtist = response.data[Math.floor(Math.random() * artists.length)];
    res.render("index.ejs", {
      artist: randomArtist
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts" });
  }

});

app.get("/posts", async (req, res) => {

  try {
    const response = await axios.get(`${URL}/posts`);
    res.render("posts.ejs", {
      blogs: response.data,
      artist: null
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts" });
  }
});

// app.post("/edit", (req, res) => {
//   res.render("edit.ejs");
//   console.log(req.body)
// });


// app.get("/posts", (req, res) => {
    
//     res.render("posts.ejs", {

//         blogs: blog,
//         titles: titles,
//     });
// });

// app.get("/create", (req, res) => {
//     res.render("create.ejs");
// });

// app.post("/save", (req, res) => {
//   let title = req.body["title"]
//   let content = req.body["content"];
//   newPost(title, content);
//   res.render("posts.ejs", {
//     blogs: blog,
//     titles: titles,
//   });

// });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

