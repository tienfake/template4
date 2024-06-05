
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
            slidesPerView: 3.5,
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
    slidesPerView: 3.5,
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
            slidesPerView: 3.5,
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
var swiper = new Swiper(".tableSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });