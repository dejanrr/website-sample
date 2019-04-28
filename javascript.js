window.onscroll = function() {myFunction()};

var nav = document.getElementById("nav");
var sticky = nav.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky")
    } else {
        nav.classList.remove("sticky");
    }
}


if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}