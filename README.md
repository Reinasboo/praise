# Praise Ajayi - Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. Optimized for Vercel deployment.

## Features

- ✨ Modern, responsive design
- 🎨 Tailwind CSS styling
- 🚀 Next.js for optimal performance
- 📧 Contact form with API endpoint
- 🔍 SEO optimized
- 📱 Mobile-first approach
- ⚡ Fast loading times
- 🎯 Vercel-ready deployment

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS 3
- **UI Icons**: Lucide React
- **Deployment**: Vercel
- **Language**: JavaScript/React

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create `.env.local` file (optional, for email service):
```bash
cp .env.local.example .env.local
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
npm run start
```

## Deployment on Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically deploy on every push

### Option 3: Direct Upload

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Upload your project folder
4. Configure and deploy

## Configuration

### Email Service Setup (Optional)

To enable email functionality for the contact form:

#### Using Resend (Recommended)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to `.env.local`:
   ```
   RESEND_API_KEY=your_key_here
   ```
4. Uncomment Resend code in `pages/api/contact.js`

#### Using SendGrid

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get your API key
3. Add to `.env.local`:
   ```
   SENDGRID_API_KEY=your_key_here
   ```

## Project Structure

```
portfolio/
├── pages/
│   ├── _app.js           # App wrapper
│   ├── _document.js      # HTML document
│   ├── index.js          # Main portfolio page
│   └── api/
│       └── contact.js    # Contact form endpoint
├── public/               # Static files
├── styles/
│   └── globals.css       # Global styles
├── package.json          # Dependencies
├── next.config.js        # Next.js config
├── tailwind.config.js    # Tailwind config
└── vercel.json          # Vercel config
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Performance Optimizations

- Image optimization with Next.js Image component
- Automatic code splitting
- CSS minification with Tailwind
- Compression and gzip
- Optimized fonts loading
- Lazy loading for components

## SEO

The site includes:
- Meta tags and Open Graph
- Semantic HTML
- Mobile-friendly design
- Fast page load times
- Sitemap ready

## Environment Variables

Optional environment variables for production:

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
RESEND_API_KEY=your_email_service_key
SENDGRID_API_KEY=your_sendgrid_key
```

## Customization

### Change Colors

Edit `tailwind.config.js` to customize the color scheme.

### Update Content

Edit `pages/index.js` to update portfolio content.

### Add New Pages

Create new files in the `pages/` directory:
```bash
# Example: pages/blog.js
```

## Security Headers

The site includes security headers configured in `next.config.js`:
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Build Issues

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

### Local Development Issues

- Ensure Node.js version is 16+
- Clear browser cache
- Restart the development server

## Contributing

Feel free to fork this project and customize it for your own portfolio.

## License

MIT License - feel free to use this template for your portfolio.

## Contact

- Email: spectrolite.praise@gmail.com
- GitHub: [Your GitHub Profile](https://github.com)
- Fiverr: [Your Fiverr Profile](https://fiverr.com)

## Support

For issues or questions, please:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review the [Tailwind CSS documentation](https://tailwindcss.com/docs)
3. Visit [Vercel documentation](https://vercel.com/docs)

---

Built with ❤️ for modern web
