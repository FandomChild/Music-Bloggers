import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const URL = "http://localhost:4000";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", async (req, res) => {
  try {
    const result = await axios.get(`${URL}/submit`);
    const randomArtist = result.data[Math.floor(Math.random() * result.data.length)];
    res.render("index.ejs", {
      artist: randomArtist
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts" });
  }
});

app.get("/posts", async (req, res) => {

  try {
    const result = await axios.get(`${URL}/posts`);
    res.render("posts.ejs", {
      blogs: result.data,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts" });
  }
});

app.get("/create", (req, res) => {
    res.render("create.ejs");
});

app.post("/save", async (req, res) => {
  try {
    const result = await axios.post(`${URL}/save`, req.body);
    console.log(result.data);
    res.redirect("/posts");
  } catch (error) {
    res.status(500).json({ message: "Error creating post"});
  }
});

app.get("/edit/:id", async (req, res) => {
  try {
    const result = await axios.get(`${URL}/posts/${req.params.id}`);
    console.log(result.data);
    res.render("create.ejs", {
      post: result.data
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating post" });
  }
});


app.post("/save/:id", async (req, res) => {
  console.log("called");
  try {
    const response = await axios.patch(
      `${URL}/posts/${req.params.id}`,
      req.body
    );
    console.log(response.data);
    res.redirect("/posts");
  } catch (error) {
    res.status(500).json({ message: "Error updating post" });
  }
});

app.get("/delete/:id", async (req, res) => {
  try {
    await axios.delete(`${URL}/delete/${req.params.id}`);
    res.redirect("/posts");
  } catch (error) {
    res.status(500).json({ message: "Error deleting post" });
  }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

