const express = require('express');
// const mongoose = require('mongoose');
require('./config/database')

const personRouter = require('./src/router/personRouter')


const app = express();

//midlleware
app.use(express.json())

app.set('view engine', 'ejs'); // EJS

app.use('/', personRouter)

app.listen(3000, () => {
    console.log('listening on port 3000')
})

// app.get('/', (req, res) => { res.render('home')})