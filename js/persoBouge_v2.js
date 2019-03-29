(function () { // IIFE
    "use strict";

    //Variable pour référencer le jeu
    var animPersoMarche;
	
	//Variable pour référencer le personnage
	var Sprite;
	
	//Constantes du jeu
    var TAILLE_IMAGE = 32;

    //On créera le jeu quand la page HTML sera chargée
    window.addEventListener("load", function () {
        animPersoMarche = new Phaser.Game(290,193, Phaser.AUTO, 'CanvasPersoBouge');

        //Ajout des états du jeu, et sélection de l'état au démarrage
        animPersoMarche.state.add("ChargementMedias", ChargementMedias);
        animPersoMarche.state.add("Jeu", Jeu);

        //Définir l'écran (state) au démarrage
        animPersoMarche.state.start("ChargementMedias");

    }, false);


    ////////////////////////////////
    //      ChargementMedias      //
    ////////////////////////////////

    /**
     * Fonction constructeur (classe) permettant de définir l'écran (state)
     * pour le chargement des médias
     */

    var ChargementMedias = function () {};

    ChargementMedias.prototype = {
		init: function () {
		},
		
        preload: function () {
            //URL commun au chargement des images
			animPersoMarche.load.path = "medias/";
			
			//Image pour le background de la base de données
            animPersoMarche.load.image("bg", "bg.png");
			
			var nomPerso = document.getElementById("nomPerso").innerHTML;			
			var spriteNomMarche = ["Kienne", "Reyla", "Adler", "Friedrich", "Shix", "Faust", "Celessria", "Reovul"];
			
			if(nomPerso === spriteNomMarche[0]){
				//Image pour le personnage de la base de données			
				Sprite = animPersoMarche.load.spritesheet("persoPixel", "sprites/" + spriteNomMarche[0] + ".png", 100, 100);
			}
			
			if(nomPerso === spriteNomMarche[1]){
				//Image pour le personnage de la base de données			
				Sprite = animPersoMarche.load.spritesheet("persoPixel", "sprites/" + spriteNomMarche[1] + ".png", 100, 100);
			}
			
			if(nomPerso === spriteNomMarche[2]){
				//Image pour le personnage de la base de données			
				Sprite = animPersoMarche.load.spritesheet("persoPixel", "sprites/" + spriteNomMarche[2] + ".png", 100, 100);
			}
			
			//Image des personnages pour les animations de marche
			var spriteMarcheKienne = animPersoMarche.load.spritesheet("persoPixel", "sprites/Kienne.png", 100, 100);
			var spriteMarcheReyla = animPersoMarche.load.spritesheet("persoPixel", "sprites/Reyla.png", 100, 100);
			var spriteMarcheAdler = animPersoMarche.load.spritesheet("persoPixel", "sprites/Adler.png", 100, 100);
			var spriteMarcheFriedrich = animPersoMarche.load.spritesheet("persoPixel", "sprites/Friedrich.png", 100, 100);
			var spriteMarcheShix = animPersoMarche.load.spritesheet("persoPixel", "sprites/Shix.png", 100, 100);
			var spriteMarcheFaust = animPersoMarche.load.spritesheet("persoPixel", "sprites/Faust.png", 100, 100);
			var spriteMarcheCelessira = animPersoMarche.load.spritesheet("persoPixel", "sprites/Celessria.png", 100, 100);
			var spriteMarcheReovul = animPersoMarche.load.spritesheet("persoPixel", "sprites/Reovul.png", 100, 100);

        },

        create: function () {
            //Quand le chargement des actifs est complété - on affiche l'écran du jeu
            animPersoMarche.state.start("Jeu");			
        }
    };


    ////////////////////////////////
    //          EcranJeu         //
    ////////////////////////////////

    /**
     * Fonction constructeur (classe) permettant de définir l'écran (state)
     * pour la scène du jeu...
     */

    var Jeu = function () {
        //Le personnage qui bouge
        this.persoPixel = null;
        //Les touches fléchées du clavier
        this.lesFleches = null;
        //Les vitesses du perso - avec la physique elle sera calculée à une cadence de 60ips
        this.vitessePersoX = 50;
        this.vitessePersoY = 50;
    };

    Jeu.prototype = {
        create: function () {
			//Ajouter image de fond
			var bg = this.add.image(0, 0, 'bg');
			bg.anchor.x = 0;
			bg.anchor.y = 0;
			
            //Place le personnage
            this.placerElementsDuJeu();

            //Gestion des flèches du clavier
            //this.lesFleches = animPersoMarche.input.keyboard.createCursorKeys();
			this.lesFleches = animPersoMarche.input.keyboard.addKeys({'up': Phaser.KeyCode.W, 'down': Phaser.KeyCode.S, 'left': Phaser.KeyCode.A, 'right': Phaser.KeyCode.D});

            //Maintenant, on va gérer la physique du jeu
            this.gererLaPhysiqueDuJeu();
			
			
			
			
			animPersoMarche.input.onDown.add(function changeTexture(){	
				var nomPerso = document.getElementById("nomPerso").innerHTML;			
				var spriteNomMarche = ["Kienne", "Reyla", "Adler", "Friedrich", "Shix", "Faust", "Celessria", "Reovul", "Shopie"];
							
				if(nomPerso === spriteNomMarche[1]){
					//Image pour le personnage de la base de données			
					//Sprite.loadTexture('Reyla');
					Sprite = animPersoMarche.load.spritesheet("persoPixel", "sprites/" + spriteNomMarche[1] + ".png", 100, 100);
					Sprite.loadTexture('Reyla');
					console.log(Sprite);	
				}
				
				if(nomPerso === spriteNomMarche[2]){
					//Image pour le personnage de la base de données			
					Sprite.loadTexture(""+spriteNomMarche[2]+"", 0);
				}
				
				
			});
			
        },

        placerElementsDuJeu: function () {
            //Placer le personnage sous forme de sprite, dans la première case de la grille
            //Au départ on lui attribue  l'image au repos
            this.persoPixel = animPersoMarche.add.sprite(0,0,"persoPixel", 0);
            this.persoPixel.anchor.set(0.5);


            //Les animations du perso gérées dans ce jeu...
            // Animation du cycle de marche (vers la droite) : "marcheDroite"
            this.persoPixel.animations.add("marcheDroite", [6,7,8], 10, true);
			
            //Les animations du perso gérées dans ce jeu...
            // Animation du cycle de marche (vers la gauche) : "marcheGauche"
            this.persoPixel.animations.add("marcheGauche", [3,4,5], 10, true);

			
            // Animation du cycle de marche vertical (vers le haut) : "marcheHaut"
            this.persoPixel.animations.add("marcheHaut", [9,10,11], 10, true);
			
			 // Animation du cycle de marche vertical (vers le bas) : "marcheBas"
            this.persoPixel.animations.add("marcheBas", [0,1,2], 10, true);
        },

        gererLaPhysiqueDuJeu: function () {
            //Ajout de la physique pour l'ensemble du jeu
            animPersoMarche.physics.startSystem(Phaser.Physics.ARCADE);

            //Ajout de la physique pour notre personnage
            animPersoMarche.physics.enable(this.persoPixel, Phaser.Physics.ARCADE);

            //Attribuer une vitesse sur l'axe des x au perso
            this.persoPixel.body.velocity.x = this.vitessePersoX;

            //Attribuer une vitesse sur l'axe des y au perso
            this.persoPixel.body.velocity.y = this.vitessePersoY;

            /*//Diminue la taille du corps physique du perso pour améliorer la détection des collisions...
            console.log(this.persoPixel.body.width);
            console.log(this.persoPixel.body.height);*/

           /* //setSize(width, height, offsetX, offsetY)
            this.persoPixel.body.setSize(18, 37, 15, 7);*/

            //S'assurer que le perso ne sort pas des limites de l'écran
            this.persoPixel.body.collideWorldBounds = true;

        },

        update: function () {
            //Détecter s'il la touche flèche gauche ou flèche droite du clavier est abaissée
            this.persoPixel.body.velocity.x = 0;
            this.persoPixel.body.velocity.y = 0;


            if (this.lesFleches.left.isDown) {
                //Déplacement vers la gauche - on inverse la vitesse
                this.persoPixel.body.velocity.x = -this.vitessePersoX;

                //On change l'animation et le sens du perso
                this.persoPixel.animations.play('marcheGauche');
				
				//changer la couleur de la touche A si elle est selectionnée
				var toucheW = document.getElementById("w");	
				var toucheA = document.getElementById("a");	
				var toucheS = document.getElementById("s");	
				var toucheD = document.getElementById("d");	
				toucheW.style.color = "#f3bed6";
				toucheA.style.color = "white";
				toucheS.style.color = "#f3bed6";
				toucheD.style.color = "#f3bed6";

            } else if (this.lesFleches.right.isDown) {
                //Déplacement vers la droite
                this.persoPixel.body.velocity.x = this.vitessePersoX;

                //On change l'animation et le sens du perso
                this.persoPixel.animations.play('marcheDroite');
				
				//changer la couleur de la touche D si elle est selectionnée
				var toucheW = document.getElementById("w");	
				var toucheA = document.getElementById("a");	
				var toucheS = document.getElementById("s");	
				var toucheD = document.getElementById("d");	
				toucheW.style.color = "#f3bed6";
				toucheA.style.color = "#f3bed6";
				toucheS.style.color = "#f3bed6";
				toucheD.style.color = "white";

				
            } else if (this.lesFleches.up.isDown) {
                //Déplacement vers le haut
                this.persoPixel.body.velocity.y = -this.vitessePersoY;

                //On change l'animation
                this.persoPixel.animations.play('marcheHaut');
				
				//changer la couleur de la touche W si elle est selectionnée
				var toucheW = document.getElementById("w");	
				var toucheA = document.getElementById("a");	
				var toucheS = document.getElementById("s");	
				var toucheD = document.getElementById("d");	
				toucheW.style.color = "white";
				toucheA.style.color = "#f3bed6";
				toucheS.style.color = "#f3bed6";
				toucheD.style.color = "#f3bed6";

            } else if (this.lesFleches.down.isDown) {
                //Déplacement vers le bas
                this.persoPixel.body.velocity.y = this.vitessePersoY;
				
				//On change l'animation
                this.persoPixel.animations.play('marcheBas');
				
				//changer la couleur de la touche S si elle est selectionnée
				var toucheW = document.getElementById("w");	
				var toucheA = document.getElementById("a");	
				var toucheS = document.getElementById("s");	
				var toucheD = document.getElementById("d");	
				toucheW.style.color = "#f3bed6";
				toucheA.style.color = "#f3bed6";
				toucheS.style.color = "white";
				toucheD.style.color = "#f3bed6";

            } else {
                //On arrète l'animation et on met l'image au repos
                this.persoPixel.animations.stop();
                this.persoPixel.frame = 1;
				
				//aucune des touches n'est selctionnée donc elles ont tous leur couleur de base
				var toucheW = document.getElementById("w");	
				var toucheA = document.getElementById("a");	
				var toucheS = document.getElementById("s");	
				var toucheD = document.getElementById("d");	
				toucheW.style.color = "#f3bed6";
				toucheA.style.color = "#f3bed6";
				toucheS.style.color = "#f3bed6";
				toucheD.style.color = "#f3bed6";
            }
			
			//console.log("yup");
			//URL commun au chargement des images
			/*animPersoMarche.load.path = "medias/";
			var nomPerso = document.getElementById("nomPerso").innerHTML;			
			var spriteNomMarche = ["Kienne", "Reyla", "Adler", "Friedrich", "Shix", "Faust", "Celessria", "Reovul", "Shopie"];
			var Sprite = animPersoMarche.load.spritesheet("sprites/" + spriteNomMarche[0] + ".png");
						
			if(nomPerso === spriteNomMarche[1]){
				//Image pour le personnage de la base de données			
				Sprite.loadTexture(spriteNomMarche[1]+ ".png");
			}
			
			if(nomPerso === spriteNomMarche[2]){
				//Image pour le personnage de la base de données			
				Sprite.loadTexture("sprites/" + spriteNomMarche[2] + ".png");
			}*/			
        },

        render: function () {
            //doit reduire le body(block vert) pour plus petit, pour ne pas collider trop loin des obstacles
            //animPersoMarche.debug.body(this.persoPixel);
        },
		
		changeTexture : function () {
			//console.log("yup");
			var nomPerso = document.getElementById("nomPerso").innerHTML;			
			var spriteNomMarche = ["Kienne", "Reyla", "Adler", "Friedrich", "Shix", "Faust", "Celessria", "Reovul", "Shopie"];
						
			if(nomPerso === spriteNomMarche[1]){
				//Image pour le personnage de la base de données			
				this.persoPixel.loadTexture(spriteNomMarche[1],0);
			}
			
			if(nomPerso === spriteNomMarche[2]){
				//Image pour le personnage de la base de données			
				Sprite.loadTexture(spriteNomMarche[2],0);
			}
		}
    };

})(); //Fin IIFE
