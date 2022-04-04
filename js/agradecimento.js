const formPopup = document.querySelector(".formPopup")
const formBtn = document.querySelector(".btn")


//window.location.href = "index.html"
formPopup.classList.add("popupVisible")

formBtn.addEventListener("click", () => {
    window.location.href = "index.html"
})