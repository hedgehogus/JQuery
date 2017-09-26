function FetchImage(el){
    let inst = this;
    this.el = el;
    this.loadImage = function(){
        inst.el.find("img").attr("src","https://instagram.fhen1-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/21909334_903831406448070_1022629247866372096_n.jpg");
        inst.el.find("img").fadeToggle();
    }
    inst.el.on("click","button",inst.loadImage);
}

function FetchInfo(el){
    let inst=this;
    this.el=el;
    this.url='https://maps.googleapis.com/maps/api/geocode/json?address="kyiv"';
    this.loadInfo = function(){
        $.ajax({
            type: 'GET',
            url:'https://maps.googleapis.com/maps/api/geocode/json?address="kyiv"',
            context:inst.el,
            contentType: 'text/plain',
            xhrFields: {withCredentials: false},
            dataType: 'json',
            success: function(response){
                this.find("p").text("ok").slideDown();
                console.log(response);
                
            }
        });
    }
    this.loadInfo2 = function(){       
        var xhr = createCORSRequest("GET", inst.url) ;   
               
        if (!xhr) {
            throw new Error('CORS not supported');
        }        
        
        xhr.onload = function() {
            var responseText = xhr.responseText;
            console.log(responseText);    
            inst.el.find("p").text(responseText).slideDown();
                console.log(response);        
        };
        xhr.onerror = function(){
            console.log("error");
        }
        xhr.send();
    } 

    inst.el.on("click","button",inst.loadInfo2);    
}

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {
    xhr = null;
  }
  return xhr;
}

$(document).ready(function(){
    let img = new FetchImage($(".fetch-image"));
    let info = new FetchInfo($(".information"));
})