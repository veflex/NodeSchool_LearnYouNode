//Écrivez un programme qui accepte un ou plusieurs nombres comme arguments
//  de la ligne de commande, et affiche la somme de ces nombres sur la console
//  (stdout).

var i, total = 0;

for (i = 2; i < process.argv.length; i++) {

    total += Number(process.argv[i]);
}
console.log(total);
