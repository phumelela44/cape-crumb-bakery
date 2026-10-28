// Hamburger
const ham = document.querySelector('.hamburger');
const nav = document.getElementById('navMenu');
if(ham){ ham.addEventListener('click', ()=> nav.classList.toggle('active')); }

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
document.querySelectorAll('.gallery-img').forEach(img=>{
  img.addEventListener('click', ()=>{
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
  });
});
if(lightbox){ lightbox.addEventListener('click', ()=> lightbox.classList.remove('active')); }

// Form
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('Thank you! Message sent.');
    form.reset();
  });
}
