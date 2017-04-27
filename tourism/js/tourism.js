$(document).ready(function(){
    
    //旅游热点动态效果
    $(".hotSport").mouseenter(function(){
        $(this).find(".imgCover").css({
            "display": "block"
        });
        $(this).find(".imgCover").animate({
            "top": "5%",
            "bottom":"5%",
            "left": "5%",
            "right": "5%"
        });

    }).mouseleave(function(){
        $(this).find(".imgCover").animate({
            "top": "0",
            "bottom":"0",
            "left": "0",
            "right": "0"
        },"fast",function(){
            $(this).find(".imgCover").css({"display":"none"});
        });

    });

});