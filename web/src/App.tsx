import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";
import Home from "./pages/Home";
import { PageLayout } from "./layouts/default";

interface AppProps {
  instance: PublicClientApplication;
}

function App({ instance }: AppProps) {
  return (
    <MsalProvider instance={instance}>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>
    </MsalProvider>
  );
}

export default App;
