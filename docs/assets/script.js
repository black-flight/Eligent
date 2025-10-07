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

// Carrusel drag/scroll (simple)
const track = $('#carTrack');
if (track){
  let isDown=false, startX=0, scrollLeft=0;
  track.addEventListener('mousedown',(e)=>{isDown=true;startX=e.pageX-track.offsetLeft;scrollLeft=track.scrollLeft;});
  track.addEventListener('mouseleave',()=>isDown=false);
  track.addEventListener('mouseup',()=>isDown=false);
  track.addEventListener('mousemove',(e)=>{if(!isDown)return; e.preventDefault(); const x=e.pageX-track.offsetLeft; const walk=(x-startX)*1.2; track.scrollLeft=scrollLeft-walk;});
}

// Privacidad (placeholder)
const privacyLink = $('#privacyLink');
if (privacyLink){
  privacyLink.addEventListener('click', (e)=>{
    e.preventDefault();
    alert('Privacidad: encuesta anónima; registro beta en página distinta del formulario. Sin datos sensibles.');
  });
}

// Modal Coming Soon
const easterBtn = $('#easterBtn');
const easterModal = $('#easterModal');
const easterClose = $('#easterClose');

function openModal(){ easterModal.classList.add('show'); easterClose?.focus(); }
function closeModal(){ easterModal.classList.remove('show'); }

if (easterBtn && easterModal){
  easterBtn.addEventListener('click', (e)=>{ e.preventDefault(); openModal(); });
  easterClose?.addEventListener('click', (e)=>{ e.preventDefault(); closeModal(); });
  easterModal.addEventListener('click', (e)=>{ if(e.target === easterModal) closeModal(); });
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeModal(); });
}
