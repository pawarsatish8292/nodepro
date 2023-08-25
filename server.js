import express from "express";
import mysql from "mysql";
const app = express();

const db = mysql.createConnection({
    host:"mydb.ckutuo8p605w.ap-south-1.rds.amazonaws.com",
    port:"3306",
    user:"admin",
    password:"FitWay_123",
    database:"sampledb"
})
db.connect((err)=>{
    if(err){
        console.log("err ===== ", err);
    } else {
        console.log("data base connected");
    }
})

app.get('/get',(re1, res)=>{
res.send("hello word");
});

app.listen(3000,"0.0.0.0",(err) =>{
    if(err) {
        console.log("err ======= ", err);
    } else {
        console.log("app is running on port 3000");
    }
})