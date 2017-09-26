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
        })
    });
}