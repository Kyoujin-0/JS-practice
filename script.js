const btn = document.querySelector("#btn");
const text = document.querySelector("#text");
const input = document.querySelector("input");

let item1 = document.querySelector("#item1");
let item2 = document.querySelector("#item2");
let item3 = document.querySelector("#item3");
let item4 = document.querySelector("#item4");
let item5 = document.querySelector("#item5");

const items = [

item1 = "Kiyotaka Ayanokoji",
item2 = "Cid Kagenou",
item3 = "Hachiman Hikigaya",
item4 = "Raiden SHogun",
item5 = "Hitori Bochi"

]

input.addEventListener("input", ()=> {
    text.textContent = input.value;

});