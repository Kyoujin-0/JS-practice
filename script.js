const toggle = document.querySelector(".switch")
const body = document.querySelector("body")
const container = document.querySelector(".container")
const title = document.querySelector("#title")
const subTitle = document.querySelectorAll("#subTitle")
const sectionCard = document.querySelectorAll(".section-card")

let darkMode = true

toggle.addEventListener("click", ()=> {

    if(darkMode) {
        darkMode = false
    body.style.background = "#ecececff"
    container.style.background = "white"
    title.style.color = "black"

    subTitle.forEach(sub => {
        sub.style.color = "black"
    })
    
    sectionCard.forEach(card => {
        card.style.color = "black"
        card.style.background = "#fbfafaff"
    })
    }
    else {
        darkMode = true
    body.style.background = "#000000"
    container.style.background = "rgb(54, 54, 54)"
    title.style.color = "white"

    subTitle.forEach(sub => {
        sub.style.color = "white"
    })
    
    sectionCard.forEach(card => {
        card.style.color = "white"
        card.style.background = "#797979"
    })
    }

})