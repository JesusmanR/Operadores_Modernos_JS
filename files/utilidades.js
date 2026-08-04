/**
 * utilidades.js
 * Funciones de apoyo comunes a todos los ejercicios.
 * Restricciones aplicadas: sin métodos de array y sin Object.freeze.
 */

/**
 * Convierte un objeto o arreglo en inmutable SIN usar Object.freeze.
 * Cada propiedad se redefine como no escribible y no configurable,
 * y luego se impide agregar propiedades nuevas.
 * @param {Object|Array} destino
 * @returns {Object|Array} el mismo destino, ya inmutable
 */
export function hacerInmutable(destino) {
  const claves = Object.getOwnPropertyNames(destino);

  for (let i = 0; i < claves.length; i++) {
    const clave = claves[i];
    const descriptor = Object.getOwnPropertyDescriptor(destino, clave);

    // Solo se redefinen las propiedades de valor que aún son configurables
    if (descriptor.configurable === true && "value" in descriptor) {
      Object.defineProperty(destino, clave, {
        value: descriptor.value,
        writable: false,
        configurable: false,
        enumerable: descriptor.enumerable,
      });
    } else if (clave === "length" && descriptor.writable === true) {
      // Caso especial de los arreglos: length no es configurable pero sí escribible
      Object.defineProperty(destino, clave, { writable: false });
    }
  }

  Object.preventExtensions(destino);
  return destino;
}

/**
 * Copia un arreglo elemento por elemento (sin usar slice ni concat).
 * @param {Array} origen
 * @returns {Array} copia nueva
 */
export function copiarArreglo(origen) {
  const copia = [];
  for (let i = 0; i < origen.length; i++) {
    copia[i] = origen[i];
  }
  return copia;
}

/**
 * Une los elementos de un arreglo en un texto (reemplazo manual de join).
 * @param {Array} lista
 * @param {string} separador
 * @returns {string}
 */
export function unirTexto(lista, separador) {
  let texto = "";
  for (let i = 0; i < lista.length; i++) {
    texto += lista[i];
    if (i < lista.length - 1) {
      texto += separador;
    }
  }
  return texto;
}

/**
 * Verifica si un valor es un objeto plano (no nulo, no arreglo).
 * @param {*} valor
 * @returns {boolean}
 */
export function esObjetoPlano(valor) {
  return (
    typeof valor === "object" &&
    valor !== null &&
    Array.isArray(valor) === false
  );
}
