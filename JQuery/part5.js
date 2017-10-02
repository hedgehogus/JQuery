function picture(){
    console.log("Show Plane");
}

function status(){
    console.log("in service");
}

function zoom(){
    console.log("zoom Picture");
}

function showPrice(){
        console.log("show price");
        var vacation = $(this).closest('.vacation');
        var price = vacation.data('price');
        var details = $('<p>Book 3 days for $' + (3*price) + '</p>');
        vacation.append(details);
   
}

// SETTING UP A PLUGIN

// $.fn - Makes the priceify method available
// priceify - name of our plugin
$.fn.priceify = function(options ){
   
    console.log("pricify called");
    // this will be $('.vacation')
   
    this.each(function(){
        // $.extend function for combining objects
        var settings = $.extend({days:3,
                    vacation:$(this),
                    price: $(this).data('price')
                }, options); 

        var show = function(){            
            var details = $('<p>Book '+ settings.days +' days for $' + (settings.days*settings.price) + '</p>');
            $(this).hide();
            settings.vacation.find('.remove-vacation').before(details);
        };

        settings.vacation.on('click.priceify', 'button', show);
        settings.vacation.on('show.priceify','button', show);

        var remove = function(){
            settings.vacation.off('.priceify').hide();
        };

        settings.vacation.on("click.remove", ".remove-vacation", remove);

    });


    $('.show-prices').on('click', function(event){
        event.preventDefault();
        $('.vacation button').trigger('click.priceify');
        $(this).hide();
    })

};

$(document).ready(function(){
    /* 
    $(".button").on("click", picture);
    $(".button").on("click", status);

    // stops watching for the given event

    // removes all of the callbacks
    $(".button").off("click");
    
    // EVENT NAMESPACING

    $(".button").on("click.image", picture);
    $(".button").on("click.details", status);

    // removes only only one event handler
    $(".button").off("click.image");

    //removes all types of event handlers that end in .image
    $('.button').off(".image");

    //Trigger
    $(".button").trigger("click");
    // will trigger the given event on the target

    //we can also trigger individual namespaces events
    $(".button").trigger("click.details");

    // div 2
    //first lets define the handler on the show price button
    $('.vacation').on('click.price', 'button', showPrice);

    //Our typicall event handler syntax
    // $(<dom element>).on("<event>.<namespace>", <method>)

    // the event can also be custom (instead of click, hover, etc)
    $(".vacation").on('show.price', showPrice);

    $('.show-prices').on("click",function(event){
        event.preventDefault();
        //$('.vacation:last').trigger('show.price');
        $('.vacation').trigger('show.price');
    }); 
    */

    $('.vacation').priceify();
})


