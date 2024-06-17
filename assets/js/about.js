document.addEventListener("DOMContentLoaded", function () {
  // Navbar Toggle
  const navbarToggle = document.querySelector(".navbar__toggle");
  const navbarLinks = document.querySelector(".navbar__links");

  navbarToggle.addEventListener("click", function () {
    navbarLinks.classList.toggle("show");
  });

  // Smooth scrolling
  const scrollLinks = document.querySelectorAll('.navbar__links a[href^="#"]');
  
  scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: 'smooth'
      });
    });
  });

  // Slideshow
  const slides = document.querySelectorAll('.hero__slider img');
  const intervalTime = 5000; // Interval time in milliseconds
  let slideInterval;
  let slideIndex = 0;

  const nextSlide = () => {
    // Remove current class from all slides
    slides.forEach(slide => {
      slide.classList.remove('current');
    });

    // Increment slideIndex
    slideIndex++;

    // Check if slideIndex is out of bounds
    if (slideIndex >= slides.length) {
      slideIndex = 0; // Reset slideIndex to start
    }

    // Add current class to the next slide
    slides[slideIndex].classList.add('current');
  }

  // Auto slide
  slideInterval = setInterval(nextSlide, intervalTime);

  // Slideshow from tes.html integration
  const tesSlides = document.querySelectorAll('.slide');
  const tesPrevBtn = document.querySelector('.prev');
  const tesNextBtn = document.querySelector('.next');
  const tesIndicators = document.querySelectorAll('.indicator');

  let currentIndex = 0;

  function showSlide(index) {
    tesSlides.forEach(slide => slide.style.transform = `translateX(-${index * 100}%)`);
    tesIndicators.forEach(indicator => indicator.classList.remove('active'));
    tesIndicators[index].classList.add('active');
  }

  function nextSlideTes() {
    currentIndex = (currentIndex + 1) % tesSlides.length;
    showSlide(currentIndex);
  }

  function prevSlideTes() {
    currentIndex = (currentIndex - 1 + tesSlides.length) % tesSlides.length;
    showSlide(currentIndex);
  }

  tesNextBtn.addEventListener('click', nextSlideTes);
  tesPrevBtn.addEventListener('click', prevSlideTes);

  // Auto slide
  setInterval(nextSlideTes, 5000); // Change slide every 5 seconds
});
document.addEventListener("DOMContentLoaded", function () {
  // ...
  const heroContent = document.querySelector('.hero__content');
  setTimeout(function() {
    heroContent.classList.add('show');
  }, 500); // Delay animasi untuk efek muncul saat halaman dimuat
  // ...
});
document.addEventListener("scroll", function() {
  const backToTopButton = document.querySelector('.back-to-top');
  if (window.scrollY > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

// Smooth scrolling untuk kembali ke atas
document.querySelector('.back-to-top').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
  // JavaScript untuk menghilangkan loader setelah halaman dimuat
  document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById('loader');
    setTimeout(function () {
      loader.classList.add('loaded');
      setTimeout(function () {
        loader.style.display = 'none';
      }, 300); // Sesuaikan dengan durasi transisi CSS
    }, 1000); // Sesuaikan dengan waktu loading yang diinginkan
  });