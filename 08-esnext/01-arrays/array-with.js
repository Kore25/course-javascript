const state = [
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

const index = 1;
const newName = 'Green Lantern';

// const newState = state.map( (hero, i) => {
//     if(index === i) {
//         hero.name = newName;
//     }
//     return {...hero};
// });
const newState = state.with(index, {
    ...state.at(index),
    name: newName
});

state[0].name = 'Volcan Negro';

console.table( newState );

console.log('El último: ', state.at(-1));
