
//variables que añaden funcionalidad a las particulas
particlesJS('particles-js', {
  particles: {
    color: '#000',
    color_random: false,
    shape: 'circle', // "circle", "edge" or "triangle"
    opacity: {
      opacity: 1,
      anim: {
        enable: false,
        speed: 1.5,
        opacity_min: 0,
        sync: false
      }
    },
    size: 2.5,
    size_random: true,
    nb: 100,
    line_linked: {
      enable_auto: true,
      distance: 140,
      color: '#000',
      opacity: 1,
      width: 1,
      condensed_mode: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      speed: 1
    }
  },
  interactivity: {
    enable: true,
    mouse: {
      distance: 250
    },
    detect_on: 'canvas', // "canvas" or "window"
    mode: 'grab', // "grab" of false
    line_linked: {
      opacity: .5
    },
    events: {
      onclick: {
        enable: true,
        mode: 'push', // "push" or "remove"
        nb: 4
      },
      onresize: {
        enable: true,
        mode: 'out', // "out" or "bounce"
        density_auto: false,
        density_area: 800 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
      }
    }
  },
  /* Retina Display Support */
  retina_detect: true
});




//appPortafolio


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

appPortafolio.validacion = function(){


       var name = document.getElementById('name').value;
       var email = document.getElementById('email').value;
       var emailReg = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
       var message = document.getElementById('message').value;
       var datos=[];// almacena los datos del formulario

       if( name === null || name.length === 0){
          document.getElementById('error-name').innerHTML="Este campo es requerido";
        return false;    
       }
        if( email === null || name.length === 0){
          document.getElementById('error-name').innerHTML="Este campo es requerido";
        return false;    
       }
        else if(!(email).match(emailReg)){
          document.getElementById('error-email').innerHTML="Este campo es invalido";
          return false;    
        } 
        else if( message === null || message.length === 0){
          document.getElementById('error-message').innerHTML="Este campo es requerido";
        return false;    
       }
       else{   
          datos.push(name, email, message);
          console.log(datos);
          return true;
     }
  
}// validacion

 function enviar(){

       if(appPortafolio.validacion()){
        document.getElementById('Send').reset() ; // se uso reset y no submit para que no se quite de  console
        alert("El mensaje se envio correctamente");
        document.getElementById('error-email').innerHTML=" ";
        document.getElementById('error-name').innerHTML=" ";
        document.getElementById('error-message').innerHTML=" "; 
       }
  }