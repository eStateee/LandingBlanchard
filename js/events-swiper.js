document.addEventListener("DOMContentLoaded", function() {
    var ev_swiper = new Swiper(".events-swiper", {
        slidesPerGroup: 1,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            200: {

                slidesPerView: 1,
                spaceBetween: 0,
                slidesPerGroup: 1,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 34,
                slidesPerGroup: 2,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 27,
                slidesPerGroup: 3,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 50,
                slidesPerGroup: 3,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",

                },
            }

        },
    });
})