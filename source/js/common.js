

$(function () {



    var windowh = $(window).height();
    var windowW = $(window).width();


try {
    var swiper = new Swiper(".ticket-info", {

        speed: 500,
        loop:true,
        spaceBetween: 80,
        centeredSlides: true,
        slidesPerView: "auto",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        }
    });

} catch {}


    
    $("button.main-toggle").on("click", function(){
        $(this).parent().toggleClass("active");

    });


    $("section.sub-view .tabs button").on("click", function(){
        $("section.sub-view .tabs button").removeClass("on");
        $(this).addClass("on");

        $("section.sub-view .tab-contents").removeClass("on");
        $("section.sub-view .tab-contents#"+ $(this).attr("data")).addClass("on");
    });


    
    $("div.line button.plus").on("click", function(){
        var num = +$(this).parent().find("input").val() + 1;
        $(this).parent().find("input").val(num);
    });

    $("div.line button.minus").on("click", function(){
        var num = +$(this).parent().find("input").val() - 1;

        if ($(this).parent().find("input").val() > 0) {
            $(this).parent().find("input").val(num);
        }
    });
    
    $("div.card button.toggle").on("click", function(){
        $(this).toggleClass("on");
        $("div.card ul").toggleClass("on");
    });
    
    $("div.card li").on("click", function(){
        $("div.card button span").html($(this).html());
        $("div.card ul").removeClass("on");
        $("div.card button").removeClass("on");
    });





$('ul.list').niceScroll({
  emulatetouch:true
});

    // var keypadtarget = $("input:focus").attr("id");

    
    // $("input.forkeypad").on("click", function(){
    //     keypadtarget = $(this).attr("id");

    // });


    // $("article.keypad button").on("click", function(){
    //     $("input#" + keypadtarget).focus();

    //     if ($(this).hasClass("back")) {

    //         $("input#" + keypadtarget).val($("input#" + keypadtarget).val().slice(0,-1));

    //     } else if ($(this).hasClass("del")) {

    //         $("input#" + keypadtarget).val("");

    //     } else {
    //         $("input#" + keypadtarget).val($("input#" + keypadtarget).val() + $(this).text());
    //     }
    // });




});
