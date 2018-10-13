// JavaScript source code



function mouseIn() {
    var body = document.getElementById("fullPost");
    var menu = document.getElementById("banner");
    var barb = document.getElementById("barb");
    menu.style.background = "url(/static/imgs/demag.png)"; 
    barb.style.opacity = 0.3;

}

function mouseOut() {
    var body = document.getElementById("fullPost");
    var menu = document.getElementById("banner");
    var barb = document.getElementById("barb");
    menu.style.background = undefined;
    menu.style.background = "url( )";
    menu.style.backgroundColor = "antiquewhite"
    barb.style.opacity = 0.9;
    


}

