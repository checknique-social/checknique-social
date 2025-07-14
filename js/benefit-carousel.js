  document.addEventListener('DOMContentLoaded', () => {
    const cards = Array.from(document.querySelectorAll('.benefits-section > div'));
    const prev = document.querySelector('.prev-btn-2');
    const next = document.querySelector('.next-btn-2');
    let current = 0;

    function showCard(idx) {
      cards.forEach((c, i) => c.classList.toggle('active', i === idx));
    }

    // initialize
    showCard(current);

    prev.addEventListener('click', () => {
      current = (current - 1 + cards.length) % cards.length;
      showCard(current);
    });

    next.addEventListener('click', () => {
      current = (current + 1) % cards.length;
      showCard(current);
    });
  });

