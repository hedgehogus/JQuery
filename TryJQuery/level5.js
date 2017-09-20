$(document).ready(function(){
    $('#vacations').on("click",".vacation", function(){
       // alert($(this).find("h3").text());

       // Jquery object methods
       // .css(<attr>, <value>);
       // .css(<attr>); // get
       // .css(<object>);

       // $(this).css("background-color", "#f5ab30");
       // $(this).css("border-color", "#333333");


    //    let paramDefault = {
    //        "background-color": "transparent",
    //        "border-color": "lightgrey"
    //    };

    //    $(this).closest("#vacations").find(".vacation").css(paramDefault).find(".price").hide();
        
    //    let param = {
    //        "background-color": "#778899",
    //        "border-color": "#333333"
    //    };
    //     $(this).css(param).find(".price").show();
    
    
    $(this).toggleClass('highligted');

 });

    
});