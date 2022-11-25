let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70,
    },
    trajes: ['Mark 1', 'Mark 5', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California',
    },
    'ultima-pelicula': 'infinity war',
};

console.log(personaje);
console.log('Nombre:', personaje.nombre);
console.log('Nombre:', personaje['nombre']);
console.log('Edad:', personaje.edad);
console.log('Coors:', personaje.coords.lat);


console.log('Np. Trajes:', personaje.trajes.length);
console.log('Ultimo Traje:', personaje.trajes[ personaje.trajes.length -1]);

const x = 'vivo';
console.log('Vivo:', personaje[x]);

console.log('Ultima Pelicula:', personaje['ultima-pelicula']);

// mas detalles

delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries( personaje );
console.log( entriesPares );

//Hacer bloqueo de las propiedades del objeto
Object.freeze( personaje );
personaje.dinero = 1000000000000;
personaje.casado = false;
//No Bloquea las propiedades de los objetos dentro del objeto
personaje.direccion.ubicacion = 'Costa rica';
console.log(personaje);


const propiedades = Object.getOwnPropertyNames( personaje );
const valores = Object.values( personaje );
console.log({propiedades, valores});