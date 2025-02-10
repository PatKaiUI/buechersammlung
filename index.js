import { question, questionInt, keyInSelect } from "readline-sync";

// Büchersammlung erstellen///Das üben mit grundlegenden Array-Ops und Zugriff auf Elemente über ihren Index.
let buechersammlung = [
  "Herr der Ringe",
  "Harry Potter und das verwunschene Kind",
  "JavaScript für Dummies",
  "Die unendliche Geschichte",
  "Das Symbol",
  "Illuminati",
  "JavaScript effektiv",
];

// Ist "JavaScript für Dummies" in der Büchersammlung?
if (buechersammlung.includes("JavaScript für Dummies")) {
  const index = buechersammlung.indexOf("JavaScript für Dummies");
  console.log(
    `"JavaScript für Dummies" ist in der Büchersammlung enthalten an Index ${index}.`
  );
} else {
  console.log(
    `"JavaScript für Dummies" ist nicht in der Büchersammlung enthalten.`
  );
}

// Neues Buch hinzufügen.
buechersammlung.push("Das letzte Einhorn");
console.log(`"Das letzte Einhorn" wurde hinzugefügt.`);

// Entferne" das 1. Element im Array.
const erstesBuch = buechersammlung.shift();
console.log(`"${erstesBuch}" wurde entfernt.`);

// Das 5. Element im Array mit "Der Hobbit" ersetzen.
buechersammlung[4] = "Der Hobbit";
console.log('Das 5. Buch wurde mit "Der Hobbit" ersetzt.');

// Sortiere die Büchersammlung alphabetisch.
buechersammlung.sort();
console.log(`Die Büchersammlung wurde alphabetisch sortiert.`);
console.table(buechersammlung);

// Ersetzte das 3. Element mit "Die kleine Raupe Nimmersatt" ersetzen.//Weil es doch viel spannender ist :)
buechersammlung[2] = "Die kleine Raupe Nimmersatt";
console.log(`Das 3. Buch wurde mit "Die kleine Raupe Nimmersatt" ersetzt.`);

// Zeige die Büchersammlung als Tabelle an.
console.table(buechersammlung);
