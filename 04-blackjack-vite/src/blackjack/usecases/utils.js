import { valorCarta } from "./";

/**
 * Add point to the board
 * @param {String} carta Card value
 * @param {Number} turno Turn of the player
 * @param {Array} puntosJugadores array with the players number
 * @returns {Number}
 */
export const acumularPuntos = ( carta, turno, puntosJugadores, puntosHTML ) => {
    if (!carta) throw new Error('carta es requerido');
    if (turno === null || turno === undefined || turno < 0) throw new Error('turno es requerido');
    if (!puntosJugadores) throw new Error('puntosJugadores es requerido');
    if (!puntosHTML) throw new Error('puntosHTML es requerido');

    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}

/**
 * Show the card on the dashboard
 * @param {String} carta card name of the image
 * @param {Number} turno Turn of the player
 * @param {HTMLElement} imgCarta HTMLElement img card
 * @param {HTMLElement} divCartasJugadores divCartasJugadores to add the card
 */
export const crearCarta = (carta, turno, imgCarta, divCartasJugadores) => {
    // const imgCarta = document.createElement('img');
    if (!carta) throw new Error('carta es requerido');
    if (turno === null || turno === undefined || turno < 0) throw new Error('turno es requerido');
    if (!imgCarta) throw new Error('imgCarta es requerido');
    if (!divCartasJugadores) throw new Error('divCartasJugadores es requerido');

    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);
}

/**
 * Send alert with the result of the game
 * @param {Array<Number>} puntosJugadores Its array
 */
export const determinarGanador = ( puntosJugadores ) => {
    if (!puntosJugadores) throw new Error('puntosJugadores es requerido');
    const smallContadores = document.querySelectorAll('h3');
    let countPlayer = smallContadores[0].innerText;
    let countComputer = smallContadores[1].innerText;
    const [puntosMinimos, puntosComputadora] = puntosJugadores;
    setTimeout(() => {
        if ( puntosComputadora === puntosMinimos ) {
            countPlayer ++;
            countComputer ++;
            alert('Nadie gana.');
        } else if ( puntosMinimos > 21 ){
            countComputer ++;
            alert('Computadora gana.');
        } else if( puntosComputadora > 21 ){
            countPlayer ++;
            alert('Jugador gana');
        } else {
            countComputer ++;
            alert('Computadora gana');
        }
        smallContadores[0].innerText = countPlayer;
        smallContadores[1].innerText = countComputer;
    }, 30);
}