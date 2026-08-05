/**
 * ejercicio2.js — Fusión de catálogos digitales
 * fusionarCatalogos(a, b)
 *   a. try...catch valida que ambos parámetros sean arreglos
 *   b. spread los fusiona sin modificar los originales
 *   c. retorna un catálogo nuevo ordenado por precio ascendente
 */
import { preguntar } from "./entrada.js";

export function fusionarCatalogos(a, b) {
  try {
    // a. Validación con instanceof (no es método de arreglo)
    if (!(a instanceof Array) || !(b instanceof Array)) {
      throw new Error("Ambos parámetros deben ser arreglos.");
    }

    // b. Spread: arreglo nuevo, los originales quedan intactos
    const fusion = [...a, ...b];

    for (let i = 0; i < fusion.length; i++) {
      if (typeof fusion[i].precio !== "number" || isNaN(fusion[i].precio)) {
        throw new Error(`El curso en la posición ${i} no tiene un precio válido.`);
      }
    }

    // Copia manual (reemplaza slice)
    const ordenado = [];
    for (let i = 0; i < fusion.length; i++) {
      ordenado[i] = fusion[i];
    }

    // c. Ordenamiento burbuja ascendente (reemplaza sort)
    for (let i = 0; i < ordenado.length - 1; i++) {
      for (let j = 0; j < ordenado.length - 1 - i; j++) {
        if (ordenado[j].precio > ordenado[j + 1].precio) {
          const temporal = ordenado[j];
          ordenado[j] = ordenado[j + 1];
          ordenado[j + 1] = temporal;
        }
      }
    }

    // Cada curso se devuelve inmutable
    const catalogo = [];
    for (let i = 0; i < ordenado.length; i++) {
      const { id, nombre, precio } = ordenado[i];
      catalogo[i] = {
        get id() { return id; },
        get nombre() { return nombre; },
        get precio() { return precio; }
      };
    }

    return catalogo;
  } catch (error) {
    return { error: error.message };
  }
}

export async function ejercicio2() {
  const cantidadA = parseInt(await preguntar("¿Cuántos cursos en el catálogo A?"));
  if (isNaN(cantidadA) || cantidadA < 0) {
    return { error: "La cantidad del catálogo A debe ser un número válido." };
  }

  const catalogoA = [];
  for (let i = 0; i < cantidadA; i++) {
    const id = i + 1;
    const nombre = await preguntar(`Nombre del curso ${id} (catálogo A):`);
    const precio = parseFloat(await preguntar(`Precio del curso ${id}:`));
    catalogoA[catalogoA.length] = { id, nombre, precio };
  }

  const cantidadB = parseInt(await preguntar("¿Cuántos cursos en el catálogo B?"));
  if (isNaN(cantidadB) || cantidadB < 0) {
    return { error: "La cantidad del catálogo B debe ser un número válido." };
  }

  const catalogoB = [];
  for (let i = 0; i < cantidadB; i++) {
    const id = cantidadA + i + 1;
    const nombre = await preguntar(`Nombre del curso ${id} (catálogo B):`);
    const precio = parseFloat(await preguntar(`Precio del curso ${id}:`));
    catalogoB[catalogoB.length] = { id, nombre, precio };
  }

  return fusionarCatalogos(catalogoA, catalogoB);
}
