import {heroes} from '../data/heroes';

/**
 *
 * @param {HTMLDivElement} element
 */
 export const generatorsAsyncComponent = async(element) => {
    const heroGenerator = getHeroGenerator();
    let hasHeroes = false;
    do {
        const {value, done} = await heroGenerator.next();
        hasHeroes = done;
        element.innerHTML = value;
    } while (!hasHeroes);
}

async function* getHeroGenerator(){
    for( const hero of heroes ){
        await sleep();
        yield hero.name;
    }

    return 'no hay mas';
}

const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    })
}