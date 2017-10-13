//Kyle Ramgolam 620076006
window.onload = function () {
  excercise1();
};


function excercise1() 
{
	let Fboundary = document.getElementById("boundary1");
    
	Fboundary.onmouseover = function() {        
        this.setAttribute("class", "boundary youlose");        
	};

}