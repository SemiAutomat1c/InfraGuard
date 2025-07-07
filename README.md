# InfraGuard Technologies Website

A modern, responsive website for InfraGuard Technologies, a security solutions provider offering both physical security and cybersecurity services.

## Project Overview

This website showcases InfraGuard Technologies' services, including:
- Physical security solutions (infrastructure guarding, construction site security, etc.)
- Cybersecurity solutions (network security, endpoint protection, etc.)
- Industry-specific solutions
- Company information and contact details

## Project Structure

```
InfraGuard/
├── index.html              # Home page
├── about.html              # About us page
├── services.html           # Services page
├── industries.html         # Industries we serve page
├── contact.html            # Contact page
├── styles.css              # Global styles
├── css/                    # Page-specific CSS files
│   ├── home.css            # Home page specific styles
│   ├── about.css           # About page specific styles
│   ├── services.css        # Services page specific styles
│   ├── industries.css      # Industries page specific styles
│   └── contact.css         # Contact page specific styles
├── js/                     # JavaScript files
│   ├── main.js             # Common JavaScript for all pages
│   ├── home.js             # Home page specific JavaScript
│   ├── about.js            # About page specific JavaScript
│   ├── services.js         # Services page specific JavaScript
│   ├── industries.js       # Industries page specific JavaScript
│   └── contact.js          # Contact page specific JavaScript
└── images/                 # Image assets
```

## Features

- Responsive design that works on mobile, tablet, and desktop devices
- Modern UI with animations and interactive elements
- Dropdown navigation menu
- Service cards with icons
- Industry sections with placeholder images
- Contact form with validation
- Google Maps integration (placeholder)

## CSS Structure

The CSS is organized into multiple files for better maintainability:

- `styles.css`: Contains global styles used across all pages
- Page-specific CSS files in the `css/` directory

## JavaScript Structure

The JavaScript is organized into multiple files for better maintainability:

- `js/main.js`: Contains common JavaScript functionality used across all pages
- Page-specific JavaScript files in the `js/` directory

## Browser Compatibility

This website is designed to be compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/SemiAutomat1c/InfraGuard.git
   ```

2. Open any of the HTML files in your browser to view the website locally.

3. To make changes, edit the HTML, CSS, or JavaScript files as needed.

## Deployment

To deploy this website:
1. Upload all files to your web server
2. Ensure all file paths are correct
3. Test all pages and functionality

## Credits

- Font Awesome for icons
- Google Fonts for typography

## Website Structure

The website consists of the following pages:

1. **Home (index.html)** - Main landing page with key information about the company
2. **About Us (about.html)** - Information about the company, mission, vision, and team
3. **Services (services.html)** - Detailed information about physical and cybersecurity services
4. **Industries (industries.html)** - Information about the industries served
5. **Contact (contact.html)** - Contact form and company information

## Files Included

- HTML files for each page
- CSS files:
  - styles.css - Main stylesheet with global styles
  - css/home.css - Styles specific to the home page
  - css/about.css - Styles specific to the about page
  - css/services.css - Styles specific to the services page
  - css/industries.css - Styles specific to the industries page
  - css/contact.css - Styles specific to the contact page
- script.js - JavaScript file for interactive elements
- images/ - Directory for storing images (currently empty)

## CSS Structure

The CSS has been organized into modular files for better maintainability:

1. **styles.css** - Contains global styles that apply to all pages:
   - CSS variables (colors, spacing, etc.)
   - Basic element styling
   - Header and navigation
   - Footer
   - Common components (buttons, containers)
   - Responsive breakpoints for global elements

2. **Page-specific CSS files** - Each page has its own CSS file with styles that are specific to that page:
   - home.css - Hero section, intro, key services, trust section, industries grid
   - about.css - About content, mission/vision, features grid, team section
   - services.css - Service categories, service details
   - industries.css - Industry sections, industry containers
   - contact.css - Contact form, contact info, map container

## Customization Instructions

### Adding Images

1. Add your images to the `images/` directory
2. For the hero background image, add a high-quality image named `hero-bg.jpg`
3. For industry section images, add images named:
   - `construction.jpg`
   - `logistics.jpg`
   - `industrial.jpg`
   - `financial.jpg`
   - `government.jpg`
   - `it.jpg`

### Changing Colors

To change the color scheme, edit the CSS variables in the `styles.css` file:

```css
:root {
    --primary-color: #0056b3;    /* Main brand color */
    --secondary-color: #004080;  /* Darker shade of primary color */
    --accent-color: #ff6600;     /* Accent color for highlights */
    --text-color: #333;          /* Main text color */
    --light-text: #fff;          /* Light text color (for dark backgrounds) */
    --light-bg: #f8f9fa;         /* Light background color */
    --dark-bg: #2c3e50;          /* Dark background color (footer) */
    --border-color: #e0e0e0;     /* Border color */
}
```

### Updating Content

1. Replace the placeholder text in the HTML files with your actual content
2. Update contact information in the footer and contact page
3. Replace the Google Maps iframe with your actual location

### Logo

Currently, the website uses a text logo "InfraGuard". To use an image logo:

1. Add your logo image to the `images/` directory
2. Edit the logo section in each HTML file:

```html
<div class="logo">
    <a href="index.html">
        <img src="images/your-logo.png" alt="InfraGuard Technologies">
    </a>
</div>
```

## Technical Information

This website is built with:

- HTML5
- CSS3 (with CSS Grid and Flexbox for layout)
- JavaScript (for interactive elements)
- Font Awesome icons

The website is fully responsive and works on mobile, tablet, and desktop devices.

## Contact

For any questions or customization needs, please contact your web developer. 