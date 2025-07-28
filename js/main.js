(function ($) {
    "use strict";

    // Spinner
    window.addEventListener('load', function () {
        const spinner = document.getElementById('spinner-desktop');
        if (spinner) {
            spinner.classList.remove('show');
        }
    });



    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    let lastScrollTop = 0;
window.addEventListener("scroll", function () {
    const st = window.scrollY;
    const navbar = document.querySelector(".navbar");

    if (window.innerWidth <= 768) {
        // MOBILE VERSION – Hide on scroll UP, Show on scroll DOWN
        if (st < lastScrollTop) {
            navbar.classList.add("hidden");
        } else {
            navbar.classList.remove("hidden");
        }
    } else {
        // DESKTOP VERSION – Hide on scroll DOWN, Show on scroll UP
        if (st > lastScrollTop) {
            navbar.classList.add("hidden");
        } else {
            navbar.classList.remove("hidden");
        }
    }

    lastScrollTop = Math.max(0, st);
});


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Countdown Timer
    function countDownTimer() {
        var endTime = new Date("31 December 2023 10:00:00 GMT+00:00");
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (days < "10") {
            days = "0" + days;
        }
        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }

        $("#cdt-days").html(days + "<span>-Days-</span>");
        $("#cdt-hours").html(hours + "<span>-Hours-</span>");
        $("#cdt-minutes").html(minutes + "<span>-Mins-</span>");
        $("#cdt-seconds").html(seconds + "<span>-Secs-</span>");

    }

    setInterval(function () {
        countDownTimer();
    }, 1000);


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

})(jQuery);

document.querySelectorAll('.gallery-item').forEach(item => {
    const video = item.querySelector('video');
    if (video) {
        item.addEventListener('mouseenter', () => {
            video.play();
        });
        item.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0; // Optional: reset to beginning
        });
    }
});

// Hide navbar on scroll down � only on mobile (?576px)
if (window.innerWidth <= 576) {
    let lastScrollTop = 0;
    window.addEventListener("scroll", function () {
        const st = window.scrollY;
        const navbar = document.querySelector(".navbar");
        if (st > lastScrollTop) {
            navbar.classList.add("hidden");
        } else {
            navbar.classList.remove("hidden");
        }
        lastScrollTop = Math.max(0, st);
    }, false);
}


