/**
 * ejercicio3.js — Procesamiento de compras
 * procesarCompra(cliente, productos)
 *   a. try...catch valida cliente {nombre, correo} y productos
 *   b. spread crea un objeto nuevo con la información del cliente
 *   c. destructuración separa el primer producto del resto
 *   d. informe con total, precio total y primer producto
 */
import { preguntar } from "./entrada.js";

export function procesarCompra(cliente, productos) {
  try {
    // a. Validaciones
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

    // b. Spread: objeto nuevo con la información del cliente
    const nuevoCliente = { ...cliente };

    // c. Destructuración: primer producto separado del resto
    const [primerProducto, ...resto] = productos;

    // d. Precio total con ciclo for
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

export async function ejercicio3() {
  const nombre = await preguntar("Ingrese el nombre del cliente:");
  const correo = await preguntar("Ingrese el correo del cliente:");
  const cantidad = parseInt(await preguntar("¿Cuántos productos desea ingresar?"));

  if (isNaN(cantidad) || cantidad <= 0) {
    return { error: "La cantidad de productos debe ser un número mayor a cero." };
  }

  const productos = [];
  for (let i = 0; i < cantidad; i++) {
    const nombreProd = await preguntar(`Nombre del producto ${i + 1}:`);
    const precio = parseFloat(await preguntar(`Precio del producto ${i + 1}:`));
    productos[productos.length] = { nombre: nombreProd, precio };
  }

  return procesarCompra({ nombre, correo }, productos);
}
