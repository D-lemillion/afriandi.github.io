const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;

function showSlide(index) {
  // Hide all slides
  slides.forEach(slide => slide.style.transform = `translateX(-${index * 100}%)`);

  // Update indicators
  indicators.forEach(indicator => indicator.classList.remove('active'));
  indicators[index].classList.add('active');
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto slide
setInterval(nextSlide, 5000); // Change slide every 5 seconds
