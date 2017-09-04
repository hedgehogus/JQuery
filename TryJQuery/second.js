$(document).ready(function(){
    //$("li").text("new point");
    $(".promo").css("background-color", "#aaaaaa");
    $("ul").css("width", "300px");
    $("#destinations").css("text-transform", "uppercase");

    // descendant selector
    $("#destinations li").css("color","#ff0000");

    // child selector
    $("#destinations > li").css("color","#2200ff");

    //multiple selector
    $(".promo , #france").css("text-shadow","2px 2px 3px #000000");

    //css-like pseudo classes
    $("#destinations li:first").css("text-shadow","2px 2px 3px #00bb00");
    $("#destinations li:last").css("font-size","24px");
    // middle list item(odd numbers from zero);
    $("#destinations li:odd");
    // even positions
    $("#destinations li:even");
});