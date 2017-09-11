$(document).ready(function(){
    $(".confirmation").on('click', 'button', function(){
       // $(this).closest('.confirmation').find('.ticket').slideDown();
       // $(this).closest('.confirmation').find('.ticket').slideUp();
       $(this).closest('.confirmation').find('.ticket').slideToggle();
    })

    console.log($('li').length); // to query how many nodes are on a page
   // console.log($('ul').length);
   // console.log($('button').length);
   

    $(".hover").on("mouseenter","h1", showInformation);
    $(".hover").on("mouseout","h1", hideInformation);  


   // mouse events
   // click
   // dbclick
   // focusin
   // focuseout
   // mousedown
   // mouseup
   // mousemove
   // mouseout
   // mousenter
   // mouseleave
   // mouseover


   //Keyboard and Form events

    let price = +$('.vacation').data("price"); // + converts to a number
    $('.vacation').on("keyup", ".quantity",function(){
        // get the price of this vacation
        // get the quantity entered
        // set the total to price * quantity

        let q = +$(this).val();
        $("#total").text((q*price).toFixed(2));
        console.log(parseFloat((q*price).toFixed(2)));
        
    });
    console.log(price);
    
    // KEYBOARD EVENTS
    // - keypress
    // - keydown
    // - keyup

    // FORM EVENTS
    // - blur;
    // - focus;
    // - select;
    // - submit;
    // - change;
    
    // .val(<new value>) - set value
    // .val() - get value
 
});

function showInformation() {
         $(this).closest(".hover").find("section").slideDown();
    }

function hideInformation(){
        $(this).closest(".hover").find("section").slideUp();
    }
