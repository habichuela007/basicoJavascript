// Admite operador de rest y spread con objetos
const user = { username: 'gndx', age: 34 , country: 'EC'};
const { username, ...values } = user;
console.log(username);
console.log(values);