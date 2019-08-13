const express = require("express")
const db = require('./db');

const app = express()

app.get('/', (req, res) => {
    res.send('hello world')
})

const port = process.env.PORT || 8080;

app.listen(port, function () {
    console.log(`Example app listening on ${port}!`);
});