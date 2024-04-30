const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000
const router = require('./router/router');
const connectWithDB = require('./config/db')



connectWithDB();
app.use(express.json());

app.listen(PORT, ()=>{
    console.log("listening an port " + PORT);
})

app.use("/api/v1",router);



