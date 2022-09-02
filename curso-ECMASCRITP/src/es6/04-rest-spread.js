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