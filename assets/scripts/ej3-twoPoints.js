// Crear una función que calcule la distancia entre dos puntos usando el objeto proporcionado, se debe utilizar programación imperativa para este ejericio. 
// La funcion debe recibir dos parámetros, punto a y punto b, y calcular la distancia (resta) entre ellos.

//object
function Point(x, y) {
    
    this.x = x;
    this.y = y;

}

// La distancia (resta) entre dos puntos se calcula tal que (x2-x1, y2-y1)
const calcularResta = (point1, point2) => {

  // Con un operador ternario, verificamos si los parámetros son instancias del objeto Point
  return (point1 instanceof Point && point2 instanceof Point) 

        //En caso de ser true, calculamos la resta dentro de un punto nuevo
        ? new Point(point2.x - point1.x, point2.y - point1.y)

        //En caso de ser false, devolvemos un valor nulo 
        : null;

}

console.log(calcularResta(new Point(1,2), new Point(2,2)));
