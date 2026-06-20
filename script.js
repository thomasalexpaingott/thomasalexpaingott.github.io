// Reveal each stop as it scrolls into view
const stops = document.querySelectorAll('.stop');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
  );

  stops.forEach((stop) => observer.observe(stop));
} else {
  // Fallback for older browsers: just show everything
  stops.forEach((stop) => stop.classList.add('in-view'));
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
