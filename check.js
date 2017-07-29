

function showPage(){


  document.getElementById("loader").style.display = "none";
  document.getElementById("sidebar").style.display = "block";
  document.getElementById("home").style.display = "block";
  
   
 }


$(document).ready(function(){
    

    new Vivus('canvas', {start: 'autostart', type: 'async',duration: 200, pathTimingFunction: Vivus.EASE}, function(obj){
obj.el.classList.add('fill-1', 'clear-stroke');
  });

  myVar = setTimeout(showPage, 6000);


    $('.letters').hover(function(){
        $(this).addClass('animated wobble');
          
        }, function(){
    $(this).removeClass('animated wobble');
    
}


        );

   
$(".home-icon").click(function(){
  
  $(this).addClass('active');
  $(".about-icon").removeClass('active');
   $(".projects-icon").removeClass('active');

$("#about").fadeOut(1000);
$("#projects").fadeOut(1000);
$("#home").fadeIn(4000);




});

$(".about-icon").click(function(){
  
  $(this).addClass('active');
  $(".home-icon").removeClass('active');
   $(".projects-icon").removeClass('active');


$("#home").fadeOut(1000);
$("#projects").fadeOut(1000);

$("#about").fadeIn(4000);



});

$(".projects-icon").click(function(){
  
  $(this).addClass('active');
  $(".home-icon").removeClass('active');
   $(".about-icon").removeClass('active');


   $("#home").fadeOut(1000);
$("#about").fadeOut(1000);

$("#projects").fadeIn(4000);

});







});
 /* ---- particles.js config ---- */



particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 400,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },

    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "edge",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.7,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": true,
      "attract": {
        "enable": "repulse",
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "bubble"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 100,
        "duration": 0.1
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

