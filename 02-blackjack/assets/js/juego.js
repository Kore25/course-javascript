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
        deck = crearDeck();
        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }
        btnDetener.disabled = false;
        btnPedir.disabled = false;
        puntosHTML.forEach( p => p.innerText = 0 );
        divCartasJugadores.forEach( p => p.innerHTML = "" );
    }

    //This fuction make a new deck
    const crearDeck = () => {
        deck = [];
        for( let i = 2; i <= 10; i++){
            for (const tipo of tipos) {
                deck.push(i + tipo);
            }
        }
        for (const esp of especiales) {
            for( let tipo of tipos){
                deck.push(esp + tipo);
            }
        }
        return _.shuffle(deck);
    }

    //this function make me to take new card
    const pedirCarta = () => {
        if(deck.length === 0){
            throw 'No hay cartas en el deck';
        }
        return deck.pop();
    }

    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);
        return (isNaN(valor) ? (valor === 'A' ? 11 : 10) : valor * 1);
    }

    //turno: 0 es el primer jugador y el ultimo es la computadora
    const acumularPuntos = ( carta, turno ) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);
    }

    const determinarGanador = () => {
        const [puntosMinimos, puntosComputadora] = puntosJugadores;
        setTimeout(() => {
            if ( puntosComputadora === puntosMinimos ) {
                alert('Nadie gana.');
            } else if ( puntosMinimos > 21 ){
                alert('Computadora gana.');
            } else if( puntosComputadora > 21 ){
                alert('Jugador gana');
            } else {
                alert('Computadora gana');
            }
        }, 30);
    }

    // Eventos
    const turnoComputadora = ( puntosMinimos ) => {
        let puntosComputadora = 0;
        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
            crearCarta(carta, puntosJugadores.length - 1);
        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
        determinarGanador();
    }

    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);
        crearCarta(carta, 0);

        if (puntosJugador > 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        } else if (puntosJugador == 21){
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }
    });

    btnDetener.addEventListener('click', () => {
        btnDetener.disabled = true;
        btnPedir.disabled = true;
        turnoComputadora(puntosJugadores[0]);
    });

    btnNuevo.addEventListener('click', () => {
        inicializarJuego();
    });

    return { nuevoJuego: inicializarJuego };
})();


