 // Aquí tu código
const lista = document.getElementById("lista")
const agregar = document.getElementById("agregar")

agregar.addEventListener("click", function() {

})

const lugares = prompt (" Consulta un lugar")

const li = document.createElement ("li")
li.textContent = lugares
lista.appendChild(li)