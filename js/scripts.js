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

let price;

if (isNaN(etaClienti)){
    alert("Il campo accetta solo numeri")
};
if (isNaN(kmPercorsi)){
    alert("Il campo accetta solo numeri ")
}

/* MAGGIORE  o MINORE o COMPRESO */
if ( etaClienti > 65 ) {
    price = (ticketCost * 0.6)
    console.log(`price over 65 : ${price}`);
}
else if (etaClienti < 18) {
    price = (ticketCost * 0.8)
    console.log(`price under 18 : ${price}`);
}

else if (etaClienti > 18 && etaClienti < 65) {
    price = (ticketCost)
    console.log(`normal price : ${price}`);
}

price = price.toFixed (2);

document.getElementById("prezzo").innerHTML = `Questo è il prezzo del tuo ticket ${price} €`;
