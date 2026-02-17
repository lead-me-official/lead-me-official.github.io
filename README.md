# Lead Me — Website

This repository contains the static site for Lead Me.

Preview locally

- Using Python 3 built-in server (from repo root):

```powershell
python -m http.server 8000
start http://localhost:8000
```

- Or open `index.html` directly in your browser.

What's included

- `index.html` — main page (refactored to external assets)
- `assets/css/styles.css` — main stylesheet
- `assets/js/main.js` — main JavaScript (toast, animations, form handling)

Notes

- The newsletter form now uses an accessible toast notification instead of `alert()`.
- There's a skip link for keyboard users: press Tab on page load to reach it.
- Logo now links to `/` (root). Update if you prefer a different target.

Want me to:

- Add a dismiss button to the toast?
- Make the mobile menu interactive (toggle nav links)?
- Wire the newsletter form to a mailing provider (Mailchimp, Buttondown, ConvertKit)?
