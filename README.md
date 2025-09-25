# React + Vite


# Create Project
npm create vite@latest

# Install package
npm install 

# Install Tailwind CSS
npm install tailwindcss @tailwindcss/vite

# Configure the Vite plugin
# vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})

# Import Tailwind CSS
@import "tailwindcss";


# Config font
# upload font file Netflix
config font in index.css

@font-face {
  font-family: 'Netflix Sans';
  src: local('NeflixSans-Regular'),
    url('./font/NeflixSans-Regular.woff2') format('woff2');
}

@font-face {
  font-family: 'Netflix Sans';
  src: local('NeflixSans-Meddium'),
    url('./font/NeflixSans-Meddium.woff2') format('woff2');
  font-weight: 600;
}

@font-face {
  font-family: 'Netflix Sans';
  src: local('NeflixSans-Light'),
    url('./font/NeflixSans-Light.woff2') format('woff2');
  font-weight: 300;
}

body {
  font-family: "Netflix Sans";
}


# config font awesome

# 1. Add the React Component
npm i --save @fortawesome/react-fontawesome@latest

# 2. Using SVG Icon Packages
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons