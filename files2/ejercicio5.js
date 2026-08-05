/**
 * ejercicio5.js — Motor de configuración avanzada
 * configFinal(...configs)
 *   a. recibe múltiples configuraciones con rest
 *   b. spread las mezcla sin mutar ninguna
 *   c. try...catch valida que cada elemento sea un objeto
 *   d. retorna el objeto final con la propiedad validacion
 */
import { preguntar } from "./entrada.js";

export function configFinal(...configs) {
  try {
    // a + c. Validación de cada configuración recibida por rest
    if (configs.length === 0) {
      throw new Error("Debe enviar al menos una configuración.");
    }

    for (let i = 0; i < configs.length; i++) {
      const c = configs[i];
      if (typeof c !== "object" || c === null || c instanceof Array) {
        throw new Error(`La configuración en la posición ${i} no es un objeto válido.`);
      }
    }

    // b. Mezcla con spread: cada vuelta genera un objeto nuevo
    let final = {};
    for (let i = 0; i < configs.length; i++) {
      final = { ...final, ...configs[i] };
    }

    // d. Objeto final con la marca de validación
    return { ...final, configuracionesAplicadas: configs.length, validacion: true };
  } catch (error) {
    return { validacion: false, error: error.message };
  }
}

export async function ejercicio5() {
  const cantidad = parseInt(await preguntar("¿Cuántas configuraciones desea ingresar?"));

  if (isNaN(cantidad) || cantidad <= 0) {
    return { validacion: false, error: "La cantidad debe ser un número mayor a cero." };
  }

  const configs = [];
  for (let i = 0; i < cantidad; i++) {
    const obj = {};
    const pares = parseInt(await preguntar(`¿Cuántas propiedades tendrá la configuración ${i + 1}?`));

    if (!isNaN(pares)) {
      for (let j = 0; j < pares; j++) {
        const clave = await preguntar(`Clave ${j + 1} de config ${i + 1}:`);
        const valor = await preguntar(`Valor para ${clave}:`);

        if (clave.trim() !== "") {
          obj[clave.trim()] =
            valor.trim() !== "" && !isNaN(valor) ? Number(valor) : valor;
        }
      }
    }

    configs[configs.length] = obj;
  }

  return configFinal(...configs);
}
