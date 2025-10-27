let km;
let eta;
do {
    km = parseFloat(prompt("Inserisci chilometri:"),10);
    if (isNaN(km) || km <= 0)
        alert("Per favore, inserisci un numero valido di chilometri.");
} while (isNaN(km) || km <= 0);
do {
    eta = parseInt(prompt("Inserisci la tua età:"),10);
    if (isNaN(eta) || eta <= 0)
        alert("Per favore, inserisci un'età valida.");
} while (isNaN(eta) || eta <= 0);



const prezzoKm = 0.21;
let prezzoTotale = prezzoKm * km;
let prezzoScontato = prezzoTotale;

if (eta < 18) {
    prezzoScontato = prezzoTotale * 0.8; // 20% di sconto
} else if (eta >= 65) {
    prezzoScontato = prezzoTotale * 0.6; // 40% di sconto
}

const divRisultato = document.getElementById("risultato-somma");
divRisultato.textContent = "Prezzo da pagare: € " + prezzoScontato.toFixed(2);