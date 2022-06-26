$(document).ready(function () {
    $(document).ready(function () {

        $('.items').slick({
            dots: true,
            infinite: true,
            speed: 800,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 10,
            slidesToScroll: 10,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 6,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }

            ]
        });
    });

    function scrollAppear() {
        var introText = $(".intro-text");
        for (var i = 0; i < introText.length; i++) {
            var introPosition = introText[i].getBoundingClientRect().top;
            var screenPosition = window.innerHeight / 1.2;
            if (introPosition < screenPosition) {
                introText[i].classList.add("intro-appear");
            }
        }
    }

    window.addEventListener("scroll", scrollAppear);
});
$(window).on("load", function (event) {
    $("body").removeClass("preloading");
    $(".loaderbox").delay(1000).fadeOut("slow");
});