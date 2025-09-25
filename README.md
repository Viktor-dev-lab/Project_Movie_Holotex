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