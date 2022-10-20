let buttonToogle = document.getElementById("myToggle")
let body = document.getElementById("body")


console.log(buttonToogle)
console.log(body)


buttonToogle.addEventListener("click", darkMode)


function darkMode(){

    body.classList.toggle("ligth");
    console.log("aqui va codigo para el dark mode")
}