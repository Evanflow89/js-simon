// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const numToGuess = document.getElementById("randomNumbers")

let arrayNumbers = [];

for (let i = 0; i < 5; i++) {
    Numb = randomNum(1, 100);
    arrayNumbers.push(Numb);
}

numToGuess.innerHTML = (arrayNumbers.join(" "));


// setTimeout(function () {


// }30000;)