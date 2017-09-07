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
        
        // $(this).after(price);
        // $(this).parent().parent().append(price);
        // $(this).parents('.vacation').append(price); // all ancestors nodes
        $(this).closest('.vacation').append(price); //one node
        $(this).remove();
    });

    //or
    
    $("li").on("click", function(){
        var price =$('<p>From $399.99</p>');

        price.css("width", "200px");
        price.css("background-color", "#ddd");
        price.css("text-align", "center");        
        
        $(this).append(price); 
        $(this).find("button").remove(); //find child
    });

   

    //.appendTo(<element>) 
    // $(".vacation").append(price) ===  price.appendTo($(".vacation"));
    //.prependTo(<element>) 
    //.insertAfter(<element>)
    //.insertBefore(<element>)
});