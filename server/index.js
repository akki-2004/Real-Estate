const express = require('express');
const mongoose = require('mongoose');
const routes=require("./Routes/routes")
const cors = require('cors');
const dotenv =require("dotenv");
dotenv.config();
const port = 4000;
let app = express();
app.use(express.json());

let corspolicy = {
    origin:"http://localhost:3000"
}
app.use(cors(corspolicy));

app.use((req,res,next) => {
    console.log(" Request received at " + (new Date()));
    next();
});

routes.get('/',(req,res) => {
    console.log(" reached root");
    res.send("Welcome to realgrande back end server");
});

let db = async () => { 
    try{ 
        // console.log(process.env.DBURI);
        await mongoose.connect(process.env.DBURI);
        console.log(" connected to database");
    }
    catch(err) {
        console.log(' error connecting');
    }
}
db();

app.use(routes);


app.get("/test",async (req,res)=>{
    let houses = await housesModel.find({});
        res.send(houses);
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

