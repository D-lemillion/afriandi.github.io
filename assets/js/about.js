const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
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

showSlide(currentIndex);
