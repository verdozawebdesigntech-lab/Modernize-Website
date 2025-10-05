document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');
  if (!toggle || !nav) return;

  const DESKTOP_BREAKPOINT = 860;

  function openNav() {
    nav.classList.add('open');
    nav.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeNav() {
    nav.classList.remove('open');
    nav.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    if (nav.classList.contains('open')) closeNav(); else openNav();
  });

  // Close when clicking outside
  document.addEventListener('click', function (e) {
    if (!nav.classList.contains('open')) return;
    const inside = nav.contains(e.target) || toggle.contains(e.target);
    if (!inside) closeNav();
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('open')) closeNav();
  });

  // Close when a link is clicked on mobile
  nav.addEventListener('click', function (e) {
    const target = e.target;
    if (target.tagName === 'A' && window.innerWidth <= DESKTOP_BREAKPOINT) closeNav();
  });

  // Reset on resize to desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > DESKTOP_BREAKPOINT && nav.classList.contains('open')) {
      closeNav();
    }
  });
});
