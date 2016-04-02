$(function(){

$(".input input").focus(function() {

      $(this).parent(".input").each(function() {
         $("label", this).css({
            "line-height": "18px",
            "font-size": "18px",
            "font-weight": "100",
            "top": "0px"
         })
         $(".spin", this).css({
            "width": "100%"
         })
      });
   }).blur(function() {
      $(".spin").css({
         "width": "0px"
      })
      if ($(this).val() == "") {
         $(this).parent(".input").each(function() {
            $("label", this).css({
               "line-height": "60px",
               "font-size": "24px",
               "font-weight": "300",
               "top": "10px"
            })
         });

      }
   });

   $(".button").click(function() {
       
       $("#btnSpan").html(" ");
       $("#btnSpan").addClass("fa fa-check fa-2x");
       $(this).removeClass("submitBtn");
       $(this).addClass("thanks");
        setTimeout(function(){
            if (!$(".alt-2").hasClass('material-button')) {
         $(".shape").css({
            "width": "100%",
            "height": "100%",
            "transform": "rotate(0deg)"
         })

         setTimeout(function() {
            $(".overbox").css({
               "overflow": "initial"
            })
         }, 600)

         $(".alt-2").animate({
            "width": "140px",
            "height": "140px"
         }, 500, function() {
            $(".box").removeClass("back");
             
            $(".alt-2").removeClass('active');
         });
          

         $(".overbox .title").fadeOut(300);
         $(".overbox .input").fadeOut(300);
         $(".overbox .button").fadeOut(300);
            $(".alt-2").addClass('material-buton');
            $(".heart").fadeIn(3000);
            $(".alt-2").addClass("whiteBtn").fadeIn(300);
      }
        },500);
        $("#heartBtn").attr("disbabled",true);
   });

    
 $(".alt-2").click(closeBtn);
    function closeBtn(){
      if (!$(this).hasClass('material-button')) {
         $(".shape").css({
            "width": "100%",
            "height": "100%",
            "transform": "rotate(0deg)"
         })

         setTimeout(function() {
            $(".overbox").css({
               "overflow": "initial"
            })
         }, 600)

         $(this).animate({
            "width": "140px",
            "height": "140px"
         }, 500, function() {
            $(".box").removeClass("back");
             
            $(this).removeClass('active');
         });
          

         $(".overbox .title").fadeOut(300);
         $(".overbox .input").fadeOut(300);
         $(".overbox .button").fadeOut(300);
          
         $(".alt-2").addClass('material-buton');
        $(".heart").fadeIn(3000);
        $(this).addClass("whiteBtn").fadeIn(300);
      }

   }
    
 
$(".material-button").click(function() {

      if ($(this).hasClass('material-button')) {
         setTimeout(function() {
            $(".overbox").css({
               "overflow": "hidden"
            })
            $(".box").addClass("back");
         }, 200)
         $(this).addClass("pinkHeart");
          $(this).removeClass("whiteBtn");
          
         $(".heart").hide();
          $(this).addClass('active').animate({
            "width": "500px",
            "height": "500px"
         });

         setTimeout(function() {
            $(".shape").css({
               "width": "50%",
               "height": "50%",
               "transform": "rotate(45deg)"
            })

            $(".overbox .title").fadeIn(300);
            $(".overbox .input").fadeIn(300);
            $(".overbox .button").fadeIn(300);
         }, 700)

         $(this).removeClass('material-button');

      }

      if ($(".alt-2").hasClass('material-buton')) {
         $(".alt-2").removeClass('material-buton');
         $(".alt-2").addClass('material-button');
      }

   });
    
});