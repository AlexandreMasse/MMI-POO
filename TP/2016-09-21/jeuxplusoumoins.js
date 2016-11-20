//Variable replay
var rp = true;

//Boucle de replay
while (rp) {

    //Difficulté
    var difficult = prompt ("Choisir un niveau de difficulté facile ou difficile (d / f)");
    if (difficult == "f") {
        var max = 100;
    }
    else if (difficult == "d"){
        var max = 1000;
    }

    //Nombre aleatoire
    var n = Math.random() * max;

    //Arrondie
    n = Math.round(n);

    //Chiffre entre par l'utilisateur
    var n2 = prompt("Saisir un nombre entre 1 et " + max + " (" + n + ")");

    //Compteur
    var c = 1;

    //Boucle de comparaison
    while (n != n2) {
        if (n > n2) {
            alert("C'est plus !");
            n2 = prompt("Saisir un nombre entre 1 et " + max + " (" + n + ")");
        }
        else {
            alert("C'est moins !");
            n2 = prompt("Saisir un nombre entre 1 et 100");
        }
        c++;
    }

    //Message gagne
    alert("GAGNE !!! C'est bien " + n + " ! tu as trouvé au bout de " + c + " tentatives !");

    //Rejouer
    rp  = prompt("Veux-tu rejouer ? (oui / non) ");

    if (rp == "oui") {
        rp = true;
    }
    else if (rp == "non") {
        rp = false;
    }
    else {
        rp = false;
        alert ("Je n'ai pas compris, pour la peine c'est fini !")
    }

}


