$(document).ready(function(){

    $('button').on('click', function(){
        var location = $('.loc').text();
        $.ajax("/weather", {
            data: {q:location},
            success: function(result){
                $('.weather').text(result.weather);
            }
        })
    })

    // USING PROMISE IN OUR CODE

    var Weather = {
        today: function(location){
            // Create a new promise object. We'll need to tell it how to resolve
            var promise = $.Deferred();
            $.ajax('/weather', {
                data: {q:location},
                success:function(result){
                    // promise.resolve(vallue) calls the done callback
                    promise.resolve(result.weather);
                    // if we need to create method when the promise fails
                    promise.reject(result)
                },
                error: function(){
                    // if we need to create method when the promise fails
                    var error = 'invalid location'
                    promise.reject(error);
                    //calls the fail callback
                    // promise.fail(function(value){})
                }
            });
            
            return promise;
        }
    }

    $('button').on('click', function(){
        var location = $('.loc').text();
        var todayPromise = Weather.today(location);

        // on Ajax success, done will be called on the promise
        todayPromise.done(function(result){
            $('.weather').text(result);
        }).fail(function(error){
            console.log(error);
        })
    })

    // calling 2 promises one after the next

    var City = {
        find: function(location){
            var promise = $.ajax('/cities', {
                data: {loc: location}
            });

            return promise;
        }
    }

    $('button').on('click', function(){
        var loc = $(this).parent().data('loc');
        var resultDiv = $(this).parent().find(".result").empty();

        Weather.today(loc).done(function(weatherResult){
            resultDiv.append(weatherResult);
        })

        City.find(loc).done(function(cityResult){
            resultDiv.append(cityResult);
        })

        // Ajax responses finish at different times

        // $.when() and then() to save the day

        // this can't be an array, only promises separated by comas
        // $.when(<promise1>,<promise2).then(function(p1Data, p2Data){});
        // callback data is in the same order as the promises

        $.when(
            Weather.today(loc),
            City.find(loc)            
        ).then(function(weatherResult, cityResult){
            resultDiv.append(cityResult);
            resultDiv.append(weatherResult);
            // data is all rendered at the same time
        })
    });
});