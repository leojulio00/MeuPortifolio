//Menu click 
//window.prompt("qual e o teu nome?")

var menuList = document.getElementById("menu");
var sbtn = document.getElementById("btn");
var cancelar = document.getElementById("cnlc");



//document.getElementById("btn").innerHTML = "leo";

sbtn.addEventListener("click", () => {
    menuList.style.left = "0px";
    sbtn.style.display = "none";
    cancelar.style.display = "block";
})

cancelar.addEventListener("click", () => {
    menuList.style.left = "-100%";
    sbtn.style.display = "block";
    cancelar.style.display = "none";
})
