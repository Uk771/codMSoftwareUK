# CODM Software - Next.js 14 Landing Page

A modern, responsive landing page for CODM Software built with Next.js 14, featuring enterprise-scale software development and CRM solutions.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Fully responsive across all devices
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **SEO Friendly**: Proper meta tags and structured data
- **Interactive Elements**: Smooth scroll animations and hover effects
- **Component-Based**: Modular React components for easy maintenance

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Bootstrap 5 + Custom CSS
- **Animations**: AOS (Animate On Scroll)
- **Icons**: Font Awesome
- **Images**: Next.js Image Optimization

## Sections

1. **Header**: Navigation with company logo
2. **Hero**: Main banner with call-to-action buttons
3. **Logo Carousel**: Client logos with smooth scrolling animation
4. **Features**: How we help businesses with key benefits
5. **Services**: Six main service offerings with detailed descriptions
6. **Testimonials**: Client testimonials with ratings
7. **Blog**: Latest articles and insights
8. **Newsletter**: Email subscription with animated background
9. **Footer**: Company information and links

## Services Offered

- **Salesforce CRM**: Customer Relationship Management solutions
- **Building LLM Agents**: Large Language Model development
- **.NET Web Application**: Microsoft .NET framework applications
- **Data Integration / Migration**: Data management and migration services
- **React Web Application**: React-based web applications
- **Technical Support**: Comprehensive IT support services

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd codm
```

2. Install dependencies:
```bash
npm install
```

3. Copy assets:
```bash
# Copy the assets folder from the parent directory
cp -r ../assets ./public/assets
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
codm/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── LogoCarousel.tsx   # Client logos
│   ├── Features.tsx       # Features section
│   ├── Services.tsx       # Services grid
│   ├── Testimonials.tsx   # Client testimonials
│   ├── Blog.tsx           # Blog articles
│   ├── Newsletter.tsx     # Newsletter signup
│   └── Footer.tsx         # Footer
├── public/
│   └── assets/            # Images and static assets
├── package.json
├── next.config.js
├── tsconfig.json
└── README.md
```

## Customization

### Colors
Update CSS variables in `globals.css`:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --dark-color: #111827;
  --light-color: #f9fafb;
  --text-color: #374151;
  --border-color: #e5e7eb;
}
```

### Content
- Update service descriptions in `components/Services.tsx`
- Modify testimonials in `components/Testimonials.tsx`
- Change blog posts in `components/Blog.tsx`
- Update contact information in `components/Footer.tsx`

### Images
Replace images in `public/assets/` directory:
- Logo: `public/assets/imgs/template/image (17).png`
- Hero images: `public/assets/imgs/hero-1/`
- Service icons: `public/assets/imgs/service-1/`
- Client logos: `public/assets/imgs/CLI logo/`

## Performance Optimization

- Images are optimized using Next.js Image component
- CSS and JavaScript are minified in production
- Lazy loading for images and components
- AOS animations are optimized for performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, contact:
- Email: info@codmsoftware.com
- Phone: +1 (555) 123-4567

## Acknowledgments

- Bootstrap for responsive framework
- AOS for scroll animations
- Font Awesome for icons
- Next.js team for the amazing framework 