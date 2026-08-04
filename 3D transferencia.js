/* 1. Requerimiento: Crea una función crearEstudiante(nombre, ...notas) que reciba:
• Un nombre obligatorio.
• Un número variable de notas mediante rest.
La función debe:
1. Validar con try…catch que todas las notas sean números.
2. Usar destructuración para separar la primera nota del resto.
3. Retornar un objeto inmutable con:
    - Nombre
    - Primera nota
    - Promedio del resto de notas
    - Total de notas registradas
Resultado esperado: 
Un objeto final correctamente construido, sin mutar ningún arreglo externo, con cálculos correctos y 
con manejo adecuado de errores.
*/
console.log("Ejercicio 1: Creación de estudiante con validación y destructuración");

function crearEstudiante(nombre, ...notas) {
  try {
    // Validar que todas las notas sean números
    if (!notas.every(nota => typeof nota === 'number')) {
      throw new Error("Todas las notas deben ser números.");
    }

 const [primeraNota, ...restoNotas] = notas; 

    const promedioResto = restoNotas.length > 0 ? restoNotas.reduce((a, b) => a + b, 0) / restoNotas.length : 0;

    const estudiante = Object.freeze({
      nombre: nombre,
      primeraNota: primeraNota,
      promedioResto: promedioResto,
      totalNotas: notas.length
    }); 
    return estudiante;
  } catch (error) {
    console.error(error.message);
    return null;
  }
} 
 

/*2. Fusión de catálogos digitales
Requerimiento: Tienes dos catálogos:
const catalogoA = [
{ id: 1, nombre: "Curso JavaScript", precio: 40 },
{ id: 2, nombre: "Curso HTML", precio: 35 }
];
const catalogoB = [
{ id: 3, nombre: "Curso CSS", precio: 30 }
];
Crea una función fusionarCatalogos(a, b) que:
1. Use try…catch para validar que ambos parámetros sean arreglos.
2. Utilice spread para fusionarlos sin modificar los originales.
3. Retorne un nuevo catálogo ordenado por precio ascendente.
Resultado esperado: Una nueva colección combinada, ordenada e inmutable. Si un parámetro no es un arreglo, debe mostrarse un error comprensible.*/

console.log("Ejercicio 2: Fusión de catálogos digitales con validación y ordenamiento");
function fusionarCatalogos(a, b) {
  try {
    if (!Array.isArray(a) || !Array.isArray(b)) {
      throw new Error("Ambos parámetros deben ser arreglos.");
    }
    const catalogoFusionado = [...a, ...b];
    catalogoFusionado.sort((x, y) => x.precio - y.precio);
    return catalogoFusionado;
  } catch (error) {
    console.error(error.message);
    return null;
  }
} 
 
 const catalogoA = [
  { id: 1, nombre: "Curso JavaScript", precio: 40 },
  { id: 2, nombre: "Curso HTML", precio: 35 } 
];
const catalogoB = [
  { id: 3, nombre: "Curso CSS", precio: 30 }
];  

let catalogoFinal = fusionarCatalogos(catalogoA, catalogoB);
console.log("Catálogo final fusionado y ordenado:", catalogoFinal); 

/*3. Procesamiento de compras
Requerimiento: Implementa una función procesarCompra(cliente, productos) donde:
• cliente es un objeto con {nombre, correo}.
• productos es una lista de objetos con {nombre, precio}.
La función debe:
1. Validar con try…catch que el cliente tenga los dos datos y que los productos sean válidos.
2. Utilizar spread para crear un nuevo objeto con toda la información del cliente.
3. Usar destructuración para separar el primer producto comprado del resto.
4. Retornar un informe con:
- Total de productos
- Precio total
- Primer producto adquirido
Resultado esperado: Un informe completo y coherente, construido con técnicas de inmutabilidad y manejo seguro de errores.*/

console.log("Ejercicio 3: Procesamiento de compras con validación y destructuración");
function procesarCompra(cliente, productos) {
  try {
    if (!cliente || !cliente.nombre || !cliente.correo) {
      throw new Error("El cliente debe tener nombre y correo.");
    }
    if (!Array.isArray(productos)) {
      throw new Error("Los productos deben ser un arreglo.");
    }
    const nuevoCliente = { ...cliente };
    const [primerProducto, ...restoProductos] = productos;
    const precioTotal = productos.reduce((total, producto) => total + producto.precio, 0);
    return {
      totalProductos: productos.length,
      precioTotal: precioTotal,
      primerProducto: primerProducto
    };
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

const cliente = { nombre: "Juan Pérez", correo: "juan.perez@example.com" };
const productos = [
  { nombre: "Producto 1", precio: 10 },
  { nombre: "Producto 2", precio: 20 },
  { nombre: "Producto 3", precio: 30 }
];
let informeCompra = procesarCompra(cliente, productos);
console.log("Informe de compra:", informeCompra);
const clienteInvalido = { nombre: "Ana" }; // Falta correo
let informeCompraInvalido = procesarCompra(clienteInvalido, productos);
console.log("Informe de compra con cliente inválido:", informeCompraInvalido);
const productosInvalidos = "No es un arreglo"; // No es un arreglo
let informeCompraProductosInvalidos = procesarCompra(cliente, productosInvalidos);
console.log("Informe de compra con productos inválidos:", informeCompraProductosInvalidos); 

const clienteValido = { nombre: "Carlos López", correo: "carlos.lopez@example.com" };
let informeCompraValido = procesarCompra(clienteValido, productos);
console.log("Informe de compra con cliente válido:", informeCompraValido);

/*4. Informe de estadísticas deportivas
Requerimiento: Partiendo del arreglo:
const jugadores = [
{ nombre: "Ana", stats: { puntos: 20, asistencias: 5 } },
{ nombre: "Luis", stats: { puntos: 15, asistencias: 7 } }
];
Crea una función estadisticas(jugadores) que:
1. Verifique mediante try…catch que la estructura de datos sea válida.
2. Emplee destructuración profunda para obtener los puntos del primer jugador.
3. Calcule la suma total de puntos del equipo utilizando técnicas inmutables.
4. Devuelva un objeto con:
- Puntos del primer jugador
- Puntos totales del equipo
- Lista inmutable de jugadores procesados
Resultado esperado: Un objeto estadístico confiable, con cálculos correctos y sin mutación de la lista original.*/

console.log("Ejercicio 4: Informe de estadísticas deportivas con validación y destructuración profunda");
function estadisticas(jugadores) {
  try {
    if (!Array.isArray(jugadores) || jugadores.some(j => !j.stats || typeof j.stats.puntos !== 'number')) {
      throw new Error("La estructura de datos de jugadores es inválida.");
    }

    const [{ stats: { puntos: puntosPrimerJugador } }] = jugadores;
    const puntosTotales = jugadores.reduce((total, j) => total + j.stats.puntos, 0);
    const jugadoresProcesados = jugadores.map(j => ({ ...j }));

    return {
      puntosPrimerJugador,
      puntosTotales,
      jugadoresProcesados
    };
  } catch (error) {
    console.error(error.message);
    return null;
  }
} 
const jugadores = [
  { nombre: "Ana", stats: { puntos: 20, asistencias: 5 } },
  { nombre: "Luis", stats: { puntos: 15, asistencias: 7 } }
];
let informeEstadisticas = estadisticas(jugadores);
console.log("Informe de estadísticas:", informeEstadisticas); 
const jugadoresInvalidos = [
  { nombre: "Ana", stats: { puntos: 20, asistencias: 5 } },
  { nombre: "Luis", stats: { asistencias: 7 } } // Falta puntos
];
let informeEstadisticasInvalidas = estadisticas(jugadoresInvalidos);
console.log("Informe de estadísticas con jugadores inválidos:", informeEstadisticasInvalidas);


