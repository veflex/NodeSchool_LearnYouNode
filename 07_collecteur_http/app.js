//Écrivez un programme qui fait une requête HTTP GET sur une URL fournie en
//  premier argument de la ligne de commande.  Récupérez toutes les données du
//  serveur (et pas simplement le premier événement 'data'), puis écrivez deux
//  lignes sur la console (stdout).
//
//  La première ligne devrait être un nombre entier représentant le nombre de
//  caractères reçus du serveur.  La seconde ligne devrait être la String
//  complète reçue du serveur.


var url = process.argv[2];
var http = require("http");
var bl = require("bl");


http.get(url, function callback(response) {
    response.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err);
        } else {
            var str = data.toString();
            console.log(str.length);
            console.log(str);
        }
    }))
});
