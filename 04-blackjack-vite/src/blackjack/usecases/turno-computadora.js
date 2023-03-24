import { pedirCarta } from "./pedir-carta";
import { acumularPuntos, crearCarta, determinarGanador } from "./utils";

/**
 * Turn of the computer
 * @param {Number} puntosMinimos
 * @param {Array<Number>} puntosJugadores
 * @param {HTMLElement} imgCarta
 * @param {HTMLElement} divCartasJugadores
 * @param {HTMLElement} puntosHTML
 * @param {Array<String>} deck
 */
//turno: 0 es el primer jugador y el ultimo es la computadora
export const turnoComputadora = ( puntosMinimos, puntosJugadores, document, divCartasJugadores, puntosHTML, deck = [] ) => {
    let puntosComputadora = 0;
    const turnoCompu = puntosJugadores.length - 1;
    do {
        const carta = pedirCarta(deck);
        const newImg = document.createElement('img');
        puntosComputadora = acumularPuntos(carta, turnoCompu, puntosJugadores, puntosHTML);
        crearCarta(carta, turnoCompu, newImg, divCartasJugadores);
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
    determinarGanador(puntosJugadores);
}