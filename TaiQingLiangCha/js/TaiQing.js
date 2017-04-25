$(document).ready(function(){
    //鼠标进入滚动展示效果
    var cur=null;
    var another=null;
    $(".col").mouseenter(function(){
        cur=$(this).attr("id");
        if(cur == "left"){
            another=$("#right");
        }else{
            another=$("#left");
        }

        another.animate({
            "width":"20%"
        });

        $(this).animate({
            "width":"80%"
        });

        $(this).children().animate({
            left: '0'
        });
    });

    $(".col").mouseleave(function(){
        cur=$(this).attr("id");
        if(cur == "left"){
            another=$("#right");
        }else{
            another=$("#left");
        }
        $(this).animate({
            "width":"50%"
        });

        $(another).animate({
            "width":"50%"
        });

        $(this).children().animate({
            left: '-200px'
        });
    });

});