# 💼 Loi.ly — Modern Portfolio

A modern, responsive portfolio website built with React and TypeScript. Features smooth animations, dark mode support, and a clean, professional design.

## ✨ Features

- 🎯 Clean, Modern UI Design
- 📱 Fully Responsive Layout
- 🌓 Dark/Light Theme Support
- 🎞 Smooth Page Transitions & Animations
- 🔄 Interactive Section Navigation
- ⚡ Optimized Performance
- 🎨 Customizable Styles with TailwindCSS
- 📊 SEO Friendly

## 🛠 Tech Stack

- ⚛️ React 18 + TypeScript
- ⚡ Vite for blazing-fast development
- 💨 TailwindCSS for styling
- 🎭 Framer Motion for animations
- 📦 Shadcn UI Components
- 🔍 SEO optimized
- 🧼 ESLint + Prettier for code quality
- 📱 Responsive design principles

## 🏗 Project Structure

```
src/
├── components/
│   ├── landing-page/          # Main page sections
│   │   ├── sections/
│   │   │   ├── hero.tsx
│   │   │   ├── skills.tsx
│   │   │   ├── experience.tsx
│   │   │   ├── projects.tsx
│   │   │   ├── contact.tsx
│   │   │   └── mini-menu.tsx
│   │   └── index.tsx
│   └── ui/                    # Reusable UI components
│       ├── button.tsx
│       └── theme-toggle.tsx
├── lib/                       # Utilities and helpers
├── styles/                    # Global styles
└── main.tsx                   # Entry point
```

## 🚀 Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/thanys21/loi.ly.git
cd loi.ly
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
```

The site will be available at `http://localhost:5173`

## 🎨 Customization

### Theme Customization
- Edit `tailwind.config.js` to modify the theme, colors, and other design tokens
- Dark mode colors can be adjusted in the same config file

### Content Customization
- Update personal information in the respective section components
- Modify section content in `src/components/landing-page/sections`
- Add or remove sections by editing `src/components/landing-page/index.tsx`

## 🌐 Deployment

This project can be easily deployed to various platforms:

1. **Vercel** (Recommended)
   - Connect your GitHub repository
   - Vercel will automatically detect Vite and configure the build settings

2. **Manual Deployment**
```bash
npm run build
# or
yarn build
```
The build output will be in the `dist` directory

## 📫 Contact

Feel free to reach out:
- Email: loithienly@gmail.com
- GitHub: [@Loily](https://github.com/thanys21)
- LinkedIn: [Loi Ly](www.linkedin.com/in/lợi-lý-thiên-26bbb3211)

## 📜 License

This project is open source and available under the MIT License.
