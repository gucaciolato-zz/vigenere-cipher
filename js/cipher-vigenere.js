const ALPHABET = "abcdefghijkalmnopqrstuvwxyz";

function cipher(text, key) {
    
    let encrypted = "";

    let j = 0;
    for(let i = 0; i < text.length; i++) {

        const textChar = text[i];
        const textCharIndex = ALPHABET.indexOf(textChar);

        if(textCharIndex === -1) {
            encrypted += textChar;
            continue;
        }

        const keyChar = key[j];
        const keyCharIndex = ALPHABET.indexOf(keyChar);

        const indiceSum = textCharIndex - keyCharIndex + 26;
        const cipherCharIndex = indiceSum % 26;
        const cipherChar = ALPHABET[cipherCharIndex];

        j = j === key.length - 1 ? 0 : j + 1;

        encrypted += cipherChar;
    }

    return encrypted;
}

    
var word = prompt("Enter a word: ");
var key = prompt("Enter a key less than or equal to the word to be encrypted: ");

alert(word + " encrypted is: " + cipher(word, key) + ".");