let juegos = ['Zelda', 'Mario', 'Metroid', 'Tetris'];
console.log('Largo:', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log('Primero:', primero, 'Ultimo:', ultimo);

juegos.forEach( (item, index, arr) => {
    console.log({ item, index, arr});
});

let nuevaLongitud = juegos.push('F-Zero');
console.log({nuevaLongitud, juegos});

nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({nuevaLongitud, juegos});

let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

let posicion = 1;
let juegosBorrados = juegos.splice(posicion, 2);
console.log({juegosBorrados, juegos});


let metroidIndex = juegos.indexOf('Metroid'); //CaseSensitive
console.log({metroidIndex});

