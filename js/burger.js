document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".open-burger").addEventListener("click", function() {
        //WHEN OPEN
        document.querySelector(".body").classList.add("scroll-disable");
        document.querySelector(".header-container").classList.add("header-container__disable");
        document.querySelector('.header__ul').classList.add('header-ul__open');
        document.querySelector('.close-burger').classList.add('form-btn__active');
        document.querySelector('.login-burger').classList.add('form-btn__active');
        document.querySelector('.header').classList.add('disable-div');
        document.querySelector('.hero').classList.add('disable-div');
        document.getElementsByClassName("header-container")[0].style = "position:static";

    })


    const CloseBurger = document.querySelectorAll(".close-burger, .hero-anim")
    CloseBurger.forEach(function(burger_el) {
        burger_el.addEventListener("click", function() {
            //WHEN CLOSE
            document.querySelector(".body").classList.remove("scroll-disable");
            document.querySelector('.header__ul').classList.remove('header-ul__open');
            document.querySelector('.close-burger').classList.remove('form-btn__active');
            document.querySelector('.login-burger').classList.remove('form-btn__active');
            document.querySelector('.header').classList.remove('disable-div');
            document.querySelector('.hero').classList.remove('disable-div');
            document.querySelector(".header-container").classList.remove("header-container__disable");

        })
    })

})