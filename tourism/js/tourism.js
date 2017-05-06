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

    //产品动态效果
    $(".productWrap").mouseenter(function(){  //当鼠标进入时
        $(this).find("h3").css({
            "color": "#0072D4"
        });

        $(this).find("a.lookDetail").animate({
            "bottom":"0",
            "line-height":"1em"
        });

        $(this).find("img").animate({
            "width": "105%"
        });

        $(this).find(".imgCover").css({
            "display": "block"
        });

        $(this).find(".imgCover").animate({
            "top": "5%",
            "bottom":"5%",
            "left": "5%",
            "right": "5%"
        });

        $(this).find(".coverPlus").css({
            "display": "block"
        });

        $(this).find(".coverPlus").animate({
            "bottom":"0"
        });
    }).mouseleave(function(){  //当鼠标离开时
        $(this).find("h3").css({
            "color": "#000"
        });

        $(this).find("a.lookDetail").animate({
            "bottom":"-5em",
            "line-height":"2.5em"
        });
        $(this).find("img").animate({
            "width": "100%"
        });

        $(this).find(".imgCover").css({
            "display": "none",
            "top": "0",
            "bottom":"0",
            "left": "0",
            "right": "0"
        });

        $(this).find(".coverPlus").animate({
            "bottom":"-100%"
        },"slow");
    });


    //产品查看更多按钮动态效果
    $(".more").mouseenter(function () {
        $(this).css({
            "box-shadow": "0 0 1em rgba(200,200,200,0.8)"
        });
        $(this).find("i").css({
            "color": "rgba(0,0,0,0.8)",
            "bottom": "-2em"
        }).animate({
            "bottom": "0"
        });
    }).mouseleave(function () {
        $(this).css({
            "box-shadow": "0 0.4em 1em rgba(200,200,200,0.8)"
        });
        $(this).find("i").css({
            "color": "rgba(200,200,200,1)",
            "bottom": "2em"
        }).animate({
            "bottom": "0"
        });
    });

    //热销推荐效果
    $(".bestSeller").mouseenter(function(){  //当鼠标进入时
        $(this).find("h3").css({
            "color": "#0072D4"
        });
        
        $(this).find("img").animate({
            "width": "105%"
        });

        $(this).find("p").animate({
            "height": "5em"
        });

        $(this).find(".imgCover").css({
            "display": "block"
        });

        $(this).find(".imgCover").animate({
            "top": "5%",
            "bottom":"5%",
            "left": "5%",
            "right": "5%"
        });

        $(this).find(".coverPlus").css({
            "display": "block"
        });

        $(this).find(".coverPlus").animate({
            "bottom":"0"
        });
    }).mouseleave(function(){  //当鼠标离开时
        $(this).find("h3").css({
            "color": "#000"
        });

        $(this).find("img").animate({
            "width": "100%"
        });

        $(this).find("p").animate({
            "height": "6em"
        });

        $(this).find(".imgCover").css({
           // "display": "none"
        });

        $(this).find(".imgCover").animate({
            "top": "0",
            "bottom":"0",
            "left": "0",
            "right": "0"
        });

        $(this).find(".coverPlus").animate({
            "bottom":"-100%"
        },"slow");
    });

    // begin热销推荐3D旋转180度效果
    var imgDeg=0;
    var imgInfoDeg=0;
    $("#imgLeft").mouseenter(function(){
        imgDeg+=90;
        $("#myImg").css({
            "transform": "rotateY("+imgDeg+"deg)",
            "transition": "transform 0.5s"
        });

        imgInfoDeg+=270;
        $("#imgInfo").css({
            "transform": "rotateY("+imgInfoDeg+"deg)"
        });

        setTimeout(function(){
            imgDeg+=270;
            $("#myImg").css({
                "visibility": "hidden",
                "transform": "rotateY("+imgDeg+"deg)"
            });

            imgInfoDeg+=90;
            $("#imgInfo").css({
                "visibility": "visible",
                "transform": "rotateY("+imgInfoDeg+"deg)",
                "transition": "transform 0.5s"
            });
        },500);

    }).mouseleave(function(){
        imgInfoDeg+=90;
        $("#imgInfo").css({
            "transform": "rotateY("+imgInfoDeg+"deg)",
            "transition": "transform 0.5s"
        });

        imgDeg+=270;
        $("#myImg").css({
            "transform": "rotateY("+imgDeg+"deg)"
        });

        setTimeout(function(){
            imgInfoDeg+=270;
            $("#imgInfo").css({
                "visibility": "hidden",
                "transform": "rotateY("+imgInfoDeg+"deg)"
            });

            imgDeg+=90;
            $("#myImg").css({
                "visibility": "visible",
                "transform": "rotateY("+imgDeg+"deg)",
                "transition": "transform 0.5s"
            });
        },500);
    });
    // end热销推荐3D旋转180度效果


    // begin设置背景色渐变按钮
    $(".gradientBgBtn").mouseenter(function(){
        $(this).find(".getLongBg").animate({
            "right": "0"
        },"fast");
    }).mouseleave(function () {
        $(this).find(".getLongBg").animate({
            "right": "100%"
        },"fast");
    });
    // end设置背景色渐变按钮

    // begin团队Team--小图切换大图
    $("#team ul li").click(function(){
        var curId=$(this).attr("id");
        var curClass="."+curId;
        $("#team ul li").removeClass("curLi");
        $(this).addClass("curLi");

        $(".teamMemberDetail").css({
            "display": "none"
        });
        $(curClass).fadeIn();
    });
    // end团队Team--小图切换大图

    // begin团队Team--成员切换
    //切换到下一个成员
    $("#nextMember").click(function () {
        var curFirst=$(".firstSection").next();
        var curLast=$(".lastSection").next();
        //console.log(curLast);

        if(curLast.length === 0){ //如果为0，说明已到达最后
            return;
        }

        $(".firstSection").slideUp();
        curLast.slideDown();

        $("#team ul li").removeClass("firstSection lastSection");
        curFirst.addClass("firstSection");
        curLast.addClass("lastSection");
    });

    //切换到上一个成员
    $("#lastMember").click(function () {
        var curFirst=$(".firstSection").prev();
        var curLast=$(".lastSection").prev();

        if(curFirst.length === 0){  //如果为0，说明已到达最顶端
            return;
        }

        curFirst.slideDown();
        $(".lastSection").slideUp();

        $("#team ul li").removeClass("firstSection lastSection");
        curFirst.addClass("firstSection");
        curLast.addClass("lastSection");
    });
    // end团队Team--成员切换


    // begin酒店板块
    $(".hotel").mouseenter(function () { //鼠标进入
        $(this).find(".hotelImg .imgHoverOutside").animate({
            "borderWidth": "0.7em"
        });

        $(this).find(".hotelImg .imgHoverInside").animate({
            "borderWidth": "1px",
            "top": "10%",
            "bottom": "10%",
            "left": "10%",
            "right": "10%"
        });

        $(this).find(".hotelDetail h3 a").css({
            "color": "#0072D4"
        });

        $(this).find(".hotelDetail a.btn").css({
            "background-color": "#0072D4",
            "color": "#fff",
            "display": "none"
        }).html('MORE <i class="fa fa-long-arrow-right"></i>').fadeIn();

    }).mouseleave(function () { //鼠标离开
        $(this).find(".hotelImg .imgHoverOutside").animate({
            "borderWidth": "0"
        });

        $(this).find(".hotelImg .imgHoverInside").animate({
            "borderWidth": "0",
            "top": "0",
            "bottom": "0",
            "left": "0",
            "right": "0"
        });

        $(this).find(".hotelDetail h3 a").css({
            "color": "#000"
        });

        $(this).find(".hotelDetail a.btn").css({
            "background-color": "#fff",
            "color": "#969696",
            "display": "none"
        }).html('<i class="fa fa-long-arrow-right"></i>').fadeIn();
    });
    // end酒店板块

    /*begin通用*/
    /*begin 上下浮动按钮*/
    $(".upAndDownBtn").mouseenter(function () {
        $(this).css({
            "box-shadow": "0 0 1em rgba(0,0,0,0.3)"
        });
        $(this).find("i").css({
            "top": "1em",
            "color": "#000"
        }).animate({
           "top": "0"
        });
    }).mouseleave(function () {
        $(this).css({
            "box-shadow": "0 1em 2em rgba(0,0,0,0.3)"
        });
        $(this).find("i").css({
            "top": "-1em",
            "color": "#969696"
        }).animate({
            "top": "0"
        });
    });
    /*end 上下浮动按钮*/


    /*end通用*/


});