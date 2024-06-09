(function($){

    // web 슬라이드 버튼
    $('.web-btn button').on('click', function(){
        $(this).addClass('on')
        $(this).siblings().removeClass('on')
        var index = $(this).index()
        $('.webslide').eq(index).stop().animate({left: '0'}, 1000)
        if(index===0){
            $('.webslide').eq(1).stop().animate({left: '100%'}, 1000)
            $('.webslide').eq(2).stop().animate({left: '200%'}, 1000)
            $('.webslide').eq(3).stop().animate({left: '300%'}, 1000)
        } else if(index===1){
            $('.webslide').eq(0).stop().animate({left: '-100%'}, 1000)
            $('.webslide').eq(2).stop().animate({left: '100%'}, 1000)
            $('.webslide').eq(3).stop().animate({left: '200%'}, 1000)
        } else if(index===2){
            $('.webslide').eq(0).stop().animate({left: '-200%'}, 1000)
            $('.webslide').eq(1).stop().animate({left: '-100%'}, 1000)
            $('.webslide').eq(3).stop().animate({left: '100%'}, 1000)
        } else if(index===3){
            $('.webslide').eq(0).stop().animate({left: '-300%'}, 1000)
            $('.webslide').eq(1).stop().animate({left: '-200%'}, 1000)
            $('.webslide').eq(2).stop().animate({left: '-100%'}, 1000)
        }
    })

    // photoshop 팝업
    var lieq, src, alt
    $('.photo-box .photoImg li a').on('click', function(e){
        e.preventDefault()
        e.stopPropagation()
        lieq = $(this).parent().index()
        src = $(this).find('img').attr('src')
        alt = $(this).find('img').attr('alt')
        $('.popup-wrap').addClass('on')
        $('.popup-wrap').stop().fadeIn(500)
        $('.photo-box').css({filter: 'blur(3px)'})
        $('.popup-box .img-box img').attr('src',src)
        $('.popup-box .img-box img').attr('alt',alt)
    })
    $('.popup-box .close').on('click', function(e){
        e.preventDefault()
        $('.popup-wrap').removeClass('on')
        $('.popup-wrap').stop().fadeOut(500)
        $('.photo-box').css({filter: 'blur(0px)'})
    })
    $('.popup-wrap .deco-box').on('click', function(){
        $('.popup-wrap').removeClass('on')
        $('.popup-wrap').stop().fadeOut(500)
        $('.photo-box').css({filter: 'blur(0px)'})
    })
    function changeList (ind){
        src = $('.photo-box .photoImg li').eq(ind).find('img').attr('src')
        alt = $('.photo-box .photoImg li').eq(ind).find('img').attr('alt')
        $('.popup-box .img-box img').attr({ 'src': src, 'alt': alt })
            .css({ opacity: '0.5' })
            .stop().animate({ opacity: '1' }, 500)
    }
    $('.popup-box .prev').on('click', function(e){
        e.preventDefault()
        --lieq
        if(lieq<0){lieq=0}
        changeList(lieq)
    })
    $('.popup-box .next').on('click', function(e){
        e.preventDefault()
        if(lieq>15){lieq=15}
        ++lieq
        changeList(lieq)
    })

    // contact me 메일전송
    var name, address, subject, body
    $('.contact_form a').on('click', function(){    
        name = $('#send_name').val()
        address = '?cc=' + $('#send_email').val()
        subject = '?subject=' + $('#send_subject').val()
        body = '?body=' + '[' + name + ']' + $('#send_message').val()
        href = 'mailto:ahpark94@gmail.com' + address + subject + body
        $(this).attr('href', href)
    })

})(jQuery)