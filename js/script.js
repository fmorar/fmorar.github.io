
(function () {
  var targetElement = document.querySelector('.principal'), // almacena solo el elemento con ese selector no lleva la propiedad all 
      scrollTop,
      targetOffsetTop = targetElement.offsetTop;

  window.addEventListener('scroll', function() {
    scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //iguala el scrolltop a la posicion de la barra de scroll

    if (scrollTop >= targetOffsetTop) {
      targetElement.classList.add('fixed');
    } else {
      targetElement.classList.remove('fixed');
    }
  }, false);
}());


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


