let checkbox = document.querySelector("#dark-mode-checkbox");
let body = document.body;
const dark = "dark-mode-body", light = "light-mode-body";

checkbox.addEventListener('change', () => {
    body.classList.toggle(dark);
    body.classList.toggle(light);
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // dark mode preference
    checkbox.checked = true;
    body.classList.toggle(dark);
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    checkbox.checked = false;
    body.classList.toggle(light);
}
