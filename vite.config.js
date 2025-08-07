import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'src/index.html',
        destinations: 'src/destinations.html',
        contact: 'src/contact.html',
        lisbon: 'src/lisbon.html',
        rome: 'src/rome.html',
        chiangmai: 'src/chiangmai.html',
        tokyo: 'src/tokyo.html',
        newyork: 'src/newyork.html',
        lebanon: 'src/lebanon.html'
      }
    }
  },
  server: {
    open: '/index.html'
  }
});
