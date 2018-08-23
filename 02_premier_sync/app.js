// Écrivez un programme qui utilise une opération synchrone sur le système de
//  fichiers pour lire un fichier et afficher son nombre de fins de ligne sur
//  la console (stdout), un peu comme si vous faisiez cat file | wc -l.  (wc
//  comptera le nombre de lignes, pas les fins de lignes, donc votre résultat
//  devrait être supérieur de 1 (un) au sien.)
//
//  Le chemin complet du fichier à lire vous sera fourni comme premier
//  argument de la ligne de commande.  Il est inutile de faire votre propre
//  fichier de test.


var fs = require("fs");
var file = process.argv[2];
var res = fs.readFileSync(file).toString().split("\n").length - 1;
console.log(res);
