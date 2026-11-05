# MG Exports – Frontend (React + Vite + Tailwind + Framer Motion)

Frontend only. No backend, database, admin panel or login.

## Run
```
npm install
npm run dev      # development
npm run build    # production build in /dist
```

## Add your real details (src/data/site.js)
Phone, WhatsApp number, email, office address (use exactly what is on www.dvpcapitals.com), company profile PDF (put the file in /public) and social links. Placeholders show until filled. Google Maps embed appears automatically once the address is set.

## Notes
- Routes use BrowserRouter. Hosting needs an SPA fallback (included: public/_redirects for Netlify, vercel.json for Vercel).
- Product photos are in src/assets. Replace files with the same names to change them.
- Specifications, grades, packaging and certifications are placeholders until confirmed by the company.
- The inquiry form validates, then opens WhatsApp (+91 74107 16166) with the inquiry pre-filled; the visitor presses Send. No data is stored.
- Colours: Forest #102D26, Gold #C5A46D, Ivory #F5F3ED, Sage #E8EEE8, Charcoal #252B2A, Muted #777F79.
