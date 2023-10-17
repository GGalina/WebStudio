(() => {
    const refs = {
    filterButtons: document.querySelectorAll('.filter-list__btn'),
    projectItems: document.querySelectorAll('.project-list__item'),
    };

    refs.filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            refs.projectItems.forEach((item) => {
                if (category === 'all' || item.classList.contains(category)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
})();