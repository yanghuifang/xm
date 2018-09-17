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
    let text1=$(".content ul .con-li1 dl");
    let l=$(".con-li1 .dot .page1");
    let lefts=$(".con-li1 .left");
    let rights=$(".con-li1 .right");
    console.log(l,text1);
    console.log(text1);
    fn(text1,l,lefts,rights);
    fn($(".content ul .con-li3 dl"),$(".con-li3 .dot .page1"),$(".con-li3 .left"),$(".con-li3 .right"))
    fn($(".content ul .con-li4 dl"),$(".con-li4 .dot .page1"),$(".con-li4 .left"),$(".con-li4 .right"))

    fn($(".content ul .con-li2 dl"),$(".con-li2 .dot .page1"),$(".con-li2 .left"),$(".con-li2 .right"))
    function fn(text1,l,lefts,rights) {
        let n2=0;
        let n3=0;
        l.eq(0).addClass("active");
        text1.eq(0).css("left","0");
        lefts.click(function(){
            n3--;
            if (n3==-1){
                n3=0;
            }else{
                text1.eq(n2).animate({left:`291.5px`});
                text1.eq(n3).css("left","-291.5px");
                text1.eq(n3).animate({left:`0`});
                l.eq(n2).removeClass("active");
                l.eq(n3).addClass("active")
                n2=n3;
            }


        })
            rights.click(function(){
            n3++;
            if (n3>=3){
                n3=2;
            }else{
                text1.eq(n2).animate({left:`-291.5px`});
                text1.eq(n3).css("left","291.5px");
                text1.eq(n3).animate({left:`0`})
                l.eq(n2).removeClass("active");
                l.eq(n3).addClass("active")
                n2=n3;
            }

        })
        l.click(function () {
            let i =$(this).index();
            if(i>n2){
                n3++;
                text1.eq(n2).animate({left:`-291.5px`});
                text1.eq(n3).css("left","291.5px");
                text1.eq(n3).animate({left:`0`})
                l.eq(n2).removeClass("active");
                l.eq(n3).addClass("active")
                n2=n3;
            }else if(i<n2){
                n3--;
                text1.eq(n2).animate({left:`291.5px`});
                text1.eq(n3).css("left","-291.5px");
                text1.eq(n3).animate({left:`0`});
                l.eq(n2).removeClass("active");
                l.eq(n3).addClass("active")
                n2=n3;
            }

        })
    }

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
        let feture=new Date(2018,9,1,0,0,0);
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