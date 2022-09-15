try{
    hello();
} catch (error){
    console.log(error);
}

try {
    anotherFunction();
} catch {
    console.log('Esto es un error') //personalizar el mensaje de error, no voy a ver el log del error
}