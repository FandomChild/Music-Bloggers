import express from "express";
import bodyParser from "body-parser";

// complete consts and app.use
const app = express();
const port = 4000;
var lastId = 3;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// sends over artist data
app.get("/submit", (req, res) => {
    res.json(artists);
});

// sends over blog data
app.get("/posts", (req, res) => {
    res.json(blog);
});

// receives body info then creates a post, adds to existing API and sends back the created post
app.post("/save", (req, res) => {
    lastId++;
    const post = {
        id: lastId,
        title: req.body.title,
        date: new Date().toDateString(),
        content: req.body.content
    };

    blog.push(post);
    res.json(post);
});

//receives id info and returns the requested post by id
app.get("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const post = blog.find((pst) => pst.id === id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
});

// receives patch request and updates existing post and returns edited post
app.patch("/posts/:id", (req, res) => {
    console.log(req.params.id);
    const id = parseInt(req.params.id);
    const post = blog.find((post) => post.id === id);

    if (!post) return res.status(404).json({error: "Post not found"});
    if (req.body.title) post.title = req.body.title;
    if (req.body.date) post.date = req.body.date;
    if (req.body.content) post.content = req.body.content;

    res.json(post);
});

// receives delete request, deletes post from API and returns a status
app.delete("/delete/:id", (req, res) => {
    const indx = blog.findIndex((post) => post.id === parseInt(req.params.id));
    if (indx > -1) {
      blog.splice(indx, 1);
      res.sendStatus(200);
    } else {
      return res.status(404).json({error: "Post not found"});
    };
});


app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
});

const artists = [
    "5 Seconds of Summer", 
    "Aespa",
    "Bach",
    "Beethoven",
    "BTS",
    "Coldplay",
    "Chopin",
    "Eagles",
    "Kendrick Lamar",
    "Led Zeppelin",
    "Megadeth",
    "Metallica",
    "Mozart",
    "Nas",
    "NF",
    "One Ok Rock",
    "Outkast",
    "Pierce The Veil",
    "REN",
    "Sabrina Carpenter",
    "Slayer",
    "The Pretty Reckless",
    "Tupac",
    "XG"
];

let blog = [
    {
        id: 1,
        title: "5SOS CONCERT!!!!",
        date: "Tue Apr 16 2024",
        content: "I went to the 5SOS show at the Forum this year in September and I was soooooo excited bc it was my first time in the pit!! I was nervous though bc I'm pretty short and I was scared I wasn't going to be able to see anything lol but it was great! I was annoyed at first bc there was this I want to say daughter and mom? in front of me and they were talking shit on other fans the whole time and glaring. Why be there if you're going to be rude the whole time you know. Anyways, I had a blast AND my friend managed to get me a pick that Calum threw!! Im just love them so much that no matter what, I was going to have a great time. I always want to go back lol"
    },
    {
        id: 2,
        title: "BTS PTD LA!!",
        date: "Tue Apr 16 2024",
        content: "PTD LA was my first ever BTS concert! I went to PTD LV too but LA holds a special place since it was my first time seeing them. It was super great and they put on such a wonderful and energetic performance. I cried lol I love them so much and I was so happy I actually got a ticket. Now i'm here waiting for the post military reunion. I love BTS and ARMY!!"
    },
    {
        id: 3,
        title: "BEYONCE!!",
        date: "Tue Apr 16 2024",
        content: "I went to Beyonce's Renaissance birthday concert in LA! I was going bc my friend invited me, but I actually had a fantastic time. It did seem like they had some trouble with the mics during a couple parts, but overall, Beyonce put on a really great concert. Her outfits were soooooo good! I'm glad I went. I should've dressed better though lol"
    }
];