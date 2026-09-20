const weddingDate = new Date('2026-12-27T14:00:00');
const countdownUnits = { days: document.querySelector('#days .countdown-current'), hours: document.querySelector('#hours .countdown-current'), minutes: document.querySelector('#minutes .countdown-current'), seconds: document.querySelector('#seconds .countdown-current') };
const previousCountdown = {};
const body = document.body;
const openButton = document.querySelector('#open-invite');
const inviteContent = document.querySelector('#invite-content');
const envelopeScreen = document.querySelector('#envelope-screen');
let inviteOpening = false;

function openInvite() {
  if (inviteOpening || body.classList.contains('is-open')) return;
  inviteOpening = true;
  window.scrollTo(0, 0);
  body.classList.add('is-opening');
  openButton.disabled = true;
  window.setTimeout(() => {
    body.classList.remove('is-closed', 'is-opening');
    body.classList.add('is-open');
    inviteContent.setAttribute('aria-hidden', 'false');
    window.scrollTo(0, 0);
    startScrollReveals();
  }, 800);
}

openButton.addEventListener('click', openInvite);
envelopeScreen.addEventListener('click', openInvite);

function updateCountdown() {
  const remaining = weddingDate.getTime() - Date.now();
  const values = { days: Math.max(0, Math.floor(remaining / 86400000)), hours: Math.max(0, Math.floor((remaining / 3600000) % 24)), minutes: Math.max(0, Math.floor((remaining / 60000) % 60)), seconds: Math.max(0, Math.floor((remaining / 1000) % 60)) };
  Object.entries(values).forEach(([unit, value]) => {
    const formattedValue = String(value).padStart(2, '0');
    if (previousCountdown[unit] !== undefined && previousCountdown[unit] !== formattedValue) {
      const card = countdownUnits[unit].parentElement.parentElement;
      const nextNumber = card.querySelector('.countdown-next');
      nextNumber.textContent = formattedValue;
      card.classList.remove('is-flipping');
      void card.offsetWidth;
      card.classList.add('is-flipping');
      window.setTimeout(() => {
        countdownUnits[unit].textContent = formattedValue;
        nextNumber.textContent = '';
        card.classList.remove('is-flipping');
      }, 680);
    } else {
      countdownUnits[unit].textContent = formattedValue;
    }
    previousCountdown[unit] = formattedValue;
  });
}

updateCountdown();
setInterval(updateCountdown, 1000);

document.querySelector('#rsvp-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const response = Object.fromEntries(formData.entries());
  const savedResponses = JSON.parse(localStorage.getItem('familyWeddingRsvps') || '[]');
  savedResponses.push({ ...response, submittedAt: new Date().toISOString() });
  localStorage.setItem('familyWeddingRsvps', JSON.stringify(savedResponses));
  const name = response.familyHead.trim() || 'there';
  document.querySelector('#form-status').textContent = `Thank you, ${name}. Your family details have been recorded on this device.`;
  event.target.reset();
});

const revealItems = document.querySelectorAll('.welcome, .events__heading, .family-day, .maps-card, .countdown, .rsvp, .closing-blessing, .footer');
revealItems.forEach((item) => item.classList.add('scroll-reveal'));

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('is-visible', entry.isIntersecting);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

function startScrollReveals() {
  revealItems.forEach((item) => revealObserver.observe(item));
}
