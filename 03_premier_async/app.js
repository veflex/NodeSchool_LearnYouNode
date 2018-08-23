//Écrivez un programme qui utilise une opération asynchrone sur le système
//  de fichiers pour lire un fichier et afficher son nombre de fins de ligne
//  sur la console (stdout), un peu comme si vous faisiez cat file | wc -l.
//
//  Le chemin complet du fichier à lire vous sera fourni comme premier
//  argument de la ligne de commande.


var fs = require("fs");
var file = process.argv[2];

fs.readFile(file, 'utf8', function callback(err, data) {
    if (err) {
        return err
    } else {
        var res = data.split("\n").length - 1
        console.log(res);
    }

})
