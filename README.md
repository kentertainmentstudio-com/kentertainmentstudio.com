# K Entertainment Studio

> **The World's Centralized Intelligent Vault for All Entertainment Content — Stored Forever**

A premium company website built with Astro 5+, TypeScript, Tailwind CSS v4, and TinaCMS for content management.

![K Entertainment Studio](https://kentertainmentstudio.com/og-image.png)

## ✨ Features

- 🚀 **Astro 5+** - Latest stable version with partial hydration
- 📝 **TypeScript** - Strict mode for type safety
- 🎨 **Tailwind CSS v4** - Modern utility-first styling
- 🌙 **Dark Glassmorphism** - Premium dark theme with frosted glass effects
- ⚡ **Framer Motion** - Smooth animations and micro-interactions
- 📄 **TinaCMS** - Git-based CMS with visual editing
- 📱 **Mobile-first** - Fully responsive design
- ♿ **Accessible** - ARIA labels, focus states, semantic HTML
- 🔍 **SEO Ready** - Meta tags, structured data, sitemap

## 🏗️ Project Structure

```
kentertainmentstudio.com/
├── public/                   # Static assets
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── react/           # React islands for interactivity
│   │   │   ├── AnimatedHero.tsx
│   │   │   ├── BentoGrid.tsx
│   │   │   ├── CTABanner.tsx
│   │   │   └── ValuePropositions.tsx
│   │   ├── Navbar.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro     # Main layout with SEO
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   ├── about.astro
│   │   ├── mission.astro
│   │   ├── technology.astro
│   │   ├── security.astro
│   │   └── contact.astro
│   └── styles/
│       └── global.css       # Global styles & Tailwind
├── content/                  # TinaCMS content
│   ├── features/
│   ├── pages/
│   ├── roadmap/
│   ├── settings/
│   ├── stats/
│   └── testimonials/
├── tina/
│   └── config.ts            # TinaCMS configuration
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (or 20+ recommended)
- npm, pnpm, or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kentertainmentstudio-com/kentertainmentstudio.com.git
   cd kentertainmentstudio.com
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:4321](http://localhost:4321)

## 📝 TinaCMS Setup

TinaCMS provides visual editing capabilities. To enable it:

### Step 1: Initialize TinaCMS (if not already done)
```bash
npx @tinacms/cli@latest init
```

### Step 2: Create a Tina Cloud Account
1. Go to [tina.io](https://tina.io)
2. Sign up and create a new project
3. Connect your GitHub repository

### Step 3: Configure Environment Variables
Create a `.env` file:
```env
TINA_CLIENT_ID=your_client_id
TINA_TOKEN=your_token
```

### Step 4: Run with TinaCMS
```bash
npm run tina:dev
```

Access the CMS at [http://localhost:4321/admin](http://localhost:4321/admin)

## 🎨 Design System

### Colors
- **Primary**: `#00d4ff` (Cyan)
- **Accent Purple**: `#a855f7`
- **Accent Pink**: `#ec4899`
- **Accent Gold**: `#f59e0b`
- **Background**: `#030712` (Deep dark)

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, tracking-tight

### Effects
- **Glassmorphism**: Semi-transparent cards with backdrop-blur
- **Neon Glows**: Subtle box-shadow accents
- **Gradients**: Primary to accent color transitions

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at localhost:4321 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run tina:dev` | Start with TinaCMS editing |
| `npm run tina:build` | Build with TinaCMS |

## 📦 Tech Stack

- **Framework**: [Astro 5+](https://astro.build)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev)
- **UI Primitives**: [Radix UI](https://www.radix-ui.com)
- **CMS**: [TinaCMS](https://tina.io)
- **Language**: TypeScript (strict mode)

## 🔮 Future Enhancements (TODOs)

- [ ] Roadmap timeline component
- [ ] Interactive storage estimator calculator
- [ ] AI personalization islands
- [ ] Architecture diagram visualization
- [ ] Multi-language support
- [ ] Dark/light theme toggle
- [ ] Blog section with MDX

## 📄 License

Proprietary - K Entertainment Studio Inc.

## 🤝 Contributing

This is a private project. Contact the team for contribution guidelines.

---

Built with ❤️ by K Entertainment Studio Inc.

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
