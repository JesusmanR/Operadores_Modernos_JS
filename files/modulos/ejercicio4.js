export function ejercicio4() {
  function estadisticas(jugadores) {
    try {
      if (!(jugadores instanceof Array)) {
        throw new Error("La estructura debe ser un arreglo.");
      }
      if (jugadores.length === 0) {
        throw new Error("Debe registrar al menos un jugador.");
      }

      for (let i = 0; i < jugadores.length; i++) {
        const j = jugadores[i];
        if (!j?.nombre) {
          throw new Error(`El jugador en la posición ${i} no tiene nombre.`);
        }
        if (typeof j.stats?.puntos !== "number" || isNaN(j.stats.puntos)) {
          throw new Error(`El jugador ${j.nombre} no tiene puntos válidos.`);
        }
      }

      const [{ stats: { puntos: puntosPrimer } }] = jugadores;

      let puntosTotales = 0;
      const jugadoresProcesados = [];

      for (let i = 0; i < jugadores.length; i++) {
        const { nombre, stats } = jugadores[i];
        const { puntos, asistencias } = stats;
        puntosTotales += puntos;

        jugadoresProcesados[i] = {
          get nombre() { return nombre; },
          get stats() {
            return {
              get puntos() { return puntos; },
              get asistencias() { return asistencias; }
            };
          }
        };
      }

      const totalJugadores = jugadores.length;

      return {
        get puntosPrimer() { return puntosPrimer; },
        get puntosTotales() { return puntosTotales; },
        get jugadoresProcesados() { return jugadoresProcesados; },
        get totalJugadores() { return totalJugadores; }
      };
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
    jugadores[jugadores.length] = { nombre, stats: { puntos, asistencias } };
  }

  return estadisticas(jugadores);
}