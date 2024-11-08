$(document).ready(function(){
    $('#b1').click(function(){
        $('#titulo').toggle(2000);
     })
      $('#b2').click(function(){
       $('html, body').animate({
                 scrollTop: $('#p3').offset().top
               },2000, "swing");
     })
       $(document).ready(function() {
         // Aplica o efeito de hover nos cards inteiros
         $(".card").hover(
           function() {
             $(this).css({
               "transform": "scale(1.1)", 
               "transition": "transform 0.3s" 
             });
           },
           function() {
             $(this).css("transform", "scale(1)"); 
           }
         );
       });
})