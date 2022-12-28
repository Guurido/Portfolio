function scrollElement(){
  window.scroll(0, Position(document.getElementById("wai")));
}

function Position(obj){
  var currenttop = -150;
  if (obj.offsetParent){
   do{
    currenttop += obj.offsetTop;
   }while ((obj = obj.offsetParent));
   return [currenttop];
  }
}

function scrollElement2(){
  window.scroll(0, Position(document.getElementById("projets")));
}

function Position(obj){
  var currenttop = -150;
  if (obj.offsetParent){
   do{
    currenttop += obj.offsetTop;
   }while ((obj = obj.offsetParent));
   return [currenttop];
  }
}