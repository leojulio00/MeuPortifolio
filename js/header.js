//Menu click 
//window.prompt("qual e o teu nome?")

var navBar = document.querySelector(".navBar")
var menuList = document.getElementById("menu");
var sbtn = document.getElementById("btn");
var cancelar = document.getElementById("cnlc");
var listaMenu = document.querySelectorAll(".animacaoMenu")
var input = document.querySelector("#menu-hamburguer")
var menuHamburger = document.querySelector(".hamburger")
var logo = document.querySelector(".logoleo")
var habil = document.querySelector(".habilidades")
var precos = document.querySelector(".precos")

//Animacao do click menu
function linkActivo(){
    listaMenu.forEach((item) => item.classList.remove("active"))
    this.classList.add("active")
}
listaMenu.forEach((item) => item.addEventListener("click", linkActivo))


//document.getElementById("btn").innerHTML = "leo";

/*sbtn.addEventListener("click", () => {
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
})*/

input.addEventListener("click", () => {
    if(input.checked){
        menuList.style.left = "0px";
    }else{
        menuList.style.left = "-100%";
    }
})

window.addEventListener("scroll", () => {
     
    if(window.pageYOffset > 100 && window.pageYOffset < habil.offsetTop - 60){
        navBar.style.background = "#fff"
        for (let index = 0; index < listaMenu.length; index++) {
            const element = listaMenu[index];
            element.style.color = "#181818"
            if(window.screen.width < 840){
                
                /*for (let index = 0; index < listaMenu.length; index++) {
                    const element = listaMenu[index];
                    element.style.color = "#fff"
                    
                } */
                element.style.color = "#fff"
            }
        }
        
        
        logo.src = "img/logo.png"
        
    }else{
        navBar.style.background = "#181818"
        for (let index = 0; index < listaMenu.length; index++) {
            const element = listaMenu[index];
            element.style.color = "#fff"
        } 
        logo.src = "img/logo00.png"
    }

    if(window.pageYOffset > precos.offsetTop - 80){
        navBar.style.background = "#efefef"
        for (let index = 0; index < listaMenu.length; index++) {
            const element = listaMenu[index];
            element.style.color = "#181818"

            if(window.screen.width < 840){
                /*for (let index = 0; index < listaMenu.length; index++) {
                    const element = listaMenu[index];
                    element.style.color = "#fff"
                    
                } */
                element.style.color = "#fff"
            }
        } 
        logo.src = "img/logo.png"
    }
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




