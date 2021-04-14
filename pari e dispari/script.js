var PoD = prompt("Sfida il computer. Pari o Dispari?");
PoD = PoD.toLowerCase();

if (PoD === "pari" || PoD === "dispari") {
    var numero = parseInt(prompt("Inserisci un numero da 1 a 5:"));
        if (Number.isNaN(numero)) {
        console.log("Puoi inserire solo un numero da 1 a 5");
        } else if (numero < 1 || numero > 5) {
        console.log("Hai inserito un numero minore di 1 o maggiore di 5.");
        } else {
            finale(numero, PoD);
        } 
    } else {
    console.log("Non hai scritto correttamente pari o dispari!");
}

