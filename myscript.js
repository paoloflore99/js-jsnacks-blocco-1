//let numero =2;


//while (numero < 1000) {
    
 //   numero * numero

 //   console.log ("numero")
//

//}



const nomi = ["paolo","marco","antonio","francesco","andrea","sara","cristina","arta","serena","filippo","antoniella" ];//lista nomi


const cognomi = ["paolo","marco","antonio","francesco","andrea","sara","cristina","arta","serena","filippo","antoniella" ];//lista cognomi


function generatoreCasuale () {
    const nomeCasuale = nomi [Math.floor(Math.random () * nomi.length)];

    const cognomeCasuale = cognomi [Math.floor(Math.random () * cognomi.length)] ;

    return `${nomeCasuale}  ${cognomeCasuale}`
}


const nomeCompleto = generatoreCasuale();

console.log(nomeCompleto);  
console.log(nomi);
console.log(cognomi);


//invece di perdere piu di mezzora qurda bene come vai a chiamare le costanti
//riepilogo come ho fatto lesercizio 


/*


( 15 18 )   prima di tutto crea una const dagli una sorta di id e crea i dati nomi , numeri allinterno   

( 21 )      Le funzioni possono avere zero o più parametri, che sono variabili utilizzate per passare valori alla funzione. Il corpo della funzione è racchiuso tra parentesi graffe {} 

            e contiene il blocco di codice che viene eseguito quando la funzione viene chiamata. All'interno del corpo della funzione, puoi eseguire operazioni, calcoli, logica condizionale,

            accedere a variabili e oggetti, ecc.

            Le funzioni vengono richiamate utilizzando il nome della funzione seguito da parentesi tonde (), eventualmente con argomenti specificati all'interno delle parentesi.

            restituisce un numero casuale compreso tra 0 (incluso) e 1 (escluso) ( )

( 26 )      istruzione return è opzionale e viene utilizzata per restituire un valore dalla funzione. Se presente, la funzione termina e restituisce il valore specificato con return. 

            In caso contrario, la funzione restituirà undefined implicitamente.


*/

const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12, 13, 14, 15, 16];

let sommaPosizioniDispari = 0;  //cosi facendo dichiaro una variabbile in questo caso (sommaPosizioniDispari) a qui gli asegno un valore di 0 

for (let i = 1; i < numeri.length; i += 2) {   //length viene utilizzata per ottenere la lunghezza di una stringa

    sommaPosizioniDispari += numeri[i];
}


console.log("somma", sommaPosizioniDispari);

console.log(numeri);