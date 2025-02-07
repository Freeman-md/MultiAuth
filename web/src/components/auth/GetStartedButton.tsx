import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";

export default function GetStartedButton() {

    const { instance } = useMsal();

    const handleLogin = () => {
        try {
            instance.loginPopup(loginRequest)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
      <div className="sm:flex sm:gap-4">
        <button
          className="btn btn-primary"
          onClick={handleLogin}
        >
          Get Started
        </button>
      </div>
    </>
  );
}
