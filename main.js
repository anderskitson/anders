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

        $("h1").css("background-size","cover");
        $("h1").css("height","400px");

        // if ( $( this ).hasClass( "imgSwap" ) ) {
        //     $("h1").css("background","url(img/diamonds.jpg");
        //     $("#menu").removeClass("imgSwap");
        //
        // }


    });

    $(".imgSwap").click(function(){
        // $("h1").css("background","url(img/anders.jpg");
        $(this).addClass("imgShow");
        $(this).removeClass("imgSwap");
        console.log("test1");

    });
    $(".imgShow").click(function(){
        // $("h1").css("background","url(img/diamonds.jpg");
        $(this).addClass("imgSwap");
        $(this).removeClass("imgShow");
        console.log("test2");

    });
});