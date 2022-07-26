var edad = 18;
if(edad == 18){
    console.log("Igual a 18");
} else if(edad > 18){
    console.log("Ya has votado")
} else {
    console.log("No puedes votar");
}

var numero = 1;
var resultado = numero === 1 ? "Si Soy un uno" : "No, no soy un uno";

var numero = 1;
switch (true){
    case 1:
        console.log("Soy uno");
        break;
    case 10:
        console.log("Soy un 10");
        break;
    case 100:
        console.log("Soy un 100");
        break;
    default:
  
  console.log("NO soy nada");

}

switch (false){
    case false:console.log("Soy falso")
    case true: console.log("verdadero")
}