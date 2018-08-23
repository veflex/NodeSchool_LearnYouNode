//Ce problème est le même que le précédent, mais il introduit le concept de
//  modules.  Vous devrez créer deux fichiers distincts pour résoudre cet
//  exercice.

var file = process.argv[2];
var ext = process.argv[3];
var myModule = require('./module');

var callback = function (err, data) {
    if (err) {
        return console.error(err)
    } else {
        data.forEach(function (fichier) {
            console.log(fichier);
        })
    }
}

myModule(file, ext, callback);
