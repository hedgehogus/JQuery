$(document).ready(function(){
    // create a <p> node with the price
    var price =$('<p>From $399.99</p>');
    // create a node but doesnt add it to the DOM

    //.append(<element>) /last child
    //.prepend(<element>) /first child
    //.after(<element>)
    //.before(<element>)

    $(".vacation").append(price);
    $("button").remove();

    //.appendTo(<element>) 
    // $(".vacation").append(price) ===  price.append($(".vacation"));
    //.prependTo(<element>) 
    //.insertAfter(<element>)
    //.insertBefore(<element>)
});