const express=require('express');
const crawl = require('./crawl')

const app = express();


app.get("/movie",async(req,res)=>{
    var show;

var url1=`https://www.googleapis.com/customsearch/v1?key=AIzaSyAzO2Ompb4_fhDDFUDqK-DdEkzSoB-NmB0&cx=3dd96ab6917ecb329&gl=in&num=5&q=${req.query.name}%20netflix`

var url2=`https://www.googleapis.com/customsearch/v1?key=AIzaSyAzO2Ompb4_fhDDFUDqK-DdEkzSoB-NmB0&cx=3dd96ab6917ecb329&gl=in&num=5&q=${req.query.name}%20prime`


//please use your own google api , its free api (100 queries/day just for testing purpose)
await crawl.findmovie(url1,url2).then((value)=>(show = value));
res.send(show);

})

var host="0.0.0.0";

app.listen(3000,host);
