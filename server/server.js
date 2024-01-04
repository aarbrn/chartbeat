const path = require('path');
const express = require('express');
const router = require('./router/router.js');
const controller = require('./controllers/controller.js');
//forgot to npm i cors, just did now
const cors = require('cors');
const mongoose = require('mongoose');
//npm i cookie-parser- EW
const cookieParser = require('cookie-parser');
const PORT = 3000;

const MONGO_URI = 'mongodb+srv://tanman1811:feZKKXYNZECDcl85@cluster0.109d8vh.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Database connected..')
    })

const app = express();
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/api', router);

app.use('*', (req,res) => {
    res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send({ error: err });
});


app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });
  
  module.exports = app;
