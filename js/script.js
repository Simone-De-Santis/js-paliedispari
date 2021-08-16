/*
Marco Lancellotti:boolean: 13:06
    @qui
    Ciao ragazzi,
    Esercizio di oggi:
    nome repo: js-paliedispari :avviso: si, la L è una L
    Palidroma
    Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma
    Pari e Dispari
    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.
    Bonus:
    Aggiungere la validazione dove ritenuto necessario.
    Stampare in pagina anzichè in console.
    Consigli del giorno
    1. Scriviamo sempre in italiano i passaggi che vogliamo fare
    2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
    3. Facciamo prima la logica verificandola col console.log. Una volta funzionante, ci dedichiamo a stampare in pagina!
    4. Se dovessimo trovare e utilizzare soluzioni che non abbiamo fatto in classe, facciamo sempre la versione base
    dell'esercizio, poi aggiungiamo in uno script diverso o in un punto diverso del nostro JS un commento //BONUSper @Luigi
    Micco e @Davide Inzaghi
    Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:
    PS: Campioni d'Europa!! :it: (modificato)
*/
var userWord = prompt("inserisci una parola", "simone");
while (!userWord || userWord.trim() === "") {
  var userWord = prompt("inserisci una parola", "simone");
}
userWord = userWord.trim().toLowerCase();
isPalindrome(userWord);
//# funcion

function isPalindrome(word) {
  console.log(word);
  var reversedWord = "";

  for (var i = word.length - 1; i >= 0; i--) {
    var currenterLetter = word[i];
    reversedWord += currenterLetter;
  }
  console.log(reversedWord);

  if (reversedWord == userWord) {
    console.log("la paola inserita è palindoma");
  } else {
    console.log("la paola inserita  non è palindoma");
  }
}

var userChoice = prompt("scegli se 'pari' o 'dispari'");
//validazione
// while (userChoice.toLowerCase().trim !== "pari" && userChoice.toLowerCase().trim !== "dispari") {
//   userChoice = prompt("scegli se 'pari' o 'dispari'");
// }

var userNumber = prompt("scegli un numero da 1 a 5");

while (isNaN(userNumber) || userNumber > 5 || userNumber < 1) {
  userNumber = prompt("scegli un numero da 1 a 5");
}
var cpuNumber = Math.floor(Math.random() * (5 - 1 + 1) - 1);

var sum = parseInt(userNumber) + cpuNumber;

var isEven = false;
if (sum % 2 === 0) {
  isEven = true;
}

if (
  (isEven && userChoice.toLowerCase() === "pari") ||
  (!isEven && userChoice.toLowerCase() === "dispari")
) {
  console.log("hai vinto");
} else {
  console.log("hai perso");
}
