export function ejercicio1() {
  function crearEstudiante(nombre, ...notas) {
    try {
      if (!nombre) throw new Error("El nombre es obligatorio.");
      if (notas.length === 0) throw new Error("Debe registrar al menos una nota.");

      for (let i = 0; i < notas.length; i++) {
        if (typeof notas[i] !== "number" || isNaN(notas[i])) {
          throw new Error("Todas las notas deben ser números.");
        }
      }

      const [primeraNota, ...restoNotas] = notas;

      let promedioResto = 0;
      if (restoNotas.length > 0) {
        let suma = 0;
        for (let i = 0; i < restoNotas.length; i++) {
          suma += restoNotas[i];
        }
        promedioResto = suma / restoNotas.length;
      }

      const totalNotas = notas.length;

      // Inmutabilidad con getters: no hay setter, así que no se puede reasignar
      return {
        get nombre() { return nombre; },
        get primeraNota() { return primeraNota; },
        get promedioResto() { return promedioResto; },
        get totalNotas() { return totalNotas; }
      };
    } catch (error) {
      return { error: error.message };
    }
  }

  const nombre = prompt("Ingrese el nombre del estudiante:");
  const cantidad = parseInt(prompt("¿Cuántas notas desea ingresar?"));

  if (isNaN(cantidad) || cantidad <= 0) {
    return { error: "La cantidad de notas debe ser un número mayor a cero." };
  }

  const notas = [];
  for (let i = 0; i < cantidad; i++) {
    notas[notas.length] = parseFloat(prompt(`Ingrese la nota ${i + 1}:`));
  }

  return crearEstudiante(nombre, ...notas);
}