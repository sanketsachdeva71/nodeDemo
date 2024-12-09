let currentIndex = 0;

function moveCarousel(direction) {
  const track = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  } else if (currentIndex >= totalItems) {
    currentIndex = 0;
  }

  const itemWidth = items[0].getBoundingClientRect().width;
  track.style.transform = 'translateX(' + (-itemWidth * currentIndex) + 'px)';
}
