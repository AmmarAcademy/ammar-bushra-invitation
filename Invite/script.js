const weddingDate = new Date('2026-12-27T20:00:00');
const countdownUnits = { days: document.querySelector('#days'), hours: document.querySelector('#hours'), minutes: document.querySelector('#minutes'), seconds: document.querySelector('#seconds') };
const body = document.body;
const openButton = document.querySelector('#open-invite');
const inviteContent = document.querySelector('#invite-content');

openButton.addEventListener('click', () => {
  body.classList.add('is-opening');
  openButton.disabled = true;
  window.setTimeout(() => {
    body.classList.remove('is-closed', 'is-opening');
    body.classList.add('is-open');
    inviteContent.setAttribute('aria-hidden', 'false');
  }, 1100);
});

function updateCountdown() {
  const remaining = weddingDate.getTime() - Date.now();
  const values = {
    days: Math.max(0, Math.floor(remaining / 86400000)),
    hours: Math.max(0, Math.floor((remaining / 3600000) % 24)),
    minutes: Math.max(0, Math.floor((remaining / 60000) % 60)),
    seconds: Math.max(0, Math.floor((remaining / 1000) % 60))
  };
  Object.entries(values).forEach(([unit, value]) => {
    countdownUnits[unit].textContent = String(value).padStart(unit === 'days' ? 3 : 2, '0');
  });
}

updateCountdown();
setInterval(updateCountdown, 1000);

document.querySelector('#rsvp-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim() || 'there';
  document.querySelector('#form-status').textContent = `Thank you, ${name}. Your RSVP has been noted.`;
  event.target.reset();
});
