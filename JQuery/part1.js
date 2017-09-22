$(document).ready(function(){
    /*
    $(".confirmation").on("click","button",function(){
        //console.log("hello");
        $(this).closest(".confirmation").find(".ticket").slideDown();
    });
    
    $(".confirmation .view-boarding-pass").on("click", function(){
        $(this).closest(".ticket").find("img").show();
    }) */


    // with ajax
    $(".confirmation").on("click","button",function(){
    let url="confirmation.html";
    
       $.ajax(url, {
        // or can be relative url
        // $.ajax("confirmation.html")
           success: function(data){        
               $(".ticket").html(response).slideDown();
           },
            data: {"confNum":1234} // equivalent to url="confirmation.html?confNum=1234"
            // or
            // in html <div class="ticket data-confNum="1234">
            // and
            // data: {"confNum":$(".ticket").data("confNum")} 
        })

        // or

        $.get('confirmation.html', function(responce){
             $(".ticket").html(response).slideDown();
        });


        $(this).closest(".confirmation").find(".ticket").slideDown();
    });


});