
document.addEventListener('DOMContentLoaded', (event) => {
    const dropMenu = document.getElementById('dropMenu');
    const clickMenu = document.getElementById('clickMenu');

    document.addEventListener('click', (event) => {
        if (clickMenu.contains(event.target)) {
            dropMenu.classList.toggle('hidden');
            dropMenu.classList.toggle('dropMenu');
        } else {
            if (!dropMenu.classList.contains('hidden')) {
                dropMenu.classList.add('hidden');
            }
        }
    });
});

var swiper = new Swiper(".slSwiper", {
    slidesPerView: 4.75,
    spaceBetween: 30,

    navigation: {
        nextEl: ".Next",
        prevEl: ".prev",
    },

});
var swiper = new Swiper(".docterSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,

    navigation: {
        nextEl: ".docterNext",
        prevEl: ".docterPrev",
    },

});
var swiper = new Swiper(".feebackSwiper", {
    slidesPerView: 3.25,
    spaceBetween: 30,

    navigation: {
        nextEl: ".feebackNext",
        prevEl: ".feebackPrev",
    },

});