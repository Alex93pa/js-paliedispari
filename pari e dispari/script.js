do{
    var checkNumber = false;
    var PoD = prompt("Sfida il computer. Pari o Dispari?");
    PoD = PoD.toLowerCase();
    
    if (PoD === "pari" || PoD === "dispari") {
        var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));
            if (Number.isNaN(numeroUtente)) {
            console.log("Puoi inserire solo un numero da 1 a 5");
            } else if (numeroUtente < 1 || numeroUtente > 5) {
            console.log("Hai inserito un numero minore di 1 o maggiore di 5.");
            } else {
                finale();
                checkNumber = true;
            } 
        } else {
        console.log("Non hai scritto correttamente pari o dispari!");
    }
} while(!checkNumber);

var numeroPc = Math.floor(Math.random()*5);

var somma = parseInt(numeroPc + numeroUtente)

document.getElementById('numPc').innerHTML = ('Il numero scelto dal computer è ' + numeroPc)
document.getElementById('numUmano').innerHTML = ('Il numero scelto da te è ' + numeroUtente)


function finale() {
    if (somma % 2 === 0 && PoD === "pari") {
    console.log("La somma dei due numeri è pari. Hai vinto.");
    document.getElementById('vincente').innerHTML = ("La somma dei due numeri è pari. Hai vinto.");
    return;
    } else if (somma % 2 === 0 && PoD === "dispari") {
    console.log("La somma dei due numeri è pari. Hai perso.");
    document.getElementById('vincente').innerHTML = ("La somma dei due numeri è pari. Hai perso.");
    return;
    } else if (somma % 2 !== 0 && PoD === "pari") {
    console.log("La somma dei due numeri è pari. Hai perso.");
    document.getElementById('vincente').innerHTML = ("La somma dei due numeri è pari. Hai perso.");
    return;
    } else if (somma % 2 !== 0 && PoD === "dispari") {
    console.log("La somma dei due numeri è pari. Hai vinto.");
    document.getElementById('vincente').innerHTML = ("La somma dei due numeri è pari. Hai vinto.");
    return;
    } 
}


