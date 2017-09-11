$(document).ready(function(){
    $(".confirmation").on('click', 'button', function(){
       // $(this).closest('.confirmation').find('.ticket').slideDown();
       // $(this).closest('.confirmation').find('.ticket').slideUp();
       $(this).closest('.confirmation').find('.ticket').slideToggle();
    })

    console.log($('li').length); // to query how many nodes are on a page
    console.log($('ul').length);
    console.log($('button').length);
});
