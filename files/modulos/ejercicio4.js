export function ejercicio4() {
  function estadisticas(jugadores) {
    try {
      if (!Array.isArray(jugadores)) throw new Error("La estructura debe ser un arreglo.");
      const [{ stats: { puntos: puntosPrimer } }] = jugadores;
      const puntosTotales = jugadores.reduce((acc, j) => acc + j.stats.puntos, 0);

      return Object.freeze({
        puntosPrimer,
        puntosTotales,
        jugadoresProcesados: [...jugadores]
      });
    } catch (error) {
      return { error: error.message };
    }
  }

  const cantidad = parseInt(prompt("¿Cuántos jugadores desea ingresar?"));
  const jugadores = [];

  for (let i = 0; i < cantidad; i++) {
    const nombre = prompt(`Nombre del jugador ${i+1}:`);
    const puntos = parseInt(prompt(`Puntos de ${nombre}:`));
    const asistencias = parseInt(prompt(`Asistencias de ${nombre}:`));
    jugadores.push({ nombre, stats: { puntos, asistencias } });
  }

  return estadisticas(jugadores);
}
