const buttonsContainer = document.getElementById('work-list');
const sortableButtons = document.querySelectorAll('.workTitle');
const sortButton = document.getElementById('sort-accending');
const resetButton = document.getElementById('reset-order');
const originalOrder = Array.from(sortableButtons);

sortButton.addEventListener('click', () => {
// sortButton.addEventListener('onmouseover', () => {
    const sortedButtons = Array.from(sortableButtons).sort((a, b) =>
        a.textContent.localeCompare(b.textContent)
    );
    
    sortedButtons.forEach((button, index) => {
        buttonsContainer.appendChild(button);
    });
});

resetButton.addEventListener('click', () => {
// resetButton.addEventListener('onmouseover', () => {
    originalOrder.forEach((button, index) => {
        buttonsContainer.appendChild(button);
    });
});
