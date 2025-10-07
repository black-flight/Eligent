// Helper
const $ = (s, o=document)=>o.querySelector(s);

// Año dinámico
const yearEl = $('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Idioma: aviso
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
  betaForm.addEventListener('submit', (e) => {
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

// Carrusel prev/next
const track = $('#carTrack');
if (track){
  const prev = document.querySelector('.car-btn.prev');
  const next = document.querySelector('.car-btn.next');
  const step = 420; // un poco más para tarjetas más anchas
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

// Logo fallback (si no carga, se oculta)
function setupLogo(id){
  const img = $(id);
  if (!img) return;
  img.addEventListener('error', ()=>{ img.style.display='none'; });
}
setupLogo('#brandImg');
setupLogo('#brandImgFooter');

// Modal Coming Soon
const easterBtn = $('#easterBtn');
const easterModal = $('#easterModal');
const easterClose = $('#easterClose');

function openModal(){ easterModal.classList.add('show'); easterClose.focus(); }
function closeModal(){ easterModal.classList.remove('show'); }

if (easterBtn && easterModal && easterClose){
  easterBtn.addEventListener('click', (e)=>{ e.preventDefault(); openModal(); });
  easterClose.addEventListener('click', (e)=>{ e.preventDefault(); closeModal(); });

  // cierre por fondo y por ESC:
  easterModal.addEventListener('click', (e)=>{ if(e.target === easterModal) closeModal(); });
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeModal(); });

  // feedback de clic (añade animación rápida)
  easterClose.addEventListener('mousedown', ()=> easterClose.classList.add('is-pressed'));
  easterClose.addEventListener('mouseup',   ()=> easterClose.classList.remove('is-pressed'));
  easterClose.addEventListener('mouseleave',()=> easterClose.classList.remove('is-pressed'));
}

// Hero visual: ocúltalo si no existe
const heroVisual = $('#heroVisual');
if (heroVisual){
  heroVisual.addEventListener('error', ()=>{ heroVisual.style.display = 'none'; });
}
