$(function() {
    let elLink = $('.nav a');
    $('.top').hide();
    $('.menu__btn').hide();

    if($(window).width() <= 678){
        $('.menu__btn').show();
        $('.nav ul li').hide();

        $('.menu__btn').on('click', function() {
            $('.nav ul li').slideToggle(300);
        })
    }

    elLink.on('click', function(em) {
        em.preventDefault();
        elLink.removeClass('active');
        let select = $(this).addClass('active').attr('href');
        let target = $(select);
        $('html, body').animate({scrollTop: target.offset().top - 150}, 1000)
    });

    $(window).scroll(function() {
        if($(this).scrollTop() > 500) {
            $('.top').fadeIn(500);
            $('.bottom').fadeOut(500);
        } else {
            $('.top').fadeOut(500);
            $('.bottom').fadeIn(500);
        }

        let scroll = $(window).scrollTop();

        elLink.each(function() {
            let selector = $(this).attr('href');
            let target = $(selector);
            if(scroll >= target.offset().top - 150) {
                elLink.removeClass('active');
                $(this).addClass('active'); 
            }
        });

    });

    $('.top').click(function() {
        $('html, body').animate({scrollTop: 0}, 1000);
    })
    $('.bottom').click(function() {
        $('html, body').animate({scrollTop: 2000}, 1000);
    })
})