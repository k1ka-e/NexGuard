ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [41.322341, 69.280520], // Координаты центра карты
        zoom: 11 // Уровень масштабирования
    });

    // Создаем маркер с собственным изображением
    var myPlacemark = new ymaps.Placemark(
        [41.322341, 69.280520], // Координаты местоположения маркера
        {}, // Свойства маркера (в данном случае пустой объект)
        {
            iconLayout: 'default#image', // Определяем тип макета маркера
            iconImageHref: '/assets/img/pin.png', // Путь к изображению вашего маркера
            iconImageSize: [42, 48], // Размеры изображения
            iconImageOffset: [-15, -15] // Смещение изображения
        }
    );

    // Добавляем маркер на карту
    myMap.geoObjects.add(myPlacemark);
});


// Инициализация превью слайдера
const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', { // ищем слайдер превью по селектору
    // задаем параметры
    direction: 'vertical', // вертикальная прокрутка
    slidesPerView: 3, // показывать по 3 превью
    spaceBetween: 24, // расстояние между слайдами
    navigation: { // задаем кнопки навигации
        nextEl: '.slider__next', // кнопка Next
        prevEl: '.slider__prev' // кнопка Prev
    },
    freeMode: true, // при перетаскивании превью ведет себя как при скролле
    breakpoints: { // условия для разных размеров окна браузера
        0: { // при 0px и выше
            direction: 'horizontal', // горизонтальная прокрутка
        },
        768: { // при 768px и выше
            direction: 'vertical', // вертикальная прокрутка
        }
    }
});
// Инициализация слайдера изображений
const sliderImages = new Swiper('.slider__images .swiper-container', { // ищем слайдер превью по селектору
    // задаем параметры
    direction: 'vertical', // вертикальная прокрутка
    slidesPerView: 1, // показывать по 1 изображению
    spaceBetween: 32, // расстояние между слайдами
    mousewheel: true, // можно прокручивать изображения колёсиком мыши
    navigation: { // задаем кнопки навигации
        nextEl: '.slider__next', // кнопка Next
        prevEl: '.slider__prev' // кнопка Prev
    },
    grabCursor: true, // менять иконку курсора
    thumbs: { // указываем на превью слайдер
        swiper: sliderThumbs // указываем имя превью слайдера
    },
    breakpoints: { // условия для разных размеров окна браузера
        0: { // при 0px и выше
            direction: 'horizontal', // горизонтальная прокрутка
        },
        768: { // при 768px и выше
            direction: 'vertical', // вертикальная прокрутка
        }
    }
});

