/**
* Template Name: Yummy - v1.2.1
* Template URL: https://bootstrapmade.com/yummy-bootstrap-restaurant-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = document.querySelectorAll('#navbar a');

  function navbarlinksActive() {
    navbarlinks.forEach(navbarlink => {

      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY + 200;

      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navbarlinksActive);
  document.addEventListener('scroll', navbarlinksActive);

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Gallery Slider
   */
  new Swiper('.gallery-slider', {
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});


// Gallery Updates
const carouselImages = [
  {"id": 1, "href": "assets/img/gallery/hair1-copy.png"},
  {"id": 2, "href": "assets/img/gallery/hair2-copy.png"},
  {"id": 3, "href": "assets/img/gallery/hair3-copy.png"},
  {"id": 4, "href": "assets/img/gallery/hair4.png"},
  {"id": 5, "href": "assets/img/gallery/hair10.png"},
  {"id": 6, "href": "assets/img/gallery/hair000.png"},
  {"id": 7, "href": "assets/img/gallery/hair9.png"},
  {"id": 8, "href": "assets/img/gallery/hair8.png"},
  {"id": 9, "href": "assets/img/gallery/hair7.png"},
  {"id": 10, "href": "assets/img/gallery/hair0.png"},
  {"id": 11, "href": "assets/img/gallery/hair0010.png"},
  {"id": 12, "href": "assets/img/gallery/hair02.png"},
  {"id": 13, "href": "assets/img/gallery/hair03.png"},
  {"id": 14, "href": "assets/img/gallery/hair04.png"},
  {"id": 15, "href": "assets/img/gallery/hair05.png"},
  {"id": 16, "href": "assets/img/gallery/hair06.png"},
  {"id": 17, "href": "assets/img/gallery/hair07.png"},
  {"id": 18, "href": "assets/img/gallery/hair08.png"},
  {"id": 19, "href": "assets/img/gallery/hair09.png"},
  {"id": 20, "href": "assets/img/gallery/hair010.png"},
  {"id": 21, "href": "assets/img/gallery/hair011.png"},
  {"id": 22, "href": "assets/img/gallery/hair012.png"},
  {"id": 23, "href": "assets/img/gallery/hair013.png"},
  {"id": 24, "href": "assets/img/gallery/hair014.png"},
  {"id": 25, "href": "assets/img/gallery/hair015.png"},
  {"id": 26, "href": "assets/img/gallery/hair016.png"},
  {"id": 27, "href": "assets/img/gallery/hair017.png"},
  {"id": 28, "href": "assets/img/gallery/hair018.png"},
  {"id": 29, "href": "assets/img/gallery/hair019.png"},
  {"id": 30, "href": "assets/img/gallery/hair020.png"},
  {"id": 31, "href": "assets/img/gallery/hair021.png"},
  {"id": 32, "href": "assets/img/gallery/hair022.png"},
  {"id": 33, "href": "assets/img/gallery/hair023.png"},
  {"id": 34, "href": "assets/img/gallery/hair024.png"},
  {"id": 35, "href": "assets/img/gallery/hair025.png"},
  {"id": 36, "href": "assets/img/gallery/hair026.png"},
];

const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
const modalContent = document.querySelector('.modal-image');
const galleryImages = document.querySelectorAll(".gal-img");

var chosenImage = 0;
const minImage = carouselImages[0].id;
const maxImage = carouselImages[carouselImages.length-1].id;
function displayImage(imageSource) {
  if (imageSource == "increment") {
    if (chosenImage<maxImage) {
      chosenImage++;
    }
    else {
      chosenImage = minImage;
    }
  }
  else if (imageSource == "decrement") {
    if (chosenImage>minImage) {
      chosenImage--;
    } else {
      chosenImage=maxImage;
    }
  }
  else {
    // set chosen to source
    for (var imageId of carouselImages) {
      if (imageSource.split('/').pop()==imageId.href.split('/').pop()) {
        chosenImage = imageId.id;
      }
    }
  }
  // create image element from the clicked image
  const imag = document.createElement('img');
  let selectedDict = '';
  for (var imageId of carouselImages) {
    if (chosenImage==imageId.id) {
        selectedDict = imageId.href;
    }
  }
  imag.src = selectedDict;
  // clear modal
  modalContent.innerHTML = "";
  // insert image into modal
  modalContent.appendChild(imag);

  myModal.show();
}
for (const ima of galleryImages) {
  ima.addEventListener('click', function() {
    displayImage(ima.src);
  })
};
