document.addEventListener("DOMContentLoaded", () => {
  // Current year
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Hamburger menu
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");
  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  // Lightbox
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const galleryImages = document.querySelectorAll(".gallery-img");
  
  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.style.display = "flex";
    });
  });
  
  if (lightbox) {
    lightbox.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  }

  // Contact Form Validation
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      if (!name || !email || !message) {
        alert("Please fill all fields");
        return;
      }
      alert("Thank you! Message sent.");
      form.reset();
    });
  }
});
