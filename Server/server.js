const express = require('express');
require('dotenv').config()
const mongoose = require('mongoose');
const Grid = require("gridfs-stream");
const cors = require('cors');



const app = express();

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }catch(err){
        console.log(`ERROR: ${err.message}`);
        process.exit(1);
    }
}
let gfs
connectDB();
const conn = mongoose.connection;
conn.once("open", function () {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("images");
});

app.use(cors());
app.use(express.json());

app.use ('/blog', require('./routes/blogRoutes'));

app.listen(3000, ()=> console.log('App running ar PORT 3000!'));
