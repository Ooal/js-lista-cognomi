/*chiedete all'utente un cognome e aggiungetelo alla lista, poi ordinate, utilizzate una funzionalità di js per l'ordinamento.*/

var nomi = ["Giovanni","Maurizio", "Chiara", "Giulia", "Giulio"];
var nuovoNome="";
var j=0;

while (nuovoNome == "") {
  var nuovoNome = prompt("Inserisci un nome");
}
nomi.push(nuovoNome);


while (j != nomi.length) {

  for (var i = 0; i < nomi.length - 1 ; i++) {
    var scambio = nomi[i].localeCompare(nomi[i+1]);
    
    if (scambio != -1) {
      var primoScambio1 = nomi[i];
      var primoScambio2 = nomi[i+1];
      var secondoScambio1 = nomi[i+1];
      var secondoScambio2 = nomi[i];
      primoScambio1 = primoScambio2;
      secondoScambio1 = secondoScambio2;
      nomi[i] = primoScambio1
      nomi[i+1] = secondoScambio1
    }

  }

  j++;
}
console.log(nomi);
