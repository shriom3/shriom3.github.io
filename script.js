// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Text Animation on the Home Page
window.addEventListener('load', () => {
  const animatedText = document.querySelector('.animated-text');
  animatedText.classList.add('slide-in');
});

// Adding Class for Animation
document.addEventListener('DOMContentLoaded', () => {
  const sectionHeaders = document.querySelectorAll('h2');
  sectionHeaders.forEach(header => {
    header.classList.add('fade-in');
  });
});
