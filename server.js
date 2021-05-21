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

require("./app/routes/test.route")(app);