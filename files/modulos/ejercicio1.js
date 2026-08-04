export function ejercicio1() {
  function crearEstudiante(nombre, ...notas) {
    try {
      if (!nombre) throw new Error("El nombre es obligatorio.");

      // Reemplaza .every() — valida que todas las notas sean números
      for (let i = 0; i < notas.length; i++) {
        if (typeof notas[i] !== "number" || isNaN(notas[i])) {
          throw new Error("Todas las notas deben ser números.");
        }
      }

      const [primeraNota, ...restoNotas] = notas;

      // Reemplaza .reduce() — suma manual del resto de notas
      let promedioResto = 0;
      if (restoNotas.length > 0) {
        let suma = 0;
        for (let i = 0; i < restoNotas.length; i++) {
          suma += restoNotas[i];
        }
        promedioResto = suma / restoNotas.length;
      }

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

  if (isNaN(cantidad) || cantidad <= 0) {
    return { error: "La cantidad de notas debe ser un número mayor a cero." };
  }

  const notas = [];
  for (let i = 0; i < cantidad; i++) {
    const nota = parseFloat(prompt(`Ingrese la nota ${i + 1}:`));
    notas[notas.length] = nota;   // Reemplaza .push()
  }

  return crearEstudiante(nombre, ...notas);
}