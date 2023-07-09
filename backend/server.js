import Express  from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = Express();
app.use(cors());

const URI = "mongodb+srv://YashGoyal:Yash2003@yashgoyal.8fvnesd.mongodb.net/NumbersKart?retryWrites=true&w=majority";

mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:true
})

const numbercart = new mongoose.schema({
    number:{
        type: String,
        required:true
    },
    cost:Number,
    id:Number
})

const Playlist = new mongoose.model("Playlist",numbercart);

const sampleData = new Playlist({
    number:"9461696428",
    cost:3000,
    id:0
})

sampleData.save();
