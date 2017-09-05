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

    //filtering by traversing
    //it takes a bit more code, but its faster
    $("#destinations").find(li);

    $("li:first");
    $("li").first();

    $("li:last");
    $("li").last();

    //walking the dome
    //method chaining
    $("li").first().next();
    // go back to the first item
    $("li").first().next().prev();

    //get parent of selected element
    $("li").first().parent();

    //get only the direct children
    $("#destinations").children("li");
    //children(), unlike find(), only selects direct children
});