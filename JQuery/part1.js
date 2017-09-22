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
    let url="https://www.instagram.com/lyuda_and_hedgehog/";
    
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
        });

        // or

        $.get('confirmation.html', function(responce){
             $(".ticket").html(response).slideDown();
        });


        $(this).closest(".confirmation").find(".ticket").slideDown();

        // WHAT TO DO WHEN OUR REQUEST IS NOT SUCCESFUL

         $.ajax(url, {
            success: function(data){        
                $(".ticket").html(response).slideDown();
            },
            //data: {"confNum":1234},
            error: function(request, errorType, errorMessage){
                alert("error: " + errorType + " with message: " + errorMessage);
            },
            // other parameters
            timeout:3000, // defaults depends of browser
            beforeSend: function(){
                $(".confirmation").addClass('is-loading');
                // good place to trigger a spiner
            },
            complete: function(){
                 $(".confirmation").removeClass('is-loading');
                // good place for turn of that loading screen
                // runs after both succes and error
            }
            
        });
    // this code doesnt look for change inside confirmation class, like adding .view-boarding-pass
    $(".confirmadion .view-boarding-pass").on("click", function(){});
    // and this will work and find class after loading from other request
    $(".confirmation").on('click', ".view-boarding-pass", function(){});

    });


});