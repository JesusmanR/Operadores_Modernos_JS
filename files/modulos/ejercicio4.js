export function ejercicio4() {
  function estadisticas(jugadores) {
    try {
      if (!Array.isArray(jugadores)) {
        throw new Error("La estructura debe ser un arreglo.");
      }
      if (jugadores.length === 0) {
        throw new Error("Debe registrar al menos un jugador.");
      }

      // Validación de la estructura de cada jugador
      for (let i = 0; i < jugadores.length; i++) {
        const j = jugadores[i];
        if (!j?.nombre) {
          throw new Error(`El jugador en la posición ${i} no tiene nombre.`);
        }
        if (typeof j.stats?.puntos !== "number" || isNaN(j.stats.puntos)) {
          throw new Error(`El jugador ${j.nombre} no tiene puntos válidos.`);
        }
      }

      // Destructuración profunda del primer jugador
      const [{ stats: { puntos: puntosPrimer } }] = jugadores;

      // Reemplaza .reduce() — suma manual de los puntos del equipo
      let puntosTotales = 0;
      for (let i = 0; i < jugadores.length; i++) {
        puntosTotales += jugadores[i].stats.puntos;
      }

      return Object.freeze({
        puntosPrimer,
        puntosTotales,
        jugadoresProcesados: [...jugadores],
        totalJugadores: jugadores.length
      });
    } catch (error) {
      return { error: error.message };
    }
  }

  const cantidad = parseInt(prompt("¿Cuántos jugadores desea ingresar?"));

  if (isNaN(cantidad) || cantidad <= 0) {
    return { error: "La cantidad de jugadores debe ser un número mayor a cero." };
  }

  const jugadores = [];
  for (let i = 0; i < cantidad; i++) {
    const nombre = prompt(`Nombre del jugador ${i + 1}:`);
    const puntos = parseInt(prompt(`Puntos de ${nombre}:`));
    const asistencias = parseInt(prompt(`Asistencias de ${nombre}:`));
    jugadores[jugadores.length] = { nombre, stats: { puntos, asistencias } };   // reemplaza .push()
  }

  return estadisticas(jugadores);
}