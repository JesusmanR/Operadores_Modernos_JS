export function ejercicio1() {
  function crearEstudiante(nombre, ...notas) {
    try {
      if (!nombre) throw new Error("El nombre es obligatorio.");
      if (!notas.every(n => !isNaN(n))) {
        throw new Error("Todas las notas deben ser números.");
      }

      const [primeraNota, ...restoNotas] = notas;
      const promedioResto = restoNotas.length > 0
        ? restoNotas.reduce((a,b) => a+b, 0) / restoNotas.length
        : 0;

      return Object.freeze({
        nombre,
        primeraNota,
        promedioResto,
        totalNotas: notas.length
      });
    } catch (error) {
      return { error: error.message };
    }
  }

  const nombre = prompt("Ingrese el nombre del estudiante:");
  const cantidad = parseInt(prompt("¿Cuántas notas desea ingresar?"));
  const notas = [];

  for (let i = 0; i < cantidad; i++) {
    const nota = parseFloat(prompt(`Ingrese la nota ${i+1}:`));
    notas.push(nota);
  }

  return crearEstudiante(nombre, ...notas);
}
