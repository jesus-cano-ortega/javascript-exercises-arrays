//Crear una función que compare los valores de Array2 y Array1 pero que se fije en el tipo
//Para comparar ambas arrays, estas deben tener la misma dimensión
const array1 = [10, 4, 100, 35, 31, 23, 443, 221, 342, 10, 12, 42];
const array2 = [[10, 4, "100", 35, "31", "23", 443, "221", "342", 10, 12, 42]]; 


//Función que pasa todos los valores de un array a una misma dimensión
const reloadArray = (arr, newArray = []) => {

    //Control de errores que corta la función en caso de no tener un array como parámetro
    if(!Array.isArray(arr)) {
        if(!typeof newArray === 'undefined') return newArray; 
        else return "Error al cargar el array";
    }
        
    //Para cada elemento del array, comparamos su tipo y lo envíamos a un nuevo array (y repetimos el proceso -> recursividad)
    arr.forEach((item) => {
        if(typeof item === 'number' || typeof item === 'string') newArray.push(item);
        return reloadArray(item, newArray); 
    });   

    //Devolvemos el array final con todos los elementos en una misma dimensión
    return newArray; 

}


//Función que compara el tipo de dos arrays
const compareTwoArrays = (arr1, arr2) => {

    //Pasamos cada array a una misma dimensión con reloadArray
    let reviewArray1 = reloadArray(arr1);
    let reviewArray2 = reloadArray(arr2);

    console.log(reviewArray1);
    console.log(reviewArray2);

    //Si la longitud de ambas arrays coincide, comparamos el tipo de los elementos
    if(reviewArray1.length == reviewArray2.length){
        for(let i in reviewArray1){
            if (typeof(reviewArray1[i]) != typeof(reviewArray2[i])) return `Diferente tipo en posición ${i}`;
        }
        return `Todos los elementos són del mismo tipo`
    
    } else {

        return `Arrays de diferente longitud`;
    }
}

console.log(compareTwoArrays(array1, array2));