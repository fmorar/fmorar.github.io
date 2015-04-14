
var appPortafolio = {};

 appPortafolio.proyectos = function(data){

 	//imprimir miniaturas
 	function PrintWorks(){

                var works =" ";
                
                for(var i=0; i < data.length; i++){
                   works += '<div class="work"><div class="overlay"><a id="'+data[i].categories[4].value+'" href="work-details.html"><img "class="view-work" src="'+data[i].categories[1].value+'" alt="'+data[i].categories[3].value+'"/</a></div></div>';
                } // for
                document.getElementById('content-work').innerHTML=works;

            }// printworks

	PrintWorks()     

 }// appPortafolio.proyectos


briefcase.getJSON({leftColumnTitle:"proyectos"}, appPortafolio.proyectos);

