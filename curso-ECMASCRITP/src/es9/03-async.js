async function* anotherGenerator(){ //asterisco ara activar la función
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(Response => console.log(Response.value)); // next me permite  pedir los valores que genera la función, the -> que va a pasar
other.next().then(Response => console.log(Response.value));
other.next().then(Response => console.log(Response.value));
other.next().then(Response => console.log(Response.value));
console.log('Hello!');

async function arrayOfNames(array) {
    for await (let value of array){
        console.log(value);
    }
}

const names = arrayOfNames(['Gabriel', 'David', 'Carlos']);
console.log('After'); // el code no se bloquea, entra de todas maneras en el loop