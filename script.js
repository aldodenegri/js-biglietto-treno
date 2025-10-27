let km = parseFloat(prompt("Inserisci chilometri:"));
let eta = parseInt(prompt("Inserisci la tua età:"));
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