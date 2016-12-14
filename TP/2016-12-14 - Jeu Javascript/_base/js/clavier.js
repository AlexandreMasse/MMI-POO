
//Valeur par defaut
var clavier = {
    gauche : false,
    haut : false,
    droite : false,
    bas : false,
    espace : false,
};

//Creation de s écouteur d'évenement :
// - keydown => touche enfoncée
// - keyup => touche relachée
document.addEventListener('keydown', onKeydown);
document.addEventListener('keyup', onKeyup);


 function onKeydown (evt) {
     if (evt.keyCode === 37 ) { clavier.gauche = true;}
     if (evt.keyCode === 38 ) { clavier.haut = true;}
     if (evt.keyCode === 39 ) { clavier.droite = true;}
     if (evt.keyCode === 40 ) { clavier.bas = true;}
     if (evt.keyCode === 32 ) { clavier.espace = true;}

 }

 function onKeyup (evt) {
     if (evt.keyCode === 37 ) { clavier.gauche  = false;}
     if (evt.keyCode === 38 ) { clavier.haut    = false;}
     if (evt.keyCode === 39 ) { clavier.droite  = false;}
     if (evt.keyCode === 40 ) { clavier.bas     = false;}
     if (evt.keyCode === 32 ) { clavier.espace  = false;}

 }