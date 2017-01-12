
function tirageLoto() {
    //  ------- Votre code ici … -------

    var tirage = [];

    for (var i = 0; i < 5; i++) {
        var nb = Math.floor(Math.random() * 50);

        console.log(nb);

        if ( Array.prototype.includes(nb)) {
            //tant que le chiffre se trouve dans la table
            while ( Array.prototype.includes(nb) ) {

                var nb = Math.floor(Math.random() * 50);
                tirage[i] = nb;
            }
        }
        else {
            tirage[i]= nb;
        }


        console.log(tirage);

    }

    return (tirage);
}

tirageLoto();


// --------------------------------------------------
// --- Ne rien modifier en dessous de cette ligne ---
// --------------------------------------------------

module.exports = tirageLoto;

