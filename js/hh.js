$(function () {
    $(".one").mouseenter(function () {
        $(".loading").clearQueue().slideDown("slow");
    })
    $(".one").mouseleave(function () {
        $(".loading").clearQueue().slideUp("slow");
    })

 //家电
    let parent=$(".tab .tab-1");
    let son=$(".pro-1")
    console.log(parent,son);
    parent.mouseenter(function () {
        let i=$(this).index();
        son.css("display","none").eq(i).css("display","block");
        parent.removeClass("active");
        $(this).addClass("active");
    })

    parent.triggerHandler("mouseenter");


    //banner
    let imgs=$(".site-banner .banner .imgs img");
    let li=$(".site-banner .page li");
    let now=0;
    // let btnl=$(".pushl");
    let btn2=$(".pushr");
    console.log(imgs,li);
    imgs.first().css("zIndex","5");
    li.first().addClass("active");
    let t=setInterval(move,1000);
    function move() {
        now++;
        if (now==imgs.length){
            now=0;
        }
        imgs.css("zIndex",5).eq(now).css("zIndex",10);
        li.removeClass("active").eq(now).addClass("active");
    }
    function movel() {
        now--;
        if (now<0){
            now=imgs.length-1;
        }
        imgs.css("zIndex",5).eq(now).css("zIndex",10);
        li.removeClass("active").eq(now).addClass("active");
    }
    $(".pushl").click(function () {
        movel();
    })
    $(".pushr").click(function () {
        move();
    })
    $(".banner").mouseenter(function () {
        clearInterval(t);
    })
    $(".banner").mouseleave(function () {
        t=setInterval(move,1000);
    })
    $(".pushl,.pushr").mouseenter(function () {
        clearInterval(t);
    })
    $(".pushl,.pushr").mouseleave(function () {
        t=setInterval(move,1000);
    })

    $(".site-banner .page li").click(function () {
        let j=$(this).index();
        imgs.css("zIndex",5).eq(j).css("zIndex",10);
        li.removeClass("active").eq(j).addClass("active");
    })

    //小米闪购
    // let san=$(".san-box-fi");
    let right=$(".hgroup .stat2");
    let left=$(".hgroup .stat1");
    let i=0;
    right.click(function(){
        i++;
        if(i==3){
            i=2;
        }
        else{
            $(".san-box-fi").css("transform","translate("+(-996*i)+"px"+")");
        }
//		-996*ipx

    })
    left.click(function(){
        i--;
        if(i==-1){
            i=0;
        }
        else{
            $(".san-box-fi").css("transform","translate("+(-996*i)+"px"+")");
        }
//		-996*ipx

    })
    //推荐
    let a=0;
    $(".stat4").click(function () {
        a++;
        if(a==3){
            a=2;
        }
        else{
            $(".recomment ul").css("transform","translate("+(-1226*a)+"px"+")");
        }
    })
    $(".stat3").click(function () {
        a--;
        if(a==-1){
            a=0;
        }
        else{
            $(".recomment ul").css("transform","translate("+(-1226*a)+"px"+")");
        }
    })
    //内容banner
    // let text1=$(".content ul .con-li1 dl");
    // let l=$(".con-li1 .dot .page1");
    // console.log(l,text1);
    // console.log(text1);
    // let n2=0;
    // let n3=0;
    // $(".con-li1 .left").click(function(){
    //     n2--;
    //     if (n2<0){
    //         n2=0;
    //     }else{
    //         text1.eq(n2).css("left","291.5px");
    //         text1.eq(n3).css("left","0");
    //         l.removeClass("active").eq(n2).addClass("active");
    //     }
    //
    // })
    // $(".con-li1 .right").click(function(){
    //     n2++;
    //     if (n2==3){
    //         n2=2;
    //     }else{
    //         text1.css("left","0");
    //         l.removeClass("active").eq(n2).addClass("active");
    //     }
    //
    // })
    //顶部的选项卡
    let top=$(".site-header ul li");
    let ka=$(".site-header ul li .down");
    console.log(top, ka);
    top.mouseenter(function () {
        ka.css("display","none");
        $(this).children(".site-header ul li .down").css("display","block");
    })
    top.mouseleave(function () {
        ka.css("display","none");
    })
//侧导航
    let lis=$("aside ul li");
    let sons=$("aside ul li .son");
    console.log(lis,sons);
    lis.mouseenter(function () {
        sons.css("display","none");
        $(this).children(".son").css("display","block");
    })
    lis.mouseleave(function () {
        sons.css("display","none");
        // $(this).children(sons).css("display","none");
    })
//    倒计时
    let spans=$(".box .sangou .num");
    console.log(spans);
    setdate();
    setInterval(setdate,1000);
    function setdate() {

        let now=new Date();
        let feture=new Date(2018,8,16,0,0,0);
        let time=Math.floor((feture.getTime()-now.getTime())/1000);
        // console.log(time);
        // let month=Math.floor(time/(30*24*60*60));
        // console.log(month);
        // let day=Math.floor(time%(30*24*60*60)/(24*60*60));
        // console.log(day);
        let h=Math.floor(time%(30*24*60*60)%(24*60*60)/(60*60));
        // console/.log(h);
        let m=Math.floor(time%(30*24*60*60)%(24*60*60)%(60*60)/60);
        // console.log(h);
        let s=Math.floor(time%(30*24*60*60)%(24*60*60)%(60*60)%60);
        // console.log(s);
        // arr.push(month);
        // arr.push(day);
        spans.eq(0).html(h);
        spans.eq(1).html(m);
        spans.eq(2).html(s);
    }

})