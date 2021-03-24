//Consegna
//1. chiedi all’utente il cognome
//2. inseriscilo in un array con altri cognomi: ‘bianchi’, ‘neri’, ‘rossi’, ‘verdi’, ‘gialli’
//3. stampa la lista ordinata alfabeticamente
//4. scrivi anche la posizione "umana", 1 oppure 2 oppure 3 oppure ecc... 
//      (non 0 oppure 1 oppure 2 oppure ecc.. tipici degli array), del nuovo utente inserito sopra 
//      all'interno dell'array, dopo l'ordinamento alfabetico



// array con lista cognomi
var nomeList = ['bianchi', 'neri', 'rossi', 'verdi', 'gialli'];
console.log('array iniziale: ' + nomeList);

// 1 - chiedo cognome utente e verifico che non sia stringa vuota
do {
    var cognome = prompt("Inserisci il tuo nome").toLowerCase().trim();
} while (cognome === '');
console.log('Cognome inserito: ' + cognome)

// 2 - inserisco cognome in array
nomeList.push(cognome)
console.log('nuova array: ' + nomeList);

// 3 - ordino e stampo array in ordine alfabetico
nomeList.sort();
console.log('array ordinata alfabeticamente: ' + nomeList);

// 4 - stampo posizione 'umana' del cognome che ho inserito nell array ordinata
var pos = nomeList.indexOf(cognome);
pos += 1;
console.log('posizione: ' + pos);

// inserisco la lista cognomi in HTML
var items = '';

for (var i = 0; i < nomeList.length; i++) {
    items += '<li>' + nomeList[i] + '</li>';
}
document.getElementById('surname_list').innerHTML = items;

// inserisco la posizione dell elemento in HTML
document.getElementById('element_pos').innerHTML = pos;
