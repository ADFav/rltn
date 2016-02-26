var pics = [
  {path:"img/a.png", title:"Letter A", notes : "", x:0, y: 0,left:-1,right:1,up:-1,down:-1},
  {path:"img/b.jpg", title:"Letter B", notes : "", x:1, y: 0,left:0,right:3,up:-1,down:2},
  {path:"img/c.png", title:"Letter C", notes : "", x:1, y: 1,left:-1,right:4,up:1,down:6},
  {path:"img/d.jpg", title:"Letter D", notes : "", x:2, y: 0,left:1,right:-1,up:-1,down:4},
  {path:"img/e.png", title:"Letter E", notes : "", x:2, y: 1,left:2,right:-1,up:3,down:5},
  {path:"img/f.jpg", title:"Letter F", notes : "", x:2, y: 2,left:6,right:-1,up:4,down:-1},
  {path:"img/g.jpg", title:"Letter G", notes : "", x:1, y: 2,left:7,right:5,up:2,down:-1},
  {path:"img/h.png", title:"Letter H", notes : "Oh hey, look, a note!", x:0, y: 2,left:-1,right:6,up:-1,down:-1}]

var initializeImages = function(){
  var makeAllDivs = "";
  for(var i = 0; i <=2; i++){
    for(var j = 0; j <= 2; j++){
      makeAllDivs += "<div class = 'c" + i + " r" + j + "'></div>"
    }
  }
  $(".pictureHolder").html(makeAllDivs);
  
  pics.forEach(function(elem,index,arr){
    var identifier = ".r"+elem.x+".c"+elem.y;
    $(identifier).html("<img src='"+elem.path+"'>");
  });
};

$(document).ready(function(){
  initializeImages();
})