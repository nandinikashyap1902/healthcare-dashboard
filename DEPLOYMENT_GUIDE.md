# Healthcare Dashboard Deployment Guide

This guide will help you deploy the Healthcare Dashboard to a static site hosting provider as required in the assignment.

## Prerequisites

- Node.js and npm installed
- Git installed
- GitHub account (or other Git hosting service like GitLab or Bitbucket)
- Account on a static site hosting provider (Vercel, Netlify, etc.)

## Step 1: Initialize Git Repository

The project already has a Git repository initialized. If you need to initialize it again, run:

```bash
git init
git add .
git commit -m "Initial dashboard setup"
```

## Step 2: Create Remote Git Repository

1. Go to GitHub (or GitLab/Bitbucket)
2. Create a new public repository
3. Follow the instructions to push your existing repository to GitHub:

```bash
git remote add origin https://github.com/yourusername/healthcare-dashboard.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy to a Static Site Provider

### Option 1: Vercel (Recommended)

1. Create an account on [Vercel](https://vercel.com) if you don't have one
2. Install Vercel CLI: `npm install -g vercel`
3. Run `vercel` in the project directory and follow the prompts
4. For subsequent deployments, run `vercel --prod`

### Option 2: Netlify

1. Create an account on [Netlify](https://netlify.com) if you don't have one
2. Install Netlify CLI: `npm install -g netlify-cli`
3. Run `netlify deploy` in the project directory and follow the prompts
4. For production deployment: `netlify deploy --prod`

### Option 3: GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/healthcare-dashboard",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run `npm run deploy`

## Step 4: Fill Out the Submission Form

1. Go to the provided form link: https://forms.cloud.microsoft/r/uQavtsVDa7
2. Provide the public Git Repository Link for your project
3. Provide the Live Website URL for your hosted application

## Testing the Production Build Locally

To test the production build locally before deployment:

```bash
npm run build
npx serve -s build
```

Then open http://localhost:5000 in your browser.
