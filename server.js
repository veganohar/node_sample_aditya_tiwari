const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.listen(port,()=>{
    console.log("Your Application is running on http://localhost:"+port);
});
app.get("/",(req,res)=>{
    res.send("Welcome to Node js");
})

app.post("/postMethod",(req,res)=>{
    res.send("Post Method Working");
})

app.put("/putMethod",(req,res)=>{
    res.send("Put Method Working");
})

app.delete("/deleteMethod",(req,res)=>{
    res.send("Delete Method Working");
})

app.post("/dataBody",(req,res)=>{
    res.send(req.body);
});

app.post("/dataParams/:name/:age",(req,res)=>{
    res.send(req.params);
});

app.post("/dataQuery",(req,res)=>{
    res.send(req.query);
})

app.get("/sample",(req,res)=>{
    res.render("sample");
})

app.get("/dynamic",(req,res)=>{
    let obj = {message:"Dynamic Ejs"}
    res.render("dynamic",obj); 
})

app.get("/form",(req,res)=>{
    res.render("form");
})

app.post("/result",(req,res)=>{
    res.render("result",req.body);
})