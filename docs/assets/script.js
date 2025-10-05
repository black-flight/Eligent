// Utilidad corta
const $ = (s, o=document)=>o.querySelector(s);

// Año dinámico en el footer
const yearEl = $('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Modo oscuro/claro manual
const themeBtn = $('#themeToggle');
const root = document.documentElement;
const savedTheme = localStorage.getItem('eligent-theme');
if (savedTheme){
  root.setAttribute('data-theme', savedTheme);
  if (themeBtn) themeBtn.textContent = savedTheme === 'dark' ? 'Modo claro' : 'Modo oscuro';
}
if (themeBtn){
  themeBtn.addEventListener('click', () => {
    const now = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', now);
    localStorage.setItem('eligent-theme', now);
    themeBtn.textContent = now === 'dark' ? 'Modo claro' : 'Modo oscuro';
    themeBtn.setAttribute('aria-pressed', now === 'dark');
  });
}

// Cambio de idioma (stub)
const langToggle = $('#langToggle');
if (langToggle){
  langToggle.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Switcher de idioma: aquí podrás cargar /en con el mismo HTML o usar i18n estático.');
  });
}

// Form de beta (validación + estados; listo para integrar endpoint)
const betaForm = $('#betaForm');
const statusEl = $('#betaStatus');

if (betaForm){
  betaForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = $('#email').value.trim();

    // Validación simple
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      statusEl.textContent = 'Por favor, ingresa un correo válido.';
      statusEl.style.color = 'var(--brand-3)';
      return;
    }

    // Reemplaza por tu endpoint real:
    // await fetch('ACTION_URL_AQUI', {
    //   method:'POST',
    //   headers:{'Content-Type':'application/json'},
    //   body: JSON.stringify({ email })
    // });

    // Estado de demo inmediato (no persistente)
    statusEl.textContent = '¡Listo! Te contactaremos para la beta cuando esté disponible.';
    statusEl.style.color = 'var(--brand-2)';
    betaForm.reset();
  });
}

// Link de privacidad (placeholder)
const privacyLink = $('#privacyLink');
if (privacyLink){
  privacyLink.addEventListener('click', (e)=>{
    e.preventDefault();
    alert('Privacidad: encuesta anónima; registro beta en página distinta del formulario. Sin datos sensibles.');
  });
}
