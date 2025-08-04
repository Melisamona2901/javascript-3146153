const moneda = document.querySelectorAll(".coin")
const corazon = document.querySelector(".corazon")
const contadorMonedas = document.querySelector("#contador-monedas")
const contadorCorazones = document.querySelector("#contador-corazones")

console.log(contadorMonedas,corazon,contadorMonedas,contadorCorazones)


moneda.forEach(function (moneda) {

    moneda.addEventListener("click", function () { 
    moneda.classList.add("saltar")
    })
})

