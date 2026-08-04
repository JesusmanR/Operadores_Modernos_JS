/*1. Gestión de pedidos con rest y destructuración
Crea una función procesarPedido(pedido, ...extras) donde pedido es un objeto con {cliente, producto, cantidad}.
• Usa destructuración para obtener sus propiedades.
• Usa parámetros rest para almacenar los extras del pedido. 
La función debe retornar un objeto final con toda la información consolidada.*/


console.log("Ejercicio 1: Gestión de pedidos con rest y destructuración");
function procesarPedido(pedido, ...extras) {
    // 1. Destructuración del objeto pedido
    const { cliente, producto, cantidad } = pedido;

    return {
        cliente,
        items : [{ producto, cantidad }, ...extras]
        };
}

let respuesta = procesarPedido(
    { cliente: "Pepito Perez", producto: "Laptop", cantidad: 1 },
    { producto: "Monitor", cantidad: 1 },
    { producto: "Teclado", cantidad: 2 },
    { producto: "UPS", cantidad: 2 }

);  

console.log(respuesta);

/**2. Control de inventario con inmutabilidad y spread
Partiendo del arreglo inicial:
const inventario = ["cámara", "trípode", "micrófono"];
Crea una función agregarInventario(lista, nuevoItem) que devuelva una nueva lista sin modificar la original y 
que registre un mensaje indicando cuántos ítems tiene ahora el inventario.
 */

console.log("Ejercicio 2: Control de inventario con inmutabilidad y spread");
const inventario = ["cámara", "trípode", "micrófono"];

function agregarInventario(lista, nuevoItem) {
    const nuevaLista = [...lista, nuevoItem];
    console.log(`El inventario ahora tiene ${nuevaLista.length} ítems.`);
    return nuevaLista;8
};

let nuevoInventario = agregarInventario(inventario, "luz LED");
console.log(nuevoInventario);


/*3. Registro de actividades con manejo de errores
Escribe una función registrarActividad(actividad) que reciba un objeto que debe contener {nombre, fecha}.
• Usa un try…catch para validar que ambas propiedades existan.
• Si falta alguna, lanza un error indicando que la actividad no es válida.
• Si todo está correcto, muestra un mensaje confirmando el registro.*/

console.log("Ejercicio 3: Registro de actividades con manejo de errores");
function registrarActividad(actividad) {
    try {
        const { nombre, fecha } = actividad;
        if (!nombre || !fecha) {
            throw new Error("La actividad no es válida. Debe contener nombre y fecha.");
        }
        console.log(`Actividad registrada: ${nombre} - ${fecha}`);
    } catch (error) {
        console.error(error.message);
    }
    return actividad;
}

let actividadValida = registrarActividad({ nombre: "Reunión de equipo", fecha: "2024-06-15" });
let actividadInvalida = registrarActividad({ nombre: "Reunión de equipo" });

console.log(actividadValida);
console.log(actividadInvalida);

/*4. Mezcla de configuraciones con spread y destructuración
Simula un sistema donde existen opciones por defecto y opciones personalizadas:
const defaults = { tema: "claro", idioma: "es" };
Crea una función configurarUsuario(defaults, personalizadas) que:
• Use spread para combinar ambas configuraciones sin mutarlas.
• Use destructuración para obtener el idioma configurado. Retorna el idioma resultante.*/

console.log("Ejercicio 4: Mezcla de configuraciones con spread y destructuración");

const defaults = { tema: "claro", idioma: "es" };

function configurarUsuario(defaults, personalizadas) { 
    const configuracion = { ...defaults, ...personalizadas };
    const { idioma } = configuracion;
    return idioma;
};

let idiomaUsuario = configurarUsuario(defaults, { tema: "oscuro", idioma: "en" });
console.log(`El idioma configurado es: ${idiomaUsuario}`);  

/*5. Actualización de perfiles con inmutabilidad + rest
Crea una función actualizarPerfil(perfil, ...nuevosDatos). Cada elemento de nuevosDatos será un objeto parcial como {edad: 22} o {ciudad: "Medellín"}.
• Combina todos los datos usando inmutabilidad y spread. Retorna el nuevo perfil completo.
*/

console.log("Ejercicio 5: Actualización de perfiles con inmutabilidad + rest");
function actualizarPerfil(perfil, ...nuevosDatos) {
    const nuevoPerfil = { ...perfil, ...Object.assign({}, ...nuevosDatos) };
    return nuevoPerfil;
};

let perfilActual = { nombre: "Ana", edad: 30, ciudad: "Bogotá" };
let perfilActualizado = actualizarPerfil(perfilActual, { edad: 31 }, { ciudad: "Medellín" }, { profesion: "Ingeniera" });
console.log(perfilActualizado);

/*6. Análisis de ventas con destructuración profunda
Dado este arreglo:
const ventas = [
{ producto: "teclado", detalles: { precio: 50, unidades: 3 } },
{ producto: "mouse", detalles: { precio: 20, unidades: 5 } }
];
Crea una función que emplee destructuración anidada para obtener precio y unidades del primer producto, y retorne el total vendido (precio × unidades).
*/

console.log("Ejercicio 6: Análisis de ventas con destructuración profunda");
const ventas = [
    { producto: "teclado", detalles: { precio: 50, unidades: 3 } },
    { producto: "mouse", detalles: { precio: 20, unidades: 5 } }
];

function analizarVentas(ventasArray) {
    const [{ detalles: { precio, unidades } }] = ventasArray;
    return precio * unidades;
}

let totalVendido = analizarVentas(ventas);
console.log(`Total vendido del primer producto: ${totalVendido}`);  

/*7. Evaluación de datos con try…catch + spread
Escribe una función evaluar(...valores) que:
• Reciba varios números mediante rest.
• Use un try…catch para verificar que todos sean numéricos.
• Si encuentra un valor no numérico, captura el error y muestra un mensaje adecuado.
• Si todo es válido, crea una nueva lista (sin mutar la original) y retorna el promedio.*/

console.log("Ejercicio 7: Evaluación de datos con try…catch + spread");
function evaluar(...valores) {
    try {
        if (!valores.every(v => typeof v === "number")) {
            throw new Error("Todos los valores deben ser números.");
        }
        const nuevaLista = [...valores];
        const promedio = nuevaLista.reduce((a, b) => a + b, 0) / nuevaLista.length;
        return promedio;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}
let promedioValido = evaluar(10, 20, 30);
console.log(`Promedio válido: ${promedioValido}`);
let promedioInvalido = evaluar(10, "20", 30);
console.log(`Promedio inválido: ${promedioInvalido}`);

/*8. Fusión de colecciones y validación final
Crea una función fusionarColecciones(lista1, lista2) que:
• Use spread para fusionar las dos listas sin mutarlas.
• Valide dentro de un try…catch que ambas listas sean arreglos.
• Si no lo son, lanza un error personalizado.
• Retorna la colección final.*/

console.log("Ejercicio 8: Fusión de colecciones y validación final");
function fusionarColecciones(lista1, lista2) {
    try {
        if (!Array.isArray(lista1) || !Array.isArray(lista2)) {
            throw new Error("Ambas listas deben ser arreglos.");
        }
        const nuevaColeccion = [...lista1, ...lista2];
        return nuevaColeccion;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}
 
let coleccion1 = [1, 2, 3];
let coleccion2 = [4, 5, 6];
let coleccionFusionada = fusionarColecciones(coleccion1, coleccion2);
console.log(`Colección fusionada: ${coleccionFusionada}`);

let coleccionInvalida = fusionarColecciones(coleccion1, "no es un arreglo");
console.log(`Colección inválida: ${coleccionInvalida}`);    
