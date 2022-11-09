//Sticky Navbar
$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $("#nav-container").addClass("is-sticky");
        $("#nav-container").removeClass("nav-padding");
        $("#nav-container").removeClass("container-fluid");
        $("#nav-container").css({ "transition": "200ms", "width":"100%" });
    }
    else {
        $("#nav-container").addClass("nav-padding");
        $("#nav-container").addClass("container-fluid");
        $("#nav-container").removeClass("is-sticky");
        $("#nav-container").css({ "transition": "200ms", "width":"100%" });
    }
});

//  Initialize Swiper
$(function(){
    var swiper = new Swiper(".mySwiper", {
        // slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            499: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            999: {
                slidesPerView: 3,
            },
        }
    });
})