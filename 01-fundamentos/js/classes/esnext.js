

class Rectangulo {
    #area = 0;

    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }

    set setBase( base ){
        this.base = base;
        this.calcularArea();
    }

    set setAltura( altura ){
        this.altura = altura;
        this.calcularArea();
    }

    calcularArea(){
        this.#area = this.base * this.altura;
    }
}

const rectangulo = new Rectangulo(10, 15);

console.log(rectangulo);
rectangulo.setAltura = 20;
console.log(rectangulo);
rectangulo.setBase = 5;
console.log(rectangulo);
// rectangulo.#area = 100;
// console.log(rectangulo);