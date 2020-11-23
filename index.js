require('dotenv').config();
const express = require('express');

const app = express();

const router = require('./Routers');
app.use(express.json());

app.use('/', router);


const PORT = 3020;


app.listen(PORT, () => {
    console.log("server is working");
});