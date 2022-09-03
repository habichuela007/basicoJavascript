// generador es un tipo especial de funcion que nos va retornar una serie de valores seg[un el algoritmo definido
function* iterate (array){
    for (let value of array){
        yield value;
    }
}

const it = iterate(['Gabriel', 'David', 'Ana', 'Ulises', 'Jennifer']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);//la función generador recuerda el estado, pilas con el UNDEFINED