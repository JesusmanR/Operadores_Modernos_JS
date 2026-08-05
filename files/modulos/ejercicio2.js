export function ejercicio2() {
  function fusionarCatalogos(a, b) {
    try {
      if (!Array.isArray(a) || !Array.isArray(b)) {
        throw new Error("Ambos parámetros deben ser arreglos.");
      }

      // Spread: nuevo arreglo, los originales no se modifican
      const fusion = [...a, ...b];

      // Copia manual — reemplaza .slice()
      const ordenado = [];
      for (let i = 0; i < fusion.length; i++) {
        ordenado[i] = fusion[i];
      }

      // Ordenamiento burbuja ascendente por precio — reemplaza .sort()
      for (let i = 0; i < ordenado.length - 1; i++) {
        for (let j = 0; j < ordenado.length - 1 - i; j++) {
          if (ordenado[j].precio > ordenado[j + 1].precio) {
            const temporal = ordenado[j];
            ordenado[j] = ordenado[j + 1];
            ordenado[j + 1] = temporal;
          }
        }
      }

      return ordenado;
    } catch (error) {
      return { error: error.message };
    }
  }

  const cantidadA = parseInt(prompt("¿Cuántos cursos desea ingresar en catálogo A?"));
  if (isNaN(cantidadA) || cantidadA < 0) {
    return { error: "La cantidad del catálogo A debe ser un número válido." };
  }

  const catalogoA = [];
  for (let i = 0; i < cantidadA; i++) {
    const id = i + 1;
    const nombre = prompt(`Nombre del curso ${id} en catálogo A:`);
    const precio = parseFloat(prompt(`Precio del curso ${id}:`));
    catalogoA[catalogoA.length] = { id, nombre, precio };   // reemplaza .push()
  }

  const cantidadB = parseInt(prompt("¿Cuántos cursos desea ingresar en catálogo B?"));
  if (isNaN(cantidadB) || cantidadB < 0) {
    return { error: "La cantidad del catálogo B debe ser un número válido." };
  }

  const catalogoB = [];
  for (let i = 0; i < cantidadB; i++) {
    const id = cantidadA + i + 1;
    const nombre = prompt(`Nombre del curso ${id} en catálogo B:`);
    const precio = parseFloat(prompt(`Precio del curso ${id}:`));
    catalogoB[catalogoB.length] = { id, nombre, precio };   // reemplaza .push()
  }

  return fusionarCatalogos(catalogoA, catalogoB);
}