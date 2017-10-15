//Kyle Ramgolam 620076006
window.onload = function () {
	S=document.getElementById("start");
	S.addEventListener("mouseover", function(){
		Main();

	});
			
}


function Main() {

    let Fboundary = document.getElementById("boundary1");
    
    Fboundary.onmouseover = function() {        
        this.setAttribute("class", "boundary youlose");        
    };


	walls = document.querySelectorAll(".boundary");
	for( var i=0; i<walls.length-1; i++ ){

		walls[i].addEventListener("mouseover", function(){

			for (var i=0;i<walls.length-1;i++){
				document.getElementById("status").innerHTML = "You Lose!";
				
				walls[i].setAttribute("class", "boundary youlose");
			}
				

		});
	}
	
 	E = document.getElementById("end");

 	E.addEventListener("mouseover",function(){
 		//console.log(Fboundary.className);
 		if (Fboundary.className != "boundary youlose") {
 			document.getElementById("status").innerHTML = "You Win";
 		}
 	});

 	S=document.getElementById("start");
 	M=document.getElementById("maze");

 	S.addEventListener("click", function(){
 		location.reload();
 	});

 	
 	M.addEventListener("mouseleave", function(){
 		for (var i=0;i<walls.length-1;i++){
			document.getElementById("status").innerHTML = "You Lose!";
			walls[i].setAttribute("class", "boundary youlose");
		}
 	});
}