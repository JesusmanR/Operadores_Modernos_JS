/**
 * ejercicio1.js — Sistema de registro académico
 * crearEstudiante(nombre, ...notas)
 *   a. try...catch valida que todas las notas sean números
 *   b. destructuración separa la primera nota del resto
 *   c. retorna un objeto inmutable (getters sin setter)
 */
import { preguntar } from "./entrada.js";

export function crearEstudiante(nombre, ...notas) {
  try {
    if (!nombre) throw new Error("El nombre es obligatorio.");
    if (notas.length === 0) throw new Error("Debe registrar al menos una nota.");

    // a. Validación con ciclo for (sin métodos de arreglo)
    for (let i = 0; i < notas.length; i++) {
      if (typeof notas[i] !== "number" || isNaN(notas[i])) {
        throw new Error("Todas las notas deben ser números.");
      }
    }

    // b. Destructuración: primera nota separada del resto
    const [primeraNota, ...restoNotas] = notas;

    // Promedio del resto con ciclo for
    let promedioResto = 0;
    if (restoNotas.length > 0) {
      let suma = 0;
      for (let i = 0; i < restoNotas.length; i++) {
        suma += restoNotas[i];
      }
      promedioResto = suma / restoNotas.length;
    }

    const totalNotas = notas.length;

    // c. Inmutabilidad con getters: sin setter no se puede reasignar
    return {
      get nombre() { return nombre; },
      get primeraNota() { return primeraNota; },
      get promedioResto() { return promedioResto; },
      get totalNotas() { return totalNotas; }
    };
  } catch (error) {
    return { error: error.message };
  }
}

export async function ejercicio1() {
  const nombre = await preguntar("Ingrese el nombre del estudiante:");
  const cantidad = parseInt(await preguntar("¿Cuántas notas desea ingresar?"));

  if (isNaN(cantidad) || cantidad <= 0) {
    return { error: "La cantidad de notas debe ser un número mayor a cero." };
  }

  const notas = [];
  for (let i = 0; i < cantidad; i++) {
    const texto = await preguntar(`Ingrese la nota ${i + 1}:`);
    notas[notas.length] = parseFloat(texto);
  }

  return crearEstudiante(nombre, ...notas);
}
