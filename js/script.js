
var appPortafolio = {};

 appPortafolio.proyectos = function(data){

 	//imprimir miniaturas
 	function PrintWorks(){

                var works =" ";
                
                for(var i=0; i < data.length; i++){
                   works += '<div id="'+data[i].categories[4].value+'" class="work"><div class="overlay"><img "class="view-work" src="'+data[i].categories[1].value+'" alt="'+data[i].categories[3].value+'"/></div></div>';
                }   
                document.getElementById('content-work').innerHTML=works;

 							var StoreTasks = document.querySelectorAll('.work');

 							for(var k=0; k < StoreTasks.length; k++){
 								StoreTasks[k].onclick = function(){
 									var number = this.id;
 									console.log(number)
 									var details = "";
 									details += '<span class="prevpost"><a href="#">prev</a></span><span class="nextpost"><a href="#">next</a></span><span class="close"><a href="#">close</a></span><h4>'+data[number].categories[0].value+'</h4><p>'+data[number].categories[1].value+'</p><img src="'+data[k].categories[5].value+'" alt="imagen de proyecto">';
 								}	
 								document.getElementById('content-details').innerHTML= details;
 								//document.getElementById('content-details').style.display='block';
 							}

			 	
            }
	PrintWorks()            
 }

 // imprimir detalles 

 	

briefcase.getJSON({leftColumnTitle:"proyectos"}, appPortafolio.proyectos);

