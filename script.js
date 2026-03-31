function findLongestWord(text) {
    // Dividimos el texto en palabras y almacenarlas en una variable
    const words = text.split(' ');

    let longestWord = ''; // Inicializar la palabra más larga

    // Recorremos el arreglo de palabras con un ciclo
    for (let i = 0; i < words.length; i++) {
        //Comparamos la longitud de la palabra actual con la más larga
        if (words[i].length > longestWord.length) {
            // Actualizamos la palabra más larga
            longestWord = words[i];
        }
    }

    // Retornamos la palabra más larga encontrada
    return longestWord;
}

// Ejemplo de uso
const text = "JavaScript es un lenguaje de programación increíble para aprender.";
// Llamamos a la función y muestra el resultado
console.log(findLongestWord(text)); // Resultado esperado: "programación"