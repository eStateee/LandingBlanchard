document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".small-btn-open").addEventListener("click", function() {
        document.querySelector(".small-form").classList.add("small-form__active");
        document.querySelector(".open-burger").classList.add("small-form-hide");
        document.querySelector(".header-img").classList.add("small-form-hide");
        document.getElementsByClassName("header-container")[0].style = "position:relative";

        this.classList.add("small-form__open-btn-active");

    })


    document.querySelector(".small-btn-close").addEventListener("click", function() {

        document.querySelector(".small-form").classList.remove("small-form__active")
        document.querySelector(".small-btn-open").classList.remove("small-form__open-btn-active")
        document.querySelector(".open-burger").classList.remove("small-form-hide");
        document.querySelector(".header-img").classList.remove("small-form-hide");

    })
})