/*
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/



// selezione del contenitore nel main
const mainContainer = document.getElementById("main-container");


// creare una funzione che permetta di generare elementi e di assegnare una classe
function generaUnElemento (tagtype, classname) {
    const element = document.createElement(tagtype);
    element.classList.add(classname);
    return element
}


// generare gli elementi con un ciclo for utilizzando la funzione appena creata
for (let i = 1; i <= 100; i++) {
    const newElement = generaUnElemento("div", "square");

    // utilizzo append per linkare il numero all'elemento
    newElement.append(i);

    // utilizzo append per linkare gli elementi alla griglia
    mainContainer.append(newElement);


    // creo la funzione che permette di colorare la casella al click
    newElement.addEventListener("click",
    
        function () {
            newElement.classList.add("bg-green");
            console.log(i);
        }
    )
}


// selezione del bottone "play"
const playBtn = document.getElementById("play-btn");

// selezione del wrapper
const mainWrapper = document.getElementById("main-wrapper");


// funzione che, al click del bottone, fa comparire i quadrati
playBtn.addEventListener("click",

    function () {
        mainWrapper.classList.add("d-block");
    }

)

/* ============================================================================= */
// funzione che genera un numero random in un determinato range
function genRandomNumMinMax (min, max) {
    return Math.floor(Math.random()* (max - min + 1)) + min;
}

// funzione che genera un array contenente una serie di numeri in ordine casuale in un range
function genArrayRandomNum (minNum, maxNum) {

    // genero l'array da riempire
    const arrayToGen = [];

    // ciclo che riempe l'array
    while (arrayToGen.length < maxNum)

        // generare un numero random in un range
        let newNumber = genRandomNumMinMax(minNum, maxNum);

        // stabilire: se il numero generato non è presente nell'array, lo pusho
        if (!arrayToGen.includes(newNumber)) {
            arrayToGen.push(newNumber);
        }
}
