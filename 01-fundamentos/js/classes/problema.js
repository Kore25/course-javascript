const luis = {
    nombre: 'Luis',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${ this.nombre }, edad: ${ this.edad }`);
    }
}

const carlos = {
    nombre: 'Carlos',
    edad: 15,
    imprimir() {
        console.log(`Nombre: ${ this.nombre }, edad: ${ this.edad }`);
    }
}

// luis.imprimir();
// carlos.imprimir();

function Persona(nombre, edad) {
    console.log('Se ejecuto esta linea');

    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function() {
        console.log(`Nombre: ${ this.nombre }, edad: ${ this.edad }`);
    }
}

const maria = new Persona('Maria', 18);
console.log(maria);
maria.imprimir();

const johana = new Persona('Johana', 30);
johana.imprimir();