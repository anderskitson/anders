$( document ).ready(function() {
    $("h1").mouseover(function(){
       $("span").addClass("rotate");
    });
    $(".guy").draggable();
    $("#menu").click(function(){
       $(".hide").toggle();
    });
    $("#menu").click(function(){
        $(".show").toggle();
    });
});