// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana
// (con massimo due decimali, per indicare centesimi sul prezzo).



const kmPercorsi = prompt ("Inserire i km da percorrere")
const etaClienti = prompt("Inserire età anagrafica")

console.log(
    `kilometri inseriti  : ${kmPercorsi}`
)

console.log(
    `età inserita  : ${etaClienti}`
)


let ticketCost = (kmPercorsi * 0.21);
console.log(
    `ticketcost  : ${ticketCost}`
)

let priceOver65;
let priceUnder18;
let priceNormal;


/* MAGGIORE  o MINORE */
if ( etaClienti > 65 ) {
    priceOver65 = (ticketCost * 0.6)
    console.log(`price over 65 : ${priceOver65}`);
}
else if (etaClienti < 18) {
    priceUnder18 = (ticketCost * 0.8)
    console.log(`price under 18 : ${priceUnder18}`);
}

else if (etaClienti > 18 && etaClienti < 65) {
    priceNormal = (ticketCost)
}


