// Écrivez un serveur HTTP qui sert des données JSON lorsqu’il reçoit une
//  requête GET sur le chemin '/api/parsetime'.  Vous pouvez supposer que la
//  requête contiendra une query string avec la clé 'iso' et une valeur
//  d’horodatage au format ISO.
//
//Ajoutez un second point d’accès pour le chemin '/api/unixtime', qui
//  accepte la même query string mais renvoie un horodatage UNIX basé sur
//  l’époque, en millisecondes (le nombre de millisecondes écoulées depuis le
//  1er janvier 1970 à 00:00:00 UTC), comme valeur d’une propriété 'unixtime'.


var http = require("http");
var port = process.argv[2];
var url = require("url");

var server = http.createServer(function (req, res) {
    var donnees = url.parse(req.url, true);
    var dateIso = donnees.query.iso;

    if (req.url.match("parsetime")) {
        var date = new Date(dateIso);
        var objectJS = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
        var objectJson = JSON.stringify(objectJS);
        res.end(objectJson);
    } else {
        var dateUnix = new Date(dateIso);
        var objectUnixJS = {
            unixtime: dateUnix.getTime()
        };
        var dateUnixJSON = JSON.stringify(objectUnixJS);
        res.end(dateUnixJSON);
    }
});
server.listen(port)
