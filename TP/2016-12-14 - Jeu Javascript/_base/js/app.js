
/* Variable globales*/
var canvas = document.querySelector('#game'); // Récupération dans le DOM <canvas>;
var context = canvas.getContext('2d'); //Récuperation du contexte de dessin
var graphics;
var joueur;

//Creation des sons (via librairie howler.js)
var sons = {
laser : new Howl({urls: ['sons/laser.mp3', 'sons/laser.ogg'] }),
asteroide : new Howl({urls: ['sons/explosion_asteroid.mp3', 'sons/explosion_asteroid.ogg'] }),
dommage : new Howl({urls: ['sons/dommage.mp3', 'sons/dommage.ogg'] })
}

var lasers;

var asteroides;


function init() {
    /** INITIALISATION DU JEU **/

    chargerImages(['img/vaisseauS2.png', 'img/laserS5.png', 'img/asteroideS.png'], function (imagesInfos) {

        //Récupération des images  chargée et stockées dans une variable globale 'graphics'
        graphics = imagesInfos;

        //Adapter le canvas à la taille de l'écran
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        //Crétation d'un joueur
        joueur = new Joueur (canvas.width/2, canvas.height/2, 0, 10);


        //Création d'un gestionnaire de laser
        lasers = new Lasers();

        //Création d'un gestionnaire d'astéroide
        asteroides = new Asteroides();

        gameloop(); //lancement de la game loop
    });
}

function update() {
    /** ICI SERONT PLACÉES TOUTES LES PHASES DE CALCUL DE POSITIONS ... ETC **/
    joueur.update();
    lasers.update();
    asteroides.update();
}

function render() {
  /** ICI SERONT PLACÉES TOUTES LES PHASES DE DESSIN SUR LE CANVAS **/

  //Effacer le pixels du canvas
    context.clearRect(0,0, canvas.width, canvas.height);
    joueur.render();
    lasers.render();
    asteroides.render();
}

// Boucle de jeu => tourne indéfiniment à environ 60fps grâce à requestAnimationFrame()
function gameloop() {
  requestAnimationFrame(gameloop);
  update();
  render();
}

// Point d'entrée du jeu : Lancement de la phase d'initialisation
init();
