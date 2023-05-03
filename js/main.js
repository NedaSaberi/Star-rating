$(document).ready(function(){
    $('#one').click(function(){
        $('.emoji').css({
            transform: "translateY(-140px)"
        });
        $('#two').css({
            
        });
    });
    $('#two').click(function(){
        $('.emoji').css({
            transform: "translateY(-270px)"
        });
    });$("#three").click(function () {
      $(".emoji").css({
        transform: "translateY(-400px)",
      });
    });$("#four").click(function () {
      $(".emoji").css({
        transform: "translateY(-536px)",
      });
    });$("#five").click(function () {
      $(".emoji").css({
        transform: "translateY(-670px)",
      });
    });
});