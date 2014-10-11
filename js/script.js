// @codekit-prepend "../bower_components/jquery/dist/jquery.min.js";
// @codekit-prepend "../bower_components/bootstrap/dist/js/bootstrap.min.js";
// @codekit-prepend "../bower_components/holderjs/holder.js";
// @codekit-prepend "../bower_components/FitText.js/jquery.fittext.js";
// @codekit-prepend "smoothscroll.js";

$(".logo h1").fitText(1);
$(".fitText").fitText(1.8);

$('a').tooltip();

$(document).ready(function(){
   // cache the window object
   $window = $(window);
 
   $('section[data-type="background"]').each(function(){
     // declare the variable to affect the defined data-type
     var $scroll = $(this);
                     
      $(window).scroll(function() {
        // HTML5 proves useful for helping with creating JS functions!
        // also, negative value because we're scrolling upwards                            
        var yPos = -($window.scrollTop() / $scroll.data('speed'));
         
        // background position
        var coords = '50% '+ yPos + 'px';
 
        // move the background
        $scroll.css({ backgroundPosition: coords });   
      }); // end window scroll
   });  // end section function
}); // close out script

/* Create HTML5 element for IE */
document.createElement("section");