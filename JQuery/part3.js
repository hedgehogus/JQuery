$(document).ready(function(){
    var form = new CreateForm($("form"));
})

function CreateForm(el){
    this.el = el;
    let context = this.el;   
    context.on("submit",function(e){
        e.preventDefault();
        console.log($('[name="destination"]').val());
        // Ajax post request
        var form = $(this);
        $.ajax("/book", {
            type:"POST",
            // data: {
            //     "destination":$('[name="destination"]').val(),
            //     "quantity":$('[name="quantity"]').val(),
            // }

            // but better use serialize

            data:form.serialize(),
            success: function(result){
                form.remove();
                $("#vacation").hide().html(result).fadeIn();
            }
        });

        // JSON Query

        $.ajax($('form').attr("action"), {
            type:"POST",
            data:form.serialize(),
            dataType: "json", // parse the response as Json
            success: function(result){
                form.remove();

                var msg = $("<p></p>");
                msg.append("Destination: " + result.location + ". ");
                msg.append("Price: " + result.totalPrice + ". ");
                msg.append("Nights: " + result.nights + ". ");
                msg.append("Confirmation: " + result.confirmation + ". ");

                $("#vacation").hide().html(msg).fadeIn();
            },
            contentType: "application/json" // ask the server to respond with JSON
        })

        // example

         $.ajax('/book', {
            type: 'POST',
             data: $('form').serialize(),
            dataType: 'json',
            success: function(response) {
                $('.tour').html('<p></p>')
                     .find('p')
                     .append('Trip to ' + response.description)
                     .append(' at $' + response.price)
                     .append(' for ' + response.nights + ' nights')
                     .append('. Confirmation: ' + response.confirmation);
      }
    });
    });
}

// JSON - Java Script Object Notation

// Server returns details, we can use it as we wish

 let a = { 
    totalPrice: 2196.00,
    nights: 4,
    location: "paris, france",
    confirmation: "345feab"
}