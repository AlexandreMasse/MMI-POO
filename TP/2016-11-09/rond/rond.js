'use strict';

var canvas;
var context;
var rond;
var GUI;
var stats;

function init() {
    //Récupération de la balise canvas via Javascript, et d contexte de dessin permettant de dessiner sur ce canvas
    canvas = document.getElementById('drawzone');
    context = canvas.getContext('2d');

    //Etirage du canvas jusqu'a la taille de l'écran
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    //creation d'un objet javascript qui va representer un rond

    rond = {
        x : canvas.width /2,
        y : canvas.height /2,
        rayon : 100,
        angleDebut : 0,
        angleFin : Math.PI*2,
        couleur : '#ef23bc',
    };

    //initialisation de l'interface
    initUI();

    //lancement de l'animation
    animate();

} //fin de la fonction init



function initUI(){
    //Creation de la boite de dialogue en haut à droite
    GUI = new dat.GUI();
    GUI.add(rond, 'x', 0, canvas.width);
    GUI.add(rond, 'y', 0, canvas.height);
    GUI.add(rond, 'rayon', 1, 100);
    GUI.add(rond, 'angleDebut', 0, Math.PI*2);
    GUI.add(rond, 'angleFin', 0, Math.PI*2);
    GUI.addColor(rond, 'couleur');


    //FPS
    stats = new Stats();
    document.body.appendChild(stats.dom);

}



function animate() {
    //Grace a requestActionFrame la fonction 'animate' s'auto rappelle a une frequence d'environ 60fps (géré par le navigateur lui-meme)
    requestAnimationFrame(animate);

    //mettre changement animation ici

    stats.begin();

    draw(); //appel de la foncion draw

    stats.end();
}



function draw() {
    //effacement du canvas
    context.clearRect(0,0, canvas.width, canvas.height);

    //dessin du cercle
    context.fillStyle = rond.couleur;
    context.beginPath();
    context.arc(rond.x, rond.y, rond.rayon, rond.angleDebut, rond.angleFin);
    context.fill();
    context.closePath();

}

init();