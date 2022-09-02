// DEPRECATED METHOD
function newUser(name, age, country){
    var name = name || 'OScar';
    var age = age || 37;
    var country = country || 'MX';
    console.log(name, age, country);
}

newUser();
newUser('David',15,'CO')

// NEW METOD SINCE ES6 without var
 function newAdmin(name = 'Oscar', age = 32, country = 'CL'){
    console.log(name, age, country);
 }

 newAdmin();
 newAdmin('Anna',28, 'PE');