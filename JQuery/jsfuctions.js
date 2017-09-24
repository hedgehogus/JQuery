// good way to keep our code

function Vacation(destination) {
    this.details = function(){
        console.log(destination);
    }
}

// el - refers to jquery element we are going passing in to the function 
function Confirmation(el) {
    var confirmation = this;
    this.el = el;
    this.ticket= this.el.find(".ticket");
    //this.pass = this.ticket.find(".boarding-pass")
    console.log(this.ticket);
    // helper methods go here
    this.loadConfirmation = function(){        
        confirmation.ticket.slideDown();
    };
    // event method go here
    this.showBoardingPass = function(event){
        event.preventDefault();
        $(this).hide();
        confirmation.el.find(".boarding-pass").show();
    };

    this.el.on("click", "button", this.loadConfirmation);
    this.el.on('click', ".view-boarding-pass", this.showBoardingPass);
}

$(document).ready(function(){
    //create a new confirmation for each ticket
    var paris = new Confirmation($("#paris"));
    var london = new Confirmation($("#london"));
    
})

// ajax context parameter set what is this for other functions