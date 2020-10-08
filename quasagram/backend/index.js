const express = require("express");
const app = express();

// Connect to the FirebaseDB
const admin = require("firebase-admin");
const serviceAccount = require("./accountkey");

admin.initializeApp({
    credential: admin.credential.cert
    (serviceAccount)
});
const db = admin.firestore();

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

app.listen(process.env.PORT || port);
