/*
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
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