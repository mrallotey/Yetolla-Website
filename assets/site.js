// Remove ChatGPT share-attribution from the visible address without reloading or losing the section anchor.
try {
  const cleanUrl = new URL(window.location.href);
  if (cleanUrl.searchParams.get('utm_source') === 'chatgpt.com') {
    cleanUrl.searchParams.delete('utm_source');
    window.history.replaceState(window.history.state, '', cleanUrl.pathname + cleanUrl.search + cleanUrl.hash);
  }
} catch (error) {
  // URL cleanup is non-critical; keep the website usable if the browser blocks it.
}

const menu=document.querySelector('.menu'),nav=document.querySelector('.nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'×':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();
document.querySelectorAll('[data-service]').forEach(a=>a.addEventListener('click',()=>{const s=document.querySelector('[name=service]');const value=a.dataset.service;if(value==='Fashion')s.value='Fashion / Bridal';else if(value==='Catering')s.value='Catering';else if(value==='Events')s.value='Events / Wedding planning';else if(value==='Academy admission')s.value='Academy admission'}));
document.getElementById('enquiry').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.target);const msg=['Hello Yetolla, I would like to make an enquiry.','Name: '+d.get('name'),'Phone: '+d.get('phone'),'Email: '+(d.get('email')||'Not provided'),'Service: '+d.get('service'),'Message: '+(d.get('message')||'Not provided')].join('\n');window.open('https://wa.me/233505074255?text='+encodeURIComponent(msg),'_blank','noopener');});
