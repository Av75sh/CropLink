import { Auth0Provider } from '@auth0/auth0-react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-qfz6g20ye3hasl3r.us.auth0.com"
    clientId="X5uoyymWECYHGBZ0CNXrJKsYoE1N8K84"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
);
