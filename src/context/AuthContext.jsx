import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    const login = (newToken) => {
        setToken(newToken);
        localStorage.setItem('token', newToken); // Guarda el token en localStorage
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem('token'); // Elimina el token de localStorage
    };

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};