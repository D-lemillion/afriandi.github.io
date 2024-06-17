document.addEventListener("DOMContentLoaded", function () {
  // Navbar Toggle
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav__links");

  menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // Smooth scrolling
  const scrollLinks = document.querySelectorAll('.nav__links a[href^="#"]');

  scrollLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: 'smooth'
      });

      // Close the navigation menu on link click (for mobile)
      navLinks.classList.remove("active");
    });
  });

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

  // Initial show
  showSlide(currentIndex);

  // Hero content animation
  const heroContent = document.querySelector('.hero__content');
  setTimeout(function () {
    heroContent.classList.add('show');
  }, 500); // Delay animation for effect on page load

  // Back to top button
  const backToTopButton = document.querySelector('.back-to-top');
  document.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });

  // Smooth scrolling for back to top button
  backToTopButton.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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