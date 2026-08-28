const ORGANIZING_SITE = 'https://sage-stagehomeorganization.com/';
const BRAND_LOGO = 'https://raw.githubusercontent.com/koconnor1-cloud/kennyoconnor-site/bcd519b1663b58cc54de45494c9978247f1584b5/megan-site/assets/Megan_Nicole_Harden_MNH_Logo.svg';

// Professional Organizing lives on Megan's established Sage & Stage business site.
document.querySelectorAll('a[href="organizing.html"], a[href="#organizing"]').forEach(link => {
  link.href = ORGANIZING_SITE;
  link.target = '_blank';
  link.rel = 'noopener';
});

// Carry the approved Megan Nicole Harden branding through the interior pages.
if (!document.body.classList.contains('mockup-home')) {
  if (!document.querySelector('link[href="mockup-v3.css"]')) {
    const brandStyles = document.createElement('link');
    brandStyles.rel = 'stylesheet';
    brandStyles.href = 'mockup-v3.css';
    document.head.appendChild(brandStyles);
  }

  const brand = document.querySelector('.brand');
  if (brand) {
    const logo = document.createElement('img');
    logo.src = BRAND_LOGO;
    logo.alt = 'Megan Nicole Harden';
    logo.className = 'brand-logo-v3';
    brand.replaceChildren(logo);
  }
}

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
