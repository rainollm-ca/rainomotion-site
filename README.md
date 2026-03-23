# Rainomotion — Digital Solutions for Medical Services

A modern, bilingual (English/Arabic) single-page website for Rainomotion, showcasing digital solutions for medical services.

## Features

- 🌍 Bilingual support (English/Arabic) with RTL
- ⚡ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 📱 Fully responsive design
- 🚀 Static export for fast deployment
- 🐳 Docker support

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Docker

```bash
docker build -t rainomotion-site .
docker run -p 3000:3000 rainomotion-site
```

## Deployment on Coolify

1. Push to GitHub
2. Connect repo in Coolify
3. Coolify will auto-detect Dockerfile
4. Deploy to rainomotion.com
