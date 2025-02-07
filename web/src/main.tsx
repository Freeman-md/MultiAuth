import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PublicClientApplication } from '@azure/msal-browser'
import { msalConfig } from './authConfig.ts'
import { BrowserRouter } from 'react-router-dom'


const msalInstance = new PublicClientApplication(msalConfig);

await msalInstance.initialize();

console.log(await msalInstance.getAllAccounts())

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App instance={msalInstance} />
    </BrowserRouter>
  </StrictMode>,
)
