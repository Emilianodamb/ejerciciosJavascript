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

/*
Ejercicio 1: Contar Vocales
Descripción: Escribe una función que cuente la cantidad de vocales en una cadena de texto. 
La función debe ser insensible a mayúsculas y minúsculas.
*/

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