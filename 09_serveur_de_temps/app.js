// Écrivez un serveur de temps TCP !
//
//  Votre serveur devrait attendre des connexions TCP entrantes sur le port
//  dont le numéro vous sera fourni comme premier argument en ligne de
//  commande.  À chaque connexion, vous écrirez sur la socket la date et
//  l’heure courante, en mode 24 heures, selon le format suivant :
//
//     "YYYY-MM-DD hh:mm"
//
//  suivi d’un caractère saut de ligne (newline).  Les mois, jour, heures et
//  minutes doivent absolument être présentés sur 2 chiffres avec, si besoin,
//  un zéro préfixe.  Par exemple :
//
//     "2013-07-06 17:42"

var port = process.argv[2];
var net = require('net');

var ajoutZero = function (date) {
    return (date < 10 ? "0" : "") + date
}
var currentDate = function () {
    var date = new Date();
    return ajoutZero(date.getFullYear()) + "-" +
        ajoutZero(date.getMonth() + 1) + "-" +
        ajoutZero(date.getDate()) + " " +
        ajoutZero(date.getHours()) + ":" +
        ajoutZero(date.getMinutes());
}
var server = net.createServer(function (socket) {
    "use strict";
    socket.end(currentDate() + "\n");
});
server.listen(port);
