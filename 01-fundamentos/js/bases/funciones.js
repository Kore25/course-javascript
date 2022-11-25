function saludar(nombre){
    // console.log(arguments);
    // console.log('Hola', nombre);
    return [1,2];
    //When the return no exist the default value to return will be undefined
}

// const saludar2 = function(nombre) {
//     console.log('Hola', nombre);
// }

// const saludarFlecha = () => {
//     console.log('Hola Flecha');
// } 

const retorno = saludar('Luis', 40, true, 'Mexico');
// console.log(retorno[0], retorno[1]);
// saludar2('Carlos');
// saludarFlecha();



function sumar(a , b){
    return a + b;
}

// const sumar2 = (a ,b) => {
//     return a + b;
// }


const sumar2 = (a ,b) =>  a + b;

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();
console.log( getAleatorio2() );