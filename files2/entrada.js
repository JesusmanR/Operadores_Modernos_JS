/**
 * entrada.js — Manejo de la entrada por consola con readline/promises.
 * Módulo nativo de Node: no requiere instalar nada.
 */
import readline from "readline/promises";

let rl = null;

/** Abre la interfaz de lectura una sola vez. */
export function abrirEntrada() {
  if (rl === null) {
    rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }
  return rl;
}

/** Cierra la interfaz al terminar el programa. */
export function cerrarEntrada() {
  if (rl !== null) {
    rl.close();
    rl = null;
  }
}

/**
 * Reemplazo de prompt() para Node.
 * @param {string} mensaje texto que se muestra al usuario
 * @returns {Promise<string>} respuesta escrita
 */
export async function preguntar(mensaje) {
  const interfaz = abrirEntrada();
  const respuesta = await interfaz.question(mensaje + " ");
  return respuesta;
}

/** Imprime un resultado con formato legible. */
export function imprimir(titulo, datos) {
  console.log("\n============================================================");
  console.log(titulo);
  console.log("============================================================");
  console.log(JSON.stringify(datos, null, 2));
  console.log("");
}
