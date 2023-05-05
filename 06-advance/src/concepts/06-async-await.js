import { heroes } from '../data/heroes';

/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncAwaitComponent = async (element) => {
    try {
        const id1 = '5d86371fd55e2e2a30fe1cc4';
        const id2 = '5d86371f2343e37870b91ef1';
        const { name: name1 } = await findHero(id1);
        const { name: name2 } = await findHero(id2);
        element.innerHTML = `${name1} / ${name2}`;
    } catch (error) {
        element.innerHTML = `
            <h3>Error:</h3>
            <h4>${error}</h4>
        `;
    }
}

const findHero = async(id) => {
    const hero = heroes.find( hero => hero.id === id );
    if (!hero) throw `Hero with the id ${id} not found`;
    return hero;
}