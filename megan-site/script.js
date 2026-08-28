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

// Megan Nicole Harden brand mark
const logoPath = 'assets/Megan_Nicole_Harden_MNH_Logo.svg';

const brandStyle = document.createElement('style');
brandStyle.textContent = `
  .brand{display:flex;align-items:center;justify-content:flex-start;flex:0 0 auto;line-height:1}
  .brand-logo{display:block;width:178px;height:auto;max-height:68px;object-fit:contain;object-position:left center}
  .footer-logo{display:block;width:210px;height:auto;max-height:82px;object-fit:contain;object-position:left center;filter:brightness(0) invert(1);opacity:.88}
  @media(max-width:640px){
    .brand-logo{width:158px;max-height:60px}
    .footer-logo{width:190px}
  }
`;
document.head.appendChild(brandStyle);

const brand = document.querySelector('.brand');
if (brand) {
  const logo = document.createElement('img');
  logo.src = logoPath;
  logo.alt = 'Megan Nicole Harden';
  logo.className = 'brand-logo';
  logo.decoding = 'async';
  brand.replaceChildren(logo);
}

const footerBrand = document.querySelector('.footer-brand');
if (footerBrand) {
  const footerLogo = document.createElement('img');
  footerLogo.src = logoPath;
  footerLogo.alt = 'Megan Nicole Harden';
  footerLogo.className = 'footer-logo';
  footerLogo.loading = 'lazy';
  footerLogo.decoding = 'async';
  footerBrand.replaceWith(footerLogo);
}
