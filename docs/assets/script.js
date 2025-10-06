// Helper
const $ = (s, o=document)=>o.querySelector(s);

// Año dinámico
const yearEl = $('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Idioma: aviso correcto
const langToggle = $('#langToggle');
if (langToggle){
  langToggle.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Más idiomas pronto.');
  });
}

// Form beta (validación + estado demo)
const betaForm = $('#betaForm');
const statusEl = $('#betaStatus');
if (betaForm){
  betaForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = $('#email').value.trim();
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      statusEl.textContent = 'Por favor, ingresa un correo válido.';
      statusEl.style.color = '#EF4444';
      return;
    }
    statusEl.textContent = '¡Listo! Te contactaremos para la beta cuando esté disponible.';
    statusEl.style.color = '#10B981';
    betaForm.reset();
  });
}

// Carrusel (prev/next + scroll)
const track = $('#carTrack');
if (track){
  const prev = document.querySelector('.car-btn.prev');
  const next = document.querySelector('.car-btn.next');
  const step = 360;
  prev.addEventListener('click', ()=> track.scrollBy({left:-step, behavior:'smooth'}));
  next.addEventListener('click', ()=> track.scrollBy({left: step, behavior:'smooth'}));
}

// Privacidad (placeholder)
const privacyLink = $('#privacyLink');
if (privacyLink){
  privacyLink.addEventListener('click', (e)=>{
    e.preventDefault();
    alert('Privacidad: encuesta anónima; registro beta en página distinta del formulario. Sin datos sensibles.');
  });
}

// Logo: si la imagen no carga, simplemente se oculta (no hay círculo)
function setupLogo(id){
  const img = $(id);
  if (!img) return;
  img.addEventListener('error', ()=>{ img.style.display='none'; });
}
setupLogo('#brandImg');
setupLogo('#brandImgFooter');

// EASTER EGG (triple clic sobre zona del logo del header)
let clicks = 0;
const brandArea = $('#brandArea');
if (brandArea){
  brandArea.addEventListener('click', ()=>{
    clicks++;
    clearTimeout(brandArea.__t);
    brandArea.__t = setTimeout(()=> clicks = 0, 650); // ventana corta
    if (clicks >= 3){
      clicks = 0;
      alert('👀 Sabemos que estás ansioso por las nuevas funcionalidades que Eligent puede traer, pero calma: aún estamos empezando. 🚀');
    }
  });
}

// Hero visual: ocúltalo si no existe
const heroVisual = $('#heroVisual');
if (heroVisual){
  heroVisual.addEventListener('error', ()=>{ heroVisual.style.display = 'none'; });
}

