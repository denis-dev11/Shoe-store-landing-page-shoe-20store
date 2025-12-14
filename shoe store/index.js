// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeBtn');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});


// ===== CAROUSEL SCROLL (BUTTONS) =====
const leftArrow = document.getElementById('left');
const rightArrow = document.getElementById('right');
const carousel = document.querySelector('.carousel');

function getCardScrollAmount() {
  const card = carousel.querySelector('.card');
  return card.offsetWidth + 16; // card width + gap
}

rightArrow.addEventListener('click', () => {
  carousel.scrollBy({
    left: getCardScrollAmount(),
    behavior: 'smooth'
  });
});

leftArrow.addEventListener('click', () => {
  carousel.scrollBy({
    left: -getCardScrollAmount(),
    behavior: 'smooth'
  });
});


// ===== CAROUSEL SWIPE / DRAG SUPPORT =====
let isDragging = false;
let startX;
let scrollStart;

/* Mouse drag */
carousel.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX;
  scrollStart = carousel.scrollLeft;
  carousel.classList.add('dragging');
});

carousel.addEventListener('mouseup', () => {
  isDragging = false;
  carousel.classList.remove('dragging');
});

carousel.addEventListener('mouseleave', () => {
  isDragging = false;
  carousel.classList.remove('dragging');
});

carousel.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX;
  const walk = (x - startX) * 1.5;
  carousel.scrollLeft = scrollStart - walk;
});

/* Touch swipe */
carousel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].pageX;
  scrollStart = carousel.scrollLeft;
});

carousel.addEventListener('touchmove', (e) => {
  const x = e.touches[0].pageX;
  const walk = (x - startX) * 1.5;
  carousel.scrollLeft = scrollStart - walk;
});
