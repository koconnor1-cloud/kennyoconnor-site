const ORGANIZING_SITE = 'https://sage-stagehomeorganization.com/';

// Professional Organizing is handled through Megan's existing Sage & Stage business site.
document.querySelectorAll('a[href="organizing.html"], a[href="#organizing"]').forEach(link => {
  link.href = ORGANIZING_SITE;
});

const toggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
    });
  });
}
