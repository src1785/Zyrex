// 1. Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

if(menuToggle){
    menuToggle.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });
}

// 2. Auto Slider Logic
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    if(slides.length > 0) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
}
// Change slide every 4 seconds
setInterval(nextSlide, 4000);

// 3. Popup Logic (Auto trigger after 5 seconds OR manual open)
const popup = document.getElementById('infoPopup');
const closeBtn = document.querySelector('.close-popup');

function openPopup() {
    if(popup) popup.style.display = 'flex';
}

function closePopup() {
    if(popup) popup.style.display = 'none';
}

if(closeBtn) closeBtn.addEventListener('click', closePopup);

// Open popup automatically 5 seconds after page load
setTimeout(openPopup, 5000);
// 4. Gallery Filter Logic
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

if(filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if(filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.classList.remove('hide');
                    item.classList.add('show');
                } else {
                    item.classList.add('hide');
                    item.classList.remove('show');
                }
            });
        });
    });
}