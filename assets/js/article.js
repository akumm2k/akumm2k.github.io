document.querySelectorAll('pre code').forEach((el) => {
    hljs.highlightElement(el);
});
// Move meta info (date and author) directly under the first heading
window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const heading = container?.querySelector('h1');
    const dateEl = document.getElementById('date');
    const authorEl = document.getElementById('author-top');
    if (container && heading && dateEl && authorEl) {
        const metaWrap = document.createElement('div');
        metaWrap.className = 'post-meta';
        metaWrap.appendChild(dateEl);
        metaWrap.appendChild(authorEl);
        heading.insertAdjacentElement('afterend', metaWrap);
    }
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
// Update reading time on page load
window.addEventListener('load', () => {
    const readingTime = calculateReadingTime();
    const readingTimeEl = document.getElementById('reading-time');
    if (readingTimeEl) {
        readingTimeEl.textContent = readingTime + ' min read';
    }
});
// Scroll progress bar
const PROGRESS_BAR = document.getElementById('scroll-progress');
if (PROGRESS_BAR) {
    window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / scrollHeight) * 100;
        PROGRESS_BAR.style.width = scrolled + '%';
    });
}
export {};
//# sourceMappingURL=article.js.map