document.addEventListener("DOMContentLoaded", function() {
    const hero_selector = document.querySelectorAll(".choices")
    const gallery_selector = document.querySelector(".gal-choices")
    var count = Number(0)

    hero_selector.forEach(el => {
        count = count + Number(1)

        const choices = new Choices(el, {
            searchEnabled: false,

            position: 'bottom',
            shouldSort: false,
            allowHTML: true,
            classNames: {
                containerOuter: 'choices ' + 'choices-'.concat(count),
            },
            itemSelectText: '',


        });

    })



    // GALLERY
    const gal_choices = new Choices(gallery_selector, {
        searchEnabled: false,
        position: 'bottom',
        shouldSort: false,
        allowHTML: true,
        classNames: {
            containerOuter: 'choices gal-choices',
            containerInner: 'choices__inner gal-choices__inner',
            itemSelectable: 'gal-choices__item--selectable',
            list: 'gal-choices__list',
            itemChoice: 'gal-choices__item--choice',
        },
        itemSelectText: '',
    });


});