# 🚀 Udit Mittal - Professional Portfolio

A modern, responsive portfolio website built with Next.js 14, featuring a dark theme, mobile-first design, and smooth animations. This portfolio showcases my skills, projects, and professional experience as a B.Tech CSE student at VIT.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14.2.16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.13-38B2AC?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)

## ✨ Features

### 🎨 **Design & UI**
- **Dark Mode Default**: Modern dark theme with smooth transitions
- **Mobile-First**: Fully responsive design for all devices
- **Smooth Animations**: CSS animations and hover effects
- **Modern Typography**: Clean, readable fonts with proper hierarchy
- **Interactive Elements**: Hover effects, transitions, and micro-interactions

### 🛠️ **Technical Features**
- **Next.js 14**: Latest React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn/UI**: Modern component library
- **Theme System**: Dark/light mode toggle
- **SEO Optimized**: Meta tags and structured data
- **Performance**: Optimized images and lazy loading

### 📱 **Mobile Optimization**
- **Touch-Friendly**: 44px minimum touch targets
- **Responsive Typography**: Scales across all screen sizes
- **Mobile Navigation**: Hamburger menu with smooth animations
- **Optimized Images**: Proper sizing and loading
- **Fast Loading**: Optimized for mobile networks

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/udit-mittal-portfolio.git
   cd udit-mittal-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main portfolio page
├── components/            # Reusable components
│   ├── theme-provider.tsx # Theme context provider
│   └── ui/               # Shadcn/UI components
├── hooks/                # Custom React hooks
│   ├── use-mobile.ts     # Mobile detection hook
│   └── use-toast.ts      # Toast notification hook
├── lib/                  # Utility functions
│   └── utils.ts          # Helper functions
├── public/               # Static assets
│   ├── IMG_6655.jpg     # Profile photo
│   └── Screenshot 2025-09-14 at 12.24.02.png # Project screenshot
└── README.md            # This file
```

## 🎯 Sections Overview

### 1. **Hero Section**
- Animated profile photo with floating effect
- Typing animation for skills
- Call-to-action buttons
- Particle background effect

### 2. **About Section**
- Personal story and background
- Current roles and achievements
- Professional timeline
- Skills overview

### 3. **Projects Section**
- Featured project showcase
- Interactive project cards
- GitHub and live demo links
- Technology tags

### 4. **Experience Section**
- Work and internship history
- Detailed role descriptions
- Timeline visualization
- Company information

### 5. **Skills Section**
- Technical skills with proficiency levels
- Tools and technologies
- Progress bars and visual indicators
- Categorized skill sets

### 6. **Contact Section**
- Contact form with validation
- Social media links
- Contact information
- Interactive elements

## 🛠️ Technologies Used

### **Frontend**
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - Modern component library
- **Lucide React** - Icon library
- **Framer Motion** - Animation library (if used)

### **Styling & Theming**
- **CSS Variables** - Dynamic theming system
- **Dark Mode** - Default dark theme with toggle
- **Responsive Design** - Mobile-first approach
- **Custom Animations** - CSS keyframes and transitions

### **Development Tools**
- **ESLint** - Code linting
- **TypeScript** - Type checking
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 🎨 Customization

### **Personal Information**
Update the following in `app/page.tsx`:
- Name and title
- Profile photo (`public/IMG_6655.jpg`)
- Bio and description
- Contact information
- Social media links

### **Projects**
Add your projects in the `projects` array:
```typescript
const projects = [
  {
    title: "Your Project Name",
    description: "Project description",
    image: "/your-screenshot.png",
    tags: ["React", "Next.js", "TypeScript"],
    github: "https://github.com/your-username/repo",
    demo: "https://your-demo.vercel.app",
    featured: true,
  }
]
```

### **Skills**
Update skills in the `skillCategories` array:
```typescript
const skillCategories = [
  {
    title: "Technical",
    icon: <Code className="h-6 w-6" />,
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "React", level: 85 },
      // Add more skills
    ],
  }
]
```

### **Styling**
- **Colors**: Update CSS variables in `app/globals.css`
- **Fonts**: Change font imports in `app/layout.tsx`
- **Animations**: Modify animation classes in `globals.css`

## 📱 Mobile Features

### **Responsive Breakpoints**
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+
- **Large Screens**: 1440px+

### **Touch Optimizations**
- Minimum 44px touch targets
- Touch-friendly navigation
- Optimized form inputs
- Smooth scrolling

## 🚀 Deployment

### **Vercel (Recommended)**
1. Connect your GitHub repository
2. Configure environment variables (if needed)
3. Deploy automatically on push

### **Other Platforms**
- **Netlify**: Static site deployment
- **Railway**: Full-stack deployment
- **AWS**: S3 + CloudFront
- **DigitalOcean**: App Platform

## 📊 Performance

### **Optimizations**
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Images and components
- **Caching**: Static generation and ISR

### **Metrics**
- **Lighthouse Score**: 90+ across all categories
- **Core Web Vitals**: Excellent performance
- **Bundle Size**: Optimized JavaScript bundles
- **Load Time**: Fast initial page load

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Udit Mittal**
- **Email**: meet.uditmittal@gmail.com
- **LinkedIn**: [linkedin.com/in/meetudit](https://www.linkedin.com/in/meetudit)
- **GitHub**: [github.com/Udit2606](https://github.com/Udit2606)
- **Location**: Saharanpur, Uttar Pradesh, India

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS
- **Shadcn/UI** - For the beautiful components
- **Vercel** - For the deployment platform
- **VIT University** - For the educational foundation

---

**Made with ❤️ by Udit Mittal - B.Tech CSE Student at VIT**

*Last updated: September 2025*

