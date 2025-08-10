const DARK_MODE_CHECKBOX = document.querySelector('#dark-mode-checkbox');
const body = document.body;
const DARK_MODE = 'dark-mode-body', LIGHT_MODE = 'light-mode-body';
if (DARK_MODE_CHECKBOX) {
    DARK_MODE_CHECKBOX.addEventListener('change', () => {
        body.classList.toggle(DARK_MODE);
        body.classList.toggle(LIGHT_MODE);
    });
    if (window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches) {
        DARK_MODE_CHECKBOX.checked = true;
        body.classList.toggle(DARK_MODE);
    }
    if (window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: light)').matches) {
        DARK_MODE_CHECKBOX.checked = false;
        body.classList.toggle(LIGHT_MODE);
    }
}
export {};
