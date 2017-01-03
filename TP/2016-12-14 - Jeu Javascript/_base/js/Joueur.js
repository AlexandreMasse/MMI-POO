function Joueur(x, y, direction, vitesse) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.vitesse = vitesse;

    this.image  = graphics['img/vaisseauS2.png'];
    this.width  = this.image.width;
    this.height = this.image.height;
    this.tir    = {
        intervalle : 250,
        dernierTir : null
    }
}

Joueur.prototype.update = function() {






 if (clavier.haut === true) {

     //Avancement du joueur
     this.x += Math.cos(this.direction) * this.vitesse;
     this.y += Math.sin(this.direction) * this.vitesse;
 }

 if (clavier.droite === true) {
     this.direction += 0.1;
 }

 if (clavier.gauche === true) {
     this.direction -= 0.1;
 }

// Gestion des débordements hors-écran :
if (this.x > canvas.width) // S'il y a un débordement à droite
    this.x = -this.width;
if (this.x + this.width < 0) // S'il y a un débordement à gauche
    this.x = canvas.width;
if (this.y + this.height < 0) // S'il y a un débordement en haut
    this.y = canvas.height;
if (this.y > canvas.height) // S'il y a un débordement en bas
    this.y = -this.height;

// Si on appuis sur Espace et que l'intervalle de tir minimum est respecté, on peut créer un nouveau laser
if (clavier.espace === true && Date.now() - this.tir.dernierTir > this.tir.intervalle) {
    //Dit au gestionnaire de laser de créer un nouveau laser aux positions du joueur
    lasers.createOne(this.x, this.y, this.direction);
    sons.laser.play();

    this.tir.dernierTir = Date.now();
}
};

Joueur.prototype.render = function() {
    //Dessin du joueur (avec la rotation)

    context.save();
    context.translate(this.x + this.width/2, this.y + this.height/2);
    context.rotate (this.direction);
    context.drawImage(this.image, - this.width/2, - this.height/2);
    context.restore();
};
