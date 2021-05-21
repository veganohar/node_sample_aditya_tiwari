
exports.postMethod = (req,res)=>{
    res.send("Post Method Working");
}

exports.putMethod = (req,res)=>{
    res.send("Put Method Working");
}

exports.deleteMethod = (req,res)=>{
    res.send("Delete Method Working");
}

exports.dataBody = (req,res)=>{
    res.send(req.body);
}

exports.dataParams = (req,res)=>{
    res.send(req.params);
}

exports.dataQuery = (req,res)=>{
    res.send(req.query);
}


exports.sample = (req,res)=>{
    res.render("sample");
}

exports.dynamic = (req,res)=>{
    let obj = {message:"Dynamic Ejs"}
    res.render("dynamic",obj); 
}
exports.form = (req,res)=>{
    res.render("form");
}

exports.result = (req,res)=>{
    res.render("result",req.body);
}