$(document).ready(function () { // Start Coding Here

    // ScrollSpy

    $('.section').headerhighlight({
        elementsChanging: $('.nav-link'),
        currentClass: 'nav-active',
        offset: 0
    });

    // Smooth Scroll

    $('.sidebar-list a').click(function () {

        var sectionTo = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(sectionTo).offset().top
        }, 1200);

    });

    // Sidebar

    $(".clickme").click(function () {
        $(".sidebar-list").css("right", "0");
        $(".close").show();
        $(".clickme").hide();
    });

    $(".close").click(function () {
        $(".sidebar-list").css("right", "-500px");
        $(".close").hide();
        $(".clickme").show();
    });

    // To Top

    $(window).scroll(function () {
        var i = $(this).scrollTop()

        if (i >= 500) {
            $(".top i").css("visibility", "visible");

        } else {
            $(".top i").css("visibility", "hidden");
        }

    });

    $('.top i').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, "1200");
    });

    // Events

    $(".item").mouseenter(function () {
        $(this).children(".overlay").animate({
            height: "100%"
        })
    });

    $(".item").mouseleave(function () {
        $(this).children(".overlay").animate({
            height: "40%"
        })
    });

    // Priorities

    var $window = $(window);

    $(window).on('scroll', function () {
        $topOffset = $(this).scrollTop();

        if ($topOffset > 2700) {

            $('#circle1').circleProgress({
                value: 0.50,
                size: 200,
                animation: {
                    duration: 2000
                },
                thickness: 12, // how thin // not important
                startAngle: 1, // not important
                emptyFill: "#fff",
                fill: {
                    color: "#eb21c3"
                }
            });

            $('#circle2').circleProgress({
                value: 0.75,
                size: 200,
                animation: {
                    duration: 2000
                },
                thickness: 12, // how thin // not important
                startAngle: 1, // not important
                emptyFill: "#fff",
                fill: {
                    color: "#fde906"
                }
            });

            $('#circle3').circleProgress({
                value: 0.30,
                size: 200,
                animation: {
                    duration: 2000
                },
                thickness: 12, // how thin // not important
                startAngle: 1, // not important
                emptyFill: "#fff",
                fill: {
                    color: "#21ebb9"
                }
            });
        };
    });

    // Residents

    $('#mixedSlider').multislider({
        duration: 1000,
        interval: 3000
    });

    // Blog

    $(".item1").mouseenter(function () {
        $(this).find(".overlay1 p").show()
        $(this).children(".overlay1").animate({
            height: "100%"
        })
    });

    $(".item1").mouseleave(function () {
        $(this).find(".overlay1 p").hide();
        $(this).children(".overlay1").animate({
            height: "25%"
        })
    });

}); // End Code

// JavaScript Code

// Gallery

var a = new FgGallery('.fg-gallery', {
    cols: 4
});

// Testimonials

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}