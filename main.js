
//ejercicicos de  push y pop

    let frutass = [];
    console.log(frutass)
    frutass.push("manzana")
    console.log(frutass)
    frutass.push("naranja","banana");
    console.log(frutass)

    frutass.pop()
    console.log(frutass)


// ejercicios join y split

    let nombre = ["Alberto Fernandez","Maria Garcia","Pedro Sanchez"];
    console.log(nombre);

    let nombreCompletoss = nombre.join(", ");
    console.log(nombreCompletoss);

    let arrayNombreCompletoss = nombreCompletoss.split("-");

    console.log(arrayNombreCompletoss)




// Ejercicio de slice y splice:

    let numeros = [1,2,3,4,5];
    console.log(numeros);

    let subArray = numeros.slice(2)
    console.log(subArray)

    let eliminar = numeros.splice()
    console.log(eliminar)

    //ejerccico de map:

    let doble = numeros.map(num => num * 2);
    console.log(doble);
    console.log(numeros);
    console.log()

// Ejerciico de  filter

let edades = [18,25,12,30,15];
console.log(edades);
let mayoresDeEdad = edades.filter(edad => edad >= 18);
console.log(mayoresDeEdad);


//ejercicios básicos:

    let colores = ["rojo","verde","azul"];
    console.log(colores);
    let longitud = colores.length;
    console.log(longitud);

    let numero4=["1","3","5","3","7","3"];
    console.log(numero4)
    let primeraAparicion = numero4.indexOf("3");
    console.log(primeraAparicion)
    let ultimaApareicion = numero4.lastIndexOf("3");
    console.log(ultimaApareicion)

//console-log("primeraAparicion:" + primeraAparicion) ;
//console.log("ultimaApareicion:" + ultimaApareicion);



    let frutas = ["manzana", "banana", "naranja"];
    let contienePera = frutas.includes("pera");
    console.log(contienePera);


    let letras = ["a","b","c","d"];
    letras.reverse();
    console.log(letras);


    let numeros1 = [5,2,9,1,7];
    numeros1.sort((a,b) => a - b);
    console.log(numeros1);


    let nombres1 =["juan","maria"]
    console.log(nombres1)
    let nombres2 = ["pedro","laura"];
    console.log(nombres2)
    let nombreCompleto = nombres1.concat(nombres2);
    console.log(nombreCompleto);

    let edadess= [22, 35, 28, 42];
    console.log(edadess);
    let todasMayoresDe18 = edadess.every(edad => edad > 18);
    console.log(todasMayoresDe18);


    let notas = [7, 5, 9, 3];
    let algunaMayorIgualA8 = notas.some(nota => nota >= 8);
    console.log(algunaMayorIgualA8);

    let numeros7 = [1, 2, 3, 4, 5];
    let suma = numeros7.reduce((acumulador, numero) => acumulador + numero, 0);
    console.log(suma);

// ejercicios aplicados en funciones

//problemas de suma de elemento:
    function sumarElementos(array) {
    if (array.length === 0) {
      return 0;
    }
   let suma = array.reduce((acumulador, elemento) => acumulador + elemento);
  
    return suma;
  }

    const array1 = [1, 2, 3, 4, 5];
    console.log(sumarElementos(array1)); 

    const array2 = [10, 20, 30];
    console.log(sumarElementos(array2));
    const array3 = [];
    console.log(sumarElementos(array3)); 

 //problema de promedio de calificaciones:

    function calcularPromedio(calificaciones) {
        
        if (calificaciones.length === 0) {
          return 0;
        }
        let suma = calificaciones.reduce((acumulador, calificacion) => acumulador + calificacion);
        let promedio = suma / calificaciones.length;
      
        return promedio;
      }
        let calificaciones1 = [8, 7, 9, 6, 8];
        console.log(calcularPromedio(calificaciones1));
        const calificaciones2 = [10, 9, 9.5, 8.5];
        console.log(calcularPromedio(calificaciones2)); 
        const calificaciones3 = [];
        console.log(calcularPromedio(calificaciones3)); 

      //problema de búsqueda de palabras:

            function buscarPalabra(array, palabra) {
        let encontrada = array.includes(palabra);
          return encontrada;
      }
      
        let array4 = ["lápiz", "goma", "cuaderno", "cartuchera"];
        console.log(buscarPalabra(array4, "goma"));

        let array5 = ["patio", "salon", "dirección"];
        console.log(buscarPalabra(array5, "escritorio"));

        let array6 = [];
        console.log(buscarPalabra(array6, "escuela")); 

    // problemas de eliminación de duplicados:

    function eliminarDuplicados(array) {
        let arraySinDuplicados = [...new Set(array)];
      
        return arraySinDuplicados;
      }

      let array7= [10, 20, 30, 30, 40, 50, 50];
        console.log(eliminarDuplicados(array7)); 

        let array8 = ["ae", "be", "ce", "be", "de", "el", "el"];
        console.log(eliminarDuplicados(array8)); 

        let array9 = [true, false, true, false];
        console.log(eliminarDuplicados(array9)); 

    //problemas de ordenación de números:

function ordenarNumeros(array) {
  
    let arrayOrdenado = array.sort((a, b) => a - b);

     return arrayOrdenado;
}

    let array11 = [31, 11, 14, 12, 15];
    console.log(ordenarNumeros(array11)); 

    let array12 = [10, 15, 18, 12, 11];
    console.log(ordenarNumeros(array12)); 

    let array13 = [71, 31, 91, 61];
    console.log(ordenarNumeros(array13)); 

    //prolema de conteo de elementos:

    function contarElementos(array, elemento) {
        let elementosCoincidentes = array.filter(item => item === elemento);
        return elementosCoincidentes.length;
      }
        let array14 = [12, 22, 32, 22, 12, 42, 22, 52];
         console.log(contarElementos(array14, 22)); 

        let array15 = ["aa", "bb", "cc", "bb", "dd", "ee", "ee"];
        console.log(contarElementos(array15, "ee")); 

        let array16 = [];
        console.log(contarElementos(array16, 1)); 

    //Problema de mezcla de arrays:

    function mezclarArrays(array17, array18) {
        let arrayMezclado = array17.concat(array18);
        return arrayMezclado;
      }
        let array17 = [1, 2, 3];
        let array18 = [4, 5, 6];
        console.log(mezclarArrays(array17, array18)); 

        let array19 = ["ei", "bi"];
        let array20 = ["ci", "di", "i"];
        console.log(mezclarArrays(array19, array20)); 

        let array21 = [];
        let array22 = [18, 24, 32];
        console.log(mezclarArrays(array21, array22)); 

        let array23 = ["y"];
        let array24= [];
        console.log(mezclarArrays(array23, array24)); 


            




