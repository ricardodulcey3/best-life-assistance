// Mobile nav toggle
const header = document.querySelector('.site-header');
const navToggle = document.getElementById('navToggle');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Draw-on pulse line when hero is visible
const pulseLine = document.querySelector('.pulse-line');
if (pulseLine && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        pulseLine.classList.add('is-drawn');
        io.disconnect();
      }
    });
  }, { threshold: 0.3 });
  io.observe(pulseLine);
} else if (pulseLine) {
  pulseLine.classList.add('is-drawn');
}

// Contact form: no backend yet, open a mailto with the message as a friendly fallback
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const oggetto = form.oggetto.value.trim() || 'Richiesta informazioni';
    const messaggio = form.messaggio.value.trim();
    const body = encodeURIComponent(`Nome: ${nome}\nEmail: ${email}\n\n${messaggio}`);
    window.location.href = `mailto:info@bestlifeassistance.it?subject=${encodeURIComponent(oggetto)}&body=${body}`;
  });
}
