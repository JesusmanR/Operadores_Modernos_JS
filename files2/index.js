/**
 * index.js — ARCHIVO BARRIL (barrel file)
 * Centraliza las exportaciones de la carpeta modulos.
 *
 * Sin barril:
 *   import { ejercicio1 } from "./modulos/ejercicio1.js";
 *   import { ejercicio2 } from "./modulos/ejercicio2.js";
 *
 * Con barril:
 *   import { ejercicio1, ejercicio2 } from "./modulos/index.js";
 */

// Utilidades de entrada y salida por consola
export { preguntar, imprimir, abrirEntrada, cerrarEntrada } from "./entrada.js";

// Ejercicio 1 — Sistema de registro académico
export { ejercicio1, crearEstudiante } from "./ejercicio1.js";

// Ejercicio 2 — Fusión de catálogos digitales
export { ejercicio2, fusionarCatalogos } from "./ejercicio2.js";

// Ejercicio 3 — Procesamiento de compras
export { ejercicio3, procesarCompra } from "./ejercicio3.js";

// Ejercicio 4 — Informe de estadísticas deportivas
export { ejercicio4, estadisticas } from "./ejercicio4.js";

// Ejercicio 5 — Motor de configuración avanzada
export { ejercicio5, configFinal } from "./ejercicio5.js";
