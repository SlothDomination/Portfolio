//VARIABLES
var Personnages = [
/*-----STEAMCORE---------------------------*/
	//les array qui contiennet les informations des protagonists rouges de SteamCore
	Kienne = ["Kienne", "Humain", "1", "medias/sprites/Kienne.png", "medias/personnagesHD/Kienne.png"],
	Reyla = ["Reyla", "Humain", "1", "medias/sprites/Reyla.png", "medias/personnagesHD/Reyla.png"],
	Adler = ["Adler", "Humain", "1", "medias/sprites/Adler.png", "medias/personnagesHD/Adler.png"],
	Friedrich = ["Friedrich", "Humain", "1", "medias/sprites/Friedrich.png", "medias/personnagesHD/Friedrich.png"],

	//les array qui contiennet les informations des ennemis bleus de SteamCore
	Shix = ["Shix", "Humain?", "??", "medias/sprites/Shix.png", "medias/personnagesHD/Shix.png"],
	Faust = ["Faust", "Humain", "25", "medias/sprites/Faust.png", "medias/personnagesHD/Faust.png"],
	Celessria = ["Celessria", "Humain", "21", "medias/sprites/Celessria.png", "medias/personnagesHD/Celessria.png"],
	Reovul = ["Reovul", "Humain", "23", "medias/sprites/Reovul.png", "medias/personnagesHD/Reovul.png"],
];//------fin array Personnages

var sSrcImgPersoHD = document.querySelector("div>img");
var iValeurArrayPerso = 0;
var iLengthPerso = Personnages.length;

/**
* Faire en sorte que la fonction s'auto-execute en mettant la permiere valeur du array. Ensuite, faire en sorte que losrque qu'on click (mousedown) sur une des fleche que le personnage suivant ou precedant est selectionner. Si le array est deja a la position 0 alors fleche ne s'allume pas. Si array position > 0, la position du array peut se faire incrementer par 1 ou desincrementer par 1.
*/

//function ChercherInfoPerso(){
window.onload = function(){	
	document.getElementById("nomPerso").innerHTML = Personnages[iValeurArrayPerso][0];
	document.getElementById("especePerso").innerHTML = Personnages[iValeurArrayPerso][1];
	document.getElementById("nivPerso").innerHTML = Personnages[iValeurArrayPerso][2];
	sSrcImgPersoHD.src = Personnages[iValeurArrayPerso][4];
}

/**
* La fonction va chercher le prochain personnage dans le tableau avec les informations qui viennet avec dans un autre tableau, puis il affiche les nouvelles informations dans le innerHTML et la nouvelle image du personnage, cela jusqu'a ce qu'il se rend au bout du tableau
*/
function PersoProchain(){
	if(iValeurArrayPerso < iLengthPerso-1){
		iValeurArrayPerso ++;
		document.getElementById("nomPerso").innerHTML = Personnages[iValeurArrayPerso][0];
		document.getElementById("especePerso").innerHTML = Personnages[iValeurArrayPerso][1];
		document.getElementById("nivPerso").innerHTML = Personnages[iValeurArrayPerso][2];
		sSrcImgPersoHD.src = Personnages[iValeurArrayPerso][4];
		//alert(iValeurArrayPerso);
	}
}

/**
* La fonction va chercher le personnage précédant dans le tableau avec les informations qui viennet avec dans un autre tableau, puis il affiche les nouvelles informations dans le innerHTML et la nouvelle image du personnage, cela jusqu'a ce qu'il se rend au bout du tableau
*/
function PersoPrecedant(){
	if(iValeurArrayPerso !== 0){
		iValeurArrayPerso --;
		document.getElementById("nomPerso").innerHTML = Personnages[iValeurArrayPerso][0];
		document.getElementById("especePerso").innerHTML = Personnages[iValeurArrayPerso][1];
		document.getElementById("nivPerso").innerHTML = Personnages[iValeurArrayPerso][2];
		sSrcImgPersoHD.src = Personnages[iValeurArrayPerso][4];
	}
	
}

/**
* Permet d'afficher le texte à côté de la fléche gauche pour indiquer si c'est le personnage précédant qui sera appelé si l'utilisateur clique sur la fléche
*/
function ActiveTxtFlecheGauche() {
	var FlecheGauche = document.getElementById("flecheGauche");
	var TextGauche = document.getElementById("motFlecheGauche");
		
	TextGauche.style.display = "inline-block";	
}

/**
* Permet d'afficher le texte à côté de la fléche droite pour indiquer si c'est le personnage suivant qui sera appelé si l'utilisateur clique sur la fléche
*/
function ActiveTxtFlecheDroite() {
	var FlecheDroite = document.getElementById("flecheDroite");
	var TextDroite = document.getElementById("motFlecheDroite");

	TextDroite.style.display = "inline-block";	
}

/**
* Cache le texte àa côté des fléches après que l'utilisateur enlever sa souris de la fléche en question
*/
function MouseOut(){
	var FlecheGauche = document.getElementById("flecheGauche");
	var TextGauche = document.getElementById("motFlecheGauche");
	var FlecheDroite = document.getElementById("flecheDroite");
	var TextDroite = document.getElementById("motFlecheDroite");
	
	TextGauche.style.display = "none";
	TextDroite.style.display = "none";
}



