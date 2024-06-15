// Step 1: Get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

let timeRunning = 500;
let timeAutoNext = 100000;

// Event listener untuk tombol next
nextDom.onclick = function(){
    showSlider('next');    
};

// Event listener untuk tombol prev
prevDom.onclick = function(){
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
    next.click();
}, timeAutoNext);

function showSlider(param){
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(typeof param === 'number'){
        // Jika parameter adalah angka, geser ke slide yang sesuai dengan indeks tersebut
        let currentIndex = getCurrentIndex();
        let targetIndex = param;

        if(targetIndex > currentIndex) {
            for(let i = 0; i < targetIndex - currentIndex; i++) {
                SliderDom.appendChild(SliderItemsDom[0]);
                thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
            }
            carouselDom.classList.add('next');
        } else if(targetIndex < currentIndex) {
            for(let i = 0; i < currentIndex - targetIndex; i++) {
                SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
                thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
            }
            carouselDom.classList.add('prev');
        }
    } else if(param === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else if(param === 'prev'){
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
        next.click();
    }, timeAutoNext);
}

function getCurrentIndex() {
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let currentSlide = Array.from(SliderItemsDom).findIndex(item => item.parentElement === SliderDom);
    return currentSlide;
}

var loader = document.getElementById("loading");
window.addEventListener("load", function() {
    // Sembunyikan elemen loading setelah halaman dimuat
    loader.style.display = "none";
});
