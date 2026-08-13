const toggle=document.querySelector('[data-menu-toggle]');
const nav=document.querySelector('[data-nav]');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));document.body.classList.toggle('menu-open',open);});}
const reveals=document.querySelectorAll('[data-reveal]');
if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.12});reveals.forEach(el=>io.observe(el));}else{reveals.forEach(el=>el.classList.add('is-visible'));}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
document.querySelectorAll('[data-print]').forEach(btn=>btn.addEventListener('click',()=>window.print()));
const toast=document.querySelector('[data-toast]');
function showToast(text){if(!toast)return;toast.textContent=text;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1800);}
document.querySelectorAll('[data-copy-email]').forEach(btn=>btn.addEventListener('click',async()=>{try{await navigator.clipboard.writeText('koconnor1@uwf.edu');showToast('Email address copied');}catch(e){location.href='mailto:koconnor1@uwf.edu';}}));
const form=document.getElementById('contactForm');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const subject=encodeURIComponent(d.get('subject')||'Website inquiry');const body=encodeURIComponent(`Name: ${d.get('name')||''}\nEmail: ${d.get('email')||''}\n\n${d.get('message')||''}`);window.location.href=`mailto:koconnor1@uwf.edu?subject=${subject}&body=${body}`;});}
