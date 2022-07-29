document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".drop__btn").forEach(item => {
        item.addEventListener("click", function() {
            let btn = this;
            let dropdown = this.parentElement.querySelector(".hero-choices");

            document.querySelectorAll(".drop__btn").forEach(el => {
                if (el != btn) {
                    el.classList.remove("active-btn");
                }
            });

            document.querySelectorAll(".hero-choices").forEach(el => {
                if (el != dropdown) {
                    el.classList.remove("active-hero-choices");
                }
            })
            dropdown.classList.toggle("active-hero-choices")
            btn.classList.toggle("active-btn")
        })
    })

    document.addEventListener("click", function(e) {
        let target = e.target;
        if (!target.closest(".hero__ul")) {
            document.querySelectorAll(".hero-choices").forEach(el => {
                el.classList.remove("active-hero-choices");
            })
            document.querySelectorAll(".drop__btn").forEach(el => {
                el.classList.remove("active-btn");
            });
        }
    })
})