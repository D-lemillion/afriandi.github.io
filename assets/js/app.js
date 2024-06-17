document.addEventListener("DOMContentLoaded", function() {
    var loader = document.getElementById("loaderContainer");

    // Mengatur waktu loading 6 detik sebelum menyembunyikan elemen loading
    setTimeout(function() {
        loader.style.display = "none";
    }, 6000); // 6000 milidetik = 6 detik

    // Step 1: Get DOM
    let nextDom = document.getElementById('next');
    let prevDom = document.getElementById('prev');

    let carouselDom = document.querySelector('.carousel');
    let SliderDom = carouselDom.querySelector('.carousel .list');
    let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

    let timeRunning = 200;
    let timeAutoNext = 100000;

    // Event listener untuk tombol next
    nextDom.onclick = function() {
        showSlider('next');    
    };

    // Event listener untuk tombol prev
    prevDom.onclick = function() {
        showSlider('prev');    
    };

    // Event listener untuk setiap thumbnail item
    thumbnailItemsDom.forEach((item, index) => {
        item.addEventListener('click', function() {
            showSlider(index); // Menampilkan slide sesuai dengan indeks gambar yang diklik
        });
    });

    let runTimeOut;
    let runNextAuto = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);

    function showSlider(param) {
        let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
        let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

        if (typeof param === 'number') {
            // Jika parameter adalah angka, geser ke slide yang sesuai dengan indeks tersebut
            let currentIndex = getCurrentIndex();
            let targetIndex = param;

            if (targetIndex > currentIndex) {
                for (let i = 0; i < targetIndex - currentIndex; i++) {
                    SliderDom.appendChild(SliderItemsDom[0]);
                    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
                }
                carouselDom.classList.add('next');
            } else if (targetIndex < currentIndex) {
                for (let i = 0; i < currentIndex - targetIndex; i++) {
                    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
                    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
                }
                carouselDom.classList.add('prev');
            }
        } else if (param === 'next') {
            SliderDom.appendChild(SliderItemsDom[0]);
            thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
            carouselDom.classList.add('next');
        } else if (param === 'prev') {
            SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
            thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
            carouselDom.classList.add('prev');
        }

        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
            carouselDom.classList.remove('next');
            carouselDom.classList.remove('prev');
        }, timeRunning);

        clearTimeout(runNextAuto);
        runNextAuto = setTimeout(() => {
            nextDom.click();
        }, timeAutoNext);
    }

    function getCurrentIndex() {
        let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
        let currentSlide = Array.from(SliderItemsDom).findIndex(item => item.parentElement === SliderDom);
        return currentSlide;
    }

    // Live chat script
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function() {
        var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/666d48a49a809f19fb3e11f6/1i0de7gqo';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
    })();
});
