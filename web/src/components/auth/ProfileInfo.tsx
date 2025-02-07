import { useMsal } from "@azure/msal-react"
import { useEffect, useState } from "react";
import { acquireTokens } from "../../utils/authService";
import { jwtDecode } from "jwt-decode";

interface UserClaims {
    emails?: string[];
    [key: string]: any;
}

export default function ProfileInfo() {
    const { instance } = useMsal()
    const [userData, setUserData] = useState<UserClaims | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const tokens = await acquireTokens();

                const decodedToken = jwtDecode(tokens.idToken);

                setUserData(decodedToken)
            } catch (error) {
                console.error("Failed to fetch user data: ", error)
            }
        }

        fetchUserData()
    }, [])

    const handleLogout = async () => {
        await instance.logoutPopup({
            mainWindowRedirectUri: "/",
            postLogoutRedirectUri: "/"
        });
    }

    return (
        <div className="flex space-x-2 items-center">
            <span>Welcome, {userData?.given_name || "Guest"}</span>
            <button className="btn btn-primary" onClick={handleLogout}>Sign Out</button> 
        </div>
    )
}