// document.addEventListener('DOMContentLoaded', function() {
document.addEventListener('DOMContentLoaded', function () {
    // document.addEventListener('scroll', function () {
    //     var scrollPosition = window.scrollY; // Используем scrollY для вертикальной прокрутки
    //     const greyTriangles = document.querySelector('.grey-triangles');
    //
    //     if (greyTriangles) {
    //         // Рассчитываем новые значения для трансформации
    //         const scroll = scrollPosition / window.innerHeight;
    //         const translateX = Math.max(-180, -180 * scroll) + "%"; // Перемещаем на -180% по оси X при полной прокрутке
    //         console.log(translateX)
    //         const newScale = Math.min(4, 1 + 2 * scroll); // Увеличиваем масштаб от 1 до 4
    //
    //         // Применяем новые значения к стилям элемента
    //         greyTriangles.style.transform = `translate(-50%, -${translateX}) scale(${newScale}) translate3d(0px, 0px, 0px)`;
    //         greyTriangles.style.transition = 'transform 0.3s ease-out 0s';
    //     }
    // });




    window.addEventListener('scroll', function () {
        var scrollingTexts = document.querySelector('.main_content');

        var scrollPosition = window.scrollY;
        var windowHeight = window.innerHeight;
        var scrollPercentage = Math.min(scrollPosition / windowHeight, 1);
        scrollingTexts.style.transform = 'translateX(' + (-scrollPercentage * 100) + '%)';
    });

});
// Mobile navigation
document.addEventListener("DOMContentLoaded", function () {
    var body = document.body;
    var burgerMenu = document.querySelector(".b-menu");
    var burgerContain = document.querySelector(".b-container");
    var mainMenu = document.querySelector('.mainMenu');
    var mainHeader = document.querySelector('.main-header-area');
    let headerLogo = document.getElementById('header_logo_mobile');

    burgerMenu.addEventListener("click", function () {
        [body, burgerContain, mainMenu].forEach(function (el) {
            el.classList.toggle("open");
        });

        if (mainMenu.classList.contains("open")) {
            mainHeader.style.display = 'none';
        } else {
            mainHeader.style.display = 'block';
        }
    });
});

// var swiper = new Swiper(".mySwiper", {
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });
//
// var swiper_our_works = new Swiper(".mySwiper_our_works", {
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });

// Инициализация превью слайдера
const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', { // ищем слайдер превью по селектору
    // задаем параметры
    direction: 'vertical', // вертикальная прокрутка
    slidesPerView: 4, // показывать по 4 превью
    spaceBetween: 23, // расстояние между слайдами
    navigation: { // задаем кнопки навигации
        nextEl: '.slider__next', // кнопка Next
        prevEl: '.slider__prev' // кнопка Prev
    },
    freeMode: true, // при перетаскивании превью ведет себя как при скролле
    breakpoints: { // условия для разных размеров окна браузера
        0: { // при 0px и выше
            direction: 'vertical', // горизонтальная прокрутка
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
            direction: 'vertical', // горизонтальная прокрутка
        },
        768: { // при 768px и выше
            direction: 'vertical', // вертикальная прокрутка
        }
    }
});


