/*Crea un array vuoto. Chiedi per 6 volte all’utente
 di inserire un numero, se è dispari inseriscilo nell’array.*/

 //Creiamo una costante associata all' array vuoto.
 const numbers = [];

 /*Creaimo un ciclo in cui chiediamo per 6 volte all’utente di inserire un numero. */
 for(let i = 0; i < 6; i++){
    let number;

    while(isNaN(number)){
        number = prompt(`${i+1} Inserisci un numero`);
    }
    //Se il numero inserito dall'utente è dispari, allora scrivilo in console.
    if(!isNaN(number) && number % 2 !==0){
        numbers.push(number);

    }else if(isNaN(number)){
        alert('UN NUMERO');
    }
 }
 console.log(numbers);