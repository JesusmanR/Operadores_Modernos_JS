export function ejercicio2() {
  function fusionarCatalogos(a, b) {
    try {
      if (!Array.isArray(a) || !Array.isArray(b)) {
        throw new Error("Ambos parámetros deben ser arreglos.");
      }
      const fusion = [...a, ...b];
      return fusion.slice().sort((x,y) => x.precio - y.precio);
    } catch (error) {
      return { error: error.message };
    }
  }

  const cantidadA = parseInt(prompt("¿Cuántos cursos desea ingresar en catálogo A?"));
  const catalogoA = [];
  for (let i = 0; i < cantidadA; i++) {
    const id = i+1;
    const nombre = prompt(`Nombre del curso ${id} en catálogo A:`);
    const precio = parseFloat(prompt(`Precio del curso ${id}:`));
    catalogoA.push({ id, nombre, precio });
  }

  const cantidadB = parseInt(prompt("¿Cuántos cursos desea ingresar en catálogo B?"));
  const catalogoB = [];
  for (let i = 0; i < cantidadB; i++) {
    const id = cantidadA + i + 1;
    const nombre = prompt(`Nombre del curso ${id} en catálogo B:`);
    const precio = parseFloat(prompt(`Precio del curso ${id}:`));
    catalogoB.push({ id, nombre, precio });
  }

  return fusionarCatalogos(catalogoA, catalogoB);
}
