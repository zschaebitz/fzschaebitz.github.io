// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.navbar__toggle');
  const menu = document.querySelector('.navbar__menu');
  
  if (toggle && menu) {
    toggle.addEventListener('click', function() {
      const isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen);
      
      // Animate hamburger to X
      toggle.classList.toggle('is-active');
      
      // Prevent body scroll when menu is open
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    
    // Close menu when clicking a link
    const links = menu.querySelectorAll('.navbar__link');
    links.forEach(link => {
      link.addEventListener('click', function() {
        menu.classList.remove('is-open');
        toggle.classList.remove('is-active');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!menu.contains(e.target) && !toggle.contains(e.target) && menu.classList.contains('is-open')) {
        menu.classList.remove('is-open');
        toggle.classList.remove('is-active');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }
});

// Smooth scroll for anchor links (optional enhancement)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
