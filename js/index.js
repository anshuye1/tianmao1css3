$(function(){
    var mySwiper = new Swiper ('#banner', {
        direction: 'horizontal',
        loop: true,
        pagination: '#banner .swiper-pagination',
        autoplay:5000
    });
    var mySwiper1 = new Swiper ('#content2-right', {
        direction: 'vertical',
        loop: true,
        pagination: '#content2-right .swiper-pagination',
        autoplay:5000
    });
    var mySwiper2= new Swiper ('#content3-box', {
        direction: 'horizontal',
        loop: false,
        pagination: '#content3-box .swiper-pagination',
        slidesPerView:2.1
    });
    ///////////////////////////////////侧栏
    $('.shade-right p').on('touchend',function(){
        setTimeout(function(){$('.shade').removeClass('active');},300);
        $('.shade-left').addClass('active');
    });
    $('.header-left').on('touchend',function(){
        $('.shade').addClass('active');
        $('.shade-left').removeClass('active');
    });
    //////////////////////////////////导航
    // var h=$('body').scrollTop();
    var h1=$('.banner').height();

    $(document).on('scroll',function(e){
        var h=$(this).scrollTop();
        if(h>h1){
            $('.header').addClass('active');
        }else {
            $('.header').removeClass('active');
        }
    });
    $('.shade-left-inner').on('touchend',function(){
        $('.shade-left-inner').removeClass('active');
        $(this).addClass('active');
    })

});