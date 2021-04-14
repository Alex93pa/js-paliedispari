var parola = prompt("inserisci una parola palindroma");
parola = parola.toLowerCase();

Palindrome(parola);

function Palindrome() {

    // converte stringa in un array
    var arrayValues = parola.split('');

    // legge array al contrario, reverse funziona solo su array e non su stringa
    var reverseArrayValues = arrayValues.reverse();

    // riconverte array in stringa
    var reverseParola = reverseArrayValues.join('');

    if(parola == reverseParola) {
        console.log(parola);
        console.log('La parola inserita è palindroma');
        document.getElementById('risultato').innerHTML = ("La parola da te inserita '" + parola + "' è palindroma.")
    }
    else {
        console.log(parola);
        console.log('La parola inserita non è palindroma');
        document.getElementById('risultato').innerHTML = ("La parola da te inserita '" + parola + "' non è palindroma.")
    }
}

