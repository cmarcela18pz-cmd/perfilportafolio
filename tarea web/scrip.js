const filterButtons = document.querySelectorAll('.filter-button');
const galleryCards = document.querySelectorAll('.gallery-card');

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const selectedFilter = button.dataset.filter;

        filterButtons.forEach((item) => item.classList.remove('is-active'));
        button.classList.add('is-active');

        galleryCards.forEach((card) => {
            const isVisible = selectedFilter === 'todos' || card.dataset.category === selectedFilter;
            card.hidden = !isVisible;
        });
    });
});

const currentYear = document.querySelector('#current-year');
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}