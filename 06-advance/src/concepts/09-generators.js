/**
 *
 * @param {HTMLDivElement} element
 */
export const generetorsFunctionComponent = (element) => {

    // const myGenerator = myFirstGeneratorFunction();
    // console.log( myGenerator.next() );
    const genId = idGenerator();

    const button = document.createElement('button');
    button.innerHTML = 'Click me';
    element.append(button);

    const renderButton = () => {
        const { value } = genId.next();
        button.innerHTML = `Click ${value}`;
    }

    button.addEventListener('click', renderButton);
}

function* idGenerator() {
    let currentId = 0;
    while (true) {
        yield `2023-${++currentId}`;
    }
}

function* myFirstGeneratorFunction(){
    yield 'Mi primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';
    return 'Nothing here';
}