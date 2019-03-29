/**
* Quand on clique sur l'icone a trois points alors le menu flottant apparait et le icone appele une animation qui le fait tourner de vertical à horizontal.
*/
function MouseDownMenu(){	
	//variables
	var iconeMenu = document.querySelector(".fa-ellipsis-v");
	var menuFlottant = document.getElementById("menuFloat");
	var listeMenuFlottant = document.querySelector("#menuFloat ul");
	
	//si l'icone est vertical alors cela veut dire qu'il est fermer et qu'il faut l'ouvrir et appeler la fonction qui le met à horizontal.
	if(iconeMenu.classList.contains("animCliqueMenuVertcial")){
		iconeMenu.classList.remove("animCliqueMenuVertcial");
		iconeMenu.classList.add("animCliqueMenuHorizontal");
		//console.log("horizontal");
		menuFlottant.classList.replace("menuFlottantInvisible", "menuFlottantVisible"); //oldClass, newClass
		menuFlottant.style.display = "block";
		listeMenuFlottant.classList.add("animUlMenu");
		//console.log(listeMenuFlottant);
		
	//sinon, le menu flottant est ouvert et visible et il faut le fermer en animant l'icone de horisontal à vertical.
	}else{
		if(iconeMenu.classList.contains("animCliqueMenuHorizontal")){
			iconeMenu.classList.remove("animCliqueMenuHorizontal");
			iconeMenu.classList.add("animCliqueMenuVertcial");
			//console.log("vertical");
			menuFlottant.classList.replace("menuFlottantVisible", "menuFlottantInvisible");
			menuFlottant.style.display = "none";
			listeMenuFlottant.classList.remove("animUlMenu");
			//console.log( listeMenuFlottant);
		}
	}
}

