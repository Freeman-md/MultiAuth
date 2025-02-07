import { Configuration, LogLevel } from "@azure/msal-browser";

const ua = window.navigator.userAgent;
const msie = ua.indexOf("MSIE ");
const msie11 = ua.indexOf("Trident/");
const msedge = ua.indexOf("Edge/");
const firefox = ua.indexOf("Firefox");
const isIE = msie > 0 || msie11 > 0;
const isEdge = msedge > 0;
const isFirefox = firefox > 0;

export const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_signupsignin1",
        editProfile: "B2C_1_edit_profile"
    },
    authorities: {
        signUpSignIn: {
            authority: import.meta.env.VITE_SIGNUP_SIGNIN_AUTHORITY
        },
        editProfile: {
            authority: import.meta.env.VITE_SIGNUP_SIGNIN_AUTHORITY
        },
    },
    authorityDomain: import.meta.env.VITE_AUTHORITY_DOMAIN

}

export const msalConfig : Configuration = {
    auth: {
        clientId: import.meta.env.VITE_CLIENT_ID,
        authority: b2cPolicies.authorities.signUpSignIn.authority,
        knownAuthorities: [b2cPolicies.authorityDomain],
        redirectUri: "/",
        postLogoutRedirectUri: "/"
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: isIE || isEdge || isFirefox
    },
    system: {
        allowPlatformBroker: false,
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            }
        }
    }
}

export const loginRequest = {
    scopes: [
       import.meta.env.VITE_SCOPES_API_READ,
       import.meta.env.VITE_SCOPES_API_WRITE,
    ]
}

export const apiConfig = {
    apiUri: import.meta.env.VITE_API_URI,
    graphUri: import.meta.env.VITE_GRAPH_URI,
}