document.addEventListener("DOMContentLoaded", function() {
    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("map", {
            center: [55.763923, 37.606442],
            zoom: 14,
            // Очистка всех элементов навигации
            controls: [],
            controls: ['smallMapDefaultSet']
        });
        myMap.behaviors.disable('scrollZoom')
            // Размещение геообъекта на карте
        var myPlacemark = new ymaps.Placemark([55.763923, 37.606442], {}, {
            iconLayout: 'default#image',
            iconImageHref: './svg/map.svg',
            iconImageSize: [20, 20],
            iconImageOffset: [-3, -42]
        });
        myMap.geoObjects.add(myPlacemark);

    }
})