export function ejercicio3() {
  function procesarCompra(cliente, productos) {
    try {
      if (!cliente?.nombre || !cliente?.correo) {
        throw new Error("El cliente debe tener nombre y correo.");
      }
      if (!Array.isArray(productos) || !productos.every(p => p.nombre && typeof p.precio === "number")) {
        throw new Error("Los productos deben ser válidos.");
      }

      const nuevoCliente = { ...cliente };
      const [primerProducto, ...resto] = productos;
      const precioTotal = productos.reduce((acc, p) => acc + p.precio, 0);

      return Object.freeze({
        cliente: nuevoCliente,
        totalProductos: productos.length,
        precioTotal,
        primerProducto: primerProducto.nombre
      });
    } catch (error) {
      return { error: error.message };
    }
  }

  const nombre = prompt("Ingrese el nombre del cliente:");
  const correo = prompt("Ingrese el correo del cliente:");
  const cantidad = parseInt(prompt("¿Cuántos productos desea ingresar?"));
  const productos = [];

  for (let i = 0; i < cantidad; i++) {
    const nombreProd = prompt(`Nombre del producto ${i+1}:`);
    const precio = parseFloat(prompt(`Precio del producto ${i+1}:`));
    productos.push({ nombre: nombreProd, precio });
  }

  return procesarCompra({ nombre, correo }, productos);
}
