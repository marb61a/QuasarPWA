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
    res.set('Access-Control-Allow-Origin', '*');

    let posts = [];

    db.collection('users')
        .orderBy('date', 'desc')
        .get()
        .then(snapshot => {
            snapshot.forEach((doc) => {
                // console.log(doc.id, '=>', doc.data());
                posts.push(doc.data());
            });

            res.send(posts);
        });
});

app.listen(process.env.PORT || port);
