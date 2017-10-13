//Kyle Ramgolam 620076006
window.onload = function () {
<<<<<<< HEAD
    excercise1();
};


function excercise1() 
{
=======
    //excercise1();
    excercise2();
};


function excercise1() {

>>>>>>> master
    let Fboundary = document.getElementById("boundary1");
    
    Fboundary.onmouseover = function() {        
        this.setAttribute("class", "boundary youlose");        
    };

}

<<<<<<< HEAD
=======
function excercise2() {

	walls = document.querySelectorAll(".boundary");

	for( var i=0; i<walls.length-1; i++ ){


		walls[i].addEventListener("mouseover", function(){
		 for (var i=0;i<walls.length-1;i++){

			walls[i].setAttribute("class", "boundary youlose");}
		});

	}


}
>>>>>>> master
