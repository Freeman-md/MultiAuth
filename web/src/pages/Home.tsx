import { useMsal } from "@azure/msal-react"
import { loginRequest } from "../authConfig";

export default function Home() {
    const { instance } = useMsal();

    const handleLogin = () => {
        instance.loginRedirect({
            scopes: loginRequest.scopes
        })
        .then((response) => {
            console.log("Login Successful!", response);
          })
          .catch((error) => {
            console.error("Login Failed", error);
          });
    }
    return (
        <>
            <h1>This is the home page</h1>
            <button onClick={handleLogin}>Login</button>
        </>
    )
}