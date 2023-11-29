/*
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/



// SELEZIONE del contenitore nel main
const mainContainer = document.getElementById("main-container");

// SELEZIONE del bottone "play"
const playBtn = document.getElementById("play-btn");

// SELEZIONE del wrapper
const mainWrapper = document.getElementById("main-wrapper");


// FUNZIONE che permetta di generare elementi e di assegnare una classe
function generaUnElemento (tagtype, classname) {
    const element = document.createElement(tagtype);
    element.classList.add(classname);
    return element
};

// GENERARE un array di 16 numeri (le bombe) in ordine casuale in un range che va da 1 a 100
const newArrNum = genArrayRandomNum (1, 100, 16);
console.log(newArrNum);

// DICHIARO la variabile "punteggio"
let score = 0;


// GENERARE gli elementi con un ciclo for utilizzando la funzione appena creata
for (let i = 1; i <= 100; i++) {

    const newElement = generaUnElemento("div", "square");

    // UTILIZZO append per linkare il numero all'elemento
    newElement.append(i);

    // UTILIZZO append per linkare gli elementi alla griglia
    mainContainer.append(newElement);

    // FUNZIONE che permette di colorare la casella al click
    newElement.addEventListener("click",
    
        function () {
            if (newArrNum.includes(i)) {
                newElement.classList.add("square-bomb");
                alert(`Hai perso. Il tuo punteggio è stato di: ${score} punti`);

                // comando trovato su internet che ricarica la pagina
                window.location.reload();
            } else {
                newElement.classList.add("square-point");
                score++;
            }
            
            if (score === 84) {
                alert("Hai vinto!");
            }
            console.log("Punti: ", score);
        }
    );
};


// FUNZIONE che, al click del bottone, fa comparire i quadrati
playBtn.addEventListener("click",

    function () {
        mainWrapper.classList.add("d-block");
    }
);

/* ============================================================================= */
// FUNZIONE che genera un numero random in un determinato range
function genRandomNumMinMax (min, max) {
    return Math.floor(Math.random()* (max - min + 1)) + min;
};

/* FUNZIONE che genera un array contenente una serie di numeri in ordine casuale in un range. 
• minNum è il numero più piccolo che può esserci nell'array
• maxNum è il numero più grande che può esserci nell'array
• lengthArr è la lunghezza dell'array. Esempio: se è 10, l'array avrà massimo 10 numeri
*/
function genArrayRandomNum (minNum, maxNum, lengthArr) {

    // genero l'array da riempire
    const arrayToGen = [];

    // ciclo che riempe l'array
    while (arrayToGen.length < lengthArr) {

        // generare un numero random in un range
        let newNumber = genRandomNumMinMax(minNum, maxNum);

        // stabilire: se il numero generato non è presente nell'array, lo pusho
        if (!arrayToGen.includes(newNumber)) {
            arrayToGen.push(newNumber);
        }

    }

    return arrayToGen;
};



/*
COSA NON RIUSCIVO A FARE E COME L'HO RISOLTO

Avendo già un ciclo for che generava i numeri da 1 a 100 (riga 42), non capivo come potevo collegare questa struttura al nuovo array di 16 numeri casuali. Non avevo considerato che l'array era già stato dichiarato nel main script, perciò potevo andare a riprenderlo in seguito all'interno del ciclo for. Alla fine è bastato inserirlo in una funzione (sempre all'interno del ciclo for), che mi permetteva di confrontare tutti i numeri dell'array nuovo con i 100 elementi creati, e da lì il tutto ha funzionato.
*/