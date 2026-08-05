/**
 * app.js — Punto de entrada de la aplicación
 * Ejecutar con:  node app.js
 *
 * Muestra un menú por consola y ejecuta el ejercicio seleccionado.
 * Si la opción no es válida, vuelve a solicitarla sin reiniciar el programa.
 */
import {
  preguntar,
  imprimir,
  cerrarEntrada,
  ejercicio1,
  ejercicio2,
  ejercicio3,
  ejercicio4,
  ejercicio5,
} from "./modulos/index.js";

const MENU =
  "\n============================================================\n" +
  "        OPERADORES MODERNOS DE JAVASCRIPT\n" +
  "============================================================\n" +
  "  1. Sistema de registro académico\n" +
  "  2. Fusión de catálogos digitales\n" +
  "  3. Procesamiento de compras\n" +
  "  4. Informe de estadísticas deportivas\n" +
  "  5. Motor de configuración avanzada\n" +
  "  0. Salir\n" +
  "============================================================\n" +
  "Digite el número del ejercicio que desea ejecutar:";

async function main() {
  let ejecutando = true;

  while (ejecutando) {
    const opcion = await preguntar(MENU);
    const eleccion = opcion.trim();

    switch (eleccion) {
      case "1":
        imprimir("EJERCICIO 1 — Sistema de registro académico", await ejercicio1());
        break;

      case "2":
        imprimir("EJERCICIO 2 — Fusión de catálogos digitales", await ejercicio2());
        break;

      case "3":
        imprimir("EJERCICIO 3 — Procesamiento de compras", await ejercicio3());
        break;

      case "4":
        imprimir("EJERCICIO 4 — Informe de estadísticas deportivas", await ejercicio4());
        break;

      case "5":
        imprimir("EJERCICIO 5 — Motor de configuración avanzada", await ejercicio5());
        break;

      case "0":
        console.log("\nPrograma finalizado. Gracias por usar la aplicación.\n");
        ejecutando = false;
        break;

      default:
        // Opción inválida: el ciclo vuelve a mostrar el menú
        console.log(`\n>> La opción "${eleccion}" no es válida. Digite un número entre 0 y 5.`);
        break;
    }
  }

  cerrarEntrada();
}

main();
