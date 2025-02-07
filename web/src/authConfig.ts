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
            authority: "https://multiauth.b2clogin.com/multiauth.onmicrosoft.com/B2C_1_signupsignin1"
        },
        editProfile: {
            authority: "https://multiauth.b2clogin.com/multiauth.onmicrosoft.com/B2C_1_signupsignin1"
        },
    },
    authorityDomain: "multiauth.b2clogin.com"

}

export const msalConfig : Configuration = {
    auth: {
        clientId: "ef86e526-1e99-4e8e-996d-2a8aea66c792",
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
       "properties.Read",
       "properties.Write",
       
    ]
}

export const apiConfig = {
    scopes: [
        "https://multiauth.onmicrosoft.com/api/properties.read",
        "https://multiauth.onmicrosoft.com/api/properties.write",
    ],
    uri: "https://multiauth.onmicrosoft.com/api"
}