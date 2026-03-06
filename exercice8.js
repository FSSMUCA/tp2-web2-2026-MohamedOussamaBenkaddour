let nom = "Ali";
let age = 21;
let niveau = "Licence";
let moyenne = 14.5;
let boursier = false;

console.log("=== Rapport Etudiant ===");

console.log("Nom :", nom);
console.log("Age :", age);
console.log("Niveau :", niveau);
console.log("Moyenne :", moyenne);
console.log("Boursier :", boursier);

if (moyenne >= 16) {
    console.log("Mention : Très bien");
}
else if (moyenne >= 14) {
    console.log("Mention : Bien");
}
else if (moyenne >= 12) {
    console.log("Mention : Assez bien");
}
else if (moyenne >= 10) {
    console.log("Mention : Passable");
}
else {
    console.log("Mention : Ajourné");
}
