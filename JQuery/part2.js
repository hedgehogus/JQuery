$(document).ready(function(){
    
    $(".confirmation").on("click", "button", function(){
         $.ajax("confirmation.html", {
            timeout:3000, 
            success: function(data){        
                $(".ticket").html(response).slideDown();
            },            
            error: function(request, errorType, errorMessage){
                alert("error: " + errorType + " with message: " + errorMessage);
            },            
            beforeSend: function(){
                $(".confirmation").addClass('is-loading');               
            },
            complete: function(){
                 $(".confirmation").removeClass('is-loading');                
            }
            
        });
    });
    
    $(".confirmation").on('click', ".view-boarding-pass", function(event){
        event.preventDefault();
        $(".view-boarding-pass").hide();
        $(".boarding-pass").show();
    });
});
    // REFACTOR TO

var confirmation = {
    init:function(){
        //Our existing event hadlers
        $(".confirmation").on("click", "button", this.loadConfirmation);
        $(".confirmation").on("click", ".view-boarding-pass", this.showBoardingPass);
    },
    loadConfirmation:function(){
        $.ajax("confirmation.html", {});
    },
    showBoardingPass:function(event){
        event.preventDefault();
        $(".view-boarding-pass").hide();
        $(".boarding-pass").show();
    }
}

$(document).ready(function(){
    confirmation.init();
})