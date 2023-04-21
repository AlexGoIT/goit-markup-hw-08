const filter = document.querySelector('.filter-items');
const portfolioCards = document.querySelectorAll('.portfolio-card-item');

filter.addEventListener('click', e => {
  const value = e.target.textContent.toLowerCase();

  portfolioCards.forEach(item => {
    const descript = item.querySelector('.card-descript');

    if (descript.textContent.toLowerCase().includes(value) || value === 'all') {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
});
