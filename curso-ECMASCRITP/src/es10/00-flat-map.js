// nos devuelve una matriz de cualquier submatriz (arreglos anidados)
const array = [1,1,2,3,4, [1,3,4,6, [1,2,4]]];
console.log(array.flat(3)); //le pasamos la profundidad como parámetro

// flatmap
const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v =>[v, v * 2]));