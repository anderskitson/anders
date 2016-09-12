$( document ).ready(function() {
    $("h1").mouseover(function(){
       $("span").addClass("rotate");
    });
    $(".guy").draggable();
});