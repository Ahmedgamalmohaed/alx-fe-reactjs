# ALX React App

This is a React application setup with Vite.

## Getting Started

To get started with this project, follow these steps:

1. **Install dependencies**:
   ```bash
   npm install
React Documentation
Vite Documentation
Code
### `vite.config.js`
```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});
