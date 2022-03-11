// Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

//Dichiariamo una variabile che corrisponde al numero inserito dall'utente.
let numeroUser;

/*Creiamo un ciclo while che chiede all'utente di inserire un numero di 4 cifre
finchè l'utente inserisci un valore che non è un numero oppure che non è lungo 4 cifre*/
while(isNaN(parseInt(numeroUser)) || numeroUser.length !== 4 ){
    numeroUser = prompt('Inserisci un numero di quattro cifre');
}

//Dichiariamo la variabile somma e le diamo un valore = 0.
let somma = 0;
for(let i=0 ; i < numeroUser.length; i++){
    const carattere = numeroUser[i];
    somma += parseInt(carattere);
}

console.log(`la somma delle cifre del numero ${numeroUser} è: ${somma}`);