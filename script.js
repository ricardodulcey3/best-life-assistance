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

// Cada línea de pulso se dibuja cuando entra en pantalla
const pulseLines = document.querySelectorAll('.pulse-line');
if (pulseLines.length && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-drawn');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  pulseLines.forEach(line => io.observe(line));
} else {
  pulseLines.forEach(line => line.classList.add('is-drawn'));
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
