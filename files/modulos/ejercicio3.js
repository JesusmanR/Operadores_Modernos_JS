export function ejercicio3() {
  function procesarCompra(cliente, productos) {
    try {
      if (!cliente?.nombre || !cliente?.correo) {
        throw new Error("El cliente debe tener nombre y correo.");
      }
      if (!Array.isArray(productos)) {
        throw new Error("Los productos deben enviarse en un arreglo.");
      }
      if (productos.length === 0) {
        throw new Error("Debe registrar al menos un producto.");
      }

      // Reemplaza .every() — valida cada producto
      for (let i = 0; i < productos.length; i++) {
        const p = productos[i];
        if (!p?.nombre || typeof p.precio !== "number" || isNaN(p.precio)) {
          throw new Error(`El producto en la posición ${i} no es válido.`);
        }
      }

      // Spread: objeto nuevo con la información del cliente
      const nuevoCliente = { ...cliente };

      // Destructuración: primer producto separado del resto
      const [primerProducto, ...resto] = productos;

      // Reemplaza .reduce() — suma manual del precio total
      let precioTotal = 0;
      for (let i = 0; i < productos.length; i++) {
        precioTotal += productos[i].precio;
      }

      return Object.freeze({
        cliente: nuevoCliente,
        totalProductos: productos.length,
        precioTotal,
        primerProducto: primerProducto.nombre,
        productosRestantes: resto.length
      });
    } catch (error) {
      return { error: error.message };
    }
  }

  const nombre = prompt("Ingrese el nombre del cliente:");
  const correo = prompt("Ingrese el correo del cliente:");
  const cantidad = parseInt(prompt("¿Cuántos productos desea ingresar?"));

  if (isNaN(cantidad) || cantidad <= 0) {
    return { error: "La cantidad de productos debe ser un número mayor a cero." };
  }

  const productos = [];
  for (let i = 0; i < cantidad; i++) {
    const nombreProd = prompt(`Nombre del producto ${i + 1}:`);
    const precio = parseFloat(prompt(`Precio del producto ${i + 1}:`));
    productos[productos.length] = { nombre: nombreProd, precio };   // reemplaza .push()
  }

  return procesarCompra({ nombre, correo }, productos);
}