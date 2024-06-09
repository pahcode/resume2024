(function($){

    // 햄버거버튼
    function openNav(){
        $('.header-outer').toggleClass('on')
        if ($('.header-outer').hasClass('on')) {
            $('.nav').css({
                display: 'block'
            }).animate({
                right: '0'
            }, 500)
            $('.outlayer').css({
                display: 'block'
            })
        } else {
            $('.nav').animate({
                right: '-55%'
            }, 500, function(){
                $(this).css({
                    display: 'none'
                })
            })
            $('.outlayer').css({
                display: 'none'
            })
        }
    }
    $('.open-gnb').on('click', openNav)
    $('.outlayer').on('click', openNav)

    // 리사이즈 할때
    var winWidth
    var sct
    function init(){
        winWidth = $(window).innerWidth()
        sct = $(window).scrollTop()
        function common(){
            $('.header-outer').removeClass('on')
            $('.intro-box').addClass('row')
            $('.outlayer').css({display: 'none'})
            $('.nav').css({display: 'block'})
        }
        if( winWidth>1200 && sct===0 && !$('html').hasClass('pc')){
            $('.nav').css({right: '0'})
            $('.header-outer .nav').css({lineHeight: '70px'})
            $('.nav li').eq(0).addClass('focus')
            common()
            $('html').addClass('pc').removeClass('mobile tablet')
        } else if( winWidth>1200 && !$('html').hasClass('pc')){
            $('.nav').css({right: '0'})
            $('.header-outer .nav').css({lineHeight: '90px'})
            $('html').addClass('pc').removeClass('mobile tablet')
            currNav()
            common()
        } else if( winWidth>800 && winWidth<=1200 && sct===0 && !$('html').hasClass('tablet')){
            $('.nav').css({right: '10px'})
            $('.header-outer .nav').css({lineHeight: '70px'})
            $('.nav li').eq(0).addClass('focus')
            $('html').addClass('tablet').removeClass('pc mobile')
            common()
        } else if( winWidth>800 && winWidth<=1200 && !$('html').hasClass('tablet')){
            $('.nav').css({right: '10px'})
            $('.header-outer .nav').css({lineHeight: '90px'})
            $('html').addClass('tablet').removeClass('pc mobile')
            currNav()
            common()
        } else if (winWidth<=800 && !$('html').hasClass('mobile')){
            $('.header-outer').removeClass('on')
            $('.intro-box').removeClass('row')
            $('.nav').css({
                display: 'none',
                right: '-55%'
            })
            $('html').addClass('mobile').removeClass('pc tablet')
        }
        scrollNav()
    }
    init()
    $(window).resize(function(){
        init()
    })

    // 섹션 바뀔때마다 발생하는 이벤트
    var sch1 = $('section').eq(0).outerHeight()
    var sch2 = $('section').eq(1).outerHeight()
    var sch3 = $('section').eq(2).outerHeight()
    var sch4 = $('section').eq(3).outerHeight()
    // hide랑 show에 조건넣기 (winWidth>800 일때만 되게 / console.log test 해보고)
    $('#intro .bg-intro, #intro .bigTit1 span, #intro .bigTit2 span, #intro .contTxt1, #intro .contTxt2, #about .bg-about, .about-box .left-area .tit-box svg, .about-box .left-area .tit-box h2 p, .about-box .txt-box, .about-box .skill, .about-box .skill li .myscore, .about-box .r-box, .web-box .tit-box svg, .web-box .tit-box h2 p, .web-box .web-btn, .webslide .img, .webslide .txt-box > div, #photo .bg-photo, .photo-box .tit-box svg, .photo-box .tit-box h2 p, .photo-box .intro, .photo-box .photoImg, #contact .tit-box svg, #contact .tit-box h2 p, .formMailWrap .contact_form, .formMailWrap .letter_box').hide()
    $('#intro .bg-intro, #intro .bigTit1 span, #intro .bigTit2 span, #intro .contTxt1, #intro .contTxt2').show()
    function currNav (){
        if(sct < sch1){
            $('.nav li').eq(0).addClass('focus')
            $('.nav li').eq(0).siblings().removeClass('focus')
            $('.left-nav ul a').eq(0).addClass('on')
            $('.left-nav ul a').eq(0).siblings().removeClass('on')
            $('.prev-arrow').stop().animate({opacity: '0s'}, 500)
            $('.next-arrow').stop().animate({opacity: '1'}, 500)
            $('.letter_box').removeClass('on')
            if(winWidth > 800) {
                $('#about .bg-about, .about-box .left-area .tit-box svg, .about-box .left-area .tit-box h2 p, .about-box .txt-box, .about-box .skill, .about-box .skill li .myscore, .about-box .r-box, .webslide .img, .web-box .tit-box svg, .web-box .tit-box h2 p, .web-box .web-btn, .webslide .img, .webslide .txt-box > div').hide()
                $('#intro .bg-intro, #intro .bigTit1 span, #intro .bigTit2 span, #intro .contTxt1, #intro .contTxt2').show()
            } else if (winWidth <= 800) {
                $('#intro .bg-intro, #intro .bigTit1 span, #intro .bigTit2 span, #intro .contTxt1, #intro .contTxt2, #about .bg-about, .about-box .left-area .tit-box svg, .about-box .left-area .tit-box h2 p, .about-box .txt-box, .about-box .skill, .about-box .skill li .myscore, .about-box .r-box, .web-box .tit-box svg, .web-box .tit-box h2 p, .web-box .web-btn, .webslide .img, .webslide .txt-box > div, .photo-box .tit-box svg, .photo-box .tit-box h2 p, .photo-box .intro, .photo-box .photoImg, #contact .tit-box svg, #contact .tit-box h2 p, .formMailWrap .contact_form').show()
                $('.webslide .txt-box .subject, #photo .bg-photo').hide()
            }
        } else if(sct>=sch1 && sct<sch1+sch2){
            $('.nav li').eq(1).addClass('focus')
            $('.nav li').eq(1).siblings().removeClass('focus')
            $('.left-nav ul a').eq(1).addClass('on')
            $('.left-nav ul a').eq(1).siblings().removeClass('on')
            $('.prev-arrow').stop().animate({opacity: '1'}, 500)
            $('.next-arrow').stop().animate({opacity: '1'}, 500)
            $('.letter_box').removeClass('on')
            if(winWidth > 800) {
                $('#intro .bg-intro, #intro .bigTit1 span, #intro .bigTit2 span, #intro .contTxt1, #intro .contTxt2, .web-box .tit-box svg, .web-box .tit-box h2 p, .web-box .web-btn, .webslide .img, .webslide .txt-box > div').hide()
                $('#about .bg-about,.about-box .left-area .tit-box svg, .about-box .left-area .tit-box h2 p, .about-box .txt-box, .about-box .skill, .about-box .skill li .myscore, .about-box .r-box').show()
            } else if (winWidth <= 800) {
                $('#intro .bg-intro, #intro .bigTit1 span, #intro .bigTit2 span, #intro .contTxt1, #intro .contTxt2, #about .bg-about, .about-box .left-area .tit-box svg, .about-box .left-area .tit-box h2 p, .about-box .txt-box, .about-box .skill, .about-box .skill li .myscore, .about-box .r-box, .web-box .tit-box svg, .web-box .tit-box h2 p, .web-box .web-btn, .webslide .img, .webslide .txt-box > div, .photo-box .tit-box svg, .photo-box .tit-box h2 p, .photo-box .intro, .photo-box .photoImg, #contact .tit-box svg, #contact .tit-box h2 p, .formMailWrap .contact_form').show()
                $('.webslide .txt-box .subject, #photo .bg-photo').hide()
            }
        } else if(sct>=sch1+sch2 && sct<sch1+sch2+sch3){
            $('.nav li').eq(2).addClass('focus')
            $('.nav li').eq(2).siblings().removeClass('focus')
            $('.left-nav ul a').eq(2).addClass('on')
            $('.left-nav ul a').eq(2).siblings().removeClass('on')
            $('.prev-arrow').stop().animate({opacity: '1'}, 500)
            $('.next-arrow').stop().animate({opacity: '1'}, 500)
            $('.letter_box').removeClass('on')
            if(winWidth > 800) {
                $('#intro .bg-intro, #intro .bigTit1 span, #intro .bigTit2 span, #intro .contTxt1, #intro .contTxt2, #about .bg-about,.about-box .left-area .tit-box svg, .about-box .left-area .tit-box h2 p, .about-box .txt-box, .about-box .skill, .about-box .skill li .myscore, .about-box .r-box, #photo .bg-photo, .photo-box .tit-box svg, .photo-box .tit-box h2 p, .photo-box .intro, .photo-box .photoImg, #contact .tit-box svg, #contact .tit-box h2 p, .formMailWrap .contact_form, .formMailWrap .letter_box').hide()
                $('.web-box .tit-box svg, .web-box .tit-box h2 p, .web-box .web-btn, .webslide .img, .webslide .txt-box > div, .webslide .txt-box .subject').show()
            } else if (winWidth <= 800) {
                $('#intro .bg-intro, #intro .bigTit1 span, #intro .bigTit2 span, #intro .contTxt1, #intro .contTxt2, #about .bg-about, .about-box .left-area .tit-box svg, .about-box .left-area .tit-box h2 p, .about-box .txt-box, .about-box .skill, .about-box .skill li .myscore, .about-box .r-box, .web-box .tit-box svg, .web-box .tit-box h2 p, .web-box .web-btn, .webslide .img, .webslide .txt-box > div, .photo-box .tit-box svg, .photo-box .tit-box h2 p, .photo-box .intro, .photo-box .photoImg, #contact .tit-box svg, #contact .tit-box h2 p, .formMailWrap .contact_form').show()
                $('.webslide .txt-box .subject, #photo .bg-photo').hide()
            }
        } else if(sct>=sch1+sch2+sch3 && sct<sch1+sch2+sch3+sch4){
            $('.nav li').eq(3).addClass('focus')
            $('.nav li').eq(3).siblings().removeClass('focus')
            $('.left-nav ul a').eq(3).addClass('on')
            $('.left-nav ul a').eq(3).siblings().removeClass('on')
            $('.prev-arrow').stop().animate({opacity: '1'}, 500)
            $('.next-arrow').stop().animate({opacity: '1'}, 500)
            $('.letter_box').removeClass('on')
            if(winWidth > 800) {
                $('#intro .bg-intro, #intro .bigTit1 span, #intro .bigTit2 span, #intro .contTxt1, #intro .contTxt2, #about .bg-about,.about-box .left-area .tit-box svg, .about-box .left-area .tit-box h2 p, .about-box .txt-box, .about-box .skill, .about-box .skill li .myscore, .about-box .r-box, .web-box .tit-box svg, .web-box .tit-box h2 p, .webslide .img, .webslide .txt-box > div, #contact .tit-box svg, #contact .tit-box h2 p, .formMailWrap .contact_form, .formMailWrap .letter_box').hide()
                $('#photo .bg-photo, .photo-box .tit-box svg, .photo-box .tit-box h2 p, .photo-box .intro, .photo-box .photoImg').show()
            } else if (winWidth <= 800) {
                $('#intro .bg-intro, #intro .bigTit1 span, #intro .bigTit2 span, #intro .contTxt1, #intro .contTxt2, #about .bg-about, .about-box .left-area .tit-box svg, .about-box .left-area .tit-box h2 p, .about-box .txt-box, .about-box .skill, .about-box .skill li .myscore, .about-box .r-box, .web-box .tit-box svg, .web-box .tit-box h2 p, .web-box .web-btn, .webslide .img, .webslide .txt-box > div, .photo-box .tit-box svg, .photo-box .tit-box h2 p, .photo-box .intro, .photo-box .photoImg, #contact .tit-box svg, #contact .tit-box h2 p, .formMailWrap .contact_form').show()
                $('.webslide .txt-box .subject, #photo .bg-photo').hide()
            }
        } else if(sct>=sch1+sch2+sch3+sch4){
            $('.nav li').eq(4).addClass('focus')
            $('.nav li').eq(4).siblings().removeClass('focus')
            $('.left-nav ul a').eq(4).addClass('on')
            $('.left-nav ul a').eq(4).siblings().removeClass('on')
            $('.prev-arrow').stop().animate({opacity: '1'}, 500)
            $('.next-arrow').stop().animate({opacity: '0'}, 500)
            $('.letter_box').addClass('on')
            if(winWidth > 800) {
                $('#intro .bg-intro, #intro .bigTit1 span, #intro .bigTit2 span, #intro .contTxt1, #intro .contTxt2, #about .bg-about,.about-box .left-area .tit-box svg, .about-box .left-area .tit-box h2 p, .about-box .txt-box, .about-box .skill, .about-box .skill li .myscore, .about-box .r-box, .web-box .tit-box svg, .web-box .tit-box h2 p, .web-box .web-btn, .webslide .img, .webslide .txt-box > div, .photo-box .tit-box svg, .photo-box .tit-box h2 p, .photo-box .intro, .photo-box .photoImg').hide()
                $('#contact .tit-box svg, #contact .tit-box h2 p, .formMailWrap .contact_form, .formMailWrap .letter_box').show()
            } else if (winWidth <= 800) {
                $('#intro .bg-intro, #intro .bigTit1 span, #intro .bigTit2 span, #intro .contTxt1, #intro .contTxt2, #about .bg-about, .about-box .left-area .tit-box svg, .about-box .left-area .tit-box h2 p, .about-box .txt-box, .about-box .skill, .about-box .skill li .myscore, .about-box .r-box, .web-box .tit-box svg, .web-box .tit-box h2 p, .web-box .web-btn, .webslide .img, .webslide .txt-box > div, .photo-box .tit-box svg, .photo-box .tit-box h2 p, .photo-box .intro, .photo-box .photoImg, #contact .tit-box svg, #contact .tit-box h2 p, .formMailWrap .contact_form').show()
                $('.webslide .txt-box .subject, #photo .bg-photo').hide()
            }
        }
    }
    currNav()

    // 스크롤 내리면 네비 배경 하얗게
    function scrollNav(){
        sct = $(window).scrollTop()
        if (sct>0 && winWidth>800 ) {
            // 스크롤 0 이상, 웹 사이즈일때
            $('.deco-box').stop().animate({
                opacity: '1'
            }, 150)
            $('.header-outer h1').stop().animate({
                color: '#333',
                height: '90px'
            }, 500)
            $('.header-outer h1 a').stop().animate({
                lineHeight: '90px'
            }, 500)
            $('.header-outer h1 span').stop().animate({
                color: '#a1a1a1'
            }, 500)
            $('.header-outer .nav').stop().animate({
                lineHeight: '90px'
            }, 500)
            currNav()
        } else if (sct>0 && winWidth<=800 ){
            $('.deco-box').stop().animate({
                opacity: '1'
            }, 150)
            $('.header-outer h1').stop().animate({
                color: '#333',
                height: '90px'
            }, 500)
            $('.header-outer h1 a').stop().animate({
                lineHeight: '90px'
            }, 500)
            $('.header-outer h1 span').stop().animate({
                color: '#a1a1a1'
            }, 500)
            $('.header-outer .nav').stop().animate({
                lineHeight: '70px'
            }, 500)
            $('.open-gnb').stop().animate({
                top: '21px'
            }, 500)
            $('.nav li').removeClass('focus')
            $('.letter_box').on('click', function(){
                $(this).addClass('remove')
            })
            currNav()
        } else if (sct===0 && winWidth>800){
            $('.deco-box').stop().animate({
                opacity: '0'
            }, 150)
            $('.header-outer h1').stop().animate({
                color: '#fff',
                height: '70px'
            }, 750)
            $('.header-outer h1 a').stop().animate({
                lineHeight: '70px'
            }, 750)
            $('.header-outer h1 span').stop().animate({
                color: '#fff'
            }, 750)
            $('.header-outer .nav').stop().animate({
                lineHeight: '70px'
            }, 750)
            $('.prev-arrow').stop().animate({opacity: '0'}, 500)
            $('.next-arrow').stop().animate({opacity: '1'}, 500)
        } else if (sct===0 && winWidth<=800){
            $('.deco-box').stop().animate({
                opacity: '0'
            }, 150)
            $('.header-outer h1').stop().animate({
                color: '#fff',
                height: '70px'
            }, 750)
            $('.header-outer h1 a').stop().animate({
                lineHeight: '70px'
            }, 750)
            $('.header-outer h1 span').stop().animate({
                color: '#fff'
            }, 750)
            $('.header-outer .nav').stop().animate({
                lineHeight: '70px'
            }, 750)
            $('.open-gnb').stop().animate({
                top: '15px'
            }, 750)
        }
    }
    $(window).scroll(function(){
        scrollNav()
    })

    // 마우스휠
    $('section').on('mousewheel', function(e, wh){
        prev = $(this).prev().offset().top
        next = $(this).next().offset().top
        if(!$('.popup-wrap').hasClass('on')){
            if (wh < 0 && winWidth > 800){
                $('html, body').stop().animate({scrollTop: next}, 800, 'linear')
            }     
            else if (sct > 0 && winWidth > 800){
                $('html, body').stop().animate({scrollTop: prev}, 800, 'linear')
            }
        } else if ($('.popup-wrap').hasClass('on')){
            e.preventDefault()
        }
    })

     // 네비 hover
     $('.nav li').hover(
        function(){$(this).addClass('on')},
        function(){$(this).removeClass('on')}
    )
    
    // 네비 클릭
    $('.nav li a').on('click', function(){
        var index = $(this).parent().index()
        var schplus = 0
        for(var i=0; i < index; i++){
            var prevsch = $('section').eq(i).outerHeight()
            schplus += prevsch
        }
        $('body, html').stop().animate({
            scrollTop: schplus
        }, 800)
        return false
    })

    // 왼쪽 리모컨네비 클릭
    $('.left-nav ul a').on('click', function(){
        var index = $(this).index()
        var schplus = 0
        for(var i=0; i < index; i++){
            var prevsch = $('section').eq(i).outerHeight()
            schplus += prevsch
        }
        $(this).siblings().removeClass('on')
        $(this).addClass('on')
        $('body, html').stop().animate({
            scrollTop: schplus
        }, 800)
        return false
    })
    $('.left-nav .prev-arrow').on('click', function(){
        var index = $('.nav li.focus').index()
        var prev = $('section').eq(index).prev().offset().top
        $('body, html').stop().animate({scrollTop: prev}, 800)
    })
    $('.left-nav .next-arrow').on('click', function(){
        var index = $('.nav li.focus').index()
        var next = $('section').eq(index).next().offset().top
        $('body, html').stop().animate({scrollTop: next}, 800)
    })



})(jQuery)