

const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('For tradicional');
for (let x = 0; x < heroes.length; x++) {
    console.log(heroes[x]);
}

console.warn('For in');
for (const i in heroes) {
    console.log(heroes[i]);
}

console.warn('For of');
for (const iterator of heroes) {
    console.log(iterator);
}