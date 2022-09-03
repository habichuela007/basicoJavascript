// Arrays destructuring

let fruits = ['Apple','Banana'];
let[a,b] = fruits; //asigno la posicion a una variable
console.log(a,b)
console.log(fruits[0],fruits[1]);

//Objects destructuring
let user = {username: 'Oscar',age:37};
let {username,age} = user;
console.log(username,age);
console.log(user.username,user.age);

//spread operator
let person = {name:'Gabriel', age: 28};
let country = 'EC';

// tres puntos lo que encuentre en el OBJETO, lo trae y agrega al nuevo
//let data = {...person,country};
let data = {id:1, ...person, country}; // add data in any way, spread operator
console.log(data);

//rest
function sum(num,...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1,7,2,3,4,5);

// pensar la lógica para que no tenga más de tres 