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


