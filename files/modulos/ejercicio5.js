export function ejercicio5() {
  function configFinal(...configs) {
    try {
      if (configs.length === 0) {
        throw new Error("Debe enviar al menos una configuración.");
      }

      // Reemplaza .every() — valida que cada elemento sea un objeto
      for (let i = 0; i < configs.length; i++) {
        const c = configs[i];
        if (typeof c !== "object" || c === null || Array.isArray(c)) {
          throw new Error(
            `La configuración en la posición ${i} no es un objeto válido.`
          );
        }
      }

      // Reemplaza .reduce() — mezcla con spread en cada vuelta
      let final = {};
      for (let i = 0; i < configs.length; i++) {
        final = { ...final, ...configs[i] };
      }

      return { ...final, validacion: true };
    } catch (error) {
      return { validacion: false, error: error.message };
    }
  }

  const cantidad = parseInt(prompt("¿Cuántas configuraciones desea ingresar?"));

  if (isNaN(cantidad) || cantidad <= 0) {
    return {
      validacion: false,
      error: "La cantidad de configuraciones debe ser un número mayor a cero."
    };
  }

  const configs = [];
  for (let i = 0; i < cantidad; i++) {
    const obj = {};
    const pares = parseInt(prompt(`¿Cuántas propiedades tendrá la configuración ${i + 1}?`));

    if (!isNaN(pares)) {
      for (let j = 0; j < pares; j++) {
        const clave = prompt(`Clave ${j + 1} de config ${i + 1}:`);
        const valor = prompt(`Valor para ${clave}:`);

        if (clave !== null && clave.trim() !== "") {
          obj[clave.trim()] =
            valor !== null && valor.trim() !== "" && !isNaN(valor)
              ? Number(valor)
              : valor;
        }
      }
    }

    configs[configs.length] = obj;   // reemplaza .push()
  }

  return configFinal(...configs);
}