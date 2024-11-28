// Select all grid items with the class "uxui"
const gridItems = document.querySelectorAll('.uxui');

// Add click event listeners to each grid item
gridItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Scroll smoothly to the clicked grid item's corresponding section
        document.getElementById(`uxui${index + 1}`).scrollIntoView({
            behavior: 'smooth', // Smooth scrolling
            block: 'start',    // Center the grid item in the viewport
        });
    });
});
