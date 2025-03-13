import React, { useState } from 'react';
import { login } from '../api/api';
import { useAuth } from '../hooks/useAuth';

function Login() {
    const { login: setAuthToken } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await login(username, password);
            setAuthToken(data.access_token);
            setError('');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Iniciar Sesión</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
}

export default Login;
