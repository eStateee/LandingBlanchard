document.addEventListener("DOMContentLoaded", function() {
    const gal_swiper = new Swiper(".gal-swiper", {

        pagination: {
            el: ".pag",
            type: "fraction",
            clickable: false,

        },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
        breakpoints: {
            200: {
                slidesPerView: 1,
                spaceBetween: 0,
                slidesPerGroup: 1,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 38,
                slidesPerGroup: 2,
            },
            1024: {
                slidesPerGroup: 2,
                slidesPerView: 2,
                spaceBetween: 35,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 50,
                slidesPerGroup: 3,

            }

        },
    });
})