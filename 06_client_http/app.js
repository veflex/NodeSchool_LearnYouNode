//Écrivez un programme qui fait une requête HTTP GET sur une URL fournie
//  comme premier argument de la ligne de commande.  Affichez le contenu
//  String de chaque événement 'data' de la réponse sur sa propre ligne dans
//  la console (stdout).


var http = require("http");
var url = process.argv[2];

http.get(url, function callback(response) {
    response.setEncoding("utf8").on("data", function (data) {
        console.log(data);
    });
})
