// Écrivez un serveur HTTP qui servira le même fichier texte pour toute
// requête reçue.
//
// Votre serveur devrait écouter sur un port dont le numéro vous sera fourni
// en premier argument de ligne de commande.
//
// Vous recevrez en deuxième argument de ligne de commande le chemin complet
// du fichier que vous devrez servir.Vous devez utiliser la méthode
// fs.createReadStream() pour streamer le contenu du fichier dans la réponse.


 var http = require('http');
 var fs = require('fs');
 var port = process.argv[2];
 var file = process.argv[3];


 var server = http.createServer(function (req, res) {
     res.writeHead(200, {
         "content - type": "text / plain"
     })

     var streamFlux = fs.createReadStream(file);
     streamFlux.pipe(res);
 });
 server.listen(port);
