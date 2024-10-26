import { createContext, useState } from 'react';

export const AuthContext = createContext({
    isAuthenticated: false,
    user: {
        role: "",
        name: ""
    }
});

export const AuthWrapper = (props) => {
    const [auth, setAuth] = useState({
        isAuthenticated: false,
        user: {
            role: "",
            name: ""
        },
        appLoading: false,
    
    });

    const [appLoading, setAppLoading] = useState(false);

    return (
        <AuthContext.Provider value={{
            auth, setAuth, appLoading, setAppLoading
        }}>
            {props.children}
        </AuthContext.Provider>
    );
}