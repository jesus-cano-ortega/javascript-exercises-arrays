// Crear una funcion que limpie el array "shit" usando programación declarativa (split, join o cualquiera de ellas). 
// La función solo debe dejar los elementos tipo strings como resultado.

const shit = ["function", null, function() {}, () => {}, 10, 100, {}];

// Filtramos el array con el método filter, y para cada valor que pasamos evaluamos el tipo
const myArray = shit.filter(value => typeof(value) === 'string');

console.log(myArray); 