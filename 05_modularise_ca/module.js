var fs = require("fs");
var path = require("path");
var tableau = [];

module.exports = function filterDir(chemin, filtre, clbk) {
    fs.readdir(chemin, function (err, list) {
        if (err) {
            return clbk(err)
        } else {
            list.forEach(function parcours(fichier) {
                if (path.extname(fichier) === "." + filtre) {
                    tableau.push(fichier);
                }
            })
            return clbk(null, tableau);
        }
    })
}
