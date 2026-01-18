const express=require("express");
const multer=require("multer");//form data format ko read krne ke liye
const uploadFile = require("../service/storage.service");
const router=express.Router();
const songModel=require("../models/song.model")

const upload=multer({storage:multer.memoryStorage()})


router.post('/songs',upload.single('audio'),  async (req,res)=>{

    // console.log(req.body);
    // console.log(req.file);
    const fileData= await uploadFile(req.file)
    
    
    console.log(fileData);

    const song= await songModel.create({
        title:req.body.title,
        artist:req.body.artist,
        audio:fileData.url,
        mood:req.body.mood
    })
    
    
    
    res.json({
        
        message:"song created",
        song
    })
})

router.get('/songs',async (req,res)=>{

    const {mood}=req.query;

    const song =await songModel.find({
        mood:mood
    })

    res.status(200).json({
        message:"song fetched",
        song
    })
    
})

 
module.exports= router;