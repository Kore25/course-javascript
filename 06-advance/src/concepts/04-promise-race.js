/**
 *
 * @param {HTMLDivElement} element
 */
 export const promisesRaceComponent = (element) => {
    element.innerHTML = 'Loading ...';
    const renderValue = (value) => {
        element.innerHTML = value;
    }

    Promise.race([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
        mediumPromise(),
        slowPromise(),
        fastPromise(),
    ]).then( value => renderValue(value));
}


const slowPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('Slow promise');
        return;
    }, 2000);
});

const mediumPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('Medium promise');
        return;
    }, 1500);
});

const fastPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('Fast promise');
        return;
    }, 1000);
});