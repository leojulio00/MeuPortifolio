//Menu click 
//window.prompt("qual e o teu nome?")

var menuList = document.getElementById("menu");
var sbtn = document.getElementById("btn");
var cancelar = document.getElementById("cnlc");
var listaMenu = document.querySelectorAll(".animacaoMenu")

//Animacao do click menu
function linkActivo(){
    listaMenu.forEach((item) => item.classList.remove("active"))
    this.classList.add("active")
}
listaMenu.forEach((item) => item.addEventListener("click", linkActivo))


//document.getElementById("btn").innerHTML = "leo";

sbtn.addEventListener("click", () => {
    menuList.style.left = "0px";
    sbtn.style.display = "none";
    cancelar.style.display = "block";
    //cancelar.classList.add("aparecer")
    //sbtn.classList.add("desaparecer")
    //cancelar.classList.add("aparecer")
})

cancelar.addEventListener("click", () => {
    menuList.style.left = "-100%";
    sbtn.style.display = "block";
    cancelar.style.display = "none";
})

//HERO ANIMATION
var apresentacao1 = document.querySelector("#apresentacao1")
var apresentacao2 = document.querySelector("#apresentacao2")
const frases = ["Olá, sou", "Leonildo Júlio!!!"]
let contador = 0
let index = 0
let textoCorrente = ""
let letra = ""

function type(){

    
    if(contador === frases.length){
        contador = 0
    }

    textoCorrente = frases[contador]
    letra = textoCorrente.slice(0, ++index)

    apresentacao1.textContent = letra

    if(letra.length === textoCorrente.length){
        //apresentacao1.textContent = frases
        contador++
        index = 0
    }

    setTimeout(type, 500)


}

type()


