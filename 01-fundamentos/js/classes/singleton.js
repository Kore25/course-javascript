class Singleton {

    static instancia; // undefined
    nombre = '';

    constructor( nombre = '' ) {
        // console.log(this.instancia);
        if( !!Singleton.instancia ) {
            return Singleton.instancia;
        }
        Singleton.instancia = this;
        this.nombre = nombre;
    }
}

const intancias1 = new Singleton('Ironman');
const intancias2 = new Singleton('Spiderman');
const intancias3 = new Singleton('Black');
console.log(`Nombre de la intancias1 es: ${intancias1.nombre}`);
console.log(`Nombre de la intancias1 es: ${intancias2.nombre}`);
console.log(`Nombre de la intancias1 es: ${intancias3.nombre}`);