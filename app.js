const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

var upload = multer({dest:'upload/'});

var app = module.exports = express();
app.use(bodyParser());
app.use(cors());

app.get('/',(req,res,next)=>{
    res.sendFile(__dirname +"/index.html");
})

app.post('/upload',upload.single('file'),(req,res,next)=>{
    return res.json(req.file);
});
app.listen(4000,(console.log("It's Working")));