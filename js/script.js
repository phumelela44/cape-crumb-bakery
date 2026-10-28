// Cape Crumb Bakery - Part 3 Functionality

// 1. Hamburger Menu for Mobile
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // 2. Footer Year - Dynamic Content
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 3. Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields.');
                return;
            }
            if (!email.includes('@')) {
                alert('Please enter a valid email.');
                return;
            }
            alert('Thank you ' + name + '! Your message has been sent.');
            contactForm.reset();
        });
    }

    // 4. Gallery Lightbox
    const galleryImages = document.querySelectorAll('.gallery-img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            lightbox.style.display = 'flex';
            lightboxImg.src = this.src;
        });
    });
    
    if (lightbox) {
        lightbox.addEventListener('click', function() {
            lightbox.style.display = 'none';
        });
    }
});
