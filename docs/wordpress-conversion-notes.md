# WordPress Conversion Notes

## Recommended architecture

Create a custom child theme (or a purpose-built custom theme where no stable parent exists) with reusable template parts and no page builder.

| Static source                        | WordPress destination                   |
| ------------------------------------ | --------------------------------------- |
| Shared top bar/header/navigation     | `header.php`                            |
| Shared footer/back-to-top            | `footer.php`                            |
| `index.html`                         | `front-page.php`                        |
| `about.html`                         | `page-about.php`                        |
| `our-story.html`                     | Blog index (`home.php`)                 |
| `projects.html`                      | `page-projects.php` and project archive |
| `get-involved.html`                  | `page-get-involved.php`                 |
| `contact.html`                       | `page-contact.php`                      |
| Repeated cards/CTAs/stats            | `template-parts/`                       |
| Enqueued CSS/JS and theme support    | `functions.php`                         |
| Theme metadata/minimum global styles | `style.css`                             |

Register primary and footer WordPress menus and replace duplicated static links with `wp_nav_menu()`. Add Custom Logo support and source images from the Media Library with responsive attachment functions. Enqueue Poppins locally where privacy/performance policy requires it.

## Content model

- Register a `project` custom post type manually or with Custom Post Type UI.
- Suggested taxonomies: Project Category, Community/Location, and Status.
- Use Advanced Custom Fields for hero copy/images, impact values, project outcomes, CTA fields, story attribution/consent metadata, leadership profiles, partners, contact settings, and office hours.
- Keep beneficiary stories in a carefully permissioned content type with explicit consent status and expiry/review date.
- Use site options for phone, email, address, social URLs, donation URL, and repeated footer content.

## Forms, giving, and plugins

Use WPForms or Fluent Forms for contact, prayer, volunteer, and partnership forms. Add server-side validation, nonce verification, sanitization, anti-spam, retention rules, consent records, and protected notification delivery.

Choose a reputable PCI-compliant donation provider and redirect or embed only through its supported integration. Do not store card data in WordPress.

Recommended production plugins:

- Advanced Custom Fields
- Custom Post Type UI or manual post type registration
- WPForms or Fluent Forms
- Yoast SEO or Rank Math
- LiteSpeed Cache (when supported by the host)
- UpdraftPlus
- Wordfence
- Redirection

Also evaluate image optimization through the host or a carefully chosen plugin. Avoid overlapping caching, security, or SEO plugins.

## Engineering notes

Use escaping (`esc_html`, `esc_url`, `wp_kses_post`) at output and sanitization at input. Add translations with a theme text domain. Preserve keyboard interaction, landmarks, focus styles, reduced motion, and form error relationships. Use version-controlled deployment, staging, backups, HTTPS, PHP 8+, supported WordPress versions, and least-privilege user roles.
