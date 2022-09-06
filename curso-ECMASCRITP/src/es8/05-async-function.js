//Mas promesas async awake
const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('AsynC!'),2000)
            : reject(new Error('Error'));
    });
}

const anotherFn = async () => { //antes de los argumentos tenemos la palabra reservada async
    const something = await fnAsync(); //podemos probar el comportamiento sin las palabras reservadas
    console.log(something);
    console.log('Hello World');
} // los bloques no deben ser bloqueantes, el siguiente bloque debe ejecutarse pase lo que pase

console.log('Before');
anotherFn();
console.log('After');