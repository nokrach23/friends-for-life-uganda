# Friends for Life Uganda Website Redesign

A production-minded, mobile-first HTML/CSS/JavaScript prototype for a Christ-centered Ugandan non-profit. It contains five complete pages, shared component patterns, accessible navigation and forms, subtle animations, and a documented path to a custom WordPress theme.

## Structure

```text
index.html / about.html / our-story.html / projects.html / get-involved.html / contact.html
assets/css/       design tokens, base styles, components, page and responsive styles
assets/js/        navigation, animations/counters, forms, shared behavior
assets/images/    future local images
assets/icons/     future SVG icon set
docs/             WordPress, content, and deployment guidance
```

## Run locally

Open `index.html` directly, or serve the folder for the most reliable browser behavior:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`. No build step or dependency install is required.

## Content updates

- **Images:** Search for `placehold.co` in the HTML/CSS. Replace with optimized local WebP/AVIF/JPEG files under `assets/images/`, preserve dimensions, and update descriptive alt text.
- **Colors:** Edit the tokens in `assets/css/variables.css`.
- **Contact details:** Search all HTML files for `George Street`, phone numbers, and the email address. Confirm the complete street address before launch.
- **Impact statistics:** Update `data-counter` and visible labels in `index.html` and `projects.html`. Publish only verified figures.
- **Stories and people:** Replace beneficiary and leadership placeholders only with written consent and approved copy.

## Responsive testing

Test at 1440, 1200, 1040, 780, 520, 375, and 320 pixels. Verify keyboard menu use, focus visibility, text zoom to 200%, landscape mobile, and no horizontal overflow. Test current Chrome, Firefox, Safari, and Edge plus physical iOS/Android devices.

## Static deployment

Upload the entire folder to any static host or Apache document root. Keep relative paths intact, enable HTTPS, compression, caching, and security headers. See `docs/deployment-guide.md`.

## WordPress conversion

Follow `docs/wordpress-conversion-notes.md`. Shared header/footer become template files; each page maps to a WordPress page template; repeated cards become template parts; projects become a custom post type; editable fields move to ACF.

## Production checklist

- Replace logo, photos, figures, profiles, story, address, partner logos, and social URLs.
- Obtain photo/story consent and define a child-safeguarding review.
- Connect secure donations and server-side forms with spam protection.
- Add privacy, cookie, safeguarding, terms, donation, sponsorship, news, gallery, and 404 pages.
- Add analytics with consent, Search Console, XML sitemap, backups, monitoring, and redirects.
- Optimize images; minify assets; validate HTML/CSS; run Lighthouse.
- Test every link, form, device size, browser, and assistive-technology flow.

## Accessibility checklist

- Preserve semantic landmarks and sequential headings.
- Keep meaningful alt text; use empty alt text only for decorative images.
- Verify color contrast and visible focus.
- Test full keyboard navigation, Escape behavior, form errors, and screen-reader labels.
- Maintain 44px minimum touch targets and reduced-motion support.
- Test 200% zoom and reflow at 320 CSS pixels.

## SEO checklist

- Replace page titles and descriptions with approved keyword-aware copy.
- Add canonical URLs, Open Graph/Twitter images, organization schema, breadcrumbs, favicon, robots.txt, and sitemap.
- Use one clear H1 per page and descriptive internal links.
- Add optimized image filenames, dimensions, alt text, and local social preview images.
- Configure redirects from every legacy URL during migration.

The frontend form validates but intentionally sends no data. Connect a secure backend or WordPress form plugin before public launch.
