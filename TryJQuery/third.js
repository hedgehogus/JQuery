$(document).ready(function(){
    // create a <p> node with the price
    var pr =$('<p>From $399.99</p>');
    // create a node but doesnt add it to the DOM

    //.append(<element>) /last child
    //.prepend(<element>) /first child
    //.after(<element>)
    //.before(<element>)
    var button = $("button").css("width","200px");
    $("button").on("click", function(){
        var price =$('<p>From $399.99</p>');

        price.css("width", "200px");
        price.css("background-color", "#ddd");
        price.css("text-align", "center");
        
        $(".vacation").append(price);
        $("button").remove();
    });

   

    //.appendTo(<element>) 
    // $(".vacation").append(price) ===  price.appendTo($(".vacation"));
    //.prependTo(<element>) 
    //.insertAfter(<element>)
    //.insertBefore(<element>)
});