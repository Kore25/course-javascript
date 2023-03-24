import { crearDeck, pedirCarta, valorCarta, turnoComputadora, acumularPuntos, crearCarta } from './usecases';

const myModule = (() => { //Patron modulo
  'use strict'
  let deck = [];
  const tipos = ['C','D','H','S'],
        especiales = ['A','J','Q','K'];

  let puntosJugadores = [];

  const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo');

  const puntosHTML = document.querySelectorAll('small');

  const divCartasJugadores = document.querySelectorAll('.divCartas');

  const inicializarJuego = ( numJugadores = 2 ) => {
      deck = crearDeck(tipos, especiales);
      puntosJugadores = [];
      for (let i = 0; i < numJugadores; i++) {
          puntosJugadores.push(0);
      }
      btnDetener.disabled = false;
      btnPedir.disabled = false;
      puntosHTML.forEach( p => p.innerText = 0 );
      divCartasJugadores.forEach( p => p.innerHTML = "" );
  }

  // Eventos
  btnPedir.addEventListener('click', () => {
      const carta = pedirCarta(deck);
      const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML);
      crearCarta(carta, 0, document.createElement('img'), divCartasJugadores );

      if (puntosJugador > 21) {
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugador, puntosJugadores, document, divCartasJugadores, puntosHTML, deck);
      } else if (puntosJugador == 21){
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugador, puntosJugadores, document, divCartasJugadores, puntosHTML, deck);
      }
  });

  btnDetener.addEventListener('click', () => {
      btnDetener.disabled = true;
      btnPedir.disabled = true;
      const puntosJugador = puntosJugadores[0];
      turnoComputadora(puntosJugador, puntosJugadores, document, divCartasJugadores, puntosHTML, deck);
  });

  btnNuevo.addEventListener('click', () => {
      inicializarJuego();
  });

  return { nuevoJuego: inicializarJuego };
})();
