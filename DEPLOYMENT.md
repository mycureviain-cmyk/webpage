# Local Deployment Guide

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git installed

## Step 1: Install Dependencies
```bash
npm install
```

This installs all required packages:
- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form
- And more...

## Step 2: Environment Setup
Create `.env.local` file (optional for development):
```bash
cp .env.example .env.local
```

## Step 3: Run Development Server
```bash
npm run dev
```

The server will start on `http://localhost:3000`

## Step 4: Open in Browser
Open your browser and navigate to:
```
http://localhost:3000
```

## 🌍 Accessing the Application

### Local Network
To access from another machine on the same network:
```
http://YOUR_LOCAL_IP:3000
```

Find your local IP:
- **Mac/Linux**: `ifconfig | grep inet`
- **Windows**: `ipconfig`

## 📝 Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Lint code
npm run lint
```

## 🔍 Debugging

### View Console Logs
Open browser DevTools: F12 or Cmd+Option+I

### Check Network Requests
- Open DevTools → Network tab
- Reload page to see all requests

### React DevTools
Install React DevTools extension for your browser to debug components

## 🎨 Customization Tips

### Change Brand Colors
Edit `tailwind.config.ts`:
```typescript
primary: { /* Change blue colors */ },
teal: { /* Change teal colors */ }
```

### Update Specialties
Edit `config/specialties.ts` to add/modify treatments

### Update Hospitals
Edit `config/hospitals.ts` to add/modify hospitals

### Update Services
Edit `config/services.ts` to add/modify services

## 📱 Testing Responsive Design

### In Browser DevTools:
1. Press F12
2. Click device icon (Cmd+Shift+M on Mac)
3. Select different devices to test

### Breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌙 Testing Dark Mode

1. Press F12
2. Search for "color scheme" in DevTools settings
3. Toggle between Light/Dark

Or add `dark` class to `<html>` in browser console:
```javascript
document.documentElement.classList.add('dark')
```

## ⚡ Performance Testing

### Lighthouse (Built-in Chrome)
1. Open DevTools → Lighthouse
2. Click "Analyze page load"

### Page Speed Insights
Visit: https://pagespeed.web.dev/

## 🐛 Common Issues & Solutions

### Port 3000 Already in Use
```bash
# Find process using port 3000
lsof -i :3000

# Kill the process
kill -9 <PID>

# Or use a different port
npm run dev -- -p 3001
```

### Module Not Found Error
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Tailwind Classes Not Working
```bash
# Rebuild CSS
npm run dev
```

### TypeScript Errors
```bash
npm run type-check
```

## 📦 Build for Production

```bash
# Create production build
npm run build

# Test production build locally
npm start
```

Visit: `http://localhost:3000`

## 🚀 Production Deployment

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option 2: Docker
```bash
# Build Docker image
docker build -t mycurovia .

# Run container
docker run -p 3000:3000 mycurovia
```

### Option 3: Heroku
```bash
heroku login
heroku create mycurovia
git push heroku main
```

### Option 4: AWS/GCP/Azure
Follow their Node.js deployment guides

## 📊 Monitoring

### View Build Output
```bash
npm run build
```

### Check Bundle Size
```bash
npm run build
# Check .next/static/chunks/ folder
```

## 🔐 Environment Variables for Production

Set these in your hosting platform:
```
NEXT_PUBLIC_API_URL=https://yourapi.com
NEXT_PUBLIC_WHATSAPP_NUMBER=your_number
SMTP_HOST=your_smtp_host
SMTP_USER=your_email
```

## 📞 Support

For issues:
1. Check `/app` folder structure
2. Verify all imports are correct
3. Run `npm run type-check`
4. Check browser console for errors
5. Review Next.js documentation: https://nextjs.org/docs

---

**Happy coding! 🚀**
