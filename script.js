const toggle = document.querySelector(".switch")
const body = document.querySelector("body")
const container = document.querySelector(".container")
const title = document.querySelector("#title")
const subTitle = document.querySelectorAll("#subTitle")
const sectionCard = document.querySelectorAll(".section-card")

toggle.addEventListener("click", ()=> {
    body.style.background = "#f6f6f6"
    container.style.background = "white"
    title.style.color = "black"
    

})