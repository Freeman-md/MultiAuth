import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PublicClientApplication } from '@azure/msal-browser'
import { msalConfig } from './authConfig.ts'
import { BrowserRouter } from 'react-router-dom'


export const msalInstance = new PublicClientApplication(msalConfig);

await msalInstance.initialize();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App instance={msalInstance} />
    </BrowserRouter>
  </StrictMode>
)
