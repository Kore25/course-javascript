const superHeroes = [
    {
        id: 1,
        name: 'batman',
    },
    {
        id: 2,
        name: 'super-man',
    },
    {
        id: 3,
        name: 'flash',
    },
    {
        id: 4,
        name: 'aquaman',
    }
];

const array2 = JSON.parse( JSON.stringify(superHeroes));

const superHeroesCopy = structuredClone(superHeroes);

superHeroesCopy[0].name = 'Green Lantern';

console.table( superHeroes );
console.table( superHeroesCopy );