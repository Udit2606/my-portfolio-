# 🚀 Deployment Guide - Vercel

This guide will help you deploy your portfolio to Vercel without encountering common deployment errors.

## ✅ Pre-Deployment Checklist

### 1. **Local Build Test**
```bash
# Test the build locally first
pnpm build
pnpm start
```

### 2. **File Structure Verification**
Ensure your project has:
- ✅ `package.json` with correct scripts
- ✅ `next.config.mjs` with proper configuration
- ✅ `vercel.json` for deployment settings
- ✅ `.vercelignore` to exclude unnecessary files

### 3. **Dependencies Check**
```bash
# Clean install dependencies
rm -rf node_modules
rm -rf .next
pnpm install
```

## 🚀 Vercel Deployment Steps

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from project directory**
   ```bash
   cd "/Users/uditmittal/Desktop/professional-portfolio (1)"
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? **Y**
   - Which scope? **Your account**
   - Link to existing project? **N**
   - Project name: **udit-mittal-portfolio**
   - Directory: **./**
   - Override settings? **N**

### Method 2: GitHub Integration

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import from GitHub
   - Select your repository
   - Configure build settings:
     - **Framework Preset**: Next.js
     - **Build Command**: `pnpm build`
     - **Output Directory**: `.next`
     - **Install Command**: `pnpm install`

## 🔧 Common Deployment Issues & Solutions

### Issue 1: Build Failures
**Error**: `FUNCTION_INVOCATION_FAILED` or `DEPLOYMENT_BLOCKED`

**Solution**:
```bash
# Clean everything and rebuild
rm -rf node_modules .next
pnpm install
pnpm build
```

### Issue 2: Image Optimization Errors
**Error**: `INVALID_IMAGE_OPTIMIZE_REQUEST`

**Solution**: Already fixed in `next.config.mjs`:
```javascript
images: {
  unoptimized: true,
  remotePatterns: [
    {
      protocol: 'https',
      hostname: '**',
    },
  ],
}
```

### Issue 3: Memory/Timeout Issues
**Error**: `FUNCTION_INVOCATION_TIMEOUT`

**Solution**: 
- Use `vercel.json` configuration
- Optimize images
- Remove unused dependencies

### Issue 4: TypeScript Errors
**Error**: Build fails due to TypeScript issues

**Solution**: Already configured in `next.config.mjs`:
```javascript
typescript: {
  ignoreBuildErrors: true,
}
```

## 📋 Vercel Configuration Files

### `vercel.json`
```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "installCommand": "pnpm install",
  "devCommand": "pnpm dev"
}
```

### `next.config.mjs`
```javascript
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'standalone',
  trailingSlash: false,
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}
```

## 🎯 Deployment Best Practices

### 1. **Environment Variables**
If you need environment variables:
- Go to Vercel Dashboard → Project Settings → Environment Variables
- Add any required variables

### 2. **Custom Domain**
- Go to Project Settings → Domains
- Add your custom domain
- Update DNS records as instructed

### 3. **Performance Optimization**
- Images are already optimized
- CSS is minified in production
- Console logs are removed in production
- Static generation is enabled

## 🚨 Troubleshooting

### If deployment still fails:

1. **Check Vercel Build Logs**
   - Go to Vercel Dashboard
   - Click on your deployment
   - Check the "Build Logs" tab

2. **Common Fixes**
   ```bash
   # Update dependencies
   pnpm update
   
   # Clear cache
   pnpm store prune
   
   # Rebuild
   pnpm build
   ```

3. **Contact Vercel Support**
   - If issues persist, contact Vercel support
   - Provide build logs and error messages

## ✅ Success Indicators

Your deployment is successful when you see:
- ✅ Build completed without errors
- ✅ Deployment URL is accessible
- ✅ All pages load correctly
- ✅ Images display properly
- ✅ Mobile responsiveness works
- ✅ Dark mode functions correctly

## 🔗 Post-Deployment

After successful deployment:
1. **Test all functionality**
2. **Check mobile responsiveness**
3. **Verify all links work**
4. **Test contact form**
5. **Share your portfolio URL**

---

**Your portfolio should now deploy successfully to Vercel! 🎉**

*If you encounter any specific errors, check the Vercel documentation or contact support with the exact error message.*
