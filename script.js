const swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        type:  'bullets',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    slidesPerGroup: 1,
    slideToClickedSlide: true,
    centeredSlides: true
})

const slider = document.querySelector('.swiper-container').swiper;

