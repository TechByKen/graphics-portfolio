# README.md
# Neth Digitals Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS v4 for showcasing graphic design services and projects.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **Dark/Light mode** toggle
- **Responsive design** for all devices
- **SEO optimized** with metadata API
- **Contact form** with validation
- **Portfolio gallery** with filtering
- **Performance optimized** images
- **Accessibility** features

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)
- **Image Optimization:** Next.js Image component

## 📁 Project Structure

```
app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage
│   ├── about/            # About page
│   ├── portfolio/        # Portfolio page
│   ├── contact/          # Contact page
│   └── services/             # Services page
├── components/           # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Gallery.tsx
│   ├── ProjectCard.tsx
│   ├── ContactForm.tsx
│   
├── data/                 # Static data
│   └── projects.ts
├── lib/                  # Utilities
│   └── email.ts
└── config/              # Configuration
    └── site.ts
```

## 🚦 Getting Started


1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your configuration
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📧 Email Setup

The contact form supports multiple email providers:

- **Resend** (recommended)
- **SendGrid**
- **SMTP** (Gmail, Outlook, etc.)

Configure your preferred service in `.env.local`.

## 🎨 Customization

- **Colors:** Update the color scheme in `app/globals.css`
- **Content:** Modify projects in `data/projects.ts`
- **Site config:** Update `config/site.ts`
- **Components:** Customize components in `components/`

## 📈 Performance

- **Lighthouse Score:** 95+ across all metrics
- **Image Optimization:** Next.js Image component
- **Code Splitting:** Automatic with Next.js
- **Bundle Analysis:** `npm run analyze`

## 🚀 Deployment

Deploy easily on Vercel:

1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

Or use other platforms like Netlify, Railway, or self-host.

## 📄 License

MIT License - feel free to use for personal or commercial projects.

## 🤝 Contributing

Contributions welcome! Please read the contributing guidelines first.

## 📞 Support

For support, email hello@nethdigitals.com or create an issue.