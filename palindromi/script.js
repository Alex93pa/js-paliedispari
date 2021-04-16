var parola = prompt("inserisci una parola palindroma");
var parolaUtente = parola.toLowerCase();

var risultato = Palindrome(parolaUtente);

if (risultato) {
    console.log('La parola inserita è palindroma');
    document.getElementById('risultato').innerHTML = ("La parola da te inserita '" + parola + "' è palindroma.")
} else {        
    console.log('La parola inserita non è palindroma');
    document.getElementById('risultato').innerHTML = ("La parola da te inserita '" + parola + "' non è palindroma.")

}
//Palindrome(parolaUtente2)

function Palindrome(parola) {

    // converte stringa in un array
    var arrayValues = parola.split('');

    // legge array al contrario, reverse funziona solo su array e non su stringa
    var reverseArrayValues = arrayValues.reverse();

    // riconverte array in stringa
    var reverseParola = reverseArrayValues.join('');

    if(parola == reverseParola) {
        return true;
    } else {
        return false;
    }
}
        /*console.log(parola);
/
    }
    else {
        return false;
        console.log(parola);
        console.log('La parola inserita non è palindroma');
        document.getElementById('risultato').innerHTML = ("La parola da te inserita '" + parola + "' non è palindroma.")
    }
}
*/
