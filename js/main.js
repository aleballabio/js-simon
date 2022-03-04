
const stamp = document.querySelector(".stamp");
const arrayRandomNumber = [];

//Random Number
while (arrayRandomNumber.length < 5) {
    const Number = randomNumber(1, 100);

    if (arrayRandomNumber.includes(Number)) { }

    else {
        arrayRandomNumber.push(Number);
        stamp.innerHTML += Number + " ";
    }
}


//Simon  Game
setTimeout(SimonSaysGame, SecondsConverter(30));

function SimonSaysGame() {

    stamp.innerHTML = "";
    const NumeriIndovinati = [];
    let score = 0;

    setTimeout(IndovinaUtente, SecondsConverter(1));

    function IndovinaUtente() {

        for (let times = 0; times < 5; times++) {
            const NumeriUtente = parseInt(prompt("Indovina il" + " " + (times + 1) + " " + "numero"));

            if (arrayRandomNumber.includes(NumeriUtente)) {
                NumeriIndovinati.push(NumeriUtente);
                score++;
                stamp.innerHTML = `Punteggio: ${score} <br>
            Numeri Indovinati: ${NumeriIndovinati}`
            }
        }
    }

}



//Random  Number Generator

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Seconds 

function SecondsConverter(seconds) {
    let secondi = seconds * 1000
    return secondi;
}