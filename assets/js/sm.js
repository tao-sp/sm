$(function () {
    $("img").lazyload({
        threshold :180,
        effect: "fadeIn", // 载入使用何种效果
    });
    //首先将#back-to-top隐藏
       $("#backTop").hide();
       //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
       $(function() {
           $(window).scroll(function() {
               if($(window).scrollTop() > 100) {
                   $("#backTop").fadeIn(1500);
               } else {
                   $("#backTop").fadeOut(1500);
               }
           });
           //当点击跳转链接后，回到页面顶部位置
           $("#backTop").click(function() {
               $('body,html').animate({
                       scrollTop: 0
                   },
                   1000);
               return false;
           });
       });
    /*关于我们发展历程*/
    (function() {
        /*
        SuperSlide组合注意：
        1、内外层mainCell、targetCell、prevCell、nextCell等对象不能相同，除非特殊应用；
        2、注意书写顺序，通常先写内层js调用，再写外层js调用
        */
        /* 发展历程内层图片滚动切换 */
        jQuery(".ab-development .slideGroup .slideBox").slide({ mainCell:"ul",vis:5,prevCell:".sPrev",nextCell:".sNext",effect:"leftLoop"});

        /* 发展历程外层tab切换 */
        jQuery(".ab-development .slideGroup").slide({titCell:".parHd li",mainCell:".parBd"});

    })();

    /*关于我们发展历程*/
    (function() {
        var oDevelop = $('#ab-development'),
            oList = oDevelop.find('.parHd .tab-list li');
        oList.on('mouseenter',function() {
            $(this).addClass('on').siblings().removeClass('on');
        });
    })();
})




// 2-产品与服务开始
$(document).ready(function () {
    $(".s2_second_img1>div").hide();
    $(".s2_second_li1").children(".s2_second_img1").children("div").show();
    $(".s2_second_d3").addClass("s2_box");
    $(".s2_second_d2").children("div").children("a").addClass("s2_a2");
    $(".s2_second_d2").children("div").children(".s2_second_d2_first").removeClass("s2_a2");
    $(".s2_second_d2").children("div").children(".s2_second_d2_first").addClass("s2_a1");
    $(".s2_second_1 ul li").mouseenter(function () {
        $(".s2_second_li1").children(".s2_second_img1").children("div").hide();
        $(".s2_second_d3").removeClass("s2_box");
        $(".s2_second_d2").children("div").children("a").removeClass("s2_a1");
        $(".s2_second_d2").children("div").children(".s2_second_d2_first").removeClass("s2_a1");
        $(".s2_second_d2").children("div").children(".s2_second_d2_first").addClass("s2_a2");
        $(this).children(".s2_second_img1").children("div").show();
        $(this).children("div:eq(1)").addClass("s2_box");
        $(this).children(".s2_second_d2").children("div").children(".s2_second_d2_a1").removeClass("s2_a2");
        $(this).children(".s2_second_d2").children("div").children(".s2_second_d2_a1").addClass("s2_a1");
    }).mouseleave(function () {
        $(this).children(".s2_second_img1").children("div").hide();
        $(this).children("div:eq(1)").removeClass("s2_box");
        $(this).children(".s2_second_d2").children("div").children(".s2_second_d2_a1").removeClass("s2_a1");
        $(this).children(".s2_second_d2").children("div").children(".s2_second_d2_a1").addClass("s2_a2");
    });


    $(".s2_second_2 ul li a").addClass("s2_second_2_c1");
    $(".s2_second_2_a1 a").removeClass("s2_second_2_c1");
    $(".s2_second_2_a1 a").addClass("s2_second_2_c2");
    $(".s2_second_2 ul li a").mouseover(function () {
        $(".s2_second_2_a1 a").removeClass("s2_second_2_c2");
        $(".s2_second_2_a1 a").addClass("s2_second_2_c1");
        $(this).removeClass("s2_second_2_c1");
        $(this).addClass("s2_second_2_c2");
    }).mouseout(function () {
        $(this).removeClass("s2_second_2_c2");
        $(this).addClass("s2_second_2_c1");
    });
});
// 2-产品与服务结束


// 4-关于我们开始
$(document).ready(function () {
    $(".s_4first_1_a1").addClass("s_4first_1_b1");
    $(".s_4first_1_a2").addClass("s_4first_1_b2");
    $(".s_4first_1 ul li").mouseover(function () {
        $(".s_4first_1_a1").removeClass("s_4first_1_b1");
        $(".s_4first_1_a1").addClass("s_4first_1_b2");
        $(this).children("a").removeClass("s_4first_1_b2");
        $(this).children("a").addClass("s_4first_1_b1");
    }).mouseout(function () {
        $(this).children("a").removeClass("s_4first_1_b1");
        $(this).children("a").addClass("s_4first_1_b2");
    });
    $(".s_4first_1").mouseleave(function () {
        $(".s_4first_1_a1").removeClass("s_4first_1_b2");
        $(".s_4first_1_a1").addClass("s_4first_1_b1");
    });
});
// 4-关于我们结束


// 6-加入我们开始
$(document).ready(function () {
    $(".s_6first_1_a1").addClass("s_6first_1_b1");
    $(".s_6first_1_a2").addClass("s_6first_1_b2");
    $(".s_6first_1 ul li").mouseover(function () {
        $(".s_6first_1_a1").removeClass("s_6first_1_b1");
        $(".s_6first_1_a1").addClass("s_6first_1_b2");
        $(this).children("a").removeClass("s_6first_1_b2");
        $(this).children("a").addClass("s_6first_1_b1");
    }).mouseout(function () {
        $(this).children("a").removeClass("s_6first_1_b1");
        $(this).children("a").addClass("s_6first_1_b2");
    });
    $(".s_6first_1").mouseleave(function () {
        $(".s_6first_1_a1").removeClass("s_6first_1_b2");
        $(".s_6first_1_a1").addClass("s_6first_1_b1");
    });

    $(".s_6second_a").addClass("s_6second_color1");
    $(".s_6second_a1").addClass("s_6second_color2");
    $(".s_6second ul li div").mouseover(function () {
        $(".s_6second_a1").removeClass("s_6second_color2");
        $(".s_6second_a1").addClass("s_6second_color1");
        $(this).children("a").removeClass("s_6second_color1");
        $(this).children("a").addClass("s_6second_color2");
    }).mouseout(function () {
        $(this).children("a").removeClass("s_6second_color2");
        $(this).children("a").addClass("s_6second_color1");
    });
    $(".s_6second ul").mouseleave(function () {
        $(".s_6second_a1").removeClass("s_6second_color1");
        $(".s_6second_a1").addClass("s_6second_color2");
    });
});
//6-加入我们结束


//8-联系我们开始
$(document).ready(function () {
    $(".s_8first_1_a1").addClass("s_8first_1_b1");
    $(".s_8first_1_a2").addClass("s_8first_1_b2");
    $(".s_8first_1 ul li").mouseover(function () {
        $(".s_8first_1_a1").removeClass("s_8first_1_b1");
        $(".s_8first_1_a1").addClass("s_8first_1_b2");
        $(this).children("a").removeClass("s_8first_1_b2");
        $(this).children("a").addClass("s_8first_1_b1");
    }).mouseout(function () {
        $(this).children("a").removeClass("s_8first_1_b1");
        $(this).children("a").addClass("s_8first_1_b2");
    });
    $(".s_8first_1").mouseleave(function () {
        $(".s_8first_1_a1").removeClass("s_8first_1_b2");
        $(".s_8first_1_a1").addClass("s_8first_1_b1");
    });
});
//8-联系我们结束


// 9-章程开始
$(document).ready(function () {
    $(".s_9first_1_a1").addClass("s_9first_1_b1");
    $(".s_9first_1_a2").addClass("s_9first_1_b2");
    $(".s_9first_1 ul li").mouseover(function () {
        $(".s_9first_1_a1").removeClass("s_9first_1_b1");
        $(".s_9first_1_a1").addClass("s_9first_1_b2");
        $(this).children("a").removeClass("s_9first_1_b2");
        $(this).children("a").addClass("s_9first_1_b1");
    }).mouseout(function () {
        $(this).children("a").removeClass("s_9first_1_b1");
        $(this).children("a").addClass("s_9first_1_b2");
    });
    $(".s_9first_1").mouseleave(function () {
        $(".s_9first_1_a1").removeClass("s_9first_1_b2");
        $(".s_9first_1_a1").addClass("s_9first_1_b1");
    });
});
// 9-章程结束


// 10-专家委员会开始
$(document).ready(function () {
    $(".s_10first_1_a1").addClass("s_10first_1_b1");
    $(".s_10first_1_a2").addClass("s_10first_1_b2");
    $(".s_10first_1 ul li").mouseover(function () {
        $(".s_10first_1_a1").removeClass("s_10first_1_b1");
        $(".s_10first_1_a1").addClass("s_10first_1_b2");
        $(this).children("a").removeClass("s_10first_1_b2");
        $(this).children("a").addClass("s_10first_1_b1");
    }).mouseout(function () {
        $(this).children("a").removeClass("s_10first_1_b1");
        $(this).children("a").addClass("s_10first_1_b2");
    });
    $(".s_10first_1").mouseleave(function () {
        $(".s_10first_1_a1").removeClass("s_10first_1_b2");
        $(".s_10first_1_a1").addClass("s_10first_1_b1");
    });

    $(".s_10second_u1 li>span").addClass("s_10second_span_c1");
    $(".s_10second_span1").removeClass("s_10second_span_c1");
    $(".s_10second_span1").addClass("s_10second_span_c2");
    $(".s_10second_u1>li>span").mouseover(function () {
        $(".s_10second_span1").removeClass("s_10second_span_c2");
        $(".s_10second_span1").addClass("s_10second_span_c1");
        $(this).removeClass("s_10second_span_c1");
        $(this).addClass("s_10second_span_c2");
    }).mouseout(function () {
        $(this).removeClass("s_10second_span_c2");
        $(this).addClass("s_10second_span_c1");
    });
    $(".s_10second_u1").mouseleave(function () {
        $(".s_10second_span1").removeClass("s_10second_span_c1");
        $(".s_10second_span1").addClass("s_10second_span_c2");
    });

    $(".s_10second_d2_p2>a").addClass("s_10second_d2_p2_c1");
    $(".s_10second_d2_p2_a1").removeClass("s_10second_d2_p2_c1");
    $(".s_10second_d2_p2_a1").addClass("s_10second_d2_p2_c2");
    $(".s_10second_d2").mouseover(function () {
        $(".s_10second_d2_p2_a1").removeClass("s_10second_d2_p2_c2");
        $(".s_10second_d2_p2_a1").addClass("s_10second_d2_p2_c1");
        $(this).children(".s_10second_d2_p2").children("a").removeClass("s_10second_d2_p2_c1");
        $(this).children(".s_10second_d2_p2").children("a").addClass("s_10second_d2_p2_c2");
    }).mouseout(function () {
        $(this).children(".s_10second_d2_p2").children("a").removeClass("s_10second_d2_p2_c2");
        $(this).children(".s_10second_d2_p2").children("a").addClass("s_10second_d2_p2_c1");
    });
    $(".s_10second_top_left1").mouseleave(function () {
        $(".s_10second_d2_p2_a1").removeClass("s_10second_d2_p2_c1");
        $(".s_10second_d2_p2_a1").addClass("s_10second_d2_p2_c2");
    });

    $(".s_10second_u2>li>a").addClass("s_10second_u2_a_c1");
    $(".s_10second_u2_a1>a").removeClass("s_10second_u2_a_c1");
    $(".s_10second_u2_a1>a").addClass("s_10second_u2_a_c2");
    $(".s_10second_u2>li>a").mouseover(function () {
        $(".s_10second_u2_a1>a").removeClass("s_10second_u2_a_c2");
        $(".s_10second_u2_a1>a").addClass("s_10second_u2_a_c1");
        $(this).removeClass("s_10second_u2_a_c1");
        $(this).addClass("s_10second_u2_a_c2");
    }).mouseout(function () {
        $(this).removeClass("s_10second_u2_a_c2");
        $(this).addClass("s_10second_u2_a_c1");
    });
    $(".s_10second_u2").mouseleave(function () {
        $(".s_10second_u2_a1>a").removeClass("s_10second_u2_a_c1");
        $(".s_10second_u2_a1>a").addClass("s_10second_u2_a_c2");
    });
});
// 10-专家委员会结束


//11-会员风采开始
$(document).ready(function () {
    $(".s_11first_1_a1").addClass("s_11first_1_b1");
    $(".s_11first_1_a2").addClass("s_11first_1_b2");
    $(".s_11first_1 ul li").mouseover(function () {
        $(".s_11first_1_a1").removeClass("s_11first_1_b1");
        $(".s_11first_1_a1").addClass("s_11first_1_b2");
        $(this).children("a").removeClass("s_11first_1_b2");
        $(this).children("a").addClass("s_11first_1_b1");
    }).mouseout(function () {
        $(this).children("a").removeClass("s_11first_1_b1");
        $(this).children("a").addClass("s_11first_1_b2");
    });
    $(".s_11first_1").mouseleave(function () {
        $(".s_11first_1_a1").removeClass("s_11first_1_b2");
        $(".s_11first_1_a1").addClass("s_11first_1_b1");
    });

    $(".s_11second_u1 li>span").addClass("s_11second_span_c1");
    $(".s_11second_span1").removeClass("s_11second_span_c1");
    $(".s_11second_span1").addClass("s_11second_span_c2");
    $(".s_11second_u1>li>span").mouseover(function () {
        $(".s_11second_span1").removeClass("s_11second_span_c2");
        $(".s_11second_span1").addClass("s_11second_span_c1");
        $(this).removeClass("s_11second_span_c1");
        $(this).addClass("s_11second_span_c2");
    }).mouseout(function () {
        $(this).removeClass("s_11second_span_c2");
        $(this).addClass("s_11second_span_c1");
    });
    $(".s_11second_u1").mouseleave(function () {
        $(".s_11second_span1").removeClass("s_11second_span_c1");
        $(".s_11second_span1").addClass("s_11second_span_c2");
    });

    $(".s_11second_d2_p2>a").addClass("s_11second_d2_p2_c1");
    $(".s_11second_d2_p2_a1").removeClass("s_11second_d2_p2_c1");
    $(".s_11second_d2_p2_a1").addClass("s_11second_d2_p2_c2");
    $(".s_11second_d2").mouseover(function () {
        $(".s_11second_d2_p2_a1").removeClass("s_11second_d2_p2_c2");
        $(".s_11second_d2_p2_a1").addClass("s_11second_d2_p2_c1");
        $(this).children(".s_11second_d2_p2").children("a").removeClass("s_11second_d2_p2_c1");
        $(this).children(".s_11second_d2_p2").children("a").addClass("s_11second_d2_p2_c2");
    }).mouseout(function () {
        $(this).children(".s_11second_d2_p2").children("a").removeClass("s_11second_d2_p2_c2");
        $(this).children(".s_11second_d2_p2").children("a").addClass("s_11second_d2_p2_c1");
    });
    $(".s_11second_top_left1").mouseleave(function () {
        $(".s_11second_d2_p2_a1").removeClass("s_11second_d2_p2_c1");
        $(".s_11second_d2_p2_a1").addClass("s_11second_d2_p2_c2");
    });
});
//11-会员风采结束


// 12-会员企业开始
$(document).ready(function () {
    $(".s_12first_1_a1").addClass("s_12first_1_b1");
    $(".s_12first_1_a2").addClass("s_12first_1_b2");
    $(".s_12first_1 ul li").mouseover(function () {
        $(".s_12first_1_a1").removeClass("s_12first_1_b1");
        $(".s_12first_1_a1").addClass("s_12first_1_b2");
        $(this).children("a").removeClass("s_12first_1_b2");
        $(this).children("a").addClass("s_12first_1_b1");
    }).mouseout(function () {
        $(this).children("a").removeClass("s_12first_1_b1");
        $(this).children("a").addClass("s_12first_1_b2");
    });
    $(".s_12first_1").mouseleave(function () {
        $(".s_12first_1_a1").removeClass("s_12first_1_b2");
        $(".s_12first_1_a1").addClass("s_12first_1_b1");
    });

    $(".s_12second_u1 li>span").addClass("s_12second_span_c1");
    $(".s_12second_span1").removeClass("s_12second_span_c1");
    $(".s_12second_span1").addClass("s_12second_span_c2");
    $(".s_12second_u1>li>span").mouseover(function () {
        $(".s_12second_span1").removeClass("s_12second_span_c2");
        $(".s_12second_span1").addClass("s_12second_span_c1");
        $(this).removeClass("s_12second_span_c1");
        $(this).addClass("s_12second_span_c2");
    }).mouseout(function () {
        $(this).removeClass("s_12second_span_c2");
        $(this).addClass("s_12second_span_c1");
    });
    $(".s_12second_u1").mouseleave(function () {
        $(".s_12second_span1").removeClass("s_12second_span_c1");
        $(".s_12second_span1").addClass("s_12second_span_c2");
    });

    $(".s_12second_d2_p2>a").addClass("s_12second_d2_p2_c1");
    $(".s_12second_d2_p2_a1").removeClass("s_12second_d2_p2_c1");
    $(".s_12second_d2_p2_a1").addClass("s_12second_d2_p2_c2");
    $(".s_12second_d2").mouseover(function () {
        $(".s_12second_d2_p2_a1").removeClass("s_12second_d2_p2_c2");
        $(".s_12second_d2_p2_a1").addClass("s_12second_d2_p2_c1");
        $(this).children(".s_12second_d2_p2").children("a").removeClass("s_12second_d2_p2_c1");
        $(this).children(".s_12second_d2_p2").children("a").addClass("s_12second_d2_p2_c2");
    }).mouseout(function () {
        $(this).children(".s_12second_d2_p2").children("a").removeClass("s_12second_d2_p2_c2");
        $(this).children(".s_12second_d2_p2").children("a").addClass("s_12second_d2_p2_c1");
    });
    $(".s_12second_top_left1").mouseleave(function () {
        $(".s_12second_d2_p2_a1").removeClass("s_12second_d2_p2_c1");
        $(".s_12second_d2_p2_a1").addClass("s_12second_d2_p2_c2");
    });

    $(".s_12second_u2>li>a").addClass("s_12second_u2_a_c1");
    $(".s_12second_u2_a1>a").removeClass("s_12second_u2_a_c1");
    $(".s_12second_u2_a1>a").addClass("s_12second_u2_a_c2");
    $(".s_12second_u2>li>a").mouseover(function () {
        $(".s_12second_u2_a1>a").removeClass("s_12second_u2_a_c2");
        $(".s_12second_u2_a1>a").addClass("s_12second_u2_a_c1");
        $(this).removeClass("s_12second_u2_a_c1");
        $(this).addClass("s_12second_u2_a_c2");
    }).mouseout(function () {
        $(this).removeClass("s_12second_u2_a_c2");
        $(this).addClass("s_12second_u2_a_c1");
    });
    $(".s_12second_u2").mouseleave(function () {
        $(".s_12second_u2_a1>a").removeClass("s_12second_u2_a_c1");
        $(".s_12second_u2_a1>a").addClass("s_12second_u2_a_c2");
    });
});
// 12-会员企业结束


// 13-会员人物开始
$(document).ready(function () {
    $(".s_13first_1_a1").addClass("s_13first_1_b1");
    $(".s_13first_1_a2").addClass("s_13first_1_b2");
    $(".s_13first_1 ul li").mouseover(function () {
        $(".s_13first_1_a1").removeClass("s_13first_1_b1");
        $(".s_13first_1_a1").addClass("s_13first_1_b2");
        $(this).children("a").removeClass("s_13first_1_b2");
        $(this).children("a").addClass("s_13first_1_b1");
    }).mouseout(function () {
        $(this).children("a").removeClass("s_13first_1_b1");
        $(this).children("a").addClass("s_13first_1_b2");
    });
    $(".s_13first_1").mouseleave(function () {
        $(".s_13first_1_a1").removeClass("s_13first_1_b2");
        $(".s_13first_1_a1").addClass("s_13first_1_b1");
    });

    $(".s_13second_u1 li>span").addClass("s_13second_span_c1");
    $(".s_13second_span1").removeClass("s_13second_span_c1");
    $(".s_13second_span1").addClass("s_13second_span_c2");
    $(".s_13second_u1>li>span").mouseover(function () {
        $(".s_13second_span1").removeClass("s_13second_span_c2");
        $(".s_13second_span1").addClass("s_13second_span_c1");
        $(this).removeClass("s_13second_span_c1");
        $(this).addClass("s_13second_span_c2");
    }).mouseout(function () {
        $(this).removeClass("s_13second_span_c2");
        $(this).addClass("s_13second_span_c1");
    });
    $(".s_13second_u1").mouseleave(function () {
        $(".s_13second_span1").removeClass("s_13second_span_c1");
        $(".s_13second_span1").addClass("s_13second_span_c2");
    });

    $(".s_13second_d2_p2>a").addClass("s_13second_d2_p2_c1");
    $(".s_13second_d2_p2_a1").removeClass("s_13second_d2_p2_c1");
    $(".s_13second_d2_p2_a1").addClass("s_13second_d2_p2_c2");
    $(".s_13second_d2").mouseover(function () {
        $(".s_13second_d2_p2_a1").removeClass("s_13second_d2_p2_c2");
        $(".s_13second_d2_p2_a1").addClass("s_13second_d2_p2_c1");
        $(this).children(".s_13second_d2_p2").children("a").removeClass("s_13second_d2_p2_c1");
        $(this).children(".s_13second_d2_p2").children("a").addClass("s_13second_d2_p2_c2");
    }).mouseout(function () {
        $(this).children(".s_13second_d2_p2").children("a").removeClass("s_13second_d2_p2_c2");
        $(this).children(".s_13second_d2_p2").children("a").addClass("s_13second_d2_p2_c1");
    });
    $(".s_13second_top_left1").mouseleave(function () {
        $(".s_13second_d2_p2_a1").removeClass("s_13second_d2_p2_c1");
        $(".s_13second_d2_p2_a1").addClass("s_13second_d2_p2_c2");
    });

    $(".s_13second_u2>li>a").addClass("s_13second_u2_a_c1");
    $(".s_13second_u2_a1>a").removeClass("s_13second_u2_a_c1");
    $(".s_13second_u2_a1>a").addClass("s_13second_u2_a_c2");
    $(".s_13second_u2>li>a").mouseover(function () {
        $(".s_13second_u2_a1>a").removeClass("s_13second_u2_a_c2");
        $(".s_13second_u2_a1>a").addClass("s_13second_u2_a_c1");
        $(this).removeClass("s_13second_u2_a_c1");
        $(this).addClass("s_13second_u2_a_c2");
    }).mouseout(function () {
        $(this).removeClass("s_13second_u2_a_c2");
        $(this).addClass("s_13second_u2_a_c1");
    });
    $(".s_13second_u2").mouseleave(function () {
        $(".s_13second_u2_a1>a").removeClass("s_13second_u2_a_c1");
        $(".s_13second_u2_a1>a").addClass("s_13second_u2_a_c2");
    });
});
// 13-会员人物结束


// 14-会员中心开始
$(document).ready(function () {
    $(".s_14first_1_a1").addClass("s_14first_1_b1");
    $(".s_14first_1_a2").addClass("s_14first_1_b2");
    $(".s_14first_1 ul li").mouseover(function () {
        $(".s_14first_1_a1").removeClass("s_14first_1_b1");
        $(".s_14first_1_a1").addClass("s_14first_1_b2");
        $(this).children("a").removeClass("s_14first_1_b2");
        $(this).children("a").addClass("s_14first_1_b1");
    }).mouseout(function () {
        $(this).children("a").removeClass("s_14first_1_b1");
        $(this).children("a").addClass("s_14first_1_b2");
    });
    $(".s_14first_1").mouseleave(function () {
        $(".s_14first_1_a1").removeClass("s_14first_1_b2");
        $(".s_14first_1_a1").addClass("s_14first_1_b1");
    });

    $(".s_14second_u1 li>span").addClass("s_14second_span_c1");
    $(".s_14second_span1").removeClass("s_14second_span_c1");
    $(".s_14second_span1").addClass("s_14second_span_c2");
    $(".s_14second_u1>li>span").mouseover(function () {
        $(".s_14second_span1").removeClass("s_14second_span_c2");
        $(".s_14second_span1").addClass("s_14second_span_c1");
        $(this).removeClass("s_14second_span_c1");
        $(this).addClass("s_14second_span_c2");
    }).mouseout(function () {
        $(this).removeClass("s_14second_span_c2");
        $(this).addClass("s_14second_span_c1");
    });
    $(".s_14second_u1").mouseleave(function () {
        $(".s_14second_span1").removeClass("s_14second_span_c1");
        $(".s_14second_span1").addClass("s_14second_span_c2");
    });

    $(".s_14second_u2>li>a").addClass("s_14second_u2_a_c1");
    $(".s_14second_u2_a1>a").removeClass("s_14second_u2_a_c1");
    $(".s_14second_u2_a1>a").addClass("s_14second_u2_a_c2");
    $(".s_14second_u2>li>a").mouseover(function () {
        $(".s_14second_u2_a1>a").removeClass("s_14second_u2_a_c2");
        $(".s_14second_u2_a1>a").addClass("s_14second_u2_a_c1");
        $(this).removeClass("s_14second_u2_a_c1");
        $(this).addClass("s_14second_u2_a_c2");
    }).mouseout(function () {
        $(this).removeClass("s_14second_u2_a_c2");
        $(this).addClass("s_14second_u2_a_c1");
    });
    $(".s_14second_u2").mouseleave(function () {
        $(".s_14second_u2_a1>a").removeClass("s_14second_u2_a_c1");
        $(".s_14second_u2_a1>a").addClass("s_14second_u2_a_c2");
    });
});
// 14-会员中心结束


//15-品牌推荐开始
$(document).ready(function () {
    $(".s_15second_u1 li>span").addClass("s_15second_span_c1");
    $(".s_15second_span1").removeClass("s_15second_span_c1");
    $(".s_15second_span1").addClass("s_15second_span_c2");
    $(".s_15second_u1>li>span").mouseover(function () {
        $(".s_15second_span1").removeClass("s_15second_span_c2");
        $(".s_15second_span1").addClass("s_15second_span_c1");
        $(this).removeClass("s_15second_span_c1");
        $(this).addClass("s_15second_span_c2");
    }).mouseout(function () {
        $(this).removeClass("s_15second_span_c2");
        $(this).addClass("s_15second_span_c1");
    });
    $(".s_15second_u1").mouseleave(function () {
        $(".s_15second_span1").removeClass("s_15second_span_c1");
        $(".s_15second_span1").addClass("s_15second_span_c2");
    });

    $(".s_15second_d3").addClass("s_15second_d3_box");
    $(".s_15second_d2").mouseover(function () {
        $(".s_15second_d3").removeClass("s_15second_d3_box");
        $(this).addClass("s_15second_d3_box");
    }).mouseout(function () {
        $(this).removeClass("s_15second_d3_box");
    });
    $(".s_15second_top_left1 ul").mouseleave(function () {
        $(".s_15second_d3").addClass("s_15second_d3_box");
    });

    $(".s_15second_u2>li>a").addClass("s_15second_u2_a_c1");
    $(".s_15second_u2_a1>a").removeClass("s_15second_u2_a_c1");
    $(".s_15second_u2_a1>a").addClass("s_15second_u2_a_c2");
    $(".s_15second_u2>li>a").mouseover(function () {
        $(".s_15second_u2_a1>a").removeClass("s_15second_u2_a_c2");
        $(".s_15second_u2_a1>a").addClass("s_15second_u2_a_c1");
        $(this).removeClass("s_15second_u2_a_c1");
        $(this).addClass("s_15second_u2_a_c2");
    }).mouseout(function () {
        $(this).removeClass("s_15second_u2_a_c2");
        $(this).addClass("s_15second_u2_a_c1");
    });
    $(".s_15second_u2").mouseleave(function () {
        $(".s_15second_u2_a1>a").removeClass("s_15second_u2_a_c1");
        $(".s_15second_u2_a1>a").addClass("s_15second_u2_a_c2");
    });
});
//15-品牌推荐结束


// 16-赛事开始
$(document).ready(function () {
    $(".s_16second_u1 li>span").addClass("s_16second_span_c1");
    $(".s_16second_span1").removeClass("s_16second_span_c1");
    $(".s_16second_span1").addClass("s_16second_span_c2");
    $(".s_16second_u1>li>span").mouseover(function () {
        $(".s_16second_span1").removeClass("s_16second_span_c2");
        $(".s_16second_span1").addClass("s_16second_span_c1");
        $(this).removeClass("s_16second_span_c1");
        $(this).addClass("s_16second_span_c2");
    }).mouseout(function () {
        $(this).removeClass("s_16second_span_c2");
        $(this).addClass("s_16second_span_c1");
    });
    $(".s_16second_u1").mouseleave(function () {
        $(".s_16second_span1").removeClass("s_16second_span_c1");
        $(".s_16second_span1").addClass("s_16second_span_c2");
    });

    $(".s_16second_d3").addClass("s_16second_d3_box");
    $(".s_16second_d2").mouseover(function () {
        $(".s_16second_d3").removeClass("s_16second_d3_box");
        $(this).addClass("s_16second_d3_box");
    }).mouseout(function () {
        $(this).removeClass("s_16second_d3_box");
    });
    $(".s_16second_top_left1 ul").mouseleave(function () {
        $(".s_16second_d3").addClass("s_16second_d3_box");
    });

    $(".s_16second_u2>li>a").addClass("s_16second_u2_a_c1");
    $(".s_16second_u2_a1>a").removeClass("s_16second_u2_a_c1");
    $(".s_16second_u2_a1>a").addClass("s_16second_u2_a_c2");
    $(".s_16second_u2>li>a").mouseover(function () {
        $(".s_16second_u2_a1>a").removeClass("s_16second_u2_a_c2");
        $(".s_16second_u2_a1>a").addClass("s_16second_u2_a_c1");
        $(this).removeClass("s_16second_u2_a_c1");
        $(this).addClass("s_16second_u2_a_c2");
    }).mouseout(function () {
        $(this).removeClass("s_16second_u2_a_c2");
        $(this).addClass("s_16second_u2_a_c1");
    });
    $(".s_16second_u2").mouseleave(function () {
        $(".s_16second_u2_a1>a").removeClass("s_16second_u2_a_c1");
        $(".s_16second_u2_a1>a").addClass("s_16second_u2_a_c2");
    });
});
//16-赛事结束


// 18-委员会介绍开始
$(document).ready(function () {
    $(".s_18third_a1").addClass("s_18third_b1");
    $(".s_18third_a2").addClass("s_18third_b2");
    $(".s_18third ul li").mouseover(function () {
        $(".s_18third_a1").removeClass("s_18third_b1");
        $(".s_18third_a1").addClass("s_18third_b2");
        $(this).children("a").removeClass("s_18third_b2");
        $(this).children("a").addClass("s_18third_b1");
    }).mouseout(function () {
        $(this).children("a").removeClass("s_18third_b1");
        $(this).children("a").addClass("s_18third_b2");
    });
    $(".s_18third>ul").mouseleave(function () {
        $(".s_18third_a1").removeClass("s_18third_b2");
        $(".s_18third_a1").addClass("s_18third_b1");
    });

    $(".s_18fourth_ul_div").addClass("s_18fourth_ul_div_box");
    $(".s_18fourth ul li>div").mouseover(function () {
        $(".s_18fourth_ul_div").removeClass("s_18fourth_ul_div_box");
        $(this).addClass("s_18fourth_ul_div_box");
    }).mouseout(function () {
        $(this).removeClass("s_18fourth_ul_div_box");
    });
    $(".s_18fourth ul").mouseleave(function () {
        $(".s_18fourth_ul_div").addClass("s_18fourth_ul_div_box");
    });

    $(".s_18fifth_ul>li>a").addClass("s_18fifth_ul_a_c1");
    $(".s_18fifth_ul_a1>a").removeClass("s_18fifth_ul_a_c1");
    $(".s_18fifth_ul_a1>a").addClass("s_18fifth_ul_a_c2");
    $(".s_18fifth_ul>li>a").mouseover(function () {
        $(".s_18fifth_ul_a1>a").removeClass("s_18fifth_ul_a_c2");
        $(".s_18fifth_ul_a1>a").addClass("s_18fifth_ul_a_c1");
        $(this).removeClass("s_18fifth_ul_a_c1");
        $(this).addClass("s_18fifth_ul_a_c2");
    }).mouseout(function () {
        $(this).removeClass("s_18fifth_ul_a_c2");
        $(this).addClass("s_18fifth_ul_a_c1");
    });
    $(".s_18fifth_ul").mouseleave(function () {
        $(".s_18fifth_ul_a1>a").removeClass("s_18fifth_ul_a_c1");
        $(".s_18fifth_ul_a1>a").addClass("s_18fifth_ul_a_c2");
    });
});
// 18-委员会介绍结束


// 19-资讯动态开始
$(document).ready(function () {
    $(".s_19first_1_a1").addClass("s_19first_1_b1");
    $(".s_19first_1_a2").addClass("s_19first_1_b2");
    $(".s_19first_1 ul li").mouseover(function () {
        $(".s_19first_1_a1").removeClass("s_19first_1_b1");
        $(".s_19first_1_a1").addClass("s_19first_1_b2");
        $(this).children("a").removeClass("s_19first_1_b2");
        $(this).children("a").addClass("s_19first_1_b1");
    }).mouseout(function () {
        $(this).children("a").removeClass("s_19first_1_b1");
        $(this).children("a").addClass("s_19first_1_b2");
    });
    $(".s_19first_1").mouseleave(function () {
        $(".s_19first_1_a1").removeClass("s_19first_1_b2");
        $(".s_19first_1_a1").addClass("s_19first_1_b1");
    });

    $(".s_19fourth_ul_div").addClass("s_19fourth_ul_div_box");
    $(".s_19fourth ul li>div").mouseover(function () {
        $(".s_19fourth_ul_div").removeClass("s_19fourth_ul_div_box");
        $(this).addClass("s_19fourth_ul_div_box");
    }).mouseout(function () {
        $(this).removeClass("s_19fourth_ul_div_box");
    });
    $(".s_19fourth ul").mouseleave(function () {
        $(".s_19fourth_ul_div").addClass("s_19fourth_ul_div_box");
    });

    $(".s_19fifth_ul>li>a").addClass("s_19fifth_ul_a_c1");
    $(".s_19fifth_ul_a1>a").removeClass("s_19fifth_ul_a_c1");
    $(".s_19fifth_ul_a1>a").addClass("s_19fifth_ul_a_c2");
    $(".s_19fifth_ul>li>a").mouseover(function () {
        $(".s_19fifth_ul_a1>a").removeClass("s_19fifth_ul_a_c2");
        $(".s_19fifth_ul_a1>a").addClass("s_19fifth_ul_a_c1");
        $(this).removeClass("s_19fifth_ul_a_c1");
        $(this).addClass("s_19fifth_ul_a_c2");
    }).mouseout(function () {
        $(this).removeClass("s_19fifth_ul_a_c2");
        $(this).addClass("s_19fifth_ul_a_c1");
    });
    $(".s_19fifth_ul").mouseleave(function () {
        $(".s_19fifth_ul_a1>a").removeClass("s_19fifth_ul_a_c1");
        $(".s_19fifth_ul_a1>a").addClass("s_19fifth_ul_a_c2");
    });
});
// 19-资讯动态结束


// 20-个人会员开始
$(function () {
    $(".s_20second_u1_l1").addClass("s_20second_u1_li_b1");
    $(".s_20second_u1_l2").addClass("s_20second_u1_li_b2");
    $(".s_20second_u1 li").mouseover(function () {
        $(".s_20second_u1_l1").removeClass("s_20second_u1_li_b1");
        $(".s_20second_u1_l1").addClass("s_20second_u1_li_b2");
        $(this).removeClass("s_20second_u1_li_b2");
        $(this).addClass("s_20second_u1_li_b1");
    }).mouseout(function () {
        $(this).removeClass("s_20second_u1_li_b1");
        $(this).addClass("s_20second_u1_li_b2");
    });
    $(".s_20second_u1").mouseleave(function () {
        $(".s_20second_u1_l1").removeClass("s_20second_u1_li_b2");
        $(".s_20second_u1_l1").addClass("s_20second_u1_li_b1");
    });

    $(".s_20second_d4").hide();
    $(".s_20second_u2 li").mouseover(function () {
        $(this).children(".s_20second_d2").hide();
        $(this).children(".s_20second_d1").show();
        $(this).siblings().children(".s_20second_d2").show();
        $(this).siblings().children(".s_20second_d1").hide();
    });
    $(".s_20second_u2").mouseleave(function () {
        $(".s_20second_d4").hide();
        $(".s_20second_d3").show();
    });
});
// 20-个人会员结束


// 21/申请企业开始
$(function () {
    $(".s_21second_u1_l1").addClass("s_21second_u1_li_b1");
    $(".s_21second_u1_l2").addClass("s_21second_u1_li_b2");
    $(".s_21second_u1 li").mouseover(function () {
        $(".s_21second_u1_l1").removeClass("s_21second_u1_li_b1");
        $(".s_21second_u1_l1").addClass("s_21second_u1_li_b2");
        $(this).removeClass("s_21second_u1_li_b2");
        $(this).addClass("s_21second_u1_li_b1");
    }).mouseout(function () {
        $(this).removeClass("s_21second_u1_li_b1");
        $(this).addClass("s_21second_u1_li_b2");
    });
    $(".s_21second_u1").mouseleave(function () {
        $(".s_21second_u1_l1").removeClass("s_21second_u1_li_b2");
        $(".s_21second_u1_l1").addClass("s_21second_u1_li_b1");
    });

    $(".s_21second_d4").hide();
    $(".s_21second_u2 li").mouseover(function () {
        $(this).children(".s_21second_d2").hide();
        $(this).children(".s_21second_d1").show();
        $(this).siblings().children(".s_21second_d2").show();
        $(this).siblings().children(".s_21second_d1").hide();
    });
    $(".s_21second_u2").mouseleave(function () {
        $(".s_21second_d4").hide();
        $(".s_21second_d3").show();
    });
});
// 21/申请企业结束
