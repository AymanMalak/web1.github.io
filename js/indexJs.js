$(document).ready(function() {

    $('.owl-carousel').owlCarousel({
            margin: 10,
            nav: true,
            responsiveClass: true,
            loop: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                },
                600: {
                    items: 2,
                    nav: false
                },
                950: {
                    items: 3,
                    nav: true,
                }
            }
        })
        // ---------------------------------------------------------------

    $('.owl-prev').text('<').addClass('prev')
    $('.owl-next').text('>').addClass('next')

    // document.querySelector('nav').ontouchstart = function () { console.log("done") };
    // ---------------------------------------------------------------

    $('span.navbar-toggle-icon').css({ 'color': 'yellow', 'background-color': 'yellow' });
    // ---------------------------------------------------------------

    $("#navigation a").mPageScroll2id({ scrollSpeed: 900 });
    $("#oneschool").mPageScroll2id({ scrollSpeed: 900 });
    $("#contactbtn").mPageScroll2id({ scrollSpeed: 900 });
    $("#links a").mPageScroll2id({ scrollSpeed: 900 });
    // ---------------------------------------------------------------

    $(window).on('load scroll resize', function() {
        $('.target').anisview({
            speed: '',
            animation: 'jello',
            repeat: false,
            direction: 'both' // or 'up', 'down'
        });
    });

    // ---------------------------------------------------------------
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 0) {
            $('#button').fadeIn(200);
        } else {
            $('#button').fadeOut(200);
        }
    });
    $(this).scrollTop(0);
    $('#button').click(function() {
        $('nav').slideToggle('slow');
        $('#navigation').slideToggle('slow');
    });
    $('li').click(function() {
        $('#navigation').slideUp('slow');
    });
    // ---------------------------------------------------------------
    $("#navigation").linkUnderlineAnim({
        // animation speed in milliseconds
        "speed": 500,
        // hex color
        "color": "#eee",
        // thickness
        "thickness": 3,
        // distance in pixels from top
        "distance": 8
    });
    //---------------------------------------------------------------
    $('.magic1').magicWand({
        'animation': 'color',
        'color': '#FF0000'
    });
    $('.magic2').magicWand({
        'animation': 'color',
        'color': 'rgb(89, 5, 110)'
    });
    $('.magic3').magicWand({
        'animation': 'color',
        'color': '#0000FF'
    });
    $('.magic4').magicWand({
        'animation': 'color',
        'color': '#FF0000'
    });
    $('.magic5').magicWand({
        'animation': 'color',
        'color': 'rgb(89, 5, 110)'
    });
    $('.magic6').magicWand({
        'animation': 'color',
        'color': '#0000FF'
    });
    //---------------------------------------------------------------
    AOS.init();
    //---------------------------------------------------------------
    // $('.admission').click(function() {
    //     $('.item .forms').hide(1000);
    // });
    // $('.aaaa').addClass('hide', 1500);

    $('.admission').click(function() {
        $('.aaaa').slideToggle(1200);
        // $('.aaaa').toggleClass('hide', 1200);
    });
    //---------------------------------------------------------------

    $('.card-text .text-muted').hover(function() {
            $(this).addClass('fontbold')
        },
        function() {
            $(this).removeClass('fontbold')
        });
    //---------------------------------------------------------------
    //---------------------------------------------------------------


});