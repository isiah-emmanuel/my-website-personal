$(document).on("scroll", function(){
            if ($(document).scrollTop() > 80){
                $(".navbar").addClass("shrink");
            } else {
                $(".navbar").removeClass("shrink");
            }

      });