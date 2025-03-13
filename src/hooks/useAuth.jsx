import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useAuth = () => {
    const context = useContext(AuthContext);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            context.login(token); // Establece el token en el contexto
        }
        setIsInitialized(true);
    }, [context]);

    return { ...context, isInitialized };
};
