const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const indicators = document.querySelectorAll('.indicator');
const heroContent = document.querySelector('.hero__content');

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transitionDelay = `${i * 0.3}s`;
    slide.style.transform = `translateX(${(i - index) * 100}%)`;
  });
  indicators.forEach((indicator, i) => {
    if (i === index) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    showSlide(index);
    currentIndex = index;
  });
});

window.addEventListener('scroll', () => {
  const slideInAt = window.scrollY + window.innerHeight - heroContent.clientHeight / 2;
  const contentBottom = heroContent.offsetTop + heroContent.clientHeight;
  const isHalfShown = slideInAt > heroContent.offsetTop;
  const isNotScrolledPast = window.scrollY < contentBottom;

  if (isHalfShown && isNotScrolledPast) {
    setTimeout(() => {
      heroContent.classList.add('show');
    }, 300);
  } else {
    heroContent.classList.remove('show');
  }
});
// script.js
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

backToTopButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
