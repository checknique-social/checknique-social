document.addEventListener('DOMContentLoaded', () => {
  // find every .slides-container on the page
  document.querySelectorAll('.slides-container').forEach(container => {
    const prevBtn = container.nextElementSibling.querySelector('.prev-btn');
    const nextBtn = container.nextElementSibling.querySelector('.next-btn');

    const slideWidth = () => container.getBoundingClientRect().width;

    nextBtn.addEventListener('click', () =>
      container.scrollBy({ left: slideWidth(), behavior: 'smooth' })
    );
    prevBtn.addEventListener('click', () =>
      container.scrollBy({ left: -slideWidth(), behavior: 'smooth' })
    );
  });
});
