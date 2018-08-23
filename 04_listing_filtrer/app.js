//Écrivez un programme qui utilise une opération asynchrone sur le système
//  de fichiers pour lire un fichier et afficher son nombre de fins de ligne
//  sur la console (stdout), un peu comme si vous faisiez cat file | wc -l.
//
//  Le chemin complet du fichier à lire vous sera fourni comme premier
//  argument de la ligne de commande.

var file = process.argv[2];
var ext = process.argv[3];
var fs = require("fs");
var path = require("path");

fs.readdir(file, function callback(err, list) {
    if (err) {
        return err;
    }
    list.forEach(function parcours(fichier) {
        if (path.extname(fichier) === "." + ext) {
            console.log(fichier);
        }
    })
})
