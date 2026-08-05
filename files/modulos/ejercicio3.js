export function ejercicio3() {
  function procesarCompra(cliente, productos) {
    try {
      if (!cliente?.nombre || !cliente?.correo) {
        throw new Error("El cliente debe tener nombre y correo.");
      }
      if (!(productos instanceof Array)) {
        throw new Error("Los productos deben enviarse en un arreglo.");
      }
      if (productos.length === 0) {
        throw new Error("Debe registrar al menos un producto.");
      }

      for (let i = 0; i < productos.length; i++) {
        const p = productos[i];
        if (!p?.nombre || typeof p.precio !== "number" || isNaN(p.precio)) {
          throw new Error(`El producto en la posición ${i} no es válido.`);
        }
      }

      const nuevoCliente = { ...cliente };
      const [primerProducto, ...resto] = productos;

      let precioTotal = 0;
      for (let i = 0; i < productos.length; i++) {
        precioTotal += productos[i].precio;
      }

      const totalProductos = productos.length;
      const productosRestantes = resto.length;
      const nombrePrimero = primerProducto.nombre;
      const { nombre: nombreCliente, correo } = nuevoCliente;

      return {
        get cliente() {
          return {
            get nombre() { return nombreCliente; },
            get correo() { return correo; }
          };
        },
        get totalProductos() { return totalProductos; },
        get precioTotal() { return precioTotal; },
        get primerProducto() { return nombrePrimero; },
        get productosRestantes() { return productosRestantes; }
      };
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
    productos[productos.length] = { nombre: nombreProd, precio };
  }

  return procesarCompra({ nombre, correo }, productos);
}