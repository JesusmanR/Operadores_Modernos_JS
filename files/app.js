import {
  ejercicio1,
  ejercicio2,
  ejercicio3,
  ejercicio4,
  ejercicio5
} from "./modulos/index.js";

function ejecutarEjercicio(num) {
  let resultado;
  switch(num) {
    case 1: resultado = ejercicio1(); break;
    case 2: resultado = ejercicio2(); break;
    case 3: resultado = ejercicio3(); break;
    case 4: resultado = ejercicio4(); break;
    case 5: resultado = ejercicio5(); break;
    default: resultado = "Ejercicio no válido.";
  }

  console.log("Resultado del ejercicio " + num + ":", resultado);
  document.getElementById("resultado").textContent =
    JSON.stringify(resultado, null, 2);
}

// 🔑 Exponer la función al navegador
window.ejecutarEjercicio = ejecutarEjercicio;
