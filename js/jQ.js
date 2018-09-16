//页面加载
$(function () {
    $("topbar-right .one").mouseenter(function () {
        $(".loading").clearQueue().slideDown("slow");
    })
    $("topbar-right .one").mouseleave(function () {
        $(".loading").clearQueue().slideup("slow");
    })
    console.log($(".top-pic"));

})