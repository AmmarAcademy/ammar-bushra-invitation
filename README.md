# Wedding invite template

Open `index.html` in a browser. The first screen is a sealed envelope; click the wax seal to open it and reveal the animated invitation.

For the internal family rollout, open `family.html`. It contains the separate four-day itinerary from 25 to 28 December 2026.

## Replace first

- Update the date, city, Nikah venue, Nikah time, Reception venue, Reception time, and RSVP deadline in `index.html`.
- Change `weddingDate` in `script.js` to the real date and time.
- Replace the Unsplash URL in `.hero__image` inside `styles.css` with a couple photo or a local file such as `url('assets/hero.jpg')`.
- Update both Google Maps links, colors, and any surrounding invitation wording.

The RSVP form is currently a front-end demo. Connect its submit handler in `script.js` to your preferred form service or backend before publishing.

## Family RSVP data

The family invite collects the family head name, adult count, child count, and phone/WhatsApp. For hotel planning, guests under 5 years are counted as children and guests aged 5 years and above are counted as adults. For local testing, submissions are saved in that browser's `localStorage` under `familyWeddingRsvps`.

For responses from all families, connect the submit handler to a shared Google Form/Google Sheet, Formspree, or your own backend. Browser `localStorage` is device-specific and cannot aggregate responses from different guests.
