import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

if (typeof window !== 'undefined') {
  window.addEventListener('error', (e) => {
    // Suppress benign third-party script errors (e.g. tracking pixels, GTM, YT iframe) in sandboxed preview
    if (e.message === 'Script error.' || e.message?.includes('Script error') || !e.filename) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);

  window.addEventListener('unhandledrejection', (e) => {
    if (e.reason && (e.reason.message === 'Script error.' || e.reason.message?.includes('Script error'))) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

