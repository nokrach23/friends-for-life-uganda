# Deployment Guide

## Static prototype

1. Validate HTML, CSS, and JavaScript and test locally over HTTP.
2. Replace and compress production images.
3. Upload the contents of this directory to the HTTPS document root.
4. Configure long-lived caching for versioned CSS/JS/images and shorter caching for HTML.
5. Enable Brotli or gzip, HTTP/2 or HTTP/3, HSTS after HTTPS is proven, `X-Content-Type-Options`, a suitable Content Security Policy, Referrer Policy, and frame protection.
6. Add a custom 404, robots.txt, sitemap, canonical URLs, favicon, and social preview images.
7. Run Lighthouse and keyboard/screen-reader checks on production.

## WordPress production

Use separate development, staging, and production environments. Confirm PHP 8+, database backups, SSL, transactional email, cron, writable directory rules, and least-privilege access. Deploy the version-controlled custom theme, import structured content, configure menus and plugins, then run URL redirects and acceptance testing before DNS cutover.

After launch, monitor uptime, form delivery, donations, error logs, backups, security alerts, Core Web Vitals, analytics, and Search Console. Schedule monthly dependency/content reviews and quarterly recovery tests.
