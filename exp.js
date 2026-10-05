const express = require('express');
const app = express();
const student =[
    {id:1,name: "rahul",branch: "cse"},
    {id:2,name: "nikhil",branch: "IT"}
];
app.get('/students',(req, res) =>{
    res.json(students);
});
app.listen(3000,() => {
    console.log("server is running at http://localhost:3000");
});
