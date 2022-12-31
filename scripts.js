function scrollElement(){
  window.scroll(0, Position(document.getElementById("wai")));
}

function scrollElement2(){
  window.scroll(0, Position(document.getElementById("projets")));
}

function scrollElement3(){
  window.scroll(0, Position(document.getElementById("contact")));
}

function scrollElement0(){
  window.scroll(0, Position(document.getElementById("accueil")));
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

function openNewTab() {
  window.open("https://github.com/Guurido/Front-Insta");
}