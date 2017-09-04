$(document).ready(function(){
    //$("li").text("new point");
    $(".promo").css("background-color", "#aaaaaa");
    $("ul").css("width", "300px");
    $("#destinations").css("text-transform", "uppercase");

    // descendant selector
    $("#destinations li").css("color","#ff0000");

    // child selector
    $("#destinations > li").css("color","#2200ff");
});