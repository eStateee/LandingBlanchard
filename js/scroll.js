document.addEventListener("DOMContentLoaded", function() {
    new SimpleBar(document.querySelector(".simplebar-scrollbar::before"), {
        /* чтобы изначально ползунок был виден */
        autoHide: false,
        /* с помощью этого значения вы можете управлять высотой ползунка*/

    });
})