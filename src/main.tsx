import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import './main.css';
import Root from './frontend/pages/Root/Root';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root/>
  </StrictMode>,
);
