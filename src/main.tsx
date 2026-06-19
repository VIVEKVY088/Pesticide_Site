import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Add skip-to-content link for accessibility
const skipLink = document.createElement('a');
skipLink.href = '#home';
skipLink.className = 'skip-to-content';
skipLink.textContent = 'Skip to main content';
document.body.prepend(skipLink);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
