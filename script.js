// import math from 'mathjs';
// import { math } from "mathjs";
import { suma } from "./app.js";

//funcion principal del juego piedra papel o tijera con math
function juego(opcionJugador, opcionMaquina) {
  if (opcionJugador === opcionMaquina) {
    return "Empate";
  } else if (
    (opcionJugador === "piedra" && opcionMaquina === "tijera") ||
    (opcionJugador === "papel" && opcionMaquina === "piedra") ||
    (opcionJugador === "tijera" && opcionMaquina === "papel")
  ) {
    return "Gana el jugador";
  } else {
    return "Gana la maquina";
  }
}
//funcion para generar un numero aleatorio
function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//funcion para generar una opcion aleatoria
function generarOpcionAleatoria() {
  var opciones = ["piedra", "papel", "tijera"];
  var posicion = generarNumeroAleatorio(0, 2);
  return opciones[posicion];
}
//funcion para mostrar el resultado del juego
function mostrarResultado(resultado) {
  var mensaje = "";
  if (resultado === "Gana el jugador") {
    mensaje = "Gana el jugador";
  } else if (resultado === "Gana la maquina") {
    mensaje = "Gana la maquina";
  } else {
    mensaje = "Empate";
  }
  return mensaje;
}

//ejecutar funciones
//que la opcion del jugador la pueda seleccionar con un promt
var opcionJugador = prompt("Elige piedra, papel o tijera");
var opcionMaquina = generarOpcionAleatoria();
var resultado = juego(opcionJugador, opcionMaquina);
var resultado = mostrarResultado(resultado);
console.log("Jugador: " + opcionJugador);
console.log("Maquina: " + opcionMaquina);
console.log("Resultado: " + resultado);
