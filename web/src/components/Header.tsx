import { useIsAuthenticated } from "@azure/msal-react";
import GetStartedButton from "./auth/GetStartedButton";
import ProfileInfo from "./auth/ProfileInfo";
import { Link } from "react-router-dom";

export default function Header() {
  const isAuthenticated = useIsAuthenticated();

  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link to="/">
          <img src="/svgs/logo.svg" alt="MultiAuth" className="w-40" />
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm"></ul>
          </nav>

          <div className="flex items-center gap-4">
            {!isAuthenticated ? <GetStartedButton /> : <ProfileInfo />}
          </div>
        </div>
      </div>
    </header>
  );
}
