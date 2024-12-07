// script.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleDarkMode = document.createElement('button');
    toggleDarkMode.textContent = 'Toggle Dark Mode';
    toggleDarkMode.style.position = 'fixed';
    toggleDarkMode.style.bottom = '10px';
    toggleDarkMode.style.right = '10px';
    document.body.appendChild(toggleDarkMode);

    toggleDarkMode.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});

/* Add dark-mode styles in CSS */
