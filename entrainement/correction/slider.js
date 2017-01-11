$(document).ready(function() {
	
	// Variables globales de l'application :

	var nbImages; // Stockera le nombres d'images de ce slider
	var imageWidth; // Stockera la largeur en pixels d'une image de ce slider
	var currentSlide; // Contiendra un nombre nous permettant de contrôler le numéro de la slide sur laquelle on se trouve.
										// Par exemple, si on est sur la première slide, currentSlide vaudra 0

	// Initialisation du slider (appelle la fonction init)
	init();

	/**
	 * Fonction init()
	 * Initialise les variables globales de l'application
	 */
	function init() {
		nbImages     = $('#enfant > img').length;
		imageWidth   = $('#enfant > img').first().width();
		currentSlide = 0; // On démarrera à la toute première slide (donc n°0)

		// #enfant représente le bloc qui contient toutes les images les unes à côté des autres
		// Du coup, il faut lui préciser une largeur totale "width" égale à la taille d'une image multiplié par le nombre d'images
		// (Si chaque image fait 100px et qu'il y a 3 images au total, la largeur de #enfant sera 3 * 100 => 300px)
		$('#enfant').width( nbImages * imageWidth );

		// Création des petits ronds cliquables en dessous du slider :
		// Il faut en créer autant qu'il y a d'images dans le slider, donc on fait une boucle...
		for (var i = 0, a; i < nbImages; i++) {
			a = $('<a href="#">').addClass('rond'); // La classe CSS .rond donne l'apparence d'un petit rond à ce lien <a>
			if (currentSlide === i) { // Si l'indicateur de slide est le même que ce petit rond, on ajoute la classe .active pour let mettre en surbrillance
				a.addClass('active');
			}
			$('#ronds').append(a); // Ajout de ce rond dans la <div id="ronds">
		}

		// Mise en place des écouteur d'évènements click
		setOnClicks();

		// Démarrage du slider : on se déplace vers la slide en cours
		goToSlide(currentSlide);
	}

	/**
	 * Fonction setOnClicks
	 * Permet d'initialiser les fonctions d'évènement qui seront appelées lors des clics sur les composants du slider (boutons prev, next et sur les petits rond de navigation)
	 */
	function setOnClicks() {
		
		// Ecoute les "click" sur l'élément #prev
		// --------------------------------------
		$('#prev').on('click', function() {
			currentSlide--; // L'indicateur de slide décroît de 1
			if (currentSlide < 0) { // Si l'indicateur de slide dépasse le nb de slides vers la GAUCHE, on le remet à droite (soit au nb total d'image moins un)
				currentSlide = nbImages - 1;
			}
			$('.rond').removeClass('active').eq(currentSlide).addClass('active'); // Déplace la classe CSS .active sur le rond précédent
			goToSlide(currentSlide); // Déplacement vers la slide précédente
		});

		// Ecoute les "click" sur l'élément #next
		// --------------------------------------
		$('#next').on('click', function() {
			currentSlide++; // L'indicateur de slide augmente de 1
			if (currentSlide > nbImages - 1) { // Si l'indicateur de slide dépasse le nb de slides vers la DROITE, on le remet à gauche (soit à zéro)
				currentSlide = 0;
			}
			$('.rond').removeClass('active').eq(currentSlide).addClass('active'); // Déplace la classe CSS .active sur le rond suivant
			goToSlide(currentSlide); // Déplacement vers la slide suivante
		});

		// Ecoute les "click" sur les ronds de navigations
		// --------------------------------------
		$('.rond').on('click', function() {
			var index = $(this).index(); // Récupère l'index du rond cliqué (si on clique sur le 3ème rond, on aura 2 dans cette variable (car on commence à 0))
			
			// Déplace la classe CSS .active sur ce rond
			$('.rond').removeClass('active');
			$(this).addClass('active');

			currentSlide = index; // Mise à jour de l'indicateur de slide
			goToSlide(index); // Déplacement vers cette nouvelle slide suivante
		});

	} // Fin de la fonction

	// Fonction permettant de se déplacer vers la slide n°'index'
	function goToSlide(index) {
		$('#enfant').animate({ marginLeft: (imageWidth*index*-1) + 'px' }); // Déclanche une animation jQuery
	}

});