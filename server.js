const express=require("express");
const app=express();

app.get("/",(req,res)=>{
res.send("Hello this !!");
})

app.listen(4000,()=>{
    console.log("Listening");
})

//ci/cd pipeline
//Base image ==node alphine 
//tags== version
//pull the images from docker hub 

//Comand 

//FROM BASEIMAGE

//app where we running

//run ==build something
//run a file ==CMD (entry pt )
