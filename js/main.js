$(function () {
    gsap.registerPlugin(ScrollTrigger);

    function burg() {
        var burgerWr = $('.burger-wrap'),
            burgerBtn = $('.burger-btn'),
            burgerBody = $('.burger-body'),
            burgerCloseBtn = $('.burger-close-btn');

        burgerBtn.on('click', function () {
            $(burgerWr).addClass('opened');
            $('html').addClass('owh');
        });

        burgerCloseBtn.on('click', function () {
            $(burgerWr).removeClass('opened');
            $('html').removeClass('owh');
        })
    }

    burg();

    $(document).on('click', function (e) {
        if ($(e.target).closest('.burger-btn').length || $(e.target).closest('.burger-body').length)
            return;

        $('.burger-wrap').removeClass('opened');
        $('html').removeClass('owh');
    });
    $('.js_rev_sl').on("init", function (event, slick) {
        $(".count").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
    });

    $('.js_rev_sl').on("afterChange", function (event, slick, currentSlide) {
        $(".count").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
    });
    $('.js_rev_sl').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
    });
    $('.js_ab_sl').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        variableWidth: true
    });
    $('.js_mast_sl').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                variableWidth: true,
                arrows: true,
                slidesToShow: 1
            }
        }, ]
    });
    $('.slider-for').slick({
        centerMode: true,
        slidesToShow: 3,
        arrows: false,
        variableWidth: true,
        asNavFor: '.slider-nav',
        responsive: [{
            breakpoint: 1024,
            settings: {
                centerMode: false
            }
        }, ]
    });
    $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false
    });


    function initAnimation() {
        $('.main_services__block').each(function() {
            gsap.to($(this).find('.main_services__l-side'), {
                scrollTrigger: {
                    trigger: $(this),
                    start: 'top bottom-=400',
                    end: 'bottom bottom-=400',
                    scrub: 1,
                    markers: true,
                },
                y: 0,
            })
            gsap.to($(this).find('.main_services__r-side'), {
                scrollTrigger: {
                    trigger: $(this),
                    start: 'top bottom-=400',
                    end: 'bottom bottom-=400',
                    scrub: 1,
                    markers: true,
                },
                y: 0,
            })
        });
        
    }
    initAnimation();
});