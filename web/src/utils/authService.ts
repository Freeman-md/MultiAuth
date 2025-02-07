import { loginRequest } from "../authConfig";
import { msalInstance } from "../main"

export const acquireTokens = async () => {
    const account = msalInstance.getAllAccounts()[0]

    if (!account) throw new Error("No active account! User is not logged in");

    const request = {
        scopes: [...loginRequest.scopes],
        account: account,
    }

    try {
        const response = await msalInstance.acquireTokenSilent(request);
        return {
            accessToken: response.accessToken,
            idToken: response.idToken
        };
    } catch (error) {
        console.error("Silent token acquisition failed, redirecting to login", error);
        throw error
    }
}

export const apiRequest = async (url: string, method: string = "GET", data: object | null = null) => {
    const tokens = await acquireTokens();

    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokens.accessToken}`,
        },
        body: data ? JSON.stringify(data) : null,
    }

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`)
        }

        return await response.json();
    } catch (error) {
        console.error("API request failed:", error);
        throw error;
    }
};
