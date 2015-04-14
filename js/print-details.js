
var appPortafolio = {};

 appPortafolio.proyectos = function(data){

 	//imprimir miniaturas
 	function PrintWorksDetails(){

				var details = "";
				for(var k=0; k < data.length; k++){
						details += '<span class="prevpost"><a href="#">prev</a></span><span class="nextpost"><a href="#">next</a></span><span class="close"><a href="#">close</a></span><h4>'+data[k].categories[0].value+'</h4><p>'+data[k].categories[3].value+'</p><img src="'+data[k].categories[5].value+'" alt="imagen de proyecto">';
					

					document.getElementById('content-details').innerHTML= details;
					//document.getElementById('content-details').style.display='block';

				}//for

			 	
            }// printworks

	PrintWorksDetails()     

 }// appPortafolio.proyectos


briefcase.getJSON({leftColumnTitle:"proyectos"}, appPortafolio.proyectos);

