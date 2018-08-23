//Ce problème est le même que le précédent (Collecteur HTTP), dans le sens
//  où vous aurez besoin de http.get().  Cependant, cette fois-ci vous allez
//  recevoir trois URLs sur la ligne de commande.
//
//  Vous devrez collecter le contenu complet qui vous sera envoyé pour chaque
//  URL, et l’afficher sur la console (stdout).  Vous n’avez pas besoin
//  d’afficher la longueur, juste les données en tant que String, à raison
//  d’une ligne par URL. La difficulté réside dans le fait que vous devez les
//  afficher dans le même ordre que celui des URLs transmises sur la ligne de
//  commande.


var http = require("http");
var bl = require("bl");
var tableau = [];
var count = 0;

var afficherData = function () {
    var i;
    for (i = 0; i < 3; i++) {
        console.log(tableau[i]);
    }
}
var recupData = function (index) {
    http.get(process.argv[2 + index], function callback(response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err);
            } else {
                count++;
                var str = data.toString();
                tableau[index] = str;

                if (count === 3) {
                    afficherData();
                }
            }
        }))
    })
}
var i;
for (i = 0; i < 3; i++) {
    recupData(i);
}
