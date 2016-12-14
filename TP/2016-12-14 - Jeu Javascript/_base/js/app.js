
/* Variable globales*/
var canvas = document.querySelector('#game'); // Récupération dans le DOM <canvas>;
var context = canvas.getContext('2d'); //Récuperation du contexte de dessin
var graphics;
var joueur;

function init() {
    /** INITIALISATION DU JEU **/

    chargerImages(['img/vaisseau.png'], function (imagesInfos) {

        //Récupération des images  chargée et stockées dans une variable globale 'graphics'
        graphics = imagesInfos;

        //Adapter le canvas à la taille de l'écran
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        //Crétation d'un joueur
        joueur = new Joueur (canvas.width/2, canvas.height/2, 0, 10);

        gameloop(); //lancement de la game loop
    });
}

function update() {
  /** ICI SERONT PLACÉES TOUTES LES PHASES DE CALCUL DE POSITIONS ... ETC **/
  joueur.update();
}

function render() {
  /** ICI SERONT PLACÉES TOUTES LES PHASES DE DESSIN SUR LE CANVAS **/

  //Effacer le pixels du canvas
  context.clearRect(0,0, canvas.width, canvas.height);


  joueur.render();
}

// Boucle de jeu => tourne indéfiniment à environ 60fps grâce à requestAnimationFrame()
function gameloop() {
  requestAnimationFrame(gameloop);
  update();
  render();
}

// Point d'entrée du jeu : Lancement de la phase d'initialisation
init();
