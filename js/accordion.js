document.addEventListener("DOMContentLoaded", function() {
    $(function() {
        $(".accordion__list").accordion({
            icons: false,
            heightStyle: "content",
            collapsible: true,
            active: false
        });

    });
})