function FetchImage(el){
    let inst = this;
    this.el = el;
    this.loadImage = function(){
        inst.el.find("img").attr("src","https://instagram.fhen1-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/21909334_903831406448070_1022629247866372096_n.jpg");
        inst.el.find("img").fadeToggle();
    }
    $(this.el).on("click","button",inst.loadImage);
}



$(document).ready(function(){
    let img = new FetchImage($(".fetch-image"));
    let info = new FetchInfo($(".information"));
})