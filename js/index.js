let body = document.getElementById("body")

console.log(body)

body.addEventListener("click", darkMode)


function darkMode(){

    body.classList.toggle("ligth");
    console.log("aqui va codigo para el dark mode")
}