class Persona {

    static porObjeto ( { nombre, apellido, pais } ) {
        return new Persona( nombre, apellido, pais );
    }

    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo(){
        console.log(`Info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}

const nombre1 = 'Johana',
apellido1 = 'Esqueda',
pais1 = 'Mexico';

const luis = {
    nombre: 'Luis',
    apellido: 'Flores',
    pais: 'Mexico'
}

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto(luis);
persona1.getInfo();
persona2.getInfo();