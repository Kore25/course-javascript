class Persona{

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' intancias';
    }
    static mensaje() {
        console.log( this.nombre );
        console.log('Hola a todos soy un metodo estatico');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor( nombre = 'Sin Nombre', codigo = 'Sin codigo', frase = 'Sin frase' ){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de: ${this.nombre} es ${this.comida}`;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${ this.codigo} dice: ${this.frase}`);
    }
}

const spiderman = new Persona('Peter parker', 'Spiderman', 'Soy tu amigable vecino spiderman');
const ironman = new Persona('Tony Stark', 'Iroman', 'Yo soy iroman');

// console.log(ironman);

// ironman.miFrase();
// spiderman.miFrase();

spiderman.setComidaFavorita = 'El pay de cereza de la tía may';
// console.log(spiderman.getComidaFavorita);
// console.log(spiderman);

// Persona._conteo = 2;
console.log('Conteo stático', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();



// No se recomienda crear propiedades staticas fuera de la clase a un que si es posible4
// Persona.propiedadExterna = 'Hola mundo';
// console.log(Persona.propiedadExterna);
// console.log(Persona);
