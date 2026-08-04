/**function listarElementos(...valores) {
    console.log(typeof valores)
for (let i = 0; i < valores.length; i++) {
console.log("Elemento", i + 1, ":", valores[i]);
}
}

listarElementos("HTML", "CSS", "JavaScript", "Git");
**/

/*const usuarioOriginal = {
nombre: "Carlos",
edad: 25
};
// Copia incorrecta: ambas variables apuntan al mismo objeto
//const usuarioCopia = usuarioOriginal;
const usuarioCopia = { ...usuarioOriginal };
// Modificamos la "copia"
usuarioCopia.edad = 30;
console.log(usuarioOriginal.edad); // 30 Error: el original también cambió
console.log(usuarioCopia.edad); // 30
*/

/*const persona = {
nombre: "Laura",
edad: 28,
ciudad: "Bogotá"
};
// Forma tradicional: repetitiva e incómoda
//const nombre = persona.nombre;
//const edad = persona.edad;
//const ciudad = persona.ciudad;
const { nombre, edad, ciudad } = persona;
console.log(nombre, edad, ciudad);
*/

/*console.log("Inicio");
try {
const usuario = null;
console.log(usuario.nombre); // Esto generará un error
} catch (error) {
console.error("Ocurrió un error:", error.message);
}
console.log("Fin del programa"); // Sí se ejecuta gracias al manejo del error
*/

/*Ejercicio 1:
Crea una función llamada registrarUsuarios que reciba un primer argumento obligatorio con la información de un usuario principal (nombre, edad) y 
luego un número indeterminado de usuarios adicionales usando parámetros rest.
1.Usa destructuración para extraer nombre y edad del usuario principal.
2.La función debe mostrar un mensaje indicando cuántos usuarios adicionales se registraron.
Resultado esperado (ejemplo): Usuario principal: Ana, Edad: 28 — Usuarios adicionales registrados: 3*/

function registrarUsuarios(usuarioPrincipal, ...usuariosAdicionales) {
  // 1. Destructuración del usuario principal
  const { nombre, edad } = usuarioPrincipal;

  // 2. Mostrar mensaje con la información
  console.log(`Usuario principal: ${nombre}, Edad: ${edad} — Usuarios adicionales registrados: ${usuariosAdicionales.length}`);
  console.log("Usuario principal:",nombre," Edad:", edad, "— Usuarios adicionales registrador:", usuariosAdicionales.length);
  
}

// Ejemplo de uso
registrarUsuarios(
  { nombre: "Ana", edad: 28 },
  { nombre: "Luis", edad: 30 },
  { nombre: "María", edad: 25 },
  { nombre: "Pedro", edad: 22 }
);


