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
  betaForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = $('#email').value.trim();
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      statusEl.textContent = 'Por favor, ingresa un correo válido.';
      statusEl.style.color = 'var(--red-deadline)';
      return;
    }
    // Reemplaza por tu endpoint real:
    // await fetch('ACTION_URL_AQUI', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ email }) });

    statusEl.textContent = '¡Listo! Te contactaremos para la beta cuando esté disponible.';
    statusEl.style.color = 'var(--green-match)';
    betaForm.reset();
  });
}

// Carrusel
const track = $('#carTrack');
if (track){
  const prev = document.querySelector('.car-btn.prev');
  const next = document.querySelector('.car-btn.next');
  const step = 340;
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

// Logo fallback si no existe imagen
function setupLogo(imgId){
  const img = $(imgId);
  if (!img) return;
  img.addEventListener('error', ()=>{ img.style.display='none'; });
}
setupLogo('#brandImg');
setupLogo('#brandImgFooter');

// Modal Easter Egg
const easterBtn = $('#easterBtn');
const easterModal = $('#easterModal');
const easterClose = $('#easterClose');

function openModal(){
  easterModal.classList.add('show');
  // focus para accesibilidad
  easterClose.focus();
}
function closeModal(){
  easterModal.classList.remove('show');
}

if (easterBtn && easterModal && easterClose){
  easterBtn.addEventListener('click', (e)=>{ e.preventDefault(); openModal(); });
  easterClose.addEventListener('click', closeModal);
  easterModal.addEventListener('click', (e)=>{ if(e.target === easterModal) closeModal(); });
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeModal(); });
}
