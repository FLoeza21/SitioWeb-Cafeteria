// Carrusel horizontal controlado por scroll vertical
(function () {
  const carousel = document.querySelector('.hero-carousel');
  if (!carousel) return;

  const slidesContainer = carousel.querySelector('.slides');
  const slides = Array.from(slidesContainer.querySelectorAll('.slide'));
  const prevBtn = carousel.querySelector('.carousel-control.prev');
  const nextBtn = carousel.querySelector('.carousel-control.next');
  const dotsContainer = carousel.querySelector('.carousel-dots');

  let current = 0;

  function setCurrentFromScroll() {
    const width = slidesContainer.clientWidth;
    current = Math.round(slidesContainer.scrollLeft / width);
    updateDots();
  }

  function renderDots() {
    dotsContainer.innerHTML = '';
    slides.forEach((_, idx) => {
      const dot = document.createElement('button');
      if (idx === current) dot.classList.add('active');
      dot.addEventListener('click', () => goTo(idx));
      dotsContainer.appendChild(dot);
    });
  }

  function updateDots() {
    const dots = Array.from(dotsContainer.children);
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function goTo(index) {
    const width = slidesContainer.clientWidth;
    const target = Math.max(0, Math.min(slides.length - 1, index));
    slidesContainer.scrollTo({ left: target * width, behavior: 'smooth' });
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  // Convierte el scroll vertical del mouse en horizontal dentro del carrusel
  slidesContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    slidesContainer.scrollLeft += e.deltaY;
  }, { passive: false });

  // Actualiza el índice según el scroll
  slidesContainer.addEventListener('scroll', () => {
    // usa RAF para evitar cálculos excesivos
    if (slidesContainer.__ticking) return;
    slidesContainer.__ticking = true;
    requestAnimationFrame(() => {
      setCurrentFromScroll();
      slidesContainer.__ticking = false;
    });
  });

  window.addEventListener('resize', setCurrentFromScroll);
  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);

  // Init
  renderDots();
  setCurrentFromScroll();
})();


