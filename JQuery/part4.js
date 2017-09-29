// UTILITY FUNCTIONS

$("button").on("click", function(){
    $.ajax("/cities/favorite/1",{
        contentType:"application/json",
        dataType:"json",
        success: function(result){
            // result will be an array of JSON objects
            result = [
                {
                    image:"images/paris.png",
                    name:"Paris, France",
                },
                {
                    image: "images/london.png",
                    name: "London, UK"
                },
                {
                    image: "images/madrid.png",
                    name: "Madrid, Spain"
                }
            ];

            // use $.each(collection, function(<index>,<item>){}) to iterate through the array

            $.each(result, function(index,city){
                var favorite = $(".favorite-" + index);
                favorite.find("p").html(city.name);
                favorite.find("img").attr("src", city.image);
            })
        }
    })
})

//Transforming an array of objects into html
// $.getJSON(url, success)

$(".update-status").on("click", function(){
    $.getJson("/status", function (result){

        result = [
            {
                name: "JFK - New York, NY",
                status: "Departing Location"
            },
            {
                name: "DEN - Denver, CO",
                status: "Connecting Flight"
            },
            {
                name: "SFO - San Francisco, CA",
                status: "Destination"
            }
        ];

    // $.map(collection, function(<item>,<index>){}) 
    //beware the different argument order
    // map returns an array modified by what is returned in the function passed as an argument

    // var myNumbers = [1,2,3,4];
    // var newNumbers = $.map(myNumbers, function(item, index) {return item + 1 });

         var statusElements = $.map(result, function(status, i){
            var listItem = $('<li></li>');
            $('<h3>' + status.name + '</h3>').appendTo(listItem);
            $('<p>' + status.status + '</p>').appendTo(listItem);
            return listItem;
        });
        
        $('.status-list').html(statusElements);
    });
});
