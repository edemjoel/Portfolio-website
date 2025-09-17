/* ---------------- TOGGLE ICON NAVBAR ---------------- */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/* ---------------- SCROLL SECTIONS ACTIVE LINK ---------------- */
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach(link => {
        link.classList.remove('active');
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });

  /* ----------- STICKY NAVBAR ------------ */
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  /* ----- REMOVE TOGGLE ICON & NAVBAR WHEN CLICK NAV LINK ------- */
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

/* ---------------- SCROLL REVEAL ---------------- */
ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal(
  '.home-img, .services-container, .portfolio-box, .contact form',
  { origin: 'bottom' }
);
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* ---------------- TYPED JS ---------------- */
let typed = new Typed('.typing', {
  strings: ['Frontend Developer', 'UI Enthusiast', 'Problem Solver'],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

/* ---------------- THEME TOGGLE ---------------- */
let themeToggle = document.querySelector('#theme-toggle');
themeToggle.onclick = () => {
  document.body.classList.toggle('light-theme');
};
