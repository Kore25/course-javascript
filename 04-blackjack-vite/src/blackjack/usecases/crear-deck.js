import { shuffle } from "underscore";

/**
 * This function create new deck
 * @param {Array<String>} tiposDeCarta Example ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Example ['A','J','Q','K'];
 * @returns {Array<String>} return new deck
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    if (!tiposDeCarta || tiposDeCarta.length === 0 ) throw new Error('Tipos de cartas es obligatorio como un arreglo de string');
    if (!tiposEspeciales || tiposDeCarta.length === 0) throw new Error('Tipos de cartas es obligatorio como un arreglo de string');
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
