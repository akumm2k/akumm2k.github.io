let checkbox = document.querySelector("#dark-mode-checkbox");

checkbox.addEventListener('change', () => {
    let body = document.body;
    body.classList.toggle("dark-mode-body");
    body.classList.toggle("light-mode-body");
});