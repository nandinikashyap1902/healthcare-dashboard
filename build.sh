#!/bin/bash

# Build script for Healthcare Dashboard
echo "Building Healthcare Dashboard for production..."

# Install dependencies
npm install

# Build the application
npm run build

# Display build completion message
echo "Build completed successfully!"
echo "The production-ready files are located in the 'build' directory."
echo ""
echo "To deploy this application:"
echo "1. Use Vercel: npx vercel"
echo "2. Use Netlify: npx netlify deploy"
echo "3. Use GitHub Pages: Follow the GitHub Pages setup for React SPAs"
echo ""
echo "For local testing of the production build:"
echo "npx serve -s build"
