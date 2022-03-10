/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
 chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */

//Creo un Array con la lista degli invitati
const invitati = ['Robin', 'Gennaro','Lorenzo', 'Checco'];

//Creo una costante associata al nome che inserirà l'user.
const nomeInvitato = prompt('Nome?');

/*Creo un ciclo che andrà a verificare se il nome inserito dall'utente
sia presenta nella lista*/
for(let i=0; i < invitati.length; i++){
    if(nomeInvitato === invitati[i]){
        console.log(nomeInvitato + ' puoi entrare');
        break;

    }else if(!isNaN(nomeInvitato)){
        console.log('Chi sei? Il figlio di Elon Musk? Non credo proprio.')
    }else{
        console.log(nomeInvitato + ' mi dispiace, non sei sulla lista');
    }
}

