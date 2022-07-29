new Swiper('.clients-slider', {
	// стрелки
	navigation: {
		// nextEl: '.swiper-button-next',
		// prevEl: '.swiper-button-prev'
	},
	// пагинация
	pagination: {
		el: '.swiper-pagination',
		// буллеты
		clickable: true,
		// динамические буллеты
		dynamicBullets: true,
	},
	// упр... клавиатурой
	keyboard: {
		enabled: false,
		onlyInViewport: true,
		pageUpDown: false,
	},
	// мышь
	mousewheel: {
		sensitivity: 1,
		eventsTarget: '.column-slider',
	},
	// автовысота
	autoHeight: true,
	// кол.слайдов для показа
	slidesPerView: 4,
	// отступ между слайдами
	spaceBetween: 30,
	// автонастройка
	autoplay: {
		delay: 1800,
		// stopOnLastSlide: false,
		disableOnInteraction: true,
	},
	// скорость
	speed: 800,
	// effect: 'cube',
	// cubeEffect: {
	//     slideShadows: true,
	//     shadow: true,
	//     shadowOffset: 20,
	//     shadowScale: 0.94,
	// }
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		420: {
			slidesPerView: 2,
		},
		544: {
			slidesPerView: 3,
		},
		767: {
			slidesPerView: 4,
		},
		992: {
			// slidesPerView: 3,
		},
	}
});

// ==================================================================




// ====================================================================

document.querySelector('.menu-btn').addEventListener
	('click', () => document.querySelector('.header__nav')
		.classList.toggle('show'));

document.querySelector('.header__nav-close').addEventListener
	('click', () => document.querySelector('.header__nav')
		.classList.toggle('show'));



// ====================================================================
// header effect
// $(document).ready(function () {
//     $(window).scroll(function () {
//         var scroll = $(window).scrollTop();
//         if (scroll > 100) {
//             $(".header").css("background", "#212121");
//             $(".header").css("color", "#fff");
//         }
//         else {
//             $(".header").css("background", "none");
//             $(".header").css("color", "inherit");
//         }
//     })
// })


$(document).ready(function () {
	$(window).scroll(function () {
		if ($(window).scrollTop() > $(window).height()) {
			$(".header").css({ "background-color": "#39b54a", "transition": "0.2s" });
		}
		else {
			$(".header").css({ "background-color": "transparent" });
		}

	})
})


function setScrollIntoView(top) {
	selected.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
const selected = document.querySelector('.about');
const arrowDown = document.querySelector('.fa-chevron-down');
arrowDown.addEventListener('click', function (e) {
	e.preventDefault();
	setScrollIntoView(true);
})