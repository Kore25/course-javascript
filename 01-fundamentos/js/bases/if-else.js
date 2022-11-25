let a = 15;

if ( a >= 10 ){
    console.log('a es mayor 0 igual a 10');
} else {
    console.log('a es menor de 10');
}

// console.log('Fin del programa');

const hoy = new Date();
let dia = hoy.getDay();

console.log( {dia} );

// if (dia === 0){
//     console.log('Domingo');
// }else if(dia === 1){
//     console.log('Lunes');
// }else if(dia === 2){
//     console.log('Martes');
// }else{
//     console.log('No es domingo ni lunes ni martes');
// }

// dia = 20;
const weekDays = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado',
};

console.log('The day is:', weekDays[dia] || 'día no definido');