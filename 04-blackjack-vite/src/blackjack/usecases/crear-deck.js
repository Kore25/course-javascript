import { shuffle } from "underscore";

/**
 * This function create new deck
 * @param {array<string>} tiposDeCarta
 * @param {array<string>} tiposEspeciales
 * @returns {array<string>} return new deck
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    if (!tiposDeCarta) throw new Error('Tipos de cartas es obligatorio');
    if (!tiposEspeciales) throw new Error('Tipos de cartas es obligatorio');
    let deck = [];
    for( let i = 2; i <= 10; i++){
        for (const tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }
    for (const esp of tiposEspeciales) {
        for( let tipo of tiposDeCarta){
            deck.push(esp + tipo);
        }
    }
    return shuffle(deck);
}
