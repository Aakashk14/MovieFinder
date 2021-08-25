
var script = document.createElement('script');
script.src = 'jquery.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


function findmovie(info){
return $.get(`http://localho.st:3000/movie?name=${info.selectionText}`);
}

chrome.contextMenus.create({title:"find this movie",contexts:["selection"]});

chrome.contextMenus.onClicked.addListener((info)=>{
    
    findmovie(info).done((result)=>console.log(result))

}
)