function Scroller() {
    window.scrollTo(0,200);
    console.log("Scroll : "+window.scrollX + "," +window.scrollY);
}
setTimeout("Scroller()", 2000);