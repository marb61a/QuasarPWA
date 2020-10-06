const express = require("express");
const app = express();
const port = 3000;

// Middleware
app.get('/posts', (req, res) => {
    let posts = [
        {
            caption: 'Golden Gate Bridge',
            location: 'San Francisco'
        },
        {
            caption: 'Kilmainham Gaol',
            location: 'Dublin'
        }
    ]

    res.send(posts);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
