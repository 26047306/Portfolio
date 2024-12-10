// JavaScript for the portfolio website

// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
  
      // Get the target section ID
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
  
      // Scroll to the target section
      window.scrollTo({
        top: targetSection.offsetTop - 50, // Adjust for sticky navbar height
        behavior: 'smooth'
      });
    });
  });
  
  // Responsive Navbar Toggle (For Mobile Screens)
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelector('.nav-links');
  const menuToggle = document.createElement('div'); // Create a menu toggle icon
  
  menuToggle.classList.add('menu-toggle');
  menuToggle.innerHTML = '☰'; // Simple hamburger menu icon
  navbar.insertBefore(menuToggle, navLinks); // Add toggle icon to navbar
  
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-open'); // Toggle open class for links
  });
  
  // Close navbar menu on link click (for mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('nav-open')) {
        navLinks.classList.remove('nav-open');
      }
    });
  });
  
  // Scroll Animation on Section Appear
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
        }
      });
    },
    { threshold: 0.2 } // Trigger animation when 20% of the section is visible
  );
  
  // Apply observer to each section
  sections.forEach(section => {
    observer.observe(section);
  });
  