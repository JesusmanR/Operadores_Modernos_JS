export function ejercicio5() {
  function configFinal(...configs) {
    try {
      if (!configs.every(c => typeof c === "object" && !Array.isArray(c))) {
        throw new Error("Todas las configuraciones deben ser objetos.");
      }
      const final = configs.reduce((acc, c) => ({ ...acc, ...c }), {});
      return { ...final, validacion: true };
    } catch (error) {
      return { validacion: false, error: error.message };
    }
  }

  const cantidad = parseInt(prompt("¿Cuántas configuraciones desea ingresar?"));
  const configs = [];

  for (let i = 0; i < cantidad; i++) {
    const obj = {};
    const pares = parseInt(prompt(`¿Cuántas propiedades tendrá la configuración ${i+1}?`));
    for (let j = 0; j < pares; j++) {
      const clave = prompt(`Clave ${j+1} de config ${i+1}:`);
      const valor = prompt(`Valor para ${clave}:`);
      obj[clave] = isNaN(valor) ? valor : Number(valor);
    }
    configs.push(obj);
  }

  return configFinal(...configs);
}
