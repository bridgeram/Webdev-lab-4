
function excercise1() {

    let Fboundary = document.getElementById("boundary1");
    
    Fboundary.onmouseover = function() {        
        this.setAttribute("class", "boundary youlose");        
    };

}

function excercise2() {

	walls = document.querySelectorAll(".boundary");

	for( var i=0; i<walls.length-1; i++ ){


		walls[i].addEventListener("mouseover", function(){
		 for (var i=0;i<walls.length-1;i++){

			walls[i].setAttribute("class", "boundary youlose");}
		});

	}


}