import express from "express";
const app = express();

app.get('/get',(re1, res)=>{
res.send("hello word");
});

app.listen(3000,(err) =>{
    if(err) {
        console.log("err ======= ", err);
    } else {
        console.log("app is running on port 3000");
    }
})