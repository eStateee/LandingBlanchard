document.addEventListener("DOMContentLoaded", function() {
    var projects_swiper = new Swiper(".project-swiper", {


        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            576: {
                slidesPerView: 1,
                spaceBetween: 0,
                slidesPerGroup: 1,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 34,
                slidesPerGroup: 2,
            },
            1023: {
                slidesPerView: 2,
                spaceBetween: 50,
                slidesPerGroup: 2,
            },

            1200: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 50,
            },
        },
    });
})