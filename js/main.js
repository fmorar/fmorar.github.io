

//appPortafolio




var appPortafolio = {};

 appPortafolio.proyectos = function(data){ //data llama al json almacenado en google.docs

 	//imprimir miniaturas
 	function PrintWorks(){

                var works =" ";
                
                for(var i=0; i < data.length; i++){
                   works += '<div class="work"><div class="overlay"><img id="'+data[i].categories[4].value+'"  "class="view-work" src="'+data[i].categories[1].value+'" alt="'+data[i].categories[3].value+'"/></div></div>';
                } // for recorre el arreglo y almacena todos los datos
                document.getElementById('content-work').innerHTML=works;

            }// printworks

	PrintWorks() 
	//imprimir miniaturas



 	function PrintWorksDetails(){

 		var WorksDetails = document.querySelectorAll('.view-work'); //almacena todos los elementos bajo esa clase en un arreglo
 		console.log(WorksDetails);
		
 		for(var j=0; j < WorksDetails.length; j++){
 			WorksDetails[j].onclick = function(){
 				var Details = this.id;
 				console.log(Details);
 				var content = " ";
 				content +='<span class="prevpost"><a href="#">prev</a></span><span class="nextpost"><a href="#">next</a></span><span class="close"><a href="#">close</a></span><h4>'+data[Details].categories[0].value+'</h4><p>'+data[Details].categories[3].value+'</p><img src="'+data[Details].categories[5].value+'" alt="imagen de proyecto">';
 				document.getElementById('content-work').style.display = 'none';
 				document.getElementById('content-details').innerHTML=content;
 			}
 		}
    }// PrintWorksDetails no se porque no imprime los detalles todo parece estar bien, no tira error de consola

	PrintWorksDetails()        

 }// appPortafolio.proyectos

 
 

briefcase.getJSON({leftColumnTitle:"proyectos"}, appPortafolio.proyectos);





  $(".menu-toggle").on('click', function() {
  $(this).toggleClass("on");
  $('.menu-section').toggleClass("on");
  $("nav ul").toggleClass('hidden');
});


  		(function() {
			var 
				// Obtain a reference to the canvas element
				// using its id.
				htmlCanvas = document.getElementById('c'),
			
			  	// Obtain a graphics context on the
			  	// canvas element for drawing.
			  	context = htmlCanvas.getContext('2d');
 
			// Start listening to resize events and
			// draw canvas.
			initialize();
 
			function initialize() {
				// Register an event listener to
				// call the resizeCanvas() function each time 
				// the window is resized.
				window.addEventListener('resize', resizeCanvas, false);
				
				// Draw canvas border for the first time.
				resizeCanvas();
			}
				
		
			// Runs each time the DOM window resize event fires.
			// Resets the canvas dimensions to match window,
			// then draws the new borders accordingly.
			function resizeCanvas() {
				htmlCanvas.width = window.innerWidth;
				htmlCanvas.height = window.innerHeight;
			}
		
		})();