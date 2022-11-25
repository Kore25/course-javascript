// function createPerson(nombre, apellido) {
//     return { nombre, apellido}
// }

const createPerson = (nombre, apellido) => ({ nombre, apellido});

const persona = createPerson('Luis', 'Flores');

console.log(persona);


function printArguments () {
    console.log( arguments );
}

const printArguments2 = (edad, ...args ) => {
    // console.log( edad, args );
    return args;
}

const [casado, vivo, nombre, saludo] = printArguments2(10, true, false, 'Luis', 'Hola');
console.log({casado, vivo, nombre, saludo});


const { apellido } = createPerson('Luis', 'Flores');
console.log({apellido});


let tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark 1', 'Mark 5', 'Hulkbuster'],
};


const printArguments3 = ({ nombre, codeName, vivo, edad = 15, trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

printArguments3(tony);