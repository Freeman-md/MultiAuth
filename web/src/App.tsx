import { PublicClientApplication } from '@azure/msal-browser'
import './App.css'
import { MsalProvider } from '@azure/msal-react'
import Pages from './pages'

interface AppProps {
  instance: PublicClientApplication
}

function App({
  instance
} : AppProps) {

  return (
    <MsalProvider instance={instance}>
      <div>
        <header>This is the header of the app</header>
        <Pages></Pages>
        <footer>This is the footer of the app</footer>
      </div>
    </MsalProvider>
  )
}

export default App
