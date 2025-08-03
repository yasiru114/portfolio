
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');


  mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });


  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });


  document.addEventListener('click', (e) => {
    if (!mobileMenuBtn.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('active');
    }
  });


  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
      navbar.style.background = 'rgba(26, 26, 26, 0.98)';
      navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
      navbar.style.background = 'rgba(26, 26, 26, 0.95)';
      navbar.style.boxShadow = 'none';
    }
  });


  const heroImage = document.querySelector('.hero-image');
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.3;
    heroImage.style.transform = `translateY(${rate}px)`;
    
  });
});
