/**
 * Created by AN on 25.06.18.
 */
$(document).ready(function () {
    $('.portfolio').mixItUp();
    var scrollT = $(document).scrollTop();
    var nav = $('.navigation-container');
    new WOW().init();
    $('.toggle-mnu').click(function () {
        $(this).toggleClass('active');
        $('navigation').toggleClass('nav-visible');
        $('.navigation-container').toggleClass('mob-active');
    });
    $('.mob-active .menu__link').click(function () {
        $('.mob-active').removeClass('nav-visible');
    });
    var menu = nav;
    $(window).scroll(function() {
        var top = $(this).scrollTop();
        if ( top >= 20 ) {
            menu.addClass('sticky');
        }
        else if ( top <= 20 ) {
            menu.removeClass('sticky');
        }
    });
    $('.work-philter').click(function () {
        $('.work-philter').removeClass('active');
        $(this).addClass('active');
    });
});

$(document).ready(function(){
    $(".navigation-container,.header,.section-free").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'), top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
});