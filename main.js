const checkboxes = document.querySelectorAll('input[name="gradient"]');
const gradientStops = document.querySelectorAll('#dynamic-gradient stop');

// Define color combinations
const gradients = {
    "pink-blue": ["pink", "blue"],
    "green-yellow": ["green", "yellow"],
    "purple-orange": ["purple", "orange"]
};

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        // Uncheck other checkboxes
        checkboxes.forEach(cb => cb !== checkbox && (cb.checked = false));

        // Update the gradient colors
        if (checkbox.checked) {
            const colors = gradients[checkbox.value];
            gradientStops[0].style.stopColor = colors[0];
            gradientStops[1].style.stopColor = colors[1];
        }
    });
});
