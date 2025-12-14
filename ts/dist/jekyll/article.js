document.querySelectorAll('pre code').forEach((el) => {
    hljs.highlightElement(el);
});
const READING_WPM = 200;
function calculateReadingTime() {
    const container = document.querySelector('.container');
    if (!container)
        return 0;
    const text = container.innerText;
    const wordCount = text.split(/\s+/).length;
    return Math.max(1, Math.ceil(wordCount / READING_WPM));
}
window.addEventListener('load', () => {
    const readingTime = calculateReadingTime();
    const readingTimeEl = document.getElementById('reading-time');
    if (readingTimeEl) {
        readingTimeEl.textContent = readingTime + ' min read';
    }
});
const PROGRESS_BAR = document.getElementById('scroll-progress');
if (PROGRESS_BAR) {
    window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / scrollHeight) * 100;
        PROGRESS_BAR.style.width = scrolled + '%';
    });
}
export {};
