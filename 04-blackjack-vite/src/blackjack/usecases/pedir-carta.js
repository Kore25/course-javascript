/**
 * this function take new card from the deck
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} return the last card from the deck
 */
export const pedirCarta = (deck) => {
    if(!deck || deck.length === 0)
        throw 'No hay cartas en el deck';
    return deck.pop();
}