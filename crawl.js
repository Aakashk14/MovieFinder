const got = require('got');
const bot = require('./Bot');
const netflix_chk=new RegExp("https://www.netflix.com/in/title/*");
const prime_chk=new RegExp("https://www.primevideo.com/detail/*");


async function prime(y){
    let temp;
    let st_;
    let prime_result = await got(y)
    prime_result=JSON.parse(prime_result.body);
    for(let i=0;i<5;i++){
     if(prime_chk.test(prime_result["items"][i]["link"])){
         await bot.run(prime_result["items"][i]["link"]).then((status)=>st_=status)
         if(st_){
         temp = `Found on Prime Link - ${prime_result["items"][i]["link"]}`
         return temp;
         }
         
         else{
             continue;
         
     }
    }


 }
 if(!temp){
     temp="Not Found Anywhere"
     return temp;
 }
}


async function findmovie(x,y){
    let result;
    
    let nflix_result=await got(x);
    
   nflix_result= JSON.parse(nflix_result.body);
    for(let i=0;i<5;i++){

    if(netflix_chk.test(nflix_result["items"][i]["link"])){
         result = `Found on Netflix - ${nflix_result["items"][i]["link"]}`
         break;
    }
}
if(!result){
     result=await prime(y);
}
return result;
}

module.exports = {
    findmovie:findmovie,
}