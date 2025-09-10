let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Skills animation
function animateSkills() {
  const skillBars = document.querySelectorAll('.skill-progress');
  
  skillBars.forEach(bar => {
    const width = bar.getAttribute('data-width');
    bar.style.width = width;
  });
}

// Intersection Observer for skills animation
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkills();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  observer.observe(skillsSection);
}

// Form submission
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name') || this.querySelector('input[type="text"]').value;
    const email = formData.get('email') || this.querySelector('input[type="email"]').value;
    const subject = formData.get('subject') || this.querySelectorAll('input[type="text"]')[1].value;
    const message = formData.get('message') || this.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !email || !subject || !message) {
      alert('Please fill in all fields');
      return;
    }
    
    // Simulate form submission
    const submitBtn = this.querySelector('.send-btn');
    const originalText = submitBtn.value;
    submitBtn.value = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      this.reset();
      submitBtn.value = originalText;
      submitBtn.disabled = false;
    }, 2000);
  });
}

// ScrollReveal animations
if (typeof ScrollReveal !== 'undefined') {
  const sr = ScrollReveal({
    distance: "60px",
    duration: 2500,
    reset: true,
  });

  sr.reveal(".home-text", { delay: 200, origin: "top" });
  sr.reveal(".home-img", { delay: 400, origin: "top" });
  sr.reveal(".about, .services, .projects, .skills, .contact, .footer", {
    delay: 200,
    origin: "top",
  });
  
  sr.reveal(".row", { delay: 100, origin: "bottom", interval: 200 });
  sr.reveal(".project-card", { delay: 100, origin: "bottom", interval: 200 });
  sr.reveal(".contact-item", { delay: 100, origin: "left", interval: 200 });
}
