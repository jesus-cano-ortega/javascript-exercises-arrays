//Crear una funcion que encuentre el valor 4 en el array exampleArray
//Debes crear un algoritmo usando programación imperativa
//Debes crear otro algoritmo usando programación declarativa (filter, split, reduce o cualquiera de ellas que manipulen arrays)*/

const exampleArray = [10, 4, 4, 4, 4, 100, 35, 31, 23, 443, 221, 342, 10, 12, 42];

//Función que "elimina" elementos de un determinado tipo
function clearArray(arr){
    let newArr=[];
    for (let i in arr){
        if(typeof (arr[i]) === 'number'){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}


//Programación imperativa
//Función que encuentra un elemento dentro un array según el número como parámetro
function findElement(arr, number){

    let newArr = clearArray(arr); 
    //Con un loop, revisamos el array y comparamos cada elemento
    for(let i in newArr){
        if(newArr[i] == number){
            return i;
        } 
    }
    return null;
}

console.log(findElement(exampleArray, 4));


//Programación declarativa
//Opción 1: mediante búsqueda lineal utilizando indexOf --> console.log(exampleArray.indexOf(4));

//Opción 2: medinate Binary search (partimos del supuesto que se trata de un array de elementos tipo "number")
function binarySearch(arr, number){

    //Eliminamos los elementos repetidos del array para evitar múltiples resultados
    const newArray = [...new Set (arr)];

    //Ordenamos el array de menor a mayor con la función mergeSort (para descartar parte del array)
    const orderedArray = mergeSort(newArray);

    //Buscamos en que lado del array está number dividiendo el array previamente ordenado
    const left = orderedArray.splice(0, orderedArray.length/2);
    const right = orderedArray.splice(left, orderedArray.length);

    //Con un operador ternario buscamos en cada "lado" del array y devolvemos la posición del valor
    (number > left[left.length-1]) ? console.log(right.indexOf(number)) : console.log(left.indexOf(number)); 
}

binarySearch(exampleArray, 342);



/*------------- FUNCIÓN MERGESORT -------------*/

function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}

function mergeSort(array) {
    const half = array.length / 2;
    
    if(array.length < 2){
      return array; 
    }
    
    const left = array.splice(0, half);
    return merge(mergeSort(left), mergeSort(array));
  }
