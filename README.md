# Anergia - iGaming & Crypto Gaming SaaS Platform

Enterprise-grade marketing website for an iGaming + Crypto Gaming SaaS company built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS
- **Enterprise Design**: Professional SaaS + Fintech + Gaming aesthetic
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Complete metadata and OpenGraph support
- **Component-Driven**: Reusable, scalable component architecture
- **Production Ready**: Optimized for Vercel deployment

## 🎨 Brand Colors

- **Primary Blue**: `#0B5ED7` - Navbar, headings, primary buttons
- **Accent Orange**: `#F97316` - CTA buttons, hover states, highlights
- **White Background**: `#FFFFFF` - Main background
- **Dark Text**: `#0F172A` - Text content

## 📁 Project Structure

```
├── app/
│   ├── page.tsx              # Home page
│   ├── services/page.tsx      # Services listing
│   ├── products/page.tsx     # Products listing
│   ├── blog/
│   │   ├── page.tsx          # Blog listing
│   │   └── [slug]/page.tsx   # Blog detail pages
│   ├── contact/page.tsx      # Contact form
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Navbar.tsx            # Navigation component
│   ├── Footer.tsx            # Footer component
│   ├── ServiceCard.tsx       # Service card component
│   ├── ProductCard.tsx       # Product card component
│   └── BlogCard.tsx          # Blog card component
└── lib/
    └── data.ts               # Mock data (services, products, blogs)
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📄 Pages

- **Home (`/`)**: Hero section, featured services, products, testimonials, newsletter
- **Services (`/services`)**: Complete list of iGaming and Crypto Gaming services
- **Products (`/products`)**: Product showcase with demo requests
- **Blog (`/blog`)**: Blog listing and dynamic blog detail pages
- **Contact (`/contact`)**: Contact form with client-side validation

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

## 🎯 Key Features

- ✅ Sticky navbar with active link indicators
- ✅ Gradient hero sections
- ✅ Service cards with hover animations
- ✅ Product cards with feature lists
- ✅ Blog system with dynamic routes
- ✅ Contact form with validation
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ SEO metadata on all pages
- ✅ Professional animations and transitions
- ✅ Brand-consistent color scheme

## 📦 Dependencies

- **next**: ^14.2.0 - React framework
- **react**: ^18.3.0 - UI library
- **react-dom**: ^18.3.0 - React DOM renderer
- **react-icons**: ^5.2.0 - Icon library
- **tailwindcss**: ^3.4.1 - Utility-first CSS framework
- **typescript**: ^5.3.3 - Type safety

## 🔧 Configuration

- **Tailwind Config**: Custom brand colors and gradients
- **TypeScript**: Strict mode enabled
- **Next.js**: App Router with optimized images
- **PostCSS**: Autoprefixer for browser compatibility

## 📝 License

This project is proprietary and confidential.

## 👥 Support

For support, email contact@anergia.com or visit our website.

