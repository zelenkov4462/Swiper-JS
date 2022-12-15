const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    lazy: true,
    // breakpoints: {
    //     '@0.00': {
    //         slidesPerView: 1,
    //     },
    //     '@0.50': {
    //         slidesPerView: 2,
    //     },
    //     '@1.00': {
    //         slidesPerView: 4,
    //     },
    // }
})