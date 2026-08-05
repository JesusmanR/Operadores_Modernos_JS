export function ejercicio2() {
  function fusionarCatalogos(a, b) {
    try {
      if (!(a instanceof Array) || !(b instanceof Array)) {
        throw new Error("Ambos parámetros deben ser arreglos.");
      }

      const fusion = [...a, ...b];

      for (let i = 0; i < fusion.length; i++) {
        if (typeof fusion[i].precio !== "number" || isNaN(fusion[i].precio)) {
          throw new Error(`El curso en la posición ${i} no tiene un precio válido.`);
        }
      }

      const ordenado = [];
      for (let i = 0; i < fusion.length; i++) {
        ordenado[i] = fusion[i];
      }

      for (let i = 0; i < ordenado.length - 1; i++) {
        for (let j = 0; j < ordenado.length - 1 - i; j++) {
          if (ordenado[j].precio > ordenado[j + 1].precio) {
            const temporal = ordenado[j];
            ordenado[j] = ordenado[j + 1];
            ordenado[j + 1] = temporal;
          }
        }
      }

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

  const cantidadA = parseInt(prompt("¿Cuántos cursos desea ingresar en catálogo A?"));
  if (isNaN(cantidadA) || cantidadA < 0) {
    return { error: "La cantidad del catálogo A debe ser un número válido." };
  }

  const catalogoA = [];
  for (let i = 0; i < cantidadA; i++) {
    const id = i + 1;
    const nombre = prompt(`Nombre del curso ${id} en catálogo A:`);
    const precio = parseFloat(prompt(`Precio del curso ${id}:`));
    catalogoA[catalogoA.length] = { id, nombre, precio };
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
    catalogoB[catalogoB.length] = { id, nombre, precio };
  }

  return fusionarCatalogos(catalogoA, catalogoB);
}