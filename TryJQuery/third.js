$(document).ready(function(){
    // create a <p> node with the price
    var pr =$('<p>From $399.99</p>');
    // create a node but doesnt add it to the DOM

    //.append(<element>) /last child
    //.prepend(<element>) /first child
    //.after(<element>)
    //.before(<element>)
    var button = $("button").css("width","200px");
    $(".vacation").on("click","button", function(){ // event delegation
        var vacation = $(this).closest(".vacation");
        var amount = vacation.data("price");
        var price =$(`<p>From $${amount}</p>`);

        price.css("width", "200px");
        price.css("background-color", "#ddd");
        price.css("text-align", "center");
        
        // $(this).after(price);
        // $(this).parent().parent().append(price);
        // $(this).parents('.vacation').append(price); // all ancestors nodes
        vacation.append(price); //one node
        $(this).remove();
    });

    //or
    
    $("li").on("click", function(){
        var data = $(this).data("price");
        var price =$(`<p>From $${data}</p>`);

        price.css("width", "200px");
        price.css("background-color", "#ddd");
        price.css("text-align", "center");        
                
        // $(this).append(price); 
        // $(this).find("button").remove(); //find child
    });
  
    //.appendTo(<element>) 
    // $(".vacation").append(price) ===  price.appendTo($(".vacation"));
    //.prependTo(<element>) 
    //.insertAfter(<element>)
    //.insertBefore(<element>)

    $("#filters").on("click",".onsale-filter",function(){
        // find all vacations that are on-sale
        // add a class to these vacations       
        $('.highlighted').removeClass("highlighted");
        $(".vacation").filter(".onsale").find("h2").addClass("highlighted");
        //$(".vacation").append($("<p>highlighted</p>"))
    })

    $("#filters").on("click",".expiring-filter",function(){
        // find all vacations that are on-sale
        // add a class to these vacations
        $(".highlighted").removeClass("highlighted");
        $(".vacation").filter(".expiring").children("h2").addClass("highlighted");
    })
});