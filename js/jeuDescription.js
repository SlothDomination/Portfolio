window.onload = function(){
	var sDescripJeu = document.getElementsByClassName("DescriptJeu"); 
	var i;
	for (i = 0; i<sDescripJeu.length; i++){
		sDescripJeu[i].style.display = "none";
	}
	
}

function montrerDescript0(){
	var sDescripJeu = document.getElementsByClassName("DescriptJeu"); 
	var classId = document.getElementById("0");
	if (sDescripJeu[0].style.display == "none"){
		sDescripJeu[0].style.display = "inline-block";
		classId.classList.remove("fa-angle-down");
		classId.classList.add("fa-angle-up");
		console.log("down");		
	}else{
		sDescripJeu[0].style.display = "none";
		classId.classList.remove("fa-angle-up");
		classId.classList.add("fa-angle-down");
		console.log("up");
	}
}

function montrerDescript1(){
	var sDescripJeu = document.getElementsByClassName("DescriptJeu"); 
	var classId = document.getElementById("1");
	if (sDescripJeu[1].style.display == "none"){
		sDescripJeu[1].style.display = "inline-block";
		classId.classList.remove("fa-angle-down");
		classId.classList.add("fa-angle-up");
		console.log("down");		
	}else{
		sDescripJeu[1].style.display = "none";
		classId.classList.remove("fa-angle-up");
		classId.classList.add("fa-angle-down");
		console.log("up");
	}
}

function montrerDescript2(){
	var sDescripJeu = document.getElementsByClassName("DescriptJeu"); 
	var classId = document.getElementById("2");
	if (sDescripJeu[2].style.display == "none"){
		sDescripJeu[2].style.display = "inline-block";
		classId.classList.remove("fa-angle-down");
		classId.classList.add("fa-angle-up");
		console.log("down");		
	}else{
		sDescripJeu[2].style.display = "none";
		classId.classList.remove("fa-angle-up");
		classId.classList.add("fa-angle-down");
		console.log("up");
	}
}

function montrerDescript3(){
	var sDescripJeu = document.getElementsByClassName("DescriptJeu"); 
	var classId = document.getElementById("3");
	if (sDescripJeu[3].style.display == "none"){
		sDescripJeu[3].style.display = "inline-block";
		classId.classList.remove("fa-angle-down");
		classId.classList.add("fa-angle-up");
		console.log("down");		
	}else{
		sDescripJeu[3].style.display = "none";
		classId.classList.remove("fa-angle-up");
		classId.classList.add("fa-angle-down");
		console.log("up");
	}
}