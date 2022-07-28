## Respuestas al Test de JavaScript

Recuerda que estas respuestas (o al  menos la mayoría) NO SON ABSOLUTAS. Es completamente válido (en la mayoría de casos) si tienes otras respuestas. Recuerda que podemos discutirlo en la sección de comentarios del curso. :D


## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?
- ¿Cuál es la diferencia entre declarar e inicializar una variable?
- ¿Cuál es la diferencia entre sumar números y concatenar strings?
- ¿Cuál operador me permite sumar o concatenar?

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre
- Apellido
- Nombre de usuario en Platzi
- Edad
- Correo electrónico
- Mayor de edad
- Dinero ahorrado
- Deudas

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)


## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?
Forma de encapsular lotes de código
- ¿Cuándo me sirve usar una función en mi código?
- ¿Cuál es la diferencia entre parámetros y argumentos de una función?
las funciones reciben parámetros cuando las creamos y reciben argumentos cuando las llamamos

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```
function nombreCompleto(nombre,apellido){
    return nombre + " " + apellido;
}

## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?
Ejecutar bloques de código que ejecutamos dependeideno si se cumple o no una condición
- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
If, else, else if, switch
- ¿Puedo combinar funciones y condicionales?


### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏


## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?
Ejecutar un código hasta que se cumpla una condición
- ¿Qué tipos de ciclos existen en JavaScript?
While, do while, for
- ¿Qué es un ciclo infinito y por qué es un problema?
VAlidación que no se cumple  *(TOTEA al navegador)
- ¿Puedo mezclar ciclos y condicionales?
calro que yes
### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

while (i < 5){
    console.log("El valor de i es: " + i);
    i++;
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
``js
while (respuesta!=4){
    let pregunta = prompt('Cuánto es 2 + 2?')
    respuesta = pregunta
}
### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: puedes usar la función prompt de JavaScript.


## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?
Es una matriz. Es una lista de elementos

- ¿Qué es un objeto?
Es una lista de elemtos y cada uno tiene un nombre clave

- ¿Cuándo es mejor usar objetos o arrays?
SI no vamos a tratar los elemtos de manera diferente, es mejor el array
Si necesitamos pripiedades o tratamientos espec[ificos, el objeto]

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
perro claro

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
object.values(obj)

(3) ['Fulanito', 3, Array(2)]0: "Fulanito"1: 32: (2) ['Pollo', 'Vegetales']length: 3[[Prototype]]: Array(0)
const  tipoSuscripcion = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    ExpertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
}

function conseguirTipoSusucripcion(suscripcion){
    if(tipoSuscripcion[suscripcion]){
        console.log(tipoSuscripcion[suscripcion]);
        return;
    }
    console.warn('Esa no existe')
}

