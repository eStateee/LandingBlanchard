document.addEventListener("DOMContentLoaded", function() {
    let swiperSlides = document.querySelector(".gallery").querySelectorAll(".gal-slide");
    let modal = document.querySelector(".gal-swiper-modal");
    let modalBtn = modal.querySelector(".content-descr__close");
    let popup = document.querySelector('.popup');
    let body = document.querySelector('.body');

    swiperSlides.forEach(el => {
        el.addEventListener("click", function() {
            // Flex text
            document.querySelectorAll('.content-descr__info').forEach(function(tabContent) {
                tabContent.classList.remove('content-descr__info--active')
            })
            const path = event.currentTarget.dataset.path
            document.querySelector(`[data-target="${path}"]`).classList.add('content-descr__info--active')
                //
            popup.classList.add('popup-visible')
            body.classList.add('scroll-disable')
            let img = this.querySelector("img");
            let link = img.getAttribute("src");

            animation(modal, "modal-active", "play");
            modal.querySelector("img").setAttribute("src", link);
        })
    })
    modalBtn.addEventListener("click", function() {
        popup.classList.remove('popup-visible')
        body.classList.remove('scroll-disable')
        animation(modal, "modal-active", "reverse");
    });

    function animation(el, Class, flag) {
        if (flag === "play") {
            el.style.display = "flex";
            setTimeout(function() {
                el.classList.add(Class);
            }, 50)
        } else if (flag === "reverse") {
            el.classList.remove(Class);
            setTimeout(function() {
                el.style.display = "none";
            }, 700)
        }
    }
});