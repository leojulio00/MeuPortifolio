
var body = document.querySelector(".body")
var habil = document.querySelector(".habilidades")
var habilCard1 = document.querySelector(".habilidades .card1")
var habilCard2 = document.querySelector(".habilidades .card2")
var portifolio = document.querySelector(".portifolio")
var precos = document.querySelector(".precos")
var aJanela = window.pageYOffset; 
const windowTop = window.screen.height

console.log(windowTop)

/*function mudarCor(){
    if(habil > aJanela){
        alert(aJanela);
    }

    habil.forEach(function(element) {
   if((windowTop) > element.offsetTop){
     element.classList.add(animationClass);
   }else{
     element.classList.remove(animationClass);
   }
   
    
    }
}

addEventListener("scroll", function() {
    if(habil.scrollHeight < aJanela){
        console.log(aJanela);
        habil.style.background = "white"
    }

    mudarCor();
});

*/

//ANIMACAO DO BODY
body.style.background = "#212121"
console.log(windowTop - (windowTop * 0.3) )


window.addEventListener("scroll", () => {
    if(window.pageYOffset > habil.offsetTop - (windowTop - (windowTop * 0.7))){
        //console.log("passou")
        body.style.background = "#fff"
    }else{
        body.style.background = "#212121"
    }
    if(window.pageYOffset > precos.offsetTop - (windowTop - (windowTop * 0.7))){
       //console.log("nao passar")
        body.style.background = "#212121"
    } 
    
   //console.log(window.pageYOffset)
})

/*window.addEventListener("scroll", () => {
    if(window.pageYOffset > precos.offsetTop - (windowTop - (windowTop * 0.7))){
        console.log("passouffffffff")
        //body.style.background = "#212121"
    }else{
        //body.style.background = "#fff"
    }
})*/

//ANIMACAO HABILIDADES

        var fillHtml = document.querySelector(".fillHtml")
        var fillCss = document.querySelector(".fillCss")
        var fillJs = document.querySelector(".fillJs")
        var fillPhp = document.querySelector(".fillPhp")
        var numbHtml = document.querySelector(".nFillHtml");
        var numbCss = document.querySelector(".nFillCss");
        var numbJs = document.querySelector(".nFillJs");
        var numbPhp = document.querySelector(".nFillPhp");
        var counterHtml = 0;
        var counterCss = 0;
        var counterJs = 0;
        var counterPhp = 0;

        var fillCorel = document.querySelector(".fillCorel")
        var fillLogo = document.querySelector(".fillLogo")
        var fillBrand = document.querySelector(".fillBrand")
        var fillLayout = document.querySelector(".fillLayout")
        var numbCorel = document.querySelector(".nFillCorel");
        var numbLogo = document.querySelector(".nFillLogo");
        var numbBrand = document.querySelector(".nFillBrand");
        var numbLayout = document.querySelector(".nFillLayout");
        var counterCorel = 0;
        var counterLogo = 0;
        var counterBrand = 0;
        var counterLayout = 0;

window.addEventListener("scroll", ()=>{

    if(window.pageYOffset > habilCard1.offsetTop - 200 && window.pageYOffset < portifolio.offsetTop + 200){
        

        fillHtml.classList.add("fillHtmlAni")
        fillCss.classList.add("fillCssAni")
        fillJs.classList.add("fillJsAni")
        fillPhp.classList.add("fillPhpAni")
        setInterval( () => {
            if(counterHtml == 88){
                clearInterval;
            }else{
                counterHtml++;
                numbHtml.textContent = counterHtml + "%";
            }
        }, 40)

        setInterval( () => {
            if(counterCss == 70){
                clearInterval;
            }else{
                counterCss++;
                numbCss.textContent = counterCss + "%";
            }
        }, 49)

        setInterval( () => {
            if(counterJs == 38){
                clearInterval;
            }else{
                counterJs++;
                numbJs.textContent = counterJs + "%";
            }
        }, 75)

        setInterval( () => {
            if(counterPhp == 3){
                clearInterval;
            }else{
                counterPhp++;
                numbPhp.textContent = counterPhp + "%";
            }
        }, 100)
    }else{
        //numbHtml.textContent = 88 + "%"
        window.removeEventListener("scroll", () => {

        })
    }
    
})



window.addEventListener("scroll", ()=>{

    if(window.pageYOffset > habilCard2.offsetTop - 200 && window.pageYOffset < portifolio.offsetTop + 200){
        console.log("temn")
        

        fillCorel.classList.add("fillCorelAni")
        fillLogo.classList.add("fillLogoAni")
        fillBrand.classList.add("fillBrandAni")
        fillLayout.classList.add("fillLayoutAni")

        setInterval( () => {
            if(counterCorel == 75){
                clearInterval;
            }else{
                counterCorel++;
                numbCorel.textContent = counterCorel + "%";

                if(counterCorel == 75){
                    clearInterval
                }
            }
        }, 50);

        setInterval( () => {
            if(counterLogo == 87){
                clearInterval;
            }else{
                counterLogo++;
                numbLogo.textContent = counterLogo + "%";
            }
        }, 45);

        setInterval( () => {
            if(counterBrand == 54){
                clearInterval;
            }else{
                counterBrand++;
                numbBrand.textContent = counterBrand + "%";
            }
        }, 64);

        setInterval( () => {
            if(counterLayout == 68){
                clearInterval;
            }else{
                counterLayout++;
                numbLayout.textContent = counterLayout + "%";
            }
        }, 42);
    }
    
})




 

