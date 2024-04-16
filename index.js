import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 4000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/submit", (req, res) => {
    res.json(artists);
});

app.get("/posts", (req, res) => {
    res.json(posts);
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

let posts = [
    {
        id: 1,
        title: "5SOS CONCERT!!!!",
        date: "April 16th, 2024",
        content: "I went to the 5SOS show at the Forum this year in September and I was soooooo excited bc it was my first time in the pit!! I was nervous though bc I'm pretty short and I was scared I wasn't going to be able to see anything lol but it was great! I was annoyed at first bc there was this I want to say daughter and mom? in front of me and they were talking shit on other fans the whole time and glaring. Why be there if you're going to be rude the whole time you know. Anyways, I had a blast AND my friend managed to get me a pick that Calum threw!! Im just love them so much that no matter what, I was going to have a great time. I always want to go back lol"
    },
    {
        id: 2,
        title: "BTS PTD LA!!",
        date: "April 16th, 2024",
        content: "PTD LA was my first ever BTS concert! I went to PTD LV too but LA holds a special place since it was my first time seeing them. It was super great and they put on such a wonderful and energetic performance. I cried lol I love them so much and I was so happy I actually got a ticket. Now i'm here waiting for the post military reunion. I love BTS and ARMY!!"
    },
    {
        id: 3,
        title: "BEYONCE!!",
        date: "April 16th, 2024",
        content: "I went to Beyonce's Renaissance birthday concert in LA! I was going bc my friend invited me, but I actually had a fantastic time. It did seem like they had some trouble with the mics during a couple parts, but overall, Beyonce put on a really great concert. Her outfits were soooooo good! I'm glad I went. I should've dressed better though lol"
    }
];