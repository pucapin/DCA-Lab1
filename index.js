import _ from 'lodash'


// Desafíos Fáciles
//________________________________

// Inversión de un arreglo
//________________________________

const numeros = [1, 2, 3, 4, 5];

console.log("Arreglo: " + numeros);
console.log("Arreglo Inverso: " + _.reverse(numeros));

//________________________________

// Eliminar Valores Falsy

const valores = [0, "Hola", false, 42, "", null, "Mundo", undefined, NaN, true];

console.log("Valores: " + valores);
console.log("Valores sin valores Falsy: " + _.compact(valores));

//________________________________

// Unión de Arreglos - Unir sin duplicar

const array1 = [1, 2, 3]; 
const array2 = [3, 4, 5];

console.log("Unión array1 y array2: " + _.uniq(_.concat(array1, array2))); 

//_.uniq() -> Creates a duplicate-free version of an array

//____________________________________

// Frecuencia de Elementos:

const palabras = ["hola", "mundo", "hola", "javascript", "mundo", "hola"];

console.log(_.countBy(palabras));

//______________________________________

// Encontrar la Diferencia:

const arr1 = [1, 2, 3, 4, 5];  
const arr2 = [3, 4, 5, 6, 7];

console.log(_.pullAll(arr1, arr2));

//_______________________________________

// Ordenar por Propiedad: 
// MENOR A MAYOR

const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 22 },
    { nombre: "Juan", edad: 30 }
    ];
    

console.log(_.sortBy(personas, 'edad'));

//Creates an array of elements, sorted in ascending 
// order by the results of running each element in a 
// collection thru each iteratee.


// ________________________________________

// Obtener Valores Únicos: 

const numerosRepetidos = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];

const noDupes = _.uniq(numerosRepetidos);
const repeated = _.filter(numerosRepetidos, (val, i, iteratee) => _.includes(iteratee, val, i + 1));

// En lodash ya no existe _.duplicates(), entonces toca filtrar todo para obtener
//esos valores

console.log(_.difference(noDupes, repeated));

//tampoco existe _.uniques(), entonces para encontrar los valores unicos
//hay que quitar de nuevo los que estaban duplicados del nuevo array sin duplicados


//__________________________________________

//Dividir un arreglo en Grupos

const n = 3; 
const elementos = ["a", "b", "c", "d", "e", "f", "g", "h"];





//__________________________________________