document.addEventListener('DOMContentLoaded', () => {
  // find every .slides-container on the page
  document.querySelectorAll('.slides-container').forEach(container => {
    const btnContainer = container.nextElementSibling;
    const prevBtn = btnContainer ? btnContainer.querySelector('.prev-btn') : null;
    const nextBtn = btnContainer ? btnContainer.querySelector('.next-btn') : null;

    const slideWidth = () => container.getBoundingClientRect().width;

    if (nextBtn) {
      nextBtn.addEventListener('click', () =>
        container.scrollBy({ left: slideWidth(), behavior: 'smooth' })
      );
    }
    if (prevBtn) {
      prevBtn.addEventListener('click', () =>
        container.scrollBy({ left: -slideWidth(), behavior: 'smooth' })
      );
    }
  });
});
