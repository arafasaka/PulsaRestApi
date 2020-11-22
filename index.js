const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const pulsaRoute = require('./routes/pulsa');

const PORT = process.env.PORT || 3000

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use('/api/pulsa', pulsaRoute);

//connect to mongodb atlas
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser:true}).then(() => {
    console.log("Connected to mongodb atlas")
}).catch(error => {
    console.log("something wrong happened", error)
})

//start server
app.listen(PORT, () => {
    console.log("server started at port ", PORT)
});