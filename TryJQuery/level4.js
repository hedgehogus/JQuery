$(document).ready(function(){
    $(".confirmation").on('click', 'button', function(){
       // $(this).closest('.confirmation').find('.ticket').slideDown();
       // $(this).closest('.confirmation').find('.ticket').slideUp();
       $(this).closest('.confirmation').find('.ticket').slideToggle();
    })

    console.log($('li').length); // to query how many nodes are on a page
   // console.log($('ul').length);
   // console.log($('button').length);

    $(".hover").on("mouseenter","h1",function(){
       $(this).closest(".hover").find("section").slideDown();
    });
    $(".hover").on("mouseleave","h1",function(){
       $(this).closest(".hover").find("section").slideUp();
    });  

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
 
});
