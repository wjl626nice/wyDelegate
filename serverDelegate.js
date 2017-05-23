var express = require('express');
var http = require('http');
var cors = require('cors');

var app = express();

app.use(cors());
app.get('/wy',function (req,res) {
    console.log(req.query);
    http.get(req.query.myUrl,function (wyRes) {
       var wyData = '';
       wyRes.on('data',function (dataChunk) {
           wyData += dataChunk;
       });
       wyRes.on('end',function () {
          res.end(wyData);
       });
    });
});

app.listen(3000,function (err) {
   if (!err){
       console.log('server is running at port 3000');
   }
});
