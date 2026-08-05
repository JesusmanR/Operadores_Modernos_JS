/**
 * ejercicio4.js — Informe de estadísticas deportivas
 * estadisticas(jugadores)
 *   a. try...catch verifica la estructura de datos
 *   b. destructuración profunda obtiene los puntos del primer jugador
 *   c. suma total de puntos sin mutar la lista original
 *   d. objeto con puntos del primero, totales y lista inmutable
 */
import { preguntar } from "./entrada.js";

export function estadisticas(jugadores) {
  try {
    // a. Verificación de la estructura
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

    // b. Destructuración profunda del primer jugador
    const [{ stats: { puntos: puntosPrimer } }] = jugadores;

    // c. Suma total y copia inmutable de cada jugador
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

    // d. Objeto final inmutable
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

export async function ejercicio4() {
  const cantidad = parseInt(await preguntar("¿Cuántos jugadores desea ingresar?"));

  if (isNaN(cantidad) || cantidad <= 0) {
    return { error: "La cantidad de jugadores debe ser un número mayor a cero." };
  }

  const jugadores = [];
  for (let i = 0; i < cantidad; i++) {
    const nombre = await preguntar(`Nombre del jugador ${i + 1}:`);
    const puntos = parseInt(await preguntar(`Puntos de ${nombre}:`));
    const asistencias = parseInt(await preguntar(`Asistencias de ${nombre}:`));
    jugadores[jugadores.length] = { nombre, stats: { puntos, asistencias } };
  }

  return estadisticas(jugadores);
}
