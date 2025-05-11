import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './container/App';
import 'tachyons';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
