const buttons = document.querySelectorAll('button[data-gradient]');
const gradientStops = document.querySelectorAll('#dynamic-gradient stop');

// それぞれのボタンに色を設定しておく
const gradients = {
    "pink-blue": ["pink", "blue"],
    "green-yellow": ["green", "yellow"],
    "purple-orange": ["purple", "orange"]
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // ボタンに設定されたデータ属性に基づいて色を変更
        const gradientKey = button.getAttribute('data-gradient');
        const colors = gradients[gradientKey];
        gradientStops[0].style.stopColor = colors[0];
        gradientStops[1].style.stopColor = colors[1];
    });
});
