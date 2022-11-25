

const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];
let i = 0;
// while( i < carros.length ){
//     console.log(carros[i]);
//     i ++;
// }

// undefined
// null
// false
// son valores que se consideran codiciones falsas
while( carros[i] ){
    // if( i === 2 ) break;
    if( i === 1 ) {
        i++;
        continue;
    }
    console.log(carros[i]);
    i++;
}


console.warn('Do while');
let x = 0;
do{
    console.log(carros[x]);
    x++;
}while(carros[x]);