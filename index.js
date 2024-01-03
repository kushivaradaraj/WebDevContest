document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const foodItems = document.querySelectorAll('.food-menu-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            foodItems.forEach(item => {
                item.classList.add('hidden');

                if (item.classList.contains('all') || item.classList.contains(filter)) {
                    item.classList.remove('hidden');
                }
            });
        });
    });
});
