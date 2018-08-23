//Écrivez un serveur HTTP qui reçoit uniquement des requêtes POST et
//  convertit le texte du corps de requête entrante en majuscules pour ensuite
//  le renvoyer au client.
//
//  Votre serveur écoutera sur un port dont le numéro vous sera fourni en
//  premier argument de la ligne de commande.

var http = require("http");
var port = process.argv[2];
var map = require('through2-map');

var server = http.createServer(function (req, res) {
    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res)
});
server.listen(port)
