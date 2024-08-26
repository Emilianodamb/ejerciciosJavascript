console.log("funciona");

/*
Ejercicio 1: Contar letras en una palabra
Problema: Escribe una función que tome una palabra como argumento 
y devuelva un objeto donde las claves sean las letras de la palabra 
y los valores sean la cantidad de veces que aparece cada letra.*/
/*
const word = "Banana";
const result = countLetters(word);
console.log(result);
// { b: 1, a: 3, n: 2 }

function countLetters(word) {
    const letterCount = {}; //CREO UN OBJETO VACÍO PARA ALMACENAR CADA LETRA QUE APAREZCA EN EL STRING

    for (let char of word) {     //BUCLE QUE ITERA SOBRE CADA ELEMENTO DEL DATO RECIBIDO POR PARAMETRO
        if (letterCount[char]) {    //DIFICIL ---> VERIFICA SI EL ELEMENTO YA ES UNA CLAVE EN EL OBJETO NUEVO
            letterCount[char]++;    //SI YA ES UNA CLAVE LE SUMA UNO
        } else {
            letterCount[char] = 1;  //SI NO ES UNA CLAVE +CREA+ LA CLAVE CON EL VALOR INICIAL DE 1
        }
    }

    return letterCount; //DEVUELVE EL OBJETO CON LAS CLAVES DE LOS ELEMENTOS Y LA CANTIDAD DE APARICIONES
}

console.log(countLetters(word));

*/
//-------------------------------------------

/*
Ejercicio 2:
Problema: Escribe una función que tome una lista de palabras y un número, 
y devuelva una nueva lista con las palabras que tienen una longitud mayor o igual al número dado.
*/


/*
function filterByLength(listaDePalabras, numero) {
    const nuevaLista = []

    for (const palabra of listaDePalabras) {
        if (palabra.length >= numero) {
            nuevaLista.push(palabra)
        }   
    }
    return nuevaLista
}


const words = ["tren", "auto", "bicicleta", "avión","velero", "ras"];
const result = filterByLength(words, 5);

console.log(result)
*/

//---------------------------------------------------------------------

/*
Ejercicio 3: Comprobar si una palabra es un palíndromo
Problema: Escribe una función que verifique si una palabra es un palíndromo 
(una palabra que se lee igual al derecho y al revés).
*/
/*
const word = "Anita lava la tina";

function esPalindromo(string) {
    // Elimina todos los espacios en blanco y convierte a minúsculas
    string = string.replace(/\s+/g, '').toLowerCase();

    // Invierte la cadena
    const text = string.split('').reverse().join('');

    // Compara la cadena original con la invertida
    return string === text;
}

const result = esPalindromo(word);
console.log(result); 
// true
*/

//--------------------------------------------------------------

/*
Ejercicio 4: Crear una lista de números pares
Problema: Escribe una función que tome un número como argumento 
y devuelva una lista con todos los números pares desde 2 hasta ese número.
*/
/*
const number = 18;

function devolverParesHasta(numero) {
    const paresHasta = []
    for (let i = 2; i <= numero; i = i+2){
        paresHasta.push(i)
    }
    return paresHasta
}

const result = devolverParesHasta(number);
console.log(result); 
// [2, 4, 6, 8, 10]
*/


//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
// SEGUNDA TANDA DE EJERCICIOS:



/*
Ejercicio 1: Contar Vocales
Descripción: Escribe una función que cuente la cantidad de vocales en una cadena de texto. 
La función debe ser insensible a mayúsculas y minúsculas.
*/
/*
const phrase = "Hola Mundo";

function contarVocalesEn(texto){
    texto = texto.toLowerCase()
    let cantidadVocales = 0

    for (const char of texto){
        if (char === "a" || 
            char === "e" || 
            char === "i" || 
            char === "o" || 
            char === "u"){
                
                cantidadVocales++;
        }
    }
    return cantidadVocales
}

const vowelCount = contarVocalesEn(phrase);
console.log(vowelCount);  // 4


//También se puede resolver como:

function countVowelsInText(text) {
    text = text.toLowerCase(); // Convertir el texto a minúsculas
    const vowels = new Set('aeiou'); // Usar un Set para las vocales
    let vowelCount = 0; // Contador de vocales

    for (const character of text) {
        if (vowels.has(character)) {
            vowelCount++;
        }
    }
    return vowelCount; // Devolver la cantidad total de vocales
}*/


//--------------------------------------------------------------
/*
Ejercicio 2: Filtrar Números Impares
Descripción: Escribe una función que reciba un array de números 
y devuelva un nuevo array que contenga solo los números impares.
*/

/*
const numbers = [1, 2, 3, 4, 5, 6];

function filtrarImpares(array){
    const impares = array.filter(numero => numero % 2 === 1)
    return impares
}

const oddNumbers = filtrarImpares(numbers);
console.log(oddNumbers);  // [1, 3, 5]

*/

//--------------------------------------------------------------
/*
Ejercicio 3: Encontrar el Elemento Más Largo
Descripción: Escribe una función que encuentre 
el elemento más largo en un array de cadenas de texto.
*/

/*
const words = ["cat", "elephant", "dog", "hippopotamus"];

function encontrarPalabraMasLarga(arrayDePalabras){
    let palabraMasLarga = arrayDePalabras[0]

    for (const palabra of arrayDePalabras) {
        if (palabra.length > palabraMasLarga.length) {
            palabraMasLarga = palabra
        }
    };

    return palabraMasLarga
}

const longestWord = encontrarPalabraMasLarga(words);
console.log(longestWord);  // "hippopotamus"

//También se puede resolver como:

function encontrarPalabraMasLarga(arrayDePalabras) {
    return arrayDePalabras.reduce((palabraMasLarga, palabraActual) => 
        palabraActual.length > palabraMasLarga.length ? palabraActual : palabraMasLarga
    );
}

*/

//--------------------------------------------------------------------
/*
Ejercicio 4: Sumar los Valores de un Objeto
Descripción: Escribe una función que reciba un objeto 
cuyas propiedades son números 
y devuelva la suma de todos esos valores.
*/
/*
const numbersObject = { a: 1, b: 2, c: 3 };

function sumObjectValues(obj) {
    return Object.values(obj).reduce((sum, value) => sum + value, 0);
}

const sum = sumObjectValues(numbersObject);
console.log(sum);  // 6

*/

//---------------------------------------------------------
/*
Ejercicio 5: Invertir una Palabra
Descripción: Escribe una función que invierta una cadena de texto.
*/
/*
const word = "javascript";

function reverseString(string){
    return string.split('').reverse().join('');
}

const reversedWord = reverseString(word);
console.log(reversedWord);  // "tpircsavaj"
*/
//----------------------------------------------------------
/*
Ejercicio 6: Crear un Objeto a partir de un Array
Descripción: Escribe una función que convierta un array de pares clave-valor en un objeto.
*/

const pairs = [['name', 'Alice'], ['age', 25], ['city', 'New York']];

/*
function arrayAObjeto(paresClaveValor) {
    let objeto = {}
    paresClaveValor.forEach(par => {
        let clave = par[0]
        let valor = par[1]
        objeto.push(clave, valor)
    });
}*/

function arrayToObject(arr) {
    return arr.reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
    }, {});
}

const obj = arrayToObject(pairs);
console.log(obj);  // { name: 'Alice', age: 25, city: 'New York' }