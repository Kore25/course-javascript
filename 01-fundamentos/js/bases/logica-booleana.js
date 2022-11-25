const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}


console.warn('Not o la negacion');
console.log( true );
console.log( !true );
console.log( !false );

console.log( !regresaFalse() );

console.warn('And');
console.log( true && true );
console.log( true && !false );

console.log('========');
console.log( regresaFalse() && regresaTrue() );
console.log( regresaTrue() && regresaFalse() );

console.log('========');
regresaFalse() && regresaTrue();
console.log('4 condiciones', true && true && true && false);

console.warn('OR');
console.log(true || false);
console.log(false || false);

console.log( regresaTrue() || regresaFalse() );
console.log('4 condiciones', true || true || true || false);


console.warn('Asingaciones');
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'Hola Mundo' && 150 ;
const a2 = 'Hola' && 'Mundo' && soyFalso;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo';
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo';

console.log({ a1, a2, a3, a4, a5 });

if ( regresaFalse() && regresaTrue() && (true || false || true) ){
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
}



