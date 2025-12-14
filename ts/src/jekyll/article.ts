// Declare hljs as a global variable (loaded from CDN)
// Syntax highlighting (hljs is loaded from CDN in layout)
declare const hljs: any;
document.querySelectorAll('pre code').forEach((el) => {
  hljs.highlightElement(el as HTMLElement);
});

const READING_WPM = 200;
function calculateReadingTime(): number {
  const container = document.querySelector('.container');
  if (!container) return 0;
  const text = (container as HTMLElement).innerText;
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
const PROGRESS_BAR: HTMLElement | null =
  document.getElementById('scroll-progress');

if (PROGRESS_BAR) {
  window.addEventListener('scroll', () => {
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    PROGRESS_BAR.style.width = scrolled + '%';
  });
}
