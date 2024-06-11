
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

document.querySelectorAll('.input-container').forEach(container => {
    const input = container.querySelector('input');
    const label = container.querySelector('label');

    input.addEventListener('focus', () => {
        container.classList.add('focused');
    });

    input.addEventListener('blur', () => {
        if (input.value === '') {
            container.classList.remove('focused');
        }
    });

    if (input.value !== '') {
        container.classList.add('focused');
    }
});


var swiper = new Swiper(".slSwiper", {
    slidesPerView: 4.5,
    spaceBetween: 30,

    navigation: {
        nextEl: ".Next",
        prevEl: ".prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2.25,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 4.5,
            spaceBetween: 30,
        }
    }
});
var swiper = new Swiper(".docterSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,

    navigation: {
        nextEl: ".docterNext",
        prevEl: ".docterPrev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        }
       
    }

});
var swiper = new Swiper(".feebackSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,

    navigation: {
        nextEl: ".feebackNext",
        prevEl: ".feebackPrev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }

});
//
function initializeToggle(titleSelector, imgSrcPlus, imgSrcMinus) {
    const titles = document.querySelectorAll(titleSelector);
    titles.forEach(title => {
        title.addEventListener('click', () => {
            const container = title.closest('.toggle-container');
            const content = container.querySelector('.content');
            const img = container.querySelector('.iconPlus img');

            content.classList.toggle('hidden');

            if (content.classList.contains('hidden')) {
                img.src = imgSrcPlus;
            } else {
                img.src = imgSrcMinus;
            }
        });
    });
}
initializeToggle('.title', '../public/img/plus.png', '../public/img/tru.png');

///////////////////////////////////////////////

const buttons = document.querySelectorAll('button');
const slides = document.getElementById('slides').children;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const slideIndex = button.dataset.slide;
        Array.from(slides).forEach(slide => {
            slide.classList.add('hidden');
        });
        const selectedSlide = document.querySelector(`.slide[data-slide="${slideIndex}"]`);
        selectedSlide.classList.remove('hidden');
    });
});

