var frutas = ["Manzana","platano","Cereza","Fresa"];
console.log(frutas);

console.log(frutas.length);

console.log([0]);


//ingresar elemento al final del array
var masfrutas = frutas.push("Uvas")

// borrar elemento del array
var ultimo = frutas.pop("Uvas");

//ingresar elemento al principio del array
var principio = frutas.unshift("Uvas");

// borrar la fruta que esta al principio del array siempre y cuando coincida
var borrarfruta = frutas.shift("Uvas");

//obtener index del elemento
var posicion = frutas.indexOf("Cereza")

let numArray = [1,2,3,4,5]

function newNum(){
    numArray.push(6,7)
}

//shift() elimina el elemento de index cero
//pop() elimina el elemento del último índice

