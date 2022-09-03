//enhanced object literals
//si el parámetro se llama como se define en la función, se pasa sin el nombre
function newUser(user, age, country, uId){
    return{
        user,
        age,
        country,
        id: uId,
    }
}

console.log(newUser("gnx", 34, "EC", 1));