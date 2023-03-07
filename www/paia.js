function calcular() {

var marca, model, km, qt, consumo, msg

marca = document.getElementById("marca").value
model = document.getElementById("model").value
km = document.getElementById("km").value
qt = document.getElementById("qt").value


consumo = km/qt
msg = "Seu" + " " + marca + " " + model + " fez " + consumo
document.getElementById("h1").innerHTML = msg

alert(msg)

}